package com.nlhsolver.export

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.integration.LeducWithSuitAbstraction
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Export Leduc as a recursive tree structure instead of flat scenarios.
 * This format is better for dynamic navigation and scales to NLH.
 *
 * KEY INSIGHT: Chance nodes (board dealing) appear exactly when betting
 * rounds complete. This is detected via isBettingRoundComplete() which
 * checks if the pot is "capped" (all players matched) and last action
 * was passive (check/call).
 *
 * This pattern generalizes to all poker variants (NLH, PLO, etc.).
 */
class GenerateTreeStructure : FunSpec({

    test("Generate recursive tree structure") {
        println("\n=== Generating Recursive Tree ===\n")

        // Train solver
        println("Training solver...")
        val profile = trainSolver()

        // Generate tree for each board
        val trees = mutableListOf<String>()
        for (board in listOf("J", "Q", "K")) {
            val boardCard = when(board) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }

            val initialState = LeducWithSuitAbstraction(
                p1Card = 1, // Sample card
                p2Card = 3,
                boardCard = boardCard,
                round = 1,
                p1Invested = 1.0,
                p2Invested = 1.0,
                history = ""
            )

            println("Building tree for board $board...")
            val tree = buildTreeNode(initialState, board, profile, mutableSetOf())

            trees.add("  ${board.lowercase()}: ${tree}")
        }

        // Write output
        val js = StringBuilder()
        js.appendLine("// Recursive Leduc Tree Structure")
        js.appendLine("// Each node contains its children, making navigation simple")
        js.appendLine()
        js.appendLine("(function() {")
        js.appendLine("  window.LEDUC_TREE = {")
        js.appendLine(trees.joinToString(",\n"))
        js.appendLine("  };")
        js.appendLine("})();")

        val outputPath = "/Users/tpai/Downloads/leduc-tree.js"
        File(outputPath).writeText(js.toString())

        println("\n✓ Exported recursive tree to $outputPath")
    }

    test("Validate chance nodes appear only when betting rounds complete") {
        println("\n=== Validating Chance Node Placement ===\n")

        val profile = trainSolver()

        // Test all betting round completion patterns
        val testCases = listOf(
            // Complete patterns (pot capped, ends with check or call)
            Triple("xx", "Both check", true),
            Triple("bc", "Bet-call", true),
            Triple("brc", "Bet-raise-call", true),
            Triple("xbc", "Check-bet-call", true),
            Triple("xbrc", "Check-bet-raise-call", true),

            // Incomplete patterns (bet/raise pending, or no actions yet)
            Triple("", "No actions", false),
            Triple("x", "Single check", false),
            Triple("b", "Single bet", false),
            Triple("br", "Bet-raise (call pending)", false),
            Triple("xb", "Check-bet (call/fold pending)", false),
            Triple("xbr", "Check-bet-raise (call/fold pending)", false),
        )

        for ((historyStr, description, shouldBeComplete) in testCases) {
            val state = LeducWithSuitAbstraction(
                p1Card = 1, p2Card = 3, boardCard = 2,
                round = 1, p1Invested = 1.0, p2Invested = 1.0,
                history = historyStr
            )

            val isComplete = state.isBettingRoundComplete()
            val status = if (isComplete == shouldBeComplete) "✓" else "✗"

            println("$status $description (\"$historyStr\"): complete=$isComplete (expected=$shouldBeComplete)")

            if (isComplete != shouldBeComplete) {
                throw AssertionError(
                    "Expected betting round complete=$shouldBeComplete for \"$historyStr\" ($description), " +
                    "but got $isComplete"
                )
            }
        }

        println("\n✓ All chance node placements are correct!")
    }
})

