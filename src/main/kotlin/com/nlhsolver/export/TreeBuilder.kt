package com.nlhsolver.export

import com.nlhsolver.core.GameState
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.range.Hand

/**
 * Builds recursive game trees for visualization and analysis.
 *
 * Separates generic tree traversal logic from game-specific representation:
 * - Generic: Cycle detection, terminal handling, chance nodes, recursion
 * - Game-specific: Hand display, board format, metadata extraction
 *
 * Usage:
 * ```
 * val builder = LeducTreeBuilder(evCalculator, rangeCalculator)
 * val tree = builder.buildTree(
 *     rootState = leducState,
 *     profile = trainedProfile,
 *     context = TreeBuildContext(boardName = "K")
 * )
 * ```
 *
 * Output: Recursive tree structure for JSON export
 *
 * @param S GameState type
 * @param H Hand type
 */
interface TreeBuilder<S : GameState, H : Hand> {
    /**
     * Build recursive tree starting from a root state.
     *
     * @param rootState Starting game state
     * @param profile Trained strategy profile
     * @param context Build configuration (board name, filters, etc.)
     * @return Root tree node
     */
    fun buildTree(
        rootState: S,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): TreeNode

    /**
     * Get all hands to display at this node.
     *
     * Game-specific:
     * - Leduc: 6 cards (or 4-5 after filtering board)
     * - NLH: 1326 combos, or bucketed ranges
     *
     * @param state Current game state
     * @param context Build context
     * @return List of hands with display information
     */
    fun getHandsToDisplay(
        state: S,
        context: TreeBuildContext
    ): List<HandDisplay<H>>

    /**
     * Calculate all metadata for a hand at this node.
     *
     * Includes:
     * - Equity (showdown win probability)
     * - EVs (uniform and range-based)
     * - Range weight (how often this hand reaches this node)
     * - Action frequencies (fold/call/raise probabilities)
     * - Per-action EVs
     *
     * @param hand The hand to analyze
     * @param state Current game state
     * @param profile Strategy profile
     * @param context Build context
     * @return Complete metadata for export
     */
    fun calculateHandMetadata(
        hand: H,
        state: S,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): HandMetadata

    /**
     * Format metadata for this node.
     *
     * Includes game-specific information:
     * - Round/street number
     * - Pot size, amount to call
     * - Board cards
     * - Custom fields
     *
     * @param state Current game state
     * @return Node metadata for export
     */
    fun formatNodeMetadata(state: S): NodeMetadata

    /**
     * Get action display names.
     *
     * Maps action IDs to human-readable names:
     * - "f" → "fold"
     * - "c" → "call"
     * - "r" → "raise"
     * - "b" → "bet"
     * - "x" → "check"
     *
     * @param state Current game state
     * @return Map of action ID to display name
     */
    fun getActionDisplayNames(state: S): Map<String, String>
}

/**
 * Configuration for tree building.
 *
 * @property boardName Board rank name (for Leduc: "J"/"Q"/"K", for NLH: more complex)
 * @property visited Cycle detection set (managed by builder)
 * @property customFields Game-specific configuration
 */
data class TreeBuildContext(
    val boardName: String,
    val visited: MutableSet<String> = mutableSetOf(),
    val customFields: Map<String, Any> = emptyMap()
)

/**
 * Display information for a single hand.
 *
 * @property id Unique identifier ("Ka", "AKs", etc.)
 * @property label Display label ("K♠", "AK♠", etc.)
 * @property hand Concrete hand object
 */
data class HandDisplay<H : Hand>(
    val id: String,
    val label: String,
    val hand: H
)

/**
 * Complete metadata for a hand at a node.
 *
 * @property equity Showdown win probability (0.0 to 1.0)
 * @property evUniform EV vs uniform opponent range
 * @property evRange EV vs actual opponent range
 * @property rangeWeight How often this hand reaches this node (0.0 to 1.0)
 * @property frequencies Action probabilities (action name → frequency)
 * @property evPerAction EV for each action (action name → EV)
 */
data class HandMetadata(
    val equity: Double,
    val evUniform: Double,
    val evRange: Double,
    val rangeWeight: Double,
    val frequencies: Map<String, Double>,
    val evPerAction: Map<String, Double>
)

/**
 * Metadata for a tree node.
 *
 * @property round Round/street number (Leduc: 1-2, NLH: 0-3)
 * @property pot Total pot size
 * @property toCall Amount to call
 * @property board Board cards (Leduc: ["Q♠"], NLH: ["A♠", "K♥", "Q♦"])
 * @property customFields Game-specific metadata
 */
data class NodeMetadata(
    val round: Int,
    val pot: Int,
    val toCall: Int,
    val board: List<String>,
    val customFields: Map<String, Any> = emptyMap()
)

/**
 * A node in the game tree.
 *
 * Recursive structure:
 * - Terminal nodes: terminal = true
 * - Chance nodes: chance = true, children = list of outcomes
 * - Decision nodes: children = map of actions to child nodes
 *
 * @property meta Node metadata (pot, board, etc.)
 * @property actions Available actions at this node
 * @property hands Hands with their strategies and metadata
 * @property children Child nodes (action name → child node or outcome list)
 * @property terminal Whether this is a terminal node
 * @property chance Whether this is a chance node
 */
data class TreeNode(
    val meta: NodeMetadata? = null,
    val actions: List<String> = emptyList(),
    val hands: List<Map<String, Any>> = emptyList(),
    val children: Map<String, Any> = emptyMap(),
    val terminal: Boolean = false,
    val chance: Boolean = false,
    val outcome: String? = null
)
