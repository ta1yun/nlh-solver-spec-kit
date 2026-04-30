package com.nlhsolver.export

import com.nlhsolver.integration.LeducWithSuitAbstraction
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

/**
 * Validates that the exported game tree is complete - no paths should end
 * prematurely at nodes that still have legal actions.
 *
 * This test is generalizable to NLH by using the GameState interface.
 */
class ValidateGameTree : FunSpec({

    test("Verify all terminal nodes in Leduc tree are actually terminal") {
        val errors = mutableListOf<String>()

        // Test all possible card combinations
        for (p1Card in 0..5) {
            for (p2Card in 0..5) {
                if (p1Card == p2Card) continue

                for (boardCard in 0..5) {
                    if (boardCard == p1Card || boardCard == p2Card) continue

                    // Start from root and explore all paths
                    val rootState = LeducWithSuitAbstraction(
                        p1Card = p1Card,
                        p2Card = p2Card,
                        boardCard = boardCard,
                        round = 1,
                        p1Invested = 1.0,
                        p2Invested = 1.0,
                        history = ""
                    )

                    validateStateIsNotPrematurelyTerminal(rootState, errors)
                }
            }
        }

        if (errors.isNotEmpty()) {
            println("\n=== INCOMPLETE TREE - PREMATURE TERMINALS ===")
            errors.forEach { println("  ❌ $it") }
            println("=== Total: ${errors.size} premature terminals ===\n")
        }

        errors.size shouldBe 0
    }
})

/**
 * Recursively validate that every path either:
 * 1. Ends at a true terminal state (isTerminal() = true), OR
 * 2. Continues with decision/chance nodes
 *
 * This catches cases where we marked a node as "terminal" but the game
 * actually has legal actions available.
 */
fun validateStateIsNotPrematurelyTerminal(
    state: LeducWithSuitAbstraction,
    errors: MutableList<String>
) {
    // If game says it's terminal, we're good
    if (state.isTerminal()) return

    // If game is not terminal, it must have legal actions
    val legalActions = state.getLegalActions()

    if (legalActions.isEmpty()) {
        // This should never happen - non-terminal state with no actions
        errors.add("State has no legal actions but isTerminal()=false: ${state.history}")
        return
    }

    // Check if this state would be exported as a "terminal" or "simplified" node
    // These are the patterns we use in the export that might be wrong
    val history = state.history
    val round = state.round

    // Round 2 states that we might have marked as simplified terminals
    if (round == 2) {
        val r2History = if ('|' in history) history.substringAfter("|") else history

        // These are patterns we know we marked as simplified/terminal
        val simplifiedPatterns = listOf(
            "x",      // After P2 checks (but P1 should act!)
            "b",      // After P1 bets (but P2 should act!)
            "xb",     // After check-bet (but P1 should act!)
            "bb",     // After bet-bet (someone should act!)
            "xbb",    // After check-bet-bet
            "br",     // After bet-raise (but P1 should act!)
        )

        // If current R2 history matches a simplified pattern, check if there are actions
        if (simplifiedPatterns.any { r2History == it || r2History.endsWith(it) }) {
            if (legalActions.isNotEmpty()) {
                val cards = "p1=${cardName(state.p1Card)} p2=${cardName(state.p2Card)} board=${cardName(state.boardCard)}"
                errors.add("Premature terminal at R2 history='${state.history}' ($cards) - has ${legalActions.size} legal actions: ${legalActions.map { it.getActionId() }}")
            }
        }
    }

    // Recursively check all children
    for (action in legalActions) {
        val nextState = state.applyAction(action) as LeducWithSuitAbstraction
        validateStateIsNotPrematurelyTerminal(nextState, errors)
    }
}

private fun cardName(card: Int): String = when(card) {
    0, 1 -> "J"
    2, 3 -> "Q"
    4, 5 -> "K"
    else -> "?"
}
