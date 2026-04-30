package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Diagnostic test for convergence with suit abstraction.
 */
class SuitAbstractionConvergenceDiagnostic : FunSpec({

    test("Single matchup convergence diagnostic") {
        println("\n=== Single Matchup Convergence Diagnostic ===\n")

        val matchup = LeducWithSuitAbstraction(
            p1Card = 4, p2Card = 0, boardCard = 5,  // K♦ vs J♦, board K♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        fun computeExploit(): Double {
            val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
            return (exploit / 2.0) * 100
        }

        println("Testing convergence at various iteration counts:")
        println()

        val iterationCounts = listOf(100, 500, 1000, 2000, 5000, 10000, 20000, 50000)

        for (iters in iterationCounts) {
            val prevIters = iterationCounts.lastOrNull { it < iters } ?: 0
            solver.train(matchup, iterations = iters - prevIters)

            val exploit = computeExploit()
            println("  ${String.format("%6d", iters)} iterations: ${String.format("%6.2f%%", exploit)}")
        }

        println()
    }

    test("Multi-matchup convergence diagnostic") {
        println("\n=== Multi-Matchup Convergence Diagnostic ===\n")

        val allCards = 0..5
        val allMatchups = mutableListOf<LeducWithSuitAbstraction>()

        // Create all possible matchups
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

        val iterationCounts = listOf(1000, 5000, 10000, 20000, 50000, 100000)

        println("Training across all matchups (external sampling):")
        println()

        for (targetIters in iterationCounts) {
            val prevIters = iterationCounts.lastOrNull { it < targetIters } ?: 0
            val itersToRun = targetIters - prevIters

            // External sampling: one matchup per iteration
            repeat(itersToRun) {
                val matchup = allMatchups.random()
                solver.train(matchup, iterations = 1)
            }

            // Compute average exploitability across all matchups
            val exploits = allMatchups.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            val avgExploit = exploits.average()
            val maxExploit = exploits.maxOrNull() ?: 0.0
            val minExploit = exploits.minOrNull() ?: 0.0

            println("  ${String.format("%6d", targetIters)} iterations:")
            println("    Avg: ${String.format("%6.2f%%", avgExploit)} | " +
                   "Min: ${String.format("%6.2f%%", minExploit)} | " +
                   "Max: ${String.format("%6.2f%%", maxExploit)}")
        }

        println()
    }

    test("Info set utilization diagnostic") {
        println("\n=== Info Set Utilization Diagnostic ===\n")

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

        // Count how many matchups can reach each info set
        val infoSetReachability = mutableMapOf<String, Int>()

        for (matchup in allMatchups) {
            val visited = mutableSetOf<String>()

            fun explore(state: LeducWithSuitAbstraction) {
                if (state.isTerminal()) return

                val infoSet = state.getInfoSet()
                if (visited.add(infoSet)) {
                    infoSetReachability[infoSet] = infoSetReachability.getOrDefault(infoSet, 0) + 1

                    for (action in state.getLegalActions()) {
                        explore(state.applyAction(action) as LeducWithSuitAbstraction)
                    }
                }
            }

            explore(matchup)
        }

        println("Total unique info sets: ${infoSetReachability.size}")
        println("Total matchups: ${allMatchups.size}")
        println()

        val avgReachability = infoSetReachability.values.average()
        println("Average matchups per info set: ${String.format("%.1f", avgReachability)}")
        println("Min matchups per info set: ${infoSetReachability.values.minOrNull()}")
        println("Max matchups per info set: ${infoSetReachability.values.maxOrNull()}")
        println()

        // Show distribution
        val buckets = listOf(1, 5, 10, 20, 30, 50, 100)
        println("Reachability distribution:")
        for (i in buckets.indices) {
            val min = buckets[i]
            val max = buckets.getOrNull(i + 1) ?: Int.MAX_VALUE
            val count = infoSetReachability.values.count { it in min until max }
            if (count > 0) {
                println("  ${String.format("%3d", min)}-${if (max == Int.MAX_VALUE) "max" else String.format("%3d", max)}: $count info sets")
            }
        }
    }
})
