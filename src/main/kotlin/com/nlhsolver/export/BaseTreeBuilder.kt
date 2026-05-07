package com.nlhsolver.export

import com.nlhsolver.core.GameState
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.range.Hand

/**
 * Base implementation of TreeBuilder with generic tree traversal logic.
 *
 * This class handles the recursive tree building common to all poker variants:
 * 1. Cycle detection (prevent infinite loops)
 * 2. Terminal node handling
 * 3. Chance node detection and expansion
 * 4. Recursive child building
 * 5. Action metadata aggregation
 *
 * Subclasses implement game-specific methods:
 * - getHandsToDisplay(): What hands to show (6 cards for Leduc, 1326 for NLH)
 * - calculateHandMetadata(): Equity, EVs, range weights for each hand
 * - formatNodeMetadata(): Pot, board, round information
 * - getActionDisplayNames(): Map action IDs to display names
 *
 * @param S GameState type
 * @param H Hand type
 */
abstract class BaseTreeBuilder<S : GameState, H : Hand> : TreeBuilder<S, H> {

    override fun buildTree(
        rootState: S,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): TreeNode {
        return buildTreeNode(rootState, profile, context)
    }

    /**
     * Recursive tree building with cycle detection.
     *
     * This is the core algorithm that works for any poker variant.
     */
    private fun buildTreeNode(
        state: S,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): TreeNode {
        // Terminal node: game over
        if (state.isTerminal()) {
            return TreeNode(
                terminal = true,
                outcome = if ('f' in state.getStateHash()) "fold" else "showdown"
            )
        }

        // Cycle detection: prevent infinite loops
        val stateKey = "${context.boardName}:${state.getStateHash()}"
        if (stateKey in context.visited) {
            return TreeNode(terminal = true, outcome = "cycle")
        }
        context.visited.add(stateKey)

        // Get legal actions
        val actions = state.getLegalActions()
        if (actions.isEmpty()) {
            return TreeNode(terminal = true, outcome = "no-actions")
        }

        // Get action display names
        val actionNames = getActionDisplayNames(state)
        val actionLabels = actions.map { actionNames[it.getActionId()] ?: it.getActionId() }

        // Build node metadata
        val meta = formatNodeMetadata(state)

        // Get all hands to display at this node
        val handsToDisplay = getHandsToDisplay(state, context)

        // Calculate metadata for each hand
        val handsData = handsToDisplay.map { handDisplay ->
            val metadata = calculateHandMetadata(
                handDisplay.hand, state, profile, context
            )

            // Convert to map for JSON export
            mapOf(
                "id" to handDisplay.id,
                "label" to handDisplay.label,
                "equity" to metadata.equity,
                "evUniform" to metadata.evUniform,
                "evRange" to metadata.evRange,
                "rangeWeight" to metadata.rangeWeight,
                "freq" to metadata.frequencies,
                "ev" to metadata.evPerAction
            )
        }

        // Build children recursively
        val children = buildChildren(state, actions, actionLabels, profile, context)

        return TreeNode(
            meta = meta,
            actions = actionLabels,
            hands = handsData,
            children = children
        )
    }

    /**
     * Build child nodes for all actions.
     *
     * Handles both regular children and chance nodes (board dealing).
     */
    private fun buildChildren(
        state: S,
        actions: List<com.nlhsolver.core.GameAction>,
        actionLabels: List<String>,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): Map<String, Any> {
        val children = mutableMapOf<String, Any>()

        for ((action, actionLabel) in actions.zip(actionLabels)) {
            val nextState = state.applyAction(action) as S

            // Check if this action leads to a chance node (board dealing)
            if (nextState.isChanceNode()) {
                // Chance node: expand board outcomes
                children[actionLabel] = buildChanceNode(nextState, profile, context)
            } else {
                // Regular child: recursive tree building
                val childNode = buildTreeNode(nextState, profile, context)
                children[actionLabel] = childNode
            }
        }

        return children
    }

    /**
     * Build a chance node with all possible outcomes.
     *
     * For Leduc: 6 possible board cards
     * For NLH: Possible flops/turns/rivers (or bucketed)
     */
    protected open fun buildChanceNode(
        state: S,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): Map<String, Any> {
        // Default: mark as chance node, subclasses override to populate outcomes
        return mapOf(
            "chance" to true,
            "outcomes" to emptyList<Any>()
        )
    }

    // Subclasses must implement these game-specific methods
    abstract override fun getHandsToDisplay(
        state: S,
        context: TreeBuildContext
    ): List<HandDisplay<H>>

    abstract override fun calculateHandMetadata(
        hand: H,
        state: S,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): HandMetadata

    abstract override fun formatNodeMetadata(state: S): NodeMetadata

    abstract override fun getActionDisplayNames(state: S): Map<String, String>
}
