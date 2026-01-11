package com.nlhsolver.cli

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.subcommands
import com.github.ajalt.clikt.parameters.arguments.argument
import com.github.ajalt.clikt.parameters.options.flag
import com.github.ajalt.clikt.parameters.options.option
import com.nlhsolver.storage.JobRepository
import java.util.UUID

/**
 * Job command group (T074-T075).
 *
 * Subcommands:
 * - list: List all jobs
 * - status: Get job status
 */
class JobCommand : CliktCommand(
    name = "job",
    help = "Manage solve jobs"
) {
    init {
        subcommands(JobListCommand(), JobStatusCommand())
    }

    override fun run() {}
}

/**
 * List all jobs (T074).
 */
class JobListCommand : CliktCommand(
    name = "list",
    help = "List all jobs"
) {
    private val json by option("--json", help = "Output in JSON format").flag()
    private val status by option("--status", help = "Filter by status")

    override fun run() {
        val repository = JobRepository()

        try {
            val jobs = if (status != null) {
                val statusEnum = try {
                    com.nlhsolver.solver.JobStatus.valueOf(status!!.uppercase())
                } catch (e: IllegalArgumentException) {
                    echo(OutputFormatter.formatError("Invalid status: $status"))
                    return
                }
                repository.findByStatus(statusEnum)
            } else {
                repository.findAll()
            }

            if (jobs.isEmpty()) {
                echo("No jobs found")
                return
            }

            val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
            echo(OutputFormatter.formatList(
                items = jobs,
                title = "Jobs",
                formatter = { job ->
                    if (json) {
                        OutputFormatter.formatJob(job, format)
                    } else {
                        buildString {
                            appendLine("  ${job.jobId}")
                            appendLine("    Status: ${job.status}")
                            appendLine("    Config: ${job.configurationId}")
                            appendLine("    Iterations: ${job.progress.iterationsCompleted}")
                            job.result?.let {
                                appendLine("    Exploitability: ${"%.6f".format(it.finalExploitability)}%")
                            }
                        }
                    }
                },
                format = format
            ))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Failed to list jobs"))
        }
    }
}

/**
 * Get job status (T075).
 */
class JobStatusCommand : CliktCommand(
    name = "status",
    help = "Get job status"
) {
    private val jobId by argument(help = "Job ID")
    private val json by option("--json", help = "Output in JSON format").flag()
    private val watch by option("--watch", help = "Auto-refresh every 30s").flag()

    override fun run() {
        val repository = JobRepository()

        try {
            val id = UUID.fromString(jobId)

            if (watch) {
                // Watch mode - refresh every 30 seconds
                while (true) {
                    val job = repository.findById(id)

                    if (job == null) {
                        echo(OutputFormatter.formatError("Job not found: $jobId"))
                        return
                    }

                    // Clear screen (simple approach)
                    echo("\n".repeat(3))
                    echo("=== Job Status (refreshing every 30s, Ctrl+C to exit) ===")
                    echo()

                    val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
                    echo(OutputFormatter.formatJob(job, format))

                    // Stop watching if job is complete
                    if (job.status in listOf(
                            com.nlhsolver.solver.JobStatus.COMPLETED,
                            com.nlhsolver.solver.JobStatus.FAILED,
                            com.nlhsolver.solver.JobStatus.CANCELLED
                        )) {
                        echo()
                        echo("Job has finished. Exiting watch mode.")
                        break
                    }

                    Thread.sleep(30000)
                }
            } else {
                // Single status check
                val job = repository.findById(id)

                if (job == null) {
                    echo(OutputFormatter.formatError("Job not found: $jobId"))
                    return
                }

                val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
                echo(OutputFormatter.formatJob(job, format))
            }
        } catch (e: IllegalArgumentException) {
            echo(OutputFormatter.formatError("Invalid job ID: $jobId"))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Failed to get job status"))
        }
    }
}
