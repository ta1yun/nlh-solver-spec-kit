package com.nlhsolver.solver

import com.nlhsolver.core.GameStateHash
import com.nlhsolver.core.PokerGameState
import com.nlhsolver.core.StrategyProfile as CoreStrategyProfile
import com.nlhsolver.poker.Action
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.PostflopBucketing
import com.nlhsolver.poker.PreflopBuckets
import com.nlhsolver.poker.PreflopBuckets.PreflopHand
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Street
import com.nlhsolver.poker.Suit
import com.nlhsolver.storage.StrategyRepository
import java.util.UUID

/**
 * Service for querying solved strategies (T057, T059).
 *
 * Provides an interface to look up optimal play recommendations
 * for specific game states from a solved strategy profile.
 *
 * Includes validation to ensure queried game states are compatible
 * with the original solve configuration.
 */
class StrategyQueryService(
    private val strategyRepository: StrategyRepository = StrategyRepository()
) {
    /**
     * Query the strategy for a specific game state.
     *
     * Returns the optimal action probabilities for the current player
     * at the given game state.
     *
     * @param strategyId Strategy profile UUID
     * @param gameState Game state to query
     * @return Strategy query result with action probabilities
     * @throws StrategyNotFoundException if strategy doesn't exist
     * @throws InvalidGameStateException if game state is invalid for this strategy
     */
    fun query(strategyId: UUID, gameState: PokerGameState): StrategyQueryResult {
        // Load strategy metadata
        val strategyProfile = strategyRepository.findById(strategyId)
            ?: throw StrategyNotFoundException("Strategy $strategyId not found")

        // Load full strategy data
        val coreStrategyProfile = strategyRepository.loadStrategyData(strategyId)
            ?: throw StrategyNotFoundException("Strategy data for $strategyId not found")

        // Validate game state
        validateGameState(gameState)

        // Get information set for this game state
        val infoSet = gameState.getInfoSet()

        // Look up strategy for this info set
        val infoSetStrategy = coreStrategyProfile.getAllInfoSets()
            .find { it.infoSet == infoSet }

        if (infoSetStrategy == null) {
            // Info set not found - might be an unvisited state or invalid query
            return StrategyQueryResult(
                gameStateHash = GameStateHash.hash(gameState),
                infoSet = infoSet,
                actionProbabilities = emptyMap(),
                recommendations = emptyList(),
                exploitability = strategyProfile.exploitability,
                found = false
            )
        }

        // Get average strategy (Nash equilibrium approximation)
        val avgStrategy = infoSetStrategy.getAverageStrategy()

        // Get legal actions for this game state
        val legalActions = gameState.getLegalActions()

        // Map probabilities to action names
        val actionProbabilities = legalActions.mapIndexed { index, action ->
            action.getActionId() to (avgStrategy.getOrNull(index) ?: 0.0)
        }.toMap()

        // Generate recommendations (sorted by probability)
        val recommendations = actionProbabilities.entries
            .sortedByDescending { it.value }
            .map { (action, prob) ->
                ActionRecommendation(
                    action = action,
                    probability = prob,
                    expectedValue = null // Would need additional computation
                )
            }

        return StrategyQueryResult(
            gameStateHash = GameStateHash.hash(gameState),
            infoSet = infoSet,
            actionProbabilities = actionProbabilities,
            recommendations = recommendations,
            exploitability = strategyProfile.exploitability,
            found = true
        )
    }

    /**
     * Query the best action for a game state (highest probability).
     *
     * @param strategyId Strategy profile UUID
     * @param gameState Game state to query
     * @return Best action recommendation
     * @throws StrategyNotFoundException if strategy doesn't exist
     */
    fun queryBestAction(strategyId: UUID, gameState: PokerGameState): ActionRecommendation? {
        val result = query(strategyId, gameState)
        return result.recommendations.firstOrNull()
    }

    /**
     * Validate that a game state is valid for strategy queries.
     *
     * Checks:
     * - Game state is not terminal
     * - Game state has a current player
     * - Game state has legal actions available
     *
     * @param gameState Game state to validate
     * @throws InvalidGameStateException if validation fails
     */
    private fun validateGameState(gameState: PokerGameState) {
        // Check if terminal
        if (gameState.isTerminal()) {
            throw InvalidGameStateException("Cannot query strategy for terminal game state")
        }

        // Check if has current player
        if (gameState.currentPlayer() == null) {
            throw InvalidGameStateException("Game state must have a current player")
        }

        // Check if has legal actions
        if (gameState.getLegalActions().isEmpty()) {
            throw InvalidGameStateException("Game state must have legal actions available")
        }
    }

    /**
     * Query the strategy for a canonical hand (T203, T219).
     *
     * This is the Phase 2.5 upgrade that allows querying by hand notation
     * like "AKs", "QQ", "72o" instead of requiring specific cards.
     *
     * Phase 2.6 adds support for flop queries with board specification.
     *
     * @param strategyId Strategy profile UUID
     * @param handNotation Canonical hand notation (e.g., "AKs", "QQ", "72o")
     * @param position Position to query (BTN or BB for heads-up)
     * @param street Street to query (PREFLOP or FLOP)
     * @param board Board cards for flop queries (K♠7♥2♦ format or empty for preflop)
     * @return Aggregated strategy result for the canonical hand
     * @throws StrategyNotFoundException if strategy doesn't exist
     * @throws IllegalArgumentException if hand notation is invalid
     */
    fun queryByCanonicalHand(
        strategyId: UUID,
        handNotation: String,
        position: Position = Position.BTN,
        street: com.nlhsolver.poker.Street = com.nlhsolver.poker.Street.PREFLOP,
        board: List<com.nlhsolver.poker.Card> = emptyList()
    ): CanonicalHandQueryResult {
        // Parse hand notation
        val hand = try {
            PreflopHand.fromNotation(handNotation)
        } catch (e: Exception) {
            throw IllegalArgumentException("Invalid hand notation: $handNotation. Use format like 'AKs', 'QQ', '72o'")
        }

        // Get bucket ID for this hand - use appropriate bucketing for the street
        val bucketId = if (street == Street.PREFLOP) {
            PreflopBuckets.getBucketId(hand)
        } else {
            // For postflop, convert to representative cards and use equity-based bucketing
            val cards = handToRepresentativeCards(hand, board)
            PostflopBucketing(numBuckets = 200).getBucket(cards, board, street)
        }

        // Load strategy data
        if (!strategyRepository.exists(strategyId)) {
            throw StrategyNotFoundException("Strategy $strategyId not found")
        }

        val coreStrategyProfile = strategyRepository.loadStrategyData(strategyId)
            ?: throw StrategyNotFoundException("Strategy data for $strategyId not found")

        // Build board string for matching (must match PokerGameState.getInfoSet() format)
        val boardStr = if (board.isNotEmpty()) {
            board.joinToString(",") { "${it.rank}${it.suit}" }
        } else {
            ""
        }

        // Find all info sets for this bucket at the specified street
        // Info sets are formatted like: "p0:bucket=X:street=PREFLOP:board=:..."
        // Player index is determined by Position ordinal sort: BB (ordinal 2) < BTN (ordinal 0) is false
        // Sorted positions = [BTN, BB] for preflop, [BB, BTN] for postflop (BB acts first)
        // For heads-up postflop: p0 = BB, p1 = BTN
        val playerIndex = if (position == Position.BTN) 1 else 0
        val matchingInfoSets = coreStrategyProfile.getAllInfoSets()
            .filter { infoSet ->
                infoSet.infoSet.contains("p$playerIndex:") &&
                infoSet.infoSet.contains("bucket=$bucketId:") &&
                infoSet.infoSet.contains("street=$street") &&
                (street == com.nlhsolver.poker.Street.PREFLOP || infoSet.infoSet.contains("board=$boardStr"))
            }
            .toList()

        if (matchingInfoSets.isEmpty()) {
            return CanonicalHandQueryResult(
                handNotation = hand.notation,
                position = position,
                bucketId = bucketId,
                actionProbabilities = emptyMap(),
                found = false,
                infoSetsMatched = 0,
                street = street,
                board = board
            )
        }

        // Aggregate strategies across all matching info sets
        // Weight by visit count to get the overall strategy
        val aggregatedProbabilities = mutableMapOf<String, Double>()
        var totalWeight = 0L

        for (infoSet in matchingInfoSets) {
            val avgStrategy = infoSet.getAverageStrategy()
            val visitCount = infoSet.getVisitCount()
            totalWeight += visitCount

            // Determine action names based on the info set's game state
            // Parse history to see if there's an unresponded bet
            val actionNames = getActionNamesForInfoSet(infoSet.infoSet, infoSet.numActions)

            for ((index, prob) in avgStrategy.withIndex()) {
                if (index < actionNames.size) {
                    val action = actionNames[index]
                    aggregatedProbabilities[action] = (aggregatedProbabilities[action] ?: 0.0) + prob * visitCount
                }
            }
        }

        // Normalize probabilities
        if (totalWeight > 0) {
            for (action in aggregatedProbabilities.keys.toList()) {
                aggregatedProbabilities[action] = aggregatedProbabilities[action]!! / totalWeight
            }
        }

        return CanonicalHandQueryResult(
            handNotation = hand.notation,
            position = position,
            bucketId = bucketId,
            actionProbabilities = aggregatedProbabilities,
            found = true,
            infoSetsMatched = matchingInfoSets.size,
            street = street,
            board = board
        )
    }

    /**
     * Query all 169 canonical hands to get the full range at any street (T219).
     *
     * @param strategyId Strategy profile UUID
     * @param position Position to query
     * @param street Street to query (PREFLOP or FLOP)
     * @param board Board cards for flop queries
     * @return Map of hand notation to action probabilities
     */
    fun queryFullRange(
        strategyId: UUID,
        position: Position = Position.BTN,
        street: com.nlhsolver.poker.Street = com.nlhsolver.poker.Street.PREFLOP,
        board: List<com.nlhsolver.poker.Card> = emptyList()
    ): Map<String, CanonicalHandQueryResult> {
        return PreflopBuckets.allHands.associate { hand ->
            hand.notation to queryByCanonicalHand(strategyId, hand.notation, position, street, board)
        }
    }

    /**
     * Get statistics about a strategy profile.
     *
     * @param strategyId Strategy profile UUID
     * @return Strategy statistics
     * @throws StrategyNotFoundException if strategy doesn't exist
     */
    fun getStrategyStatistics(strategyId: UUID): StrategyStatistics {
        val strategyProfile = strategyRepository.findById(strategyId)
            ?: throw StrategyNotFoundException("Strategy $strategyId not found")

        val coreStrategyProfile = strategyRepository.loadStrategyData(strategyId)
            ?: throw StrategyNotFoundException("Strategy data for $strategyId not found")

        val infoSets = coreStrategyProfile.getAllInfoSets().toList()

        return StrategyStatistics(
            strategyId = strategyId,
            infoSetCount = infoSets.size,
            totalVisits = infoSets.sumOf { it.getVisitCount() },
            averageActionsPerInfoSet = if (infoSets.isNotEmpty()) {
                infoSets.sumOf { it.numActions }.toDouble() / infoSets.size
            } else {
                0.0
            },
            exploitability = strategyProfile.exploitability
        )
    }

    /**
     * Determine action names based on the info set string.
     *
     * Parses the history in the info set to determine if there's an unresponded bet:
     * - If facing a bet: actions are [fold, call, raise?]
     * - If not facing a bet: actions are [check, bet, raise?]
     *
     * Info set format: "p0:bucket=X:street=Y:board=...:pot=Z:history=..."
     * History format: "BTN:CHECK|BB:BET:1.0|BTN:CALL" etc.
     */
    private fun getActionNamesForInfoSet(infoSetStr: String, numActions: Int): List<String> {
        // Parse the history from the info set
        val historyPart = infoSetStr.substringAfter("history=", "")

        // Check if there's an unresponded bet/raise in the history
        val facingBet = if (historyPart.isNotEmpty()) {
            val actions = historyPart.split("|")
            val lastAction = actions.lastOrNull() ?: ""
            // If last action contains BET or RAISE, we're facing a bet
            lastAction.contains("BET") || lastAction.contains("RAISE")
        } else {
            false
        }

        // Determine action names based on game state
        return if (facingBet) {
            // Facing a bet: fold, call, [raise]
            when (numActions) {
                2 -> listOf("fold", "call")
                3 -> listOf("fold", "call", "raise")
                4 -> listOf("fold", "call", "raise", "allin")
                else -> (0 until numActions).map { "action$it" }
            }
        } else {
            // Not facing a bet: check, bet, [raise]
            when (numActions) {
                1 -> listOf("check")
                2 -> listOf("check", "bet")
                3 -> listOf("check", "bet", "raise")
                4 -> listOf("check", "bet", "raise", "allin")
                else -> (0 until numActions).map { "action$it" }
            }
        }
    }

    /**
     * Convert a PreflopHand notation to representative cards, avoiding board conflicts.
     *
     * @param hand The canonical hand (e.g., AKs, QQ, 72o)
     * @param board Board cards to avoid
     * @return A pair of cards representing this hand
     */
    private fun handToRepresentativeCards(hand: PreflopHand, board: List<Card>): Pair<Card, Card> {
        val boardCards = board.toSet()
        val suits = listOf(Suit.SPADES, Suit.HEARTS, Suit.DIAMONDS, Suit.CLUBS)

        // For pairs (e.g., AA, KK)
        if (hand.highRank == hand.lowRank) {
            // Find two suits that don't conflict with the board
            val availableSuits = suits.filter { suit ->
                Card(hand.highRank, suit) !in boardCards
            }
            require(availableSuits.size >= 2) {
                "Cannot create representative cards for ${hand.notation} - too many board conflicts"
            }
            return Pair(
                Card(hand.highRank, availableSuits[0]),
                Card(hand.highRank, availableSuits[1])
            )
        }

        // For suited hands (e.g., AKs)
        if (hand.suitedness == PreflopBuckets.Suitedness.SUITED) {
            // Find a suit where both cards don't conflict with the board
            for (suit in suits) {
                val highCard = Card(hand.highRank, suit)
                val lowCard = Card(hand.lowRank, suit)
                if (highCard !in boardCards && lowCard !in boardCards) {
                    return Pair(highCard, lowCard)
                }
            }
            throw IllegalArgumentException(
                "Cannot create representative cards for ${hand.notation} - all suits conflict with board"
            )
        }

        // For offsuit hands (e.g., AKo, 72o)
        // Use different suits, avoiding board conflicts
        for (highSuit in suits) {
            val highCard = Card(hand.highRank, highSuit)
            if (highCard in boardCards) continue

            for (lowSuit in suits) {
                if (lowSuit == highSuit) continue  // Must be different suits for offsuit
                val lowCard = Card(hand.lowRank, lowSuit)
                if (lowCard !in boardCards) {
                    return Pair(highCard, lowCard)
                }
            }
        }

        throw IllegalArgumentException(
            "Cannot create representative cards for ${hand.notation} - too many board conflicts"
        )
    }
}

