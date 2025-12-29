package com.nlhsolver.poker

/**
 * Precomputed hand strength lookup table for fast hand evaluation.
 * In production, this would be a complete lookup table for all possible hands.
 * For now, provides a framework and caching mechanism.
 */
object HandStrengthTable {

    private val cache = mutableMapOf<Set<Card>, HandRank>()

    /**
     * Look up hand strength with caching
     */
    fun lookupHandStrength(cards: List<Card>): HandRank {
        require(cards.size == 5 || cards.size == 7) {
            "Hand strength lookup requires 5 or 7 cards"
        }

        val cardSet = cards.toSet()

        return cache.getOrPut(cardSet) {
            when (cards.size) {
                5 -> HandEvaluator.evaluate(cards)
                7 -> HandEvaluator.evaluateBest7(cards)
                else -> throw IllegalArgumentException("Invalid card count")
            }
        }
    }

    /**
     * Clear the lookup cache (useful for memory management)
     */
    fun clearCache() {
        cache.clear()
    }

    /**
     * Get cache statistics
     */
    fun getCacheStats(): CacheStats = CacheStats(
        size = cache.size,
        estimatedMemoryBytes = cache.size * 200 // Rough estimate
    )

    /**
     * Pre-warm cache with common hands (optional optimization)
     */
    fun precomputeCommonHands() {
        // In production, this would precompute a large lookup table
        // For now, it's a placeholder for future optimization
    }

    data class CacheStats(
        val size: Int,
        val estimatedMemoryBytes: Int
    )

    /**
     * Get relative hand strength (0.0 to 1.0) for a given hand
     * This is a simplified version; production would use precomputed percentiles
     */
    fun getRelativeStrength(cards: List<Card>): Double {
        val handRank = lookupHandStrength(cards)

        // Simplified strength estimation based on hand type
        // In production, this would be based on actual hand distribution
        return when (handRank.type) {
            HandRankType.ROYAL_FLUSH -> 1.0
            HandRankType.STRAIGHT_FLUSH -> 0.99
            HandRankType.FOUR_OF_A_KIND -> 0.95
            HandRankType.FULL_HOUSE -> 0.90
            HandRankType.FLUSH -> 0.80
            HandRankType.STRAIGHT -> 0.70
            HandRankType.THREE_OF_A_KIND -> 0.55
            HandRankType.TWO_PAIR -> 0.40
            HandRankType.ONE_PAIR -> 0.25
            HandRankType.HIGH_CARD -> 0.10
        }
    }
}
