package com.nlhsolver.core

/**
 * Represents a state in a sequential game.
 *
 * This is a generic interface that can be implemented for any game
 * (poker, AKQ, rock-paper-scissors, etc.).
 */
interface GameState {
    /**
     * Returns the player to act at this state (0-indexed).
     * Returns null if this is a terminal state.
     */
    fun currentPlayer(): Int?

    /**
     * Returns true if this is a terminal state (game is over).
     */
    fun isTerminal(): Boolean

    /**
     * Returns the utility/payoff for each player at a terminal state.
     * Only valid if isTerminal() returns true.
     *
     * @return Array of utilities, one per player
     */
    fun getUtility(): DoubleArray

    /**
     * Returns the legal actions available at this state.
     * Returns empty list if terminal.
     */
    fun getLegalActions(): List<GameAction>

    /**
     * Returns the next state after taking an action.
     *
     * @param action The action to take
     * @return The resulting game state
     */
    fun applyAction(action: GameAction): GameState

    /**
     * Returns the information set for the current player.
     * This represents what the player knows about the game state.
     *
     * Information sets are crucial for imperfect information games:
     * - States in the same info set are indistinguishable to the player
     * - Player must use the same strategy across all states in an info set
     */
    fun getInfoSet(): String

    /**
     * Returns a unique hash for this exact game state.
     * Used for caching and memoization.
     */
    fun getStateHash(): String
}

/**
 * Represents an action in a game.
 */
interface GameAction {
    /**
     * Returns a unique identifier for this action.
     * Should be consistent within the same information set.
     */
    fun getActionId(): String

    /**
     * Returns a human-readable description of the action.
     */
    fun getDescription(): String
}

/**
 * Simple implementation of GameAction.
 */
data class SimpleGameAction(
    private val id: String,
    private val desc: String = id
) : GameAction {
    override fun getActionId(): String = id
    override fun getDescription(): String = desc

    override fun toString(): String = desc
}
