package com.nlhsolver.export

import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.integration.LeducState
import com.nlhsolver.range.*

/**
 * Tree builder for Leduc Hold'em.
 *
 * Implements game-specific logic:
 * - 6 cards to display (J♠, J♥, Q♠, Q♥, K♠, K♥)
 * - Board filtering in Round 2
 * - Equity calculation (pair vs high card)
 * - Range weight computation
 * - Leduc-specific metadata (2 rounds, single board card)
 *
 * Usage:
 * ```
 * val builder = LeducTreeBuilder()
 * val tree = builder.buildTree(
 *     rootState = leducState,
 *     profile = trainedProfile,
 *     context = TreeBuildContext(boardName = "K")
 * )
 * ```
 */
class LeducTreeBuilder : BaseTreeBuilder<LeducState, LeducHand>() {

    private val evCalculator = LeducEVCalculator()
    private val rangePropagator = LeducRangePropagator()

    override fun getHandsToDisplay(
        state: LeducState,
        context: TreeBuildContext
    ): List<HandDisplay<LeducHand>> {
        val hands = mutableListOf<HandDisplay<LeducHand>>()

        // All 6 Leduc cards
        val allCards = listOf(
            Triple("Ka", "K♠", 4),
            Triple("Kb", "K♥", 5),
            Triple("Qa", "Q♠", 2),
            Triple("Qb", "Q♥", 3),
            Triple("Ja", "J♠", 0),
            Triple("Jb", "J♥", 1)
        )

        // Filter out board card in Round 2
        val boardCard = when(context.boardName) {
            "J" -> 0; "Q" -> 2; "K" -> 4
            else -> -1
        }

        for ((id, label, cardIdx) in allCards) {
            // Skip board card in Round 2
            if (state.round == 2 && cardIdx == boardCard) continue

            hands.add(HandDisplay(
                id = id,
                label = label,
                hand = LeducHand(cardIdx)
            ))
        }

        return hands
    }

    override fun calculateHandMetadata(
        hand: LeducHand,
        state: LeducState,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): HandMetadata {
        val actions = state.getLegalActions()
        val actionNames = getActionDisplayNames(state)
        val actionLabels = actions.map { actionNames[it.getActionId()] ?: it.getActionId() }

        // Get equilibrium strategy for this hand
        val infoSet = getInfoSetForHand(state, hand, context.boardName)
        val strategy = try {
            profile.getInfoSetStrategy(infoSet, actions.size).getAverageStrategy()
        } catch (e: Exception) {
            DoubleArray(actions.size) { 1.0 / actions.size }
        }

        // Calculate equity (showdown win probability)
        val boardCard = when(context.boardName) {
            "J" -> 0; "Q" -> 2; "K" -> 4
            else -> state.boardCard
        }
        val equity = if (state.round == 2 && boardCard >= 0) {
            calculateEquity(hand.cardIdx, boardCard)
        } else {
            0.5  // Pre-flop, average across all possible boards
        }

        // Compute ranges at this node
        val currentPlayer = state.currentPlayer() ?: 0
        val heroRange = computeHeroRange(state, profile, currentPlayer)
        val opponentRange = computeOpponentRange(state, profile, currentPlayer)

        // Calculate range weight for this hand
        val rangeWeight = heroRange.getWeight(hand)

        // Calculate EVs using uniform opponent range (baseline)
        val evUniform = calculateEVUniform(
            state, hand, state.boardCard, context.boardName, profile, currentPlayer
        )

        // Calculate EV using actual opponent range
        val evRange = evCalculator.calculateEV(
            state, hand, heroRange, opponentRange, profile, currentPlayer
        )

        // Calculate per-action EVs
        val evPerAction = mutableMapOf<String, Double>()
        for (i in actions.indices) {
            val actionEV = evCalculator.calculateEVForAction(
                state, hand, actions[i], heroRange, opponentRange, profile, currentPlayer
            )
            evPerAction[actionLabels[i]] = actionEV
        }

        // Build frequency map
        val frequencies = mutableMapOf<String, Double>()
        for (i in actions.indices) {
            frequencies[actionLabels[i]] = strategy[i]
        }

        return HandMetadata(
            equity = equity,
            evUniform = evUniform,
            evRange = evRange,
            rangeWeight = rangeWeight,
            frequencies = frequencies,
            evPerAction = evPerAction
        )
    }

    override fun formatNodeMetadata(state: LeducState): NodeMetadata {
        val pot = (state.p1Invested + state.p2Invested).toInt()
        val toCall = (maxOf(state.p1Invested, state.p2Invested) -
                     minOf(state.p1Invested, state.p2Invested)).toInt()

        val board = if (state.round == 2 && state.boardCard >= 0) {
            val boardRank = when(state.boardCard / 2) {
                0 -> "J"; 1 -> "Q"; 2 -> "K"
                else -> "?"
            }
            val suit = if (state.boardCard % 2 == 0) "♠" else "♥"
            listOf("$boardRank$suit")
        } else {
            emptyList()
        }

        return NodeMetadata(
            round = state.round,
            pot = pot,
            toCall = toCall,
            board = board
        )
    }

    override fun getActionDisplayNames(state: LeducState): Map<String, String> {
        return mapOf(
            "f" to "fold",
            "c" to "call",
            "r" to "raise",
            "b" to "bet",
            "x" to "check"
        )
    }

    /**
     * Get info set string for a hand at a state.
     * Must match format used during training.
     */
    private fun getInfoSetForHand(
        state: LeducState,
        hand: LeducHand,
        boardName: String
    ): String {
        val rank = hand.rankName
        val history = state.history.replace("|", "d")

        return if (state.round == 1) {
            "$rank $history"
        } else {
            "$rank$boardName $history"
        }
    }

