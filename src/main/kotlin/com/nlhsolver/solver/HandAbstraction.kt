package com.nlhsolver.solver

import com.nlhsolver.poker.Card

/**
 * Defines hand abstraction strategy for game tree abstraction (T026, T124).
 *
 * Hand abstraction reduces the number of unique hand combinations by grouping
 * strategically similar hands into buckets. This is essential for making large
 * poker game trees tractable.
 *
 * For small ranges, abstraction can be disabled (mode = NONE), which preserves
 * per-hand precision at the cost of larger game trees.
 *
 * Phase 8 (T124): Supports street-specific bucket counts for blueprint solving.
 *
 * @property mode Whether to use bucketing or exact hand identity
 * @property numBuckets Default number of buckets (used if street-specific not provided)
 * @property preflopBuckets Number of buckets for preflop (blueprint: 8-15, refinement: N/A)
 * @property flopBuckets Number of buckets for flop (blueprint: 25, refinement: 50)
 * @property turnBuckets Number of buckets for turn (blueprint: 15, refinement: 30)
 * @property riverBuckets Number of buckets for river (blueprint: 10, refinement: 20)
 * @property bucketingMethod Algorithm used for bucketing (when mode = EQUITY_BUCKETING)
 */
data class HandAbstraction(
    val mode: AbstractionMode = AbstractionMode.AUTO,
    val numBuckets: Int = 200,
    val preflopBuckets: Int? = null,  // Optional street-specific overrides
    val flopBuckets: Int? = null,
    val turnBuckets: Int? = null,
    val riverBuckets: Int? = null,
    val bucketingMethod: BucketingMethod = BucketingMethod.EQUITY_HISTOGRAM
) {
    init {
        if (mode == AbstractionMode.EQUITY_BUCKETING) {
            require(numBuckets in 10..500) {
                "Default bucket count must be between 10 and 500 (got $numBuckets)"
            }
            // Validate street-specific buckets if provided
            preflopBuckets?.let { require(it in 8..169) { "Preflop buckets must be 8-169 (got $it)" } }
            flopBuckets?.let { require(it in 10..200) { "Flop buckets must be 10-200 (got $it)" } }
            turnBuckets?.let { require(it in 10..200) { "Turn buckets must be 10-200 (got $it)" } }
            riverBuckets?.let { require(it in 10..200) { "River buckets must be 10-200 (got $it)" } }
        }
    }

    /**
     * Get bucket count for a specific street (T124).
     * Returns street-specific count if set, otherwise falls back to default.
     */
    fun getBucketCount(street: com.nlhsolver.poker.Street): Int {
        return when (street) {
            com.nlhsolver.poker.Street.PREFLOP -> preflopBuckets ?: numBuckets
            com.nlhsolver.poker.Street.FLOP -> flopBuckets ?: numBuckets
            com.nlhsolver.poker.Street.TURN -> turnBuckets ?: numBuckets
            com.nlhsolver.poker.Street.RIVER -> riverBuckets ?: numBuckets
        }
    }

    companion object {
        /**
         * Threshold for auto-selecting abstraction mode.
         * If total matchups (btnRange.size × bbRange.size) exceeds this,
         * equity bucketing is used. Otherwise, exact hand identity is preserved.
         */
        const val AUTO_THRESHOLD = 500

        /**
         * No abstraction - use exact hand identity.
         * Best for small ranges where per-hand precision matters.
         */
        fun none() = HandAbstraction(mode = AbstractionMode.NONE)

        /**
         * Equity-based bucketing with specified bucket count.
         * Best for large ranges where tractability requires abstraction.
         */
        fun equityBucketing(numBuckets: Int = 200) = HandAbstraction(
            mode = AbstractionMode.EQUITY_BUCKETING,
            numBuckets = numBuckets
        )

        /**
         * Auto-select based on range sizes.
         * Uses NONE for small ranges, EQUITY_BUCKETING for large ranges.
         */
        fun auto() = HandAbstraction(mode = AbstractionMode.AUTO)

        /**
         * Blueprint abstraction (T124) - coarse for fast preflop solving.
         *
         * Settings:
         * - Preflop: 8-15 buckets (configurable)
         * - Flop: 25 buckets (vs 50 in refinement)
         * - Turn: 15 buckets (vs 30 in refinement)
         * - River: 10 buckets (vs 20 in refinement)
         *
         * Expected solve time: 1-2 hours for full game tree
         * Expected EV loss: < 2% pot
         */
        fun blueprint(preflopBuckets: Int = 8) = HandAbstraction(
            mode = AbstractionMode.EQUITY_BUCKETING,
            numBuckets = 200,  // Default fallback
            preflopBuckets = preflopBuckets,
            flopBuckets = 25,
            turnBuckets = 15,
            riverBuckets = 10
        )

        /**
         * Refinement abstraction (T124) - fine for precise postflop solving.
         *
         * Settings:
         * - Flop: 50 buckets (2x blueprint)
         * - Turn: 30 buckets (2x blueprint)
         * - River: 20 buckets (2x blueprint)
         * - Preflop: Not used (starts from flop with blueprint ranges)
         *
         * Expected solve time: 10-30 min per board
         * Expected exploitability: < 0.5%
         */
        fun refinement() = HandAbstraction(
            mode = AbstractionMode.EQUITY_BUCKETING,
            numBuckets = 200,  // Default fallback
            preflopBuckets = null,  // N/A for refinement
            flopBuckets = 50,
            turnBuckets = 30,
            riverBuckets = 20
        )
    }

    /**
     * Determine effective mode based on range sizes.
     */
    fun effectiveMode(btnRangeSize: Int, bbRangeSize: Int): AbstractionMode {
        return when (mode) {
            AbstractionMode.AUTO -> {
                val totalMatchups = btnRangeSize * bbRangeSize
                if (totalMatchups > AUTO_THRESHOLD) {
                    AbstractionMode.EQUITY_BUCKETING
                } else {
                    AbstractionMode.NONE
                }
            }
            else -> mode
        }
    }
}

