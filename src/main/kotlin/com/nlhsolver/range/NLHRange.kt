package com.nlhsolver.range

/**
 * Probability distribution over NLH hands.
 *
 * Tracks weights for poker hands, either at combo level (1326 combos) or
 * at bucketed level for abstraction.
 *
 * Example ranges:
 * - Uniform: All 1326 combos have weight 1.0
 * - After 3bet: Polarized (AA, KK, AK, bluffs)
 * - After call: Capped (removed premiums that would 4bet)
 */
class NLHRange(
    private val weights: Map<NLHHand, Double>  // hand -> weight
) : Range {

    override fun getWeight(hand: Hand): Double {
        require(hand is NLHHand) { "NLHRange only works with NLHHand, got: ${hand::class}" }
        return weights.getOrDefault(hand, 0.0)
    }

    override fun getActiveHands(): List<Pair<Hand, Double>> {
        return weights
            .filter { it.value > 0.0 }
            .map { (hand, weight) -> hand to weight }
            .sortedByDescending { it.second }  // Highest weight first
    }

    override fun getTotalWeight(): Double = weights.values.sum()

    override fun excluding(hand: Hand): Range {
        require(hand is NLHHand) { "NLHRange only works with NLHHand, got: ${hand::class}" }

        // Remove all hands that conflict with the given hand
        val filtered = weights.filterKeys { !it.conflicts(hand) }
        return NLHRange(filtered)
    }

    /**
     * Create a normalized copy where weights sum to 1.0.
     * Useful for displaying as percentages.
     */
    fun normalized(): NLHRange {
        val total = getTotalWeight()
        if (total == 0.0) return this

        val normalized = weights.mapValues { it.value / total }
        return NLHRange(normalized)
    }

    /**
     * Get total weight for a specific hand type (e.g., "AA", "AKs", "AKo").
     * Sums weight across all combos of that hand type.
     */
    fun getWeightForHandType(handId: String): Double {
        val combos = NLHHand.combosForHand(handId)
        return combos.sumOf { weights.getOrDefault(it, 0.0) }
    }

    /**
     * Get the subset of this range with only the specified hands.
     */
    fun filterTo(handIds: Set<String>): NLHRange {
        val allowedCombos = handIds.flatMap { NLHHand.combosForHand(it) }.toSet()
        val filtered = weights.filterKeys { it in allowedCombos }
        return NLHRange(filtered)
    }

    /**
     * Merge this range with another, taking the maximum weight for each hand.
     */
    fun union(other: NLHRange): NLHRange {
        val allHands = (weights.keys + other.weights.keys).toSet()
        val merged = allHands.associateWith { hand ->
            maxOf(
                weights.getOrDefault(hand, 0.0),
                other.weights.getOrDefault(hand, 0.0)
            )
        }
        return NLHRange(merged)
    }

    /**
     * Scale all weights by a constant factor.
     */
    fun scale(factor: Double): NLHRange {
        require(factor >= 0.0) { "Scale factor must be non-negative, got: $factor" }
        val scaled = weights.mapValues { it.value * factor }
        return NLHRange(scaled)
    }

    override fun toString(): String {
        val activeCount = weights.count { it.value > 0.0 }
        val totalWeight = getTotalWeight()
        return "NLHRange(active=$activeCount, totalWeight=${"%.1f".format(totalWeight)})"
    }

    companion object {
        /**
         * Create uniform range with all 1326 combos weighted equally.
         * This is the starting range pre-flop.
         */
        fun uniform(): NLHRange {
            val allCombos = NLHHand.allCombos()
            return NLHRange(allCombos.associateWith { 1.0 })
        }

        /**
         * Create empty range (no hands).
         */
        fun empty(): NLHRange {
            return NLHRange(emptyMap())
        }

        /**
         * Create range from specific hand types with weights.
         *
         * Example:
         * ```
         * val range = NLHRange.fromHandTypes(mapOf(
         *     "AA" to 1.0,    // All pocket aces
         *     "KK" to 1.0,    // All pocket kings
         *     "AKs" to 1.0,   // All suited AK
         *     "AKo" to 0.5    // Half of offsuit AK
         * ))
         * ```
         */
        fun fromHandTypes(handWeights: Map<String, Double>): NLHRange {
            val comboWeights = mutableMapOf<NLHHand, Double>()

            for ((handId, weight) in handWeights) {
                if (weight > 0.0) {
                    val combos = NLHHand.combosForHand(handId)
                    for (combo in combos) {
                        comboWeights[combo] = weight
                    }
                }
            }

            return NLHRange(comboWeights)
        }

        /**
         * Create range from a percentage string like "AA,KK,AKs,AKo" (top 2.6%).
         *
         * This is a simplified version - full range parsing would handle more complex
         * notations like "JJ+,AQs+,AQo+" etc.
         */
        fun fromString(rangeStr: String): NLHRange {
            if (rangeStr.isBlank()) return empty()

            val handIds = rangeStr.split(",").map { it.trim() }.filter { it.isNotEmpty() }
            val handWeights = handIds.associateWith { 1.0 }
            return fromHandTypes(handWeights)
        }

        /**
         * Create range excluding hands that conflict with a given hand.
         * Used when we know hero has certain cards.
         */
        fun uniformExcluding(hand: NLHHand): NLHRange {
            return uniform().excluding(hand) as NLHRange
        }

        /**
         * Create range from bucket weights.
         * Each bucket gets equal weight distributed across its combos.
         *
         * @param bucketWeights Map from bucket ID to weight
         * @param bucketMapping Map from hand to bucket ID
         */
        fun fromBuckets(
            bucketWeights: Map<Int, Double>,
            bucketMapping: Map<NLHHand, Int>
        ): NLHRange {
            val comboWeights = mutableMapOf<NLHHand, Double>()

            // Group hands by bucket
            val bucketHands = bucketMapping.entries.groupBy { it.value }

            for ((bucketId, weight) in bucketWeights) {
                val handsInBucket = bucketHands[bucketId]?.map { it.key } ?: continue
                val weightPerCombo = if (handsInBucket.isNotEmpty()) {
                    weight / handsInBucket.size
                } else {
                    0.0
                }

                for (hand in handsInBucket) {
                    comboWeights[hand] = weightPerCombo
                }
            }

            return NLHRange(comboWeights)
        }
    }
}
