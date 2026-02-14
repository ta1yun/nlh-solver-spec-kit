package com.nlhsolver.solver

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Suit

/**
 * Parser for canonical poker hand notation with fractional weights.
 *
 * Supports notation like:
 * - "AA" - pocket aces (all 6 combos @ weight 1.0)
 * - "AKs" - ace-king suited (4 combos @ weight 1.0)
 * - "AKo" - ace-king offsuit (12 combos @ weight 1.0)
 * - "AA:0.5" - pocket aces @ 50% weight
 * - "72o:0.25" - seven-deuce offsuit @ 25% weight
 *
 * Example usage:
 * ```kotlin
 * val range = RangeParser.fromNotation(
 *     "AA:1.0, KK:1.0, 65o:0.5, 53o:0.5",
 *     board = listOf(Card(Rank.KING, Suit.SPADES), ...)
 * )
 * ```
 */
object RangeParser {

    /**
     * Parse a comma-separated list of hands with optional weights.
     *
     * Format: "hand[:weight], hand[:weight], ..."
     * - hand: Canonical notation (AA, AKs, 72o, etc.)
     * - weight: Optional decimal weight (default 1.0)
     *
     * @param notation Comma-separated list of hands
     * @param board Board cards to exclude from range
     * @return WeightedRange with all specified combos
     */
    fun fromNotation(notation: String, board: List<Card> = emptyList()): HandRange.WeightedRange {
        require(notation.isNotBlank()) { "Notation cannot be blank" }

        val hands = mutableMapOf<Pair<Card, Card>, Double>()

        // Parse each hand specification
        notation.split(",").forEach { spec ->
            val trimmed = spec.trim()
            if (trimmed.isEmpty()) return@forEach

            // Split on colon to get hand and optional weight
            val parts = trimmed.split(":")
            val handNotation = parts[0].trim()
            val weight = if (parts.size > 1) {
                parts[1].trim().toDoubleOrNull()
                    ?: throw IllegalArgumentException("Invalid weight in '$spec'")
            } else {
                1.0
            }

            require(weight >= 0.0) { "Weight must be non-negative in '$spec'" }

            // Expand hand notation to specific combos
            val combos = parseHandNotation(handNotation, board)
            combos.forEach { combo ->
                hands[combo] = weight
            }
        }

        require(hands.isNotEmpty()) { "No valid hands found in notation" }
        return HandRange.WeightedRange(hands)
    }

