package com.nlhsolver.poker

/**
 * Represents a poker hand ranking from High Card (lowest) to Royal Flush (highest).
 * Each rank has a strength value for comparison.
 */
enum class HandRankType(val strength: Int, val displayName: String) {
    HIGH_CARD(1, "High Card"),
    ONE_PAIR(2, "One Pair"),
    TWO_PAIR(3, "Two Pair"),
    THREE_OF_A_KIND(4, "Three of a Kind"),
    STRAIGHT(5, "Straight"),
    FLUSH(6, "Flush"),
    FULL_HOUSE(7, "Full House"),
    FOUR_OF_A_KIND(8, "Four of a Kind"),
    STRAIGHT_FLUSH(9, "Straight Flush"),
    ROYAL_FLUSH(10, "Royal Flush");

    fun beats(other: HandRankType): Boolean = this.strength > other.strength
}

/**
 * Complete hand ranking with type and kicker cards for tie-breaking.
 * Implements Comparable for direct hand-vs-hand comparison.
 */
data class HandRank(
    val type: HandRankType,
    val primaryRanks: List<Rank>,  // Main cards (pair, trips, etc.)
    val kickers: List<Rank> = emptyList()  // Tie-breaking cards
) : Comparable<HandRank> {

    init {
        // Validate primary ranks and kickers based on hand type
        when (type) {
            HandRankType.HIGH_CARD -> {
                require(primaryRanks.size == 1) { "High card must have 1 primary rank" }
                require(kickers.size == 4) { "High card must have 4 kickers" }
            }
            HandRankType.ONE_PAIR -> {
                require(primaryRanks.size == 1) { "One pair must have 1 primary rank (the pair)" }
                require(kickers.size == 3) { "One pair must have 3 kickers" }
            }
            HandRankType.TWO_PAIR -> {
                require(primaryRanks.size == 2) { "Two pair must have 2 primary ranks" }
                require(kickers.size == 1) { "Two pair must have 1 kicker" }
            }
            HandRankType.THREE_OF_A_KIND -> {
                require(primaryRanks.size == 1) { "Three of a kind must have 1 primary rank" }
                require(kickers.size == 2) { "Three of a kind must have 2 kickers" }
            }
            HandRankType.STRAIGHT -> {
                require(primaryRanks.size == 1) { "Straight must have 1 primary rank (high card)" }
                require(kickers.isEmpty()) { "Straight has no kickers" }
            }
            HandRankType.FLUSH -> {
                require(primaryRanks.size == 5) { "Flush must have 5 primary ranks" }
                require(kickers.isEmpty()) { "Flush has no kickers" }
            }
            HandRankType.FULL_HOUSE -> {
                require(primaryRanks.size == 2) { "Full house must have 2 primary ranks (trips, pair)" }
                require(kickers.isEmpty()) { "Full house has no kickers" }
            }
            HandRankType.FOUR_OF_A_KIND -> {
                require(primaryRanks.size == 1) { "Four of a kind must have 1 primary rank" }
                require(kickers.size == 1) { "Four of a kind must have 1 kicker" }
            }
            HandRankType.STRAIGHT_FLUSH -> {
                require(primaryRanks.size == 1) { "Straight flush must have 1 primary rank (high card)" }
                require(kickers.isEmpty()) { "Straight flush has no kickers" }
            }
            HandRankType.ROYAL_FLUSH -> {
                require(primaryRanks.size == 1 && primaryRanks[0] == Rank.ACE) {
                    "Royal flush must have Ace as primary rank"
                }
                require(kickers.isEmpty()) { "Royal flush has no kickers" }
            }
        }
    }

    override fun compareTo(other: HandRank): Int {
        // First compare hand types
        val typeComparison = type.strength.compareTo(other.type.strength)
        if (typeComparison != 0) return typeComparison

        // Same hand type - compare primary ranks
        val primaryComparison = compareLists(primaryRanks, other.primaryRanks)
        if (primaryComparison != 0) return primaryComparison

        // Same primary ranks - compare kickers
        return compareLists(kickers, other.kickers)
    }

    private fun compareLists(list1: List<Rank>, list2: List<Rank>): Int {
        for (i in list1.indices) {
            if (i >= list2.size) return 1 // list1 is longer
            val comparison = list1[i].value.compareTo(list2[i].value)
            if (comparison != 0) return comparison
        }
        return if (list2.size > list1.size) -1 else 0
    }

    override fun toString(): String {
        val primaryStr = primaryRanks.joinToString(", ") { it.symbol.toString() }
        val kickerStr = if (kickers.isNotEmpty()) {
            " (${kickers.joinToString(", ") { it.symbol.toString() }})"
        } else ""
        return "${type.displayName}: $primaryStr$kickerStr"
    }

    companion object {
        /**
         * Create a Royal Flush (A-high straight flush)
         */
        fun royalFlush(): HandRank = HandRank(
            type = HandRankType.ROYAL_FLUSH,
            primaryRanks = listOf(Rank.ACE)
        )

        /**
         * Create a Straight Flush with given high card
         */
        fun straightFlush(highCard: Rank): HandRank = HandRank(
            type = HandRankType.STRAIGHT_FLUSH,
            primaryRanks = listOf(highCard)
        )

        /**
         * Create Four of a Kind with given rank and kicker
         */
        fun fourOfAKind(quadRank: Rank, kicker: Rank): HandRank = HandRank(
            type = HandRankType.FOUR_OF_A_KIND,
            primaryRanks = listOf(quadRank),
            kickers = listOf(kicker)
        )

        /**
         * Create Full House with trips and pair ranks
         */
        fun fullHouse(tripsRank: Rank, pairRank: Rank): HandRank = HandRank(
            type = HandRankType.FULL_HOUSE,
            primaryRanks = listOf(tripsRank, pairRank)
        )

        /**
         * Create Flush with 5 ranks (highest first)
         */
        fun flush(ranks: List<Rank>): HandRank {
            require(ranks.size == 5) { "Flush requires exactly 5 ranks" }
            return HandRank(
                type = HandRankType.FLUSH,
                primaryRanks = ranks.sortedByDescending { it.value }
            )
        }

        /**
         * Create Straight with high card
         */
        fun straight(highCard: Rank): HandRank = HandRank(
            type = HandRankType.STRAIGHT,
            primaryRanks = listOf(highCard)
        )

        /**
         * Create Three of a Kind with trips rank and kickers
         */
        fun threeOfAKind(tripsRank: Rank, kickers: List<Rank>): HandRank {
            require(kickers.size == 2) { "Three of a kind requires exactly 2 kickers" }
            return HandRank(
                type = HandRankType.THREE_OF_A_KIND,
                primaryRanks = listOf(tripsRank),
                kickers = kickers.sortedByDescending { it.value }
            )
        }

        /**
         * Create Two Pair with high pair, low pair, and kicker
         */
        fun twoPair(highPair: Rank, lowPair: Rank, kicker: Rank): HandRank = HandRank(
            type = HandRankType.TWO_PAIR,
            primaryRanks = listOf(highPair, lowPair).sortedByDescending { it.value },
            kickers = listOf(kicker)
        )

        /**
         * Create One Pair with pair rank and kickers
         */
        fun onePair(pairRank: Rank, kickers: List<Rank>): HandRank {
            require(kickers.size == 3) { "One pair requires exactly 3 kickers" }
            return HandRank(
                type = HandRankType.ONE_PAIR,
                primaryRanks = listOf(pairRank),
                kickers = kickers.sortedByDescending { it.value }
            )
        }

        /**
         * Create High Card with high card and kickers
         */
        fun highCard(highCard: Rank, kickers: List<Rank>): HandRank {
            require(kickers.size == 4) { "High card requires exactly 4 kickers" }
            return HandRank(
                type = HandRankType.HIGH_CARD,
                primaryRanks = listOf(highCard),
                kickers = kickers.sortedByDescending { it.value }
            )
        }
    }
}