/**
 * Result of a strategy query.
 */
data class StrategyQueryResult(
    val gameStateHash: String,
    val infoSet: String,
    val actionProbabilities: Map<String, Double>,
    val recommendations: List<ActionRecommendation>,
    val exploitability: Double,
    val found: Boolean
)

/**
 * Action recommendation with probability and expected value.
 */
data class ActionRecommendation(
    val action: String,
    val probability: Double,
    val expectedValue: Double? = null
)

/**
 * Statistics about a strategy profile.
 */
data class StrategyStatistics(
    val strategyId: UUID,
    val infoSetCount: Int,
    val totalVisits: Long,
    val averageActionsPerInfoSet: Double,
    val exploitability: Double
)

/**
 * Exception thrown when a strategy is not found.
 */
class StrategyNotFoundException(message: String) : Exception(message)

/**
 * Exception thrown when a game state is invalid for querying.
 */
class InvalidGameStateException(message: String) : Exception(message)

/**
 * Result of a canonical hand query (Phase 2.5, T219).
 *
 * @property handNotation The canonical hand notation (e.g., "AKs")
 * @property position Position queried
 * @property bucketId The preflop bucket ID (0-168)
 * @property actionProbabilities Map of action to probability
 * @property found Whether any info sets were found for this hand
 * @property infoSetsMatched Number of info sets that matched
 * @property street The street queried (PREFLOP, FLOP, etc.)
 * @property board The board cards (empty for preflop)
 */
data class CanonicalHandQueryResult(
    val handNotation: String,
    val position: Position,
    val bucketId: Int,
    val actionProbabilities: Map<String, Double>,
    val found: Boolean,
    val infoSetsMatched: Int,
    val street: com.nlhsolver.poker.Street = com.nlhsolver.poker.Street.PREFLOP,
    val board: List<com.nlhsolver.poker.Card> = emptyList()
) {
    /**
     * Get the open-raise frequency (bet/raise probability).
     */
    val raiseFrequency: Double
        get() = (actionProbabilities["bet"] ?: 0.0) + (actionProbabilities["raise"] ?: 0.0)

    /**
     * Get the call frequency.
     */
    val callFrequency: Double
        get() = actionProbabilities["call"] ?: 0.0

    /**
     * Get the fold frequency.
     */
    val foldFrequency: Double
        get() = actionProbabilities["fold"] ?: 0.0

    /**
     * Get the check frequency.
     */
    val checkFrequency: Double
        get() = actionProbabilities["check"] ?: 0.0
}
