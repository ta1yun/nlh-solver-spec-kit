package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Test different CFR variants to diagnose the convergence issue.
 */
class CFRVariantDiagnostic : FunSpec({

    test("Compare CFR+ vs Vanilla CFR") {
        println("\n=== CFR+ vs Vanilla CFR ===\n")

        val matchup = LeducWithSuitAbstraction(
            p1Card = 4, p2Card = 0, boardCard = 5,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Test CFR+
        println("CFR+ (single matchup):")
        val solverPlus = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        for (iters in listOf(100, 500, 1000, 5000)) {
            val prevIters = listOf(0, 100, 500, 1000).lastOrNull { it < iters } ?: 0
            solverPlus.train(matchup, iterations = iters - prevIters)
            val exploit = exploitCalc.calculateExploitability(matchup, solverPlus.getStrategyProfile())
            println("  ${String.format("%4d", iters)} iters: ${String.format("%.2f%%", (exploit / 2.0) * 100)}")
        }
        println()

        // Test Vanilla CFR
        println("Vanilla CFR (single matchup):")
        val solverVanilla = CFRSolver(numPlayers = 2, enableCFRPlus = false)
        for (iters in listOf(100, 500, 1000, 5000)) {
            val prevIters = listOf(0, 100, 500, 1000).lastOrNull { it < iters } ?: 0
            solverVanilla.train(matchup, iterations = iters - prevIters)
            val exploit = exploitCalc.calculateExploitability(matchup, solverVanilla.getStrategyProfile())
            println("  ${String.format("%4d", iters)} iters: ${String.format("%.2f%%", (exploit / 2.0) * 100)}")
        }
        println()
    }

    test("Multi-matchup with vanilla CFR") {
        println("\n=== Multi-Matchup with Vanilla CFR ===\n")

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

        println("Total matchups: ${allMatchups.size}")
        println("Testing vanilla CFR with full traversal:")
        println()

        for (itersPerMatchup in listOf(100, 500, 1000)) {
            val prevIters = listOf(0, 100, 500).lastOrNull { it < itersPerMatchup } ?: 0
            val itersToAdd = itersPerMatchup - prevIters

            repeat(itersToAdd) {
                for (matchup in allMatchups) {
                    solverVanilla.train(matchup, iterations = 1)
                }
            }

            val totalIters = itersPerMatchup * allMatchups.size

            val exploits = allMatchups.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solverVanilla.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            println("  ${String.format("%4d", itersPerMatchup)} iters/matchup (${String.format("%6d", totalIters)} total):")
            println("    Avg: ${String.format("%6.2f%%", exploits.average())} | " +
                   "Min: ${String.format("%5.2f%%", exploits.minOrNull())} | " +
                   "Max: ${String.format("%6.2f%%", exploits.maxOrNull())}")
        }
        println()
    }

    test("Check if it's a game tree issue") {
        println("\n=== Isolate Specific Matchups ===\n")
        println("Train on just 2 matchups that share info sets")
        println()

        // Two matchups that share info sets due to suit abstraction
        val matchup1 = LeducWithSuitAbstraction(
            p1Card = 0, p2Card = 2, boardCard = 5,  // J♦ vs Q♦, board K♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val matchup2 = LeducWithSuitAbstraction(
            p1Card = 1, p2Card = 3, boardCard = 5,  // J♥ vs Q♥, board K♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        println("Matchup 1: J♦ vs Q♦")
        println("Matchup 2: J♥ vs Q♥")
        println("(Should share all info sets due to suit abstraction)")
        println()

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        println("Training on both matchups alternating:")
        for (iters in listOf(100, 500, 1000, 5000)) {
            val prevIters = listOf(0, 100, 500, 1000).lastOrNull { it < iters } ?: 0

            repeat(iters - prevIters) {
                solver.train(matchup1, iterations = 1)
                solver.train(matchup2, iterations = 1)
            }

            val exploit1 = exploitCalc.calculateExploitability(matchup1, solver.getStrategyProfile())
            val exploit2 = exploitCalc.calculateExploitability(matchup2, solver.getStrategyProfile())

            println("  ${String.format("%4d", iters)} iters each:")
            println("    Matchup 1: ${String.format("%.2f%%", (exploit1 / 2.0) * 100)}")
            println("    Matchup 2: ${String.format("%.2f%%", (exploit2 / 2.0) * 100)}")
        }
    }
})
