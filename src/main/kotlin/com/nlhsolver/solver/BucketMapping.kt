package com.nlhsolver.solver

import com.nlhsolver.poker.PreflopBuckets
import com.nlhsolver.poker.Street
import kotlinx.serialization.Serializable

/**
 * Stores the mapping between bucket IDs and canonical hands.
 *
 * During solving, hands are assigned to buckets. This mapping tracks which
 * canonical hands belong to which bucket IDs for each street, enabling
 * range extraction after solving.
 *
 * @property strategyId The strategy this mapping belongs to
 * @property mappings Map of street -> bucket ID -> list of canonical hands
 */
@Serializable
data class BucketMapping(
    val strategyId: String,
    val mappings: Map<Street, Map<Int, List<String>>>  // Street -> BucketId -> Hand notations (e.g., ["AKs", "AKo"])
) {
    /**
     * Get all canonical hands in a specific bucket for a given street.
     */
    fun getHandsInBucket(street: Street, bucketId: Int): List<PreflopBuckets.PreflopHand> {
        val notations = mappings[street]?.get(bucketId) ?: emptyList()
        return notations.map { PreflopBuckets.PreflopHand.fromNotation(it) }
    }

    /**
     * Get the bucket ID for a canonical hand on a given street.
     */
    fun getBucketForHand(street: Street, hand: String): Int? {
        return mappings[street]?.entries?.find { (_, hands) ->
            hand in hands
        }?.key
    }

    companion object {
        /**
         * Create an empty bucket mapping.
         */
        fun empty(strategyId: String) = BucketMapping(
            strategyId = strategyId,
            mappings = emptyMap()
        )
    }
}

/**
 * Builder for constructing bucket mappings during solving.
 */
class BucketMappingBuilder(private val strategyId: String) {
    private val mappings = mutableMapOf<Street, MutableMap<Int, MutableSet<String>>>()

    /**
     * Add a hand to a bucket for a specific street.
     */
    fun addMapping(street: Street, bucketId: Int, handNotation: String) {
        mappings.getOrPut(street) { mutableMapOf() }
            .getOrPut(bucketId) { mutableSetOf() }
            .add(handNotation)
    }

    /**
     * Build the final immutable BucketMapping.
     */
    fun build(): BucketMapping {
        return BucketMapping(
            strategyId = strategyId,
            mappings = mappings.mapValues { (_, bucketMap) ->
                bucketMap.mapValues { (_, hands) -> hands.toList() }
            }
        )
    }
}
