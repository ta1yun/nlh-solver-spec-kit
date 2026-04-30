package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec

/**
 * Explain why we multiply decision points by number of cards.
 */
class WhyMultiplyByCards : FunSpec({

    test("Show info sets for one decision point across different cards") {
        println("\n=== Why Multiply by 5 Cards? ===\n")

        println("Setup:")
        println("  Board: K♥ (card 5)")
        println("  Available player cards: J♦(0), J♥(1), Q♦(2), Q♥(3), K♦(4)")
        println()

        println("Example: P0's initial decision (history = '')")
        println()
        println("The SAME decision point creates DIFFERENT info sets based on the card:\n")

        val boardCard = 5
        for (card in 0..4) {
            val cardName = when(card) {
                0 -> "J♦"
                1 -> "J♥"
                2 -> "Q♦"
                3 -> "Q♥"
                4 -> "K♦"
                else -> "?"
            }

            val state = ProperLeducState(
                p1Card = card,
                p2Card = (card + 1) % 5,  // Different opponent card
                boardCard = boardCard,
                round = 1,
                p1Invested = 1.0,
                p2Invested = 1.0,
                history = ""
            )

            val infoSet = state.getInfoSet()
            println("  P0 with $cardName: $infoSet")
        }

        println("\n5 different cards → 5 different info sets!")
        println()

        println("=== Why Different Cards = Different Info Sets? ===\n")
        println("Each card should play DIFFERENTLY:")
        println()
        println("  • J♦ (weakest): Probably fold to raises, rarely bet")
        println("  • Q♦ (medium): Mixed strategy, sometimes bluff")
        println("  • K♦ (strong): When board is K♥, you have a PAIR!")
        println()
        println("Same decision point, but DIFFERENT optimal strategies!")
        println()

        println("=== Another Example: After P0 bets (history = 'b') ===\n")

        for (card in 0..4) {
            val cardName = when(card) {
                0 -> "J♦"
                1 -> "J♥"
                2 -> "Q♦"
                3 -> "Q♥"
                4 -> "K♦"
                else -> "?"
            }

            val state = ProperLeducState(
                p1Card = (card + 1) % 5,
                p2Card = card,  // P1 is opponent now
                boardCard = boardCard,
                round = 1,
                p1Invested = 3.0,
                p2Invested = 1.0,
                history = "b"
            )

            val infoSet = state.getInfoSet()
            println("  P1 with $cardName facing bet: $infoSet")
        }

        println("\nAgain, 5 different info sets!")
        println()

        println("=== The Formula ===\n")
        println("Each decision point can occur with ANY of the 5 possible cards.")
        println("Each card creates a UNIQUE info set (different strategy).")
        println()
        println("Therefore:")
        println("  Info sets = Decision points × Cards")
        println("  R1: 6 decision points × 5 cards = 30 info sets")
        println("  R2 per ending: 6 decision points × 5 cards = 30 info sets")
        println("  R2 total: 5 endings × 30 = 150 info sets")
        println("  Total: 30 + 150 = 180 info sets")

        println()
        println("=== What if we abstracted suits? ===\n")
        println("If J♦ and J♥ shared the same strategy (rank abstraction):")
        println("  Only 3 ranks: Jack, Queen, King")
        println("  R1: 6 decision points × 3 ranks = 18 info sets")
        println("  R2: 5 endings × 6 decision points × 3 ranks = 90 info sets")
        println("  Total: 18 + 90 = 108 info sets")
        println()
        println("BUT we keep suits separate to avoid info set collisions")
        println("between matchups (J♦ vs Q♦ and J♥ vs Q♥ shouldn't interfere).")
    }
})
