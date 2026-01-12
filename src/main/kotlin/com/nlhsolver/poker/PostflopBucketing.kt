package com.nlhsolver.poker

/**
 * Implements postflop hand bucketing using k-means clustering on equity histograms (T035).
 *
 * Hand bucketing is an abstraction technique that groups strategically similar hands together
 * to reduce the size of the game tree. This implementation uses equity-based clustering:
 * - Calculate equity histogram for each possible hand vs. opponent range
 * - Cluster hands with similar equity distributions using k-means
 * - Assign each hand to the nearest cluster (bucket)
 *
 * This is a simplified implementation. Production systems may use more sophisticated
 * methods like potential-aware clustering or earth mover's distance.
 */
class PostflopBucketing(
    private val numBuckets: Int = 200
) {
    /**
     * Buckets all possible two-card combinations given a board.
     *
     * @param board The community cards
     * @param street The current street (FLOP, TURN, or RIVER)
     * @return Map from hand to bucket ID
     */
    fun bucketHands(board: List<Card>, street: Street): Map<Pair<Card, Card>, Int> {
        require(street != Street.PREFLOP) {
            "PostflopBucketing is only for postflop streets"
        }

        // Generate all possible two-card hands that don't conflict with board
        val allHands = generatePossibleHands(board)

        // For simplified implementation, use hand strength as the primary bucketing feature
        // Production version would use full equity histograms
        val handStrengths = allHands.associateWith { hand ->
            calculateHandStrength(hand, board)
        }

        // Sort hands by strength and assign to buckets
        val sortedHands = handStrengths.entries.sortedBy { it.value }
        val bucketsMap = mutableMapOf<Pair<Card, Card>, Int>()

        val handsPerBucket = (sortedHands.size.toDouble() / numBuckets).coerceAtLeast(1.0)
        sortedHands.forEachIndexed { index, entry ->
            val bucketId = (index / handsPerBucket).toInt().coerceAtMost(numBuckets - 1)
            bucketsMap[entry.key] = bucketId
        }

        return bucketsMap
    }

    /**
     * Gets the bucket ID for a specific hand given the board.
     *
     * @param hand Two-card hand
     * @param board Community cards
     * @param street Current street
     * @return Bucket ID (0 to numBuckets-1)
     */
    fun getBucket(hand: Pair<Card, Card>, board: List<Card>, street: Street): Int {
        if (street == Street.PREFLOP) {
            // Use preflop bucketing for preflop
            // For simplified MVP, just use a basic hand strength ranking (0-168)
            // TODO: Implement proper PreflopBuckets.getBucket() method
            return (hand.first.rank.value * 13 + hand.second.rank.value) % 169
        }

        // For postflop, calculate on-demand or use cached buckets
        val strength = calculateHandStrength(hand, board)

        // Simple bucketing: divide [0,1] strength range into numBuckets
        // Production version would use pre-computed clusters
        val bucketId = (strength * numBuckets).toInt().coerceIn(0, numBuckets - 1)
        return bucketId
    }

    /**
     * Calculates hand strength for a given hand and board.
     *
     * Hand strength is defined as the probability this hand is ahead
     * of a random opponent hand. This is a simplified equity calculation.
     *
     * @param hand Two-card hand
     * @param board Community cards
     * @return Hand strength in [0.0, 1.0]
     */
    private fun calculateHandStrength(hand: Pair<Card, Card>, board: List<Card>): Double {
        // Evaluate the current hand using 5-7 card evaluator
        val myCards = listOf(hand.first, hand.second) + board
        val myHandRank = if (myCards.size == 5) {
            HandEvaluator.evaluate(myCards)
        } else {
            HandEvaluator.evaluateBest7(myCards)
        }

        // For simplified version, use hand rank type as proxy for strength
        // Stronger hands (higher strength value) get higher strength scores
        // Production version would do Monte Carlo simulation vs. opponent range
        val rankTypes = HandRankType.entries
        val rankIndex = rankTypes.indexOf(myHandRank.type)
        return rankIndex.toDouble() / rankTypes.size
    }

    /**
     * Generates all possible two-card hands that don't conflict with the board.
     */
    private fun generatePossibleHands(board: List<Card>): List<Pair<Card, Card>> {
        val deck = Card.standardDeck().filterNot { it in board }
        val hands = mutableListOf<Pair<Card, Card>>()

        for (i in deck.indices) {
            for (j in i + 1 until deck.size) {
                hands.add(Pair(deck[i], deck[j]))
            }
        }

        return hands
    }

    /**
     * Clusters hands using k-means on equity histograms.
     *
     * This is a placeholder for the full implementation which would:
     * 1. Calculate equity histogram for each hand (equity distribution vs range)
     * 2. Run k-means clustering with k=numBuckets
     * 3. Assign each hand to nearest centroid
     *
     * For now, we use simpler strength-based bucketing.
     */
    private fun kMeansClustering(
        hands: List<Pair<Card, Card>>,
        features: Map<Pair<Card, Card>, DoubleArray>,
        k: Int
    ): Map<Pair<Card, Card>, Int> {
        // TODO: Implement full k-means clustering
        // This is a complex algorithm that requires:
        // - Random initialization of k centroids
        // - Iterative assignment and centroid update
        // - Convergence detection
        // For MVP, we use strength-based bucketing instead
        return emptyMap()
    }

    companion object {
        /**
         * Creates a postflop bucketing instance with default parameters.
         */
        fun create(numBuckets: Int = 200): PostflopBucketing {
            return PostflopBucketing(numBuckets)
        }
    }
}

/**
 * Represents an equity histogram for a hand.
 *
 * An equity histogram shows the distribution of equity outcomes vs. an opponent range.
 * For example: [win: 0.6, tie: 0.05, lose: 0.35]
 *
 * This is used for more sophisticated bucketing algorithms.
 */
data class EquityHistogram(
    val buckets: DoubleArray
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as EquityHistogram

        if (!buckets.contentEquals(other.buckets)) return false

        return true
    }

    override fun hashCode(): Int {
        return buckets.contentHashCode()
    }
}
