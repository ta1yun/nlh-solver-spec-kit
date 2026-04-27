package com.nlhsolver.server

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.ints.shouldBeGreaterThan
import io.kotest.matchers.shouldBe
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.testing.*
import kotlinx.serialization.json.Json

/**
 * Test the solver HTTP API.
 */
class SolverServerTest : FunSpec({

    test("Health check endpoint works") {
        testApplication {
            application {
                configureSolverAPI()
            }

            val response = client.get("/health")
            response.status shouldBe HttpStatusCode.OK
            println(response.bodyAsText())
        }
    }

    test("Solve endpoint returns strategy") {
        testApplication {
            application {
                configureSolverAPI()
            }

            // Solve Q board after bet-call in R2
            val response = client.get("/solve?board=Q&history=bc|&iterations=10000")
            response.status shouldBe HttpStatusCode.OK

            val body = response.bodyAsText()
            println("\nSolve response:")
            println(body)

            // Parse JSON
            val json = Json { ignoreUnknownKeys = true }
            val result = json.decodeFromString<SolveResponse>(body)

            result.board shouldBe "Q"
            result.strategies.size shouldBeGreaterThan 0
            println("\n✓ Got ${result.strategies.size} hand strategies")
            println("Cached: ${result.cached}")
            println("Solve time: ${result.solveTime}ms")
        }
    }

    test("Cache works - second request is instant") {
        testApplication {
            application {
                configureSolverAPI()
            }

            // Clear cache first
            client.get("/cache/clear")

            // First request (cache miss)
            val response1 = client.get("/solve?board=K&history=xx|&iterations=5000")
            val result1 = Json.decodeFromString<SolveResponse>(response1.bodyAsText())

            println("\nFirst request:")
            println("Cached: ${result1.cached}")
            println("Time: ${result1.solveTime}ms")

            result1.cached shouldBe false

            // Second request (cache hit)
            val response2 = client.get("/solve?board=K&history=xx|&iterations=5000")
            val result2 = Json.decodeFromString<SolveResponse>(response2.bodyAsText())

            println("\nSecond request:")
            println("Cached: ${result2.cached}")
            println("Time: ${result2.solveTime}ms")

            result2.cached shouldBe true
            result2.solveTime shouldBe 0 // Instant from cache

            // Check cache stats
            val statsResponse = client.get("/cache/stats")
            val stats = Json.decodeFromString<CacheStatsResponse>(statsResponse.bodyAsText())

            println("\nCache stats:")
            println("Size: ${stats.size}")
            println("Keys: ${stats.keys}")

            stats.size shouldBe 1
        }
    }
})
