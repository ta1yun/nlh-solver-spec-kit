package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Test convergence with properly scaled iteration counts.
 */
class ScaledConvergenceDiagnostic : FunSpec({

    test("Full traversal with scaled iterations") {
        println("\n=== Full Traversal with Scaled Iterations ===\n")

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

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Target: ~1000 iterations per matchup for good convergence
        // 120 matchups × 1000 = 120,000 total iterations
        val iterationsPerRound = listOf(100, 500, 1000, 2000)

        println("Training all matchups each round:")
        println()

        for (itersPerMatchup in iterationsPerRound) {
            val prevIters = iterationsPerRound.lastOrNull { it < itersPerMatchup } ?: 0
            val itersToAdd = itersPerMatchup - prevIters

            // Train each matchup
            repeat(itersToAdd) {
                for (matchup in allMatchups) {
                    solver.train(matchup, iterations = 1)
                }
            }

            val totalIters = itersPerMatchup * allMatchups.size

            // Compute exploitability
            val exploits = allMatchups.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            val avgExploit = exploits.average()
            val maxExploit = exploits.maxOrNull() ?: 0.0
            val minExploit = exploits.minOrNull() ?: 0.0

            println("  ${String.format("%4d", itersPerMatchup)} iters/matchup (${String.format("%6d", totalIters)} total):")
            println("    Avg: ${String.format("%5.2f%%", avgExploit)} | " +
                   "Min: ${String.format("%5.2f%%", minExploit)} | " +
                   "Max: ${String.format("%5.2f%%", maxExploit)}")
        }

        println()
        println("Expectation: Should converge to <1% avg exploitability around 1000 iters/matchup")
    }

    test("Blueprint solve: train once, evaluate all") {
        println("\n=== Blueprint Solve Strategy ===\n")
        println("Train on a diverse subset, evaluate on all matchups")
        println()

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

        // Blueprint approach: Select diverse training set
        // Ensure coverage of all info sets
        val trainingSet = allMatchups.shuffled().take(30)  // 25% of matchups

        println("Training set: ${trainingSet.size} matchups")
        println("Test set: ${allMatchups.size} matchups")
        println()

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Train with higher iterations per matchup since we have fewer matchups
        val iterationsPerRound = listOf(1000, 5000, 10000)

        for (itersPerMatchup in iterationsPerRound) {
            val prevIters = iterationsPerRound.lastOrNull { it < itersPerMatchup } ?: 0
            val itersToAdd = itersPerMatchup - prevIters

            repeat(itersToAdd) {
                for (matchup in trainingSet) {
                    solver.train(matchup, iterations = 1)
                }
            }

            val totalIters = itersPerMatchup * trainingSet.size

            // Evaluate on ALL matchups
            val exploits = allMatchups.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            val avgExploit = exploits.average()
            val maxExploit = exploits.maxOrNull() ?: 0.0
            val minExploit = exploits.minOrNull() ?: 0.0

            println("  ${String.format("%5d", itersPerMatchup)} iters/matchup (${String.format("%6d", totalIters)} total):")
            println("    Avg: ${String.format("%5.2f%%", avgExploit)} | " +
                   "Min: ${String.format("%5.2f%%", minExploit)} | " +
                   "Max: ${String.format("%5.2f%%", maxExploit)}")
        }

        println()
        println("Blueprint strategy should converge well since suit abstraction")
        println("allows strategies to generalize across unseen matchups.")
    }
})
