package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Detailed trace comparison between reference and our implementation.
 * Tests the SAME game sequence in both to find where they diverge.
 */
class DetailedTraceComparison : FunSpec({

    test("Trace check-check game in both implementations") {
        println("\n=== Detailed Trace: Check-Check Game ===\n")
        println("Setup: P0=J(0), P1=Q(2), Board=K(4)")
        println()

        // Our implementation
        println("OUR IMPLEMENTATION:")
        println("-".repeat(50))

        var state = LeducWithSuitAbstraction(
            p1Card = 0, p2Card = 2, boardCard = 4,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        println("1. Initial state:")
        println("   round=${state.round}, history='${state.history}'")
        println("   currentPlayer=${state.currentPlayer()}")
        println("   infoSet='${state.getInfoSet()}'")
        println("   isTerminal=${state.isTerminal()}")
        println()

        // P0 checks
        state = state.applyAction(SimpleGameAction("x", "Check")) as LeducWithSuitAbstraction
        println("2. After P0 checks:")
        println("   round=${state.round}, history='${state.history}'")
        println("   currentPlayer=${state.currentPlayer()}")
        println("   infoSet='${state.getInfoSet()}'")
        println("   isTerminal=${state.isTerminal()}")
        println()

        // P1 checks
        state = state.applyAction(SimpleGameAction("x", "Check")) as LeducWithSuitAbstraction
        println("3. After P1 checks (should transition to R2):")
        println("   round=${state.round}, history='${state.history}'")
        println("   currentPlayer=${state.currentPlayer()}")
        if (!state.isTerminal()) {
            println("   infoSet='${state.getInfoSet()}'")
        }
        println("   isTerminal=${state.isTerminal()}")
        println()

        if (!state.isTerminal()) {
            // P0 checks in R2
            state = state.applyAction(SimpleGameAction("x", "Check")) as LeducWithSuitAbstraction
            println("4. After P0 checks in R2:")
            println("   round=${state.round}, history='${state.history}'")
            println("   currentPlayer=${state.currentPlayer()}")
            println("   infoSet='${state.getInfoSet()}'")
            println("   isTerminal=${state.isTerminal()}")
            println()

            // P1 checks in R2
            state = state.applyAction(SimpleGameAction("x", "Check")) as LeducWithSuitAbstraction
            println("5. After P1 checks in R2 (terminal):")
            println("   round=${state.round}, history='${state.history}'")
            println("   currentPlayer=${state.currentPlayer()}")
            println("   isTerminal=${state.isTerminal()}")
            println("   utility=${state.getUtility().toList()}")
            println()
        }

        // Reference implementation
        println("\nREFERENCE IMPLEMENTATION:")
        println("-".repeat(50))

        val trainer = ReferenceLeducTrainer()
        println("Reference uses continuous history with 'd' separator")
        println("Expected flow:")
        println("  '' -> 'x' -> 'xx' -> 'xxd' -> 'xxdx' -> 'xxdxx' (terminal)")
        println()

        println("At 'xxdxx' terminal:")
        println("  P1 (Queen) should beat P0 (Jack)")
        println("  Payoff to P0: -1.0 (loses ante)")
        println()

        println("KEY QUESTION: Do both produce same result?")
        println("  Our utility: ${state.getUtility()[0]}")
        println("  Expected: -1.0")
        println("  Match: ${state.getUtility()[0] == -1.0}")
    }

    test("Trace bet-fold game") {
        println("\n=== Detailed Trace: Bet-Fold Game ===\n")
        println("Setup: P0=K(4), P1=J(0), Board=Q(2)")
        println()

        var state = LeducWithSuitAbstraction(
            p1Card = 4, p2Card = 0, boardCard = 2,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        // P0 bets
        state = state.applyAction(SimpleGameAction("b", "Bet")) as LeducWithSuitAbstraction
        println("After P0 bets:")
        println("   history='${state.history}', p1Invested=${state.p1Invested}, p2Invested=${state.p2Invested}")
        println()

        // P1 folds
        state = state.applyAction(SimpleGameAction("f", "Fold")) as LeducWithSuitAbstraction
        println("After P1 folds:")
        println("   history='${state.history}'")
        println("   isTerminal=${state.isTerminal()}")
        println("   utility=${state.getUtility().toList()}")
        println()

        println("Expected: P0 wins P1's ante + fold")
        println("  P0 invested: 3.0 (ante 1 + bet 2)")
        println("  P1 invested: 1.0 (ante only, folded)")
        println("  P0 utility: +1.0")
        println("  Actual: ${state.getUtility()[0]}")
        println("  Match: ${state.getUtility()[0] == 1.0}")
    }
})
