package com.nlhsolver.solver

/**
 * Defines when a solve should terminate (T024).
 *
 * The solver will stop when either the target exploitability is reached,
 * the maximum number of iterations is exceeded, or the timeout is hit.
 *
 * @property targetExploitability Target exploitability as percentage of pot (0.01% to 5%)
 * @property maxIterations Maximum number of CFR+ iterations
 * @property evaluationFrequency How often to calculate full exploitability (in iterations)
 * @property timeoutHours Optional wall-clock time limit in hours
 */
data class ConvergenceCriteria(
    val targetExploitability: Double = 0.5,  // 0.5% of pot
    val maxIterations: Long = 5_000_000,
    val evaluationFrequency: Int = 10_000,
    val timeoutHours: Int? = null
) {
    init {
        require(targetExploitability in 0.01..5.0) {
            "Target exploitability must be between 0.01% and 5%"
        }
        require(maxIterations >= 1000) {
            "Maximum iterations must be at least 1000"
        }
        require(evaluationFrequency in 100..100_000) {
            "Evaluation frequency must be between 100 and 100,000"
        }
        timeoutHours?.let {
            require(it in 1..168) {
                "Timeout hours must be between 1 and 168 (7 days)"
            }
        }
    }
}
