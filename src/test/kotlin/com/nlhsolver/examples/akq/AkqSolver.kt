package com.nlhsolver.examples.akq

import kotlin.math.max

/**
 * AKQ CFR Solver - Clean implementation based on vanilla CFR
 *
 * This is a toy game used to verify that the CFR algorithm implementation
 * can converge to a Nash equilibrium for a simple poker game.
 */
class AkqSolver {
    // Cumulative regrets for each information set
    private val cumulativeRegret = mutableMapOf<String, DoubleArray>()

    // Cumulative strategy (weighted by reach probability) for computing average strategy
    private val cumulativeStrategy = mutableMapOf<String, DoubleArray>()

    private val numActions = 2 // Always 2 actions in AKQ

    /**
     * Train the solver for a number of iterations
     */
    fun train(iterations: Int) {
        val cards = AkqCard.all()

        for (iteration in 1..iterations) {
            // Iterate over all possible card deals
            for (p1Card in cards) {
                for (p2Card in cards) {
                    if (p1Card != p2Card) {
                        // Start CFR with uniform reach probabilities
                        cfr("", p1Card, p2Card, 1.0, 1.0)
                    }
                }
            }
        }
    }

    /**
     * CFR algorithm - returns payoffs for each player
     * Returns a Pair: (payoff for P1, payoff for P2)
     */
    private fun cfr(
        history: String,
        p1Card: AkqCard,
        p2Card: AkqCard,
        p1ReachProb: Double,
        p2ReachProb: Double
    ): Pair<Double, Double> {
        // Check if terminal node
        if (isTerminal(history)) {
            val payoff = getPayoff(history, p1Card, p2Card)
            return Pair(payoff, -payoff)
        }

        // Determine current player (0 = P1, 1 = P2)
        val player = history.length % 2
        val currentCard = if (player == 0) p1Card else p2Card
        val infoSet = currentCard.toString() + history

        // Get current strategy using regret matching
        val strategy = getStrategy(infoSet)

        // Get available actions
        val actions = getActions(history)

        // Compute action values
        val actionPayoffs = DoubleArray(numActions)

        for (i in actions.indices) {
            val action = actions[i]
            val nextHistory = history + action

            // Recurse with updated reach probabilities
            val nextReachProbs = if (player == 0) {
                Pair(p1ReachProb * strategy[i], p2ReachProb)
            } else {
                Pair(p1ReachProb, p2ReachProb * strategy[i])
            }

            val payoffs = cfr(nextHistory, p1Card, p2Card, nextReachProbs.first, nextReachProbs.second)

            // Store the payoff for the acting player
            actionPayoffs[i] = if (player == 0) payoffs.first else payoffs.second
        }

        // Compute node value (expected payoff under current strategy)
        var nodeValue = 0.0
        for (i in actions.indices) {
            nodeValue += strategy[i] * actionPayoffs[i]
        }

        // Update cumulative regret
        val regrets = cumulativeRegret.getOrPut(infoSet) { DoubleArray(numActions) }
        val opponentReachProb = if (player == 0) p2ReachProb else p1ReachProb

        for (i in actions.indices) {
            val regret = (actionPayoffs[i] - nodeValue) * opponentReachProb
            regrets[i] += regret
        }

        // Update cumulative strategy (weighted by player's reach probability)
        val cumStrat = cumulativeStrategy.getOrPut(infoSet) { DoubleArray(numActions) }
        val playerReachProb = if (player == 0) p1ReachProb else p2ReachProb

        for (i in actions.indices) {
            cumStrat[i] += playerReachProb * strategy[i]
        }

        // Return payoffs for both players
        return if (player == 0) {
            Pair(nodeValue, -nodeValue)
        } else {
            Pair(-nodeValue, nodeValue)
        }
    }

    /**
     * Get strategy using regret matching
     */
    fun getStrategy(infoSet: String): DoubleArray {
        val regrets = cumulativeRegret.getOrPut(infoSet) { DoubleArray(numActions) }
        val strategy = DoubleArray(numActions)

        // Regret matching: strategy proportional to positive regrets
        var normalizingSum = 0.0
        for (i in regrets.indices) {
            strategy[i] = max(0.0, regrets[i])
            normalizingSum += strategy[i]
        }

        // Normalize to get probabilities
        for (i in strategy.indices) {
            strategy[i] = if (normalizingSum > 0) {
                strategy[i] / normalizingSum
            } else {
                1.0 / numActions // Uniform if no positive regrets
            }
        }

        return strategy
    }

    /**
     * Get average strategy (Nash equilibrium approximation)
     */
    fun getAverageStrategy(infoSet: String): Map<String, Double> {
        val cumStrat = cumulativeStrategy[infoSet] ?: return emptyMap()
        val avgStrategy = DoubleArray(numActions)

        val normalizingSum = cumStrat.sum()
        for (i in cumStrat.indices) {
            avgStrategy[i] = if (normalizingSum > 0) {
                cumStrat[i] / normalizingSum
            } else {
                1.0 / numActions
            }
        }

        // Determine action labels based on context
        return if (infoSet.length == 1 || infoSet.endsWith("k")) {
            mapOf("bet" to avgStrategy[0], "check" to avgStrategy[1])
        } else {
            mapOf("call" to avgStrategy[0], "fold" to avgStrategy[1])
        }
    }

    /**
     * Get available actions based on history
     */
    private fun getActions(history: String): Array<String> {
        return if (history.isEmpty() || history.last() == 'k') {
            arrayOf("b", "k") // bet or check
        } else {
            arrayOf("c", "f") // call or fold
        }
    }

    /**
     * Check if game state is terminal
     */
    fun isTerminal(history: String): Boolean {
        return history.endsWith("f") ||  // fold
               history.endsWith("bc") || // bet-call (showdown)
               history.endsWith("kk") || // check-check (showdown)
               history.endsWith("kbc") || // check-bet-call (showdown)
               history.endsWith("kbf")    // check-bet-fold
    }

    /**
     * Get payoff for player 1 at terminal node
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
     * Print all strategies
     */
    fun printStrategies() {
        println("\n=== AKQ Solver - Nash Equilibrium Strategies ===\n")

        val infoSets = cumulativeStrategy.keys.sorted()
        for (infoSet in infoSets) {
            val card = infoSet[0]
            val history = if (infoSet.length > 1) infoSet.substring(1) else ""
            val historyDesc = when {
                history.isEmpty() -> "initial"
                history == "k" -> "after check"
                history == "b" -> "after bet"
                history == "kb" -> "after check-bet"
                else -> history
            }

            val strategy = getAverageStrategy(infoSet)
            println("Card: $card, History: $historyDesc")
            strategy.forEach { (action, prob) ->
                println("  $action: ${String.format("%.3f", prob)}")
            }
            println()
        }
    }
}
