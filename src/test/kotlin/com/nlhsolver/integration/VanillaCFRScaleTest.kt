package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Test if the divergence at 120 matchups is caused by CFR+.
 * Compare vanilla CFR vs CFR+ at different scales.
 */
class VanillaCFRScaleTest : FunSpec({

    test("Vanilla CFR on 120 matchups") {
        println("\n=== Vanilla CFR (no CFR+) on 120 Matchups ===\n")

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

        val solverVanilla = CFRSolver(numPlayers = 2, enableCFRPlus = false)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        println("Training with vanilla CFR (no regret matching+):")
        println()

        for (iters in listOf(10, 50, 100, 500, 1000, 2000)) {
            val prevIters = listOf(0, 10, 50, 100, 500, 1000).lastOrNull { it < iters } ?: 0

            repeat(iters - prevIters) {
                for (matchup in allMatchups) {
                    solverVanilla.train(matchup, iterations = 1)
                }
            }

            val totalTrainCalls = iters * allMatchups.size

            val exploits = allMatchups.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solverVanilla.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            println("  ${String.format("%4d", iters)} iters (${String.format("%6d", totalTrainCalls)} train calls): " +
                    "Avg=${String.format("%6.2f%%", exploits.average())}, " +
                    "Min=${String.format("%5.2f%%", exploits.minOrNull())}, " +
                    "Max=${String.format("%6.2f%%", exploits.maxOrNull())}")
        }

        println()
        println("If vanilla CFR converges but CFR+ diverges, the problem is CFR+!")
    }

    test("Compare CFR+ vs Vanilla at different scales") {
        println("\n=== CFR+ vs Vanilla at Different Scales ===\n")

        // Test with 5, 10, 20, 40 matchups
        for (numMatchups in listOf(5, 10, 20, 40, 80)) {
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

            // Take first N matchups
            val subset = allMatchups.take(numMatchups)

            // Train with CFR+
            val solverPlus = CFRSolver(numPlayers = 2, enableCFRPlus = true)
            repeat(100) {
                for (matchup in subset) {
                    solverPlus.train(matchup, iterations = 1)
                }
            }

            val exploitCalc = ExploitabilityCalculator(numPlayers = 2)
            val exploitsPlus = subset.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solverPlus.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            // Train with vanilla CFR
            val solverVanilla = CFRSolver(numPlayers = 2, enableCFRPlus = false)
            repeat(100) {
                for (matchup in subset) {
                    solverVanilla.train(matchup, iterations = 1)
                }
            }

            val exploitsVanilla = subset.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solverVanilla.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            println("${String.format("%3d", numMatchups)} matchups @ 100 iters:")
            println("  CFR+:    ${String.format("%6.2f%%", exploitsPlus.average())}")
            println("  Vanilla: ${String.format("%6.2f%%", exploitsVanilla.average())}")
        }

        println()
        println("Find the scale where convergence breaks down...")
    }
})
