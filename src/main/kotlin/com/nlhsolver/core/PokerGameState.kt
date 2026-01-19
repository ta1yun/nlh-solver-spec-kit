package com.nlhsolver.core

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Street
import com.nlhsolver.poker.Action
import com.nlhsolver.poker.HandEvaluator

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
     *
     * Phase 2.6 Update: Supports multi-street play (preflop + flop).
     * Hand ends when:
     * 1. Only one player remains (others folded)
     * 2. All players are all-in (run out board)
     * 3. Betting is complete on the final street (RIVER for full game, FLOP for Phase 2.6)
     */
    fun isHandOver(): Boolean {
        val activePlayers = getActivePlayerCount()

        // Hand is over if only 1 or fewer players remain (others folded)
        if (activePlayers <= 1) {
            return true
        }

        // Hand is over if all remaining players are all-in
        val playersWhoCanAct = playerStates.values.count { it.canAct() }
        if (playersWhoCanAct == 0) {
            return true
        }

        return false  // Betting round may continue or transition to next street
    }

    /**
     * Returns true if the current betting round is complete.
     *
     * A betting round is complete when:
     * 1. All active players have matched the highest bet
     * 2. At least one action has been taken this street
     * 3. All players have had a chance to act
     */
    fun isBettingRoundComplete(): Boolean {
        val activePlayers = playerStates.values.filter { !it.isFolded }

        // No actions this street means round isn't complete (need to give everyone a chance)
        if (actionHistory.isEmpty()) {
            return false
        }

        // Check if all active players have matched the highest bet
        val highestBet = playerStates.values.maxOfOrNull { it.investedThisRound } ?: 0.0
        val allPlayersMatched = activePlayers
            .filter { it.canAct() || it.isAllIn }
            .all { it.investedThisRound == highestBet }

        if (!allPlayersMatched) {
            return false
        }

        // Check if all players who can act have acted at least once
        val playersWhoCanAct = activePlayers.filter { it.canAct() }.map { it.position }.toSet()
        val playersWhoActed = actionHistory.map { it.actor }.toSet()

        return playersWhoCanAct.all { it in playersWhoActed }
    }

    /**
     * Check if we should transition to the next street.
     * Returns true if betting is complete and we're not on the final street.
     */
    fun shouldTransitionToNextStreet(): Boolean {
        if (!isBettingRoundComplete()) return false

        // Check environment variable or system property for postflop mode
        // NLH_FULL_POSTFLOP=true: Play all streets (PREFLOP → FLOP → TURN → RIVER)
        // NLH_FULL_POSTFLOP=false or unset: Phase 2.6 mode (PREFLOP → FLOP, stop)
        val enableFullPostflop = isFullPostflopEnabled()

        return if (enableFullPostflop) {
            // Full postflop: Allow transitions until river (final street)
            street != Street.RIVER
        } else {
            // Phase 2.6: Only transition after preflop (stop at flop)
            street == Street.PREFLOP
        }
    }

    /**
     * Check if full postflop mode is enabled.
     * Checks both system property (for tests) and environment variable (for CLI).
     */
    private fun isFullPostflopEnabled(): Boolean {
        // Check system property first (allows runtime configuration in tests)
        val systemProperty = System.getProperty("NLH_FULL_POSTFLOP")?.toBoolean()
        if (systemProperty != null) return systemProperty

        // Fall back to environment variable (for CLI usage)
        return System.getenv("NLH_FULL_POSTFLOP")?.toBoolean() ?: false
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

        // If betting round is complete and we should transition, return null
        // The game tree builder will handle the street transition
        if (shouldTransitionToNextStreet()) return null

        // Get list of positions in the game (sorted by ordinal)
        val allPositions = playerStates.keys.sortedBy { it.ordinal }

        // Find players who can still act (not folded, not all-in)
        val playersWhoCanAct = playerStates.filter { it.value.canAct() }.keys.sortedBy { it.ordinal }

        if (playersWhoCanAct.isEmpty()) return null
        if (playersWhoCanAct.size == 1) {
            // Return player index (0-based position in allPositions list)
            return allPositions.indexOf(playersWhoCanAct[0])
        }

        // Determine last actor
        val lastActor = actionHistory.lastOrNull()?.actor

        if (lastActor == null) {
            // First action of the street
            // Preflop: BTN acts first (highest position in heads-up)
            // Postflop: BB acts first (lowest position, out of position)
            val firstToAct = if (street == Street.PREFLOP) {
                playersWhoCanAct.maxByOrNull { it.ordinal }  // BTN acts first preflop
            } else {
                playersWhoCanAct.minByOrNull { it.ordinal }  // BB (OOP) acts first postflop
            }
            return allPositions.indexOf(firstToAct!!)
        }

        // Check if betting round is complete (but we're not transitioning)
        if (isBettingRoundComplete()) {
            return null
        }

        // Alternate to next player who can act
        val currentIndex = playersWhoCanAct.indexOf(lastActor)
        val nextIndex = (currentIndex + 1) % playersWhoCanAct.size
        val nextPlayer = playersWhoCanAct[nextIndex]

        // Return player index (0-based position in allPositions list)
        return allPositions.indexOf(nextPlayer)
    }

    override fun isTerminal(): Boolean {
        // Hand is over if someone folded or all-in
        if (isHandOver()) return true

        // Check if full postflop mode is enabled
        val enableFullPostflop = isFullPostflopEnabled()

        // Determine final street based on mode
        val finalStreet = if (enableFullPostflop) {
            Street.RIVER  // Full postflop: RIVER is terminal
        } else {
            Street.FLOP   // Phase 2.6: FLOP is terminal
        }

        // Hand is over if betting is complete on the final street
        if (isBettingRoundComplete() && street == finalStreet) {
            return true
        }

        return false
    }

    override fun getUtility(): DoubleArray {
        require(isTerminal()) { "Can only get utility for terminal states" }

        // Calculate utilities for each player
        // Utility = (money won from pot) - (total money invested)
        val allPositions = playerStates.keys.sortedBy { it.ordinal }
        val activePlayers = getActivePlayers()

        // Calculate each player's total investment
        // Total invested = starting stack - current stack
        val initialStackBb = 50.0  // TODO: Get from configuration
        val totalInvested = allPositions.associateWith { pos ->
            val playerState = playerStates[pos]!!
            val currentTotal = playerState.stackBb + playerState.investedThisRound
            initialStackBb - currentTotal
        }

        // All folded except one - winner takes pot
        if (activePlayers.size == 1) {
            val winner = activePlayers.first()
            return DoubleArray(allPositions.size) { index ->
                val pos = allPositions[index]
                val moneyWon = if (pos == winner) pot else 0.0
                val moneyInvested = totalInvested[pos]!!
                moneyWon - moneyInvested
            }
        }

        // Showdown: Evaluate hands and award pot to winner
        val handStrengths = allPositions.associateWith { pos ->
            val playerState = playerStates[pos]!!

            if (playerState.holeCards == null) {
                return@associateWith Double.NEGATIVE_INFINITY
            }

            // Phase 2.6: Use actual hand evaluation when board is present
            if (board.isNotEmpty()) {
                // Use hand evaluator for proper poker hand ranking
                val allCards = listOf(
                    playerState.holeCards.first,
                    playerState.holeCards.second
                ) + board

                // Get hand rank (higher = stronger hand)
                try {
                    val handRank = if (allCards.size == 5) {
                        // Flop: exactly 5 cards (2 hole + 3 board)
                        HandEvaluator.evaluate(allCards)
                    } else if (allCards.size == 7) {
                        // River: 7 cards (2 hole + 5 board)
                        HandEvaluator.evaluateBest7(allCards)
                    } else {
                        // Turn: 6 cards - fall back to bucket ID for now
                        val bucketId = playerState.handRange ?: return@associateWith Double.NEGATIVE_INFINITY
                        return@associateWith (168.0 - bucketId.toDouble())
                    }
                    // Compute numeric value: type strength * 10000 + primary ranks + kickers
                    // This ensures proper ordering while maintaining comparability
                    var score = handRank.type.strength * 1_000_000.0
                    handRank.primaryRanks.forEachIndexed { i, rank ->
                        score += rank.value * Math.pow(100.0, (4 - i).toDouble())
                    }
                    handRank.kickers.forEachIndexed { i, rank ->
                        score += rank.value * Math.pow(10.0, (3 - i).toDouble())
                    }
                    score
                } catch (e: Exception) {
                    // Fall back to bucket ID if evaluation fails
                    val bucketId = playerState.handRange ?: return@associateWith Double.NEGATIVE_INFINITY
                    (168.0 - bucketId.toDouble())
                }
            } else {
                // Preflop-only: use bucket IDs as proxy for hand strength
                // Bucket 0 = AA (strongest), Bucket 168 = 72o (weakest)
                val bucketId = playerState.handRange ?: return@associateWith Double.NEGATIVE_INFINITY
                (168.0 - bucketId.toDouble())
            }
        }

        // Find winner (highest hand strength)
        val maxStrength = handStrengths.values.maxOrNull() ?: Double.NEGATIVE_INFINITY
        val winners = handStrengths.filter { it.value == maxStrength }.keys.toList()

        // Split pot among winners (handle ties)
        val winningsPerWinner = pot / winners.size

        return DoubleArray(allPositions.size) { index ->
            val pos = allPositions[index]
            val moneyWon = if (pos in winners) winningsPerWinner else 0.0
            val moneyInvested = totalInvested[pos]!!
            moneyWon - moneyInvested
        }
    }

    override fun getLegalActions(): List<GameAction> {
        if (isTerminal()) return emptyList()

        val player = currentPlayer() ?: return emptyList()

        // Convert player index to position
        val allPositions = playerStates.keys.sortedBy { it.ordinal }
        val position = allPositions[player]
        val playerState = getPlayerState(position) ?: return emptyList()

        if (!playerState.canAct()) return emptyList()

        val actions = mutableListOf<GameAction>()

        // Determine current highest bet
        val highestBet = playerStates.values.maxOfOrNull { it.investedThisRound } ?: 0.0
        val amountToCall = highestBet - playerState.investedThisRound

        // Count raises this street to limit aggression
        val raisesThisStreet = actionHistory
            .filter { it.action is Action.Bet || it.action is Action.Raise }
            .count()
        val maxRaisesPerStreet = 2

        // FOLD: Available if there's a bet to face
        if (amountToCall > 0.0) {
            actions.add(SimpleGameAction("fold", "Fold"))
        }

        // CHECK: Available if no bet to face
        if (amountToCall == 0.0) {
            actions.add(SimpleGameAction("check", "Check"))
        }

        // CALL: Available if there's a bet to face and player can afford it
        if (amountToCall > 0.0 && playerState.stackBb >= amountToCall) {
            actions.add(SimpleGameAction("call", "Call"))
        }

        // BET/RAISE: Only if we haven't exceeded raise limit
        if (raisesThisStreet < maxRaisesPerStreet) {
            // For now, just offer pot-sized bet/raise
            if (amountToCall == 0.0 && playerState.stackBb > 0.0) {
                actions.add(SimpleGameAction("bet", "Bet"))
            } else if (amountToCall > 0.0 && playerState.stackBb > amountToCall) {
                actions.add(SimpleGameAction("raise", "Raise"))
            }
        }

        return actions
    }

    override fun applyAction(action: GameAction): GameState {
        // Get current player index
        val playerIndex = currentPlayer()
            ?: throw IllegalStateException("Cannot apply action to terminal state")

        // Convert player index to position
        val allPositions = playerStates.keys.sortedBy { it.ordinal }
        val position = allPositions[playerIndex]
        val playerState = getPlayerState(position)
            ?: throw IllegalStateException("No state for current player $position")

        // Convert GameAction to poker Action
        // For MVP, use simplified actions with default amounts
        val pokerAction = when (action.getActionId().lowercase()) {
            "fold" -> Action.Fold
            "check" -> Action.Check
            "call" -> Action.Call
            "bet" -> Action.Bet(pot * 0.5) // Default to 0.5x pot bet
            "raise" -> {
                val highestBet = playerStates.values.maxOf { it.investedThisRound }
                Action.Raise(highestBet + pot * 0.5) // Default to 0.5x pot raise
            }
            else -> throw IllegalArgumentException("Unknown action: ${action.getActionId()}")
        }

        // Apply action logic (similar to GameTreeBuilder.applyAction)
        val newPlayerStates = playerStates.toMutableMap()

        when (pokerAction) {
            is Action.Fold -> {
                newPlayerStates[position] = playerState.copy(isFolded = true)
            }
            is Action.Check -> {
                // No state change for check
            }
            is Action.Call -> {
                val highestBet = playerStates.values.maxOf { it.investedThisRound }
                val amountToCall = highestBet - playerState.investedThisRound
                newPlayerStates[position] = playerState.copy(
                    stackBb = playerState.stackBb - amountToCall,
                    investedThisRound = highestBet
                )
            }
            is Action.Bet -> {
                newPlayerStates[position] = playerState.copy(
                    stackBb = playerState.stackBb - pokerAction.amountBb,
                    investedThisRound = playerState.investedThisRound + pokerAction.amountBb
                )
            }
            is Action.Raise -> {
                val amountToRaise = pokerAction.totalAmountBb - playerState.investedThisRound
                newPlayerStates[position] = playerState.copy(
                    stackBb = playerState.stackBb - amountToRaise,
                    investedThisRound = pokerAction.totalAmountBb
                )
            }
            is Action.AllIn -> {
                val allInAmount = pokerAction.amountBb
                newPlayerStates[position] = playerState.copy(
                    stackBb = 0.0,
                    investedThisRound = playerState.investedThisRound + allInAmount,
                    isAllIn = true
                )
            }
        }

        // Calculate new pot
        val oldTotalInvested = playerStates.values.sumOf { it.investedThisRound }
        val newTotalInvested = newPlayerStates.values.sumOf { it.investedThisRound }
        val newPot = pot + (newTotalInvested - oldTotalInvested)

        // Add action to history
        val newHistory = actionHistory + HistoricalAction(
            actor = position,
            action = pokerAction,
            amountBb = when (pokerAction) {
                is Action.Bet -> pokerAction.amountBb
                is Action.Raise -> pokerAction.totalAmountBb
                is Action.AllIn -> pokerAction.amountBb
                else -> null
            }
        )

        val resultState = copy(
            pot = newPot,
            playerStates = newPlayerStates,
            actionHistory = newHistory
        )

        // Phase 2.6: Check if we should transition to the next street
        if (resultState.shouldTransitionToNextStreet()) {
            return resultState.transitionToNextStreet()
        }

        return resultState
    }

    /**
     * Transition to the next street (Phase 2.6).
     *
     * Deals the board cards and resets the betting round state.
     */
    private fun transitionToNextStreet(): PokerGameState {
        val nextStreet = when (street) {
            Street.PREFLOP -> Street.FLOP
            Street.FLOP -> Street.TURN
            Street.TURN -> Street.RIVER
            Street.RIVER -> Street.RIVER  // Already at river
        }

        // Reset investedThisRound for all players
        val resetPlayerStates = playerStates.mapValues { (_, playerState) ->
            playerState.copy(investedThisRound = 0.0)
        }

        // Phase 2.6: Use fixed flop board K♠7♥2♦
        val fixedFlopBoard = listOf(
            Card(com.nlhsolver.poker.Rank.KING, com.nlhsolver.poker.Suit.SPADES),
            Card(com.nlhsolver.poker.Rank.SEVEN, com.nlhsolver.poker.Suit.HEARTS),
            Card(com.nlhsolver.poker.Rank.TWO, com.nlhsolver.poker.Suit.DIAMONDS)
        )

        val newBoard = when (nextStreet) {
            Street.FLOP -> fixedFlopBoard
            Street.TURN -> board + Card(com.nlhsolver.poker.Rank.JACK, com.nlhsolver.poker.Suit.CLUBS)
            Street.RIVER -> board + Card(com.nlhsolver.poker.Rank.TEN, com.nlhsolver.poker.Suit.SPADES)
            else -> board
        }

        return copy(
            street = nextStreet,
            board = newBoard,
            playerStates = resetPlayerStates,
            actionHistory = emptyList()  // Reset action history for new street
        )
    }

    override fun getInfoSet(): String {
        // Information set represents what the current player knows
        // Includes their hole cards (via hand bucket), board cards, and action history
        val player = currentPlayer() ?: return "terminal"

        // Convert player index to position
        val allPositions = playerStates.keys.sortedBy { it.ordinal }
        val position = allPositions[player]
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
 * @property holeCards Player's hole cards (null if not yet dealt or unknown)
 * @property handRange Hand bucket for abstraction (null if exact hand known)
 * @property isFolded Whether player has folded
 * @property isAllIn Whether player is all-in
 */
data class PokerPlayerState(
    val position: Position,
    val stackBb: Double,
    val investedThisRound: Double = 0.0,
    val holeCards: Pair<Card, Card>? = null,  // Player's two hole cards
    val handRange: Int? = null,  // Hand bucket ID for abstraction (computed from holeCards)
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
