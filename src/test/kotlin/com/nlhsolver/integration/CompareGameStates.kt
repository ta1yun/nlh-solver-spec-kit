package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

class CompareGameStates : FunSpec({

    test("Compare our game to reference game behavior") {
        println("\n=== Direct Game Comparison ===\n")

        // Test case: J vs Q with K board, check-check-check-check
        val ourState = LeducWithSuitAbstraction(
            p1Card = 0, p2Card = 2, boardCard = 4,  // J, Q, K
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        println("Scenario: P0=Jack, P1=Queen, Board=King")
        println("Expected: Queen wins at showdown")
        println()

        // Trace through check-check-check-check
        var state = ourState
        val actions = listOf("x", "x", "x", "x")
        val actionNames = listOf("P0 checks", "P1 checks", "P0 checks R2", "P1 checks R2")

        actions.forEachIndexed { i, action ->
            println("${i+1}. ${actionNames[i]}")
            println("   Before: history='${state.history}', round=${state.round}")
            println("   Info set: '${state.getInfoSet()}'")
            println("   Current player: ${state.currentPlayer()}")
            println("   Legal actions: ${state.getLegalActions().map { it.getActionId() }}")

            state = state.applyAction(SimpleGameAction(action, "")) as LeducWithSuitAbstraction

            println("   After: history='${state.history}', round=${state.round}, terminal=${state.isTerminal()}")
            if (state.isTerminal()) {
                println("   Utility: ${state.getUtility().toList()}")
            }
            println()
        }

        println("--- Verification ---")
        val finalUtil = state.getUtility()
        println("Final utility: P0=${finalUtil[0]}, P1=${finalUtil[1]}")
        println("Expected: P0=-1.0 (loses), P1=+1.0 (wins)")
        println("Match: ${finalUtil[0] == -1.0 && finalUtil[1] == 1.0}")
        println()

        println("--- Info Set Progression ---")
        println("R1 Start: 'J ' (Jack acts first, no history)")
        println("R1 After P0 checks: 'Q x' (Queen sees one check)")
        println("R2 Start: 'J-K xx|' (Jack in R2 with King board)")
        println("R2 After P0 checks: 'Q-K xx|x' (Queen in R2 sees P0 check)")
        println()

        println("--- Bet-Fold Test ---")
        val betState = ourState
        println("P0 bets:")
        val afterBet = betState.applyAction(SimpleGameAction("b", "")) as LeducWithSuitAbstraction
        println("  History: '${afterBet.history}', P0 invested: ${afterBet.p1Invested}, P1 invested: ${afterBet.p2Invested}")
        println("  Expected: history='b', P0=3.0, P1=1.0")
        println("  Info set (P1 facing bet): '${afterBet.getInfoSet()}'")
        println("  Expected: 'Q b'")
        println()

        println("P1 folds:")
        val afterFold = afterBet.applyAction(SimpleGameAction("f", "")) as LeducWithSuitAbstraction
        println("  History: '${afterFold.history}', Terminal: ${afterFold.isTerminal()}")
        println("  Utility: ${afterFold.getUtility().toList()}")
        println("  Expected: P0=+1.0 (wins fold), P1=-1.0")
        println("  Match: ${afterFold.getUtility()[0] == 1.0 && afterFold.getUtility()[1] == -1.0}")
    }
})
