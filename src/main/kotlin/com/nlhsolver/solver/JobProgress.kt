package com.nlhsolver.solver

import java.time.Instant

/**
 * Tracks solve progress in real-time (T028).
 *
 * This entity provides status information during solve execution,
 * including iteration count, current exploitability, and time estimates.
 *
 * @property iterationsCompleted Number of CFR+ iterations completed
 * @property currentExploitability Latest exploitability measurement (% of pot)
 * @property estimatedIterationsRemaining Estimated iterations until convergence
 * @property estimatedTimeRemainingSeconds Estimated seconds until completion
 * @property lastUpdatedAt Timestamp of last update
 */
data class JobProgress(
    val iterationsCompleted: Long = 0,
    val currentExploitability: Double? = null,
    val estimatedIterationsRemaining: Long? = null,
    val estimatedTimeRemainingSeconds: Long? = null,
    val lastUpdatedAt: Instant = Instant.now()
) {
    init {
        require(iterationsCompleted >= 0) {
            "Iterations completed must be non-negative"
        }
        currentExploitability?.let {
            require(it in 0.0..100.0) {
                "Current exploitability must be between 0% and 100%"
            }
        }
        estimatedIterationsRemaining?.let {
            require(it >= 0) {
                "Estimated iterations remaining must be non-negative"
            }
        }
        estimatedTimeRemainingSeconds?.let {
            require(it >= 0) {
                "Estimated time remaining must be non-negative"
            }
        }
    }
}