    /**
     * Compute hero's range at this node.
     */
    private fun computeHeroRange(
        state: LeducState,
        profile: StrategyProfile,
        currentPlayer: Int
    ): Range {
        var heroRange: Range = LeducRange.uniform()

        val history = state.history
        if (history.isEmpty()) {
            // Normalize uniform range to sum to 1.0
            return (heroRange as LeducRange).normalized()
        }

        // Split by round separator
        val rounds = history.split("|", "d")

        // Replay each round
        var replayState = LeducState(
            p1Card = 0, p2Card = 2,
            boardCard = -1,
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        for ((roundIdx, roundHistory) in rounds.withIndex()) {
            if (roundHistory.isEmpty()) continue

            // If this is round 2, update board
            if (roundIdx == 1) {
                val boardCard = when(state.boardCard / 2) {
                    0 -> 0; 1 -> 2; 2 -> 4
                    else -> 2
                }
                replayState = replayState.copy(boardCard = boardCard, round = 2)
            }

            // Replay each action
            var turnPlayer = 0
            for (actionChar in roundHistory) {
                val actionId = actionChar.toString()
                val actions = replayState.getLegalActions()
                val action = actions.firstOrNull { it.getActionId() == actionId }

                if (action != null) {
                    // If hero acted, propagate range
                    if (turnPlayer == currentPlayer) {
                        heroRange = rangePropagator.propagate(
                            heroRange, action, replayState, profile
                        )
                    }

                    replayState = replayState.applyAction(action) as LeducState
                    turnPlayer = 1 - turnPlayer
                }
            }
        }

        // Normalize range weights to sum to 1.0
        return (heroRange as LeducRange).normalized()
    }

    /**
     * Compute opponent's range at this node.
     */
    private fun computeOpponentRange(
        state: LeducState,
        profile: StrategyProfile,
        currentPlayer: Int
    ): Range {
        var oppRange: Range = LeducRange.uniform()
        val opponentPlayer = 1 - currentPlayer

        val history = state.history
        if (history.isEmpty()) return oppRange

        val rounds = history.split("|", "d")

        var replayState = LeducState(
            p1Card = 0, p2Card = 2,
            boardCard = -1,
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        for ((roundIdx, roundHistory) in rounds.withIndex()) {
            if (roundHistory.isEmpty()) continue

            if (roundIdx == 1) {
                val boardCard = when(state.boardCard / 2) {
                    0 -> 0; 1 -> 2; 2 -> 4
                    else -> 2
                }
                replayState = replayState.copy(boardCard = boardCard, round = 2)
            }

            var turnPlayer = 0
            for (actionChar in roundHistory) {
                val actionId = actionChar.toString()
                val actions = replayState.getLegalActions()
                val action = actions.firstOrNull { it.getActionId() == actionId }

                if (action != null) {
                    if (turnPlayer == opponentPlayer) {
                        oppRange = rangePropagator.propagate(
                            oppRange, action, replayState, profile
                        )
                    }

                    replayState = replayState.applyAction(action) as LeducState
                    turnPlayer = 1 - turnPlayer
                }
            }
        }

        return oppRange
    }

    /**
     * Calculate EV vs uniform opponent range (baseline).
     */
    private fun calculateEVUniform(
        state: LeducState,
        heroHand: LeducHand,
        boardCard: Int,
        boardName: String,
        profile: StrategyProfile,
        heroPlayer: Int
    ): Double {
        // Use the old calculateEV function from GenerateTreeStructure
        // for now to maintain compatibility
        // TODO: Could use EVCalculator with uniform range
        val uniformRange = LeducRange.uniform()
        return evCalculator.calculateEV(
            state, heroHand, uniformRange, uniformRange, profile, heroPlayer
        )
    }

    /**
     * Build chance node with all possible board outcomes.
     */
    override fun buildChanceNode(
        state: LeducState,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): Map<String, Any> {
        val outcomes = mutableListOf<Map<String, Any>>()

        // All 3 possible board ranks
        for (boardName in listOf("J", "Q", "K")) {
            val boardCard = when(boardName) {
                "J" -> 0; "Q" -> 2; "K" -> 4
                else -> 2
            }

            // Create Round 2 state with this board
            val r2State = state.copy(
                boardCard = boardCard,
                round = 2,
                history = state.history + "|"
            )

            // Create new context for this board
            val boardContext = context.copy(boardName = boardName)

            // Recursively build tree for this board
            val subtree = buildTree(r2State, profile, boardContext)

            outcomes.add(mapOf(
                "board" to "$boardName♠",
                "node" to subtree
            ))
        }

        return mapOf(
            "chance" to true,
            "outcomes" to outcomes
        )
    }

    /**
     * Calculate equity (showdown win probability).
     */
    private fun calculateEquity(playerCard: Int, boardCard: Int): Double {
        val playerRank = playerCard / 2
        val boardRank = boardCard / 2
        val hasPair = (playerRank == boardRank)

        // All possible opponent cards
        val opponentCards = (0..5).filter { it != playerCard && it != boardCard }

        var wins = 0.0
        var total = 0.0

        for (oppCard in opponentCards) {
            val oppRank = oppCard / 2
            val oppHasPair = (oppRank == boardRank)

            val playerScore = if (hasPair) 100 + playerRank else playerRank
            val oppScore = if (oppHasPair) 100 + oppRank else oppRank

            when {
                playerScore > oppScore -> wins += 1.0
                playerScore == oppScore -> wins += 0.5
            }
            total += 1.0
        }

        return wins / total
    }
}
