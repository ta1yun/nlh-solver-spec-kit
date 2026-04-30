package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Test External Sampling MCCFR - the canonical solution.
 */
class ESMCCFRTest : FunSpec({

    test("ES-MCCFR on 120 matchups") {
        println("\n=== External Sampling MCCFR on 120 Matchups ===\n")

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

        println("Total matchups: ${allMatchups.size}")
        println()
        println("ES-MCCFR approach:")
        println("  - Each iteration samples ONE matchup (chance)")
        println("  - Within that matchup, samples opponent actions")
        println("  - Explores all of updating player's actions")
        println()

        val solver = ESMCCFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        println("Training:")
        for (iters in listOf(1000, 5000, 10000, 50000, 100000, 500000)) {
            val prevIters = listOf(0, 1000, 5000, 10000, 50000, 100000).lastOrNull { it < iters } ?: 0

            solver.trainOnMatchups(allMatchups, iterations = iters - prevIters)

            // Compute exploitability across all matchups
            val exploits = allMatchups.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            println("  ${String.format("%6d", iters)} iters: " +
                    "Avg=${String.format("%5.2f%%", exploits.average())}, " +
                    "Min=${String.format("%5.2f%%", exploits.minOrNull())}, " +
                    "Max=${String.format("%6.2f%%", exploits.maxOrNull())}")
        }

        println()
        println("Expected: Exploitability should DECREASE monotonically!")
    }

    test("Compare ES-MCCFR vs Vanilla CFR on small scale") {
        println("\n=== ES-MCCFR vs Vanilla CFR (10 Matchups) ===\n")

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

        val subset = allMatchups.take(10)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        println("Training 10 matchups with both approaches:")
        println()

        // ES-MCCFR
        val esSolver = ESMCCFRSolver(numPlayers = 2, enableCFRPlus = true)
        println("ES-MCCFR (samples matchups + opponent actions):")
        for (iters in listOf(1000, 5000, 10000, 50000)) {
            val prevIters = listOf(0, 1000, 5000, 10000).lastOrNull { it < iters } ?: 0
            esSolver.trainOnMatchups(subset, iterations = iters - prevIters)

            val exploits = subset.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, esSolver.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            println("  ${String.format("%5d", iters)} iters: ${String.format("%5.2f%%", exploits.average())}")
        }

        println()

        // Vanilla CFR (full traversal)
        val vanillaSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        println("Vanilla CFR (full tree traversal on all matchups):")
        for (iters in listOf(10, 50, 100, 500)) {
            val prevIters = listOf(0, 10, 50, 100).lastOrNull { it < iters } ?: 0

            repeat(iters - prevIters) {
                for (matchup in subset) {
                    vanillaSolver.train(matchup, iterations = 1)
                }
            }

            val totalTraversals = iters * subset.size

            val exploits = subset.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, vanillaSolver.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            println("  ${String.format("%5d", totalTraversals)} traversals: ${String.format("%5.2f%%", exploits.average())}")
        }

        println()
        println("Note: ES-MCCFR iterations are cheaper (one path) vs full traversal")
    }

    test("ES-MCCFR convergence curve") {
        println("\n=== ES-MCCFR Detailed Convergence ===\n")

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

        val solver = ESMCCFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        println("120 matchups - tracking convergence:")
        println()

        val iterationPoints = listOf(
            100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000
        )

        for (iters in iterationPoints) {
            val prevIters = iterationPoints.lastOrNull { it < iters } ?: 0
            solver.trainOnMatchups(allMatchups, iterations = iters - prevIters)

            val exploits = allMatchups.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            val avg = exploits.average()
            val min = exploits.minOrNull() ?: 0.0
            val max = exploits.maxOrNull() ?: 0.0

            println("${String.format("%7d", iters)}: " +
                    "avg=${String.format("%6.2f%%", avg)}, " +
                    "min=${String.format("%5.2f%%", min)}, " +
                    "max=${String.format("%6.2f%%", max)}")
        }

        println()
        println("Target: <1% average exploitability")
    }
})
