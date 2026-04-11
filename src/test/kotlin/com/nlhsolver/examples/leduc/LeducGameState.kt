package com.nlhsolver.examples.leduc

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.SimpleGameAction

/**
 * Leduc Poker GameState implementation.
 *
 * Rules:
 * - 2 players, each dealt one private card (J, Q, or K, two of each)
 * - Ante of 1 chip each (pot starts at 2)
 * - Round 1: betting (raise size = 2)
 * - Board card dealt
 * - Round 2: betting (raise size = 4)
 * - Showdown: higher card wins, pairs beat non-pairs
 *
 * Actions:
 * - 'k' = check/fold
 * - 'c' = call
 * - 'r' = raise/bet
 *
 * History format: "r1{actions}/r2{actions}"
 * Examples:
 * - "kk/" = check-check round 1, then board
 * - "rc/" = raise-call round 1, then board
 * - "kk/rc" = check-check r1, raise-call r2
 */
data class LeducGameState(
    val p1Card: LeducCard,
    val p2Card: LeducCard,
    val boardCard: LeducCard?,
    val history: String = "",
    val pot: Double = 2.0,
    val p1Invested: Double = 1.0,
    val p2Invested: Double = 1.0
) : GameState {

    private fun isRound1() = !history.contains("/")
    private fun getRound1History() = if (isRound1()) history else history.substringBefore("/")
    private fun getRound2History() = if (isRound1()) "" else history.substringAfter("/")

    override fun currentPlayer(): Int? {
        if (isTerminal()) return null

        val currentHistory = if (isRound1()) getRound1History() else getRound2History()

        // After board card, player 1 acts first
        if (currentHistory.isEmpty()) return 0

        // Count actions in current round
        return currentHistory.length % 2
    }

    override fun isTerminal(): Boolean {
        val r1 = getRound1History()
        val r2 = getRound2History()

        // Fold (someone folded to a raise)
        if (history.endsWith("rk")) return true

        // Round 1 check-check is NOT terminal - need to deal board
        // Round 2 check-check IS terminal
        if (!isRound1() && r2.endsWith("kk")) return true

        // Showdown patterns in round 2
        if (!isRound1() && r2.endsWith("rc")) return true
        if (!isRound1() && r2.endsWith("cc")) return true

        return false
    }

    override fun getUtility(): DoubleArray {
        require(isTerminal()) { "Can only get utility at terminal states" }

        // Handle folds
        if (history.contains("rk")) {
            val folderIsP1 = history.indexOf("rk") % 2 == 1
            return if (folderIsP1) {
                doubleArrayOf(-p1Invested, p1Invested)
            } else {
                doubleArrayOf(p2Invested, -p2Invested)
            }
        }

        // Showdown - need board card
        requireNotNull(boardCard) { "Showdown requires board card" }

        val p1Hand = if (p1Card == boardCard) 2 else p1Card.rank
        val p2Hand = if (p2Card == boardCard) 2 else p2Card.rank

        val winner = when {
            p1Hand > p2Hand -> 0
            p2Hand > p1Hand -> 1
            else -> -1 // tie (should not happen in Leduc with 2 suits)
        }

        return when (winner) {
            0 -> doubleArrayOf(p2Invested, -p2Invested)
            1 -> doubleArrayOf(-p1Invested, p1Invested)
            else -> doubleArrayOf(0.0, 0.0) // tie
        }
    }

    override fun getLegalActions(): List<GameAction> {
        require(!isTerminal()) { "No actions at terminal states" }

        val currentHistory = if (isRound1()) getRound1History() else getRound2History()

        return when {
            // Start of round - can check or raise
            currentHistory.isEmpty() -> listOf(
                SimpleGameAction("check"),
                SimpleGameAction("raise")
            )
            // After check - can check or raise
            currentHistory.last() == 'k' -> listOf(
                SimpleGameAction("check"),
                SimpleGameAction("raise")
            )
            // After raise - can fold or call
            currentHistory.last() == 'r' -> listOf(
                SimpleGameAction("fold"),
                SimpleGameAction("call")
            )
            // After call in round 1 - need to deal board
            currentHistory.last() == 'c' && isRound1() -> {
                // Return actions for each possible board card
                LeducCard.all().map { card ->
                    SimpleGameAction("board_$card")
                }
            }
            // After call in round 2 - terminal
            currentHistory.last() == 'c' && !isRound1() -> emptyList()
            else -> emptyList()
        }
    }

    override fun getStateHash(): String {
        return "p1=$p1Card:p2=$p2Card:board=$boardCard:hist=$history"
    }

    override fun applyAction(action: GameAction): GameState {
        val actionId = action.getActionId()

        // Handle board card dealing
        if (actionId.startsWith("board_")) {
            val cardName = actionId.substringAfter("board_")
            val card = LeducCard.valueOf(cardName)
            return copy(
                boardCard = card,
                history = history + "/"
            )
        }

        val actionStr = when (actionId) {
            "check" -> "k"
            "raise" -> "r"
            "fold" -> "k"
            "call" -> "c"
            else -> error("Unknown action: $actionId")
        }

        val betSize = if (isRound1()) 2.0 else 4.0
        val currentPlayer = currentPlayer()!!

        val (newP1Invested, newP2Invested, newPot) = when {
            actionStr == "r" -> {
                // Raise
                if (currentPlayer == 0) {
                    Triple(p1Invested + betSize, p2Invested, pot + betSize)
                } else {
                    Triple(p1Invested, p2Invested + betSize, pot + betSize)
                }
            }
            actionStr == "c" -> {
                // Call - match opponent's investment
                val toCall = if (currentPlayer == 0) {
                    p2Invested - p1Invested
                } else {
                    p1Invested - p2Invested
                }
                if (currentPlayer == 0) {
                    Triple(p1Invested + toCall, p2Invested, pot + toCall)
                } else {
                    Triple(p1Invested, p2Invested + toCall, pot + toCall)
                }
            }
            else -> Triple(p1Invested, p2Invested, pot)
        }

        return copy(
            history = history + actionStr,
            pot = newPot,
            p1Invested = newP1Invested,
            p2Invested = newP2Invested
        )
    }

    override fun getInfoSet(): String {
        val player = currentPlayer() ?: return "terminal"
        val card = if (player == 0) p1Card else p2Card
        val board = boardCard?.let { "Board=$it" } ?: ""
        return "p$player:card=$card:$board:history=$history"
    }
}
