package com.nlhsolver.solver

import com.nlhsolver.core.GameStateHash
import com.nlhsolver.core.PokerGameState
import com.nlhsolver.core.StrategyProfile as CoreStrategyProfile
import com.nlhsolver.poker.Action
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