    /**
     * Parse a single canonical hand notation into specific card combinations.
     *
     * Supports:
     * - "AA", "KK", etc. - pairs (6 combos)
     * - "AKs" - suited (4 combos)
     * - "AKo" - offsuit (12 combos)
     * - "AK" - both suited and offsuit (16 combos)
     *
     * @param notation Canonical hand notation
     * @param board Board cards to exclude
     * @return List of specific card pair combinations
     */
    fun parseHandNotation(notation: String, board: List<Card> = emptyList()): List<Pair<Card, Card>> {
        require(notation.length >= 2) { "Hand notation must be at least 2 characters: $notation" }

        // Parse ranks
        val rank1Char = notation[0]
        val rank2Char = notation[1]
        val rank1 = parseRank(rank1Char)
            ?: throw IllegalArgumentException("Invalid rank: $rank1Char")
        val rank2 = parseRank(rank2Char)
            ?: throw IllegalArgumentException("Invalid rank: $rank2Char")

        // Ensure rank1 >= rank2 (higher rank first)
        val (highRank, lowRank) = if (rank1.ordinal >= rank2.ordinal) {
            rank1 to rank2
        } else {
            rank2 to rank1
        }

        // Determine suited/offsuit/both
        val suitedness = when {
            notation.length == 2 && highRank == lowRank -> "pair"
            notation.endsWith("s") -> "suited"
            notation.endsWith("o") -> "offsuit"
            notation.length == 2 -> "both"  // AK = both AKs and AKo
            else -> throw IllegalArgumentException("Invalid hand notation: $notation")
        }

        // Generate combos
        val availableSuits = Suit.entries.filter { suit ->
            board.none { it.suit == suit && it.rank == highRank } &&
            board.none { it.suit == suit && it.rank == lowRank }
        }

        val combos = mutableListOf<Pair<Card, Card>>()

        when (suitedness) {
            "pair" -> {
                // All pair combos: C(4,2) = 6
                for (i in availableSuits.indices) {
                    for (j in i + 1 until availableSuits.size) {
                        val card1 = Card(highRank, availableSuits[i])
                        val card2 = Card(lowRank, availableSuits[j])
                        if (card1 !in board && card2 !in board) {
                            combos.add(Pair(card1, card2))
                        }
                    }
                }
            }
            "suited" -> {
                // All suited combos: 4
                availableSuits.forEach { suit ->
                    val card1 = Card(highRank, suit)
                    val card2 = Card(lowRank, suit)
                    if (card1 !in board && card2 !in board) {
                        combos.add(Pair(card1, card2))
                    }
                }
            }
            "offsuit" -> {
                // All offsuit combos: 4 * 3 = 12
                for (suit1 in availableSuits) {
                    for (suit2 in availableSuits) {
                        if (suit1 != suit2) {
                            val card1 = Card(highRank, suit1)
                            val card2 = Card(lowRank, suit2)
                            if (card1 !in board && card2 !in board) {
                                combos.add(Pair(card1, card2))
                            }
                        }
                    }
                }
            }
            "both" -> {
                // Both suited and offsuit: 4 + 12 = 16
                // Suited
                availableSuits.forEach { suit ->
                    val card1 = Card(highRank, suit)
                    val card2 = Card(lowRank, suit)
                    if (card1 !in board && card2 !in board) {
                        combos.add(Pair(card1, card2))
                    }
                }
                // Offsuit
                for (suit1 in availableSuits) {
                    for (suit2 in availableSuits) {
                        if (suit1 != suit2) {
                            val card1 = Card(highRank, suit1)
                            val card2 = Card(lowRank, suit2)
                            if (card1 !in board && card2 !in board) {
                                combos.add(Pair(card1, card2))
                            }
                        }
                    }
                }
            }
        }

        return combos
    }

    /**
     * Parse a rank character to Rank enum.
     */
    private fun parseRank(char: Char): Rank? = when (char.uppercaseChar()) {
        'A' -> Rank.ACE
        'K' -> Rank.KING
        'Q' -> Rank.QUEEN
        'J' -> Rank.JACK
        'T' -> Rank.TEN
        '9' -> Rank.NINE
        '8' -> Rank.EIGHT
        '7' -> Rank.SEVEN
        '6' -> Rank.SIX
        '5' -> Rank.FIVE
        '4' -> Rank.FOUR
        '3' -> Rank.THREE
        '2' -> Rank.TWO
        else -> null
    }

    /**
     * Builder for constructing ranges incrementally.
     *
     * Example:
     * ```kotlin
     * val range = RangeParser.builder()
     *     .add("AA", weight = 1.0)
     *     .add("KK", weight = 1.0)
     *     .add("65o", weight = 0.5)
     *     .build()
     * ```
     */
    class Builder(private val board: List<Card> = emptyList()) {
        private val hands = mutableMapOf<Pair<Card, Card>, Double>()

        /**
         * Add a hand with optional weight.
         */
        fun add(notation: String, weight: Double = 1.0): Builder {
            require(weight >= 0.0) { "Weight must be non-negative" }

            val combos = parseHandNotation(notation, board)
            combos.forEach { combo ->
                hands[combo] = weight
            }
            return this
        }

        /**
         * Add multiple hands from notation string.
         */
        fun addAll(notation: String): Builder {
            val range = fromNotation(notation, board)
            hands.putAll(range.hands)
            return this
        }

        /**
         * Remove a hand from the range.
         */
        fun remove(notation: String): Builder {
            val combos = parseHandNotation(notation, board)
            combos.forEach { combo ->
                hands.remove(combo)
            }
            return this
        }

        /**
         * Build the final WeightedRange.
         */
        fun build(): HandRange.WeightedRange {
            require(hands.isNotEmpty()) { "Cannot build empty range" }
            return HandRange.WeightedRange(hands)
        }
    }

    /**
     * Create a new builder.
     */
    fun builder(board: List<Card> = emptyList()): Builder = Builder(board)
}
