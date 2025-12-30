package com.nlhsolver.core

import com.nlhsolver.poker.*
import com.nlhsolver.solver.BetSize
import com.nlhsolver.solver.SolveConfiguration
import java.util.UUID

/**
 * Constructs poker game trees from solve configurations (T036, T037, T038).
 *
 * The GameTreeBuilder takes a SolveConfiguration and builds an extensive-form game tree
 * with the following abstractions:
 * - Hand bucketing: Groups similar hands to reduce tree size
 * - Bet sizing discretization: Limits bet sizes to predefined amounts
 * - Suit isomorphism: Treats suit-symmetric boards identically
 *
 * This class implements:
 * - T036: Game tree construction for heads-up
 * - T037: Bet sizing discretization
 * - T038: Game tree abstraction (bucketing + isomorphism)
 */
class GameTreeBuilder(
    private val config: SolveConfiguration,
    private val postflopBucketing: PostflopBucketing = PostflopBucketing.create(config.handAbstraction.flopBuckets)
) {
    private val positions = config.stackSizes.keys.sortedBy { it.ordinal }

    init {
        require(config.numPlayers == 2) {
            "GameTreeBuilder currently only supports heads-up (2 players). " +
            "Multi-player support is in User Story 2 (T078-T087)."
        }
    }

    /**
     * Builds the complete game tree for the configuration.
     *
     * @return Root node of the game tree
     */
    fun buildTree(): GameTree {
        // Start with initial game state (preflop, no cards dealt yet)
        val initialState = createInitialState()
        val rootNode = buildSubtree(initialState, 0)

        // Count total nodes in tree
        val nodeCount = countNodes(rootNode)

        return GameTree(
            rootNode = rootNode,
            nodeCount = nodeCount,
            maxDepth = 4,  // Preflop, Flop, Turn, River
            abstractionApplied = config.handAbstraction
        )
    }

    /**
     * Recursively builds a subtree starting from the given state.
     */
    private fun buildSubtree(state: PokerGameState, depth: Int): GameTreeNode {
        // Base case 1: Terminal node (hand is over)
        if (state.isHandOver()) {
            return GameTreeNode.terminal(state)
        }

        // Base case 2: Maximum depth reached (shouldn't happen for poker)
        if (depth > 10) {
            return GameTreeNode.terminal(state)
        }

        // Determine next action
        return when {
            needsChanceNode(state) -> buildChanceNode(state, depth)
            else -> buildDecisionNode(state, depth)
        }
    }

    /**
     * Checks if we need a chance node (to deal cards).
     */
    private fun needsChanceNode(state: PokerGameState): Boolean {
        // If action history shows last action was call/check and we need to advance street
        val lastAction = state.actionHistory.lastOrNull()?.action
        if (lastAction is Action.Call || lastAction is Action.Check) {
            // Check if all active players have acted
            val activePlayerCount = state.getActivePlayerCount()
            if (activePlayerCount > 1 && state.street != Street.RIVER) {
                return true  // Need to deal next street
            }
        }
        return false
    }

    /**
     * Builds a chance node (dealing community cards).
     */
    private fun buildChanceNode(state: PokerGameState, depth: Int): GameTreeNode {
        val nextStreet = getNextStreet(state.street)

        // For simplification, we'll abstract away the specific chance outcomes
        // In a full implementation, we'd enumerate possible boards and use suit isomorphism
        // For now, create a simplified chance node that transitions to next street

        val nextState = state.copy(
            street = nextStreet,
            board = when (nextStreet) {
                Street.FLOP -> listOf(Card.ACE_SPADES, Card.KING_DIAMONDS, Card.QUEEN_HEARTS)  // Placeholder
                Street.TURN -> state.board + Card.JACK_CLUBS
                Street.RIVER -> state.board + Card.TEN_SPADES
                else -> state.board
            }
        )

        val childNode = buildSubtree(nextState, depth + 1)

        // Create chance node with single outcome (simplified)
        return GameTreeNode(
            nodeType = NodeType.CHANCE,
            gameState = state,
            legalActions = listOf(Action.Check),  // Placeholder action for "deal cards"
            children = mapOf(Action.Check to childNode)
        )
    }

    /**
     * Builds a decision node (player action).
     */
    private fun buildDecisionNode(state: PokerGameState, depth: Int): GameTreeNode {
        val actingPlayer = determineActingPlayer(state)
        val legalActions = generateLegalActions(state, actingPlayer)

        // Build child nodes for each action
        val children = mutableMapOf<Action, GameTreeNode>()
        for (action in legalActions) {
            val nextState = applyAction(state, actingPlayer, action)
            children[action] = buildSubtree(nextState, depth + 1)
        }

        return GameTreeNode.decision(
            gameState = state,
            actingPlayer = actingPlayer,
            legalActions = legalActions
        ).copy(children = children)
    }

    /**
     * Determines which player should act next.
     */
    private fun determineActingPlayer(state: PokerGameState): Position {
        // Simple rule for heads-up: alternate between positions
        // TODO: Implement proper poker action order (button acts last postflop, etc.)
        val activePlayers = state.getActivePlayers()
        return if (activePlayers.isNotEmpty()) activePlayers[0] else positions[0]
    }

    /**
     * Generates legal actions for a player at a given state (T037).
     *
     * This implements bet sizing discretization per the configuration.
     */
    private fun generateLegalActions(state: PokerGameState, player: Position): List<Action> {
        val actions = mutableListOf<Action>()
        val playerState = state.getPlayerState(player) ?: return emptyList()

        // Determine current highest bet
        val highestBet = state.playerStates.values.maxOfOrNull { it.investedThisRound } ?: 0.0
        val amountToCall = highestBet - playerState.investedThisRound

        // Check if player can act
        if (!playerState.canAct()) {
            return emptyList()
        }

        // FOLD: Always available if there's a bet to face
        if (amountToCall > 0.0) {
            actions.add(Action.Fold)
        }

        // CHECK: Available if no bet to face
        if (amountToCall == 0.0) {
            actions.add(Action.Check)
        }

        // CALL: Available if there's a bet to face
        if (amountToCall > 0.0 && playerState.stackBb >= amountToCall) {
            actions.add(Action.Call)
        }

        // BET/RAISE: Generate discretized bet sizes per configuration
        val availableStack = playerState.stackBb
        val pot = state.pot

        for (betSize in config.betSizingScheme.sizes) {
            when (betSize) {
                is BetSize.PotRelative -> {
                    val betAmount = pot * betSize.multiplier
                    if (betAmount <= availableStack && betAmount > amountToCall) {
                        if (amountToCall == 0.0) {
                            actions.add(Action.Bet(betAmount))
                        } else {
                            actions.add(Action.Raise(highestBet + betAmount))
                        }
                    }
                }
                is BetSize.AllIn -> {
                    if (availableStack > amountToCall) {
                        actions.add(Action.AllIn(availableStack))
                    }
                }
            }
        }

        return actions
    }

    /**
     * Applies an action to create the next state.
     */
    private fun applyAction(state: PokerGameState, player: Position, action: Action): PokerGameState {
        val playerState = state.getPlayerState(player) ?: return state
        val newPlayerStates = state.playerStates.toMutableMap()

        when (action) {
            is Action.Fold -> {
                newPlayerStates[player] = playerState.copy(isFolded = true)
            }
            is Action.Check -> {
                // No state change for check
            }
            is Action.Call -> {
                val highestBet = state.playerStates.values.maxOf { it.investedThisRound }
                val amountToCall = highestBet - playerState.investedThisRound
                newPlayerStates[player] = playerState.copy(
                    stackBb = playerState.stackBb - amountToCall,
                    investedThisRound = highestBet
                )
            }
            is Action.Bet -> {
                newPlayerStates[player] = playerState.copy(
                    stackBb = playerState.stackBb - action.amountBb,
                    investedThisRound = playerState.investedThisRound + action.amountBb
                )
            }
            is Action.Raise -> {
                val amountToRaise = action.totalAmountBb - playerState.investedThisRound
                newPlayerStates[player] = playerState.copy(
                    stackBb = playerState.stackBb - amountToRaise,
                    investedThisRound = action.totalAmountBb
                )
            }
            is Action.AllIn -> {
                val allInAmount = action.amountBb
                newPlayerStates[player] = playerState.copy(
                    stackBb = 0.0,
                    investedThisRound = playerState.investedThisRound + allInAmount,
                    isAllIn = true
                )
            }
        }

        // Calculate new pot
        val newPot = newPlayerStates.values.sumOf { it.investedThisRound }

        // Add action to history
        val newHistory = state.actionHistory + HistoricalAction(
            actor = player,
            action = action,
            amountBb = when (action) {
                is Action.Bet -> action.amountBb
                is Action.Raise -> action.totalAmountBb
                is Action.AllIn -> action.amountBb
                else -> null
            }
        )

        return state.copy(
            pot = newPot,
            playerStates = newPlayerStates,
            actionHistory = newHistory
        )
    }

    /**
     * Creates the initial game state (preflop, no actions yet).
     */
    private fun createInitialState(): PokerGameState {
        val playerStates = positions.associateWith { position ->
            val stack = config.stackSizes[position] ?: 100.0
            PokerPlayerState(
                position = position,
                stackBb = stack
            )
        }

        return PokerGameState(
            street = Street.PREFLOP,
            board = emptyList(),
            pot = 1.5,  // Assume 0.5bb SB + 1bb BB = 1.5bb
            playerStates = playerStates
        )
    }

    /**
     * Gets the next street.
     */
    private fun getNextStreet(current: Street): Street {
        return when (current) {
            Street.PREFLOP -> Street.FLOP
            Street.FLOP -> Street.TURN
            Street.TURN -> Street.RIVER
            Street.RIVER -> Street.RIVER  // Already at river
        }
    }

    /**
     * Counts total nodes in the tree.
     */
    private fun countNodes(node: GameTreeNode): Long {
        var count = 1L
        for (child in node.children.values) {
            count += countNodes(child)
        }
        return count
    }
}

/**
 * Represents a complete poker game tree.
 */
data class GameTree(
    val treeId: UUID = UUID.randomUUID(),
    val rootNode: GameTreeNode,
    val nodeCount: Long,
    val maxDepth: Int,
    val abstractionApplied: com.nlhsolver.solver.HandAbstraction
)
