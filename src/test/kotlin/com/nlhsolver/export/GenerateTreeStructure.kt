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
                boardCard = -1, // Board not dealt yet in Round 1
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

/**
 * Calculate showdown equity for a hand in Round 2.
 * Equity = P(win at showdown | both players reach showdown)
 *
 * In Leduc:
 * - Pair > High card > Low card
 * - Same pair/high card = split
 */
/**
 * Calculate showdown equity for a hand in Round 2.
 * Equity = P(win at showdown | both players reach showdown)
 */
fun calculateEquity(playerCard: Int, boardCard: Int): Double {
    val playerRank = playerCard / 2  // 0=J, 1=Q, 2=K
    val boardRank = boardCard / 2
    val hasPair = (playerRank == boardRank)

    // All possible opponent cards (excluding playerCard and boardCard)
    val opponentCards = (0..5).filter { it != playerCard && it != boardCard }

    var wins = 0.0
    var total = 0.0

    for (oppCard in opponentCards) {
        val oppRank = oppCard / 2
        val oppHasPair = (oppRank == boardRank)

        val playerScore = if (hasPair) 100 + playerRank else playerRank
        val oppScore = if (oppHasPair) 100 + oppRank else oppRank

        when {
            playerScore > oppScore -> wins += 1.0  // Win
            playerScore == oppScore -> wins += 0.5  // Tie
            // else: loss, wins += 0.0
        }
        total += 1.0
    }

    return wins / total
}

/**
 * Calculate expected value (EV) for a specific hand at a game state.
 *
 * Returns EV vs uniform opponent range, averaged over all possible opponent cards.
 * This generalizes to NLH because it only depends on:
 * - GameState interface (terminal check, actions, apply action)
 * - StrategyProfile (to get equilibrium strategies)
 *
 * CURRENT APPROACH: Compute EVs on-demand during export
 * - Simple and sufficient for Leduc
 * - No extra memory overhead
 * - EVs computed using final equilibrium strategy
 *
 * NLH OPTIMIZATION TODO: Consider pre-computing EVs during solve
 * - For large NLH blueprints, add a post-training evaluation pass:
 *   solver.train(rootState, iterations)
 *   val evMap = solver.evaluateAllInfoSets()  // Store EVs for all info sets
 * - Benefits: Faster export, enables per-action EV analysis
 * - Trade-off: Increased memory usage, need to store EVs for all info sets
 *
 * @param state Current game state
 * @param heroCard The card we're computing EV for
 * @param boardCard The board card (only relevant in Round 2)
 * @param boardName Board rank name for lookups
 * @param profile Strategy profile containing equilibrium strategies
 * @return Expected value in big blinds vs uniform opponent range
 */
fun calculateEV(
    state: LeducWithSuitAbstraction,
    heroCard: Int,
    boardCard: Int,
    boardName: String,
    profile: StrategyProfile
): Double {
    val round = state.round

    // In Round 1, boardCard is -1 (not dealt yet) - average over all possible boards
    // In Round 2, use the specific board
    if (round == 1 && boardCard == -1) {
        // Average over all possible board outcomes
        var totalEV = 0.0
        var boardCount = 0

        for (board in listOf("J", "Q", "K")) {
            val bCard = when(board) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }

            // Skip if board would be same as hero's card
            if (bCard == heroCard) continue

            // Get all possible opponent cards (exclude heroCard and this board)
            val opponentCards = (0..5).filter { it != heroCard && it != bCard }

            var boardEV = 0.0
            for (oppCard in opponentCards) {
                boardEV += calculateEVForMatchup(
                    state = state,
                    p1Card = heroCard,
                    p2Card = oppCard,
                    boardCard = bCard,
                    boardName = board,
                    profile = profile,
                    heroIsP1 = true,
                    visited = mutableSetOf()
                )
            }

            totalEV += boardEV / opponentCards.size
            boardCount++
        }

        return totalEV / boardCount
    } else {
        // Round 2 or specific board - average over opponent holdings
        val opponentCards = if (round == 2) {
            (0..5).filter { it != heroCard && it != boardCard }
        } else {
            (0..5).filter { it != heroCard }
        }

        var totalEV = 0.0
        for (oppCard in opponentCards) {
            totalEV += calculateEVForMatchup(
                state = state,
                p1Card = heroCard,
                p2Card = oppCard,
                boardCard = boardCard,
                boardName = boardName,
                profile = profile,
                heroIsP1 = true,
                visited = mutableSetOf()
            )
        }

        return totalEV / opponentCards.size
    }
}

/**
 * Calculate EV for a specific card matchup.
 *
 * This recursively walks the game tree using equilibrium strategies.
 */
