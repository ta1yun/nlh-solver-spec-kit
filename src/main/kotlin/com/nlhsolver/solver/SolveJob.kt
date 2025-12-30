package com.nlhsolver.solver

import java.time.Instant
import java.util.UUID

/**
 * Represents an active, queued, or completed solve request (T027).
 *
 * A SolveJob tracks the lifecycle of a solve execution from creation through completion.
 * It maintains status, progress, results, and error information.
 *
 * @property jobId Unique identifier for this job
 * @property configurationId Foreign key to the SolveConfiguration
 * @property status Current status of the job
 * @property progress Real-time progress information
 * @property result Solve results (populated on COMPLETED/PARTIAL)
 * @property error Error information (populated on FAILED)
 * @property createdAt Timestamp when job was created
 * @property startedAt Timestamp when job started running
 * @property completedAt Timestamp when job reached terminal state
 * @property submittedBy User identifier (for future authentication)
 * @property executionLocation Where the job is executed (local or remote)
 */
data class SolveJob(
    val jobId: UUID = UUID.randomUUID(),
    val configurationId: UUID,
    val status: JobStatus,
    val progress: JobProgress = JobProgress(),
    val result: SolveResult? = null,
    val error: ErrorInfo? = null,
    val createdAt: Instant = Instant.now(),
    val startedAt: Instant? = null,
    val completedAt: Instant? = null,
    val submittedBy: String = "system",
    val executionLocation: ExecutionLocation = ExecutionLocation.LOCAL
) {
    init {
        startedAt?.let {
            require(!it.isBefore(createdAt)) {
                "startedAt must be >= createdAt"
            }
        }

        completedAt?.let {
            require(startedAt != null) {
                "completedAt requires startedAt to be set"
            }
            require(!it.isBefore(startedAt)) {
                "completedAt must be >= startedAt"
            }
        }

        // VR-011: result must be non-null when status is COMPLETED or PARTIAL
        if (status == JobStatus.COMPLETED || status == JobStatus.PARTIAL) {
            require(result != null) {
                "Result must be provided for COMPLETED or PARTIAL jobs"
            }
        }

        // VR-012: error must be non-null when status is FAILED
        if (status == JobStatus.FAILED) {
            require(error != null) {
                "Error must be provided for FAILED jobs"
            }
        }
    }

    /**
     * Creates a new job in PENDING status.
     */
    companion object {
        fun create(configurationId: UUID, executionLocation: ExecutionLocation = ExecutionLocation.LOCAL): SolveJob {
            return SolveJob(
                configurationId = configurationId,
                status = JobStatus.PENDING,
                executionLocation = executionLocation
            )
        }
    }

    /**
     * Transitions job to RUNNING status.
     */
    fun start(): SolveJob {
        require(status == JobStatus.PENDING) {
            "Can only start jobs in PENDING status"
        }
        return copy(
            status = JobStatus.RUNNING,
            startedAt = Instant.now()
        )
    }

    /**
     * Transitions job to COMPLETED status with results.
     */
    fun complete(result: SolveResult): SolveJob {
        require(status == JobStatus.RUNNING) {
            "Can only complete jobs in RUNNING status"
        }
        return copy(
            status = JobStatus.COMPLETED,
            result = result,
            completedAt = Instant.now()
        )
    }

    /**
     * Transitions job to PARTIAL status (max iterations reached without full convergence).
     */
    fun partial(result: SolveResult): SolveJob {
        require(status == JobStatus.RUNNING) {
            "Can only mark jobs as partial when in RUNNING status"
        }
        return copy(
            status = JobStatus.PARTIAL,
            result = result,
            completedAt = Instant.now()
        )
    }

    /**
     * Transitions job to FAILED status with error information.
     */
    fun fail(error: ErrorInfo): SolveJob {
        require(status == JobStatus.RUNNING || status == JobStatus.PENDING) {
            "Can only fail jobs in RUNNING or PENDING status"
        }
        return copy(
            status = JobStatus.FAILED,
            error = error,
            completedAt = Instant.now()
        )
    }

    /**
     * Transitions job to CANCELLED status.
     */
    fun cancel(): SolveJob {
        require(status == JobStatus.PENDING || status == JobStatus.RUNNING) {
            "Can only cancel jobs in PENDING or RUNNING status"
        }
        return copy(
            status = JobStatus.CANCELLED,
            completedAt = Instant.now()
        )
    }

    /**
     * Updates job progress.
     */
    fun updateProgress(progress: JobProgress): SolveJob {
        require(status == JobStatus.RUNNING) {
            "Can only update progress for jobs in RUNNING status"
        }
        return copy(progress = progress)
    }
}

/**
 * Status of a solve job.
 */
enum class JobStatus {
    /** Job is queued but not yet running */
    PENDING,

    /** Job is currently executing */
    RUNNING,

    /** Job completed successfully and converged to target exploitability */
    COMPLETED,

    /** Job reached iteration limit without full convergence but has partial results */
    PARTIAL,

    /** Job failed due to an error */
    FAILED,

    /** Job was cancelled by user */
    CANCELLED
}

/**
 * Where the job is executed.
 */
enum class ExecutionLocation {
    /** Execute on local machine */
    LOCAL,

    /** Execute on remote server/cloud */
    REMOTE
}
