package com.nlhsolver.examples.akq

import com.nlhsolver.core.CFRSolver

/**
 * Adapter that makes CFRSolver compatible with AkqExploitabilityCalculator.
 *
 * This adapter provides the same interface as AkqSolver but delegates
 * to the generic CFRSolver implementation.
 */
class CFRSolverAdapter(
    private val solver: CFRSolver
) {
    /**
     * Train the solver for a number of iterations.
     *
     * In AKQ, we need to train on all possible card deals in each iteration.
     * Each iteration samples all 6 possible deals (AK, AQ, KA, KQ, QA, QK).
     */
    fun train(iterations: Int) {
        val rootStates = AkqGameState.createAllRootStates()

        // Train for the specified number of iterations
        // Each iteration trains on all possible card deals
        for (iteration in 1..iterations) {
            for (rootState in rootStates) {
                // Call train with iterations=1 for each card deal
                solver.train(rootState, 1)
            }
        }
    }

    /**
     * Get average strategy for an information set.
     * Returns map with action names as keys.
     */
    fun getAverageStrategy(infoSet: String): Map<String, Double> {
        // Determine action labels based on history
        val history = if (infoSet.length > 1) infoSet.substring(1) else ""
        val actionLabels = if (history.isEmpty() || history.last() == 'k') {
            listOf("bet", "check")
        } else {
            listOf("call", "fold")
        }

        return solver.getAverageStrategy(infoSet, actionLabels)
    }

    /**
     * Check if game state is terminal.
     */
    fun isTerminal(history: String): Boolean {
        return history.endsWith("f") ||   // fold
               history.endsWith("bc") ||  // bet-call (showdown)
               history.endsWith("kk") ||  // check-check (showdown)
               history.endsWith("kbc") || // check-bet-call (showdown)
               history.endsWith("kbf")    // check-bet-fold
    }

    /**
     * Get payoff for player 1 at terminal node.
     */
    fun getPayoff(history: String, p1Card: AkqCard, p2Card: AkqCard): Double {
        if (history.endsWith("f")) {
            // Someone folded - folder loses their contribution
            val p1Folded = history.length % 2 == 1
            return if (p1Folded) -1.0 else 1.0
        }

        // Showdown - compare cards
        val betCount = history.count { it == 'b' }
        val potSize = if (betCount > 0) 2.0 else 1.0

        return if (p1Card.beats(p2Card)) potSize else -potSize
    }

    /**
     * Print all strategies.
     */
    fun printStrategies() {
        val actionLabels = mutableMapOf<String, List<String>>()
        for (card in AkqCard.all()) {
            for (history in listOf("", "k", "b", "kb")) {
                val infoSet = card.toString() + history
                actionLabels[infoSet] = AkqGameState.getActionLabels(infoSet)
            }
        }

        solver.printStrategies(actionLabels)
    }
}
