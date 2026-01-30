package com.nlhsolver.poker

/**
 * Board clustering configuration for game tree abstraction (T126, T127).
 *
 * Board clustering reduces the number of unique boards by grouping strategically
 * similar boards into clusters. This is essential for blueprint solving where
 * solving all 22,100 flops is computationally prohibitive.
 *
 * Clustering Approach:
 * - Texture-based grouping: Boards with similar strategic properties (connected,
 *   paired, suited, high cards) are clustered together
 * - Equity distribution similarity: Boards where ranges have similar equity
 *   distributions are grouped
 * - Representative board selection: Each cluster selects a representative board
 *   for solving, then applies strategy to all boards in cluster
 *
 * Blueprint vs Refinement:
 * - Blueprint: Aggressive clustering (22,100 flops → 100 clusters, 1,081 turns → 50 clusters)
 *   for fast solving, accepting small EV loss
 * - Refinement: No clustering (solve specific boards exactly) for maximum precision
 *
 * @property mode Clustering mode (NONE, TEXTURE_BASED, EQUITY_DISTRIBUTION)
 * @property flopClusters Number of flop clusters (blueprint: 100, refinement: N/A)
 * @property turnClusters Number of turn clusters (blueprint: 50, refinement: N/A)
 * @property riverClusters Number of river clusters (usually N/A - river is solved exactly)
 */
data class BoardClustering(
    val mode: ClusteringMode = ClusteringMode.NONE,
    val flopClusters: Int? = null,
    val turnClusters: Int? = null,
    val riverClusters: Int? = null
) {
    init {
        if (mode != ClusteringMode.NONE) {
            // Validate cluster counts if clustering is enabled
            flopClusters?.let {
                require(it in 10..1000) {
                    "Flop clusters must be 10-1000 (got $it)"
                }
            }
            turnClusters?.let {
                require(it in 10..500) {
                    "Turn clusters must be 10-500 (got $it)"
                }
            }
            riverClusters?.let {
                require(it in 10..200) {
                    "River clusters must be 10-200 (got $it)"
                }
            }
        }
    }

    companion object {
        /**
         * No board clustering - solve all boards exactly.
         * Use for refinement phase or when computational resources allow.
         */
        fun none() = BoardClustering(mode = ClusteringMode.NONE)

        /**
         * Blueprint clustering (T127) - aggressive clustering for fast solving.
         *
         * Clusters:
         * - Flops: 22,100 → 100 clusters (~220x reduction)
         * - Turns: 1,081 per flop → 50 clusters per flop (~20x reduction)
         * - Rivers: No clustering (solve exactly)
         *
         * Expected EV loss: <2% pot
         * Expected solve time: 1-2 hours for full game tree
         *
         * Clustering method: Texture-based grouping
         * - Connectedness (rainbow, 2-tone, monotone)
         * - Paired (unpaired, paired, trips)
         * - Broadway density (low, medium, high)
         * - Suited structure
         */
        fun blueprint(
            flopClusters: Int = 100,
            turnClusters: Int = 50
        ) = BoardClustering(
            mode = ClusteringMode.TEXTURE_BASED,
            flopClusters = flopClusters,
            turnClusters = turnClusters,
            riverClusters = null  // No river clustering
        )

        /**
         * Refinement clustering - no clustering for maximum precision.
         *
         * Used when solving specific boards with fine abstraction.
         * Each board is solved exactly with no clustering.
         */
        fun refinement() = BoardClustering(mode = ClusteringMode.NONE)
    }
}

/**
 * Board clustering algorithm.
 */
enum class ClusteringMode {
    /**
     * No clustering - solve all boards exactly.
     * Use for refinement phase or small board sets.
     */
    NONE,

    /**
     * Texture-based clustering - group boards by strategic texture.
     *
     * Features used:
     * - Connectedness (gaps between cards)
     * - Paired structure
     * - Suited structure (rainbow, 2-tone, monotone)
     * - High card density (number of broadway cards)
     *
     * Simpler and faster than equity-based clustering.
     * Suitable for blueprint solving where speed matters.
     */
    TEXTURE_BASED,

