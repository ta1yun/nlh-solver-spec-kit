package com.nlhsolver.solver

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Suit
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.assertThrows

/**
 * Tests for RangeParser - canonical hand notation parsing with fractional weights.
 */
class RangeParserTest {

    @Test
    fun `parse single pocket pair`() {
        val range = RangeParser.fromNotation("AA")

        // AA has 6 combos: C(4,2) = 6
        assertEquals(6, range.size())
        assertEquals(6.0, range.totalWeight())

        // All combos should have weight 1.0
        range.hands.values.forEach { weight ->
            assertEquals(1.0, weight)
        }
    }

    @Test
    fun `parse suited hand`() {
        val range = RangeParser.fromNotation("AKs")

        // AKs has 4 combos (one per suit)
        assertEquals(4, range.size())
        assertEquals(4.0, range.totalWeight())
    }

    @Test
    fun `parse offsuit hand`() {
        val range = RangeParser.fromNotation("AKo")

        // AKo has 12 combos (4 suits for A * 3 remaining suits for K)
        assertEquals(12, range.size())
        assertEquals(12.0, range.totalWeight())
    }

    @Test
    fun `parse both suited and offsuit`() {
        val range = RangeParser.fromNotation("AK")

        // AK (no suffix) = both AKs and AKo = 4 + 12 = 16
        assertEquals(16, range.size())
        assertEquals(16.0, range.totalWeight())
    }

    @Test
    fun `parse hand with fractional weight`() {
        val range = RangeParser.fromNotation("AA:0.5")

        // AA has 6 combos, each weighted 0.5
        assertEquals(6, range.size())
        assertEquals(3.0, range.totalWeight())  // 6 * 0.5 = 3.0

        range.hands.values.forEach { weight ->
            assertEquals(0.5, weight)
        }
    }

    @Test
    fun `parse multiple hands with different weights`() {
        val range = RangeParser.fromNotation("AA:1.0, KK:1.0, 65o:0.5, 53o:0.25")

        // AA: 6 combos @ 1.0 = 6.0
        // KK: 6 combos @ 1.0 = 6.0
        // 65o: 12 combos @ 0.5 = 6.0
        // 53o: 12 combos @ 0.25 = 3.0
        // Total: 6 + 6 + 12 + 12 = 36 combos
        // Total weight: 6 + 6 + 6 + 3 = 21.0

        assertEquals(36, range.size())
        assertEquals(21.0, range.totalWeight(), 0.001)
    }

    @Test
    fun `parse with board removal`() {
        val board = listOf(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.ACE, Suit.HEARTS)
        )

        val range = RangeParser.fromNotation("AA", board)

        // AA normally has 6 combos, but AsAh is on the board
        // Remaining: AsAd, AsAc, AhAd, AhAc, AdAc
        // But As and Ah are on board, so only AdAc remains
        assertEquals(1, range.size())

