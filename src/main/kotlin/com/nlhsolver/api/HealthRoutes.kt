package com.nlhsolver.api

import com.nlhsolver.common.Metrics
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.lang.management.ManagementFactory

/**
 * REST API routes for health checks (T068, T119).
 *
 * Endpoints:
 * - GET /api/v1/health - Health check with system status, active jobs, and metrics
 */
fun Route.healthRoutes() {
    get("/health") {
        val runtime = Runtime.getRuntime()
        val runtimeMXBean = ManagementFactory.getRuntimeMXBean()
        val threadMXBean = ManagementFactory.getThreadMXBean()

        val healthResponse = mapOf(
            "status" to "UP",
            "version" to "1.0.0-MVP",
            "timestamp" to System.currentTimeMillis(),
            "uptime" to mapOf(
                "milliseconds" to runtimeMXBean.uptime,
                "human" to formatUptime(runtimeMXBean.uptime)
            ),
            "memory" to mapOf(
                "totalMB" to runtime.totalMemory() / (1024 * 1024),
                "freeMB" to runtime.freeMemory() / (1024 * 1024),
                "usedMB" to Metrics.getMemoryUsageMB(),
                "maxMB" to Metrics.getMaxMemoryMB(),
                "usagePercent" to String.format("%.1f", Metrics.getMemoryUsagePercent())
            ),
            "jobs" to mapOf(
                "active" to Metrics.getActiveJobsCount(),
                "totalCompleted" to Metrics.getTotalSolvesCount(),
                "failed" to Metrics.getFailedSolvesCount(),
                "successRate" to String.format("%.1f%%", Metrics.getSuccessRate()),
                "averageSolveTimeSeconds" to String.format("%.1f", Metrics.getAverageSolveTimeSeconds())
            ),
            "threads" to mapOf(
                "current" to threadMXBean.threadCount,
                "peak" to threadMXBean.peakThreadCount,
                "daemon" to threadMXBean.daemonThreadCount
            ),
            "system" to mapOf(
                "processors" to runtime.availableProcessors(),
                "jvmVersion" to System.getProperty("java.version"),
                "osName" to System.getProperty("os.name"),
                "osVersion" to System.getProperty("os.version"),
                "osArch" to System.getProperty("os.arch")
            )
        )

        call.respond(HttpStatusCode.OK, healthResponse)
    }
}

/**
 * Format uptime milliseconds into human-readable string.
 */
private fun formatUptime(uptimeMillis: Long): String {
    val seconds = uptimeMillis / 1000
    val minutes = seconds / 60
    val hours = minutes / 60
    val days = hours / 24

    return when {
        days > 0 -> "${days}d ${hours % 24}h ${minutes % 60}m"
        hours > 0 -> "${hours}h ${minutes % 60}m ${seconds % 60}s"
        minutes > 0 -> "${minutes}m ${seconds % 60}s"
        else -> "${seconds}s"
    }
}
