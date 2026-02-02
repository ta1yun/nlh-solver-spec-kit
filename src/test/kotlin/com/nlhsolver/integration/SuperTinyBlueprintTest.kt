package com.nlhsolver.integration

import com.nlhsolver.solver.RiverScenarios
import com.nlhsolver.solver.SolveOrchestrator
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import java.time.Instant

/**
 * Super tiny test using existing river scenario (< 2 minutes).
 */
class SuperTinyBlueprintTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun setup() {
            // Enable test mode
            System.setProperty("NLH_TEST_MODE", "true")
            System.setProperty("NLH_FULL_POSTFLOP", "true")
            // Limit to just 10 matchups (4 BTN hands x 3 BB hands = 12 normally)
            System.setProperty("NLH_MAX_MATCHUPS", "10")
        }
    }

    @Test
    fun `super tiny river solve with minimal iterations`() {
        val startTime = Instant.now()

        println("\n=== SUPER TINY TEST (River, < 2 min) ===\n")

        // Use existing toy river scenario (already tested and working)
        val config = RiverScenarios.toyPolarizedVsCondensed().copy(
            convergenceCriteria = com.nlhsolver.solver.ConvergenceCriteria(
                targetExploitability = 5.0,    // Loose target
                maxIterations = 500,            // Very few iterations
                evaluationFrequency = 100       // Check every 100
            )
        )

        println("Configuration:")
        println("  Scenario: Toy Polarized vs Condensed (River)")
        println("  Board: ${config.board.joinToString("")}")
        println("  BTN range: 4 hands (KK, AA, 65o, 53o)")
        println("  BB range: 3 hands (QQ, JJ, TT)")
        println("  Max matchups: 10 (LIMITED)")
        println("  Max iterations: ${config.convergenceCriteria.maxIterations}")
        println("  Target exploitability: ${config.convergenceCriteria.targetExploitability}%")
        println()

        val orchestrator = SolveOrchestrator()

        println("Starting solve... (should complete in < 2 minutes)")
        println()

        var lastProgressTime = startTime
        val result = orchestrator.solveSynchronous(config) { progress ->
            val now = Instant.now()
            val elapsed = java.time.Duration.between(startTime, now).seconds

            if (progress.iterationsCompleted % 100 == 0L) {
                val explStr = progress.currentExploitability?.let { "%.2f%%".format(it * 100) } ?: "N/A"
                println("Progress: ${progress.iterationsCompleted} iterations, exploitability: $explStr, elapsed: ${elapsed}s")
                lastProgressTime = now
            }
        }

        val totalTime = java.time.Duration.between(startTime, Instant.now())

        println()
        println("=== SOLVE COMPLETE ===")
        println("Total time: ${totalTime.seconds}s")
        println("Iterations: ${result.iterationsRun}")
        println("Final exploitability: ${"%.2f%%".format(result.finalExploitability * 100)}")
        println("Converged: ${result.converged}")
        println("Completion type: ${result.completionType}")
        println("Strategy saved to: ${result.storagePathPb}")
        println()

        if (totalTime.seconds < 120) {
            println("✓ Test completed in under 2 minutes!")
        }
    }
}
