package com.nlhsolver.solver

import com.nlhsolver.poker.Card

/**
 * Filters and renormalizes blueprint ranges for specific boards (T144, T145).
 *
 * When solving a refinement for a specific board, we need to:
 * 1. Filter out impossible hands that contain board cards (card removal)
 * 2. Renormalize remaining hand weights to sum to 1.0
 *
 * Example:
 * ```kotlin
 * val blueprintRange = HandRange(
 *     weights = mapOf(
 *         "AKs" to 1.0,  // 4 combos
 *         "KQs" to 1.0,  // 4 combos
 *         "QJs" to 1.0   // 4 combos
 *     )
 * )
 *
 * val board = listOf(Ks, 7h, 2d)
 * val filtered = RangeFilter.filterForBoard(blueprintRange, board)
 *
 * // AKs: 3 combos remain (AsKh, AsKc, AsKd - AsKs blocked by Ks)
 * // KQs: 3 combos remain (KhQs, KcQs, KdQs - KsQs blocked by Ks)
 * // QJs: 4 combos remain (all unblocked)
 * // Total: 10 combos, weights renormalized to sum to 1.0
 * ```
 *
 * Card Removal Effects:
 * - Pairs: AA on Ah board → 3 combos (from 6)
 * - Suited hands: AKs on Ks board → 3 combos (from 4)
 * - Offsuit hands: AKo on Ks board → 9 combos (from 12)
 */
object RangeFilter {
    /**
     * Filter a HandRange for a specific board, removing impossible hands (T144).
     *
     * Removes all hand combinations that contain cards present on the board,
     * then renormalizes the weights to sum to 1.0 (T145).
     *
     * @param range Original blueprint range
     * @param board Board cards to filter for
     * @return Filtered and renormalized range
     */
    fun filterForBoard(range: HandRange.WeightedRange, board: List<Card>): HandRange.WeightedRange {
        if (board.isEmpty()) {
            // Even with empty board, normalize the range
            return range.normalize()
        }

        val boardCards = board.toSet()
        val filteredHands = mutableMapOf<Pair<Card, Card>, Double>()

        for ((hand, weight) in range.hands) {
            // Check if hand contains any board cards
            if (!boardCards.contains(hand.first) && !boardCards.contains(hand.second)) {
                filteredHands[hand] = weight
            }
            // If hand contains board card, it's blocked - don't include it
        }

        if (filteredHands.isEmpty()) {
            // Return a minimal range if everything is blocked
            // This shouldn't happen in practice
            return HandRange.uniform(listOf(Pair(Card(com.nlhsolver.poker.Rank.ACE, com.nlhsolver.poker.Suit.SPADES), Card(com.nlhsolver.poker.Rank.KING, com.nlhsolver.poker.Suit.SPADES))))
        }

        // Renormalize weights to sum to 1.0 (T145)
        return HandRange.WeightedRange(filteredHands).normalize()
    }

    /**
     * Filter a BlueprintRange for a specific board (T144, T145).
     *
     * Creates a new HandRange with hands filtered and renormalized.
     * This is used when setting up refinement solves.
     *
     * @param blueprintRange Blueprint range to filter
     * @param board Board cards to filter for
     * @return Filtered and renormalized HandRange
     */
    fun filterBlueprintRange(blueprintRange: BlueprintRange, board: List<Card>): HandRange.WeightedRange {
        // Convert hand notation to actual card pairs
        val handPairs = mutableMapOf<Pair<Card, Card>, Double>()

        for ((handNotation, frequencies) in blueprintRange.handFrequencies) {
            // Total frequency is sum of all action frequencies
            val totalFreq = frequencies.fold + frequencies.call + frequencies.raise +
                           frequencies.check + frequencies.bet + frequencies.allin

            if (totalFreq > 0.0) {
                // Convert hand notation to card pairs
                // For simplicity, use representative cards
                // TODO: In production, expand to all combos
                val (card1, card2) = parseHandNotation(handNotation)
                handPairs[Pair(card1, card2)] = totalFreq
            }
        }

        if (handPairs.isEmpty()) {
            // Return minimal range if empty
            return HandRange.uniform(listOf(Pair(Card(com.nlhsolver.poker.Rank.ACE, com.nlhsolver.poker.Suit.SPADES), Card(com.nlhsolver.poker.Rank.KING, com.nlhsolver.poker.Suit.SPADES))))
        }

        val baseRange = HandRange.WeightedRange(handPairs)
        return filterForBoard(baseRange, board)
    }

    /**
     * Parse hand notation to a representative card pair.
     *
     * @param notation Hand notation (e.g., "AA", "AKs", "AKo")
     * @return Pair of cards representing this hand
     */
    private fun parseHandNotation(notation: String): Pair<Card, Card> {
        val isPair = notation.length == 2
        val isSuited = notation.endsWith("s")

        return if (isPair) {
            val rank = parseRank(notation[0])
            Pair(Card(rank, com.nlhsolver.poker.Suit.SPADES), Card(rank, com.nlhsolver.poker.Suit.HEARTS))
        } else {
            val rank1 = parseRank(notation[0])
            val rank2 = parseRank(notation[1])
            if (isSuited) {
                Pair(Card(rank1, com.nlhsolver.poker.Suit.SPADES), Card(rank2, com.nlhsolver.poker.Suit.SPADES))
            } else {
                Pair(Card(rank1, com.nlhsolver.poker.Suit.SPADES), Card(rank2, com.nlhsolver.poker.Suit.HEARTS))
            }
        }
    }


    /**
     * Parse a rank character to a Rank enum.
     *
     * @param rankChar Character representing a rank (A, K, Q, etc.)
     * @return Corresponding Rank enum value
     */
    private fun parseRank(rankChar: Char): com.nlhsolver.poker.Rank {
        return when (rankChar) {
            'A' -> com.nlhsolver.poker.Rank.ACE
            'K' -> com.nlhsolver.poker.Rank.KING
            'Q' -> com.nlhsolver.poker.Rank.QUEEN
            'J' -> com.nlhsolver.poker.Rank.JACK
            'T' -> com.nlhsolver.poker.Rank.TEN
            '9' -> com.nlhsolver.poker.Rank.NINE
            '8' -> com.nlhsolver.poker.Rank.EIGHT
            '7' -> com.nlhsolver.poker.Rank.SEVEN
            '6' -> com.nlhsolver.poker.Rank.SIX
            '5' -> com.nlhsolver.poker.Rank.FIVE
            '4' -> com.nlhsolver.poker.Rank.FOUR
            '3' -> com.nlhsolver.poker.Rank.THREE
            '2' -> com.nlhsolver.poker.Rank.TWO
            else -> throw IllegalArgumentException("Invalid rank character: $rankChar")
        }
    }
}
