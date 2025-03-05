// SPDX-FileCopyrightText: 2025 Deutsche Telekom AG and others
//
// SPDX-License-Identifier: Apache-2.0

package org.eclipse.lmos.arc.agents.dsl

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import org.eclipse.lmos.arc.agents.conversation.Conversation
import org.eclipse.lmos.arc.agents.conversation.ConversationMessage
import org.eclipse.lmos.arc.agents.dsl.extensions.emit
import org.eclipse.lmos.arc.agents.dsl.extensions.tracer
import org.eclipse.lmos.arc.agents.events.BaseEvent
import org.eclipse.lmos.arc.agents.events.Event
import java.util.concurrent.atomic.AtomicReference
import kotlin.reflect.KClass
import kotlin.time.Duration
import kotlin.time.measureTime

/**
 * Context for filtering messages before being processed by an Agent.
 */
context(CoroutineScope)
class InputFilterContext(
    scriptingContext: DSLContext,
    @Volatile var input: Conversation,
) : FilterContext(scriptingContext) {

    /**
     * The input message.
     */
    var inputMessage
        get() = input.transcript.last()
        set(message) {
            val updatedConversation = input.removeLast()
            input = updatedConversation + message
        }

    var message
        get() = inputMessage.content
        set(message) {
            inputMessage = inputMessage.update(message)
        }

    override suspend fun map(filter: suspend (ConversationMessage) -> ConversationMessage?) {
        input = input.map { msg -> filter(msg) }
    }

    override suspend fun mapLatest(filter: suspend (ConversationMessage) -> ConversationMessage?) {
        input = input.mapLatest { msg -> filter(msg) }
    }

    /**
     * Runs a block of code asynchronously.
     */
    fun runAsync(fn: suspend InputFilterContext.() -> Unit) {
        val job = async {
            fn()
        }
        jobs.updateAndGet { it + job }
    }
}

/**
 * Context for filtering messages after being processed by an Agent.
 */
context(CoroutineScope)
class OutputFilterContext(
    scriptingContext: DSLContext,
    val input: Conversation,
    @Volatile var output: Conversation,
    val systemPrompt: String,
) : FilterContext(scriptingContext) {

    /**
     * The message generated by the Agent.
     */
    var outputMessage
        get() = output.transcript.last()
        set(message) {
            output = input + message
        }

    var message
        get() = outputMessage.content
        set(message) {
            outputMessage = outputMessage.update(message)
        }

    override suspend fun map(filter: suspend (ConversationMessage) -> ConversationMessage?) {
        output = output.map { msg -> filter(msg) }
    }

    override suspend fun mapLatest(filter: suspend (ConversationMessage) -> ConversationMessage?) {
        output = output.mapLatest { msg -> filter(msg) }
    }

    /**
     * Runs a block of code asynchronously.
     */
    fun runAsync(fn: suspend OutputFilterContext.() -> Unit) {
        val job = async {
            fn()
        }
        jobs.updateAndGet { it + job }
    }
}

context(CoroutineScope)
abstract class FilterContext(scriptingContext: DSLContext) : DSLContext by scriptingContext {

    protected val jobs = AtomicReference<List<Deferred<Unit>>>(emptyList())

    suspend infix fun String.replaces(s: String) = this@FilterContext.mapLatest { message ->
        trace("Replace $s with ${this@replaces}") {
            message.update(message.content.replace(s, this@replaces))
        }
    }

    suspend infix fun String.replaces(s: Regex) = this@FilterContext.mapLatest { message ->
        trace("Replace $s with ${this@replaces}") {
            message.update(message.content.replace(s, this@replaces))
        }
    }

    suspend operator fun String.unaryMinus() {
        this@FilterContext.mapLatest { message ->
            trace("Remove ${this@unaryMinus}") {
                message.update(message.content.replace(this@unaryMinus, ""))
            }
        }
    }

    suspend operator fun Regex.unaryMinus() {
        this@FilterContext.mapLatest { message ->
            trace("Remove ${this@unaryMinus}") {
                message.update(message.content.replace(this@unaryMinus, ""))
            }
        }
    }

    suspend operator fun AgentFilter.unaryPlus() {
        this@FilterContext.mapLatest { msg ->
            trace(this@unaryPlus::class.simpleName ?: "unknown") { filter(msg) }
        }
    }

    suspend operator fun KClass<out AgentFilter>.unaryPlus() {
        this@FilterContext.mapLatest { msg ->
            trace(this@unaryPlus::class.simpleName ?: "unknown") {
                context(this@unaryPlus).filter(msg)
            }
        }
    }

    /**
     * Maps all message in a Conversation transcript.
     */
    abstract suspend fun map(filter: suspend (ConversationMessage) -> ConversationMessage?)

    /**
     * Maps the latest message in a Conversation transcript.
     */
    abstract suspend fun mapLatest(filter: suspend (ConversationMessage) -> ConversationMessage?)

    /**
     * Runs all pending asynchronous jobs.
     */
    suspend fun finish() {
        awaitAll(*jobs.get().toTypedArray())
    }
}

/**
 * Filters are used to modify or remove messages from the conversation transcript.
 */
fun interface AgentFilter {

    /**
     * Filters or transform Conversation Messages.
     * If the fun returns null, the message will be removed from the conversation transcript.
     */
    suspend fun filter(message: ConversationMessage): ConversationMessage?
}

/**
 * Events
 */
sealed class FilterEvent : Event by BaseEvent()

data class FilterExecutedEvent(
    val name: String,
    val duration: Duration,
    val output: String? = null,
) : FilterEvent()

/**
 * Add tracing and log events for each filter execution.
 */
private suspend fun <T> DSLContext.trace(name: String, fn: suspend DSLContext.() -> T): T {
    var result: T? = null
    var output = ""
    val tracer = tracer()
    val duration = tracer.withSpan("filter $name", mapOf("filter" to (name), "step" to (name))) { tags, _ ->
        measureTime {
            result = fn()
            output = if (result is ConversationMessage) (result as ConversationMessage).content else result.toString()
            tags.tag("output", output)
        }
    }
    emit(FilterExecutedEvent(name, duration, output = output))
    return result!!
}
