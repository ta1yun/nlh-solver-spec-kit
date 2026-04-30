package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Test the reference implementation approach:
 * Vanilla CFR with systematic cycling through matchups.
 */
class ReferenceImplementationTest : FunSpec({

    test("Vanilla CFR cycling through 120 matchups (reference approach)") {
        println("\n=== Reference Implementation: Vanilla CFR + Cycling ===\n")

        val allCards = 0..5
        val allMatchups = mutableListOf<LeducWithSuitAbstraction>()

        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    if (p1 != p2 && p1 != board && p2 != board) {
                        allMatchups.add(LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }

        println("Approach: Cycle through all ${allMatchups.size} matchups")
        println("Each iteration trains on ONE matchup (full tree traversal)")
        println("Reference implementation uses 50,000 iterations")
        println()

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        println("Training with systematic cycling:")
        println()

        for (iters in listOf(1000, 5000, 10000, 25000, 50000, 100000)) {
            val prevIters = listOf(0, 1000, 5000, 10000, 25000, 50000).lastOrNull { it < iters } ?: 0

            // Cycle through matchups
            repeat(iters - prevIters) { i ->
                val matchup = allMatchups[i % allMatchups.size]
                solver.train(matchup, iterations = 1)
            }

            // Compute exploitability
            val exploits = allMatchups.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            val timesEachMatchupSeen = iters / allMatchups.size

            println("  ${String.format("%6d", iters)} iters (each matchup seen ${String.format("%3d", timesEachMatchupSeen)}x): " +
                    "Avg=${String.format("%5.2f%%", exploits.average())}, " +
                    "Min=${String.format("%5.2f%%", exploits.minOrNull())}, " +
                    "Max=${String.format("%6.2f%%", exploits.maxOrNull())}")
        }

        println()
        println("Expected: Should converge around 50k iterations per reference impl")
    }

    test("Compare cycling vs random sampling") {
        println("\n=== Cycling vs Random Sampling ===\n")

        val allCards = 0..5
        val allMatchups = mutableListOf<LeducWithSuitAbstraction>()

        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    if (p1 != p2 && p1 != board && p2 != board) {
                        allMatchups.add(LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }

        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)
        val iterations = 50000

        // Systematic cycling
        val solverCycle = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        repeat(iterations) { i ->
            val matchup = allMatchups[i % allMatchups.size]
            solverCycle.train(matchup, iterations = 1)
        }

        val exploitsCycle = allMatchups.map { matchup ->
            val exploit = exploitCalc.calculateExploitability(matchup, solverCycle.getStrategyProfile())
            (exploit / 2.0) * 100
        }

        // Random sampling
        val solverRandom = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        repeat(iterations) {
            val matchup = allMatchups.random()
            solverRandom.train(matchup, iterations = 1)
        }

        val exploitsRandom = allMatchups.map { matchup ->
            val exploit = exploitCalc.calculateExploitability(matchup, solverRandom.getStrategyProfile())
            (exploit / 2.0) * 100
        }

        println("After 50k iterations:")
        println()
        println("Systematic cycling:")
        println("  Avg: ${String.format("%.2f%%", exploitsCycle.average())}")
        println("  Min: ${String.format("%.2f%%", exploitsCycle.minOrNull())}")
        println("  Max: ${String.format("%.2f%%", exploitsCycle.maxOrNull())}")
        println()

        println("Random sampling:")
        println("  Avg: ${String.format("%.2f%%", exploitsRandom.average())}")
        println("  Min: ${String.format("%.2f%%", exploitsRandom.minOrNull())}")
        println("  Max: ${String.format("%.2f%%", exploitsRandom.maxOrNull())}")
    }
})