/**
 * Hand abstraction mode.
 */
enum class AbstractionMode {
    /**
     * No abstraction - each hand combo has its own strategy.
     * Use for small ranges (< 500 matchups) where precision matters.
     */
    NONE,

    /**
     * Group hands by equity into buckets.
     * Use for large ranges where tractability requires abstraction.
     */
    EQUITY_BUCKETING,

    /**
     * Automatically select based on range sizes.
     * Uses NONE for small ranges, EQUITY_BUCKETING for large.
     */
    AUTO
}

/**
 * Algorithm used for hand bucketing (when mode = EQUITY_BUCKETING).
 */
enum class BucketingMethod {
    /**
     * Cluster hands by equity distribution vs. opponent range.
     * Simpler and faster, suitable for most scenarios.
     */
    EQUITY_HISTOGRAM,

    /**
     * Also considers hand improvement potential (better for draws).
     * More sophisticated but computationally expensive.
     */
    POTENTIAL_AWARE
}

/**
 * Represents a hand identifier used in info sets.
 * Can be either exact hand identity or an equity bucket.
 */
sealed class HandIdentifier {
    /**
     * Exact hand identity - the specific two cards.
     * Format in info set: "hand=AcKd" (sorted by rank, then suit)
     */
    data class ExactHand(val card1: Card, val card2: Card) : HandIdentifier() {
        override fun toInfoSetKey(): String {
            // Sort cards for canonical representation (high card first)
            val sorted = listOf(card1, card2).sortedWith(
                compareByDescending<Card> { it.rank.value }.thenBy { it.suit.ordinal }
            )
            return "hand=${sorted[0].rank.symbol}${sorted[0].suit.symbol}${sorted[1].rank.symbol}${sorted[1].suit.symbol}"
        }
    }

    /**
     * Equity bucket - hands grouped by strategic similarity.
     * Format in info set: "bucket=42"
     */
    data class Bucket(val bucketId: Int) : HandIdentifier() {
        override fun toInfoSetKey(): String = "bucket=$bucketId"
    }

    abstract fun toInfoSetKey(): String
}
