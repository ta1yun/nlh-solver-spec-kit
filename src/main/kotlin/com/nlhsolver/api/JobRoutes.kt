package com.nlhsolver.api

import com.nlhsolver.solver.*
import com.nlhsolver.storage.ConfigurationRepository
import com.nlhsolver.storage.JobRepository
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.util.UUID

/**
 * REST API routes for solve jobs (T064-T066).
 *
 * Endpoints:
 * - POST /api/v1/jobs - Submit a new solve job
 * - GET /api/v1/jobs - List all jobs
 * - GET /api/v1/jobs/{id} - Get a specific job
 */
fun Route.jobRoutes(
    jobRepository: JobRepository,
    solveOrchestrator: SolveOrchestrator,
    configRepository: ConfigurationRepository
) {
    route("/jobs") {
        // POST /api/v1/jobs - Submit solve job
        post {
            val request = call.receive<SubmitJobRequest>()

            val configId = UUID.fromString(request.configurationId)

            // Verify configuration exists
            val configuration = configRepository.findById(configId)
            if (configuration == null) {
                call.respond(
                    HttpStatusCode.NotFound,
                    ErrorResponse("CONFIG_NOT_FOUND", "Configuration $configId not found")
                )
                return@post
            }

            // Create job
            val job = SolveJob(
                configurationId = configId,
                status = JobStatus.PENDING,
                executionLocation = ExecutionLocation.LOCAL // MVP only supports local
            )

            // Save job
            jobRepository.save(job)

            // Start solve (synchronous for MVP)
            // In User Story 3, this would be async
            try {
                // Update job to RUNNING
                val runningJob = job.start()
                jobRepository.save(runningJob)

                // Execute solve
                val result = solveOrchestrator.solveSynchronous(configuration)

                // Update job to COMPLETED
                val completedJob = runningJob.complete(result)
                jobRepository.save(completedJob)

                call.respond(HttpStatusCode.Created, toResponse(completedJob))
            } catch (e: Exception) {
                // Update job to FAILED
                val errorInfo = ErrorInfo.computationError(
                    message = e.message ?: "Unknown error",
                    stackTrace = e.stackTraceToString()
                )
                val failedJob = job.fail(errorInfo)
                jobRepository.save(failedJob)

                call.respond(
                    HttpStatusCode.InternalServerError,
                    ErrorResponse("SOLVE_FAILED", e.message ?: "Solve failed")
                )
            }
        }

        // GET /api/v1/jobs - List all jobs
        get {
            val status = call.request.queryParameters["status"]?.let {
                try {
                    JobStatus.valueOf(it.uppercase())
                } catch (e: IllegalArgumentException) {
                    null
                }
            }

            val jobs = if (status != null) {
                jobRepository.findByStatus(status)
            } else {
                jobRepository.findAll()
            }

            call.respond(jobs.map { toResponse(it) })
        }

        // GET /api/v1/jobs/{id} - Get specific job
        get("/{id}") {
            val id = call.parameters["id"]?.let { UUID.fromString(it) }
                ?: run {
                    call.respond(
                        HttpStatusCode.BadRequest,
                        ErrorResponse("INVALID_ID", "Invalid job ID")
                    )
                    return@get
                }

            val job = jobRepository.findById(id)
            if (job == null) {
                call.respond(
                    HttpStatusCode.NotFound,
                    ErrorResponse("NOT_FOUND", "Job not found")
                )
                return@get
            }

            call.respond(toResponse(job))
        }
    }
}

/**
 * Request body for submitting a job.
 */
@kotlinx.serialization.Serializable
data class SubmitJobRequest(
    val configurationId: String
)

/**
 * Response format for job.
 */
@kotlinx.serialization.Serializable
data class JobResponse(
    val jobId: String,
    val configurationId: String,
    val status: String,
    val progress: JobProgressResponse,
    val result: JobResultResponse? = null,
    val error: JobErrorResponse? = null,
    val createdAt: String,
    val startedAt: String? = null,
    val completedAt: String? = null,
    val executionLocation: String
)

@kotlinx.serialization.Serializable
data class JobProgressResponse(
    val iterationsCompleted: Long,
    val currentExploitability: Double? = null,
    val estimatedIterationsRemaining: Long? = null,
    val estimatedTimeRemainingSeconds: Long? = null,
    val lastUpdatedAt: String
)

@kotlinx.serialization.Serializable
data class JobResultResponse(
    val strategyProfileId: String,
    val finalExploitability: Double,
    val iterationsRun: Long,
    val converged: Boolean,
    val completionType: String,
    val executionTimeSeconds: Long,
    val storagePathPb: String
)

@kotlinx.serialization.Serializable
data class JobErrorResponse(
    val errorCode: String,
    val message: String,
    val stackTrace: String? = null,
    val isRetriable: Boolean
)

/**
 * Convert domain entity to API response.
 */
private fun toResponse(job: SolveJob): JobResponse {
    return JobResponse(
        jobId = job.jobId.toString(),
        configurationId = job.configurationId.toString(),
        status = job.status.name,
        progress = JobProgressResponse(
            iterationsCompleted = job.progress.iterationsCompleted,
            currentExploitability = job.progress.currentExploitability,
            estimatedIterationsRemaining = job.progress.estimatedIterationsRemaining,
            estimatedTimeRemainingSeconds = job.progress.estimatedTimeRemainingSeconds,
            lastUpdatedAt = job.progress.lastUpdatedAt.toString()
        ),
        result = job.result?.let {
            JobResultResponse(
                strategyProfileId = it.strategyProfileId.toString(),
                finalExploitability = it.finalExploitability,
                iterationsRun = it.iterationsRun,
                converged = it.converged,
                completionType = it.completionType.name,
                executionTimeSeconds = it.executionTimeSeconds,
                storagePathPb = it.storagePathPb.toString()
            )
        },
        error = job.error?.let {
            JobErrorResponse(
                errorCode = it.errorCode,
                message = it.message,
                stackTrace = it.stackTrace,
                isRetriable = it.isRetriable
            )
        },
        createdAt = job.createdAt.toString(),
        startedAt = job.startedAt?.toString(),
        completedAt = job.completedAt?.toString(),
        executionLocation = job.executionLocation.name
    )
}
