package com.nlhsolver.core

import com.nlhsolver.poker.Action
import com.nlhsolver.poker.Position
import java.util.UUID

/**
 * Represents a single decision point in the poker game tree (T032).
 *
 * Game tree nodes form the extensive-form representation of poker. Each node
 * represents a specific game state and contains information about:
 * - The type of node (decision, chance, or terminal)
 * - The current game state (board, pot, player positions)
 * - Legal actions available at this node
 * - Children nodes resulting from each action
 * - CFR+ data (regrets and strategies)
 *
 * @property nodeId Unique identifier for this node
 * @property nodeType Type of node (DECISION, CHANCE, or TERMINAL)
 * @property actingPlayer The player who acts at this node (null for CHANCE/TERMINAL)
 * @property gameState The poker-specific game state
 * @property legalActions List of legal actions at this node
 * @property children Map from actions to resulting child nodes
 * @property regrets Regret values for each action (used during CFR+ solving, null after)
 * @property strategy Action probability distribution (populated during/after solving)
 */
data class GameTreeNode(
    val nodeId: UUID = UUID.randomUUID(),
    val nodeType: NodeType,
    val actingPlayer: Position? = null,
    val gameState: PokerGameState,
    val legalActions: List<Action> = emptyList(),
    val children: Map<Action, GameTreeNode> = emptyMap(),
    val regrets: MutableMap<Action, Double>? = null,
    val strategy: Map<Action, Double>? = null
) {
    init {
        // VR-015: DECISION nodes must have actingPlayer and non-empty legalActions
        if (nodeType == NodeType.DECISION) {
            require(actingPlayer != null) {
                "DECISION nodes must have an acting player"
            }
            require(legalActions.isNotEmpty()) {
                "DECISION nodes must have at least one legal action"
            }
        }

        // VR-016: CHANCE nodes represent random events (dealing cards)
        if (nodeType == NodeType.CHANCE) {
            require(legalActions.isNotEmpty()) {
                "CHANCE nodes must have possible outcomes"
            }
        }

        // VR-017: TERMINAL nodes have empty children and represent game end
        if (nodeType == NodeType.TERMINAL) {
            require(children.isEmpty()) {
                "TERMINAL nodes must have no children"
            }
        }

        // VR-018: Strategy probabilities must sum to 1.0 (within epsilon)
        strategy?.let {
            val sum = it.values.sum()
            require(kotlin.math.abs(sum - 1.0) < 0.0001) {
                "Strategy probabilities must sum to 1.0, but sum is $sum"
            }
        }
    }

    /**
     * Returns true if this is a decision node.
     */
    fun isDecision(): Boolean = nodeType == NodeType.DECISION

    /**
     * Returns true if this is a chance node.
     */
    fun isChance(): Boolean = nodeType == NodeType.CHANCE

    /**
     * Returns true if this is a terminal node.
     */
    fun isTerminal(): Boolean = nodeType == NodeType.TERMINAL

    /**
     * Gets the child node resulting from taking the given action.
     */
    fun getChild(action: Action): GameTreeNode? = children[action]

    /**
     * Returns the current strategy as a map from action to probability.
     * Returns uniform strategy if not set.
     */
    fun getCurrentStrategy(): Map<Action, Double> {
        return strategy ?: legalActions.associateWith { 1.0 / legalActions.size }
    }

    companion object {
        /**
         * Creates a decision node.
         */
        fun decision(
            gameState: PokerGameState,
            actingPlayer: Position,
            legalActions: List<Action>
        ): GameTreeNode {
            return GameTreeNode(
                nodeType = NodeType.DECISION,
                gameState = gameState,
                actingPlayer = actingPlayer,
                legalActions = legalActions,
                regrets = legalActions.associateWith { 0.0 }.toMutableMap()
            )
        }

        /**
         * Creates a chance node (e.g., dealing community cards).
         */
        fun chance(
            gameState: PokerGameState,
            possibleOutcomes: List<Action>
        ): GameTreeNode {
            return GameTreeNode(
                nodeType = NodeType.CHANCE,
                gameState = gameState,
                legalActions = possibleOutcomes
            )
        }

        /**
         * Creates a terminal node (game end).
         */
        fun terminal(gameState: PokerGameState): GameTreeNode {
            return GameTreeNode(
                nodeType = NodeType.TERMINAL,
                gameState = gameState
            )
        }
    }
}

/**
 * Type of game tree node.
 */
enum class NodeType {
    /** Player makes a decision (fold, check, bet, etc.) */
    DECISION,

    /** Random event occurs (dealing cards) */
    CHANCE,

    /** Game has ended (showdown or fold) */
    TERMINAL
}
