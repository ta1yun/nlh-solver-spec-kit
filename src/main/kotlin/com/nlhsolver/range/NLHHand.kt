package com.nlhsolver.range

import com.nlhsolver.poker.Card

/**
 * Represents a two-card starting hand in No-Limit Hold'em.
 *
 * NLH uses a 52-card deck with 1,326 possible two-card combinations.
 * Hands are represented in canonical form with the higher card first.
 *
 * IMPORTANT: Cards are automatically sorted to ensure consistent equality.
 * NLHHand(A♠, K♥) equals NLHHand(K♥, A♠).
 *
 * Examples:
 * - "AA" = pocket aces
 * - "AKs" = ace-king suited
 * - "AKo" = ace-king offsuit
 * - "72o" = seven-deuce offsuit (worst hand)
 */
class NLHHand(c1: Card, c2: Card) : Hand {

    val card1: Card
    val card2: Card

    init {
        require(c1 != c2) { "Cannot have duplicate cards in a hand: $c1" }

        // Normalize card order: higher rank first, or same rank with smaller suit ordinal first
        val (first, second) = if (c1.rank > c2.rank || (c1.rank == c2.rank && c1.suit.ordinal < c2.suit.ordinal)) {
            c1 to c2
        } else {
            c2 to c1
        }

        card1 = first
        card2 = second
    }

    override val id: String by lazy {
        // Cards are already in canonical order (higher rank first)
        when {
            card1.rank == card2.rank -> {
                // Pair: "AA", "KK", "22"
                "${card1.rank.symbol}${card2.rank.symbol}"
            }
            card1.suit == card2.suit -> {
                // Suited: "AKs", "T9s"
                "${card1.rank.symbol}${card2.rank.symbol}s"
            }
            else -> {
                // Offsuit: "AKo", "72o"
                "${card1.rank.symbol}${card2.rank.symbol}o"
            }
        }
    }

    /**
     * Two NLH hands conflict if they share any card.
     * For example, A♠K♠ conflicts with A♠Q♠ (both have A♠).
     */
    override fun conflicts(other: Hand): Boolean {
        if (other !is NLHHand) return false
        return card1 == other.card1 || card1 == other.card2 ||
               card2 == other.card1 || card2 == other.card2
    }

    /**
     * Returns whether this hand is a pocket pair.
     */
    fun isPair(): Boolean = card1.rank == card2.rank

    /**
     * Returns whether this hand is suited.
     */
    fun isSuited(): Boolean = card1.suit == card2.suit

    /**
     * Returns the higher card in the hand (always card1 due to normalization).
     */
    fun highCard(): Card = card1

    /**
     * Returns the lower card in the hand (always card2 due to normalization).
     */
    fun lowCard(): Card = card2

    override fun toString(): String = id

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is NLHHand) return false
        return card1 == other.card1 && card2 == other.card2
    }

    override fun hashCode(): Int {
        return 31 * card1.hashCode() + card2.hashCode()
    }

    companion object {
        /**
         * Parse a hand from canonical string notation.
         *
         * Examples:
         * - "AA" = any pocket aces combo
         * - "AKs" = any suited ace-king
         * - "AKo" = any offsuit ace-king
         *
         * Note: This returns a representative combo, not all combos.
         */
        fun fromString(str: String): NLHHand {
            require(str.length in 2..3) {
                "Hand string must be 2-3 characters (e.g., 'AA', 'AKs', 'AKo'), got: $str"
            }

            val rank1Char = str[0]
            val rank2Char = str[1]
            val rank1 = com.nlhsolver.poker.Rank.fromSymbol(rank1Char)
            val rank2 = com.nlhsolver.poker.Rank.fromSymbol(rank2Char)

            return when {
                str.length == 2 -> {
                    // Pair: use first two suits
                    require(rank1 == rank2) { "Two-character hands must be pairs: $str" }
                    NLHHand(
                        Card(rank1, com.nlhsolver.poker.Suit.SPADES),
                        Card(rank2, com.nlhsolver.poker.Suit.HEARTS)
                    )
                }
                str[2] == 's' -> {
                    // Suited: use same suit
                    NLHHand(
                        Card(rank1, com.nlhsolver.poker.Suit.SPADES),
                        Card(rank2, com.nlhsolver.poker.Suit.SPADES)
                    )
                }
                str[2] == 'o' -> {
                    // Offsuit: use different suits
                    NLHHand(
                        Card(rank1, com.nlhsolver.poker.Suit.SPADES),
                        Card(rank2, com.nlhsolver.poker.Suit.HEARTS)
                    )
                }
                else -> throw IllegalArgumentException("Invalid hand string: $str")
            }
        }

        /**
         * Generate all 1,326 possible two-card combinations.
         */
        fun allCombos(): List<NLHHand> {
            val deck = Card.createDeck()
            val combos = mutableListOf<NLHHand>()

            for (i in deck.indices) {
                for (j in i + 1 until deck.size) {
                    combos.add(NLHHand(deck[i], deck[j]))
                }
            }

            return combos
        }

        /**
         * Generate all combos for a specific hand type.
         *
         * Examples:
         * - "AA" generates 6 combos (4 choose 2 for pocket pairs)
         * - "AKs" generates 4 combos (one per suit)
         * - "AKo" generates 12 combos (4 * 3 offsuit combinations)
         */
        fun combosForHand(handId: String): List<NLHHand> {
            require(handId.length in 2..3) { "Invalid hand ID: $handId" }

            val rank1Char = handId[0]
            val rank2Char = handId[1]
            val rank1 = com.nlhsolver.poker.Rank.fromSymbol(rank1Char)
            val rank2 = com.nlhsolver.poker.Rank.fromSymbol(rank2Char)

            return when {
                handId.length == 2 -> {
                    // Pair: all combinations of same rank with different suits
                    require(rank1 == rank2) { "Two-character hands must be pairs: $handId" }
                    val suits = com.nlhsolver.poker.Suit.entries
                    val combos = mutableListOf<NLHHand>()
                    for (i in suits.indices) {
                        for (j in i + 1 until suits.size) {
                            combos.add(NLHHand(Card(rank1, suits[i]), Card(rank1, suits[j])))
                        }
                    }
                    combos
                }
                handId[2] == 's' -> {
                    // Suited: all same-suit combinations
                    com.nlhsolver.poker.Suit.entries.map { suit ->
                        NLHHand(Card(rank1, suit), Card(rank2, suit))
                    }
                }
                handId[2] == 'o' -> {
                    // Offsuit: all different-suit combinations
                    val combos = mutableListOf<NLHHand>()
                    for (suit1 in com.nlhsolver.poker.Suit.entries) {
                        for (suit2 in com.nlhsolver.poker.Suit.entries) {
                            if (suit1 != suit2) {
                                combos.add(NLHHand(Card(rank1, suit1), Card(rank2, suit2)))
                            }
                        }
                    }
                    combos
                }
                else -> throw IllegalArgumentException("Invalid hand string: $handId")
            }
        }
    }
}
