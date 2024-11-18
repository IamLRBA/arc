// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package ai.ancf.lmos.arc.gradle.plugin

import org.gradle.api.DefaultTask
import org.gradle.api.file.Directory
import org.gradle.api.tasks.InputDirectory
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.TaskAction
import java.io.File
import kotlin.text.Charsets.UTF_8

/**
 * Converts agent and function scripts into Kotlin code.
 */
open class GenerateAgentCodeTask : DefaultTask() {

    @get:InputDirectory
    lateinit var input: Directory

    @Internal // @get:OutputDirectory
    lateinit var output: Directory

    @TaskAction
    fun deploy() {
        println("Generating Agent code...")

        val agentCode = Code()
        input.asFileTree.filter {
            it.name.endsWith(".agent.kts")
        }.forEach { writeCode(it, agentCode, "agent\\s*\\{.*") }
        write("Agents.kt", agentCode, "AgentTemplate.kt")

        val functionCode = Code()
        input.asFileTree.filter {
            it.name.endsWith(".functions.kts")
        }.forEach { writeCode(it, functionCode, "function\\s*\\(.*") }
        write("Functions.kt", functionCode, "FunctionTemplate.kt")
    }

    private fun write(name: String, code: Code, template: String) {
        File(output.asFile, name).writeText(
            readTemplate(template)
                .replace("//@@IMPORTS@@", code.imports.joinToString(""))
                .replace("//@@CODE@@", code.code)
                .replace("//@@FUNCTIONS@@", code.functions)
        )
    }

    private fun writeCode(file: File, code: Code, codeStart: String) {
        var reading: String? = null
        file.readLines(charset = UTF_8).forEach { line ->
            if (line.trim().startsWith("fun ")) {
                code.functions += line + "\n"
                reading = "fun"
            } else if (line.trim().matches(codeStart.toRegex())) {
                code.code += line + "\n"
                reading = "code"
            } else if (reading != null) {
                when (reading) {
                    "fun" -> code.functions += line + "\n"
                    "code" -> code.code += line + "\n"
                }
            } else if (line.trim().startsWith("import ")) {
                code.imports += line + "\n"
            }
        }
    }

    private fun readTemplate(name: String): String {
        return Thread.currentThread().contextClassLoader.getResource(name)?.readText()!!
    }
}

data class Code(
    var imports: Set<String> = emptySet(),
    var code: String = "",
    var functions: String = ""
)


