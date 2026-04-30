package com.nlhsolver.integration

import com.nlhsolver.core.SimpleGameAction
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

/**
 * Verify proper Leduc raise logic.
 */
class ProperLeducLogicTest : FunSpec({

    fun playGame(actions: List<String>, p1Card: Int = 4, p2Card: Int = 0, boardCard: Int = 5): ProperLeducState {
        var state = ProperLeducState(
            p1Card = p1Card, p2Card = p2Card, boardCard = boardCard,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        for (action in actions) {
            println("  Action '$action': player=${state.currentPlayer()}, history='${state.history}', legal=${state.getLegalActions().map { it.getActionId() }}")
            state = state.applyAction(SimpleGameAction(action, action)) as ProperLeducState
            println("    → history='${state.history}', inv=[${state.p1Invested},${state.p2Invested}], terminal=${state.isTerminal()}")
        }

        return state
    }

    test("Bet-raise-call sequence") {
        println("\n=== Bet-Raise-Call ===")
        val state = playGame(listOf("b", "r", "c"))

        state.history shouldBe "brc|"  // Should advance to R2
        state.round shouldBe 2
        state.p1Invested shouldBe 5.0  // 1 ante + 2 bet + 2 call raise
        state.p2Invested shouldBe 5.0  // 1 ante + 2 raise
        state.isTerminal() shouldBe false
    }

    test("Check-bet-raise-call sequence") {
        println("\n=== Check-Bet-Raise-Call ===")
        val state = playGame(listOf("c", "b", "r", "c"))

        state.history shouldBe "cbrc|"  // Should advance to R2
        state.round shouldBe 2
        state.p1Invested shouldBe 5.0  // 1 ante + 2 raise
        state.p2Invested shouldBe 5.0  // 1 ante + 2 bet + 2 call raise
        state.isTerminal() shouldBe false
    }

    test("Bet-raise-fold") {
        println("\n=== Bet-Raise-Fold ===")
        val state = playGame(listOf("b", "r", "f"))

        state.history shouldBe "brf"
        state.isTerminal() shouldBe true
        state.p1Invested shouldBe 3.0  // 1 ante + 2 bet (folded before calling raise)
        state.p2Invested shouldBe 5.0  // 1 ante + 2 bet + 2 raise
        state.getUtility() shouldBe doubleArrayOf(-3.0, 3.0)  // P2 wins
    }

    test("After raise, only fold/call allowed (two-bet max)") {
        println("\n=== Two-Bet Maximum ===")
        var state = ProperLeducState(
            p1Card = 4, p2Card = 0, boardCard = 5,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        state = state.applyAction(SimpleGameAction("b", "Bet")) as ProperLeducState
        println("After bet: legal=${state.getLegalActions().map { it.getActionId() }}")
        state.getLegalActions().map { it.getActionId() } shouldBe listOf("f", "c", "r")  // Can raise

        state = state.applyAction(SimpleGameAction("r", "Raise")) as ProperLeducState
        println("After raise: legal=${state.getLegalActions().map { it.getActionId() }}")
        state.getLegalActions().map { it.getActionId() } shouldBe listOf("f", "c")  // Cannot raise again!
    }

    test("R2 with larger bets (4 chips)") {
        println("\n=== Round 2 Bet Sizing ===")
        // Get to R2 first
        var state = playGame(listOf("c", "c"))  // Check-check to R2
        println("\nRound 2 starts:")

        state = state.applyAction(SimpleGameAction("b", "Bet")) as ProperLeducState
        println("After R2 bet: inv=[${state.p1Invested},${state.p2Invested}]")
        state.p1Invested shouldBe 5.0  // 1 ante + 4 bet

        state = state.applyAction(SimpleGameAction("r", "Raise")) as ProperLeducState
        println("After R2 raise: inv=[${state.p1Invested},${state.p2Invested}]")
        state.p2Invested shouldBe 9.0  // 1 ante + 4 bet + 4 raise

        state = state.applyAction(SimpleGameAction("c", "Call")) as ProperLeducState
        println("After R2 call: inv=[${state.p1Invested},${state.p2Invested}]")
        state.p1Invested shouldBe 9.0  // Matched
        state.isTerminal() shouldBe true
    }

    test("Full game: Check-bet-raise-call, then bet-raise-call") {
        println("\n=== Full Game ===")
        val state = playGame(listOf(
            "c", "b", "r", "c",  // R1: check-bet-raise-call
            "b", "r", "c"         // R2: bet-raise-call
        ))

        state.isTerminal() shouldBe true
        state.p1Invested shouldBe 13.0  // 1 + 2 raise (R1) + 4 bet + 4 call (R2)
        state.p2Invested shouldBe 13.0  // 1 + 2 bet + 2 call (R1) + 4 raise (R2)
        println("Final: ${state.getUtility().contentToString()}")
    }
})
