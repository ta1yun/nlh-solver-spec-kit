package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec

/**
 * Detailed breakdown of where 80 info sets come from.
 */
class DetailedInfoSetBreakdown : FunSpec({

    test("Derive 80 info sets systematically") {
        println("\n=== Deriving 80 Info Sets for 2-Round Leduc ===\n")

        val boardCard = 5  // K♥ (fixed)
        val availableCards = (0..5).filter { it != boardCard }  // 0-4 (J♦,J♥,Q♦,Q♥,K♦)

        println("Setup:")
        println("  Board: K♥ (card 5)")
        println("  Available player cards: J♦(0), J♥(1), Q♦(2), Q♥(3), K♦(4)")
        println("  Total: ${availableCards.size} cards\n")

        // Round 1 info sets
        println("=== ROUND 1 INFO SETS ===\n")

        val r1InfoSets = mutableSetOf<String>()

        // P0 initial decision (history = "")
        println("1. P0 initial decision (history = ''):")
        for (card in availableCards) {
            val infoSet = "p0:c$card:r1:"
            r1InfoSets.add(infoSet)
            println("   $infoSet")
        }
        println("   Subtotal: ${availableCards.size} info sets\n")

        // P1 after P0 checked (history = "c")
        println("2. P1 after P0 checked (history = 'c'):")
        for (card in availableCards) {
            val infoSet = "p1:c$card:r1:c"
            r1InfoSets.add(infoSet)
            println("   $infoSet")
        }
        println("   Subtotal: ${availableCards.size} info sets\n")

        // P1 after P0 bet (history = "b")
        println("3. P1 after P0 bet (history = 'b'):")
        for (card in availableCards) {
            val infoSet = "p1:c$card:r1:b"
            r1InfoSets.add(infoSet)
            println("   $infoSet")
        }
        println("   Subtotal: ${availableCards.size} info sets\n")

        // P0 after check-bet (history = "cb")
        println("4. P0 after check-bet (history = 'cb'):")
        for (card in availableCards) {
            val infoSet = "p0:c$card:r1:cb"
            r1InfoSets.add(infoSet)
            println("   $infoSet")
        }
        println("   Subtotal: ${availableCards.size} info sets\n")

        println("ROUND 1 TOTAL: ${r1InfoSets.size} info sets")
        println("  Formula: 4 decision points × 5 cards = ${4 * 5}\n")

        // Round 2 info sets
        println("=== ROUND 2 INFO SETS ===\n")

        val r2InfoSets = mutableSetOf<String>()

        // Helper to determine pair/high
        fun pairOrHigh(card: Int, board: Int): String {
            val cardRank = card / 2
            val boardRank = board / 2
            return if (cardRank == boardRank) "pair" else "high"
        }

        // For each R1 ending: "cc|" and "bc|"
        val r1Endings = listOf("cc|", "bc|")

        for (r1Ending in r1Endings) {
            println("After R1 ending '$r1Ending':\n")

            // P0 initial (R2 starts)
            println("  1. P0 initial decision (history = '$r1Ending'):")
            for (card in availableCards) {
                val pairHigh = pairOrHigh(card, boardCard)
                val infoSet = "p0:$pairHigh:c$card:b$boardCard:r2:$r1Ending"
                r2InfoSets.add(infoSet)
                println("     $infoSet")
            }
            println("     Subtotal: ${availableCards.size} info sets\n")

            // P1 after P0 checked in R2
            println("  2. P1 after P0 checked (history = '${r1Ending}c'):")
            for (card in availableCards) {
                val pairHigh = pairOrHigh(card, boardCard)
                val infoSet = "p1:$pairHigh:c$card:b$boardCard:r2:${r1Ending}c"
                r2InfoSets.add(infoSet)
                println("     $infoSet")
            }
            println("     Subtotal: ${availableCards.size} info sets\n")

            // P1 after P0 bet in R2
            println("  3. P1 after P0 bet (history = '${r1Ending}b'):")
            for (card in availableCards) {
                val pairHigh = pairOrHigh(card, boardCard)
                val infoSet = "p1:$pairHigh:c$card:b$boardCard:r2:${r1Ending}b"
                r2InfoSets.add(infoSet)
                println("     $infoSet")
            }
            println("     Subtotal: ${availableCards.size} info sets\n")

            // P0 after check-bet in R2
            println("  4. P0 after check-bet (history = '${r1Ending}cb'):")
            for (card in availableCards) {
                val pairHigh = pairOrHigh(card, boardCard)
                val infoSet = "p0:$pairHigh:c$card:b$boardCard:r2:${r1Ending}cb"
                r2InfoSets.add(infoSet)
                println("     $infoSet")
            }
            println("     Subtotal: ${availableCards.size} info sets\n")
        }

        println("ROUND 2 TOTAL: ${r2InfoSets.size} info sets")
        println("  Formula: 2 R1 endings × 4 decision points × 5 cards = ${2 * 4 * 5}\n")

        // Grand total
        val totalInfoSets = r1InfoSets.size + r2InfoSets.size
        println("=== GRAND TOTAL ===")
        println("Round 1: ${r1InfoSets.size}")
        println("Round 2: ${r2InfoSets.size}")
        println("TOTAL: $totalInfoSets info sets\n")

        println("Formula:")
        println("  R1: 4 decision points × 5 cards = 20")
        println("  R2: 2 R1 endings × 4 decision points × 5 cards = 40")
        println("  Total: 20 + 40 = 60")
        println("\nWait... test said 80? Let me check if I'm missing something...")

        // Actually explore the game tree to find what I'm missing
        val actualInfoSets = mutableSetOf<String>()

        fun exploreState(state: TwoRoundLeducState) {
            if (state.isTerminal()) return
            actualInfoSets.add(state.getInfoSet())

            for (action in state.getLegalActions()) {
                val nextState = state.applyAction(action) as TwoRoundLeducState
                exploreState(nextState)
            }
        }

        // Explore all matchups
        for (p1 in availableCards) {
            for (p2 in availableCards) {
                if (p1 != p2) {
                    exploreState(TwoRoundLeducState(
                        p1Card = p1, p2Card = p2, boardCard = boardCard,
                        round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                    ))
                }
            }
        }

        println("\nActual exploration found: ${actualInfoSets.size} info sets")

        // Find what I'm missing
        val missing = actualInfoSets - r1InfoSets - r2InfoSets
        if (missing.isNotEmpty()) {
            println("\nMissing info sets I didn't account for:")
            missing.sorted().forEach { println("  $it") }
        }
    }
})
