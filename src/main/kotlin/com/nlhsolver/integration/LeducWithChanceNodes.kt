package com.nlhsolver.integration

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.SimpleGameAction

/**
 * Leduc Hold'em with chance nodes explicitly modeled in the game tree.
 *
 * DIFFERENCE FROM LeducWithSuitAbstraction:
 * - Board card is dealt as a chance event WITHIN the game tree
 * - This enables true external sampling CFR
 * - More scalable architecture (generalizes to NLH)
 *
 * GAME FLOW:
 * 1. Start: p1Card and p2Card dealt, boardCard = -1 (not dealt)
 * 2. Round 1 betting (check/bet/raise/call/fold)
 * 3. When R1 completes: CHANCE NODE (board dealing)
 * 4. Sample/apply one board card action
 * 5. Round 2 betting
 * 6. Showdown
 *
 * CHANCE NODE:
 * - isChanceNode() returns true
 * - Legal actions: ["deal_0", "deal_1", ..., "deal_5"] for valid boards
 * - Excludes boards that conflict with player cards
 * - External sampling: sample ONE board per iteration (10x speedup)
 *
 * @param p1Card Player 1's card index (0-5)
 * @param p2Card Player 2's card index (0-5)
 * @param boardCard Board card index (0-5), or -1 if not dealt yet
 * @param round Current round (1 or 2)
 * @param p1Invested Total chips invested by P1
 * @param p2Invested Total chips invested by P2
 * @param history Action history (e.g., "xbrc" for check-bet-raise-call)
 */
data class LeducWithChanceNodes(
    val p1Card: Int,
    val p2Card: Int,
    val boardCard: Int = -1,  // -1 = not dealt yet
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
        if (isChanceNode()) return null  // Nature acts at chance nodes

        // Extract current round's history
        val currentHistory = if (round == 2 && '|' in history) {
            history.substringAfter("|")
        } else {
            history
        }

        // Player to act: alternates based on history length
        return currentHistory.length % 2
    }

    override fun isTerminal(): Boolean {
        // Fold ends game
        if ('f' in history) return true

        // Round 2 complete: both players acted and pot capped
        if (round == 2) {
            val r2History = if ('|' in history) history.substringAfter("|") else ""

            // Both checked
            if (r2History == "xx") return true

            // Bet-call or raise-call
            if (r2History.endsWith("bc") || r2History.endsWith("rc")) return true
        }

        return false
    }

    override fun isChanceNode(): Boolean {
        // Chance node: Round 1 just completed, board needs to be dealt
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
                // Fold in R1
                (history.length - 1) % 2
            } else {
                // Fold in R2
                (r2History.length - 1) % 2
            }

            return if (lastPlayer == 0) {
                // P1 folded
                doubleArrayOf(-p1Invested, p2Invested)
            } else {
                // P2 folded
                doubleArrayOf(p1Invested, -p2Invested)
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
            else -> doubleArrayOf(0.0, 0.0)  // Tie (same rank)
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
        val betCount = countBets(currentHistory)  // Count bets in current round only

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
                history = history + "|"  // Start R2 history
            )
        }

        // Player action
        val newHistory = history + actionId
        var newP1Inv = p1Invested
        var newP2Inv = p2Invested
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

        return copy(
            history = newHistory,
            p1Invested = newP1Inv,
            p2Invested = newP2Inv
        )
    }

    override fun getInfoSet(): String {
        val player = currentPlayer() ?: return "terminal"
        val card = if (player == 0) p1Card else p2Card
        val rank = rankName(card)

        // Round 1: just rank + history
        if (round == 1) {
            return "$rank $history"
        }

        // Round 2: rank + board + FULL history (including R1)
        // Must include R1 history because different R1 endings create different pot sizes
        // which affect optimal play (pot odds)
        val board = rankName(boardCard)
        val fullHistory = history.replace("|", "d")  // Match baseline format
        return "$rank$board $fullHistory"
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
}
