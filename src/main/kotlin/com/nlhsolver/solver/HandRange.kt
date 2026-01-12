package com.nlhsolver.solver

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Suit

/**
 * Represents a weighted range of poker hands.
 *
 * This sealed class provides a unified representation for hand ranges across all streets.
 * The core type is WeightedRange which maps specific hand combinations to probabilities.
 */
sealed class HandRange {
    /**
     * Weighted distribution over specific hands with explicit probabilities.
     *
     * Maps hand combinations (pairs of cards) to their weights/probabilities.
     * Weights can be unnormalized (will be normalized when needed).
     *
     * Example:
     * ```
     * val range = WeightedRange(mapOf(
     *   Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS)) to 1.0,  // AA
     *   Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS)) to 0.5 // KK (50% weight)
     * ))
     * ```
     */
    data class WeightedRange(
        val hands: Map<Pair<Card, Card>, Double>
    ) : HandRange() {
        init {
            require(hands.isNotEmpty()) { "Range cannot be empty" }
            require(hands.values.all { it >= 0.0 }) { "All weights must be non-negative" }
        }

        /**
         * Normalize weights so they sum to 1.0.
         * Returns a new WeightedRange with normalized weights.
         */
        fun normalize(): WeightedRange {
            val total = totalWeight()
            return if (total == 0.0) {
                this // Avoid division by zero
            } else {
                WeightedRange(hands.mapValues { it.value / total })
            }
        }

        /**
         * Get total weight across all hands.
         */
        fun totalWeight(): Double = hands.values.sum()

        /**
         * Get number of hand combinations in this range.
         */
        fun size(): Int = hands.size

        /**
         * Check if range contains a specific hand.
         */
        fun contains(hand: Pair<Card, Card>): Boolean = hands.containsKey(hand)

        /**
         * Get weight for a specific hand (0.0 if not in range).
         */
        fun getWeight(hand: Pair<Card, Card>): Double = hands[hand] ?: 0.0
    }

    companion object {
        /**
         * Create a range containing a single hand with weight 1.0.
         *
         * Useful for testing specific hand matchups.
         */
        fun singleHand(card1: Card, card2: Card): WeightedRange {
            return WeightedRange(mapOf(Pair(card1, card2) to 1.0))
        }

        /**
         * Create a uniform range where all hands have equal weight.
         *
         * @param hands List of hand combinations to include
         * @return WeightedRange with all hands weighted equally
         */
        fun uniform(hands: List<Pair<Card, Card>>): WeightedRange {
            require(hands.isNotEmpty()) { "Cannot create uniform range from empty list" }
            return WeightedRange(hands.associateWith { 1.0 })
        }

        /**
         * Create a polarized range (strong hands + bluffs, no medium strength).
         *
         * A polarized range contains:
         * - Top X% of hands by strength
         * - Bottom Y% of hands (as bluffs)
         * - Excludes middle hands
         *
         * @param topPercent Percentage of top hands to include (0-100)
         * @param bottomPercent Percentage of bottom hands to include (0-100)
         * @param board Board cards to exclude from range
         * @return WeightedRange representing polarized range
         */
        fun polarized(
            topPercent: Double,
            bottomPercent: Double,
            board: List<Card>
        ): WeightedRange {
            require(topPercent >= 0.0 && topPercent <= 100.0) { "topPercent must be 0-100" }
            require(bottomPercent >= 0.0 && bottomPercent <= 100.0) { "bottomPercent must be 0-100" }
            require(topPercent + bottomPercent <= 100.0) { "topPercent + bottomPercent cannot exceed 100" }

            // Get all possible hands excluding board cards
            val availableHands = getAllPossibleHands(board)

            // TODO: Implement hand strength ranking (requires hand evaluator)
            // For now, return a placeholder uniform range
            // This will be implemented when we integrate hand evaluation
            return uniform(availableHands.take((availableHands.size * (topPercent + bottomPercent) / 100.0).toInt()))
        }

        /**
         * Create a condensed range (medium strength hands, no nuts or bluffs).
         *
         * A condensed range contains hands in the middle of the strength distribution.
         *
         * @param percent Percentage of hands to include from the middle (0-100)
         * @param board Board cards to exclude from range
         * @return WeightedRange representing condensed range
         */
        fun condensed(
            percent: Double,
            board: List<Card>
        ): WeightedRange {
            require(percent >= 0.0 && percent <= 100.0) { "percent must be 0-100" }

            // Get all possible hands excluding board cards
            val availableHands = getAllPossibleHands(board)

            // TODO: Implement hand strength ranking (requires hand evaluator)
            // For now, return a placeholder uniform range
            // This will be implemented when we integrate hand evaluation
            val numHands = (availableHands.size * percent / 100.0).toInt()
            val skipStart = (availableHands.size * (100.0 - percent) / 200.0).toInt() // Skip top and bottom equally
            return uniform(availableHands.drop(skipStart).take(numHands))
        }

        /**
         * Create a range containing all 169 canonical preflop hands with combo frequencies.
         *
         * This is the default for preflop solving (backward compatible).
         * Weights each hand by its combo frequency:
         * - Pairs: 6 combos (e.g., AA has 6 ways: AsAh, AsAd, AsAc, AhAd, AhAc, AdAc)
         * - Suited: 4 combos (e.g., AKs has 4 ways: AsKs, AhKh, AdKd, AcKc)
         * - Offsuit: 12 combos (e.g., AKo has 12 ways: all non-matching suits)
         *
         * @return WeightedRange containing all 169 canonical hands
         */
        fun allCanonicalHands(): WeightedRange {
            val hands = mutableMapOf<Pair<Card, Card>, Double>()

            // Generate all possible two-card combinations
            val ranks = Rank.entries.toList()

            for (i in ranks.indices) {
                for (j in i until ranks.size) {
                    val rank1 = ranks[i]
                    val rank2 = ranks[j]

                    if (i == j) {
                        // Pair: 6 combinations
                        // Just pick one representative (we'll weight it by 6)
                        val card1 = Card(rank1, Suit.SPADES)
                        val card2 = Card(rank2, Suit.HEARTS)
                        hands[Pair(card1, card2)] = 6.0
                    } else {
                        // Non-pair: 4 suited + 12 offsuit = 16 total
                        // Add suited combination (weight 4)
                        val suitedCard1 = Card(rank2, Suit.SPADES) // Higher rank first
                        val suitedCard2 = Card(rank1, Suit.SPADES)
                        hands[Pair(suitedCard1, suitedCard2)] = 4.0

                        // Add offsuit combination (weight 12)
                        val offsuitCard1 = Card(rank2, Suit.SPADES)
                        val offsuitCard2 = Card(rank1, Suit.HEARTS)
                        hands[Pair(offsuitCard1, offsuitCard2)] = 12.0
                    }
                }
            }

            return WeightedRange(hands)
        }

        /**
         * Get all possible two-card combinations, excluding board cards and conflicts.
         *
         * @param board Board cards to exclude
         * @return List of all valid hand combinations
         */
        private fun getAllPossibleHands(board: List<Card>): List<Pair<Card, Card>> {
            val deck = Card.standardDeck().filterNot { it in board }
            val hands = mutableListOf<Pair<Card, Card>>()

            for (i in deck.indices) {
                for (j in i + 1 until deck.size) {
                    hands.add(Pair(deck[i], deck[j]))
                }
            }

            return hands
        }
    }
}
