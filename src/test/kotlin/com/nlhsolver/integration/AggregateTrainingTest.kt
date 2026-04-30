package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Test to verify that aggregate training (all matchups per iteration)
 * works better than sequential training (one matchup per iteration).
 */
class AggregateTrainingTest : FunSpec({

    test("Compare sequential vs aggregate training") {
        println("\n=== Sequential vs Aggregate Training ===\n")

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

        // Method 1: Sequential training (current broken approach)
        println("METHOD 1: Sequential Training")
        println("Each matchup trains separately, increments iteration counter")
        println()

        val solver1 = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Train 10 iterations per matchup sequentially
        repeat(10) {
            for (matchup in allMatchups) {
                solver1.train(matchup, iterations = 1)
            }
        }

        val exploits1 = allMatchups.map { matchup ->
            val exploit = exploitCalc.calculateExploitability(matchup, solver1.getStrategyProfile())
            (exploit / 2.0) * 100
        }

        println("After 10 iterations/matchup (1200 total train() calls):")
        println("  Avg: ${String.format("%.2f%%", exploits1.average())}")
        println("  Min: ${String.format("%.2f%%", exploits1.minOrNull())}")
        println("  Max: ${String.format("%.2f%%", exploits1.maxOrNull())}")
        println()

        // Method 2: Aggregate training using custom implementation
        println("METHOD 2: Aggregate Training (Manual Implementation)")
        println("All matchups contribute to SAME iteration")
        println()

        val aggregateSolver = AggregateTrainingSolver(numPlayers = 2, enableCFRPlus = true)

        // Train 10 iterations, each iteration processes all matchups
        aggregateSolver.trainOnMatchups(allMatchups, iterations = 10)

        val exploits2 = allMatchups.map { matchup ->
            val exploit = exploitCalc.calculateExploitability(matchup, aggregateSolver.getStrategyProfile())
            (exploit / 2.0) * 100
        }

        println("After 10 aggregate iterations (10 rounds × 120 matchups):")
        println("  Avg: ${String.format("%.2f%%", exploits2.average())}")
        println("  Min: ${String.format("%.2f%%", exploits2.minOrNull())}")
        println("  Max: ${String.format("%.2f%%", exploits2.maxOrNull())}")
        println()

        // Method 3: Aggregate with more iterations
        println("METHOD 3: Aggregate Training with 100 iterations")
        val aggregateSolver2 = AggregateTrainingSolver(numPlayers = 2, enableCFRPlus = true)
        aggregateSolver2.trainOnMatchups(allMatchups, iterations = 100)

        val exploits3 = allMatchups.map { matchup ->
            val exploit = exploitCalc.calculateExploitability(matchup, aggregateSolver2.getStrategyProfile())
            (exploit / 2.0) * 100
        }

        println("After 100 aggregate iterations:")
        println("  Avg: ${String.format("%.2f%%", exploits3.average())}")
        println("  Min: ${String.format("%.2f%%", exploits3.minOrNull())}")
        println("  Max: ${String.format("%.2f%%", exploits3.maxOrNull())}")
        println()

        println("=== Comparison ===")
        println("Sequential (1200 train calls):  ${String.format("%.2f%%", exploits1.average())}")
        println("Aggregate (10 iterations):      ${String.format("%.2f%%", exploits2.average())}")
        println("Aggregate (100 iterations):     ${String.format("%.2f%%", exploits3.average())}")
        println()

        if (exploits2.average() < exploits1.average()) {
            println("✓ Aggregate training is BETTER than sequential!")
        } else {
            println("✗ Aggregate training is NOT better (theory may be wrong)")
        }
    }

    test("Detailed convergence tracking for aggregate training") {
        println("\n=== Aggregate Training Convergence Tracking ===\n")

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

        val solver = AggregateTrainingSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        println("Training with aggregate approach:")
        println()

        for (iters in listOf(1, 5, 10, 50, 100, 500, 1000)) {
            val prevIters = listOf(0, 1, 5, 10, 50, 100, 500).lastOrNull { it < iters } ?: 0
            solver.trainOnMatchups(allMatchups, iterations = iters - prevIters)

            val exploits = allMatchups.map { matchup ->
                val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
                (exploit / 2.0) * 100
            }

            println("  ${String.format("%4d", iters)} iterations: " +
                    "Avg=${String.format("%6.2f%%", exploits.average())}, " +
                    "Min=${String.format("%5.2f%%", exploits.minOrNull())}, " +
                    "Max=${String.format("%6.2f%%", exploits.maxOrNull())}")
        }

        println()
        println("Expected: Exploitability should DECREASE, not increase!")
    }
})

/**
 * Custom solver that treats all matchups as part of the same iteration.
 * This is the "correct" way to do blueprint solving.
 */
class AggregateTrainingSolver(
    val numPlayers: Int = 2,
    val enableCFRPlus: Boolean = true
) {
    private val strategyProfile = StrategyProfile()
    private var currentIteration = 0

    fun trainOnMatchups(matchups: List<LeducWithSuitAbstraction>, iterations: Int) {
        for (iteration in 1..iterations) {
            currentIteration++

            // Process ALL matchups in this iteration
            for (matchup in matchups) {
                val reachProbs = DoubleArray(numPlayers) { 1.0 }
                cfr(matchup, reachProbs)
            }

            // Apply CFR+ optimizations ONCE per iteration (not per matchup!)
            if (enableCFRPlus) {
                applyCFRPlusOptimizations()
            }
        }
    }

    private fun cfr(state: GameState, reachProbs: DoubleArray): DoubleArray {
        if (state.isTerminal()) {
            return state.getUtility()
        }

        val currentPlayer = state.currentPlayer()
            ?: error("Non-terminal state must have a current player")

        val infoSet = state.getInfoSet()
        val actions = state.getLegalActions()
        val numActions = actions.size

        val infoSetStrategy = strategyProfile.getInfoSetStrategy(infoSet, numActions)
        val strategy = infoSetStrategy.getStrategy(reachProbs[currentPlayer])

        // Compute utilities for each action
        val actionUtilities = Array(numActions) { DoubleArray(numPlayers) }
        for (i in actions.indices) {
            val action = actions[i]
            val nextState = state.applyAction(action)

            val nextReachProbs = reachProbs.copyOf()
            nextReachProbs[currentPlayer] *= strategy[i]

            actionUtilities[i] = cfr(nextState, nextReachProbs)
        }

        // Compute expected utility
        val nodeUtility = DoubleArray(numPlayers)
        for (i in actions.indices) {
            for (p in 0 until numPlayers) {
                nodeUtility[p] += strategy[i] * actionUtilities[i][p]
            }
        }

        // Update regrets
        val actionValues = DoubleArray(numActions) { i ->
            actionUtilities[i][currentPlayer]
        }

        val opponentReachProb = reachProbs.filterIndexed { idx, _ -> idx != currentPlayer }
            .fold(1.0) { acc, prob -> acc * prob }

        infoSetStrategy.updateRegrets(
            actionValues = actionValues,
            nodeValue = nodeUtility[currentPlayer],
            opponentReachProb = opponentReachProb
        )

        return nodeUtility
    }

    private fun applyCFRPlusOptimizations() {
        for (infoSet in strategyProfile.getAllInfoSets()) {
            infoSet.applyRegretMatchingPlus()
        }
    }

    fun getStrategyProfile(): StrategyProfile = strategyProfile

    fun getCurrentIteration(): Int = currentIteration
}
