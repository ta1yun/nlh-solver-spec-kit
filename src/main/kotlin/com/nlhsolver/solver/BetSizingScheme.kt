package com.nlhsolver.solver

/**
 * Defines discretized bet sizing options (T025).
 *
 * Bet sizing schemes reduce the action space by limiting bet sizes to
 * predefined pot-relative multipliers. This is essential for making
 * No-Limit Hold'em trees computationally tractable.
 *
 * @property sizes List of allowed bet sizes (must include ALL_IN)
 * @property allowCustomSizes Whether to allow custom bet sizes
 */
data class BetSizingScheme(
    val sizes: List<BetSize> = listOf(
        BetSize.PotRelative(0.33),
        BetSize.PotRelative(0.5),
        BetSize.PotRelative(0.75),
        BetSize.PotRelative(1.0),
        BetSize.PotRelative(1.5),
        BetSize.AllIn
    ),
    val allowCustomSizes: Boolean = false
) {
    init {
        require(sizes.isNotEmpty()) { "Bet sizing scheme must have at least one size" }
        require(sizes.contains(BetSize.AllIn)) { "Bet sizing scheme must include ALL_IN" }

        // Validate no duplicate pot-relative multipliers
        val potRelativeMultipliers = sizes.filterIsInstance<BetSize.PotRelative>().map { it.multiplier }
        require(potRelativeMultipliers.size == potRelativeMultipliers.distinct().size) {
            "Duplicate pot-relative multipliers not allowed"
        }

        // Validate all multipliers are positive
        potRelativeMultipliers.forEach { multiplier ->
            require(multiplier > 0.0) { "Pot-relative multipliers must be positive" }
        }
    }
}

/**
 * Represents a bet size option in the discretized action space.
 */
sealed class BetSize {
    /**
     * Bet size relative to the current pot (e.g., 0.5 = 50% pot bet).
     */
    data class PotRelative(val multiplier: Double) : BetSize()

    /**
     * All-in bet (bet entire remaining stack).
     */
    object AllIn : BetSize()
}
