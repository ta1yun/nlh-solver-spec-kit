package com.nlhsolver.common

/**
 * Domain-specific exceptions for the NLH Solver (T111).
 *
 * These exceptions provide clear error messages and help distinguish between
 * different types of failures in the system.
 */

/**
 * Base exception for all NLH Solver errors.
 */
open class NlhSolverException(
    message: String,
    cause: Throwable? = null
) : Exception(message, cause)

/**
 * Configuration validation errors.
 *
 * Thrown when a solve configuration fails validation (VR-001 through VR-013).
 */
class InvalidConfigurationException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)

/**
 * Solve execution errors.
 *
 * Thrown when a solve fails during execution (convergence issues, OOM, etc.).
 */
class SolveFailedException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)

/**
 * Strategy query errors.
 *
 * Thrown when a strategy query fails (strategy not found, invalid game state, etc.).
 */
class StrategyNotFoundException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)

/**
 * Storage/persistence errors.
 *
 * Thrown when reading/writing to storage fails.
 */
class StorageException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)

/**
 * Game tree construction errors.
 *
 * Thrown when game tree building fails.
 */
class GameTreeException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)

/**
 * Convergence errors.
 *
 * Thrown when CFR fails to converge within the specified criteria.
 */
class ConvergenceException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)

/**
 * Memory errors.
 *
 * Thrown when the solver runs out of memory during execution.
 */
class OutOfMemoryException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)

/**
 * Blueprint errors.
 *
 * Thrown when blueprint operations fail (not found, invalid, etc.).
 */
class BlueprintException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)

/**
 * Refinement errors.
 *
 * Thrown when refinement operations fail (blueprint not found, invalid board, etc.).
 */
class RefinementException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)

/**
 * Resource not found errors.
 *
 * Thrown when a requested resource (configuration, job, strategy, etc.) is not found.
 */
class ResourceNotFoundException(
    val resourceType: String,
    val resourceId: String
) : NlhSolverException("$resourceType not found: $resourceId")

/**
 * Invalid argument errors.
 *
 * Thrown when an argument fails validation.
 */
class InvalidArgumentException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)

/**
 * Job status errors.
 *
 * Thrown when an operation is attempted on a job in an invalid state.
 */
class InvalidJobStateException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)
/**
 * Invalid game state errors.
 *
 * Thrown when a game state is invalid for a given operation.
 */
class InvalidGameStateException(
    message: String,
    cause: Throwable? = null
) : NlhSolverException(message, cause)