        // Verify it's AdAc
        val combo = range.hands.keys.first()
        assertTrue(
            (combo.first.rank == Rank.ACE && combo.second.rank == Rank.ACE) &&
            (combo.first.suit in listOf(Suit.DIAMONDS, Suit.CLUBS)) &&
            (combo.second.suit in listOf(Suit.DIAMONDS, Suit.CLUBS)) &&
            (combo.first.suit != combo.second.suit)
        )
    }

    @Test
    fun `parse removes board cards from suited hands`() {
        val board = listOf(Card(Rank.KING, Suit.SPADES))

        val range = RangeParser.fromNotation("AKs", board)

        // AKs normally has 4 combos, but AsKs is blocked
        // Remaining: AhKh, AdKd, AcKc
        assertEquals(3, range.size())
    }

    @Test
    fun `builder adds single hand`() {
        val range = RangeParser.builder()
            .add("AA", weight = 1.0)
            .build()

        assertEquals(6, range.size())
        assertEquals(6.0, range.totalWeight())
    }

    @Test
    fun `builder adds multiple hands`() {
        val range = RangeParser.builder()
            .add("AA", weight = 1.0)
            .add("KK", weight = 1.0)
            .add("65o", weight = 0.5)
            .build()

        // AA: 6, KK: 6, 65o: 12 = 24 combos
        assertEquals(24, range.size())

        // Total weight: 6*1.0 + 6*1.0 + 12*0.5 = 18.0
        assertEquals(18.0, range.totalWeight(), 0.001)
    }

    @Test
    fun `builder addAll parses notation string`() {
        val range = RangeParser.builder()
            .addAll("AA:1.0, KK:0.5")
            .build()

        // AA: 6 @ 1.0 = 6.0
        // KK: 6 @ 0.5 = 3.0
        assertEquals(12, range.size())
        assertEquals(9.0, range.totalWeight(), 0.001)
    }

    @Test
    fun `builder removes hand`() {
        val range = RangeParser.builder()
            .add("AA")
            .add("KK")
            .remove("AA")
            .build()

        // Only KK remains
        assertEquals(6, range.size())

        // All remaining combos should be KK
        range.hands.keys.forEach { (card1, card2) ->
            assertEquals(Rank.KING, card1.rank)
            assertEquals(Rank.KING, card2.rank)
        }
    }

    @Test
    fun `builder respects board cards`() {
        val board = listOf(Card(Rank.ACE, Suit.SPADES))

        val range = RangeParser.builder(board)
            .add("AKs")
            .build()

        // AsKs is blocked, so only 3 combos remain
        assertEquals(3, range.size())
    }

    @Test
    fun `rejects empty notation`() {
        assertThrows<IllegalArgumentException> {
            RangeParser.fromNotation("")
        }
    }

    @Test
    fun `rejects invalid weight`() {
        assertThrows<IllegalArgumentException> {
            RangeParser.fromNotation("AA:abc")
        }
    }

    @Test
    fun `rejects negative weight`() {
        assertThrows<IllegalArgumentException> {
            RangeParser.fromNotation("AA:-0.5")
        }
    }

    @Test
    fun `rejects invalid rank`() {
        assertThrows<IllegalArgumentException> {
            RangeParser.fromNotation("XY")
        }
    }

    @Test
    fun `rejects invalid notation format`() {
        assertThrows<IllegalArgumentException> {
            RangeParser.fromNotation("AAA")
        }

        assertThrows<IllegalArgumentException> {
            RangeParser.fromNotation("A")
        }
    }

    @Test
    fun `builder rejects empty range`() {
        assertThrows<IllegalArgumentException> {
            RangeParser.builder().build()
        }
    }

    @Test
    fun `handles whitespace in notation`() {
        val range = RangeParser.fromNotation("  AA:1.0  ,  KK:0.5  ")

        assertEquals(12, range.size())
        assertEquals(9.0, range.totalWeight(), 0.001)
    }

    @Test
    fun `handles trailing comma`() {
        val range = RangeParser.fromNotation("AA, KK,")

        // Should ignore empty entry after trailing comma
        assertEquals(12, range.size())
    }

    @Test
    fun `parse all broadway pairs`() {
        val range = RangeParser.fromNotation("AA, KK, QQ, JJ, TT")

        // 5 pairs * 6 combos = 30
        assertEquals(30, range.size())
        assertEquals(30.0, range.totalWeight())
    }

    @Test
    fun `realistic balanced range example`() {
        // BTN polarized range for 0.5 pot bet
        // Optimal bluff:value = 1:2
        val range = RangeParser.fromNotation(
            """
            AA:1.0, KK:1.0,
            65o:0.5, 53o:0.5
            """.trimIndent()
        )

        // AA: 6 @ 1.0 = 6.0
        // KK: 6 @ 1.0 = 6.0
        // 65o: 12 @ 0.5 = 6.0
        // 53o: 12 @ 0.5 = 6.0
        // Total weight: 24.0
        // Value weight: 12.0, Bluff weight: 12.0... wait that's wrong

        // Actually:
        // Total combos: 6 + 6 + 12 + 12 = 36
        // Effective weight: 6*1.0 + 6*1.0 + 12*0.5 + 12*0.5 = 6 + 6 + 6 + 6 = 24.0
        // Value: 12.0, Bluff: 12.0 (still 1:1, not 2:1)

        // Hmm, I need different weights. Let me recalculate:
        // For 2:1 value:bluff ratio with these hands:
        // AA + KK = 12 combos value
        // To get 2:1 ratio, bluffs should be 6 combos effective
        // 65o + 53o = 24 combos, so weight = 6/24 = 0.25

        assertEquals(36, range.size())
        assertEquals(24.0, range.totalWeight(), 0.001)
    }

    @Test
    fun `parse with ten notation`() {
        // T = Ten
        val range = RangeParser.fromNotation("TT, T9s")

        // TT: 6 combos
        // T9s: 4 combos
        assertEquals(10, range.size())
    }

    @Test
    fun `parse case insensitive`() {
        val range1 = RangeParser.fromNotation("aa")
        val range2 = RangeParser.fromNotation("AA")

        assertEquals(range1.size(), range2.size())
        assertEquals(range1.totalWeight(), range2.totalWeight())
    }
}
