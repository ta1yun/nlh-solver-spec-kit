package com.nlhsolver.export

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.GameAction
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.integration.LeducState
import com.nlhsolver.range.*
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Export poker game trees for UI visualization.
 *
 * DESIGN FOR GENERALIZATION:
 * While this file currently exports Leduc trees, the EV calculation functions
 * use generic interfaces (Hand, Range) that work for any poker variant:
 *
 * - calculateEVWithRange(Hand, Range, ...) - works for Leduc, NLH, PLO
 * - calculateEVForActionWithRange(Hand, Range, ...) - variant-independent
 * - computeOpponentRange(...) -> Range - returns interface, not concrete type
 *
 * To add NLH support:
 * 1. Create NLHHand and NLHRange implementing Hand/Range interfaces
 * 2. Create NLH-specific tree builder (similar to buildTreeNode)
 * 3. Reuse the same EV calculation functions with NLH types
 *
 * KEY INSIGHT: Chance nodes (board dealing) appear exactly when betting
 * rounds complete. This is detected via isBettingRoundComplete() which
 * checks if the pot is "capped" (all players matched) and last action
 * was passive (check/call). This pattern generalizes to all poker variants.
 */
class GenerateTreeStructure : FunSpec({

    test("Generate recursive tree structure") {
        println("\n=== Generating Recursive Tree ===\n")

        // 200_000 epochs × 30 deals = 6M traversals, vanilla CFR.
        // Vanilla CFR is used because it outperforms CFR+ on Leduc (see DESIGN_DECISIONS.md).
        println("Training solver: 200,000 epochs × 30 deals (vanilla CFR)...")
        val profile = trainSolver(iterations = 200_000, deepScenarioWeight = 0.0)

        // Measure exploitability using validated multi-deal policy iteration approach.
        println("\nMeasuring exploitability...")
        val exploitCalc = com.nlhsolver.core.ExploitabilityCalculator(numPlayers = 2)
        val rootStates = mutableListOf<LeducState>()
        for (p1Card in 0..5) {
            for (p2Card in 0..5) {
                for (boardCard in 0..5) {
                    if (p1Card != p2Card && p1Card != boardCard && p2Card != boardCard) {
                        rootStates.add(LeducState(
                            p1Card = p1Card, p2Card = p2Card, boardCard = boardCard,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }

        val exploit = exploitCalc.calculateExploitability(rootStates, profile)
        println("  Exploitability: ${String.format("%.2f", exploit * 100)}% (${String.format("%.1f", exploit * 500)} mbb/g)")
        println("  Info sets trained: ${rootStates.size} pre-dealt matchups for measurement")
        println()

        // Generate tree for each board
        val trees = mutableListOf<String>()
        for (board in listOf("J", "Q", "K")) {
            val initialState = LeducState(
                p1Card = 1, p2Card = 3,
                boardCard = -1,
                round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
            )
            println("Building tree for board $board...")
            val tree = buildTreeNode(initialState, board, profile, mutableSetOf())
            trees.add("  ${board.lowercase()}: ${tree}")
        }

        // Write output
        val js = StringBuilder()
        js.appendLine("// Recursive Leduc Tree Structure")
        js.appendLine("// Solver: vanilla CFR, 200k epochs × 30 deals")
        js.appendLine("// Exploitability: ${String.format("%.2f", exploit * 100)}% (${String.format("%.1f", exploit * 500)} mbb/g)")
        js.appendLine()
        js.appendLine("(function() {")
        js.appendLine("  window.LEDUC_TREE = {")
        js.appendLine(trees.joinToString(",\n"))
        js.appendLine("  };")
        js.appendLine("})();")

        val outputPath = "/Users/tpai/Projects/nlh-solver-spec-kit/leduc-tree.js"
        File(outputPath).writeText(js.toString())

        println("\n✓ Exported recursive tree to $outputPath")
        println("  Copy to viewer/leduc-tree.js to update the viewer.")
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
            val state = LeducState(
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
/**
 * Compute hero's range at a given game state.
 *
 * Similar to computeOpponentRange, but computes the current player's range
 * by replaying their own actions through the history.
 *
 * @return Range interface representing hero's range distribution at this node
 */
fun computeHeroRange(
    state: LeducState,
    profile: StrategyProfile,
    currentPlayer: Int
): Range {
    // Start with uniform range
    var heroRange: Range = LeducRange.uniform()
    val propagator = LeducRangePropagator()

    val history = state.history
    if (history.isEmpty()) {
        return heroRange  // No actions yet
    }

    // Split by round separator
    val rounds = history.split("|", "d")

    // Replay each round
    var replayState = LeducState(
        p1Card = 0, p2Card = 2,  // Dummy cards
        boardCard = -1,
        round = 1,
        p1Invested = 1.0,
        p2Invested = 1.0,
        history = ""
    )

    for ((roundIdx, roundHistory) in rounds.withIndex()) {
        if (roundHistory.isEmpty()) continue

        // If this is round 2, update board card and add the round separator "|" so that
        // history-based info set keys in R2 match the "xx|x" format produced by LeducState.
        // Without "|", applyAction in round=2 produces "xxx" instead of "xx|x", and
        // getInfoSetForHand converts to "xxx" instead of "xxdx" — lookup fails.
        if (roundIdx == 1) {
            val boardCard = when(state.boardCard / 2) {
                0 -> 0; 1 -> 2; 2 -> 4; else -> 2
            }
            replayState = replayState.copy(boardCard = boardCard, round = 2, history = replayState.history + "|")
        }

        // Replay each action in this round
        var turnPlayer = 0  // P1 always acts first in each round
        for (actionChar in roundHistory) {
            val actionId = actionChar.toString()
            val actions = replayState.getLegalActions()
            val action = actions.firstOrNull { it.getActionId() == actionId }

            if (action != null) {
                // If this action was taken by hero, propagate their range
                if (turnPlayer == currentPlayer) {
                    heroRange = propagator.propagate(
                        heroRange, action, replayState, profile
                    )
                }

                // Apply action and update turn
                replayState = replayState.applyAction(action) as LeducState
                turnPlayer = 1 - turnPlayer
            }
        }
    }

    return heroRange
}

/**
 * Compute opponent's range at a given game state.
 *
 * This function is game-agnostic - it works for any poker variant by:
 * 1. Starting with a uniform range
 * 2. Replaying the game history
 * 3. Propagating range through opponent's equilibrium actions
 *
 * @return Range interface that can be LeducRange, NLHRange, etc.
 */
fun computeOpponentRange(
    state: LeducState,
    profile: StrategyProfile,
    currentPlayer: Int
): Range {
    // Start with uniform range (Leduc-specific implementation)
    var oppRange: Range = LeducRange.uniform()
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
    var replayState = LeducState(
        p1Card = 0, p2Card = 2,  // Dummy cards (doesn't matter for range propagation)
        boardCard = -1,
        round = 1,
        p1Invested = 1.0,
        p2Invested = 1.0,
        history = ""
    )

    for ((roundIdx, roundHistory) in rounds.withIndex()) {
        if (roundHistory.isEmpty()) continue

        // Same "|" fix as computeHeroRange: without it R2 history is "xxx" not "xx|x".
        if (roundIdx == 1) {
            val boardCard = when(state.boardCard / 2) {
                0 -> 0; 1 -> 2; 2 -> 4; else -> 2
            }
            replayState = replayState.copy(boardCard = boardCard, round = 2, history = replayState.history + "|")
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
                    )
                }

                // Apply action and update turn
                replayState = replayState.applyAction(action) as LeducState
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
/**
 * Calculate EV for a specific hand against opponent's actual range.
 *
 * This is the core range-based EV calculation used in modern poker solvers.
 * Unlike uniform EV (which assumes opponent has all hands equally), this
 * accounts for how opponent's range has evolved through equilibrium play.
 *
 * Generic signature allows use with any poker variant:
 * - Leduc: Hand = LeducHand, Range = LeducRange
 * - NLH: Hand = NLHHand, Range = NLHRange
 *
 * @param heroHand The specific hand we're calculating EV for
 * @param opponentRange The opponent's probability distribution over hands
 * @return Expected value in big blinds from hero's perspective
 */
fun calculateEVWithRange(
    state: LeducState,
    heroHand: Hand,
    opponentRange: Range,
    boardCard: Int,
    boardName: String,
    profile: StrategyProfile,
    heroPlayer: Int
): Double {
    // Terminal state: return hero's utility
    if (state.isTerminal()) {
        val leducHero = heroHand as LeducHand
        val heroCard = leducHero.cardIdx

        // Filter opponent range to exclude hero's card
        val validRange = opponentRange.excluding(heroHand)

        // For terminal states, we need to check against each possible opponent card
        // and average the utilities weighted by opponent range
        var totalEV = 0.0
        var totalWeight = 0.0

        val debug = false  // Disabled to reduce output
        if (debug) println("    [DEBUG] Terminal state: hero=$heroPlayer, heroCard=$heroCard, history=${state.history}")

        for ((oppHand, weight) in validRange.getActiveHands()) {
            if (weight <= 0.0) continue
            val oppCard = (oppHand as LeducHand).cardIdx

            // Skip if cards conflict (shouldn't happen after filtering, but be safe)
            if (oppCard == heroCard) continue

            val (p1Card, p2Card) = if (heroPlayer == 0) Pair(heroCard, oppCard) else Pair(oppCard, heroCard)
            val finalState = state.copy(p1Card = p1Card, p2Card = p2Card, boardCard = boardCard)
            val utilities = finalState.getUtility()
            val heroUtility = utilities[heroPlayer]

            if (debug) println("      oppCard=$oppCard, weight=$weight, heroUtil=$heroUtility")

            totalEV += weight * heroUtility
            totalWeight += weight
        }

        val result = if (totalWeight > 0.0) totalEV / totalWeight else 0.0
        if (debug) println("    [DEBUG] Terminal EV: $result")

        return result
    }

    val round = state.round
    val heroIsP1 = (heroPlayer == 0)

    // If boardCard is -1, average over all possible boards (can happen in R1 or during R1->R2 transition)
    if (boardCard == -1) {
        var totalEV = 0.0
        var boardCount = 0

        // Leduc-specific: cast to access cardIdx
        val leducHero = heroHand as LeducHand

        for (bCard in 0..5) {
            // Skip impossible scenario where board card is same as hero card
            if (bCard == leducHero.cardIdx) continue

            val board = when(bCard / 2) { 0 -> "J"; 1 -> "Q"; 2 -> "K"; else -> "?" }

            // Filter opponent range: exclude hero hand AND board card
            val boardHand = LeducHand(bCard)
            var validRange = opponentRange.excluding(heroHand).excluding(boardHand)

            var boardEV = 0.0
            var boardWeight = 0.0

            for ((oppHand, weight) in validRange.getActiveHands()) {
                if (weight <= 0.0) continue

                val oppCardIdx = (oppHand as LeducHand).cardIdx
                val heroCardIdx = leducHero.cardIdx

                val (p1Card, p2Card) = if (heroIsP1) {
                    Pair(heroCardIdx, oppCardIdx)
                } else {
                    Pair(oppCardIdx, heroCardIdx)
                }

                val matchupEV = calculateEVForMatchup(
                    state, p1Card, p2Card, bCard, board,
                    profile, heroIsP1, mutableSetOf()
                )

                boardEV += weight * matchupEV
                boardWeight += weight
            }

            if (boardWeight > 0.0) {
                totalEV += boardEV / boardWeight
                boardCount++
            }
        }

        return if (boardCount > 0) totalEV / boardCount else 0.0
    }

    // Round 2: direct calculation with known board
    // Filter out hands that conflict with hero or board
    var validRange = opponentRange.excluding(heroHand)
    if (boardCard >= 0) {
        val boardHand = LeducHand(boardCard)
        validRange = validRange.excluding(boardHand)
    }

    // Weight EV by opponent's range distribution
    var totalEV = 0.0
    var totalWeight = 0.0

    // Leduc-specific: cast to access cardIdx
    val leducHero = heroHand as LeducHand

    for ((oppHand, weight) in validRange.getActiveHands()) {
        if (weight <= 0.0) continue

        val oppCardIdx = (oppHand as LeducHand).cardIdx
        val heroCardIdx = leducHero.cardIdx

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
    state: LeducState,
    heroCard: Int,
    boardCard: Int,
    boardName: String,
    action: GameAction,
    profile: StrategyProfile,
    heroPlayer: Int
): Double {
    // Apply the action to get next state
    val nextState = state.applyAction(action) as LeducState

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
 * Calculate EV for taking a specific action against opponent's actual range.
 *
 * This computes what happens when hero takes a specific action (fold/call/raise)
 * against opponent's equilibrium range. The opponent's range at the next state
 * will be different depending on which action hero takes.
 *
 * Generic signature for poker variant independence:
 * - Hand interface works for Leduc, NLH, PLO, etc.
 * - Range interface encapsulates range representation for any variant
 *
 * @param heroHand Hero's specific hand
 * @param action The action hero is considering (fold/call/raise/etc.)
 * @param opponentRange Opponent's current range distribution
 * @return Expected value of taking this action, in big blinds
 */
fun calculateEVForActionWithRange(
    state: LeducState,
    heroHand: Hand,
    action: GameAction,
    opponentRange: Range,
    boardCard: Int,
    boardName: String,
    profile: StrategyProfile,
    heroPlayer: Int
): Double {
    // Apply the action to get next state
    val nextState = state.applyAction(action) as LeducState

    // Handle board card for round transitions
    val nextBoardCard = if (state.round == 1 && nextState.round == 2) {
        -1  // Transition to R2 - average over all boards
    } else {
        nextState.boardCard
    }

    // Compute opponent's range at the next state
    // (opponent's range may change based on their response to our action)
    val nextOpponentPlayer = 1 - heroPlayer
    val nextOpponentRange = computeOpponentRange(nextState, profile, heroPlayer)

    // Calculate EV from next state with range-based calculation
    return calculateEVWithRange(
        nextState, heroHand, nextOpponentRange,
        nextBoardCard, boardName, profile, heroPlayer
    )
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
    state: LeducState,
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
    state: LeducState,
    heroCard: Int,
    boardCard: Int,
    boardName: String,
    profile: StrategyProfile,
    heroPlayer: Int
): Double {
    val round = state.round
    val heroIsP1 = (heroPlayer == 0)

    // If boardCard is -1, average over all possible boards (can happen in R1 or during R1->R2 transition)
    if (boardCard == -1) {
        // Average over all possible board outcomes (all 6 cards)
        var totalEV = 0.0
        var boardCount = 0

        for (bCard in 0..5) {
            // Skip impossible scenario where board card is same as hero card
            if (bCard == heroCard) continue

            val board = when(bCard / 2) { 0 -> "J"; 1 -> "Q"; 2 -> "K"; else -> "?" }

            // Get all possible opponent cards (exclude only specific dealt cards)
            val opponentCards = (0..5).filter {
                it != heroCard && it != bCard
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
        val opponentCards = if (round == 2) {
            // Exclude only the specific dealt cards (not entire ranks)
            (0..5).filter { it != heroCard && it != boardCard }
        } else {
            // Round 1: exclude only hero's specific card
            (0..5).filter { it != heroCard }
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
    state: LeducState,
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
        val heroUtility = if (heroIsP1) utilities[0] else utilities[1]

        // Debug: check if we're seeing wins/losses properly
        val debug = false
        if (debug && boardCard == 2) { // Q board
            val heroRank = p1Card / 2
            val oppRank = p2Card / 2
            println("  Matchup: hero=$heroRank vs opp=$oppRank, utility=$heroUtility")
        }

        return heroUtility
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
        "P$currentPlayer:$activeRank $history"
    } else {
        "P$currentPlayer:$activeRank$boardName $history"
    }

    val strategy = try {
        profile.getInfoSetStrategy(infoSetKey, actions.size).getAverageStrategy()
    } catch (e: Exception) {
        DoubleArray(actions.size) { 1.0 / actions.size }
    }

    // Check if this action transitions to Round 2
    val shouldTransition = state.round == 1 && actions.isNotEmpty() &&
        (state.applyAction(actions[0]) as LeducState).round == 2

    if (shouldTransition) {
        // Chance node after this decision - average over board outcomes
        var totalEV = 0.0

        for (i in actions.indices) {
            val nextState = state.applyAction(actions[i]) as LeducState

            // Average over all possible boards (excluding exact cards held by players)
            var boardEV = 0.0
            var boardCount = 0

            for (nextBoardCard in 0..5) {
                // Skip if board card is same as either player's card
                if (nextBoardCard == p1Card || nextBoardCard == p2Card) continue

                val nextBoard = when(nextBoardCard / 2) { 0 -> "J"; 1 -> "Q"; 2 -> "K"; else -> "Q" }
                val r2State = nextState.copy(boardCard = nextBoardCard)
                boardEV += calculateEVForMatchup(
                    r2State, p1Card, p2Card, nextBoardCard, nextBoard,
                    profile, heroIsP1, visited
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
            val nextState = state.applyAction(actions[i]) as LeducState
            val actionEV = calculateEVForMatchup(
                nextState, p1Card, p2Card, boardCard, boardName,
                profile, heroIsP1, visited
            )
            totalEV += strategy[i] * actionEV
        }

        return totalEV
    }
}

fun buildTreeNode(
    state: LeducState,
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

    // Compute hero's range at this node
    val currentPlayer = state.currentPlayer() ?: 0
    val heroRange = computeHeroRange(state, profile, currentPlayer)

    // Filter out board card in R2
    val validHeroRange = if (round == 2) {
        val boardCard = when(boardName) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }
        heroRange.excluding(LeducHand(boardCard))
    } else {
        heroRange
    }

    // Collect all hands with their range weights first (for normalization)
    val handsData = mutableListOf<Triple<String, String, Int>>()
    val boardCard = when(boardName) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }

    for ((cardId, rank, cardIdx) in listOf(
        Triple("Ka", "K", 4), Triple("Kb", "K", 5),
        Triple("Qa", "Q", 2), Triple("Qb", "Q", 3),
        Triple("Ja", "J", 0), Triple("Jb", "J", 1)
    )) {
        // Only filter board card in Round 2
        if (round == 2 && cardIdx == boardCard) continue
        handsData.add(Triple(cardId, rank, cardIdx))
    }

    // Normalize range weights to sum to 1.0
    val rawRangeWeights = handsData.map { (_, _, cardIdx) ->
        val heroHand = LeducHand(cardIdx)
        validHeroRange.getActiveHands().firstOrNull { it.first == heroHand }?.second ?: 0.0
    }
    val totalWeight = rawRangeWeights.sum()
    val normalizedWeights = if (totalWeight > 0.0) {
        rawRangeWeights.map { it / totalWeight }
    } else {
        rawRangeWeights.map { 1.0 / handsData.size }
    }

    // Strategies
    js.append("      hands: [\n")

    val boardRank = boardName

    for ((index, handData) in handsData.withIndex()) {
        val (cardId, rank, cardIdx) = handData

        // Convert history: replace | with d to match solver format
        val solverHistory = history.replace("|", "d")

        // Must match LeducState.getInfoSet() exactly:
        //   Round 1: "P{player}:{rank} {history}"  e.g. "P0:K xb"
        //   Round 2: "P{player}:{rank}{board} {fullHistory}"  e.g. "P1:KQ xxdb"
        val playerPrefix = "P${currentPlayer}:"
        val infoSetKey = if (round == 1) {
            "$playerPrefix$rank $solverHistory"
        } else {
            "$playerPrefix$rank$boardRank $solverHistory"
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

        // Get current player for EV calculations
        val currentPlayer = state.currentPlayer() ?: 0

        // Calculate per-action EV with uniform range
        val evPerActionUniform = actions.mapIndexed { i, action ->
            val actionEV = calculateEVForAction(state, cardIdx, state.boardCard, boardName, action, profile, currentPlayer)
            actionNames[i] to actionEV
        }

        // Calculate EV using UNIFORM opponent range (baseline)
        // This is the weighted average of action EVs
        val evUniform = evPerActionUniform.mapIndexed { i, (_, ev) -> strategy[i] * ev }.sum()

        // Calculate EV using RANGE-BASED opponent distribution (correct)
        // This accounts for how opponent's range evolved through their equilibrium play
        val opponentRange = computeOpponentRange(state, profile, currentPlayer)
        val heroHand = LeducHand(cardIdx)
        val evRange = calculateEVWithRange(
            state, heroHand, opponentRange,
            state.boardCard, boardName, profile, currentPlayer
        )

        // Calculate per-action EV with opponent's actual range
        val evPerActionRange = actions.mapIndexed { i, action ->
            val actionEV = calculateEVForActionWithRange(
                state, heroHand, action, opponentRange,
                state.boardCard, boardName, profile, currentPlayer
            )
            actionNames[i] to actionEV
        }

        // Get normalized range weight for this hand
        val rangeWeight = normalizedWeights[index]

        js.append("        { id: \"$cardId\", label: \"$rank${if (cardIdx % 2 == 0) "♠" else "♥"}\", ")
        js.append("equity: ${f(equity)}, ")
        js.append("evUniform: ${f(evUniform)}, ")
        js.append("evRange: ${f(evRange)}, ")
        js.append("rangeWeight: ${f(rangeWeight)}, ")
        js.append("freq: {")
        js.append(actionNames.mapIndexed { i, action -> "$action: ${f(strategy[i])}" }.joinToString(", "))
        js.append("}, ")
        js.append("ev: {")
        js.append(evPerActionUniform.map { (action, ev) -> "$action: ${f(ev)}" }.joinToString(", "))
        js.append("}, ")
        js.append("evA: {")
        js.append(evPerActionRange.map { (action, ev) -> "$action: ${f(ev)}" }.joinToString(", "))
        js.append("} },\n")
    }

    js.append("      ],\n")

    // Children (recursive!)
    js.append("      children: {\n")

    for ((action, actionName) in actions.zip(actionNames)) {
        val nextState = state.applyAction(action) as LeducState

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
        val shouldTransition = nextState.isChanceNode()

        if (shouldTransition) {
            // Betting round complete - insert chance node for board dealing
            js.append("        $actionName: { chance: true, outcomes: [\n")
            for (nextBoard in listOf("J", "Q", "K")) {
                val nextBoardCard = when(nextBoard) { "J" -> 0; "Q" -> 2; "K" -> 4; else -> 2 }
                val r2State = nextState.copy(
                    boardCard = nextBoardCard,
                    round = 2,
                    history = nextState.history + "|"
                )
                val subtree = buildTreeNode(r2State, nextBoard, profile, visited)
                js.append("          { board: \"${nextBoard}♠\", node: $subtree },\n")
            }
            js.append("        ] },\n")
        } else {
            // Betting round continues - normal child node
            val subtree = buildTreeNode(nextState, boardName, profile, visited)
            js.append("        $actionName: $subtree,\n")
        }
    }

    js.append("      }\n")
    js.append("    }")

    return js.toString()
}
