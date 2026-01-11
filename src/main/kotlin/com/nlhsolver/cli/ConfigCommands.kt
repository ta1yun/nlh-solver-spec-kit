package com.nlhsolver.cli

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.subcommands
import com.github.ajalt.clikt.parameters.arguments.argument
import com.github.ajalt.clikt.parameters.options.*
import com.github.ajalt.clikt.parameters.types.int
import com.github.ajalt.clikt.parameters.types.long
import com.github.ajalt.clikt.parameters.types.double
import com.nlhsolver.poker.Position
import com.nlhsolver.solver.*
import com.nlhsolver.storage.ConfigurationRepository
import java.util.UUID

/**
 * Config command group (T070-T072).
 *
 * Subcommands:
 * - create: Create a new configuration
 * - list: List all configurations
 * - get: Get a specific configuration
 */
class ConfigCommand : CliktCommand(
    name = "config",
    help = "Manage solve configurations"
) {
    init {
        subcommands(ConfigCreateCommand(), ConfigListCommand(), ConfigGetCommand())
    }

    override fun run() {}
}

/**
 * Create a new configuration (T070).
 */
class ConfigCreateCommand : CliktCommand(
    name = "create",
    help = "Create a new solve configuration"
) {
    private val name by option("--name", help = "Configuration name").default("Untitled Solve")
    private val players by option("--players", help = "Number of players (2-6)").int().required()
    private val stacks by option("--stacks", help = "Stack sizes (e.g., 'BTN:100,BB:100')").required()
    private val position by option("--position", help = "Starting position").required()
    private val targetExploitability by option("--target-exploit", help = "Target exploitability (%)").double().default(0.5)
    private val maxIterations by option("--max-iterations", help = "Maximum iterations").long().default(5_000_000)
    private val evaluationFrequency by option("--eval-freq", help = "Evaluation frequency").int().default(10_000)
    private val timeoutHours by option("--timeout", help = "Timeout in hours").int()
    private val betSizes by option("--bet-sizes", help = "Bet sizes (e.g., '0.5x,1.0x,ALL_IN')").default("0.5x,1.0x,ALL_IN")
    private val json by option("--json", help = "Output in JSON format").flag()

    override fun run() {
        val repository = ConfigurationRepository()

        try {
            // Parse stack sizes
            val stackSizesMap = parseStackSizes(stacks)

            // Parse bet sizes
            val betSizesList = parseBetSizes(betSizes)

            // Create configuration
            val config = SolveConfiguration(
                name = name,
                numPlayers = players,
                stackSizes = stackSizesMap,
                startingPosition = Position.valueOf(position.uppercase()),
                convergenceCriteria = ConvergenceCriteria(
                    targetExploitability = targetExploitability,
                    maxIterations = maxIterations,
                    evaluationFrequency = evaluationFrequency,
                    timeoutHours = timeoutHours
                ),
                betSizingScheme = BetSizingScheme(betSizesList)
            )

            // Validate
            val validationResult = ConfigurationValidator.validate(config)
            if (validationResult is ValidationResult.Failure) {
                echo(OutputFormatter.formatError("Validation failed: ${validationResult.errors.joinToString(", ")}"))
                return
            }

            // Save
            val saved = repository.save(config)

            // Output
            val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
            echo(OutputFormatter.formatConfiguration(saved, format))
            echo()
            echo(OutputFormatter.formatSuccess("Configuration created: ${saved.configId}"))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Failed to create configuration"))
        }
    }

    private fun parseStackSizes(stacksStr: String): Map<Position, Double> {
        return stacksStr.split(",").associate { entry ->
            val (pos, stack) = entry.split(":")
            Position.valueOf(pos.uppercase()) to stack.toDouble()
        }
    }

    private fun parseBetSizes(betSizesStr: String): List<BetSize> {
        return betSizesStr.split(",").map { size ->
            when {
                size.uppercase() == "ALL_IN" -> BetSize.AllIn
                size.endsWith("x") -> BetSize.PotRelative(size.dropLast(1).toDouble())
                else -> BetSize.PotRelative(size.toDouble())
            }
        }
    }
}

/**
 * List all configurations (T071).
 */
class ConfigListCommand : CliktCommand(
    name = "list",
    help = "List all configurations"
) {
    private val json by option("--json", help = "Output in JSON format").flag()

    override fun run() {
        val repository = ConfigurationRepository()

        try {
            val configs = repository.findAll()

            if (configs.isEmpty()) {
                echo("No configurations found")
                return
            }

            val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
            echo(OutputFormatter.formatList(
                items = configs,
                title = "Configurations",
                formatter = { config ->
                    if (json) {
                        OutputFormatter.formatConfiguration(config, format)
                    } else {
                        buildString {
                            appendLine("  ${config.name} (${config.configId})")
                            appendLine("    Players: ${config.numPlayers}, Target: ${config.convergenceCriteria.targetExploitability}%")
                        }
                    }
                },
                format = format
            ))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Failed to list configurations"))
        }
    }
}

/**
 * Get a specific configuration (T072).
 */
class ConfigGetCommand : CliktCommand(
    name = "get",
    help = "Get a specific configuration"
) {
    private val configId by argument(help = "Configuration ID")
    private val json by option("--json", help = "Output in JSON format").flag()

    override fun run() {
        val repository = ConfigurationRepository()

        try {
            val id = UUID.fromString(configId)
            val config = repository.findById(id)

            if (config == null) {
                echo(OutputFormatter.formatError("Configuration not found: $configId"))
                return
            }

            val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
            echo(OutputFormatter.formatConfiguration(config, format))
        } catch (e: IllegalArgumentException) {
            echo(OutputFormatter.formatError("Invalid configuration ID: $configId"))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Failed to get configuration"))
        }
    }
}
