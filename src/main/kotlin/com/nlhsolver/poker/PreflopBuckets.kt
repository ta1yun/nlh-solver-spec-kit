package com.nlhsolver.poker

/**
 * Preflop hand bucketing for No-Limit Hold'em.
 * Groups the 1,326 possible hole card combinations into 169 canonical hand types.
 * Hands that are strategically equivalent (same ranks, different suits) are bucketed together.
 */
object PreflopBuckets {

    /**
     * Represents a canonical preflop hand (e.g., "AKs", "QQ", "72o")
     */
    data class PreflopHand(
        val highRank: Rank,
        val lowRank: Rank,
        val suitedness: Suitedness
    ) : Comparable<PreflopHand> {

        val notation: String
            get() = "${highRank.symbol}${lowRank.symbol}${suitedness.symbol}"

        override fun compareTo(other: PreflopHand): Int {
            // Compare by hand strength (pairs > suited > offsuit, then by ranks)
            val thisStrength = getApproximateStrength()
            val otherStrength = other.getApproximateStrength()
            return thisStrength.compareTo(otherStrength)
        }

        /**
         * Simplified hand strength for ordering (not equity-based)
         */
        private fun getApproximateStrength(): Double {
            val pairBonus = if (isPair()) 2.0 else 0.0
            val suitedBonus = if (suitedness == Suitedness.SUITED) 0.3 else 0.0
            val rankValue = highRank.value + lowRank.value * 0.5
            return rankValue + pairBonus + suitedBonus
        }

        fun isPair(): Boolean = highRank == lowRank

        companion object {
            /**
             * Parse preflop hand from standard notation (e.g., "AKs", "QQ", "72o")
             */
            fun fromNotation(notation: String): PreflopHand {
                require(notation.length in 2..3) { "Invalid notation: $notation" }

                val highChar = notation[0]
                val lowChar = notation[1]
                val suitChar = notation.getOrNull(2)

                val high = Rank.fromSymbol(highChar)
                val low = Rank.fromSymbol(lowChar)

                // Ensure high >= low
                val (highRank, lowRank) = if (high.value >= low.value) {
                    Pair(high, low)
                } else {
                    Pair(low, high)
                }

                val suitedness = when {
                    highRank == lowRank -> Suitedness.PAIR
                    suitChar == 's' -> Suitedness.SUITED
                    suitChar == 'o' || suitChar == null -> Suitedness.OFFSUIT
                    else -> throw IllegalArgumentException("Invalid suitedness: $suitChar")
                }

                return PreflopHand(highRank, lowRank, suitedness)
            }
        }
    }

    enum class Suitedness(val symbol: String) {
        PAIR(""),
        SUITED("s"),
        OFFSUIT("o")
    }

    /**
     * All 169 canonical preflop hands, ordered by approximate strength
     */
    val allHands: List<PreflopHand> by lazy {
        val hands = mutableListOf<PreflopHand>()

        // Generate all pairs (13 hands)
        for (rank in Rank.entries) {
            hands.add(PreflopHand(rank, rank, Suitedness.PAIR))
        }

        // Generate all suited non-pairs (78 hands)
        for (high in Rank.entries) {
            for (low in Rank.entries) {
                if (high.value > low.value) {
                    hands.add(PreflopHand(high, low, Suitedness.SUITED))
                }
            }
        }

        // Generate all offsuit non-pairs (78 hands)
        for (high in Rank.entries) {
            for (low in Rank.entries) {
                if (high.value > low.value) {
                    hands.add(PreflopHand(high, low, Suitedness.OFFSUIT))
                }
            }
        }

        hands.sortedByDescending { it }
    }

    /**
     * Get bucket ID (0-168) for a specific preflop hand
     */
    fun getBucketId(hand: PreflopHand): Int = allHands.indexOf(hand).also {
        require(it >= 0) { "Hand not found in canonical list: ${hand.notation}" }
    }

    /**
     * Get bucket ID from two hole cards
     */
    fun getBucketId(card1: Card, card2: Card): Int {
        val (high, low) = if (card1.rank.value >= card2.rank.value) {
            Pair(card1, card2)
        } else {
            Pair(card2, card1)
        }

        val suitedness = when {
            high.rank == low.rank -> Suitedness.PAIR
            high.suit == low.suit -> Suitedness.SUITED
            else -> Suitedness.OFFSUIT
        }

        val hand = PreflopHand(high.rank, low.rank, suitedness)
        return getBucketId(hand)
    }

    /**
     * Get canonical hand by bucket ID
     */
    fun getHand(bucketId: Int): PreflopHand {
        require(bucketId in 0 until 169) { "Bucket ID must be 0-168, got $bucketId" }
        return allHands[bucketId]
    }

    /**
     * Get all hole card combinations for a canonical hand
     */
    fun getHandCombinations(hand: PreflopHand): List<Pair<Card, Card>> {
        return when (hand.suitedness) {
            Suitedness.PAIR -> {
                // 6 combinations for pairs (C(4,2))
                Suit.entries.flatMap { suit1 ->
                    Suit.entries.filter { it > suit1 }.map { suit2 ->
                        Pair(Card(hand.highRank, suit1), Card(hand.lowRank, suit2))
                    }
                }
            }
            Suitedness.SUITED -> {
                // 4 combinations for suited hands
                Suit.entries.map { suit ->
                    Pair(Card(hand.highRank, suit), Card(hand.lowRank, suit))
                }
            }
            Suitedness.OFFSUIT -> {
                // 12 combinations for offsuit hands
                Suit.entries.flatMap { suit1 ->
                    Suit.entries.filter { it != suit1 }.map { suit2 ->
                        Pair(Card(hand.highRank, suit1), Card(hand.lowRank, suit2))
                    }
                }
            }
        }
    }

    /**
     * Get approximate equity of a preflop hand (simplified)
     * In production, this would be based on precomputed sim results
     */
    fun getApproximateEquity(hand: PreflopHand): Double {
        // Very simplified equity estimation
        // Real solver would use precomputed equity tables
        return when {
            hand.isPair() && hand.highRank.value >= 10 -> 0.85 + (hand.highRank.value - 10) * 0.03
            hand.isPair() -> 0.55 + hand.highRank.value * 0.02
            hand.suitedness == Suitedness.SUITED && hand.highRank.value >= 12 -> 0.65
            hand.highRank.value >= 12 -> 0.60
            else -> 0.35 + (hand.highRank.value + hand.lowRank.value) * 0.01
        }
    }
}
