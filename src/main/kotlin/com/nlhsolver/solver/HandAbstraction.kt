package com.nlhsolver.solver

import com.nlhsolver.poker.Card

/**
 * Defines hand abstraction strategy for game tree abstraction (T026).
 *
 * Hand abstraction reduces the number of unique hand combinations by grouping
 * strategically similar hands into buckets. This is essential for making large
 * poker game trees tractable.
 *
 * For small ranges, abstraction can be disabled (mode = NONE), which preserves
 * per-hand precision at the cost of larger game trees.
 *
 * @property mode Whether to use bucketing or exact hand identity
 * @property numBuckets Number of buckets when using EQUITY_BUCKETING mode
 * @property bucketingMethod Algorithm used for bucketing (when mode = EQUITY_BUCKETING)
 */
data class HandAbstraction(
    val mode: AbstractionMode = AbstractionMode.AUTO,
    val numBuckets: Int = 200,
    val bucketingMethod: BucketingMethod = BucketingMethod.EQUITY_HISTOGRAM
) {
    init {
        if (mode == AbstractionMode.EQUITY_BUCKETING) {
            require(numBuckets in 10..500) {
                "Bucket count must be between 10 and 500 (got $numBuckets)"
            }
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
