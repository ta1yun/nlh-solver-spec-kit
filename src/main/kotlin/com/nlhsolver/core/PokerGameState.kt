package com.nlhsolver.core

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Street
import com.nlhsolver.poker.Action

/**
 * Represents the poker-specific game state at a node (T033).
 *
 * This class encapsulates all information about the current state of a poker hand,
 * including the street, community cards, pot size, player states, and action history.
 *
 * Implements GameState interface to work with the generic CFR solver.
 *
 * @property street Current betting round (PREFLOP, FLOP, TURN, RIVER)
 * @property board Community cards on the board
 * @property pot Current pot size in big blinds
 * @property playerStates Map from position to player state
 * @property actionHistory Ordered sequence of actions that led to this state
 */
data class PokerGameState(
    val street: Street,
    val board: List<Card>,
    val pot: Double,
    val playerStates: Map<Position, PokerPlayerState>,
    val actionHistory: List<HistoricalAction> = emptyList()
) : GameState {
    init {
        // VR-019: Board size must match street
        val expectedBoardSize = when (street) {
            Street.PREFLOP -> 0
            Street.FLOP -> 3
            Street.TURN -> 4
            Street.RIVER -> 5
        }
        require(board.size == expectedBoardSize) {
            "Board size must be $expectedBoardSize for $street, but is ${board.size}"
        }

        // VR-020: All cards in board must be unique
        require(board.distinct().size == board.size) {
            "All cards in board must be unique"
        }

        // VR-021: Pot must be positive
        require(pot > 0.0) {
            "Pot must be positive, but is $pot"
        }

        // Verify pot equals sum of bets in action history plus blinds
        // (This is a soft check - we trust the builder to maintain this invariant)
    }

    /**
     * Returns the active players (not folded).
     */
    fun getActivePlayers(): List<Position> {
        return playerStates.filterValues { !it.isFolded }.keys.toList()
    }

    /**
     * Returns the number of active players.
     */
    fun getActivePlayerCount(): Int = getActivePlayers().size

    /**
     * Returns true if the hand is over (all but one player folded or reached showdown).
     */
    fun isHandOver(): Boolean {
        val activePlayers = getActivePlayerCount()
        return activePlayers <= 1 || (street == Street.RIVER && actionHistory.lastOrNull()?.action is Action.Call)
    }

    /**
     * Gets the player state for a given position.
     */
    fun getPlayerState(position: Position): PokerPlayerState? {
        return playerStates[position]
    }

    /**
     * Returns a canonical hash representing this game state.
     * Used for strategy lookups and caching.
     */
    override fun getStateHash(): String {
        return buildString {
            append("${street.name}:")
            append(board.joinToString(",") { "${it.rank}${it.suit}" })
            append(":pot=$pot:")
            playerStates.entries.sortedBy { it.key.ordinal }.forEach { (pos, state) ->
                append("$pos=${state.stackBb}/${state.investedThisRound}/${state.isFolded}/${state.isAllIn}:")
            }
            append("history=[${actionHistory.joinToString(",") { "${it.actor}:${it.action}" }}]")
        }
    }

    // ========== GameState Interface Implementation ==========

    override fun currentPlayer(): Int? {
        if (isTerminal()) return null

        // Find the next player to act
        // For poker, this is the first active player who hasn't acted this round
        // or whose bet doesn't match the current bet
        val activePlayers = getActivePlayers()
        if (activePlayers.isEmpty()) return null

        // Simplified: return first active player position as player index
        // In production, we'd track whose turn it is more carefully
        return activePlayers.first().ordinal
    }

    override fun isTerminal(): Boolean {
        return isHandOver()
    }

    override fun getUtility(): DoubleArray {
        require(isTerminal()) { "Can only get utility for terminal states" }

        // Calculate utilities for each player
        // For MVP, simplified to 2-player heads-up
        val activePlayers = getActivePlayers()

        // All folded except one
        if (activePlayers.size == 1) {
            val winner = activePlayers.first()
            return DoubleArray(playerStates.size) { index ->
                if (Position.values()[index] == winner) pot else 0.0
            }
        }

        // Showdown - not fully implemented yet for MVP
        // Would need hand evaluation logic
        return DoubleArray(playerStates.size) { 0.0 }
    }

    override fun getLegalActions(): List<GameAction> {
        if (isTerminal()) return emptyList()

        // Return available poker actions as GameActions
        // For MVP, simplified action set
        return listOf(
            SimpleGameAction("fold", "Fold"),
            SimpleGameAction("check", "Check"),
            SimpleGameAction("call", "Call"),
            SimpleGameAction("bet", "Bet"),
            SimpleGameAction("raise", "Raise")
        )
    }

    override fun applyAction(action: GameAction): GameState {
        // For MVP, return same state (not fully implemented)
        // Full implementation would apply the action and return new state
        return this
    }

    override fun getInfoSet(): String {
        // Information set represents what the current player knows
        // Includes their hole cards (via hand bucket), board cards, and action history
        // For MVP, use state hash as info set
        // In production, this would be more sophisticated
        val player = currentPlayer() ?: return "terminal"
        val position = Position.values()[player]
        val playerState = playerStates[position]

        return buildString {
            append("p${player}:")
            append("bucket=${playerState?.handRange ?: "unknown"}:")
            append("street=${street.name}:")
            append("board=${board.joinToString(",") { "${it.rank}${it.suit}" }}:")
            append("pot=$pot:")
            append("history=${actionHistory.joinToString("|") { it.toString() }}")
        }
    }
}

/**
 * Represents a single player's state in the game (T034).
 *
 * @property position Player's position at the table
 * @property stackBb Remaining stack in big blinds
 * @property investedThisRound Amount invested in current betting round
 * @property handRange Hand bucket for abstraction (null if exact hand known)
 * @property isFolded Whether player has folded
 * @property isAllIn Whether player is all-in
 */
data class PokerPlayerState(
    val position: Position,
    val stackBb: Double,
    val investedThisRound: Double = 0.0,
    val handRange: Int? = null,  // Hand bucket ID for abstraction
    val isFolded: Boolean = false,
    val isAllIn: Boolean = false
) {
    init {
        require(stackBb >= 0.0) {
            "Stack must be non-negative, but is $stackBb"
        }
        require(investedThisRound >= 0.0) {
            "Invested this round must be non-negative, but is $investedThisRound"
        }

        // VR-022: If all-in, stack must be 0
        if (isAllIn) {
            require(stackBb == 0.0) {
                "All-in player must have 0 stack, but has $stackBb"
            }
        }
    }

    /**
     * Returns true if player can still act (not folded or all-in).
     */
    fun canAct(): Boolean = !isFolded && !isAllIn
}

/**
 * Represents a historical action taken in the hand.
 *
 * @property actor Position of the player who took the action
 * @property action The action that was taken
 * @property amountBb Amount in big blinds (for bets/raises)
 */
data class HistoricalAction(
    val actor: Position,
    val action: Action,
    val amountBb: Double? = null
) {
    init {
        // Require amount for bet/raise actions
        when (action) {
            is Action.Bet, is Action.Raise -> {
                require(amountBb != null && amountBb > 0.0) {
                    "Bet/Raise actions must have positive amount"
                }
            }
            else -> {}
        }
    }

    override fun toString(): String {
        return when (action) {
            is Action.Bet -> "$actor:BET:$amountBb"
            is Action.Raise -> "$actor:RAISE:$amountBb"
            is Action.Call -> "$actor:CALL"
            is Action.Check -> "$actor:CHECK"
            is Action.Fold -> "$actor:FOLD"
            is Action.AllIn -> "$actor:ALLIN"
        }
    }
}
