package com.nlhsolver.export

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.integration.LeducState
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Auto-generate ALL Leduc scenarios by exploring the complete game tree.
 * This creates a comprehensive static export covering every possible strategic spot.
 */
class GenerateAllScenarios : FunSpec({

    test("Generate complete Leduc scenario export") {
        println("\n=== Generating Complete Leduc Tree ===\n")

        // Train solver with deep scenario oversampling
        println("Training solver with 2M iterations (30% deep scenario focus)...")
        val profile = trainSolver(iterations = 2_000_000, deepScenarioWeight = 0.3)

        // Collect all unique strategic spots
        val spots = collectUniqueStrategicSpots()
        println("Found ${spots.size} unique strategic spots\n")

        // Generate export code
        val js = StringBuilder()
        generateHeader(js)

        // Export each spot
        spots.forEachIndexed { index, spot ->
            println("Exporting ${index + 1}/${spots.size}: ${spot.id}")
            exportSpot(js, profile, spot)
        }

        generateFooter(js, spots)

        // Write to file
        val outputPath = "/Users/tpai/Downloads/leduc-complete.js"
        File(outputPath).writeText(js.toString())

        println("\n✓ Exported ${spots.size} scenarios to $outputPath")
        println("Tree is now COMPLETE - no premature terminals!")
    }
})

data class StrategicSpot(
    val id: String,
    val board: String,
    val history: String,
    val label: String,
    val pot: Int,
    val toCall: Int,
    val actions: List<String>
)

fun trainSolver(iterations: Int = 100000, deepScenarioWeight: Double = 0.2): StrategyProfile {
    val allCards = 0..5
    val allMatchups = mutableListOf<LeducState>()

    // CORRECTED: Use chance nodes (boardCard = -1) for unified game tree
    // This creates one game where Round 1 strategies generalize across all boards
    for (p1 in allCards) {
        for (p2 in allCards) {
            if (p1 != p2) {
                allMatchups.add(
                    LeducState(
                        p1Card = p1,
                        p2Card = p2,
                        boardCard = -1,  // CHANCE NODE - board dealt uniformly when R1 completes
                        round = 1,
                        p1Invested = 1.0,
                        p2Invested = 1.0,
                        history = ""
                    )
                )
            }
        }
    }

    // Deep scenarios to oversample - states that LEAD TO deep decision points
    // Updated based on exploitability scan (FindExploitableNodes)
    val deepScenarios = mutableListOf<LeducState>()
    val deepHistories = listOf(
        // Original deep spots
        "xbc|x",   // P2 to act after P1 checks R2
        "bc|x",    // P2 to act after P1 checks R2

        // Top exploitable spots (10+ chip gaps)
        "xbc|xbr", // 3-bet spots - K massively under-calling
        "xbc|br",  // 3-bet spots - K massively under-calling

        // High exploitability (5-10 chip gaps)
        "xbc|b",   // Q under-raising as bluff
        "bc|b",    // Q under-raising as bluff
        "xbc|xb",  // Q under-raising as bluff
        "bc|xb"    // Q/J under-raising
    )

    for (p1 in allCards) {
        for (p2 in allCards) {
            for (board in allCards) {
                if (p1 != p2 && p1 != board && p2 != board) {
                    deepHistories.forEach { history ->
                        deepScenarios.add(
                            LeducState(
                                p1Card = p1,
                                p2Card = p2,
                                boardCard = board,
                                round = 2,
                                p1Invested = 3.0,  // After xbc or bc
                                p2Invested = 3.0,
                                history = history
                            )
                        )
                    }
                }
            }
        }
    }

    val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
    val reportInterval = if (iterations >= 1000000) 100000 else 25000

    repeat(iterations) { i ->
        // Sample from deep scenarios with probability deepScenarioWeight
        val matchup = if (Math.random() < deepScenarioWeight) {
            deepScenarios[i % deepScenarios.size]
        } else {
            allMatchups[i % allMatchups.size]
        }

        solver.train(matchup, iterations = 1)
        if ((i + 1) % reportInterval == 0) println("  ${i + 1} iterations")
    }

    return solver.getStrategyProfile()
}

fun collectUniqueStrategicSpots(): List<StrategicSpot> {
    val spots = mutableSetOf<String>() // Use set to deduplicate by (board, history)
    val result = mutableListOf<StrategicSpot>()

    // Explore all paths from root
    for (board in listOf("J", "Q", "K")) {
        val boardCard = when(board) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }

        // Use one sample card combination to explore paths
        val initialState = LeducState(
            p1Card = 1, // J♥
            p2Card = 3, // Q♥
            boardCard = boardCard,
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        explorePaths(initialState, board, spots, result)
    }

    return result.sortedBy { it.id }
}

