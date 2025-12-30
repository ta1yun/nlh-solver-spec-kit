package com.nlhsolver.examples.akq

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.SimpleGameAction

/**
 * AKQ Game State - Implementation of GameState for the AKQ poker toy game.
 *
 * Game Rules:
 * - 2 players, each dealt one card (A, K, or Q)
 * - Ante of 1 chip each
 * - Player 1 acts first, can bet (b) or check (k)
 * - After a bet, opponent can call (c) or fold (f)
 * - After a check, opponent can bet (b) or check (k)
 * - Showdown: higher card wins the pot
 * - Pot sizes: 2 chips (no bet) or 4 chips (bet-call)
 */
data class AkqGameState(
    val p1Card: AkqCard,
    val p2Card: AkqCard,
    val history: String = ""
) : GameState {

    override fun currentPlayer(): Int? {
        if (isTerminal()) return null
        return history.length % 2
    }

    override fun isTerminal(): Boolean {
        return history.endsWith("f") ||   // fold
               history.endsWith("bc") ||  // bet-call (showdown)
               history.endsWith("kk") ||  // check-check (showdown)
               history.endsWith("kbc") || // check-bet-call (showdown)
               history.endsWith("kbf")    // check-bet-fold
    }

    override fun getUtility(): DoubleArray {
        require(isTerminal()) { "Can only get utility at terminal states" }

        // Handle folds
        if (history.endsWith("f")) {
            val p1Folded = history.length % 2 == 1
            return if (p1Folded) {
                doubleArrayOf(-1.0, 1.0)
            } else {
                doubleArrayOf(1.0, -1.0)
            }
        }

        // Showdown: higher card wins
        val betCount = history.count { it == 'b' }
        val potSize = if (betCount > 0) 2.0 else 1.0

        return if (p1Card.beats(p2Card)) {
            doubleArrayOf(potSize, -potSize)
        } else {
            doubleArrayOf(-potSize, potSize)
        }
    }

    override fun getLegalActions(): List<GameAction> {
        if (isTerminal()) return emptyList()

        return if (history.isEmpty() || history.last() == 'k') {
            // Can bet or check
            listOf(
                SimpleGameAction("b", "bet"),
                SimpleGameAction("k", "check")
            )
        } else {
            // Can call or fold (after a bet)
            listOf(
                SimpleGameAction("c", "call"),
                SimpleGameAction("f", "fold")
            )
        }
    }

    override fun applyAction(action: GameAction): GameState {
        return copy(history = history + action.getActionId())
    }

    override fun getInfoSet(): String {
        val currentCard = if (currentPlayer() == 0) p1Card else p2Card
        return currentCard.toString() + history
    }

    override fun getStateHash(): String {
        return "$p1Card$p2Card$history"
    }

    override fun toString(): String {
        return "AKQ(P1=$p1Card, P2=$p2Card, history='$history')"
    }

    companion object {
        /**
         * Create the root game state for all possible card deals.
         */
        fun createAllRootStates(): List<AkqGameState> {
            val states = mutableListOf<AkqGameState>()
            for (p1Card in AkqCard.all()) {
                for (p2Card in AkqCard.all()) {
                    if (p1Card != p2Card) {
                        states.add(AkqGameState(p1Card, p2Card))
                    }
                }
            }
            return states
        }

        /**
         * Get action labels for an information set.
         * Used for printing strategies in human-readable format.
         */
        fun getActionLabels(infoSet: String): List<String> {
            val history = if (infoSet.length > 1) infoSet.substring(1) else ""
            return if (history.isEmpty() || history.last() == 'k') {
                listOf("bet", "check")
            } else {
                listOf("call", "fold")
            }
        }
    }
}
