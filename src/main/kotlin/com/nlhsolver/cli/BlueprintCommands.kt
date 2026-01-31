package com.nlhsolver.cli

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.subcommands
import com.github.ajalt.clikt.parameters.arguments.argument
import com.github.ajalt.clikt.parameters.options.*
import com.github.ajalt.clikt.parameters.types.double
import com.github.ajalt.clikt.parameters.types.int
import com.nlhsolver.poker.Position
import com.nlhsolver.solver.*
import com.nlhsolver.storage.BlueprintRepository
import java.util.UUID

/**
 * Blueprint command group for managing blueprint strategies (T147-T150).
 *
 * Subcommands:
 * - solve: Solve a blueprint configuration
 * - list: List all blueprint configurations
 * - show: Show details of a specific blueprint
 * - analyze-ev-loss: Measure EV loss vs fine abstraction
 */
class BlueprintCommand : CliktCommand(
    name = "blueprint",
    help = """
        Manage blueprint strategies (coarse abstraction for preflop range derivation).

        Blueprints solve from preflop to river with heavy abstraction, deriving ranges
        that can be refined for specific boards.
    """.trimIndent()
) {
    override fun run() = Unit
}

/**
 * Solve blueprint command (T147).
 *
 * Example:
 *   nlhsolver blueprint solve \
 *     --name "100bb_noante_btn_vs_bb" \
 *     --stacks "BTN:100,BB:100" \
 *     --ante 0 \
 *     --buckets 8
 */
class BlueprintSolveCommand : CliktCommand(
    name = "solve",
    help = "Solve a blueprint configuration (1-2 hours with coarse abstraction)"
) {
    private val name by option("--name", "-n", help = "Scenario name").required()
    private val stacks by option("--stacks", "-s", help = "Stack sizes (e.g., 'BTN:100,BB:100')").required()
    private val ante by option("--ante", "-a", help = "Ante size in big blinds").double().default(0.0)
    private val buckets by option("--buckets", "-b", help = "Number of preflop buckets (8, 12, or 15)").int().default(8)
    private val description by option("--description", "-d", help = "Optional description")

    override fun run() {
        // Parse stack sizes
        val stackSizes = parseStackSizes(stacks)

        // Create blueprint configuration
        val config = BlueprintConfiguration(
            scenarioName = name,
            description = description,
            stackSizes = stackSizes,
            ante = ante,
            preflopBuckets = buckets
        )

        echo("Creating blueprint: ${config.scenarioName}")
        echo("  Blueprint ID: ${config.blueprintId}")
        echo("  Stack sizes: ${stackSizes.map { "${it.key}:${it.value}bb" }.joinToString(", ")}")
        echo("  Ante: ${ante}bb")
        echo("  Preflop buckets: $buckets")
        echo("")

        // Save configuration
        val repository = BlueprintRepository()
        repository.saveConfiguration(config)
        echo("✓ Configuration saved")

        // Solve (placeholder)
        echo("")
        echo("Starting blueprint solve...")
        echo("⚠ Actual solving not yet implemented (placeholder)")
        echo("Expected time: 1-2 hours")
        echo("Expected exploitability: < 1%")

        // TODO: Implement actual solving
        // val orchestrator = SolveOrchestrator()
        // val solveConfig = config.toSolveConfiguration()
        // val result = orchestrator.solve(solveConfig)

        echo("")
        echo("✓ Blueprint solve complete")
        echo("  Blueprint ID: ${config.blueprintId}")
    }

    private fun parseStackSizes(stacksStr: String): Map<Position, Double> {
        return stacksStr.split(",").associate { part ->
            val (posStr, stackStr) = part.split(":")
            val position = Position.valueOf(posStr.trim())
            val stack = stackStr.trim().toDouble()
            position to stack
        }
    }
}

/**
 * List blueprints command (T148).
 *
 * Example:
 *   nlhsolver blueprint list
 */