fun buildTreeNode(
    state: LeducWithSuitAbstraction,
    boardName: String,
    profile: StrategyProfile,
    visited: MutableSet<String>
): String {
    if (state.isTerminal()) {
        return "{ terminal: true, outcome: 'showdown' }"
    }

    val history = state.history
    val key = "$boardName:$history"

    // Avoid infinite loops
    if (key in visited) {
        return "{ terminal: true, outcome: 'cycle' }"
    }
    visited.add(key)

    val actions = state.getLegalActions()
    if (actions.isEmpty()) {
        return "{ terminal: true, outcome: 'no-actions' }"
    }

    val js = StringBuilder()
    js.append("{\n")

    // Metadata
    val round = state.round
    val pot = (state.p1Invested + state.p2Invested).toInt()
    val toCall = (maxOf(state.p1Invested, state.p2Invested) - minOf(state.p1Invested, state.p2Invested)).toInt()
    val board = if (round == 2) "[\"${boardName}♠\"]" else "[]"

    js.append("      meta: { round: $round, pot: $pot, toCall: $toCall, board: $board },\n")

    // Actions
    val actionNames = actions.map {
        when(it.getActionId()) {
            "f" -> "fold"
            "c" -> "call"
            "r" -> "raise"
            "b" -> "bet"
            "x" -> "check"
            else -> it.getActionId()
        }
    }

    val actionsJson = actionNames.joinToString(", ") { "\"$it\"" }
    js.append("      actions: [$actionsJson],\n")

    // Strategies
    js.append("      hands: [\n")

    val boardCard = when(boardName) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }
    val boardRank = boardName

    for ((cardId, rank, cardIdx) in listOf(
        Triple("Ka", "K", 4), Triple("Kb", "K", 5),
        Triple("Qa", "Q", 2), Triple("Qb", "Q", 3),
        Triple("Ja", "J", 0), Triple("Jb", "J", 1)
    )) {
        // Only filter board card in Round 2 (board hasn't been dealt yet in Round 1)
        if (round == 2 && cardIdx == boardCard) continue

        val solverHistory = history.replace("|", "d")
        // Round 1: info set is just rank (e.g., "K ")
        // Round 2: info set is rank-board (e.g., "K-Q ")
        val infoSetKey = if (round == 1) {
            "$rank $solverHistory"
        } else {
            "$rank-$boardRank $solverHistory"
        }

        val strategy = try {
            profile.getInfoSetStrategy(infoSetKey, actions.size).getAverageStrategy()
        } catch (e: Exception) {
            DoubleArray(actions.size) { 1.0 / actions.size }
        }

        js.append("        { id: \"$cardId\", label: \"$rank${if (cardIdx % 2 == 0) "♠" else "♥"}\", ")
        js.append("freq: {")
        js.append(actionNames.mapIndexed { i, action -> "$action: ${f(strategy[i])}" }.joinToString(", "))
        js.append("} },\n")
    }

    js.append("      ],\n")

    // Children (recursive!)
    js.append("      children: {\n")

    for ((action, actionName) in actions.zip(actionNames)) {
        val nextState = state.applyAction(action) as LeducWithSuitAbstraction

        // CHANCE NODE DETECTION:
        // A chance node (board dealing) appears when a betting round completes.
        // This uses the generalized isBettingRoundComplete() method which detects
        // when the pot is "capped" (both players have equal investment) and the
        // last action was passive (check or call).
        //
        // In Leduc, this happens after patterns like:
        // - "xx" (both check)
        // - "bc" (bet-call)
        // - "rc" (raise-call)
        // - "xbc" (check-bet-call)
        // - "xbrc" (check-bet-raise-call)
        //
        // This same pattern generalizes to NLH where betting rounds end when
        // all active players have matched the pot and the last action was passive.
        val shouldTransition = state.round == 1 && nextState.round == 2

        if (shouldTransition) {
            // Betting round complete - insert chance node for board dealing
            js.append("        $actionName: { chance: true, outcomes: [\n")
            for (nextBoard in listOf("J", "Q", "K")) {
                val nextBoardCard = when(nextBoard) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }
                val r2State = nextState.copy(boardCard = nextBoardCard)
                val subtree = buildTreeNode(r2State, nextBoard, profile, visited.toMutableSet())
                js.append("          { board: \"${nextBoard}♠\", node: $subtree },\n")
            }
            js.append("        ] },\n")
        } else {
            // Betting round continues - normal child node
            val subtree = buildTreeNode(nextState, boardName, profile, visited.toMutableSet())
            js.append("        $actionName: $subtree,\n")
        }
    }

    js.append("      }\n")
    js.append("    }")

    return js.toString()
}
