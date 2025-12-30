package com.nlhsolver.solver

import com.nlhsolver.core.*
import com.nlhsolver.poker.Card
import java.nio.file.Path
import java.nio.file.Paths
import java.time.Instant
import java.util.UUID

/**
 * Orchestrates the end-to-end solve process (T047-T048).
 *
 * Coordinates:
 * 1. Game tree construction from configuration
 * 2. CFR+ execution with convergence monitoring
 * 3. Strategy extraction and persistence
 *
 * Supports both synchronous (blocking) and asynchronous execution.
 */
class SolveOrchestrator(
    private val strategyExtractor: StrategyExtractor = StrategyExtractor()
) {
    /**
     * Execute a solve synchronously (blocking until completion).
     *
     * This is the main entry point for User Story 1 (MVP).
     *
     * @param configuration Solve configuration parameters
     * @param progressCallback Optional callback for progress updates
     * @return SolveResult with final strategy and metrics
     */
    fun solveSynchronous(
        configuration: SolveConfiguration,
        progressCallback: ((JobProgress) -> Unit)? = null
    ): SolveResult {
        // Validate configuration
        val validationResult = ConfigurationValidator.validate(configuration)
        if (validationResult is ValidationResult.Failure) {
            throw IllegalArgumentException("Invalid configuration: ${validationResult.errors.joinToString(", ")}")
        }

        // Create CFR solver
        val cfrSolver = CFRSolver(
            numPlayers = configuration.numPlayers,
            enableCFRPlus = true,  // Always use CFR+ for MVP
            regretDiscountFactor = 1.0  // No discounting (validated)
        )

        // Create exploitability calculator
        val exploitabilityCalculator = ExploitabilityCalculator(configuration.numPlayers)

        // Create convergence monitor
        val convergenceMonitor = ConvergenceMonitor(
            criteria = configuration.convergenceCriteria,
            exploitabilityCalculator = exploitabilityCalculator
        )

        // Build game tree for all starting scenarios
        // For heads-up, we need to solve for all possible preflop situations
        // For simplicity in MVP, we'll start with a single representative scenario
        val rootState = createInitialGameState(configuration)

        // Start convergence monitoring
        convergenceMonitor.start()

        var currentIteration = 0
        var converged = false
        var convergenceStatus: ConvergenceStatus = ConvergenceStatus.NotConverged

        // Main CFR iteration loop
        while (!converged) {
            currentIteration++

            // Run one CFR iteration
            cfrSolver.train(rootState, iterations = 1)

            // Check convergence (this is expensive, so only done at intervals)
            convergenceStatus = convergenceMonitor.checkConvergence(
                currentIteration = currentIteration,
                rootState = rootState,
                strategyProfile = cfrSolver.getStrategyProfile()
            )

            // Update progress callback if provided
            if (currentIteration % 1000 == 0) {
                val iterationSpeed = convergenceMonitor.getIterationSpeed(currentIteration)
                val estimatedTimeRemaining = convergenceMonitor.getEstimatedTimeRemaining(iterationSpeed)

                progressCallback?.invoke(
                    JobProgress(
                        iterationsCompleted = currentIteration.toLong(),
                        currentExploitability = convergenceMonitor.getBestExploitability(),
                        estimatedIterationsRemaining = convergenceMonitor.getEstimatedIterationsRemaining()?.toLong(),
                        estimatedTimeRemainingSeconds = estimatedTimeRemaining
                    )
                )
            }

            // Check if converged
            if (convergenceStatus is ConvergenceStatus.Converged) {
                converged = true
            }
        }

        // Create solve result
        val finalStatus = convergenceStatus as ConvergenceStatus.Converged
        val jobId = UUID.randomUUID()

        // Extract final strategy metadata
        val strategyProfile = strategyExtractor.extractStrategy(
            cfrStrategyProfile = cfrSolver.getStrategyProfile(),
            solveJobId = jobId,
            finalExploitability = finalStatus.finalExploitability
        )

        return SolveResult(
            strategyProfileId = strategyProfile.strategyId,
            finalExploitability = finalStatus.finalExploitability,
            iterationsRun = finalStatus.iterations.toLong(),
            converged = finalStatus.finalExploitability <= configuration.convergenceCriteria.targetExploitability,
            completionType = finalStatus.reason.toCompletionType(),
            executionTimeSeconds = finalStatus.elapsedSeconds,
            storagePathPb = Paths.get("data/strategies/${strategyProfile.strategyId}.pb.gz")
        )
    }

    /**
     * Create the initial game state from configuration.
     *
     * For MVP (heads-up), this creates a simple starting state.
     * In the future, this would iterate over all preflop scenarios.
     *
     * @param configuration Solve configuration
     * @return Root game state
     */
    private fun createInitialGameState(configuration: SolveConfiguration): GameState {
        // For MVP, create a simple representative root state
        // This would be expanded to cover all preflop scenarios in production

        // Build game tree
        val gameTreeBuilder = GameTreeBuilder(configuration)
        val gameTree = gameTreeBuilder.buildTree()

        // Convert GameTreeNode to GameState
        return gameTree.rootNode.gameState
    }

    /**
     * Estimate solve time based on configuration.
     *
     * This is a rough estimate based on empirical data.
     *
     * @param configuration Solve configuration
     * @return Estimated solve time in seconds
     */
    fun estimateSolveTime(configuration: SolveConfiguration): Long {
        // Rough estimate: 1000 iterations per second on average hardware
        // This would be calibrated with actual benchmarks
        val iterationsPerSecond = 1000.0
        val estimatedIterations = configuration.convergenceCriteria.maxIterations

        return (estimatedIterations / iterationsPerSecond).toLong()
    }

    /**
     * Validate that a configuration can be solved.
     *
     * @param configuration Solve configuration
     * @return ValidationResult indicating success or failure
     */
    fun validateConfiguration(configuration: SolveConfiguration): ValidationResult {
        return ConfigurationValidator.validate(configuration)
    }
}

/**
 * Represents progress during a solve execution.
 *
 * Used for callbacks and monitoring.
 */
data class SolveProgress(
    val iterationsCompleted: Long,
    val currentExploitability: Double?,
    val estimatedIterationsRemaining: Long?,
    val iterationSpeed: Double,
    val elapsedSeconds: Long
)
