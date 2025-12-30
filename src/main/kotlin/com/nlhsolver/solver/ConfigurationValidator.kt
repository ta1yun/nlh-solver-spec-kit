package com.nlhsolver.solver

import com.nlhsolver.poker.Position

/**
 * Validates SolveConfiguration instances against all validation rules (T031).
 *
 * This validator ensures that configurations meet all requirements specified
 * in VR-001 through VR-005 from the data model specification.
 */
object ConfigurationValidator {

    /**
     * Validates a SolveConfiguration.
     *
     * @param config The configuration to validate
     * @return ValidationResult indicating success or failure with error messages
     */
    fun validate(config: SolveConfiguration): ValidationResult {
        val errors = mutableListOf<String>()

        // VR-001: Stack sizes map must have exactly numPlayers entries
        if (config.stackSizes.size != config.numPlayers) {
            errors.add("VR-001: Stack sizes must have exactly ${config.numPlayers} entries, but has ${config.stackSizes.size}")
        }

        // VR-002: All stack sizes must be positive and within [10bb, 500bb] range
        config.stackSizes.forEach { (position, stackSize) ->
            if (stackSize < 10.0 || stackSize > 500.0) {
                errors.add("VR-002: Stack size for $position must be between 10bb and 500bb, but is ${stackSize}bb")
            }
        }

        // VR-003: Starting position must be valid for the number of players
        if (!isPositionValidForPlayerCount(config.startingPosition, config.numPlayers)) {
            errors.add("VR-003: Starting position ${config.startingPosition} is not valid for ${config.numPlayers} players")
        }

        // VR-004: If maxIterations is set, must be > 1000
        if (config.convergenceCriteria.maxIterations <= 1000) {
            errors.add("VR-004: Maximum iterations must be > 1000, but is ${config.convergenceCriteria.maxIterations}")
        }

        // VR-005: Bet sizing scheme must contain at least 1 pot-relative multiplier and ALL_IN
        val hasPotRelative = config.betSizingScheme.sizes.any { it is BetSize.PotRelative }
        val hasAllIn = config.betSizingScheme.sizes.contains(BetSize.AllIn)

        if (!hasPotRelative) {
            errors.add("VR-005: Bet sizing scheme must contain at least one pot-relative multiplier")
        }
        if (!hasAllIn) {
            errors.add("VR-005: Bet sizing scheme must include ALL_IN")
        }

        return if (errors.isEmpty()) {
            ValidationResult.Success
        } else {
            ValidationResult.Failure(errors)
        }
    }

    /**
     * Checks if a position is valid for a given player count.
     */
    private fun isPositionValidForPlayerCount(position: Position, numPlayers: Int): Boolean {
        return when (numPlayers) {
            2 -> position in setOf(Position.BTN, Position.BB)
            3 -> position in setOf(Position.BTN, Position.SB, Position.BB)
            4 -> position in setOf(Position.BTN, Position.SB, Position.BB, Position.CO)
            5 -> position in setOf(Position.BTN, Position.SB, Position.BB, Position.MP, Position.CO)
            6 -> position in Position.values().toSet()  // All positions valid for 6-max
            else -> false
        }
    }
}

/**
 * Result of configuration validation.
 */
sealed class ValidationResult {
    /** Validation succeeded */
    object Success : ValidationResult()

    /** Validation failed with errors */
    data class Failure(val errors: List<String>) : ValidationResult()

    /**
     * Returns true if validation succeeded.
     */
    fun isValid(): Boolean = this is Success
}
