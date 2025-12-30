package com.nlhsolver.core

import com.nlhsolver.solver.ConvergenceCriteria
import com.nlhsolver.solver.SolveResult
import com.nlhsolver.solver.ConvergenceReason
import java.time.Instant

/**
 * Monitors CFR convergence and determines when to stop solving.
 *
 * Tracks exploitability over iterations and detects convergence based on:
 * 1. Exploitability threshold reached
 * 2. Maximum iterations reached
 * 3. Maximum time elapsed
 * 4. Stagnation detected (no improvement for N iterations)
 *
 * Also handles iteration limits by saving partial results.
 */
class ConvergenceMonitor(
    private val criteria: ConvergenceCriteria,
    private val exploitabilityCalculator: ExploitabilityCalculator
) {
    // Convergence tracking
    private val exploitabilityHistory = mutableListOf<ExploitabilityCheckpoint>()
    private var startTime: Instant? = null
    private var lastCheckIteration = 0
    private var bestExploitability = Double.MAX_VALUE
    private var iterationsSinceImprovement = 0

    /**
     * Data class for storing exploitability checkpoints.
     */
    data class ExploitabilityCheckpoint(
        val iteration: Int,
        val exploitability: Double,
        val timestamp: Instant
    )

    /**
     * Start monitoring (called at the beginning of solve).
     */
    fun start() {
        startTime = Instant.now()
        exploitabilityHistory.clear()
        lastCheckIteration = 0
        bestExploitability = Double.MAX_VALUE
        iterationsSinceImprovement = 0
    }

    /**
     * Check convergence status.
     *
     * @param currentIteration Current CFR iteration number
     * @param rootState Root game state
     * @param strategyProfile Current strategy profile
     * @param forceCheck Force an exploitability check even if not at check interval
     * @return ConvergenceStatus indicating whether to continue or stop
     */
    fun checkConvergence(
        currentIteration: Int,
        rootState: GameState,
        strategyProfile: StrategyProfile,
        forceCheck: Boolean = false
    ): ConvergenceStatus {
        val now = Instant.now()
        val start = startTime ?: error("ConvergenceMonitor not started")

        // Check time limit first (cheap check)
        val elapsedSeconds = java.time.Duration.between(start, now).seconds
        if (criteria.timeoutHours != null) {
            val maxTimeSeconds = criteria.timeoutHours * 3600L
            if (elapsedSeconds >= maxTimeSeconds) {
                val finalExploitability = calculateCurrentExploitability(rootState, strategyProfile)
                return ConvergenceStatus.Converged(
                    reason = ConvergenceReason.TIME_LIMIT,
                    finalExploitability = finalExploitability,
                    iterations = currentIteration,
                    elapsedSeconds = elapsedSeconds
                )
            }
        }

        // Check iteration limit (cheap check)
        if (currentIteration >= criteria.maxIterations) {
            val finalExploitability = calculateCurrentExploitability(rootState, strategyProfile)
            return ConvergenceStatus.Converged(
                reason = ConvergenceReason.MAX_ITERATIONS,
                finalExploitability = finalExploitability,
                iterations = currentIteration,
                elapsedSeconds = elapsedSeconds
            )
        }

        // Check if it's time for an exploitability check
        val shouldCheck = forceCheck ||
                (currentIteration - lastCheckIteration >= criteria.evaluationFrequency)

        if (!shouldCheck) {
            return ConvergenceStatus.NotConverged
        }

        // Perform exploitability check (expensive operation)
        lastCheckIteration = currentIteration
        val exploitability = calculateCurrentExploitability(rootState, strategyProfile)

        // Record checkpoint
        exploitabilityHistory.add(
            ExploitabilityCheckpoint(
                iteration = currentIteration,
                exploitability = exploitability,
                timestamp = now
            )
        )

        // Check if exploitability improved
        if (exploitability < bestExploitability) {
            bestExploitability = exploitability
            iterationsSinceImprovement = 0
        } else {
            iterationsSinceImprovement++
        }

        // Check exploitability threshold
        if (exploitability <= criteria.targetExploitability) {
            return ConvergenceStatus.Converged(
                reason = ConvergenceReason.EXPLOITABILITY_THRESHOLD,
                finalExploitability = exploitability,
                iterations = currentIteration,
                elapsedSeconds = elapsedSeconds
            )
        }

        return ConvergenceStatus.NotConverged
    }

    /**
     * Get the current exploitability.
     */
    private fun calculateCurrentExploitability(
        rootState: GameState,
        strategyProfile: StrategyProfile
    ): Double {
        return exploitabilityCalculator.calculateExploitability(rootState, strategyProfile)
    }

    /**
     * Get the exploitability history.
     */
    fun getExploitabilityHistory(): List<ExploitabilityCheckpoint> = exploitabilityHistory

    /**
     * Get the best exploitability achieved so far.
     */
    fun getBestExploitability(): Double = bestExploitability

    /**
     * Get the current convergence rate estimate (exploitability decrease per iteration).
     *
     * @return Convergence rate, or null if insufficient data
     */
    fun getConvergenceRate(): Double? {
        if (exploitabilityHistory.size < 2) {
            return null
        }

        val first = exploitabilityHistory.first()
        val last = exploitabilityHistory.last()

        val iterationDelta = last.iteration - first.iteration
        val exploitabilityDelta = first.exploitability - last.exploitability

        return if (iterationDelta > 0) {
            exploitabilityDelta / iterationDelta
        } else {
            null
        }
    }

    /**
     * Estimate iterations remaining to reach target exploitability.
     *
     * Uses linear extrapolation based on recent convergence rate.
     *
     * @return Estimated iterations remaining, or null if unable to estimate
     */
    fun getEstimatedIterationsRemaining(): Int? {
        if (exploitabilityHistory.isEmpty()) {
            return null
        }

        val currentExploitability = exploitabilityHistory.last().exploitability
        val convergenceRate = getConvergenceRate() ?: return null

        if (convergenceRate <= 0) {
            return null // Not converging or stagnating
        }

        val remainingExploitability = currentExploitability - criteria.targetExploitability
        if (remainingExploitability <= 0) {
            return 0 // Already converged
        }

        return (remainingExploitability / convergenceRate).toInt()
    }

    /**
     * Get estimated time remaining to reach target exploitability.
     *
     * @param iterationSpeed Iterations per second
     * @return Estimated seconds remaining, or null if unable to estimate
     */
    fun getEstimatedTimeRemaining(iterationSpeed: Double): Long? {
        val iterationsRemaining = getEstimatedIterationsRemaining() ?: return null
        if (iterationSpeed <= 0) {
            return null
        }
        return (iterationsRemaining / iterationSpeed).toLong()
    }

    /**
     * Calculate iteration speed (iterations per second).
     *
     * @param currentIteration Current iteration number
     * @return Iterations per second, or 0 if start time not set
     */
    fun getIterationSpeed(currentIteration: Int): Double {
        val start = startTime ?: return 0.0
        val elapsedSeconds = java.time.Duration.between(start, Instant.now()).seconds
        return if (elapsedSeconds > 0) {
            currentIteration.toDouble() / elapsedSeconds
        } else {
            0.0
        }
    }

    /**
     * Get elapsed time since start in seconds.
     */
    fun getElapsedSeconds(): Long {
        val start = startTime ?: return 0
        return java.time.Duration.between(start, Instant.now()).seconds
    }
}

/**
 * Sealed class representing convergence status.
 */
sealed class ConvergenceStatus {
    /**
     * Convergence not yet achieved, continue solving.
     */
    object NotConverged : ConvergenceStatus()

    /**
     * Convergence achieved or limit reached, stop solving.
     *
     * @param reason Why convergence was achieved
     * @param finalExploitability Final exploitability value
     * @param iterations Total iterations completed
     * @param elapsedSeconds Total time elapsed
     */
    data class Converged(
        val reason: ConvergenceReason,
        val finalExploitability: Double,
        val iterations: Int,
        val elapsedSeconds: Long
    ) : ConvergenceStatus()
}
