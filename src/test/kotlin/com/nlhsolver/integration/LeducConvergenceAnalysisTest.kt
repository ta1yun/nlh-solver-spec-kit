package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Extended Leduc poker convergence analysis.
 *
 * Measures how many iterations needed to reach 1% exploitability.
 */
class LeducConvergenceAnalysisTest : FunSpec({

    test("Leduc convergence to 1% analysis") {
        println("\n=== Leduc Poker Convergence Analysis ===\n")

        // Board: Kh
        val boardCard = 2  // 0=J, 1=Q, 2=K

        // All matchups
        val matchups = mutableListOf<SimpleLeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 != p2 && p1 != boardCard + 3 && p2 != boardCard + 3) {
                    val p1Rank = p1 % 3
                    val p2Rank = p2 % 3
                    matchups.add(
                        SimpleLeducState(
                            p1Card = p1Rank,
                            p2Card = p2Rank,
                            boardCard = boardCard,
                            pot = 2.0,
                            p1Invested = 1.0,
                            p2Invested = 1.0,
                            history = ""
                        )
                    )
                }
            }
        }

        println("Matchups: ${matchups.size}")
        println()

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        fun sampleMatchup() = matchups.random()

        fun computeAvgExploit(): Double {
            var total = 0.0
            for (matchup in matchups) {
                total += exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
            }
            return (total / matchups.size / 2.0) * 100  // As percentage
        }

        println("Iteration    Exploitability    Time (s)    Rate (iter/s)")
        println("=".repeat(65))

        val startTime = System.currentTimeMillis()
        var lastCheckTime = startTime

        // Extended checkpoints to see convergence pattern
        val checkpoints = listOf(
            0, 1_000, 2_000, 5_000,
            10_000, 20_000, 50_000,
            100_000, 200_000, 500_000, 1_000_000
        )

        var lastCheckpoint = 0
        var convergedAt: Int? = null

        for (checkpoint in checkpoints) {
            val iterationsToRun = checkpoint - lastCheckpoint

            // Train
            repeat(iterationsToRun) {
                solver.train(sampleMatchup(), iterations = 1)

                // Progress indicator
                if ((lastCheckpoint + it + 1) % 10000 == 0) {
                    val elapsed = (System.currentTimeMillis() - startTime) / 1000.0
                    val rate = (lastCheckpoint + it + 1) / elapsed
                    print("\r  Training: ${lastCheckpoint + it + 1} iterations (${String.format("%.0f", rate)} iter/s)")
                }
            }

            val avgExploit = computeAvgExploit()
            val elapsed = (System.currentTimeMillis() - startTime) / 1000.0
            val rate = checkpoint / elapsed

            println("\r${"%-12s".format(checkpoint.toString())}${String.format("%15.2f%%", avgExploit)}    ${String.format("%8.1f", elapsed)}    ${String.format("%12.0f", rate)}")

            // Check if converged to 1%
            if (convergedAt == null && avgExploit < 1.0) {
                convergedAt = checkpoint
                println("  *** Converged to <1% at $checkpoint iterations! ***")
            }

            // Early exit if we've converged and gone past 2x that point
            if (convergedAt != null && checkpoint > convergedAt * 2) {
                println("\n  Stopping early - already converged")
                break
            }

            lastCheckpoint = checkpoint
            lastCheckTime = System.currentTimeMillis()
        }

        println()
        if (convergedAt != null) {
            println("✓ Leduc poker converged to <1% at $convergedAt iterations")
            println("  Per-matchup: ~${convergedAt / matchups.size} iterations")
        } else {
            println("⚠ Did not converge to 1% within ${checkpoints.last()} iterations")
            println("  Final exploitability: ${String.format("%.2f%%", computeAvgExploit())}")
        }
    }
})
