package com.nlhsolver.export

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.GameAction
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.integration.LeducWithSuitAbstraction
import com.nlhsolver.range.*
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
 * Compute opponent's range at a game state by replaying history.
 *
 * Starts with uniform range and propagates through each action in the
 * history to get the equilibrium range at this node.
 *
 * @param state Current game state
 * @param profile Strategy profile for looking up equilibrium strategies
 * @param currentPlayer Who is acting now (opponent is the other player)
 * @return Opponent's range distribution at this node
 */
fun computeOpponentRange(
    state: LeducWithSuitAbstraction,
    profile: StrategyProfile,
    currentPlayer: Int
): LeducRange {
    // Start with uniform range
    var oppRange = LeducRange.uniform()
    val propagator = LeducRangePropagator()

    val opponentPlayer = 1 - currentPlayer
    val history = state.history

    // Parse history to replay opponent's actions
    // History format: "xbc" = check, bet, call
    // Round separator: "|" or "d"
    if (history.isEmpty()) {
        return oppRange  // No actions yet
    }

    // Split by round separator
    val rounds = history.split("|", "d")

    // Replay each round
    var replayState = LeducWithSuitAbstraction(
        p1Card = 0, p2Card = 2,  // Dummy cards (doesn't matter for range propagation)
        boardCard = -1,
        round = 1,
        p1Invested = 1.0,
        p2Invested = 1.0,
        history = ""
    )

    for ((roundIdx, roundHistory) in rounds.withIndex()) {
        if (roundHistory.isEmpty()) continue

        // If this is round 2, update board card
        if (roundIdx == 1) {
            val boardCard = when(state.boardCard / 2) {
                0 -> 0; 1 -> 2; 2 -> 4; else -> 2
            }
            replayState = replayState.copy(boardCard = boardCard, round = 2)
        }

        // Replay each action in this round
        var turnPlayer = 0  // P1 always acts first in each round
        for (actionChar in roundHistory) {
            val actionId = actionChar.toString()
            val actions = replayState.getLegalActions()
            val action = actions.firstOrNull { it.getActionId() == actionId }

            if (action != null) {
                // If this action was taken by opponent, propagate their range
                if (turnPlayer == opponentPlayer) {
                    oppRange = propagator.propagate(
                        oppRange, action, replayState, profile
                    ) as LeducRange
                }

                // Apply action and update turn
                replayState = replayState.applyAction(action) as LeducWithSuitAbstraction
                turnPlayer = 1 - turnPlayer
            }
        }
    }

    return oppRange
}

/**
 * Calculate EV using opponent's equilibrium range distribution.
 *
 * This is the CORRECT way to compute EVs - it accounts for how opponent's
 * range changes based on their equilibrium play, rather than assuming
 * uniform distribution.
 *
 * @param state Current game state
 * @param heroHand The hand we're computing EV for
 * @param opponentRange Opponent's range distribution at this node
 * @param boardCard The board card (-1 if Round 1)
 * @param boardName Board rank name for lookups
 * @param profile Strategy profile containing equilibrium strategies
 * @param heroPlayer Which player is the hero (0=P1, 1=P2)
 * @return Expected value in big blinds vs opponent's equilibrium range
 */
fun calculateEVWithRange(
    state: LeducWithSuitAbstraction,
    heroHand: LeducHand,
    opponentRange: LeducRange,
    boardCard: Int,
    boardName: String,
    profile: StrategyProfile,
    heroPlayer: Int
): Double {
    val heroIsP1 = (heroPlayer == 0)

    // Filter out hands that conflict with hero or board
    var validRange = opponentRange.excluding(heroHand)

    // Weight EV by opponent's range distribution
    var totalEV = 0.0
    var totalWeight = 0.0

    for ((oppHand, weight) in validRange.getActiveHands()) {
        if (weight <= 0.0) continue

        val oppCardIdx = (oppHand as LeducHand).cardIdx
        val heroCardIdx = heroHand.cardIdx

        val (p1Card, p2Card) = if (heroIsP1) {
            Pair(heroCardIdx, oppCardIdx)
        } else {
            Pair(oppCardIdx, heroCardIdx)
        }

        val matchupEV = calculateEVForMatchup(
            state, p1Card, p2Card, boardCard, boardName,
            profile, heroIsP1, mutableSetOf()
        )

        totalEV += weight * matchupEV
        totalWeight += weight
    }

    return if (totalWeight > 0.0) totalEV / totalWeight else 0.0
}

/**
 * Calculate EV for a specific action.
 *
 * Returns the EV if the hero takes this specific action, then follows
 * equilibrium strategy for the rest of the game.
 *
 * IMPORTANT: Must preserve hero's identity across turn changes. When hero
 * acts, current player changes, but we still need to calculate from hero's
 * perspective.
 *
 * @param state Current game state
 * @param heroCard The card we're computing EV for
 * @param boardCard The board card (-1 if Round 1)
 * @param boardName Board rank name for lookups
 * @param action The action to evaluate
 * @param profile Strategy profile containing equilibrium strategies
 * @param heroPlayer Which player is the hero (0=P1, 1=P2)
 * @return Expected value in big blinds if this action is taken
 */
