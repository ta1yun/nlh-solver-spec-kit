package com.nlhsolver.solver

import com.nlhsolver.poker.Position
import java.time.Instant
import java.util.UUID

/**
 * Represents the complete parameterization of a poker solve request (T023).
 *
 * This entity defines all the parameters needed to construct and solve a poker game tree,
 * including player configuration, stack sizes, convergence criteria, bet sizing schemes,
 * and hand abstraction strategies.
 *
 * @property configId Unique identifier for this configuration
 * @property name Human-readable name for this configuration
 * @property description Optional description of the solve scenario
 * @property numPlayers Number of players (2-6)
 * @property stackSizes Stack sizes in big blinds for each position
 * @property startingPosition The position that acts first
 * @property convergenceCriteria Criteria for when the solve should terminate
 * @property betSizingScheme Discretized bet sizing options
 * @property handAbstraction Hand bucketing strategy
 * @property createdAt Timestamp when this configuration was created
 * @property updatedAt Timestamp when this configuration was last modified
 */
data class SolveConfiguration(
    val configId: UUID = UUID.randomUUID(),
    val name: String = "Untitled Solve",
    val description: String? = null,
    val numPlayers: Int,
    val stackSizes: Map<Position, Double>,
    val startingPosition: Position,
    val convergenceCriteria: ConvergenceCriteria = ConvergenceCriteria(),
    val betSizingScheme: BetSizingScheme = BetSizingScheme(),
    val handAbstraction: HandAbstraction = HandAbstraction(),
    val createdAt: Instant = Instant.now(),
    val updatedAt: Instant = Instant.now()
) {
    init {
        require(name.length <= 100) { "Name must be at most 100 characters" }
        description?.let { require(it.length <= 500) { "Description must be at most 500 characters" } }
        require(numPlayers in 2..6) { "Number of players must be between 2 and 6" }
        require(stackSizes.size == numPlayers) { "Stack sizes must have exactly $numPlayers entries" }
        require(stackSizes.values.all { it in 10.0..500.0 }) { "All stack sizes must be between 10bb and 500bb" }
    }
}
