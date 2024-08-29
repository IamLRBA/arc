// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package ai.ancf.lmos.arc.spring

import ai.ancf.lmos.arc.agents.ArcException
import ai.ancf.lmos.arc.agents.conversation.AssistantMessage
import ai.ancf.lmos.arc.agents.conversation.ConversationMessage
import ai.ancf.lmos.arc.agents.functions.LLMFunction
import ai.ancf.lmos.arc.agents.llm.ChatCompleter
import ai.ancf.lmos.arc.agents.llm.ChatCompleterProvider
import ai.ancf.lmos.arc.agents.llm.ChatCompletionSettings
import ai.ancf.lmos.arc.agents.llm.TextEmbedder
import ai.ancf.lmos.arc.agents.llm.TextEmbedderProvider
import ai.ancf.lmos.arc.agents.llm.TextEmbedding
import ai.ancf.lmos.arc.agents.llm.TextEmbeddings
import ai.ancf.lmos.arc.core.result
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
open class TestApplication {

    @Bean
    open fun chatCompleterProvider() = ChatCompleterProvider {
        object : ChatCompleter {
            override suspend fun complete(
                messages: List<ConversationMessage>,
                functions: List<LLMFunction>?,
                settings: ChatCompletionSettings?,
            ) = result<AssistantMessage, ArcException> {
                functions?.forEach { function ->
                    function.execute(mapOf("param" to "test"))
                }
                AssistantMessage("Hello!")
            }
        }
    }

    @Bean
    open fun textEmbedderProvider() = TextEmbedderProvider {
        object : TextEmbedder {
            override suspend fun embed(texts: List<String>) = result<TextEmbeddings, ArcException> {
                TextEmbeddings(embeddings = texts.map { TextEmbedding(it, listOf(0.0, 0.1)) })
            }
        }
    }

    @Bean
    open fun myAgent(agent: Agents) = agent {
        name = "agentBean"
        systemPrompt = { "you are a helpful agent that tell funny jokes." }
        description = "Test"
    }

    @Bean
    open fun myFunction(function: Functions) = function(
        name = "get_weather_bean",
        description = "Returns real-time weather information for any location",
    ) {
        """
        The weather is good in Berlin. It is 20 degrees celsius.
    """
    }
}
