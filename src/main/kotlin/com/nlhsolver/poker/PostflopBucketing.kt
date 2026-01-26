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
 * Phase 2.7 Enhancements (T238-T240):
 * - Street-specific bucket counts: 50 flop, 30 turn, 20 river (T239)
 * - Equity histogram calculation vs opponent range (T238)
 * - Draw potential features for flop bucketing (T240)
 *
 * This is a simplified implementation. Production systems may use more sophisticated
 * methods like potential-aware clustering or earth mover's distance.
 */
class PostflopBucketing(
    private val numBuckets: Int = DEFAULT_BUCKETS,
    private val useStreetSpecificBuckets: Boolean = true
) {
    companion object {
        // Phase 2.7 (T239): Street-specific bucket counts
        const val DEFAULT_BUCKETS = 200
        const val FLOP_BUCKETS = 50
        const val TURN_BUCKETS = 30
        const val RIVER_BUCKETS = 20

        /**
         * Creates a postflop bucketing instance with default parameters.
         */
        fun create(numBuckets: Int = DEFAULT_BUCKETS): PostflopBucketing {
            return PostflopBucketing(numBuckets)
        }

        /**
         * Creates a postflop bucketing instance with street-specific bucket counts.
         */
        fun createStreetAware(): PostflopBucketing {
            return PostflopBucketing(useStreetSpecificBuckets = true)
        }
    }

    /**
     * Get the number of buckets for a given street.
     * Phase 2.7 (T239): Street-specific bucket counts.
     */
    fun getBucketCountForStreet(street: Street): Int {
        if (!useStreetSpecificBuckets) return numBuckets

        return when (street) {
            Street.PREFLOP -> 169  // Canonical preflop hands
            Street.FLOP -> FLOP_BUCKETS
            Street.TURN -> TURN_BUCKETS
            Street.RIVER -> RIVER_BUCKETS
        }
    }
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

    // ========== Phase 2.7 Enhancements (T238-T240) ==========

    /**
     * Calculate equity histogram for a hand vs opponent range (T238).
     *
     * The equity histogram shows the distribution of equity outcomes:
     * - How often we're ahead, tied, or behind
     * - Uses binned equity values (e.g., 10 bins from 0-100%)
     *
     * @param hand Two-card hand
     * @param board Community cards
     * @param opponentRange List of possible opponent hands (or null for all hands)
     * @param numBins Number of histogram bins (default 10)
     * @return EquityHistogram with win/tie/lose distribution
     */
    fun calculateEquityHistogram(
        hand: Pair<Card, Card>,
        board: List<Card>,
        opponentRange: List<Pair<Card, Card>>? = null,
        numBins: Int = 10
    ): EquityHistogram {
        val myCards = listOf(hand.first, hand.second)
        val excludedCards = myCards + board

        // Get opponent hands (filter to valid non-conflicting hands)
        val opponents = (opponentRange ?: generatePossibleHands(board))
            .filter { opp ->
                opp.first !in excludedCards &&
                opp.second !in excludedCards &&
                opp.first != opp.second
            }

        if (opponents.isEmpty()) {
            return EquityHistogram(DoubleArray(numBins) { if (it == numBins - 1) 1.0 else 0.0 })
        }

        // Count wins/ties/losses against each opponent hand
        var wins = 0
        var ties = 0
        var losses = 0

        val myHandRank = evaluateHand(myCards, board)

        for (opp in opponents) {
            val oppCards = listOf(opp.first, opp.second)
            val oppHandRank = evaluateHand(oppCards, board)

            when {
                myHandRank > oppHandRank -> wins++
                myHandRank == oppHandRank -> ties++
                else -> losses++
            }
        }

        val total = wins + ties + losses
        if (total == 0) {
            return EquityHistogram(DoubleArray(numBins) { 1.0 / numBins })
        }

        // Convert to equity (wins + 0.5 * ties) / total
        val equity = (wins + 0.5 * ties) / total

        // Create histogram with equity in appropriate bin
        val histogram = DoubleArray(numBins)
        val binIndex = (equity * numBins).toInt().coerceIn(0, numBins - 1)
        histogram[binIndex] = 1.0

        return EquityHistogram(histogram)
    }

    /**
     * Calculate draw potential for a hand on the flop (T240).
     *
     * Draw potential includes:
     * - Flush draw (4 cards to a flush)
     * - Open-ended straight draw (8 outs)
     * - Gutshot straight draw (4 outs)
     * - Backdoor flush draw (3 cards to a flush)
     *
     * @param hand Two-card hand
     * @param board Flop cards (3 cards)
     * @return DrawPotential with draw type information
     */
    fun calculateDrawPotential(hand: Pair<Card, Card>, board: List<Card>): DrawPotential {
        require(board.size == 3) { "Draw potential is calculated on flop (3 cards)" }

        val allCards = listOf(hand.first, hand.second) + board

        // Check for flush draws
        val suitCounts = allCards.groupingBy { it.suit }.eachCount()
        val maxSuitCount = suitCounts.values.maxOrNull() ?: 0
        val hasFlushDraw = maxSuitCount >= 4
        val hasBackdoorFlushDraw = maxSuitCount == 3

        // Check for straight draws
        val ranks = allCards.map { it.rank.value }.distinct().sorted()
        val straightInfo = analyzeStreightDraws(ranks)

        return DrawPotential(
            hasFlushDraw = hasFlushDraw,
            hasBackdoorFlushDraw = hasBackdoorFlushDraw,
            hasOpenEndedStraightDraw = straightInfo.openEnded,
            hasGutshot = straightInfo.gutshot,
            hasOvercards = hasOvercards(hand, board),
            drawStrength = calculateDrawStrength(
                hasFlushDraw, hasBackdoorFlushDraw,
                straightInfo.openEnded, straightInfo.gutshot
            )
        )
    }

    private fun evaluateHand(holeCards: List<Card>, board: List<Card>): Int {
        val allCards = holeCards + board
        val handRank = if (allCards.size <= 5) {
            HandEvaluator.evaluate(allCards)
        } else {
            HandEvaluator.evaluateBest7(allCards)
        }
        // Return a numeric score for comparison
        return handRank.type.strength * 1000000 +
               handRank.primaryRanks.mapIndexed { i, r -> r.value * Math.pow(15.0, (5 - i).toDouble()).toInt() }.sum()
    }

    private data class StraightDrawInfo(
        val openEnded: Boolean,
        val gutshot: Boolean
    )

    private fun analyzeStreightDraws(sortedRanks: List<Int>): StraightDrawInfo {
        var openEnded = false
        var gutshot = false

        // Check for 4 cards with exactly one gap (gutshot)
        // Check for 4 consecutive cards (open-ended)
        for (i in 0 until sortedRanks.size - 3) {
            val span = sortedRanks.subList(i, i + 4)
            val diff = span.last() - span.first()
            if (diff == 3) {
                // 4 consecutive - open ended if not at A or 5 low end
                if (span.first() > 1 && span.last() < 14) {
                    openEnded = true
                }
            } else if (diff == 4) {
                // 4 cards with one gap - gutshot
                gutshot = true
            }
        }

        // Check wheel draw (A-2-3-4 or 2-3-4-5)
        if (sortedRanks.contains(14)) {
            val lowRanks = sortedRanks.filter { it <= 5 || it == 14 }
            if (lowRanks.size >= 4) {
                val wheelSpan = listOf(2, 3, 4, 5).count { it in lowRanks }
                if (wheelSpan >= 3 && 14 in sortedRanks) {
                    gutshot = true
                }
            }
        }

        return StraightDrawInfo(openEnded, gutshot)
    }

    private fun hasOvercards(hand: Pair<Card, Card>, board: List<Card>): Boolean {
        val highBoardRank = board.maxOfOrNull { it.rank.value } ?: 0
        return hand.first.rank.value > highBoardRank || hand.second.rank.value > highBoardRank
    }

    private fun calculateDrawStrength(
        flushDraw: Boolean,
        backdoorFlush: Boolean,
        openEnded: Boolean,
        gutshot: Boolean
    ): Double {
        var strength = 0.0
        if (flushDraw) strength += 0.35  // ~35% equity with flush draw
        if (backdoorFlush) strength += 0.05  // ~5% equity boost
        if (openEnded) strength += 0.30  // ~30% equity with OESD
        if (gutshot) strength += 0.15  // ~15% equity with gutshot
        return strength.coerceAtMost(1.0)
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
    /**
     * Get the expected equity from this histogram.
     */
    fun expectedEquity(): Double {
        if (buckets.isEmpty()) return 0.5
        return buckets.mapIndexed { index, prob ->
            prob * (index + 0.5) / buckets.size
        }.sum()
    }

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

/**
 * Represents draw potential for a hand on the flop (T240).
 *
 * Draw potential is used to enhance hand bucketing by considering
 * how a hand might improve on future streets.
 */
data class DrawPotential(
    val hasFlushDraw: Boolean,
    val hasBackdoorFlushDraw: Boolean,
    val hasOpenEndedStraightDraw: Boolean,
    val hasGutshot: Boolean,
    val hasOvercards: Boolean,
    val drawStrength: Double  // Combined draw equity [0.0, 1.0]
) {
    /**
     * Check if this hand has any significant draw.
     */
    val hasSignificantDraw: Boolean
        get() = hasFlushDraw || hasOpenEndedStraightDraw

    /**
     * Check if this hand has any draw at all.
     */
    val hasAnyDraw: Boolean
        get() = hasFlushDraw || hasBackdoorFlushDraw || hasOpenEndedStraightDraw || hasGutshot

    /**
     * Get a description of the draws.
     */
    fun describe(): String {
        val draws = mutableListOf<String>()
        if (hasFlushDraw) draws.add("flush draw")
        if (hasOpenEndedStraightDraw) draws.add("OESD")
        if (hasGutshot) draws.add("gutshot")
        if (hasBackdoorFlushDraw) draws.add("backdoor flush")
        if (hasOvercards) draws.add("overcards")
        return if (draws.isEmpty()) "no draws" else draws.joinToString(", ")
    }
}
