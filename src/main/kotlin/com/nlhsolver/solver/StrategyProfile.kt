package com.nlhsolver.solver

import java.time.Instant
import java.util.UUID

/**
 * Represents the complete solved strategy for all players (T030).
 *
 * A StrategyProfile contains the equilibrium (Nash or approximate Nash) strategy
 * computed by the CFR+ algorithm. It can be queried to get optimal play recommendations
 * for specific game states.
 *
 * @property strategyId Unique identifier for this strategy profile
 * @property solveJobId Reference to the solve job that created this strategy
 * @property exploitability Final exploitability of the strategy (% of pot)
 * @property createdAt Timestamp when strategy was created
 *
 * Note: The actual strategy data (Map<GameTreeNode, Map<Action, Probability>>) is stored
 * separately in Protocol Buffers files to handle large game trees efficiently.
 */
data class StrategyProfile(
    val strategyId: UUID = UUID.randomUUID(),
    val solveJobId: UUID,
    val exploitability: Double,
    val createdAt: Instant = Instant.now()
) {
    init {
        require(exploitability in 0.0..100.0) {
            "Exploitability must be between 0% and 100%"
        }
    }
}
