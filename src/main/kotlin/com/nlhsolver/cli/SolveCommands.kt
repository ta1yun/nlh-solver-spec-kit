package com.nlhsolver.cli

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.subcommands
import com.github.ajalt.clikt.parameters.options.flag
import com.github.ajalt.clikt.parameters.options.option
import com.github.ajalt.clikt.parameters.options.required
import com.nlhsolver.solver.*
import com.nlhsolver.storage.ConfigurationRepository
import com.nlhsolver.storage.JobRepository
import java.util.UUID

/**
 * Solve command group (T073).
 *
 * Subcommands:
 * - run: Execute a solve job
 */
class SolveCommand : CliktCommand(
    name = "solve",
    help = "Execute poker solves"
) {
    init {
        subcommands(SolveRunCommand())
    }

    override fun run() {}
}

/**
 * Run a solve job (T073).
 */
class SolveRunCommand : CliktCommand(
    name = "run",
    help = "Execute a solve job"
) {
    private val configId by option("--config", help = "Configuration ID").required()
    private val json by option("--json", help = "Output in JSON format").flag()

    override fun run() {
        val configRepository = ConfigurationRepository()
        val jobRepository = JobRepository()
        val orchestrator = SolveOrchestrator()

        try {
            // Load configuration
            val id = UUID.fromString(configId)
            val config = configRepository.findById(id)

            if (config == null) {
                echo(OutputFormatter.formatError("Configuration not found: $configId"))
                return
            }

            echo("Starting solve for configuration: ${config.name}")
            echo("  Players: ${config.numPlayers}")
            echo("  Target Exploitability: ${config.convergenceCriteria.targetExploitability}%")
            echo("  Max Iterations: ${config.convergenceCriteria.maxIterations}")
            echo()

            // Create job
            val job = SolveJob(
                configurationId = id,
                status = JobStatus.PENDING,
                executionLocation = ExecutionLocation.LOCAL
            )

            jobRepository.save(job)
            echo("Job created: ${job.jobId}")
            echo()

            // Start job
            val runningJob = job.start()
            jobRepository.save(runningJob)

            // Execute solve with progress callback
            var lastProgressUpdate = System.currentTimeMillis()
            val result = orchestrator.solveSynchronous(config) { progress ->
                val now = System.currentTimeMillis()
                // Only print progress every 5 seconds
                if (now - lastProgressUpdate >= 5000) {
                    echo("Progress: ${progress.iterationsCompleted} iterations, " +
                            "exploitability = ${progress.currentExploitability?.let { "%.6f%%".format(it) } ?: "N/A"}")
                    lastProgressUpdate = now
                }
            }

            // Complete job
            val completedJob = runningJob.complete(result)
            jobRepository.save(completedJob)

            echo()
            echo("Solve completed!")
            echo()

            val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
            echo(OutputFormatter.formatJob(completedJob, format))
            echo()
            echo(OutputFormatter.formatSuccess("Solve completed: ${completedJob.jobId}"))
        } catch (e: Exception) {
            echo()
            echo(OutputFormatter.formatError(e.message ?: "Solve failed"))
            e.printStackTrace()
        }
    }
}
