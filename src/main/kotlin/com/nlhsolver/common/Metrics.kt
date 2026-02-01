package com.nlhsolver.common

import java.time.Instant
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicLong

/**
 * Performance metrics collection for the NLH Solver (T118).
 *
 * Tracks:
 * - Solve time per job
 * - Memory usage
 * - Iteration speed
 * - Active jobs count
 * - API request counts and latencies
 *
 * Thread-safe for concurrent access.
 */
object Metrics {
    private val solveMetrics = ConcurrentHashMap<String, SolveMetrics>()
    private val apiMetrics = ConcurrentHashMap<String, ApiMetrics>()
    private val activeJobs = AtomicLong(0)
    private val totalSolves = AtomicLong(0)
    private val failedSolves = AtomicLong(0)

    /**
     * Record the start of a solve job.
     */
    fun recordSolveStart(jobId: String) {
        activeJobs.incrementAndGet()
        totalSolves.incrementAndGet()
        solveMetrics[jobId] = SolveMetrics(
            jobId = jobId,
            startTime = Instant.now()
        )
    }

    /**
     * Record the completion of a solve job.
     */
    fun recordSolveComplete(
        jobId: String,
        exploitability: Double,
        iterations: Int,
        success: Boolean = true
    ) {
        activeJobs.decrementAndGet()
        if (!success) {
            failedSolves.incrementAndGet()
        }

        solveMetrics[jobId]?.let { metrics ->
            val endTime = Instant.now()
            val durationSeconds = java.time.Duration.between(metrics.startTime, endTime).seconds

            solveMetrics[jobId] = metrics.copy(
                endTime = endTime,
                durationSeconds = durationSeconds,
                exploitability = exploitability,
                iterations = iterations,
                success = success
            )
        }
    }

    /**
     * Record an API request.
     */
    fun recordApiRequest(endpoint: String, durationMs: Long, statusCode: Int) {
        val metrics = apiMetrics.getOrPut(endpoint) { ApiMetrics(endpoint) }
        metrics.recordRequest(durationMs, statusCode)
    }

    /**
     * Get current memory usage in MB.
     */
    fun getMemoryUsageMB(): Long {
        val runtime = Runtime.getRuntime()
        val usedMemory = runtime.totalMemory() - runtime.freeMemory()
        return usedMemory / (1024 * 1024)
    }

    /**
     * Get max memory available in MB.
     */
    fun getMaxMemoryMB(): Long {
        return Runtime.getRuntime().maxMemory() / (1024 * 1024)
    }

    /**
     * Get current memory usage percentage.
     */
    fun getMemoryUsagePercent(): Double {
        val runtime = Runtime.getRuntime()
        val usedMemory = runtime.totalMemory() - runtime.freeMemory()
        val maxMemory = runtime.maxMemory()
        return (usedMemory.toDouble() / maxMemory.toDouble()) * 100.0
    }

    /**
     * Get active jobs count.
     */
    fun getActiveJobsCount(): Long = activeJobs.get()

    /**
     * Get total solves count.
     */
    fun getTotalSolvesCount(): Long = totalSolves.get()

    /**
     * Get failed solves count.
     */
    fun getFailedSolvesCount(): Long = failedSolves.get()

    /**
     * Get success rate.
     */
    fun getSuccessRate(): Double {
        val total = totalSolves.get()
        return if (total > 0) {
            ((total - failedSolves.get()).toDouble() / total.toDouble()) * 100.0
        } else {
            100.0
        }
    }

    /**
     * Get average solve time in seconds.
     */
    fun getAverageSolveTimeSeconds(): Double {
        val completedSolves = solveMetrics.values.filter { it.endTime != null }
        return if (completedSolves.isNotEmpty()) {
            completedSolves.map { it.durationSeconds ?: 0 }.average()
        } else {
            0.0
        }
    }

    /**
     * Get recent solve metrics.
     */
    fun getRecentSolves(limit: Int = 10): List<SolveMetrics> {
        return solveMetrics.values
            .sortedByDescending { it.startTime }
            .take(limit)
    }

    /**
     * Get API metrics summary.
     */
    fun getApiMetricsSummary(): Map<String, ApiMetricsSummary> {
        return apiMetrics.mapValues { (_, metrics) -> metrics.getSummary() }
    }

    /**
     * Reset all metrics (useful for testing).
     */
    fun reset() {
        solveMetrics.clear()
        apiMetrics.clear()
        activeJobs.set(0)
        totalSolves.set(0)
        failedSolves.set(0)
    }
}

/**
 * Metrics for a single solve job.
 */
data class SolveMetrics(
    val jobId: String,
    val startTime: Instant,
    val endTime: Instant? = null,
    val durationSeconds: Long? = null,
    val exploitability: Double? = null,
    val iterations: Int? = null,
    val success: Boolean? = null
)

/**
 * Metrics for an API endpoint.
 */
class ApiMetrics(val endpoint: String) {
    private val requestCount = AtomicLong(0)
    private val totalLatencyMs = AtomicLong(0)
    private val errorCount = AtomicLong(0)

    fun recordRequest(durationMs: Long, statusCode: Int) {
        requestCount.incrementAndGet()
        totalLatencyMs.addAndGet(durationMs)
        if (statusCode >= 400) {
            errorCount.incrementAndGet()
        }
    }

    fun getSummary(): ApiMetricsSummary {
        val requests = requestCount.get()
        return ApiMetricsSummary(
            endpoint = endpoint,
            requestCount = requests,
            averageLatencyMs = if (requests > 0) totalLatencyMs.get() / requests else 0,
            errorCount = errorCount.get(),
            errorRate = if (requests > 0) (errorCount.get().toDouble() / requests.toDouble()) * 100.0 else 0.0
        )
    }
}

/**
 * Summary of API metrics for an endpoint.
 */
data class ApiMetricsSummary(
    val endpoint: String,
    val requestCount: Long,
    val averageLatencyMs: Long,
    val errorCount: Long,
    val errorRate: Double
)
