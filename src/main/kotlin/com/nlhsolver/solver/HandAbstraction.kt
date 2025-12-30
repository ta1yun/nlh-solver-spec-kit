package com.nlhsolver.solver

/**
 * Defines hand bucketing strategy for game tree abstraction (T026).
 *
 * Hand abstraction reduces the number of unique hand combinations by grouping
 * strategically similar hands into buckets. This is essential for making large
 * poker game trees tractable.
 *
 * @property preflopBuckets Number of preflop hand buckets (fixed at 169 canonical hands)
 * @property flopBuckets Number of flop hand buckets (50-500)
 * @property turnBuckets Number of turn hand buckets (50-500)
 * @property riverBuckets Number of river hand buckets (50-500)
 * @property bucketingMethod Algorithm used for bucketing
 */
data class HandAbstraction(
    val preflopBuckets: Int = 169,
    val flopBuckets: Int = 200,
    val turnBuckets: Int = 200,
    val riverBuckets: Int = 200,
    val bucketingMethod: BucketingMethod = BucketingMethod.EQUITY_HISTOGRAM
) {
    init {
        require(preflopBuckets == 169) {
            "Preflop buckets must be 169 (canonical hand types)"
        }
        require(flopBuckets in 50..500) {
            "Flop buckets must be between 50 and 500"
        }
        require(turnBuckets in 50..500) {
            "Turn buckets must be between 50 and 500"
        }
        require(riverBuckets in 50..500) {
            "River buckets must be between 50 and 500"
        }
    }
}

/**
 * Algorithm used for hand bucketing.
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