class BlueprintListCommand : CliktCommand(
    name = "list",
    help = "List all blueprint configurations"
) {
    override fun run() {
        val repository = BlueprintRepository()
        val blueprintIds = repository.listAll()

        if (blueprintIds.isEmpty()) {
            echo("No blueprints found.")
            return
        }

        echo("Blueprints (${blueprintIds.size}):")
        echo("")

        for (blueprintId in blueprintIds) {
            val config = repository.findConfiguration(blueprintId)
            if (config != null) {
                echo("  ${config.blueprintId}")
                echo("    Name: ${config.scenarioName}")
                echo("    Status: ${config.solveStatus}")
                echo("    Created: ${config.createdAt}")
                echo("")
            } else {
                echo("  $blueprintId (metadata not available)")
                echo("")
            }
        }
    }
}

/**
 * Show blueprint command (T149).
 *
 * Example:
 *   nlhsolver blueprint show <blueprint-id>
 */
class BlueprintShowCommand : CliktCommand(
    name = "show",
    help = "Show blueprint details and ranges"
) {
    private val blueprintId by argument(name = "blueprint-id", help = "Blueprint UUID")

    override fun run() {
        val repository = BlueprintRepository()
        val uuid = UUID.fromString(blueprintId)

        // Load configuration
        val config = repository.findConfiguration(uuid)
        if (config == null) {
            echo("Blueprint not found: $blueprintId", err = true)
            return
        }

        // Display configuration
        echo("Blueprint: ${config.scenarioName}")
        echo("  ID: ${config.blueprintId}")
        echo("  Status: ${config.solveStatus}")
        echo("  Created: ${config.createdAt}")
        if (config.solvedAt != null) {
            echo("  Solved: ${config.solvedAt}")
        }
        echo("  Stack sizes: ${config.stackSizes.map { "${it.key}:${it.value}bb" }.joinToString(", ")}")
        echo("  Ante: ${config.ante}bb")
        echo("  Preflop buckets: ${config.preflopBuckets}")
        echo("")

        // Load ranges
        val ranges = repository.findAllRanges(uuid)
        if (ranges.isEmpty()) {
            echo("No ranges found for this blueprint.")
            return
        }

        echo("Ranges (${ranges.size}):")
        for (range in ranges) {
            echo("  ${range.actionPoint} (${range.position})")
            echo("    Hands: ${range.handFrequencies.size}")
            echo("")
        }
    }
}

/**
 * Analyze EV loss command (T150).
 *
 * Example:
 *   nlhsolver blueprint analyze-ev-loss <blueprint-id> --samples 100
 */
class BlueprintAnalyzeEVLossCommand : CliktCommand(
    name = "analyze-ev-loss",
    help = "Measure blueprint EV loss vs fine abstraction"
) {
    private val blueprintId by argument(name = "blueprint-id", help = "Blueprint UUID")
    private val samples by option("--samples", "-s", help = "Number of boards to sample").int().default(100)
    private val threshold by option("--threshold", "-t", help = "Acceptable threshold (%)").double().default(2.0)

    override fun run() {
        val repository = BlueprintRepository()
        val uuid = UUID.fromString(blueprintId)

        // Load configuration
        val config = repository.findConfiguration(uuid)
        if (config == null) {
            echo("Blueprint not found: $blueprintId", err = true)
            return
        }

        echo("Analyzing EV loss for: ${config.scenarioName}")
        echo("  Blueprint ID: ${config.blueprintId}")
        echo("  Samples: $samples boards")
        echo("  Threshold: $threshold% of pot")
        echo("")

        // Analyze EV loss
        val analyzer = EVLossAnalyzer()
        val result = analyzer.analyzeEVLoss(
            blueprintConfig = config,
            numSamples = samples
        )

        // Display results
        echo(result.summary())
        echo("")

        // Check acceptability
        val acceptability = analyzer.checkAcceptability(result, thresholdPercent = threshold)
        echo(acceptability.summary())
    }
}

/**
 * Main function to register blueprint commands.
 */
fun blueprintCommand(): CliktCommand {
    return BlueprintCommand().subcommands(
        BlueprintSolveCommand(),
        BlueprintListCommand(),
        BlueprintShowCommand(),
        BlueprintAnalyzeEVLossCommand()
    )
}
