package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Diagnose how strategies are shared across matchups.
 */
class StrategyShareDiagnostic : FunSpec({

    test("Compare external sampling vs full traversal") {
        println("\n=== External Sampling vs Full Traversal ===\n")

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

        // Test 1: External sampling (current approach)
        println("Method 1: External Sampling (one random matchup per iteration)")
        val solver1 = CFRSolver(numPlayers = 2, enableCFRPlus = true)

        repeat(10000) {
            val matchup = allMatchups.random()
            solver1.train(matchup, iterations = 1)
        }

        val exploits1 = allMatchups.map { matchup ->
            val exploit = exploitCalc.calculateExploitability(matchup, solver1.getStrategyProfile())
            (exploit / 2.0) * 100
        }
        println("  Avg: ${String.format("%.2f%%", exploits1.average())}")
        println("  Min: ${String.format("%.2f%%", exploits1.minOrNull())}")
        println("  Max: ${String.format("%.2f%%", exploits1.maxOrNull())}")
        println()

        // Test 2: Full traversal each iteration
        println("Method 2: Full Traversal (all matchups each iteration)")
        val solver2 = CFRSolver(numPlayers = 2, enableCFRPlus = true)

        val itersPerMatchup = 10000 / allMatchups.size  // ~83 iterations per matchup
        repeat(itersPerMatchup) {
            for (matchup in allMatchups) {
                solver2.train(matchup, iterations = 1)
            }
        }

        val exploits2 = allMatchups.map { matchup ->
            val exploit = exploitCalc.calculateExploitability(matchup, solver2.getStrategyProfile())
            (exploit / 2.0) * 100
        }
        println("  Avg: ${String.format("%.2f%%", exploits2.average())}")
        println("  Min: ${String.format("%.2f%%", exploits2.minOrNull())}")
        println("  Max: ${String.format("%.2f%%", exploits2.maxOrNull())}")
        println()

        // Test 3: Batch external sampling (better distribution)
        println("Method 3: Batch External Sampling (10 matchups per batch)")
        val solver3 = CFRSolver(numPlayers = 2, enableCFRPlus = true)

        repeat(1000) {  // 1000 batches
            val batch = allMatchups.shuffled().take(10)
            for (matchup in batch) {
                solver3.train(matchup, iterations = 1)
            }
        }

        val exploits3 = allMatchups.map { matchup ->
            val exploit = exploitCalc.calculateExploitability(matchup, solver3.getStrategyProfile())
            (exploit / 2.0) * 100
        }
        println("  Avg: ${String.format("%.2f%%", exploits3.average())}")
        println("  Min: ${String.format("%.2f%%", exploits3.minOrNull())}")
        println("  Max: ${String.format("%.2f%%", exploits3.maxOrNull())}")
        println()
    }

    test("Verify info set sharing works correctly") {
        println("\n=== Verify Info Set Sharing ===\n")

        // Create two matchups that should share strategies due to suit abstraction
        // J♦ vs Q♦ and J♥ vs Q♥ should have identical strategies pre-flop

        val matchup1 = LeducWithSuitAbstraction(
            p1Card = 0, p2Card = 2, boardCard = 5,  // J♦ vs Q♦, board K♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val matchup2 = LeducWithSuitAbstraction(
            p1Card = 1, p2Card = 3, boardCard = 5,  // J♥ vs Q♥, board K♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        println("Matchup 1: J♦ vs Q♦, board K♥")
        println("Matchup 2: J♥ vs Q♥, board K♥")
        println()
        println("These should share info sets due to suit abstraction.")
        println()

        // Verify they produce the same info set at initial position
        println("Initial info sets:")
        println("  Matchup 1 P0: ${matchup1.getInfoSet()}")
        println("  Matchup 2 P0: ${matchup2.getInfoSet()}")
        println("  Same? ${matchup1.getInfoSet() == matchup2.getInfoSet()}")
        println()

        // Train only on matchup 1
        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        solver.train(matchup1, iterations = 10000)

        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Check exploitability on BOTH matchups
        val exploit1 = exploitCalc.calculateExploitability(matchup1, solver.getStrategyProfile())
        val exploit2 = exploitCalc.calculateExploitability(matchup2, solver.getStrategyProfile())

        println("After training 10k iterations on matchup 1 only:")
        println("  Matchup 1 exploitability: ${String.format("%.2f%%", (exploit1 / 2.0) * 100)}")
        println("  Matchup 2 exploitability: ${String.format("%.2f%%", (exploit2 / 2.0) * 100)}")
        println()
        println("If suit abstraction works, matchup 2 should also have low exploitability!")
    }
})