    /**
     * Equity distribution clustering - group boards by equity similarity.
     *
     * Clusters boards where player ranges have similar equity distributions.
     * More sophisticated but computationally expensive.
     *
     * Requires pre-computing equity distributions for all boards vs ranges.
     * Better accuracy than texture-based at the cost of computation time.
     */
    EQUITY_DISTRIBUTION
}

/**
 * Board texture features for texture-based clustering.
 */
data class BoardTexture(
    val connectedness: Connectedness,
    val pairedStructure: PairedStructure,
    val suitedness: Suitedness,
    val highCardDensity: HighCardDensity
) {
    companion object {
        /**
         * Extract texture features from a board.
         *
         * @param board Board cards (3 for flop, 4 for turn, 5 for river)
         * @return BoardTexture features
         */
        fun fromBoard(board: List<Card>): BoardTexture {
            require(board.size in 3..5) { "Board must have 3-5 cards (got ${board.size})" }

            val ranks = board.map { it.rank }.sortedBy { it.value }
            val suits = board.map { it.suit }

            // Analyze connectedness (gaps between cards)
            val connectedness = when {
                board.size < 3 -> Connectedness.UNKNOWN
                else -> {
                    val gaps = ranks.zipWithNext { a, b -> b.value - a.value - 1 }
                    val maxGap = gaps.maxOrNull() ?: 0
                    when {
                        maxGap == 0 -> Connectedness.CONNECTED  // No gaps (e.g., 789)
                        maxGap <= 2 -> Connectedness.SOMEWHAT_CONNECTED  // Small gaps
                        else -> Connectedness.DISCONNECTED  // Large gaps
                    }
                }
            }

            // Analyze paired structure
            val rankCounts = ranks.groupingBy { it }.eachCount()
            val pairedStructure = when {
                rankCounts.values.any { it >= 3 } -> PairedStructure.TRIPS
                rankCounts.values.count { it == 2 } >= 2 -> PairedStructure.TWO_PAIR
                rankCounts.values.any { it == 2 } -> PairedStructure.PAIRED
                else -> PairedStructure.UNPAIRED
            }

            // Analyze suitedness
            val suitCounts = suits.groupingBy { it }.eachCount()
            val suitedness = when (suitCounts.values.maxOrNull() ?: 0) {
                board.size -> Suitedness.MONOTONE  // All same suit
                board.size - 1 -> Suitedness.TWO_TONE  // One suit dominates
                else -> Suitedness.RAINBOW  // All different or balanced
            }

            // Analyze high card density (broadway cards: T, J, Q, K, A)
            val broadwayCount = ranks.count { it.value >= Rank.TEN.value }
            val highCardDensity = when {
                broadwayCount >= 3 -> HighCardDensity.HIGH
                broadwayCount >= 2 -> HighCardDensity.MEDIUM
                else -> HighCardDensity.LOW
            }

            return BoardTexture(connectedness, pairedStructure, suitedness, highCardDensity)
        }
    }

    enum class Connectedness {
        CONNECTED,          // No gaps (e.g., 789)
        SOMEWHAT_CONNECTED, // Small gaps (e.g., 79J)
        DISCONNECTED,       // Large gaps (e.g., 28K)
        UNKNOWN
    }

    enum class PairedStructure {
        UNPAIRED,   // No pairs
        PAIRED,     // One pair
        TWO_PAIR,   // Two pairs
        TRIPS       // Three of a kind
    }

    enum class Suitedness {
        RAINBOW,   // All different suits or balanced
        TWO_TONE,  // One suit dominates (e.g., 2 of 3 on flop)
        MONOTONE   // All same suit
    }

    enum class HighCardDensity {
        LOW,     // 0-1 broadway cards
        MEDIUM,  // 2 broadway cards
        HIGH     // 3+ broadway cards
    }
}
