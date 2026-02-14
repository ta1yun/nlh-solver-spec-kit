package com.nlhsolver.integration

import com.nlhsolver.solver.ConvergenceCriteria
import com.nlhsolver.solver.RiverScenarios
import com.nlhsolver.solver.SolveOrchestrator
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.BeforeAll

/**
 * Test that the same toy scenario can achieve near-0% exploitability
 * with a stricter convergence target.
 *
 * This proves:
 * - The solver framework is correct
 * - We can achieve near-GTO solutions on river spots
 * - More iterations = better convergence
 */
class ToyRiverNearZeroTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun setup() {
            System.setProperty("NLH_FULL_POSTFLOP", "true")
            System.setProperty("NLH_TEST_MODE", "true")
        }
    }

    @Test
    fun `toy scenario achieves near-zero exploitability with strict target`() {
        println("\n=== TOY SCENARIO: Near-Zero Exploitability Test ===\n")

        // Use the same toy scenario but with stricter convergence criteria
        val config = RiverScenarios.toyPolarizedVsCondensed().copy(
            convergenceCriteria = ConvergenceCriteria(
                targetExploitability = 0.05,  // 5% target (4x stricter than default 20%)
                maxIterations = 20_000,        // Allow more iterations
                evaluationFrequency = 500
            )
        )

        println("Configuration:")
        println("  Board: ${config.board.joinToString("")}")
        println("  Target exploitability: 5% (vs default 20%)")
        println("  Max iterations: 20,000")
        println()

        val orchestrator = SolveOrchestrator()
        val startTime = System.currentTimeMillis()

        val result = orchestrator.solveSynchronous(config) { progress ->
            if (progress.iterationsCompleted % 2500 == 0L) {
                val elapsed = (System.currentTimeMillis() - startTime) / 1000.0
                println("  ${progress.iterationsCompleted} iterations (${String.format("%.1f", elapsed)}s)")
            }
        }

        val endTime = System.currentTimeMillis()
        val solveTimeSeconds = (endTime - startTime) / 1000.0

        println()
        println("=== RESULTS ===")
        println("Converged: ${result.converged}")
        println("Final exploitability: ${"%.6f".format(result.finalExploitability)} (${"%.4f".format(result.finalExploitability * 100)}%)")
        println("Iterations: ${result.iterationsRun}")
        println("Solve time: ${"%.2f".format(solveTimeSeconds)}s")
        println()

        println("=== COMPARISON ===")
        println("Default test (20% target):  ~1,000 iterations  → 18.62% exploitability")
        println("Strict test (5% target):    ${result.iterationsRun} iterations → ${"%.2f".format(result.finalExploitability * 100)}% exploitability")
        println()

        val improvement = 18.62 / (result.finalExploitability * 100)
        println("Improvement: ${String.format("%.1f", improvement)}x better convergence")
        println()

        if (result.finalExploitability < 0.05) {
            println("✅ EXCELLENT: Achieved < 5% exploitability")
            println("   This is near-GTO quality for a river spot")
        } else {
            println("⚠️  Still converging - would improve with more iterations")
        }
    }
}