fun explorePaths(
    state: LeducState,
    boardName: String,
    visited: MutableSet<String>,
    result: MutableList<StrategicSpot>
) {
    if (state.isTerminal()) return

    val history = state.history
    val key = "$boardName:$history"

    // Skip if already visited this strategic spot
    if (key in visited) return
    visited.add(key)

    val actions = state.getLegalActions()
    if (actions.isEmpty()) return

    // Create spot
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

    val spot = StrategicSpot(
        id = "r${state.round}_${boardName.lowercase()}_${history.replace("|", "_").replace("d", "_")}",
        board = boardName,
        history = history,
        label = formatHistoryLabel(history),
        pot = (state.p1Invested + state.p2Invested).toInt(),
        toCall = (maxOf(state.p1Invested, state.p2Invested) - minOf(state.p1Invested, state.p2Invested)).toInt(),
        actions = actionNames
    )

    result.add(spot)

    // Recursively explore all continuations
    for (action in actions) {
        val nextState = state.applyAction(action) as LeducState
        explorePaths(nextState, boardName, visited, result)
    }
}

fun formatHistoryLabel(history: String): String {
    return history
        .replace("x", "check ")
        .replace("b", "bet ")
        .replace("c", "call ")
        .replace("r", "raise ")
        .replace("f", "fold ")
        .replace("|", "| ")
        .replace("d", "deal ")
        .trim()
}

fun generateHeader(js: StringBuilder) {
    js.appendLine("// ============================================================")
    js.appendLine("// COMPLETE Leduc Hold'em Strategy Tree")
    js.appendLine("// Auto-generated from game tree exploration")
    js.appendLine("// Covers ALL strategic spots - no premature terminals!")
    js.appendLine("// ============================================================")
    js.appendLine()
    js.appendLine("(function() {")
    js.appendLine("  const ACT = {")
    js.appendLine("    fold:  { id:'fold',  label:'Fold',  color:'#e5484d', kind:'fold' },")
    js.appendLine("    check: { id:'check', label:'Check', color:'#8b8d98', kind:'passive' },")
    js.appendLine("    call:  { id:'call',  label:'Call',  color:'#3b82f6', kind:'passive' },")
    js.appendLine("    bet:   { id:'bet',   label:'Bet',   color:'#f59e0b', kind:'aggressive' },")
    js.appendLine("    raise: { id:'raise', label:'Raise', color:'#22c55e', kind:'aggressive' },")
    js.appendLine("  };")
    js.appendLine()
}

fun exportSpot(js: StringBuilder, profile: StrategyProfile, spot: StrategicSpot) {
    val boardCard = when(spot.board) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }
    val boardRank = spot.board

    js.appendLine("  function makeScenario_${spot.id}() {")
    js.appendLine("    // ${spot.label}")

    val actObjs = spot.actions.map { "ACT.$it" }.joinToString(", ")
    js.appendLine("    const actions = [$actObjs];")

    js.appendLine("    const cards = [")
    js.appendLine("      {id:'Ka', rank:'K', suit:'♠'},")
    js.appendLine("      {id:'Kb', rank:'K', suit:'♥'},")
    js.appendLine("      {id:'Qa', rank:'Q', suit:'♠'},")
    js.appendLine("      {id:'Qb', rank:'Q', suit:'♥'},")
    js.appendLine("      {id:'Ja', rank:'J', suit:'♠'},")
    js.appendLine("      {id:'Jb', rank:'J', suit:'♥'},")
    js.appendLine("    ];")
    js.appendLine()

    // Get strategies for all cards
    js.appendLine("    const strat = {")

    for ((cardId, rank, cardIdx) in listOf(
        Triple("Ka", "K", 4), Triple("Kb", "K", 5),
        Triple("Qa", "Q", 2), Triple("Qb", "Q", 3),
        Triple("Ja", "J", 0), Triple("Jb", "J", 1)
    )) {
        if (cardIdx == boardCard) continue

        val solverHistory = spot.history.replace("|", "d")
        val infoSetKey = "$rank$boardRank $solverHistory"

        val strategy = try {
            profile.getInfoSetStrategy(infoSetKey, spot.actions.size).getAverageStrategy()
        } catch (e: Exception) {
            DoubleArray(spot.actions.size) { 1.0 / spot.actions.size }
        }

        js.append("      $cardId: { ")
        js.append("freq:{")
        js.append(spot.actions.mapIndexed { i, action -> "$action:${f(strategy[i])}" }.joinToString(", "))
        js.append("} },")
        js.appendLine()
    }

    js.appendLine("    };")
    js.appendLine("    const hands = cards.map(c => {")
    js.appendLine("      const s = strat[c.id];")
    js.appendLine("      if (!s) return null;")
    js.appendLine("      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };")
    js.appendLine("    }).filter(h => h !== null);")
    js.appendLine()

    js.appendLine("    return {")
    js.appendLine("      game:'leduc', handShape:'tile',")
    js.appendLine("      meta:{ street:'round2', pot:${spot.pot}, toCall:${spot.toCall}, board:['${spot.board}♠'] },")
    js.appendLine("      actions, hands")
    js.appendLine("    };")
    js.appendLine("  }")
    js.appendLine()
}

fun generateFooter(js: StringBuilder, spots: List<StrategicSpot>) {
    js.appendLine("  window.LEDUC_COMPLETE = {")
    spots.forEachIndexed { index, spot ->
        val comma = if (index < spots.size - 1) "," else ""
        js.appendLine("    ${spot.id}: makeScenario_${spot.id}()$comma")
    }
    js.appendLine("  };")
    js.appendLine("})();")
}
