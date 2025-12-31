package com.nlhsolver.api

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.lang.management.ManagementFactory

/**
 * REST API routes for health checks (T068).
 *
 * Endpoints:
 * - GET /api/v1/health - Health check with system status
 */
fun Route.healthRoutes() {
    get("/health") {
        val runtime = Runtime.getRuntime()
        val runtimeMXBean = ManagementFactory.getRuntimeMXBean()

        val healthResponse = mapOf(
            "status" to "UP",
            "version" to "1.0.0-MVP",
            "timestamp" to System.currentTimeMillis(),
            "uptime" to runtimeMXBean.uptime,
            "memory" to mapOf(
                "total" to runtime.totalMemory(),
                "free" to runtime.freeMemory(),
                "used" to (runtime.totalMemory() - runtime.freeMemory()),
                "max" to runtime.maxMemory()
            ),
            "system" to mapOf(
                "processors" to runtime.availableProcessors(),
                "jvmVersion" to System.getProperty("java.version"),
                "osName" to System.getProperty("os.name"),
                "osVersion" to System.getProperty("os.version")
            )
        )

        call.respond(HttpStatusCode.OK, healthResponse)
    }
}
