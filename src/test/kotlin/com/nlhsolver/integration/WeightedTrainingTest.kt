package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Test if weighting matchups by their probability fixes convergence.
 *
 * Hypothesis: We need to scale reach probabilities by the probability
 * of each matchup occurring in the global game.
 */
class WeightedTrainingTest : FunSpec({

    test("Weighted aggregate training with matchup probabilities") {
        println("\n=== Weighted Training with Matchup Probabilities ===\n")

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
        println("Each matchup probability: ${1.0 / allMatchups.size}")
        println()

        // Test weighted solver
        val matchupProb = 1.0 / allMatchups.size  // Each matchup equally likely
        val solver = WeightedTrainingSolver(
            numPlayers = 2,
            enableCFRPlus = true,
            matchupWeight = matchupProb
        )

        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        println("Training with weighted reach probabilities:")
        println()

        for (iters in listOf(10, 50, 100, 500, 1000)) {
            val prevIters = listOf(0, 10, 50, 100, 500).lastOrNull { it < iters } ?: 0

            // Train each iteration on all matchups
            repeat(iters - prevIters) {
                for (matchup in allMatchups) {
                    solver.trainOnMatchup(matchup)
                }
            }

            // Compute exploitability
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
        println("Hypothesis: Weighting by matchup probability should fix convergence!")
    }
})

/**
 * CFR solver that weights reach probabilities by matchup probability.
 * This accounts for the fact that we're sampling from a distribution of matchups.
 */
class WeightedTrainingSolver(
    val numPlayers: Int = 2,
    val enableCFRPlus: Boolean = true,
    val matchupWeight: Double = 1.0  // Weight to apply to reach probabilities
) {
    private val strategyProfile = StrategyProfile()

    fun trainOnMatchup(matchup: GameState) {
        // Scale initial reach probabilities by matchup weight
        val reachProbs = DoubleArray(numPlayers) { matchupWeight }
        cfr(matchup, reachProbs)

        if (enableCFRPlus) {
            applyCFRPlusOptimizations()
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

        // Get strategy (this will accumulate to cumulative strategy weighted by reach prob)
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
}