fun calculateEVForAction(
    state: LeducWithSuitAbstraction,
    heroCard: Int,
    boardCard: Int,
    boardName: String,
    action: GameAction,
    profile: StrategyProfile,
    heroPlayer: Int
): Double {
    // Apply the action to get next state
    val nextState = state.applyAction(action) as LeducWithSuitAbstraction

    // Handle board card for round transitions
    // If we're transitioning from R1 to R2, nextState.boardCard might be stale
    // Use -1 to signal we should average over all boards
    val nextBoardCard = if (state.round == 1 && nextState.round == 2) {
        -1  // Transition to R2 - average over all boards
    } else {
        nextState.boardCard
    }

    // Calculate EV from next state following equilibrium
    // Use explicit heroPlayer to preserve perspective across turn changes
    return calculateEVWithHero(nextState, heroCard, nextBoardCard, boardName, profile, heroPlayer)
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
    // Determine which player is the hero from current turn
    val currentPlayer = state.currentPlayer() ?: 0
    return calculateEVWithHero(state, heroCard, boardCard, boardName, profile, currentPlayer)
}

/**
 * Calculate EV with explicit hero player (to preserve perspective across turn changes).
 */
fun calculateEVWithHero(
    state: LeducWithSuitAbstraction,
    heroCard: Int,
    boardCard: Int,
    boardName: String,
    profile: StrategyProfile,
    heroPlayer: Int
): Double {
    val round = state.round
    val heroIsP1 = (heroPlayer == 0)

    // In Round 1, boardCard is -1 (not dealt yet) - average over all possible boards
    // In Round 2, use the specific board
    if (round == 1 && boardCard == -1) {
        // Average over all possible board outcomes
        var totalEV = 0.0
        var boardCount = 0

        val heroRank = heroCard / 2  // 0=J, 1=Q, 2=K

        for (board in listOf("J", "Q", "K")) {
            val bCard = when(board) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }
            val boardRank = bCard / 2

            // Skip if board rank matches hero's rank (suit abstraction)
            if (boardRank == heroRank) continue

            // Get all possible opponent cards (exclude hero's rank and board rank)
            val opponentCards = (0..5).filter {
                it / 2 != heroRank && it / 2 != boardRank
            }

            var boardEV = 0.0
            for (oppCard in opponentCards) {
                // Assign hero/opponent based on current player
                val (p1Card, p2Card) = if (heroIsP1) {
                    Pair(heroCard, oppCard)
                } else {
                    Pair(oppCard, heroCard)
                }

                boardEV += calculateEVForMatchup(
                    state = state,
                    p1Card = p1Card,
                    p2Card = p2Card,
                    boardCard = bCard,
                    boardName = board,
                    profile = profile,
                    heroIsP1 = heroIsP1,
                    visited = mutableSetOf()
                )
            }

            totalEV += boardEV / opponentCards.size
            boardCount++
        }

        return totalEV / boardCount
    } else {
        // Round 2 or specific board - average over opponent holdings
        val heroRank = heroCard / 2
        val opponentCards = if (round == 2) {
            val boardRank = boardCard / 2
            // Exclude opponent cards with same rank as hero or board (suit abstraction)
            (0..5).filter { it / 2 != heroRank && it / 2 != boardRank }
        } else {
            (0..5).filter { it / 2 != heroRank }
        }

        var totalEV = 0.0
        for (oppCard in opponentCards) {
            // Assign hero/opponent based on current player
            val (p1Card, p2Card) = if (heroIsP1) {
                Pair(heroCard, oppCard)
            } else {
                Pair(oppCard, heroCard)
            }

            totalEV += calculateEVForMatchup(
                state = state,
                p1Card = p1Card,
                p2Card = p2Card,
                boardCard = boardCard,
                boardName = boardName,
                profile = profile,
                heroIsP1 = heroIsP1,
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

            // Average over all possible boards (excluding ranks held by players)
            var boardEV = 0.0
            var boardCount = 0
            val p1Rank = p1Card / 2
            val p2Rank = p2Card / 2

            for (nextBoard in listOf("J", "Q", "K")) {
                val nextBoardCard = when(nextBoard) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }
                val nextBoardRank = nextBoardCard / 2

                // Skip if board rank matches either player's rank (suit abstraction)
                if (nextBoardRank == p1Rank || nextBoardRank == p2Rank) continue

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

        // Calculate EV using UNIFORM opponent range (baseline)
        // This assumes opponent has all hands equally likely
        val evUniform = calculateEV(state, cardIdx, state.boardCard, boardName, profile)

        // Calculate EV using RANGE-BASED opponent distribution (correct)
        // This accounts for how opponent's range evolved through their equilibrium play
        val currentPlayer = state.currentPlayer() ?: 0
        val opponentRange = computeOpponentRange(state, profile, currentPlayer)
        val heroHand = LeducHand(cardIdx)
        val evRange = calculateEVWithRange(
            state, heroHand, opponentRange,
            state.boardCard, boardName, profile, currentPlayer
        )

        // Calculate per-action EV with uniform range
        val evPerActionUniform = actions.mapIndexed { i, action ->
            val actionEV = calculateEVForAction(state, cardIdx, state.boardCard, boardName, action, profile, currentPlayer)
            actionNames[i] to actionEV
        }

        js.append("        { id: \"$cardId\", label: \"$rank${if (cardIdx % 2 == 0) "♠" else "♥"}\", ")
        js.append("equity: ${f(equity)}, ")
        js.append("evUniform: ${f(evUniform)}, ")
        js.append("evRange: ${f(evRange)}, ")
        js.append("freq: {")
        js.append(actionNames.mapIndexed { i, action -> "$action: ${f(strategy[i])}" }.joinToString(", "))
        js.append("}, ")
        js.append("ev: {")
        js.append(evPerActionUniform.map { (action, ev) -> "$action: ${f(ev)}" }.joinToString(", "))
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
