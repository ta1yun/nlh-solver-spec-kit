package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Test if CFR+ is causing issues with ES-MCCFR's high variance.
 */
class ESMCCFRWithoutCFRPlus : FunSpec({

    test("ES-MCCFR without CFR+ on 120 matchups") {
        println("\n=== ES-MCCFR WITHOUT CFR+ on 120 Matchups ===\n")

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

        println("Testing vanilla CFR (no RM+) with external sampling:")
        println()

        val solver = ESMCCFRSolver(numPlayers = 2, enableCFRPlus = false)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        for (iters in listOf(1000, 5000, 10000, 50000, 100000)) {
            val prevIters = listOf(0, 1000, 5000, 10000, 50000).lastOrNull { it < iters } ?: 0
            solver.trainOnMatchups(allMatchups, iterations = iters - prevIters)

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
        println("If this converges better, CFR+ is incompatible with high sampling variance")
    }

    test("Compare CFR+ vs vanilla on 10 matchups") {
        println("\n=== CFR+ vs Vanilla (10 Matchups, ES-MCCFR) ===\n")

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

        // With CFR+
        val solverPlus = ESMCCFRSolver(numPlayers = 2, enableCFRPlus = true)
        println("With CFR+:")
        for (iters in listOf(10000, 50000, 100000)) {
            val prevIters = listOf(0, 10000, 50000).lastOrNull { it < iters } ?: 0
            solverPlus.trainOnMatchups(subset, iterations = iters - prevIters)

            val exploits = subset.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solverPlus.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            println("  ${String.format("%6d", iters)} iters: ${String.format("%.2f%%", exploits.average())}")
        }

        println()

        // Without CFR+
        val solverVanilla = ESMCCFRSolver(numPlayers = 2, enableCFRPlus = false)
        println("Without CFR+ (vanilla):")
        for (iters in listOf(10000, 50000, 100000)) {
            val prevIters = listOf(0, 10000, 50000).lastOrNull { it < iters } ?: 0
            solverVanilla.trainOnMatchups(subset, iterations = iters - prevIters)

            val exploits = subset.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solverVanilla.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            println("  ${String.format("%6d", iters)} iters: ${String.format("%.2f%%", exploits.average())}")
        }
    }
})
