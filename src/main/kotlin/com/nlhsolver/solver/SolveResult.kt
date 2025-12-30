package com.nlhsolver.solver

import java.nio.file.Path
import java.util.UUID

/**
 * Contains solve outcome information (T029).
 *
 * This entity encapsulates the final results of a solve job, including
 * the strategy profile, convergence metrics, and execution statistics.
 *
 * @property strategyProfileId Reference to the computed strategy profile
 * @property finalExploitability Final exploitability achieved (% of pot)
 * @property iterationsRun Total number of iterations executed
 * @property converged Whether the solve converged to target exploitability
 * @property completionType How the solve terminated
 * @property executionTimeSeconds Total execution time in seconds
 * @property storagePathPb File path to the persisted Protocol Buffers strategy file
 */
data class SolveResult(
    val strategyProfileId: UUID,
    val finalExploitability: Double,
    val iterationsRun: Long,
    val converged: Boolean,
    val completionType: CompletionType,
    val executionTimeSeconds: Long,
    val storagePathPb: Path
) {
    init {
        require(finalExploitability in 0.0..100.0) {
            "Final exploitability must be between 0% and 100%"
        }
        require(iterationsRun > 0) {
            "Iterations run must be positive"
        }
        require(executionTimeSeconds > 0) {
            "Execution time must be positive"
        }

        // VR-013: converged = true implies completionType = CONVERGED
        if (converged) {
            require(completionType == CompletionType.CONVERGED) {
                "Converged jobs must have CONVERGED completion type"
            }
        }

        // VR-014: converged = false implies completionType in {ITERATION_LIMIT, TIMEOUT}
        if (!converged) {
            require(completionType == CompletionType.ITERATION_LIMIT || completionType == CompletionType.TIMEOUT) {
                "Non-converged jobs must have ITERATION_LIMIT or TIMEOUT completion type"
            }
        }
    }
}

/**
 * How the solve terminated.
 */
enum class CompletionType {
    /** Solve converged to target exploitability */
    CONVERGED,

    /** Solve reached maximum iteration limit */
    ITERATION_LIMIT,

    /** Solve reached timeout limit */
    TIMEOUT
}

/**
 * Detailed reason for convergence or termination.
 *
 * Maps to CompletionType for persistence, but provides
 * more granular information during solving.
 */
enum class ConvergenceReason {
    /** Exploitability reached target threshold */
    EXPLOITABILITY_THRESHOLD,

    /** Maximum iterations reached */
    MAX_ITERATIONS,

    /** Time limit exceeded */
    TIME_LIMIT,

    /** Convergence stagnated (no improvement) */
    STAGNATION;

    /**
     * Convert to CompletionType for SolveResult.
     */
    fun toCompletionType(): CompletionType = when (this) {
        EXPLOITABILITY_THRESHOLD -> CompletionType.CONVERGED
        MAX_ITERATIONS -> CompletionType.ITERATION_LIMIT
        TIME_LIMIT -> CompletionType.TIMEOUT
        STAGNATION -> CompletionType.CONVERGED // Treat stagnation as converged
    }
}
