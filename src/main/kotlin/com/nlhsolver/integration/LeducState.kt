package com.nlhsolver.integration

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.SimpleGameAction

/**
 * Unified Leduc Hold'em implementation.
 *
 * DESIGN: Most generalizable for NLH scaling
 * - Supports both pre-dealt boards (vanilla CFR) and chance nodes (external sampling)
 * - Board dealt as chance event when round transitions
 * - Info sets include full betting history (critical for pot size differentiation)
 *
 * MODES:
 * 1. Pre-dealt mode: boardCard set at construction, no chance nodes
 * 2. Chance node mode: boardCard = -1, dealt when R1 completes
 *
 * NLH TEMPLATE:
 * - Replace round (1,2) with street (0=preflop, 1=flop, 2=turn, 3=river)
 * - Replace single boardCard with List<Int> for progressive board building
 * - Add bet sizing (currently fixed 2/4 chips)
 * - Generalize hand evaluation
 *
 * @param p1Card Player 1's card (0-5: two each of J, Q, K)
 * @param p2Card Player 2's card (0-5)
 * @param boardCard Board card (0-5), or -1 if not dealt yet
 * @param round 1 or 2
 * @param p1Invested Total chips invested by P1
 * @param p2Invested Total chips invested by P2
 * @param history Action sequence (e.g., "xbc" = check-bet-call, "|" separates rounds)
 */
