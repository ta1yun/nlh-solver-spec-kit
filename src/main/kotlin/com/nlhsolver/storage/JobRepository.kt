package com.nlhsolver.storage

import com.nlhsolver.proto.JobProto.*
import com.nlhsolver.solver.*
import java.io.FileInputStream
import java.io.FileOutputStream
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.time.Instant
import java.util.UUID
import java.util.zip.GZIPInputStream
import java.util.zip.GZIPOutputStream

/**
 * Repository for persisting and retrieving SolveJob entities (T054).
 *
 * Uses Protocol Buffers with gzip compression for efficient storage.
 * Jobs are stored in data/jobs/ directory.
 */
class JobRepository(
    private val storageDir: Path = Paths.get("data/jobs")
) {
    init {
        // Ensure storage directory exists
        Files.createDirectories(storageDir)
    }

    /**
     * Save a job to disk.
     *
     * @param job The job to save
     * @return The saved job
     */
    fun save(job: SolveJob): SolveJob {
        val pb = toProtobuf(job)
        val filePath = getFilePath(job.jobId)

        // Write with gzip compression
        FileOutputStream(filePath.toFile()).use { fileOut ->
            GZIPOutputStream(fileOut).use { gzipOut ->
                pb.writeTo(gzipOut)
            }
        }

        return job
    }

    /**
     * Find a job by ID.
     *
     * @param jobId Job UUID
     * @return The job, or null if not found
     */
    fun findById(jobId: UUID): SolveJob? {
        val filePath = getFilePath(jobId)
        if (!Files.exists(filePath)) {
            return null
        }

        return try {
            FileInputStream(filePath.toFile()).use { fileIn ->
                GZIPInputStream(fileIn).use { gzipIn ->
                    val pb = SolveJobPb.parseFrom(gzipIn)
                    fromProtobuf(pb)
                }
            }
        } catch (e: Exception) {
            null
        }
    }

    /**
     * Find all jobs.
     *
     * @return List of all jobs
     */
    fun findAll(): List<SolveJob> {
        return Files.list(storageDir)
            .filter { it.toString().endsWith(".pb.gz") }
            .map { path ->
                FileInputStream(path.toFile()).use { fileIn ->
                    GZIPInputStream(fileIn).use { gzipIn ->
                        val pb = SolveJobPb.parseFrom(gzipIn)
                        fromProtobuf(pb)
                    }
                }
            }
            .toList()
    }

    /**
     * Find jobs by status.
     *
     * @param status Job status to filter by
     * @return List of jobs with the given status
     */
    fun findByStatus(status: JobStatus): List<SolveJob> {
        return findAll().filter { it.status == status }
    }

    /**
     * Delete a job.
     *
     * @param jobId Job UUID
     * @return true if deleted, false if not found
     */
    fun delete(jobId: UUID): Boolean {
        val filePath = getFilePath(jobId)
        return try {
            Files.deleteIfExists(filePath)
        } catch (e: Exception) {
            false
        }
    }

    /**
     * Check if a job exists.
     *
     * @param jobId Job UUID
     * @return true if exists, false otherwise
     */
    fun exists(jobId: UUID): Boolean {
        return Files.exists(getFilePath(jobId))
    }

    /**
     * Get file path for a job ID.
     */
    private fun getFilePath(jobId: UUID): Path {
        return storageDir.resolve("$jobId.pb.gz")
    }

    /**
     * Convert SolveJob to Protocol Buffers.
     */
    private fun toProtobuf(job: SolveJob): SolveJobPb {
        val builder = SolveJobPb.newBuilder()
            .setJobId(job.jobId.toString())
            .setConfigurationId(job.configurationId.toString())
            .setStatus(toProtobuf(job.status))
            .setProgress(toProtobuf(job.progress))
            .setCreatedAtEpochMillis(job.createdAt.toEpochMilli())
            .setStartedAtEpochMillis(job.startedAt?.toEpochMilli() ?: 0)
            .setExecutionLocation(toProtobuf(job.executionLocation))

        job.completedAt?.let { builder.setCompletedAtEpochMillis(it.toEpochMilli()) }
        job.result?.let { builder.setResult(toProtobuf(it)) }
        job.error?.let { builder.setError(toProtobuf(it)) }

        return builder.build()
    }

    /**
     * Convert Protocol Buffers to SolveJob.
     */
    private fun fromProtobuf(pb: SolveJobPb): SolveJob {
        return SolveJob(
            jobId = UUID.fromString(pb.jobId),
            configurationId = UUID.fromString(pb.configurationId),
            status = fromProtobuf(pb.status),
            progress = fromProtobuf(pb.progress),
            result = if (pb.hasResult()) fromProtobuf(pb.result) else null,
            error = if (pb.hasError()) fromProtobuf(pb.error) else null,
            createdAt = Instant.ofEpochMilli(pb.createdAtEpochMillis),
            startedAt = if (pb.startedAtEpochMillis > 0) Instant.ofEpochMilli(pb.startedAtEpochMillis) else null,
            completedAt = if (pb.hasCompletedAtEpochMillis()) Instant.ofEpochMilli(pb.completedAtEpochMillis) else null,
            executionLocation = fromProtobuf(pb.executionLocation)
        )
    }

    private fun toProtobuf(status: JobStatus): JobStatusPb {
        return when (status) {
            JobStatus.PENDING -> JobStatusPb.PENDING
            JobStatus.RUNNING -> JobStatusPb.RUNNING
            JobStatus.COMPLETED -> JobStatusPb.COMPLETED
            JobStatus.FAILED -> JobStatusPb.FAILED
            JobStatus.PARTIAL -> JobStatusPb.PARTIAL
            JobStatus.CANCELLED -> JobStatusPb.CANCELLED
        }
    }

    private fun fromProtobuf(pb: JobStatusPb): JobStatus {
        return when (pb) {
            JobStatusPb.PENDING -> JobStatus.PENDING
            JobStatusPb.RUNNING -> JobStatus.RUNNING
            JobStatusPb.COMPLETED -> JobStatus.COMPLETED
            JobStatusPb.FAILED -> JobStatus.FAILED
            JobStatusPb.PARTIAL -> JobStatus.PARTIAL
            JobStatusPb.CANCELLED -> JobStatus.CANCELLED
            else -> JobStatus.PENDING // Default fallback
        }
    }

    private fun toProtobuf(progress: JobProgress): JobProgressPb {
        val builder = JobProgressPb.newBuilder()
            .setIterationsCompleted(progress.iterationsCompleted)
            .setLastUpdatedAtEpochMillis(progress.lastUpdatedAt.toEpochMilli())

        progress.currentExploitability?.let { builder.setCurrentExploitability(it) }
        progress.estimatedIterationsRemaining?.let { builder.setEstimatedIterationsRemaining(it) }
        progress.estimatedTimeRemainingSeconds?.let { builder.setEstimatedTimeRemainingSeconds(it) }

        return builder.build()
    }

    private fun fromProtobuf(pb: JobProgressPb): JobProgress {
        return JobProgress(
            iterationsCompleted = pb.iterationsCompleted,
            currentExploitability = if (pb.hasCurrentExploitability()) pb.currentExploitability else null,
            estimatedIterationsRemaining = if (pb.hasEstimatedIterationsRemaining()) pb.estimatedIterationsRemaining else null,
            estimatedTimeRemainingSeconds = if (pb.hasEstimatedTimeRemainingSeconds()) pb.estimatedTimeRemainingSeconds else null,
            lastUpdatedAt = Instant.ofEpochMilli(pb.lastUpdatedAtEpochMillis)
        )
    }

    private fun toProtobuf(result: SolveResult): SolveResultPb {
        return SolveResultPb.newBuilder()
            .setStrategyProfileId(result.strategyProfileId.toString())
            .setFinalExploitability(result.finalExploitability)
            .setIterationsRun(result.iterationsRun)
            .setConverged(result.converged)
            .setCompletionType(toProtobuf(result.completionType))
            .setExecutionTimeSeconds(result.executionTimeSeconds)
            .setStoragePathPb(result.storagePathPb.toString())
            .build()
    }

    private fun fromProtobuf(pb: SolveResultPb): SolveResult {
        return SolveResult(
            strategyProfileId = UUID.fromString(pb.strategyProfileId),
            finalExploitability = pb.finalExploitability,
            iterationsRun = pb.iterationsRun,
            converged = pb.converged,
            completionType = fromProtobuf(pb.completionType),
            executionTimeSeconds = pb.executionTimeSeconds,
            storagePathPb = Paths.get(pb.storagePathPb)
        )
    }

    private fun toProtobuf(type: CompletionType): CompletionTypePb {
        return when (type) {
            CompletionType.CONVERGED -> CompletionTypePb.CONVERGED
            CompletionType.ITERATION_LIMIT -> CompletionTypePb.ITERATION_LIMIT
            CompletionType.TIMEOUT -> CompletionTypePb.TIMEOUT
        }
    }

    private fun fromProtobuf(pb: CompletionTypePb): CompletionType {
        return when (pb) {
            CompletionTypePb.CONVERGED -> CompletionType.CONVERGED
            CompletionTypePb.ITERATION_LIMIT -> CompletionType.ITERATION_LIMIT
            CompletionTypePb.TIMEOUT -> CompletionType.TIMEOUT
            else -> CompletionType.TIMEOUT // Default fallback
        }
    }

    private fun toProtobuf(error: ErrorInfo): ErrorInfoPb {
        val builder = ErrorInfoPb.newBuilder()
            .setErrorCode(error.errorCode)
            .setMessage(error.message)
            .setIsRetriable(error.isRetriable)

        error.stackTrace?.let { builder.setStackTrace(it) }

        return builder.build()
    }

    private fun fromProtobuf(pb: ErrorInfoPb): ErrorInfo {
        return ErrorInfo(
            errorCode = pb.errorCode,
            message = pb.message,
            stackTrace = if (pb.hasStackTrace()) pb.stackTrace else null,
            isRetriable = pb.isRetriable
        )
    }

    private fun toProtobuf(location: ExecutionLocation): ExecutionLocationPb {
        return when (location) {
            ExecutionLocation.LOCAL -> ExecutionLocationPb.LOCAL
            ExecutionLocation.REMOTE -> ExecutionLocationPb.REMOTE
        }
    }

    private fun fromProtobuf(pb: ExecutionLocationPb): ExecutionLocation {
        return when (pb) {
            ExecutionLocationPb.LOCAL -> ExecutionLocation.LOCAL
            ExecutionLocationPb.REMOTE -> ExecutionLocation.REMOTE
            else -> ExecutionLocation.LOCAL // Default fallback
        }
    }
}
