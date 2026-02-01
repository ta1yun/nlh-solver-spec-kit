package com.nlhsolver.common

import org.slf4j.Logger
import org.slf4j.LoggerFactory

/**
 * Logging utilities for structured logging (T117).
 *
 * Provides:
 * - Easy logger access via logger() extension function
 * - Structured logging helpers for common events
 * - Performance-aware logging (lazy evaluation)
 *
 * Usage:
 * ```kotlin
 * class MySolver {
 *     private val logger = logger()
 *
 *     fun solve() {
 *         logger.info("Starting solve", "jobId" to jobId, "iterations" to maxIters)
 *         logger.debug { "Expensive debug: ${computeExpensiveDebugInfo()}" }
 *     }
 * }
 * ```
 */

/**
 * Get a logger for the calling class.
 *
 * Uses the class name automatically for logger naming.
 */
inline fun <reified T : Any> T.logger(): Logger {
    return LoggerFactory.getLogger(T::class.java)
}

/**
 * Log with structured key-value pairs.
 *
 * Example:
 * ```
 * logger.info("Solve completed", "jobId" to id, "iterations" to count, "exploitability" to exp)
 * ```
 */
fun Logger.info(message: String, vararg pairs: Pair<String, Any?>) {
    if (isInfoEnabled) {
        val structured = pairs.joinToString(", ") { (k, v) -> "$k=$v" }
        info("$message [$structured]")
    }
}

/**
 * Log debug with structured key-value pairs.
 */
fun Logger.debug(message: String, vararg pairs: Pair<String, Any?>) {
    if (isDebugEnabled) {
        val structured = pairs.joinToString(", ") { (k, v) -> "$k=$v" }
        debug("$message [$structured]")
    }
}

/**
 * Log warning with structured key-value pairs.
 */
fun Logger.warn(message: String, vararg pairs: Pair<String, Any?>) {
    if (isWarnEnabled) {
        val structured = pairs.joinToString(", ") { (k, v) -> "$k=$v" }
        warn("$message [$structured]")
    }
}

/**
 * Log error with structured key-value pairs.
 */
fun Logger.error(message: String, cause: Throwable? = null, vararg pairs: Pair<String, Any?>) {
    if (isErrorEnabled) {
        val structured = pairs.joinToString(", ") { (k, v) -> "$k=$v" }
        if (cause != null) {
            error("$message [$structured]", cause)
        } else {
            error("$message [$structured]")
        }
    }
}

/**
 * Lazy debug logging - only evaluates block if debug is enabled.
 *
 * Use for expensive debug operations:
 * ```
 * logger.debug { "Expensive: ${strategy.toDebugString()}" }
 * ```
 */
inline fun Logger.debug(block: () -> String) {
    if (isDebugEnabled) {
        debug(block())
    }
}

/**
 * Lazy trace logging - only evaluates block if trace is enabled.
 */
inline fun Logger.trace(block: () -> String) {
    if (isTraceEnabled) {
        trace(block())
    }
}

/**
 * Log solve start event with standardized format.
 */
fun Logger.logSolveStart(jobId: String, numPlayers: Int, maxIterations: Int, abstraction: String = "NONE") {
    info(
        "Solve started",
        "jobId" to jobId,
        "players" to numPlayers,
        "maxIter" to maxIterations,
        "abstraction" to abstraction
    )
}

/**
 * Log solve completion event with standardized format.
 */
fun Logger.logSolveComplete(
    jobId: String,
    iterations: Long,
    exploitability: Double,
    durationSeconds: Long,
    converged: Boolean
) {
    info(
        "Solve completed",
        "jobId" to jobId,
        "iterations" to iterations,
        "exploitability" to String.format("%.4f", exploitability),
        "duration" to "${durationSeconds}s",
        "converged" to converged
    )
}

/**
 * Log API request with standardized format.
 */
fun Logger.logApiRequest(
    method: String,
    path: String,
    statusCode: Int,
    durationMs: Long
) {
    info(
        "API request",
        "method" to method,
        "path" to path,
        "status" to statusCode,
        "duration" to "${durationMs}ms"
    )
}

/**
 * Log memory usage with standardized format.
 */
fun Logger.logMemoryUsage(context: String = "current") {
    val stats = MemoryGuard.getMemoryStats()
    info("Memory usage [$context]: $stats")
}