data class LeducState(
    val p1Card: Int,
    val p2Card: Int,
    val boardCard: Int = -1,  // -1 = not dealt yet (chance node mode)
    val round: Int = 1,
    val p1Invested: Double = 1.0,
    val p2Invested: Double = 1.0,
    val history: String = ""
) : GameState {

    init {
        require(p1Card in 0..5) { "P1 card must be 0-5, got $p1Card" }
        require(p2Card in 0..5) { "P2 card must be 0-5, got $p2Card" }
        require(p1Card != p2Card) { "Players cannot have same card" }
        require(boardCard in -1..5) { "Board card must be -1 (not dealt) or 0-5, got $boardCard" }
        require(round in 1..2) { "Round must be 1 or 2, got $round" }
    }

    override fun currentPlayer(): Int? {
        if (isTerminal()) return null
        if (isChanceNode()) return null

        val currentHistory = if (round == 2 && '|' in history) {
            history.substringAfter("|")
        } else {
            history
        }

        return currentHistory.length % 2
    }

    override fun isTerminal(): Boolean {
        if ('f' in history) return true

        if (round == 2) {
            val r2History = if ('|' in history) history.substringAfter("|") else ""
            if (r2History == "xx") return true
            if (r2History.endsWith("bc") || r2History.endsWith("rc")) return true
        }

        return false
    }

    override fun isChanceNode(): Boolean {
        // Chance node only in chance node mode (boardCard = -1)
        // when round 1 completes and board needs to be dealt
        if (round == 1 && boardCard == -1) {
            val r1Complete = history == "xx" ||
                           history.endsWith("bc") ||
                           history.endsWith("rc")
            return r1Complete
        }
        return false
    }

    override fun sampleChanceAction(): GameAction {
        require(isChanceNode()) { "Can only sample at chance nodes" }

        val validBoards = getValidBoardCards()
        require(validBoards.isNotEmpty()) { "No valid board cards" }

        val sampledBoard = validBoards.random()
        return SimpleGameAction("deal_$sampledBoard", "Deal ${rankName(sampledBoard)}")
    }

    override fun getUtility(): DoubleArray {
        require(isTerminal()) { "Can only get utility at terminal nodes" }

        // Fold: folder loses investment
        if ('f' in history) {
            val r2History = if ('|' in history) history.substringAfter("|") else ""
            val lastPlayer = if (r2History.isEmpty()) {
                (history.length - 1) % 2
            } else {
                (r2History.length - 1) % 2
            }

            return if (lastPlayer == 0) {
                doubleArrayOf(-p1Invested, p1Invested)
            } else {
                doubleArrayOf(p2Invested, -p2Invested)
            }
        }

        // Showdown: compare hands
        require(boardCard >= 0) { "Board must be dealt for showdown" }

        val p1Rank = p1Card / 2
        val p2Rank = p2Card / 2
        val boardRank = boardCard / 2

        val p1HasPair = (p1Rank == boardRank)
        val p2HasPair = (p2Rank == boardRank)

        val pot = p1Invested + p2Invested

        return when {
            p1HasPair && !p2HasPair -> doubleArrayOf(pot - p1Invested, -p2Invested)
            p2HasPair && !p1HasPair -> doubleArrayOf(-p1Invested, pot - p2Invested)
            p1Rank > p2Rank -> doubleArrayOf(pot - p1Invested, -p2Invested)
            p2Rank > p1Rank -> doubleArrayOf(-p1Invested, pot - p2Invested)
            else -> doubleArrayOf(0.0, 0.0)
        }
    }

    override fun getLegalActions(): List<GameAction> {
        if (isTerminal()) return emptyList()

        // Chance node: deal board
        if (isChanceNode()) {
            return getValidBoardCards().map {
                SimpleGameAction("deal_$it", "Deal ${rankName(it)}")
            }
        }

        // Player actions
        val currentHistory = if (round == 2 && '|' in history) {
            history.substringAfter("|")
        } else {
            history
        }

        val lastAction = currentHistory.lastOrNull()
        val betCount = countBets(currentHistory)  // Count in current round only!

        return when {
            lastAction == null || lastAction == 'x' -> listOf(
                SimpleGameAction("x", "Check"),
                SimpleGameAction("b", "Bet")
            )
            lastAction == 'b' && betCount < 2 -> listOf(
                SimpleGameAction("f", "Fold"),
                SimpleGameAction("c", "Call"),
                SimpleGameAction("r", "Raise")
            )
            lastAction == 'r' || (lastAction == 'b' && betCount >= 2) -> listOf(
                SimpleGameAction("f", "Fold"),
                SimpleGameAction("c", "Call")
            )
            else -> emptyList()
        }
    }

    override fun applyAction(action: GameAction): GameState {
        val actionId = action.getActionId()

        // Chance action: deal board
        if (actionId.startsWith("deal_")) {
            val board = actionId.removePrefix("deal_").toInt()
            require(board in getValidBoardCards()) { "Invalid board card: $board" }

            return copy(
                boardCard = board,
                round = 2,
                history = history + "|"
            )
        }

        // Player action
        var newHistory = history + actionId
        var newP1Inv = p1Invested
        var newP2Inv = p2Invested
        var newRound = round

        val player = currentPlayer()!!
        val betSize = if (round == 1) 2.0 else 4.0

        when (actionId) {
            "b" -> {
                if (player == 0) newP1Inv += betSize else newP2Inv += betSize
            }
            "r" -> {
                if (player == 0) {
                    newP1Inv = p2Invested + betSize
                } else {
                    newP2Inv = p1Invested + betSize
                }
            }
            "c" -> {
                val lastAction = history.lastOrNull()
                if (lastAction == 'b' || lastAction == 'r') {
                    if (player == 0) newP1Inv = p2Invested else newP2Inv = p1Invested
                }
            }
        }

        // Check for round transition (pre-dealt mode only)
        if (round == 1 && boardCard >= 0) {
            val r1Complete = newHistory == "xx" ||
                           newHistory.endsWith("bc") ||
                           newHistory.endsWith("rc")
            if (r1Complete) {
                newRound = 2
                newHistory += "|"
            }
        }

        return copy(
            history = newHistory,
            p1Invested = newP1Inv,
            p2Invested = newP2Inv,
            round = newRound
        )
    }

    override fun getInfoSet(): String {
        val player = currentPlayer() ?: return "terminal"
        val card = if (player == 0) p1Card else p2Card
        val rank = rankName(card)

        // CRITICAL: Include player ID to match zig implementation
        // P0 and P1 must have separate info sets even with same card!
        // P0 acts first (BTN), P1 acts second (BB) - different strategic positions
        val playerPrefix = "P$player:"

        // Round 1: player + rank + history
        if (round == 1) {
            return "$playerPrefix$rank $history"
        }

        // Round 2: player + rank + board + FULL history (including R1)
        // CRITICAL: Must include R1 history to distinguish pot sizes
        val board = rankName(boardCard)
        val fullHistory = history.replace("|", "d")  // Use 'd' separator for consistency
        return "$playerPrefix$rank$board $fullHistory"
    }

    override fun getStateHash(): String {
        return "p1=$p1Card,p2=$p2Card,board=$boardCard,r=$round,h=$history"
    }

    // Helper functions
    private fun getValidBoardCards(): List<Int> {
        return (0..5).filter { it != p1Card && it != p2Card }
    }

    private fun rankName(cardIdx: Int): String {
        if (cardIdx < 0) return "?"
        return when (cardIdx / 2) {
            0 -> "J"
            1 -> "Q"
            2 -> "K"
            else -> "?"
        }
    }

    private fun countBets(hist: String): Int {
        return hist.count { it == 'b' || it == 'r' }
    }

    // For backward compatibility with tree generation
    fun getRank(card: Int): Int = card / 2

    fun hasPair(card: Int, board: Int): Boolean {
        if (board < 0) return false
        return getRank(card) == getRank(board)
    }

    /**
     * Check if betting round is complete (pot capped with passive close).
     * Generalizes to NLH street completion logic.
     */
    fun isBettingRoundComplete(): Boolean {
        if (isTerminal()) return false

        val currentHistory = if (round == 2 && '|' in history) {
            history.substringAfter("|")
        } else {
            history
        }

        if (currentHistory.isEmpty()) return false

        return currentHistory == "xx" ||
               currentHistory.endsWith("bc") ||
               currentHistory.endsWith("rc")
    }
}
