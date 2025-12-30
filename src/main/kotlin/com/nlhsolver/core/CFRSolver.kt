package com.nlhsolver.core

/**
 * Counterfactual Regret Minimization (CFR) Solver.
 *
 * This is a generic CFR solver that works with any sequential game
 * implementing the GameState interface.
 *
 * CFR Algorithm:
 * 1. Traverse the game tree recursively
 * 2. At each info set, compute counterfactual values for each action
 * 3. Update regrets: regret[a] = value[a] - value[current_strategy]
 * 4. Derive strategy from regrets using regret matching
 * 5. Repeat for many iterations until convergence
 *
 * The average strategy over all iterations converges to a Nash equilibrium.
 *
 * @param numPlayers Number of players in the game (default: 2)
 * @param enableCFRPlus Enable Regret Matching+ optimization (floors negative regrets at 0)
 * @param regretDiscountFactor Regret discount factor (default: 1.0 = no discounting)
 *        NOTE: Linear discounting (< 1.0) is currently disabled due to convergence issues.
 *        Use 1.0 for production. May be revisited for performance optimization later.
 */
class CFRSolver(
    val numPlayers: Int = 2,
    val enableCFRPlus: Boolean = true,  // Default to true for RM+ optimization
    val regretDiscountFactor: Double = 1.0  // Default to 1.0 (no discounting)
) {
    private val strategyProfile = StrategyProfile()
    private var currentIteration = 0

    /**
     * Train the solver for a number of iterations.
     *
     * @param rootState The initial game state
     * @param iterations Number of CFR iterations to run
     * @param callback Optional callback function called after each iteration
     */
    fun train(
        rootState: GameState,
        iterations: Int,
        callback: ((iteration: Int, exploitability: Double?) -> Unit)? = null
    ) {
        for (iteration in 1..iterations) {
            currentIteration++ // Increment instead of setting

            // Run CFR iteration with uniform reach probabilities
            val reachProbs = DoubleArray(numPlayers) { 1.0 }
            cfr(rootState, reachProbs)

            // Apply CFR+ optimizations if enabled
            if (enableCFRPlus) {
                applyCFRPlusOptimizations()
            }

            // Invoke callback if provided
            callback?.invoke(currentIteration, null)
        }
    }

    /**
     * CFR recursive algorithm.
     *
     * @param state Current game state
     * @param reachProbs Array of reach probabilities for each player
     * @return Array of expected utilities for each player
     */
    private fun cfr(
        state: GameState,
        reachProbs: DoubleArray
    ): DoubleArray {
        // Terminal node: return utilities
        if (state.isTerminal()) {
            return state.getUtility()
        }

        val currentPlayer = state.currentPlayer()
            ?: error("Non-terminal state must have a current player")

        val infoSet = state.getInfoSet()
        val actions = state.getLegalActions()
        val numActions = actions.size

        // Get or create info set strategy
        val infoSetStrategy = strategyProfile.getInfoSetStrategy(infoSet, numActions)

        // Get current strategy using regret matching
        val strategy = infoSetStrategy.getStrategy(reachProbs[currentPlayer])

        // Compute utilities for each action
        val actionUtilities = Array(numActions) { DoubleArray(numPlayers) }

        for (i in actions.indices) {
            val action = actions[i]
            val nextState = state.applyAction(action)

            // Update reach probabilities for this action
            val nextReachProbs = reachProbs.copyOf()
            nextReachProbs[currentPlayer] *= strategy[i]

            // Recurse
            actionUtilities[i] = cfr(nextState, nextReachProbs)
        }

        // Compute expected utility for current player under current strategy
        val nodeUtility = DoubleArray(numPlayers)
        for (i in actions.indices) {
            for (p in 0 until numPlayers) {
                nodeUtility[p] += strategy[i] * actionUtilities[i][p]
            }
        }

        // Update regrets for the current player
        val actionValues = DoubleArray(numActions) { i ->
            actionUtilities[i][currentPlayer]
        }

        val opponentReachProb = reachProbs.filterIndexed { idx, _ -> idx != currentPlayer }.fold(1.0) { acc, prob -> acc * prob }

        infoSetStrategy.updateRegrets(
            actionValues = actionValues,
            nodeValue = nodeUtility[currentPlayer],
            opponentReachProb = opponentReachProb
        )

        return nodeUtility
    }

    /**
     * Apply CFR+ optimizations to all information sets.
     *
     * CFR+ improvements:
     * 1. Linear discounting: Scale down old regrets
     * 2. Regret Matching+: Floor negative regrets at 0
     */
    private fun applyCFRPlusOptimizations() {
        // Apply regret discounting
        if (regretDiscountFactor < 1.0) {
            for (infoSet in strategyProfile.getAllInfoSets()) {
                infoSet.discountRegrets(regretDiscountFactor)
            }
        }

        // Apply Regret Matching+ (floor negatives at 0)
        for (infoSet in strategyProfile.getAllInfoSets()) {
            infoSet.applyRegretMatchingPlus()
        }
    }

    /**
     * Get the average strategy for an information set.
     *
     * @param infoSet The information set identifier
     * @return Map of action to probability, or empty map if info set not found
     */
    fun getAverageStrategy(infoSet: String, actionIds: List<String>): Map<String, Double> {
        val infoSetStrategy = strategyProfile.getInfoSetStrategy(infoSet, actionIds.size)
        val avgStrategy = infoSetStrategy.getAverageStrategy()

        return actionIds.mapIndexed { index, actionId ->
            actionId to avgStrategy[index]
        }.toMap()
    }

    /**
     * Get the current strategy (not average) for an information set.
     *
     * @param infoSet The information set identifier
     * @return Map of action to probability
     */
    fun getCurrentStrategy(infoSet: String, actionIds: List<String>): Map<String, Double> {
        val infoSetStrategy = strategyProfile.getInfoSetStrategy(infoSet, actionIds.size)
        val strategy = infoSetStrategy.getStrategy(reachProbability = 0.0) // Don't update cumulative

        return actionIds.mapIndexed { index, actionId ->
            actionId to strategy[index]
        }.toMap()
    }

    /**
     * Get the strategy profile (all information sets).
     */
    fun getStrategyProfile(): StrategyProfile = strategyProfile

    /**
     * Get the current iteration count.
     */
    fun getCurrentIteration(): Int = currentIteration

    /**
     * Print all strategies (for debugging).
     */
    fun printStrategies(actionLabels: Map<String, List<String>>) {
        println("\n=== CFR Solver - Nash Equilibrium Strategies ===")
        println("Iterations: $currentIteration")
        println("Info Sets: ${strategyProfile.size()}\n")

        val sortedInfoSets = strategyProfile.getAllInfoSets().sortedBy { it.infoSet }

        for (infoSet in sortedInfoSets) {
            val labels = actionLabels[infoSet.infoSet] ?: (0 until infoSet.numActions).map { "action_$it" }
            val avgStrategy = infoSet.getAverageStrategy()

            println("${infoSet.infoSet}:")
            for (i in labels.indices) {
                println("  ${labels[i]}: ${String.format("%.3f", avgStrategy[i])}")
            }
            println()
        }
    }
}
