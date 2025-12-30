package com.nlhsolver.solver

import com.nlhsolver.core.InfoSetStrategy
import com.nlhsolver.core.StrategyProfile as CoreStrategyProfile
import java.util.UUID

/**
 * Extracts final strategy from CFR solver (T049).
 *
 * Converts the cumulative regrets and strategies from CFR into a
 * clean, usable strategy profile for querying and persistence.
 *
 * The actual strategy data is maintained in the CoreStrategyProfile
 * and will be persisted separately via Protocol Buffers.
 * This class creates the metadata entity (StrategyProfile) for tracking.
 */
class StrategyExtractor {
    /**
     * Extract the final strategy metadata from a CFR strategy profile.
     *
     * The actual strategy data remains in the CoreStrategyProfile and will be
     * persisted separately. This method creates the metadata entity.
     *
     * @param cfrStrategyProfile The strategy profile from CFR solver
     * @param solveJobId ID of the solve job that created this strategy
     * @param finalExploitability Final exploitability achieved
     * @return StrategyProfile metadata entity
     */
    fun extractStrategy(
        cfrStrategyProfile: CoreStrategyProfile,
        solveJobId: UUID,
        finalExploitability: Double
    ): StrategyProfile {
        return StrategyProfile(
            solveJobId = solveJobId,
            exploitability = finalExploitability
        )
    }

    /**
     * Extract strategy for a specific information set.
     *
     * @param cfrStrategyProfile The strategy profile from CFR solver
     * @param infoSet Information set identifier
     * @param actionLabels Labels for actions at this info set
     * @return Map of action to probability
     */
    fun extractInfoSetStrategy(
        cfrStrategyProfile: CoreStrategyProfile,
        infoSet: String,
        actionLabels: List<String>
    ): Map<String, Double> {
        val infoSetStrategy = cfrStrategyProfile.getAllInfoSets()
            .find { it.infoSet == infoSet }
            ?: return emptyMap()

        val avgStrategy = infoSetStrategy.getAverageStrategy()

        return actionLabels.mapIndexed { index, label ->
            label to (avgStrategy.getOrNull(index) ?: 0.0)
        }.toMap()
    }

    /**
     * Get statistics about the CFR strategy profile.
     *
     * @param cfrStrategyProfile Strategy profile to analyze
     * @return Map of statistic name to value
     */
    fun getStrategyStatistics(cfrStrategyProfile: CoreStrategyProfile): Map<String, Any> {
        return mapOf(
            "infoSetCount" to cfrStrategyProfile.size(),
            "totalVisits" to calculateTotalVisits(cfrStrategyProfile),
            "averageActionsPerInfoSet" to calculateAverageActions(cfrStrategyProfile)
        )
    }

    /**
     * Calculate total visits across all information sets.
     *
     * This gives a sense of how thoroughly the game tree was explored.
     *
     * @param cfrStrategyProfile The strategy profile from CFR solver
     * @return Total number of visits across all info sets
     */
    private fun calculateTotalVisits(cfrStrategyProfile: CoreStrategyProfile): Long {
        return cfrStrategyProfile.getAllInfoSets().sumOf { it.getVisitCount() }
    }

    /**
     * Calculate average number of actions per information set.
     */
    private fun calculateAverageActions(cfrStrategyProfile: CoreStrategyProfile): Double {
        val allInfoSets = cfrStrategyProfile.getAllInfoSets().toList()
        if (allInfoSets.isEmpty()) {
            return 0.0
        }

        val totalActions = allInfoSets.sumOf { it.numActions }
        return totalActions.toDouble() / allInfoSets.size
    }
}
