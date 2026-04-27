package com.nlhsolver.export

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.integration.LeducWithSuitAbstraction
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Export Leduc as a recursive tree structure instead of flat scenarios.
 * This format is better for dynamic navigation and scales to NLH.
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
        Triple("${boardName}a", boardName, boardCard),
        Triple("${boardName}b", boardName, boardCard + 1),
        Triple("Ka", "K", 4), Triple("Kb", "K", 5),
        Triple("Qa", "Q", 2), Triple("Qb", "Q", 3),
        Triple("Ja", "J", 0), Triple("Jb", "J", 1)
    )) {
        if (cardIdx == boardCard || cardIdx == boardCard + 1) continue // Skip board cards

        val solverHistory = history.replace("|", "d")
        val infoSetKey = "$rank$boardRank $solverHistory"

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

        // Check if this transitions to R2
        val shouldTransition = state.round == 1 && nextState.round == 2

        if (shouldTransition) {
            // R2 transition - show chance node
            js.append("        $actionName: { chance: true, outcomes: [\n")
            for (nextBoard in listOf("J", "Q", "K")) {
                val nextBoardCard = when(nextBoard) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }
                val r2State = nextState.copy(boardCard = nextBoardCard)
                val subtree = buildTreeNode(r2State, nextBoard, profile, visited.toMutableSet())
                js.append("          { board: \"${nextBoard}♠\", node: $subtree },\n")
            }
            js.append("        ] },\n")
        } else {
            // Normal continuation
            val subtree = buildTreeNode(nextState, boardName, profile, visited.toMutableSet())
            js.append("        $actionName: $subtree,\n")
        }
    }

    js.append("      }\n")
    js.append("    }")

    return js.toString()
}
