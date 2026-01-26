package com.nlhsolver.poker

/**
 * Clusters river cards based on final hand strength distribution.
 *
 * River clustering is simpler than turn clustering because there are no more
 * cards to come. We cluster based on:
 * - Final board texture (flush possible, full house possible, etc.)
 * - How the card changes hand strength distributions
 *
 * Default: 10-15 clusters for river
 */
class RiverClustering(
    private val numClusters: Int = DEFAULT_RIVER_CLUSTERS
) {
    companion object {
        const val DEFAULT_RIVER_CLUSTERS = 10
    }

    /**
     * River card cluster types based on final board texture.
     */
    enum class RiverClusterType(val priority: Int) {
        FLUSH_COMPLETING(1),       // 5th card of a suit (flush possible on board)
        FLUSH_POSSIBLE(2),         // 4th card of a suit (flush possible with one hole card)
        QUADS_POSSIBLE(3),         // 4th card of same rank on board
        FULL_HOUSE_POSSIBLE(4),    // Creates full house possibility (paired board + trips)
        BOARD_PAIRING(5),          // Creates a pair on board
        STRAIGHT_COMPLETING(6),    // 5th card completes straight on board
        STRAIGHT_POSSIBLE(7),      // 4 to a straight on board
        HIGH_BLANK(8),             // High card blank
        MID_BLANK(9),              // Mid card blank
        LOW_BLANK(10)              // Low card blank
    }

    /**
     * Result of clustering a river card.
     */
    data class RiverCluster(
        val card: Card,
        val clusterType: RiverClusterType,
        val clusterId: Int,
        val description: String,
        val boardTexture: BoardTexture
    )

    /**
     * Board texture after river.
     */
    data class BoardTexture(
        val isFlushPossible: Boolean,
        val isStraightPossible: Boolean,
        val isPaired: Boolean,
        val isTrips: Boolean,
        val isQuads: Boolean
    )

    /**
     * Cluster a river card based on the turn board.
     */
    fun clusterRiverCard(turnBoard: List<Card>, riverCard: Card): RiverCluster {
        require(turnBoard.size == 4) { "Turn board must have exactly 4 cards" }
        require(riverCard !in turnBoard) { "River card cannot be on the turn board" }

        val fullBoard = turnBoard + riverCard
        val clusterType = determineClusterType(turnBoard, riverCard)
        val clusterId = clusterType.priority
        val description = describeCluster(turnBoard, riverCard, clusterType)
        val texture = analyzeTexture(fullBoard)

        return RiverCluster(
            card = riverCard,
            clusterType = clusterType,
            clusterId = clusterId,
            description = description,
            boardTexture = texture
        )
    }

    /**
     * Get all possible river clusters for a given turn board.
     */
    fun getAllClusters(turnBoard: List<Card>): Map<Int, List<Card>> {
        require(turnBoard.size == 4) { "Turn board must have exactly 4 cards" }

        val deck = Card.standardDeck().filterNot { it in turnBoard }
        val clusters = mutableMapOf<Int, MutableList<Card>>()

        for (card in deck) {
            val cluster = clusterRiverCard(turnBoard, card)
            clusters.getOrPut(cluster.clusterId) { mutableListOf() }.add(card)
        }

        return clusters
    }

    /**
     * Get a single representative card for each cluster.
     */
    fun getRepresentativeCards(turnBoard: List<Card>): List<Pair<Int, Card>> {
        val clusters = getAllClusters(turnBoard)
        return clusters.map { (clusterId, cards) ->
            val representative = cards.maxByOrNull { it.rank.value } ?: cards.first()
            Pair(clusterId, representative)
        }.sortedBy { it.first }
    }

    private fun determineClusterType(turnBoard: List<Card>, riverCard: Card): RiverClusterType {
        val fullBoard = turnBoard + riverCard
        val suitCounts = fullBoard.groupingBy { it.suit }.eachCount()
        val rankCounts = fullBoard.groupingBy { it.rank }.eachCount()
        val turnSuitCounts = turnBoard.groupingBy { it.suit }.eachCount()
        val turnRankCounts = turnBoard.groupingBy { it.rank }.eachCount()

        // Check for flush completing (5 of same suit on board)
        if (suitCounts.values.any { it == 5 }) {
            return RiverClusterType.FLUSH_COMPLETING
        }

        // Check for flush possible (4 of same suit on board)
        if (suitCounts.values.any { it == 4 }) {
            return RiverClusterType.FLUSH_POSSIBLE
        }

        // Check for quads possible (4 of same rank)
        if (rankCounts.values.any { it == 4 }) {
            return RiverClusterType.QUADS_POSSIBLE
        }

        // Check for full house possible (trips + pair or two pair + pairing card)
        val hasTrips = rankCounts.values.any { it >= 3 }
        val numPairs = rankCounts.values.count { it >= 2 }
        if (hasTrips && numPairs >= 2) {
            return RiverClusterType.FULL_HOUSE_POSSIBLE
        }

        // Check for board pairing
        if (turnRankCounts[riverCard.rank] != null && turnRankCounts[riverCard.rank]!! >= 1) {
            return RiverClusterType.BOARD_PAIRING
        }

        // Check for straight on board
        val sortedRanks = fullBoard.map { it.rank.value }.distinct().sorted()
        if (hasConsecutive(sortedRanks, 5)) {
            return RiverClusterType.STRAIGHT_COMPLETING
        }
        if (hasConsecutive(sortedRanks, 4)) {
            return RiverClusterType.STRAIGHT_POSSIBLE
        }

        // Blank card - categorize by rank
        return when {
            riverCard.rank.value >= Rank.QUEEN.value -> RiverClusterType.HIGH_BLANK
            riverCard.rank.value >= Rank.EIGHT.value -> RiverClusterType.MID_BLANK
            else -> RiverClusterType.LOW_BLANK
        }
    }

    private fun hasConsecutive(sortedRanks: List<Int>, count: Int): Boolean {
        if (sortedRanks.size < count) return false

        for (i in 0..sortedRanks.size - count) {
            if (sortedRanks[i + count - 1] - sortedRanks[i] == count - 1) {
                return true
            }
        }
        // Check wheel (A-2-3-4-5)
        if (count == 5 && sortedRanks.contains(14)) {
            val wheel = listOf(2, 3, 4, 5)
            if (sortedRanks.containsAll(wheel)) return true
        }
        return false
    }

    private fun analyzeTexture(board: List<Card>): BoardTexture {
        val suitCounts = board.groupingBy { it.suit }.eachCount()
        val rankCounts = board.groupingBy { it.rank }.eachCount()
        val sortedRanks = board.map { it.rank.value }.distinct().sorted()

        return BoardTexture(
            isFlushPossible = suitCounts.values.any { it >= 3 },
            isStraightPossible = hasConsecutive(sortedRanks, 3),
            isPaired = rankCounts.values.any { it >= 2 },
            isTrips = rankCounts.values.any { it >= 3 },
            isQuads = rankCounts.values.any { it >= 4 }
        )
    }

    private fun describeCluster(turnBoard: List<Card>, riverCard: Card, type: RiverClusterType): String {
        return when (type) {
            RiverClusterType.FLUSH_COMPLETING -> "Flush on board (${riverCard.suit.name.lowercase()})"
            RiverClusterType.FLUSH_POSSIBLE -> "4-flush on board (${riverCard.suit.name.lowercase()})"
            RiverClusterType.QUADS_POSSIBLE -> "Quads possible (${riverCard.rank.name.lowercase()})"
            RiverClusterType.FULL_HOUSE_POSSIBLE -> "Full house possible"
            RiverClusterType.BOARD_PAIRING -> "Pairs the ${riverCard.rank.name.lowercase()}"
            RiverClusterType.STRAIGHT_COMPLETING -> "Straight on board"
            RiverClusterType.STRAIGHT_POSSIBLE -> "4 to a straight on board"
            RiverClusterType.HIGH_BLANK -> "High blank (${riverCard.rank.symbol})"
            RiverClusterType.MID_BLANK -> "Mid blank (${riverCard.rank.symbol})"
            RiverClusterType.LOW_BLANK -> "Low blank (${riverCard.rank.symbol})"
        }
    }
}
