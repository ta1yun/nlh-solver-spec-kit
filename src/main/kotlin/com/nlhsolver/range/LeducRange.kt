package com.nlhsolver.range

/**
 * Probability distribution over Leduc hands.
 *
 * Tracks weights for the 6 possible cards (J♠, J♥, Q♠, Q♥, K♠, K♥).
 * Weights represent how often each hand reaches a specific game tree node.
 *
 * Example ranges:
 * - Uniform: All cards have weight 1.0
 * - After value bet: K has high weight, J has low weight
 * - After bluff-catch: J and Q have higher weight, K lower
 */
class LeducRange(
    private val weights: Map<Int, Double>  // cardIdx -> weight
) : Range {

    override fun getWeight(hand: Hand): Double {
        val cardIdx = (hand as LeducHand).cardIdx
        return weights.getOrDefault(cardIdx, 0.0)
    }

    override fun getActiveHands(): List<Pair<Hand, Double>> {
        return weights
            .filter { it.value > 0.0 }
            .map { (cardIdx, weight) -> LeducHand(cardIdx) to weight }
            .sortedByDescending { it.second }  // Highest weight first
    }

    override fun getTotalWeight(): Double = weights.values.sum()

    override fun excluding(hand: Hand): Range {
        val excludedCard = (hand as LeducHand).cardIdx
        // Remove only the specific card, not the entire rank
        val filtered = weights.filterKeys { it != excludedCard }
        return LeducRange(filtered)
    }

    /**
     * Create a normalized copy where weights sum to 1.0.
     * Useful for displaying as percentages.
     */
    fun normalized(): LeducRange {
        val total = getTotalWeight()
        if (total == 0.0) return this

        val normalized = weights.mapValues { it.value / total }
        return LeducRange(normalized)
    }

    /**
     * Get weight for a specific rank (summed across both suits).
     */
    fun getWeightForRank(rank: Int): Double {
        val card1 = rank * 2
        val card2 = rank * 2 + 1
        return weights.getOrDefault(card1, 0.0) + weights.getOrDefault(card2, 0.0)
    }

    override fun toString(): String {
        val norm = normalized()
        return "LeducRange(" +
            "J:${(norm.getWeightForRank(0)*100).toInt()}% " +
            "Q:${(norm.getWeightForRank(1)*100).toInt()}% " +
            "K:${(norm.getWeightForRank(2)*100).toInt()}%)"
    }

    companion object {
        /**
         * Create uniform range (all hands equally likely).
         * This is the starting range pre-flop.
         */
        fun uniform(): LeducRange {
            return LeducRange((0..5).associateWith { 1.0 })
        }

        /**
         * Create range excluding a specific hand.
         * Used when we know opponent doesn't have certain cards.
         */
        fun uniformExcluding(hand: LeducHand): LeducRange {
            return uniform().excluding(hand) as LeducRange
        }

        /**
         * Create range from rank weights.
         * Distributes weight equally across both suits of each rank.
         */
        fun fromRankWeights(j: Double = 1.0, q: Double = 1.0, k: Double = 1.0): LeducRange {
            return LeducRange(mapOf(
                0 to j, 1 to j,  // J♠, J♥
                2 to q, 3 to q,  // Q♠, Q♥
                4 to k, 5 to k   // K♠, K♥
            ))
        }
    }
}
