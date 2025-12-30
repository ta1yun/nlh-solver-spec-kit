package com.nlhsolver.poker

/**
 * Represents a playing card with a rank and suit.
 * Immutable value class for poker cards.
 */
data class Card(val rank: Rank, val suit: Suit) : Comparable<Card> {

    override fun compareTo(other: Card): Int = rank.compareTo(other.rank)

    override fun toString(): String = "${rank.symbol}${suit.symbol}"

    companion object {
        // Common card constants
        val ACE_SPADES = Card(Rank.ACE, Suit.SPADES)
        val KING_DIAMONDS = Card(Rank.KING, Suit.DIAMONDS)
        val QUEEN_HEARTS = Card(Rank.QUEEN, Suit.HEARTS)
        val JACK_CLUBS = Card(Rank.JACK, Suit.CLUBS)
        val TEN_SPADES = Card(Rank.TEN, Suit.SPADES)

        /**
         * Parse a card from string notation (e.g., "As", "Kh", "2d")
         */
        fun fromString(str: String): Card {
            require(str.length == 2) { "Card string must be 2 characters (e.g., 'As', 'Kh')" }
            val rankChar = str[0]
            val suitChar = str[1]
            val rank = Rank.fromSymbol(rankChar)
            val suit = Suit.fromSymbol(suitChar)
            return Card(rank, suit)
        }

        /**
         * Create a standard 52-card deck
         */
        fun createDeck(): List<Card> = Suit.entries.flatMap { suit ->
            Rank.entries.map { rank -> Card(rank, suit) }
        }

        /**
         * Alias for createDeck() for consistency with other code
         */
        fun standardDeck(): List<Card> = createDeck()
    }
}

/**
 * Card rank from Two (lowest) to Ace (highest)
 */
enum class Rank(val value: Int, val symbol: Char) {
    TWO(2, '2'),
    THREE(3, '3'),
    FOUR(4, '4'),
    FIVE(5, '5'),
    SIX(6, '6'),
    SEVEN(7, '7'),
    EIGHT(8, '8'),
    NINE(9, '9'),
    TEN(10, 'T'),
    JACK(11, 'J'),
    QUEEN(12, 'Q'),
    KING(13, 'K'),
    ACE(14, 'A');

    companion object {
        fun fromSymbol(symbol: Char): Rank = entries.find { it.symbol == symbol }
            ?: throw IllegalArgumentException("Invalid rank symbol: $symbol")

        fun fromValue(value: Int): Rank = entries.find { it.value == value }
            ?: throw IllegalArgumentException("Invalid rank value: $value")
    }
}

/**
 * Card suit (Spades, Hearts, Diamonds, Clubs)
 * Note: In poker, all suits have equal value
 */
enum class Suit(val symbol: Char, val displayName: String) {
    SPADES('s', "Spades"),
    HEARTS('h', "Hearts"),
    DIAMONDS('d', "Diamonds"),
    CLUBS('c', "Clubs");

    companion object {
        fun fromSymbol(symbol: Char): Suit = entries.find { it.symbol == symbol }
            ?: throw IllegalArgumentException("Invalid suit symbol: $symbol")
    }
}
