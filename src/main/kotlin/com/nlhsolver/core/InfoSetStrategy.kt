package com.nlhsolver.core

import kotlin.math.max

/**
 * Stores regrets and strategies for an information set.
 *
 * In CFR, each information set maintains:
 * - Cumulative regrets for each action
 * - Cumulative strategy (for computing average strategy)
 * - Current strategy (derived from regrets via regret matching)
 */
class InfoSetStrategy(
    val infoSet: String,
    val numActions: Int
) {
    /**
     * Cumulative regrets for each action.
     * Updated during CFR iterations based on counterfactual values.
     */
    @Volatile
    private val cumulativeRegret = DoubleArray(numActions)

    /**
     * Cumulative strategy weighted by reach probability.
     * Used to compute the average strategy (Nash equilibrium approximation).
     */
    @Volatile
    private val cumulativeStrategy = DoubleArray(numActions)

    /**
     * Number of times this information set has been visited.
     */
    @Volatile
    private var visitCount = 0L

    /**
     * Get the current strategy using Regret Matching.
     *
     * Strategy is proportional to positive regrets:
     * - If all regrets are negative, use uniform strategy
     * - Otherwise, strategy[i] = max(0, regret[i]) / sum(max(0, regret[j]))
     *
     * @return Array of action probabilities (sum to 1.0)
     */
    @Synchronized
    fun getStrategy(reachProbability: Double = 1.0): DoubleArray {
        val strategy = DoubleArray(numActions)
        var normalizingSum = 0.0

        // Regret matching: strategy proportional to positive regrets
        for (i in 0 until numActions) {
            strategy[i] = max(0.0, cumulativeRegret[i])
            normalizingSum += strategy[i]
        }

        // Normalize to get probabilities
        for (i in 0 until numActions) {
            strategy[i] = if (normalizingSum > 0) {
                strategy[i] / normalizingSum
            } else {
                1.0 / numActions // Uniform if no positive regrets
            }
        }

        // Update cumulative strategy (weighted by reach probability)
        if (reachProbability > 0) {
            for (i in 0 until numActions) {
                cumulativeStrategy[i] += reachProbability * strategy[i]
            }
        }

        visitCount++
        return strategy
    }

    /**
     * Get the average strategy (Nash equilibrium approximation).
     *
     * This is the time-weighted average of all strategies played,
     * which converges to a Nash equilibrium as iterations increase.
     *
     * @return Array of action probabilities (sum to 1.0)
     */
    fun getAverageStrategy(): DoubleArray {
        val avgStrategy = DoubleArray(numActions)
        val normalizingSum = cumulativeStrategy.sum()

        for (i in 0 until numActions) {
            avgStrategy[i] = if (normalizingSum > 0) {
                cumulativeStrategy[i] / normalizingSum
            } else {
                1.0 / numActions
            }
        }

        return avgStrategy
    }

    /**
     * Update cumulative regrets based on action values.
     *
     * @param actionValues Array of values for each action
     * @param nodeValue Expected value of the current strategy
     * @param opponentReachProb Probability that opponent reaches this state
     */
    @Synchronized
    fun updateRegrets(
        actionValues: DoubleArray,
        nodeValue: Double,
        opponentReachProb: Double
    ) {
        require(actionValues.size == numActions) {
            "Action values size ${actionValues.size} must match numActions $numActions"
        }

        for (i in 0 until numActions) {
            val regret = (actionValues[i] - nodeValue) * opponentReachProb
            cumulativeRegret[i] += regret
        }
    }

    /**
     * Apply CFR+ linear discounting to regrets.
     *
     * CFR+ improvement: Scale down old regrets to focus on recent information.
     * This helps convergence by reducing the influence of early (noisy) iterations.
     *
     * @param discountFactor Factor to multiply regrets by (e.g., 0.99)
     */
    fun discountRegrets(discountFactor: Double) {
        for (i in 0 until numActions) {
            cumulativeRegret[i] *= discountFactor
        }
    }

    /**
     * Apply Regret Matching+ by flooring negative regrets at 0.
     *
     * This is an optimization that prevents regrets from going too negative,
     * which can slow down convergence.
     */
    fun applyRegretMatchingPlus() {
        for (i in 0 until numActions) {
            if (cumulativeRegret[i] < 0) {
                cumulativeRegret[i] = 0.0
            }
        }
    }

    /**
     * Get the current cumulative regrets (for debugging/analysis).
     */
    fun getRegrets(): DoubleArray = cumulativeRegret.copyOf()

    /**
     * Get visit count.
     */
    fun getVisitCount(): Long = visitCount

    /**
     * Restore cumulative strategy from saved average strategy data.
     *
     * This is used when loading a strategy from disk. Since we only save
     * the average strategy (not the cumulative sum), we reconstruct it
     * by multiplying by a large weight to preserve the probabilities.
     *
     * @param averageStrategy The saved average strategy probabilities
     * @param visitCount The saved visit count
     */
    fun restoreFromAverageStrategy(averageStrategy: DoubleArray, visitCount: Long) {
        require(averageStrategy.size == numActions) {
            "Average strategy size ${averageStrategy.size} must match numActions $numActions"
        }

        // Restore cumulative strategy
        // We use a large weight to ensure proper normalization
        val weight = 1000.0 * visitCount
        for (i in 0 until numActions) {
            cumulativeStrategy[i] = averageStrategy[i] * weight
        }

        // Restore visit count
        this.visitCount = visitCount
    }

    /**
     * Get a summary of this info set's state.
     */
    override fun toString(): String {
        val avgStrat = getAverageStrategy()
        return "InfoSet($infoSet): visits=$visitCount, avgStrategy=${avgStrat.contentToString()}"
    }
}

/**
 * Stores all information set strategies for a game.
 */
class StrategyProfile {
    private val infoSets = java.util.concurrent.ConcurrentHashMap<String, InfoSetStrategy>()

    /**
     * Get or create an InfoSetStrategy for a given information set.
     */
    fun getInfoSetStrategy(infoSet: String, numActions: Int): InfoSetStrategy {
        return infoSets.getOrPut(infoSet) {
            InfoSetStrategy(infoSet, numActions)
        }
    }

    /**
     * Get all information sets in this profile.
     */
    fun getAllInfoSets(): Collection<InfoSetStrategy> = infoSets.values

    /**
     * Get all information set keys.
     */
    fun getAllInfoSetKeys(): Set<String> = infoSets.keys

    /**
     * Get the number of information sets in this profile.
     */
    fun size(): Int = infoSets.size

    /**
     * Clear all data (for starting a fresh solve).
     */
    fun clear() {
        infoSets.clear()
    }
}
