package com.nlhsolver.poker

/**
 * Clusters turn cards based on texture change from flop.
 *
 * Turn clustering reduces the number of turn outcomes by grouping cards that
 * create similar texture changes. This is important for tractable full game tree solving.
 *
 * Texture changes tracked:
 * - Flush draw completion: 4th card of a suit on board
 * - Flush draw creation: 3rd card of a suit on board
 * - Board pairing: Card matches a board rank
 * - Straight completion: Card completes an obvious straight
 * - Blank: Card that doesn't significantly change texture
 *
 * Default: 10-15 clusters for turn
 */
class TurnClustering(
    private val numClusters: Int = DEFAULT_TURN_CLUSTERS
) {
    companion object {
        const val DEFAULT_TURN_CLUSTERS = 12
    }

    /**
     * Turn card cluster types based on texture change.
     */
    enum class TurnClusterType(val priority: Int) {
        FLUSH_COMPLETING(1),       // 4th card of a suit (flush possible)
        BOARD_PAIRING(2),          // Card matches a board rank
        STRAIGHT_COMPLETING(3),    // Completes obvious straight draw
        FLUSH_DRAW_ADDING(4),      // 3rd card of a suit (flush draw created)
        STRAIGHT_DRAW_ADDING(5),   // Adds straight draw potential
        HIGH_BLANK(6),             // High card that doesn't change texture (A, K, Q)
        MID_BLANK(7),              // Mid card blank (J, T, 9, 8)
        LOW_BLANK(8)               // Low card blank (7 or below)
    }

    /**
     * Result of clustering a turn card.
     */
    data class TurnCluster(
        val card: Card,
        val clusterType: TurnClusterType,
        val clusterId: Int,
        val description: String
    )

    /**
     * Cluster a turn card based on the flop.
     */
    fun clusterTurnCard(flop: List<Card>, turnCard: Card): TurnCluster {
        require(flop.size == 3) { "Flop must have exactly 3 cards" }
        require(turnCard !in flop) { "Turn card cannot be on the flop" }

        val clusterType = determineClusterType(flop, turnCard)
        val clusterId = clusterType.priority
        val description = describeCluster(flop, turnCard, clusterType)

        return TurnCluster(
            card = turnCard,
            clusterType = clusterType,
            clusterId = clusterId,
            description = description
        )
    }

    /**
     * Get all possible turn clusters for a given flop.
     * Returns a map of cluster ID to representative cards in that cluster.
     */
    fun getAllClusters(flop: List<Card>): Map<Int, List<Card>> {
        require(flop.size == 3) { "Flop must have exactly 3 cards" }

        val deck = Card.standardDeck().filterNot { it in flop }
        val clusters = mutableMapOf<Int, MutableList<Card>>()

        for (card in deck) {
            val cluster = clusterTurnCard(flop, card)
            clusters.getOrPut(cluster.clusterId) { mutableListOf() }.add(card)
        }

        return clusters
    }

    /**
     * Get a single representative card for each cluster (for abstracted solving).
     */
    fun getRepresentativeCards(flop: List<Card>): List<Pair<Int, Card>> {
        val clusters = getAllClusters(flop)
        return clusters.map { (clusterId, cards) ->
            // Pick the highest-ranked card as representative
            val representative = cards.maxByOrNull { it.rank.value } ?: cards.first()
            Pair(clusterId, representative)
        }.sortedBy { it.first }
    }

    private fun determineClusterType(flop: List<Card>, turnCard: Card): TurnClusterType {
        val flopSuits = flop.groupingBy { it.suit }.eachCount()
        val flopRanks = flop.map { it.rank }.toSet()

        // Check for flush completing (4th card of same suit)
        val suitCount = flopSuits[turnCard.suit] ?: 0
        if (suitCount >= 3) {
            return TurnClusterType.FLUSH_COMPLETING
        }

        // Check for board pairing
        if (turnCard.rank in flopRanks) {
            return TurnClusterType.BOARD_PAIRING
        }

        // Check for flush draw adding (3rd card of same suit)
        if (suitCount == 2) {
            return TurnClusterType.FLUSH_DRAW_ADDING
        }

        // Check for straight potential
        val allRanks = (flopRanks + turnCard.rank).map { it.value }.sorted()
        if (hasStraightPotential(allRanks)) {
            if (hasCompletedStraight(allRanks)) {
                return TurnClusterType.STRAIGHT_COMPLETING
            }
            return TurnClusterType.STRAIGHT_DRAW_ADDING
        }

        // Blank card - categorize by rank
        return when {
            turnCard.rank.value >= Rank.QUEEN.value -> TurnClusterType.HIGH_BLANK
            turnCard.rank.value >= Rank.EIGHT.value -> TurnClusterType.MID_BLANK
            else -> TurnClusterType.LOW_BLANK
        }
    }

    private fun hasStraightPotential(sortedRanks: List<Int>): Boolean {
        // Check for 3+ cards within a 5-card window
        for (i in 0 until sortedRanks.size - 2) {
            if (sortedRanks[i + 2] - sortedRanks[i] <= 4) {
                return true
            }
        }
        // Check for wheel potential (A-2-3-4-5)
        if (sortedRanks.contains(14)) { // Ace
            val lowRanks = sortedRanks.filter { it <= 5 || it == 14 }
            if (lowRanks.size >= 3) return true
        }
        return false
    }

    private fun hasCompletedStraight(sortedRanks: List<Int>): Boolean {
        // Need 4 cards to complete a 4-card straight draw
        if (sortedRanks.size < 4) return false

        // Check for 4 consecutive cards
        for (i in 0 until sortedRanks.size - 3) {
            if (sortedRanks[i + 3] - sortedRanks[i] == 3) {
                return true
            }
        }
        // Check wheel (A-2-3-4)
        if (sortedRanks.containsAll(listOf(2, 3, 4, 14))) return true

        return false
    }

    private fun describeCluster(flop: List<Card>, turnCard: Card, type: TurnClusterType): String {
        return when (type) {
            TurnClusterType.FLUSH_COMPLETING -> "Flush completing ${turnCard.suit.name.lowercase()}"
            TurnClusterType.BOARD_PAIRING -> "Pairs the ${turnCard.rank.name.lowercase()}"
            TurnClusterType.STRAIGHT_COMPLETING -> "Completes straight draw"
            TurnClusterType.FLUSH_DRAW_ADDING -> "Creates ${turnCard.suit.name.lowercase()} flush draw"
            TurnClusterType.STRAIGHT_DRAW_ADDING -> "Adds straight potential"
            TurnClusterType.HIGH_BLANK -> "High blank (${turnCard.rank.symbol})"
            TurnClusterType.MID_BLANK -> "Mid blank (${turnCard.rank.symbol})"
            TurnClusterType.LOW_BLANK -> "Low blank (${turnCard.rank.symbol})"
        }
    }
}
