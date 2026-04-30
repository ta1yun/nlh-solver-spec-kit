package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec

/**
 * Verify if proper Leduc should have 288 info sets.
 */
class Verify288InfoSets : FunSpec({

    test("Calculate with suit abstraction and ANY board card") {
        println("\n=== Proper Leduc Info Set Count (Suit Abstraction) ===\n")

        println("Deck: 2 suits × 3 ranks = 6 cards")
        println("  Ranks: J, Q, K")
        println("  Suits: ♦, ♥")
        println()

        println("=== PRE-FLOP (Round 1) ===")
        println("Board is HIDDEN - suits don't matter!")
        println()
        println("Decision points: 6")
        println("  1. '' - P0 initial")
        println("  2. 'c' - P1 after check")
        println("  3. 'b' - P1 after bet")
        println("  4. 'cb' - P0 after check-bet")
        println("  5. 'br' - P0 after bet-raise")
        println("  6. 'cbr' - P1 after check-bet-raise")
        println()
        println("Possible ranks: 3 (J, Q, K)")
        println()
        println("Pre-flop info sets: 6 × 3 = 18")

        println("\n=== POST-FLOP (Round 2) ===")
        println("Board is REVEALED - now know (my_rank, board_rank)")
        println()
        println("R1 endings: 5 (cc, bc, brc, cbc, cbrc)")
        println("Decision points per ending: 6")
        println()
        println("Possible combinations: 3 player ranks × 3 board ranks = 9")
        println("  (J,J) (J,Q) (J,K)")
        println("  (Q,J) (Q,Q) (Q,K)")
        println("  (K,J) (K,Q) (K,K)")
        println()
        println("Post-flop info sets: 5 × 6 × 9 = 270")

        println("\n=== TOTAL ===")
        println("Pre-flop: 18")
        println("Post-flop: 270")
        println("TOTAL: 288 info sets")

        println("\n" + "=".repeat(60))
        println("\n=== MY IMPLEMENTATION (Fixed Board, No Suit Abstraction) ===\n")

        println("Test setup: Board FIXED at K♥")
        println("Available player cards: J♦, J♥, Q♦, Q♥, K♦ (5 cards)")
        println()

        println("Pre-flop (my impl):")
        println("  Uses full card ID (0, 1, 2, 3, 4)")
        println("  6 decision points × 5 cards = 30 info sets")
        println()

        println("Post-flop (my impl):")
        println("  Board fixed at K♥, so only 3 strategic situations:")
        println("    - (J, K) = Jack vs King (no pair)")
        println("    - (Q, K) = Queen vs King (no pair)")
        println("    - (K, K) = King vs King (PAIR)")
        println("  But uses full card IDs, so:")
        println("    - Cards 0,1 (J♦,J♥) both map to 'high' + different IDs")
        println("    - Cards 2,3 (Q♦,Q♥) both map to 'high' + different IDs")
        println("    - Card 4 (K♦) maps to 'pair'")
        println("  5 R1 endings × 6 decision points × 5 cards = 150 info sets")
        println()

        println("My implementation total: 30 + 150 = 180 info sets")

        println("\n" + "=".repeat(60))
        println("\n=== THE MISMATCH ===\n")

        println("✗ My implementation: 180 info sets")
        println("  - Uses full card IDs (doesn't abstract suits)")
        println("  - Board is fixed (reduces combinations)")
        println()

        println("✓ Proper Leduc: 288 info sets")
        println("  - Abstracts suits pre-flop (J♦ = J♥ pre-flop)")
        println("  - All board cards possible (9 combinations)")
        println()

        println("THE ISSUE:")
        println("  My info set construction should abstract suits pre-flop:")
        println("    WRONG: \"p0:c0:r1:\" (card 0 = J♦)")
        println("    RIGHT: \"p0:J:r1:\" (rank J)")
        println()
        println("  Post-flop should use rank combinations:")
        println("    WRONG: \"p0:high:c0:b5:r2:cc|\"")
        println("    RIGHT: \"p0:J-K:r2:cc|\" (Jack facing King board)")
    }

    test("Count actual info sets in my implementation") {
        println("\n=== Actual Count in My Implementation ===\n")

        val boardCard = 5  // K♥
        val infoSets = mutableSetOf<String>()

        fun exploreState(state: ProperLeducState) {
            if (state.isTerminal()) return
            infoSets.add(state.getInfoSet())

            for (action in state.getLegalActions()) {
                val nextState = state.applyAction(action) as ProperLeducState
                exploreState(nextState)
            }
        }

        // Explore all matchups
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 != p2 && p1 != boardCard && p2 != boardCard) {
                    exploreState(ProperLeducState(
                        p1Card = p1, p2Card = p2, boardCard = boardCard,
                        round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                    ))
                }
            }
        }

        println("Measured: ${infoSets.size} info sets")
        println("Expected (proper Leduc): 288 info sets")
        println("Difference: ${288 - infoSets.size} info sets missing")
        println()
        println("Conclusion: My implementation does NOT match proper Leduc!")
        println("Need to fix info set construction to abstract suits.")
    }
})
