package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

/**
 * Verify the game logic of LeducState is correct.
 */
class VerifyGameLogic : FunSpec({

    test("Verify terminal states and payoffs") {
        println("\n=== Verify Game Logic ===\n")

        // Test fold
        val foldState = LeducState(
            p1Card = 4, p2Card = 0, boardCard = 5,  // K♦ vs J♦, board K♥
            round = 1, p1Invested = 3.0, p2Invested = 1.0, history = "bf"
        )

        println("Fold test:")
        println("  History: 'bf' (P0 bet, P1 fold)")
        println("  P1 invested: 3.0, P2 invested: 1.0")
        println("  Terminal? ${foldState.isTerminal()}")
        println("  Utility: ${foldState.getUtility().toList()}")
        println("  Expected: [1.0, -1.0] (P0 wins P1's investment)")
        foldState.isTerminal() shouldBe true
        foldState.getUtility() shouldBe doubleArrayOf(1.0, -1.0)
        println("  ✓ Correct")
        println()

        // Test showdown - P0 wins with pair
        val showdownWin = LeducState(
            p1Card = 4, p2Card = 0, boardCard = 5,  // K♦ vs J♦, board K♥
            round = 2, p1Invested = 3.0, p2Invested = 3.0, history = "bc|bc"
        )

        println("Showdown test (P0 has pair):")
        println("  P0: K♦, Board: K♥ (pair)")
        println("  P1: J♦, Board: K♥ (high card)")
        println("  History: 'bc|bc'")
        println("  Terminal? ${showdownWin.isTerminal()}")
        println("  Utility: ${showdownWin.getUtility().toList()}")
        println("  Expected: [3.0, -3.0] (P0 wins)")
        showdownWin.isTerminal() shouldBe true
        showdownWin.getUtility() shouldBe doubleArrayOf(3.0, -3.0)
        println("  ✓ Correct")
        println()

        // Test check-check advance to R2
        var state = LeducState(
            p1Card = 4, p2Card = 0, boardCard = 5,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        println("Check-check R1 transition:")
        println("  Starting: history='', round=1")

        // P0 checks
        state = state.applyAction(com.nlhsolver.core.SimpleGameAction("c", "Check")) as LeducState
        println("  After P0 check: history='${state.history}', round=${state.round}")
        state.history shouldBe "c"
        state.round shouldBe 1

        // P1 checks - should transition to R2
        state = state.applyAction(com.nlhsolver.core.SimpleGameAction("c", "Check")) as LeducState
        println("  After P1 check: history='${state.history}', round=${state.round}")
        println("  Expected: history='cc|', round=2")
        state.history shouldBe "cc|"
        state.round shouldBe 2
        println("  ✓ Correct")
        println()
    }

    test("Verify bet/raise mechanics") {
        println("\n=== Verify Bet/Raise Mechanics ===\n")

        // R1: bet 2 chips
        var state = LeducState(
            p1Card = 4, p2Card = 0, boardCard = 5,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        println("Initial: P0=1.0, P1=1.0")

        state = state.applyAction(com.nlhsolver.core.SimpleGameAction("b", "Bet")) as LeducState
        println("After P0 bets: P0=${state.p1Invested}, P1=${state.p2Invested}")
        state.p1Invested shouldBe 3.0  // 1 + 2
        state.p2Invested shouldBe 1.0
        println("  ✓ Correct (bet size = 2)")
        println()

        state = state.applyAction(com.nlhsolver.core.SimpleGameAction("r", "Raise")) as LeducState
        println("After P1 raises: P0=${state.p1Invested}, P1=${state.p2Invested}")
        state.p1Invested shouldBe 3.0
        state.p2Invested shouldBe 5.0  // 1 + 2 + 2
        println("  ✓ Correct (raise size = 2)")
        println()

        // R2: bet 4 chips
        state = LeducState(
            p1Card = 4, p2Card = 0, boardCard = 5,
            round = 2, p1Invested = 3.0, p2Invested = 3.0, history = "bc|"
        )

        println("R2 Initial: P0=3.0, P1=3.0")

        state = state.applyAction(com.nlhsolver.core.SimpleGameAction("b", "Bet")) as LeducState
        println("After P0 bets R2: P0=${state.p1Invested}, P1=${state.p2Invested}")
        state.p1Invested shouldBe 7.0  // 3 + 4
        state.p2Invested shouldBe 3.0
        println("  ✓ Correct (R2 bet size = 4)")
        println()
    }

    test("Verify info set construction") {
        println("\n=== Verify Info Set Construction ===\n")

        // Pre-flop: suits should be abstracted
        val preflop1 = LeducState(
            p1Card = 0, p2Card = 2, boardCard = 5,  // J♦ vs Q♦
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val preflop2 = LeducState(
            p1Card = 1, p2Card = 3, boardCard = 5,  // J♥ vs Q♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        println("Pre-flop info sets (should be same):")
        println("  J♦: ${preflop1.getInfoSet()}")
        println("  J♥: ${preflop2.getInfoSet()}")
        preflop1.getInfoSet() shouldBe preflop2.getInfoSet()
        println("  ✓ Correct")
        println()

        // Post-flop: rank combinations
        val postflop1 = LeducState(
            p1Card = 0, p2Card = 2, boardCard = 5,  // J♦, board K♥
            round = 2, p1Invested = 1.0, p2Invested = 1.0, history = "cc|"
        )

        val postflop2 = LeducState(
            p1Card = 1, p2Card = 3, boardCard = 4,  // J♥, board K♦
            round = 2, p1Invested = 1.0, p2Invested = 1.0, history = "cc|"
        )

        println("Post-flop info sets (should be same - both J vs K):")
        println("  J♦ vs K♥: ${postflop1.getInfoSet()}")
        println("  J♥ vs K♦: ${postflop2.getInfoSet()}")
        postflop1.getInfoSet() shouldBe postflop2.getInfoSet()
        println("  ✓ Correct")
        println()

        // Different rank combination
        val postflop3 = LeducState(
            p1Card = 4, p2Card = 0, boardCard = 5,  // K♦, board K♥ (PAIR!)
            round = 2, p1Invested = 1.0, p2Invested = 1.0, history = "cc|"
        )

        println("Post-flop different combo:")
        println("  K♦ vs K♥ (pair): ${postflop3.getInfoSet()}")
        println("  Should be different from J-K above")
        (postflop3.getInfoSet() != postflop1.getInfoSet()) shouldBe true
        println("  ✓ Correct")
    }
})
