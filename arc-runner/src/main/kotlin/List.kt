// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package ai.ancf.lmos.arc.runner

import picocli.CommandLine.Command

@Command(
    name = "list",
    mixinStandardHelpOptions = true,
    description = ["Lists the Agents that are installed in HOME."],
)
class ListAgents : Runnable {

    override fun run() {
        println("The following Agents are installed:")
        home().listFiles()?.forEach { file ->
            if (file.getName().endsWith(".agent.kts")) {
                println("- " + file.getName().replace(".agent.kts", ""))
            }
        }
    }
}
