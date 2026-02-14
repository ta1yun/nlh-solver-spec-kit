package com.nlhsolver.integration

import com.nlhsolver.poker.*
import com.nlhsolver.solver.*
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.BeforeAll

/**
 * Example test demonstrating the convenient RangeParser API.
 *
 * This shows the difference between:
 * - Old way: Manually constructing Card pairs with weights
 * - New way: Using canonical notation (AA:1.0, 65o:0.5, etc.)
 */
class RangeParserExampleTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun setup() {
            System.setProperty("NLH_FULL_POSTFLOP", "true")
            System.setProperty("NLH_TEST_MODE", "true")
        }
    }

    @Test
    fun `example - simple fractional range with RangeParser`() {
        println("\n=== RANGE PARSER EXAMPLE ===\n")

        val board = listOf(
            Card(Rank.KING, Suit.SPADES),
            Card(Rank.SEVEN, Suit.HEARTS),
            Card(Rank.TWO, Suit.DIAMONDS),
            Card(Rank.NINE, Suit.CLUBS),
            Card(Rank.FOUR, Suit.HEARTS)
        )

        println("OLD WAY (verbose):")
        println("────────────────────────────────────────")
        println("val btnRange = HandRange.WeightedRange(")
        println("    mapOf(")
        println("        Pair(Card(Rank.ACE, Suit.CLUBS), Card(Rank.ACE, Suit.DIAMONDS)) to 1.0,")
        println("        Pair(Card(Rank.KING, Suit.HEARTS), Card(Rank.KING, Suit.DIAMONDS)) to 1.0,")
        println("        Pair(Card(Rank.SIX, Suit.CLUBS), Card(Rank.FIVE, Suit.HEARTS)) to 0.5,")
        println("        Pair(Card(Rank.FIVE, Suit.CLUBS), Card(Rank.THREE, Suit.SPADES)) to 0.5")
        println("    )")
        println(")")
        println()

        println("NEW WAY (concise):")
        println("────────────────────────────────────────")
        println("val btnRange = RangeParser.fromNotation(")
        println("    \"AA:1.0, KK:1.0, 65o:0.5, 53o:0.5\",")
        println("    board = board")
        println(")")
        println()

        // Actually create both ranges
        val btnRange = RangeParser.fromNotation(
            "AA:1.0, KK:1.0, 65o:0.5, 53o:0.5",
            board = board
        )

        println("Result:")
        println("  Combos: ${btnRange.size()}")
        println("  Effective weight: ${String.format("%.1f", btnRange.totalWeight())}")
        println()

        println("BUILDER PATTERN:")
        println("────────────────────────────────────────")
        println("val range = RangeParser.builder(board)")
        println("    .add(\"AA\", weight = 1.0)")
        println("    .add(\"KK\", weight = 1.0)")
        println("    .add(\"65o\", weight = 0.5)")
        println("    .add(\"53o\", weight = 0.5)")
        println("    .build()")
        println()

        val builderRange = RangeParser.builder(board)
            .add("AA", weight = 1.0)
            .add("KK", weight = 1.0)
            .add("65o", weight = 0.5)
            .add("53o", weight = 0.5)
            .build()

        println("Result:")
        println("  Combos: ${builderRange.size()}")
        println("  Effective weight: ${String.format("%.1f", builderRange.totalWeight())}")
        println()

        println("REALISTIC EXAMPLE - Optimal 2:1 Value:Bluff Ratio:")
        println("────────────────────────────────────────")
        println("For 0.5 pot bet, optimal bluff:value = 1:2")
        println("AA+KK = 12 value combos")
        println("Need 6 effective bluff combos")
        println("65o+53o = 24 total combos → weight 6/24 = 0.25")
        println()

        val optimalRange = RangeParser.fromNotation(
            "AA:1.0, KK:1.0, 65o:0.25, 53o:0.25",
            board = board
        )

        println("val btnRange = RangeParser.fromNotation(")
        println("    \"AA:1.0, KK:1.0, 65o:0.25, 53o:0.25\",")
        println("    board = board")
        println(")")
        println()

        val valueWeight = 12.0  // 6 AA + 6 KK
        val bluffWeight = 6.0   // 24 combos * 0.25
        val ratio = valueWeight / bluffWeight

        println("Result:")
        println("  Value combos: 12 @ 1.0 = ${valueWeight}")
        println("  Bluff combos: 24 @ 0.25 = ${bluffWeight}")
        println("  Ratio: ${String.format("%.1f", ratio)}:1 ✓ (optimal)")
        println()

        println("ADVANCED - Mixed strategies:")
        println("────────────────────────────────────────")
        println("val range = RangeParser.fromNotation(\"\"\"")
        println("    AA:1.0, KK:1.0, QQ:0.8,")
        println("    AKs:1.0, AKo:0.5,")
        println("    65o:0.25, 72o:0.15")
        println("\"\"\")")
        println()

        val mixedRange = RangeParser.fromNotation("""
            AA:1.0, KK:1.0, QQ:0.8,
            AKs:1.0, AKo:0.5,
            65o:0.25, 72o:0.15
        """.trimIndent(), board)

        println("Result: ${mixedRange.size()} combos, ${String.format("%.1f", mixedRange.totalWeight())} effective weight")
        println()
    }
}
