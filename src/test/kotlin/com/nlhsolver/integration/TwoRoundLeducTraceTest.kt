package com.nlhsolver.integration

import com.nlhsolver.core.SimpleGameAction
import io.kotest.core.spec.style.FunSpec

/**
 * Trace through a complete 2-round Leduc game to verify logic.
 */
class TwoRoundLeducTraceTest : FunSpec({

    test("Trace complete game: R1 check-check, R2 bet-call") {
        println("\n=== Game Trace ===")
        println("Setup: P1=K♦(4), P2=J♦(0), Board=K♥(5)")
        println("P1 should have pair of Kings and win\n")

        var state = TwoRoundLeducState(
            p1Card = 4,  // K♦
            p2Card = 0,  // J♦
            boardCard = 5,  // K♥
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        fun printState(action: String = "") {
            val currentHistory = if (state.round == 2) {
                state.history.substringAfter("|", "")
            } else {
                state.history
            }
            println("${if (action.isNotEmpty()) "After $action: " else ""}Round=${state.round}, History='${state.history}', CurrentHist='$currentHistory', Player=${state.currentPlayer()}, Terminal=${state.isTerminal()}, Inv=[${state.p1Invested},${state.p2Invested}]")
            if (!state.isTerminal()) {
                println("  Info set: ${state.getInfoSet()}")
                println("  Legal actions: ${state.getLegalActions().map { it.getActionId() }}")
            } else {
                println("  Utility: ${state.getUtility().contentToString()}")
            }
        }

        printState()

        // Round 1: P1 checks
        state = state.applyAction(SimpleGameAction("c", "Check")) as TwoRoundLeducState
        printState("P1 check (R1)")

        // Round 1: P2 checks -> advance to Round 2
        state = state.applyAction(SimpleGameAction("c", "Check")) as TwoRoundLeducState
        printState("P2 check (R1)")

        // Round 2: P1 bets
        state = state.applyAction(SimpleGameAction("b", "Bet")) as TwoRoundLeducState
        printState("P1 bet (R2)")

        // Round 2: P2 calls -> showdown
        state = state.applyAction(SimpleGameAction("c", "Call")) as TwoRoundLeducState
        printState("P2 call (R2)")

        println("\n✓ Game trace complete")
    }

    test("Trace game: R1 bet-fold") {
        println("\n=== Game Trace: Early Fold ===")
        println("Setup: P1=Q♦(2), P2=J♥(1), Board=K♥(5)\n")

        var state = TwoRoundLeducState(
            p1Card = 2,  // Q♦
            p2Card = 1,  // J♥
            boardCard = 5,  // K♥
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        fun printState(action: String = "") {
            println("${if (action.isNotEmpty()) "After $action: " else ""}R${state.round}, History='${state.history}', Player=${state.currentPlayer()}, Terminal=${state.isTerminal()}, Inv=[${state.p1Invested},${state.p2Invested}]")
            if (state.isTerminal()) {
                println("  Utility: ${state.getUtility().contentToString()}")
            }
        }

        printState()

        // R1: P1 bets
        state = state.applyAction(SimpleGameAction("b", "Bet")) as TwoRoundLeducState
        printState("P1 bet (R1)")

        // R1: P2 folds
        state = state.applyAction(SimpleGameAction("f", "Fold")) as TwoRoundLeducState
        printState("P2 fold (R1)")

        println("\nExpected: P1 wins 1.0 (P2's ante)")
        println("✓ Game trace complete")
    }

    test("Who acts first in Round 2?") {
        println("\n=== Player Position Test ===")

        val state1 = TwoRoundLeducState(
            p1Card = 4, p2Card = 0, boardCard = 5,
            round = 1, p1Invested = 1.0, p2Invested = 1.0,
            history = ""
        )
        println("Round 1 start: currentPlayer = ${state1.currentPlayer()} (should be 0 = P1)")

        val s1 = state1.applyAction(SimpleGameAction("c", "Check")) as TwoRoundLeducState
        println("After P1 check: currentPlayer = ${s1.currentPlayer()} (should be 1 = P2)")

        val s2 = s1.applyAction(SimpleGameAction("c", "Check")) as TwoRoundLeducState
        println("After P2 check (now R2): currentPlayer = ${s2.currentPlayer()}")
        println("Round 2 history: '${s2.history}'")
        println("Current round history: '${s2.history.substringAfter("|", "")}'")

        println("\nQUESTION: Who should act first in Round 2?")
        println("In standard poker, same player acts first in all rounds (P1)")
        println("But our implementation: currentPlayer = ${s2.currentPlayer()}")
    }
})
