package com.nlhsolver.solver

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Suit
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.assertThrows

/**
 * Unit tests for HandRange sealed class and companion functions.
 *
 * Tests cover:
 * - WeightedRange construction and validation
 * - Normalization logic
 * - Helper constructors (singleHand, uniform, etc.)
 * - All canonical hands generation
 */
class HandRangeTest {

    @Test
    fun `WeightedRange rejects empty hands`() {
        assertThrows<IllegalArgumentException> {
            HandRange.WeightedRange(emptyMap())
        }
    }

    @Test
    fun `WeightedRange rejects negative weights`() {
        val hands = mapOf(
            Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS)) to -1.0
        )
        assertThrows<IllegalArgumentException> {
            HandRange.WeightedRange(hands)
        }
    }

    @Test
    fun `WeightedRange calculates total weight correctly`() {
        val range = HandRange.WeightedRange(
            mapOf(
                Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS)) to 2.0,
                Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS)) to 3.0
            )
        )

        assertEquals(5.0, range.totalWeight(), 0.0001)
    }

    @Test
    fun `WeightedRange normalizes correctly`() {
        val range = HandRange.WeightedRange(
            mapOf(
                Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS)) to 2.0,
                Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS)) to 3.0
            )
        )

        val normalized = range.normalize()

        assertEquals(1.0, normalized.totalWeight(), 0.0001)
        assertEquals(0.4, normalized.getWeight(Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS))), 0.0001)
        assertEquals(0.6, normalized.getWeight(Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS))), 0.0001)
    }

    @Test
    fun `singleHand creates range with one hand`() {
        val card1 = Card(Rank.ACE, Suit.SPADES)
        val card2 = Card(Rank.ACE, Suit.HEARTS)

        val range = HandRange.singleHand(card1, card2)

        assertEquals(1, range.size())
        assertEquals(1.0, range.getWeight(Pair(card1, card2)), 0.0001)
        assertEquals(1.0, range.totalWeight(), 0.0001)
    }

    @Test
    fun `uniform creates range with equal weights`() {
        val hands = listOf(
            Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS)),
            Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS)),
            Pair(Card(Rank.QUEEN, Suit.SPADES), Card(Rank.QUEEN, Suit.HEARTS))
        )

        val range = HandRange.uniform(hands)

        assertEquals(3, range.size())
        hands.forEach { hand ->
            assertEquals(1.0, range.getWeight(hand), 0.0001)
        }
        assertEquals(3.0, range.totalWeight(), 0.0001)
    }

    @Test
    fun `uniform rejects empty list`() {
        assertThrows<IllegalArgumentException> {
            HandRange.uniform(emptyList())
        }
    }

    @Test
    fun `allCanonicalHands generates 169 hands`() {
        val range = HandRange.allCanonicalHands()

        // 169 canonical hands: 13 pairs + 78 suited + 78 offsuit
        // But we represent them as: 13 pairs (1 each) + 78 non-pairs (2 each: suited and offsuit)
        // = 13 + 156 = 169 canonical hands, but represented as fewer actual combinations
        //
        // Actually: 13 pairs + 78 suited/offsuit combinations = 13 + (78 * 2) = 169 hands
        // But in our representation, we store: 13 pairs + 78 suited + 78 offsuit = 169 entries

        // Each pair gets 1 representative with weight 6
        // Each non-pair gets 2 representatives (suited + offsuit) with weights 4 + 12
        //
        // Total: 13 pairs * 1 + 78 non-pairs * 2 = 13 + 156 = 169 hands

        // Verify we have the correct number of hands
        // 13 pairs + 78 suited + 78 offsuit = 169
        assertEquals(169, range.size(), "Should have 169 canonical hands")
    }

    @Test
    fun `allCanonicalHands has correct combo frequencies`() {
        val range = HandRange.allCanonicalHands()

        // Check a few representative hands
        var foundPairWeight = false
        var foundSuitedWeight = false
        var foundOffsuitWeight = false

        range.hands.forEach { (hand, weight) ->
            val card1 = hand.first
            val card2 = hand.second

            if (card1.rank == card2.rank) {
                // Pair: should have weight 6
                assertEquals(6.0, weight, 0.0001, "Pairs should have weight 6")
                foundPairWeight = true
            } else if (card1.suit == card2.suit) {
                // Suited: should have weight 4
                assertEquals(4.0, weight, 0.0001, "Suited hands should have weight 4")
                foundSuitedWeight = true
            } else {
                // Offsuit: should have weight 12
                assertEquals(12.0, weight, 0.0001, "Offsuit hands should have weight 12")
                foundOffsuitWeight = true
            }
        }

        assertTrue(foundPairWeight, "Should have found at least one pair")
        assertTrue(foundSuitedWeight, "Should have found at least one suited hand")
        assertTrue(foundOffsuitWeight, "Should have found at least one offsuit hand")
    }

    @Test
    fun `allCanonicalHands total combos is 1326`() {
        val range = HandRange.allCanonicalHands()

        // Total combos in poker: C(52,2) = 1326
        // = 13 pairs * 6 + 78 non-pairs * (4 + 12)
        // = 78 + 1248 = 1326
        val totalCombos = range.totalWeight()

        assertEquals(1326.0, totalCombos, 0.0001, "Total combos should be 1326 (C(52,2))")
    }

    @Test
    fun `polarized filters board cards`() {
        val board = listOf(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.KING, Suit.HEARTS),
            Card(Rank.QUEEN, Suit.DIAMONDS),
            Card(Rank.JACK, Suit.CLUBS),
            Card(Rank.TEN, Suit.HEARTS)
        )

        val range = HandRange.polarized(topPercent = 20.0, bottomPercent = 10.0, board)

        // No hands in range should use cards from the board
        range.hands.keys.forEach { (card1, card2) ->
            assertFalse(board.contains(card1), "Hand should not contain board card: $card1")
            assertFalse(board.contains(card2), "Hand should not contain board card: $card2")
        }
    }

    @Test
    fun `condensed filters board cards`() {
        val board = listOf(
            Card(Rank.KING, Suit.SPADES),
            Card(Rank.SEVEN, Suit.HEARTS),
            Card(Rank.TWO, Suit.DIAMONDS),
            Card(Rank.NINE, Suit.CLUBS),
            Card(Rank.FOUR, Suit.HEARTS)
        )

        val range = HandRange.condensed(percent = 50.0, board)

        // No hands in range should use cards from the board
        range.hands.keys.forEach { (card1, card2) ->
            assertFalse(board.contains(card1), "Hand should not contain board card: $card1")
            assertFalse(board.contains(card2), "Hand should not contain board card: $card2")
        }
    }

    @Test
    fun `polarized rejects invalid percentages`() {
        val board = emptyList<Card>()

        assertThrows<IllegalArgumentException> {
            HandRange.polarized(topPercent = -1.0, bottomPercent = 10.0, board)
        }

        assertThrows<IllegalArgumentException> {
            HandRange.polarized(topPercent = 101.0, bottomPercent = 10.0, board)
        }

        assertThrows<IllegalArgumentException> {
            HandRange.polarized(topPercent = 60.0, bottomPercent = 50.0, board) // Sum > 100
        }
    }

    @Test
    fun `condensed rejects invalid percentages`() {
        val board = emptyList<Card>()

        assertThrows<IllegalArgumentException> {
            HandRange.condensed(percent = -1.0, board)
        }

        assertThrows<IllegalArgumentException> {
            HandRange.condensed(percent = 101.0, board)
        }
    }

    @Test
    fun `WeightedRange contains() checks membership correctly`() {
        val hand1 = Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS))
        val hand2 = Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS))
        val hand3 = Pair(Card(Rank.QUEEN, Suit.SPADES), Card(Rank.QUEEN, Suit.HEARTS))

        val range = HandRange.WeightedRange(
            mapOf(
                hand1 to 1.0,
                hand2 to 2.0
            )
        )

        assertTrue(range.contains(hand1))
        assertTrue(range.contains(hand2))
        assertFalse(range.contains(hand3))
    }

    @Test
    fun `WeightedRange getWeight returns 0 for missing hands`() {
        val hand1 = Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS))
        val hand2 = Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS))

        val range = HandRange.WeightedRange(mapOf(hand1 to 3.0))

        assertEquals(3.0, range.getWeight(hand1), 0.0001)
        assertEquals(0.0, range.getWeight(hand2), 0.0001)
    }
}