private fun calculateEVForMatchup(
    state: LeducWithSuitAbstraction,
    p1Card: Int,
    p2Card: Int,
    boardCard: Int,
    boardName: String,
    profile: StrategyProfile,
    heroIsP1: Boolean,
    visited: MutableSet<String>
): Double {
    // Terminal node: return payoff
    if (state.isTerminal()) {
        // Create a state with actual cards to get proper showdown result
        val finalState = state.copy(p1Card = p1Card, p2Card = p2Card, boardCard = boardCard)
        val utilities = finalState.getUtility()
        return if (heroIsP1) utilities[0] else utilities[1]
    }

    // Cycle detection
    val key = "${state.round}:${state.history}:$p1Card:$p2Card"
    if (key in visited) return 0.0
    visited.add(key)

    val actions = state.getLegalActions()
    if (actions.isEmpty()) return 0.0

    val currentPlayer = state.currentPlayer() ?: return 0.0
    val isHeroTurn = (currentPlayer == 0 && heroIsP1) || (currentPlayer == 1 && !heroIsP1)

    // Get the info set and strategy for the current player
    val round = state.round
    val history = state.history.replace("|", "d")

    val activeCard = if (currentPlayer == 0) p1Card else p2Card
    val activeRank = when(activeCard / 2) { 0 -> "J"; 1 -> "Q"; 2 -> "K"; else -> "Q" }

    val infoSetKey = if (round == 1) {
        "$activeRank $history"
    } else {
        "$activeRank$boardName $history"
    }

    val strategy = try {
        profile.getInfoSetStrategy(infoSetKey, actions.size).getAverageStrategy()
    } catch (e: Exception) {
        DoubleArray(actions.size) { 1.0 / actions.size }
    }

    // Check if this action transitions to Round 2
    val shouldTransition = state.round == 1 && actions.isNotEmpty() &&
        (state.applyAction(actions[0]) as LeducWithSuitAbstraction).round == 2

    if (shouldTransition) {
        // Chance node after this decision - average over board outcomes
        var totalEV = 0.0

        for (i in actions.indices) {
            val nextState = state.applyAction(actions[i]) as LeducWithSuitAbstraction

            // Average over all possible boards (excluding p1Card and p2Card)
            var boardEV = 0.0
            var boardCount = 0
            for (nextBoard in listOf("J", "Q", "K")) {
                val nextBoardCard = when(nextBoard) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }

                // Skip if board is same as either player's card
                if (nextBoardCard == p1Card || nextBoardCard == p2Card) continue

                val r2State = nextState.copy(boardCard = nextBoardCard)
                boardEV += calculateEVForMatchup(
                    r2State, p1Card, p2Card, nextBoardCard, nextBoard,
                    profile, heroIsP1, visited.toMutableSet()
                )
                boardCount++
            }

            totalEV += strategy[i] * (if (boardCount > 0) boardEV / boardCount else 0.0)
        }

        return totalEV
    } else {
        // Normal decision node - weighted average over actions
        var totalEV = 0.0

        for (i in actions.indices) {
            val nextState = state.applyAction(actions[i]) as LeducWithSuitAbstraction
            val actionEV = calculateEVForMatchup(
                nextState, p1Card, p2Card, boardCard, boardName,
                profile, heroIsP1, visited.toMutableSet()
            )
            totalEV += strategy[i] * actionEV
        }

        return totalEV
    }
}

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

        // Convert history: replace | with d to match solver format
        val solverHistory = history.replace("|", "d")

        // Round 1: info set is just rank (e.g., "K ")
        // Round 2: info set is rank+board WITHOUT dash (e.g., "KQ ")
        // This matches LeducWithSuitAbstraction.getInfoSet() which uses
        // getCanonicalHand(...).replace("-", "") in Round 2
        val infoSetKey = if (round == 1) {
            "$rank $solverHistory"
        } else {
            "$rank$boardRank $solverHistory"  // No dash!
        }

        val strategy = try {
            profile.getInfoSetStrategy(infoSetKey, actions.size).getAverageStrategy()
        } catch (e: Exception) {
            DoubleArray(actions.size) { 1.0 / actions.size }
        }

        // Calculate equity (showdown win probability)
        val equity = if (round == 2) {
            calculateEquity(cardIdx, boardCard)
        } else {
            0.5  // Pre-flop, average across all possible boards
        }

        // Calculate EV (expected value) for this hand
        // This does a full tree walk using equilibrium strategy
        // It generalizes to NLH because it only depends on:
        // - GameState interface
        // - StrategyProfile (equilibrium strategies)
        // - Terminal utilities
        // Use state.boardCard (which is -1 in Round 1) to ensure proper averaging
        val evTotal = calculateEV(state, cardIdx, state.boardCard, boardName, profile)

        js.append("        { id: \"$cardId\", label: \"$rank${if (cardIdx % 2 == 0) "♠" else "♥"}\", ")
        js.append("equity: ${f(equity)}, ")
        js.append("evTotal: ${f(evTotal)}, ")
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
