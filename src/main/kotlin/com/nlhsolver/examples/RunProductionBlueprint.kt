package com.nlhsolver.examples

import com.nlhsolver.poker.Position
import com.nlhsolver.solver.BlueprintConfiguration
import com.nlhsolver.solver.BlueprintSolver
import com.nlhsolver.storage.BlueprintRepository
import java.time.Instant
import java.time.Duration

/**
 * Run a production blueprint solve for 100bb heads-up scenario.
 *
 * This is a REAL blueprint solve with:
 * - All 1,326 hand matchups (no limits)
 * - 10 million max iterations
 * - < 1% exploitability target
 * - Expected time: 1-2 hours
 *
 * Run this in tmux or screen to survive terminal closure:
 *   tmux new -s blueprint-solve
 *   ./gradlew run --args="production-blueprint"
 *   # Ctrl+B then D to detach
 *   # Later: tmux attach -t blueprint-solve
 */
fun main() {
    println("=" * 80)
    println("PRODUCTION BLUEPRINT SOLVE - 100bb Heads-Up No Ante")
    println("=" * 80)
    println()
    println("⚠️  WARNING: This will take 1-2 HOURS to complete!")
    println()
    println("Configuration:")
    println("  - All 1,326 hand matchups (no limits)")
    println("  - Full game tree: Preflop → Flop → Turn → River")
    println("  - 8 preflop buckets (coarse abstraction)")
    println("  - Target exploitability: < 1%")
    println("  - Max iterations: 10 million")
    println()
    println("To run this safely:")
    println("  1. Use tmux: tmux new -s blueprint")
    println("  2. Or run in Docker with restart policy")
    println("  3. Monitor logs: tail -f logs/nlhsolver.log")
    println()
    print("Continue? (yes/no): ")

    val response = readLine()?.trim()?.lowercase()
    if (response != "yes" && response != "y") {
        println("Aborted.")
        return
    }

    println()
    println("Starting production blueprint solve...")
    println()

    val startTime = Instant.now()

    // Remove any matchup limits (ensure full solve)
    System.clearProperty("NLH_MAX_MATCHUPS")
    System.clearProperty("NLH_TEST_MODE")

    // Create production blueprint configuration
    val config = BlueprintConfiguration.headsUp(
        stackSize = 100.0,
        ante = 0.0,
        preflopBuckets = 8  // Coarse abstraction for speed
    )

    println("Blueprint Configuration:")
    println("  ID: ${config.blueprintId}")
    println("  Scenario: ${config.scenarioName}")
    println("  Stacks: BTN=100bb, BB=100bb")
    println("  Ante: 0bb")
    println("  Preflop buckets: ${config.preflopBuckets}")
    println()

    // Save configuration
    val repository = BlueprintRepository()
    repository.saveConfiguration(config)
    println("✓ Configuration saved to: data/blueprints/${config.blueprintId}.json")
    println()

    // Run solve with progress reporting
    val solver = BlueprintSolver()

    var lastReportTime = startTime
    var lastReportIteration = 0L

    println("Starting solve... (this will take a while)")
    println()
    println("%-15s %-12s %-15s %-12s %-15s".format("Time Elapsed", "Iterations", "Exploitability", "Iter/sec", "Est. Remaining"))
    println("-" * 80)

    val result = solver.solve(config) { progress ->
        val now = Instant.now()
        val elapsed = Duration.between(startTime, now)
        val sinceLastReport = Duration.between(lastReportTime, now)

        // Report every 10k iterations or every 60 seconds
        if (progress.iterationsCompleted % 10_000 == 0L || sinceLastReport.seconds >= 60) {
            val iterDelta = progress.iterationsCompleted - lastReportIteration
            val iterPerSec = if (sinceLastReport.seconds > 0) {
                iterDelta.toDouble() / sinceLastReport.seconds
            } else {
                0.0
            }

            val explStr = progress.currentExploitability?.let {
                "%.4f%% (%.2fbb)".format(it * 100, it * 1.5)  // 1.5bb pot
            } ?: "N/A"

            val estRemaining = progress.estimatedTimeRemainingSeconds?.let {
                val hours = it / 3600
                val mins = (it % 3600) / 60
                when {
                    hours > 0 -> "${hours}h ${mins}m"
                    mins > 0 -> "${mins}m"
                    else -> "<1m"
                }
            } ?: "Unknown"

            println("%-15s %-12s %-15s %-12.0f %-15s".format(
                formatDuration(elapsed),
                progress.iterationsCompleted.toString(),
                explStr,
                iterPerSec,
                estRemaining
            ))

            lastReportTime = now
            lastReportIteration = progress.iterationsCompleted
        }
    }

    val totalTime = Duration.between(startTime, Instant.now())

    println()
    println("=" * 80)
    println("BLUEPRINT SOLVE COMPLETE!")
    println("=" * 80)
    println()
    println("Results:")
    println("  Blueprint ID: ${config.blueprintId}")
    println("  Total time: ${formatDuration(totalTime)}")
    println("  Iterations: ${result.iterationsRun}")
    println("  Final exploitability: ${"%.4f%%".format(result.finalExploitability * 100)} (${"%.4f".format(result.finalExploitability * 1.5)}bb)")
    println("  Converged: ${result.converged}")
    println("  Completion: ${result.completionType}")
    println()
    println("Strategy saved to:")
    println("  ${result.storagePathPb}")
    println()
    println("Next steps:")
    println("  1. Analyze EV loss: ./gradlew run --args=\"blueprint analyze-ev-loss ${config.blueprintId}\"")
    println("  2. Extract ranges: ./gradlew run --args=\"blueprint show ${config.blueprintId}\"")
    println("  3. Run refinement: ./gradlew run --args=\"refine solve ${config.blueprintId} --board KsQh7d\"")
    println()

    // Mark blueprint as solved
    val solvedConfig = config.markSolved()
    repository.saveConfiguration(solvedConfig)
}

private fun formatDuration(duration: Duration): String {
    val hours = duration.toHours()
    val minutes = duration.toMinutes() % 60
    val seconds = duration.seconds % 60

    return when {
        hours > 0 -> "${hours}h ${minutes}m ${seconds}s"
        minutes > 0 -> "${minutes}m ${seconds}s"
        else -> "${seconds}s"
    }
}

private operator fun String.times(count: Int): String = this.repeat(count)
