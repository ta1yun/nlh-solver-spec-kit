package com.nlhsolver.core

import kotlin.random.Random

/**
 * External Sampling Monte Carlo CFR Solver.
 *
 * ES-MCCFR samples everything external to the updating player:
 * - Chance nodes (e.g., card dealing)
 * - Opponent actions
 * But explores all of the updating player's actions to compute regrets.
 *
 * This is the canonical approach used in professional poker solvers
 * for solving large games efficiently.
 *
 * Algorithm per iteration:
 * 1. For each player:
 *    a. Sample one matchup (if multiple matchups)
 *    b. Traverse the game tree with external sampling:
 *       - At updating player's nodes: explore all actions
 *       - At opponent's nodes: sample one action from their strategy
 *    c. Update regrets for updating player's info sets on the sampled path
 *
 * @param numPlayers Number of players in the game
 * @param enableCFRPlus Enable CFR+ optimizations
 */
class ESMCCFRSolver(
    val numPlayers: Int = 2,
    val enableCFRPlus: Boolean = true,
    val random: Random = Random.Default
) {
    private val strategyProfile = StrategyProfile()
    private var currentIteration = 0

    /**
     * Train using external sampling on a set of matchups.
     *
     * Each iteration:
     * - Samples one matchup (models chance node for card dealing)
     * - Runs ES-MCCFR for each player on that matchup
     *
     * @param matchups List of possible matchups (game states after dealing)
     * @param iterations Number of ES-MCCFR iterations
     */
    fun trainOnMatchups(
        matchups: List<GameState>,
        iterations: Int,
        callback: ((iteration: Int) -> Unit)? = null
    ) {
        for (iteration in 1..iterations) {
            currentIteration++

            // Sample one matchup (chance node: card dealing)
            val matchup = matchups.random(random)

            // Run ES-MCCFR for each player
            for (player in 0 until numPlayers) {
                externalSamplingCFR(
                    state = matchup,
                    updatingPlayer = player,
                    reachProbs = DoubleArray(numPlayers) { 1.0 }
                )
            }

            // Apply CFR+ optimizations
            if (enableCFRPlus) {
                applyCFRPlusOptimizations()
            }

            callback?.invoke(currentIteration)
        }
    }

    /**
     * External Sampling CFR recursive traversal.
     *
     * @param state Current game state
     * @param updatingPlayer The player whose regrets we're updating (0 or 1)
     * @param reachProbs Reach probabilities for each player
     * @return Utility for the updating player
     */
    private fun externalSamplingCFR(
        state: GameState,
        updatingPlayer: Int,
        reachProbs: DoubleArray
    ): Double {
        // Terminal node: return utility
        if (state.isTerminal()) {
            return state.getUtility()[updatingPlayer]
        }

        val currentPlayer = state.currentPlayer()
            ?: error("Non-terminal state must have a current player")

        val infoSet = state.getInfoSet()
        val actions = state.getLegalActions()
        val numActions = actions.size

        // Get or create info set strategy
        val infoSetStrategy = strategyProfile.getInfoSetStrategy(infoSet, numActions)

        if (currentPlayer == updatingPlayer) {
            // UPDATING PLAYER'S TURN: Explore all actions to compute regrets

            // Get current strategy
            val strategy = infoSetStrategy.getStrategy(reachProbs[currentPlayer])

            // Compute value for each action
            val actionValues = DoubleArray(numActions)
            for (i in actions.indices) {
                val action = actions[i]
                val nextState = state.applyAction(action)

                // Update reach probability for this action
                val nextReachProbs = reachProbs.copyOf()
                nextReachProbs[currentPlayer] *= strategy[i]

                // Recurse
                actionValues[i] = externalSamplingCFR(nextState, updatingPlayer, nextReachProbs)
            }

            // Compute expected value under current strategy
            val nodeValue = actionValues.indices.sumOf { strategy[it] * actionValues[it] }

            // Update regrets (weighted by opponent reach probability)
            val opponentReachProb = reachProbs.filterIndexed { idx, _ -> idx != currentPlayer }
                .fold(1.0) { acc, prob -> acc * prob }

            infoSetStrategy.updateRegrets(
                actionValues = actionValues,
                nodeValue = nodeValue,
                opponentReachProb = opponentReachProb
            )

            return nodeValue

        } else {
            // OPPONENT'S TURN: Sample one action from their strategy

            // Get opponent's strategy AND accumulate it (weighted by reach prob)
            // This builds up the opponent's average strategy over iterations
            val strategy = infoSetStrategy.getStrategy(reachProbs[currentPlayer])

            // Sample one action according to strategy
            val sampledActionIndex = sampleAction(strategy, random)
            val sampledAction = actions[sampledActionIndex]

            // Update reach probability for sampled action
            val nextReachProbs = reachProbs.copyOf()
            nextReachProbs[currentPlayer] *= strategy[sampledActionIndex]

            // Recurse on sampled action only
            val nextState = state.applyAction(sampledAction)
            return externalSamplingCFR(nextState, updatingPlayer, nextReachProbs)
        }
    }

    /**
     * Sample an action index according to a probability distribution.
     */
    private fun sampleAction(strategy: DoubleArray, random: Random): Int {
        val r = random.nextDouble()
        var cumulative = 0.0

        for (i in strategy.indices) {
            cumulative += strategy[i]
            if (r <= cumulative) {
                return i
            }
        }

        // Fallback (shouldn't happen if strategy sums to 1.0)
        return strategy.size - 1
    }

    /**
     * Apply CFR+ optimizations.
     */
    private fun applyCFRPlusOptimizations() {
        for (infoSet in strategyProfile.getAllInfoSets()) {
            infoSet.applyRegretMatchingPlus()
        }
    }

    /**
     * Get the strategy profile.
     */
    fun getStrategyProfile(): StrategyProfile = strategyProfile

    /**
     * Get current iteration count.
     */
    fun getCurrentIteration(): Int = currentIteration
}
