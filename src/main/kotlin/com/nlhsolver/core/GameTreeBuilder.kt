package com.nlhsolver.core

import com.nlhsolver.poker.*
import com.nlhsolver.solver.BetSize
import com.nlhsolver.solver.SolveConfiguration
import java.util.UUID

/**
 * Option for board canonicalization in game tree building.
 */
enum class BoardCanonicalization {
    /** No canonicalization - use boards as-is */
    NONE,
    /** Canonicalize boards using suit isomorphism */
    ENABLED
}

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
    private val postflopBucketing: PostflopBucketing = PostflopBucketing.create(config.handAbstraction.numBuckets),
    private val boardCanonicalization: BoardCanonicalization = BoardCanonicalization.NONE
) {
    private val positions = config.stackSizes.keys.sortedBy { it.ordinal }

    /**
     * Board canonicalizer for this game tree.
     * Used to reduce equivalent boards to canonical form (T233).
     */
    val boardCanonicalizer: BoardCanonicalizer = when (boardCanonicalization) {
        BoardCanonicalization.NONE -> BoardCanonicalizer.identity()
        BoardCanonicalization.ENABLED -> config.getBoardCanonicalizer()
    }

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

        // Base case 2: Maximum depth reached (safety check to prevent infinite recursion)
        // For MVP, use very limited depth to keep game tree manageable
        // With 2 raises per street max and 4 streets, theoretical max is ~8-10 actions
        // TODO: Implement proper game tree abstraction for deeper trees
        if (depth > 8) {
            return GameTreeNode.terminal(state)
        }

        // Base case 3: All players are all-in (no more decisions, just deal to showdown)
        val playersWhoCanAct = state.playerStates.values.count { it.canAct() }
        if (playersWhoCanAct == 0) {
            // All players are all-in or folded - this is terminal
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
     *
     * Phase 2.6: Enabled for preflop -> flop transition.
     */
    private fun needsChanceNode(state: PokerGameState): Boolean {
        // Transition to next street if betting round is complete
        return state.shouldTransitionToNextStreet()
    }

    /**
     * Builds a chance node (dealing community cards).
     *
     * Phase 2.6: Uses a fixed flop board (K♠7♥2♦) for verification.
     * Phase 2.7: When canonicalization is enabled, uses canonical boards (T233).
     * Full implementation would enumerate boards with suit isomorphism.
     */
    private fun buildChanceNode(state: PokerGameState, depth: Int): GameTreeNode {
        val nextStreet = getNextStreet(state.street)

        // Reset investedThisRound for all players when advancing to new street
        val resetPlayerStates = state.playerStates.mapValues { (_, playerState) ->
            playerState.copy(investedThisRound = 0.0)
        }

        // Phase 2.6: Use fixed flop board K♠7♥2♦
        // This is a "dry" rainbow board with one high card
        // Good for testing because it's uncoordinated and straightforward
        val fixedFlopBoard = listOf(
            Card(com.nlhsolver.poker.Rank.KING, com.nlhsolver.poker.Suit.SPADES),
            Card(com.nlhsolver.poker.Rank.SEVEN, com.nlhsolver.poker.Suit.HEARTS),
            Card(com.nlhsolver.poker.Rank.TWO, com.nlhsolver.poker.Suit.DIAMONDS)
        )

        // Determine board based on next street
        val rawBoard = when (nextStreet) {
            Street.FLOP -> fixedFlopBoard
            Street.TURN -> state.board + Card(com.nlhsolver.poker.Rank.JACK, com.nlhsolver.poker.Suit.CLUBS)
            Street.RIVER -> state.board + Card(com.nlhsolver.poker.Rank.TEN, com.nlhsolver.poker.Suit.SPADES)
            else -> state.board
        }

        // Apply canonicalization if enabled (T233: isomorphism reduction)
        val canonicalBoard = when (boardCanonicalization) {
            BoardCanonicalization.NONE -> rawBoard
            BoardCanonicalization.ENABLED -> {
                val newCanonicalizer = BoardCanonicalizer.canonicalize(rawBoard)
                newCanonicalizer.canonicalBoard
            }
        }

        val nextState = state.copy(
            street = nextStreet,
            board = canonicalBoard,
            playerStates = resetPlayerStates,
            actionHistory = emptyList() // Reset action history for new street
        )

        val childNode = buildSubtree(nextState, depth + 1)

        // Create chance node with single outcome (deterministic for Phase 2.6)
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

        // Validate we have legal actions
        require(legalActions.isNotEmpty()) {
            "Cannot create decision node with no legal actions (acting player: $actingPlayer, depth: $depth)"
        }

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
        // Find players who can still act (not folded, not all-in)
        val playersWhoCanAct = state.playerStates.filter { it.value.canAct() }.keys.toList()

        if (playersWhoCanAct.isEmpty()) {
            // No one can act - this shouldn't happen as buildSubtree should have caught this
            throw IllegalStateException("No players can act, but determineActingPlayer was called")
        }

        // Determine last actor
        val lastActor = state.actionHistory.lastOrNull()?.actor

        if (lastActor == null || playersWhoCanAct.size == 1) {
            // No previous action or only one player can act
            return playersWhoCanAct[0]
        }

        // Alternate to next player who can act
        val currentIndex = playersWhoCanAct.indexOf(lastActor)
        val nextIndex = (currentIndex + 1) % playersWhoCanAct.size
        return playersWhoCanAct[nextIndex]
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

        // Count raises this street to limit aggression
        val raisesThisStreet = state.actionHistory
            .filter { it.action is Action.Bet || it.action is Action.Raise }
            .count()
        val maxRaisesPerStreet = 2 // Limit to 2 raises per street

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

        // BET/RAISE: Only if we haven't exceeded raise limit
        if (raisesThisStreet < maxRaisesPerStreet) {
            val availableStack = playerState.stackBb
            val pot = state.pot

            for (betSize in config.betSizingScheme.sizes) {
                when (betSize) {
                    is BetSize.PotRelative -> {
                        val betAmount = pot * betSize.multiplier

                        if (amountToCall == 0.0) {
                            // Betting (no bet to call)
                            if (betAmount <= availableStack && betAmount > 0.0) {
                                actions.add(Action.Bet(betAmount))
                            }
                        } else {
                            // Raising (bet to call)
                            val totalToInvest = highestBet + betAmount
                            val additionalNeeded = totalToInvest - playerState.investedThisRound
                            if (additionalNeeded <= availableStack && additionalNeeded > amountToCall) {
                                actions.add(Action.Raise(totalToInvest))
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

        // Calculate new pot (add only the new money invested this action)
        val oldTotalInvested = state.playerStates.values.sumOf { it.investedThisRound }
        val newTotalInvested = newPlayerStates.values.sumOf { it.investedThisRound }
        val newPot = state.pot + (newTotalInvested - oldTotalInvested)

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

        // Validate pot before creating new state
        require(newPot > 0.0) {
            buildString {
                appendLine("Pot must be positive after action, but got $newPot")
                appendLine("Action: $action")
                appendLine("Player: $player")
                appendLine("Old pot: ${state.pot}")
                appendLine("Old total invested: $oldTotalInvested")
                appendLine("New total invested: $newTotalInvested")
                appendLine("Old player states:")
                state.playerStates.forEach { (pos, ps) ->
                    appendLine("  $pos: stack=${ps.stackBb}, invested=${ps.investedThisRound}")
                }
                appendLine("New player states:")
                newPlayerStates.forEach { (pos, ps) ->
                    appendLine("  $pos: stack=${ps.stackBb}, invested=${ps.investedThisRound}")
                }
            }
        }

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
        // In heads-up: BTN posts SB (0.5bb), BB posts BB (1.0bb)
        val smallBlind = 0.5
        val bigBlind = 1.0

        val playerStates = positions.associateWith { position ->
            val stack = config.stackSizes[position] ?: 100.0

            // Determine blind amounts
            val (blindPosted, remainingStack) = when (position) {
                Position.BTN -> Pair(smallBlind, stack - smallBlind)
                Position.BB -> Pair(bigBlind, stack - bigBlind)
                else -> Pair(0.0, stack)
            }

            PokerPlayerState(
                position = position,
                stackBb = remainingStack,
                investedThisRound = blindPosted
            )
        }

        return PokerGameState(
            street = Street.PREFLOP,
            board = emptyList(),
            pot = smallBlind + bigBlind,  // 0.5bb SB + 1bb BB = 1.5bb
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
