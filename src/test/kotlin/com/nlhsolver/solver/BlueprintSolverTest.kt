package com.nlhsolver.solver

import com.nlhsolver.poker.Position
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import io.kotest.matchers.longs.shouldBeGreaterThan
import io.kotest.matchers.longs.shouldBeLessThan

/**
 * Tests for BlueprintConfiguration and BlueprintSolver (T129-T132).
 * Verifies blueprint configuration and solving workflow.
 */
class BlueprintSolverTest : FunSpec({

    context("BlueprintConfiguration") {
        test("headsUp() should create valid HU blueprint") {
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                ante = 0.0,
                preflopBuckets = 8
            )

            config.scenarioName shouldBe "HU 100bb"
            config.stackSizes[Position.BTN] shouldBe 100.0
            config.stackSizes[Position.BB] shouldBe 100.0
            config.ante shouldBe 0.0
            config.preflopBuckets shouldBe 8
            config.positions shouldBe listOf(Position.BTN, Position.BB)
        }

        test("headsUp() should include ante in scenario name") {
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                ante = 0.1
            )

            config.scenarioName shouldBe "HU 100bb Ante 0.1bb"
            config.ante shouldBe 0.1
        }

        test("toSolveConfiguration() should use blueprint abstraction (T131)") {
            val config = BlueprintConfiguration.headsUp(stackSize = 100.0)
            val solveConfig = config.toSolveConfiguration()

            // T131: Full range solving (all 169 canonical hands)
            solveConfig.btnRange shouldNotBe null
            solveConfig.bbRange shouldNotBe null

            // Blueprint abstraction
            solveConfig.handAbstraction.preflopBuckets shouldBe 8
            solveConfig.handAbstraction.flopBuckets shouldBe 25
            solveConfig.handAbstraction.turnBuckets shouldBe 15
            solveConfig.handAbstraction.riverBuckets shouldBe 10

            // Aggressive board clustering
            solveConfig.boardClustering.flopClusters shouldBe 100
            solveConfig.boardClustering.turnClusters shouldBe 50
        }

        test("toSolveConfiguration() should use looser convergence (T132)") {
            val config = BlueprintConfiguration.headsUp(stackSize = 100.0)
            val solveConfig = config.toSolveConfiguration()

            // T132: 1% exploitability for blueprints
            solveConfig.convergenceCriteria.targetExploitability shouldBe 1.0
        }

        test("toSolveConfiguration() should adjust pot for antes") {
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                ante = 0.1  // Each player posts 0.1bb
            )
            val solveConfig = config.toSolveConfiguration()

            // Pot = SB (0.5) + BB (1.0) + Antes (2 * 0.1) = 1.7
            solveConfig.pot shouldBe 1.7
        }

        test("markSolved() should update status") {
            val config = BlueprintConfiguration.headsUp()
            config.solveStatus shouldBe BlueprintStatus.PENDING
            config.solvedAt shouldBe null

            val solved = config.markSolved()
            solved.solveStatus shouldBe BlueprintStatus.SOLVED
            solved.solvedAt shouldNotBe null
        }

        test("markFailed() should update status") {
            val config = BlueprintConfiguration.headsUp()
            val failed = config.markFailed()

            failed.solveStatus shouldBe BlueprintStatus.FAILED
        }

        test("validation should reject invalid preflop buckets") {
            val exception = runCatching {
                BlueprintConfiguration.headsUp(preflopBuckets = 10)
            }.exceptionOrNull()

            exception shouldNotBe null
            exception!!.message shouldBe "Preflop buckets must be 8, 12, or 15 (got 10)"
        }

        test("validation should reject invalid ante") {
            val exception = runCatching {
                BlueprintConfiguration.headsUp(ante = 2.0)  // > 1bb
            }.exceptionOrNull()

            exception shouldNotBe null
            exception!!.message shouldBe "Ante cannot exceed 1bb (got 2.0)"
        }

        test("validation should require scenarioName") {
            val exception = runCatching {
                BlueprintConfiguration(
                    scenarioName = "",
                    stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0)
                )
            }.exceptionOrNull()

            exception shouldNotBe null
            exception!!.message shouldBe "Scenario name cannot be blank"
        }
    }

    context("BlueprintSolver") {
        test("estimateSolveTime() should provide reasonable estimates") {
            val solver = BlueprintSolver()

            // 100bb, 8 buckets, default iterations
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                preflopBuckets = 8
            )

            val estimate = solver.estimateSolveTime(config)

            // Should be around 1 hour (3600 seconds)
            estimate shouldBeGreaterThan 1800L  // At least 30 minutes
            estimate shouldBeLessThan 7200L     // At most 2 hours
        }

        test("estimateSolveTime() should scale with preflop buckets") {
            val solver = BlueprintSolver()

            val config8 = BlueprintConfiguration.headsUp(preflopBuckets = 8)
            val config15 = BlueprintConfiguration.headsUp(preflopBuckets = 15)

            val estimate8 = solver.estimateSolveTime(config8)
            val estimate15 = solver.estimateSolveTime(config15)

            // More buckets = longer solve time
            estimate15 shouldBeGreaterThan estimate8
        }

        test("estimateSolveTime() should scale with stack size") {
            val solver = BlueprintSolver()

            val config50bb = BlueprintConfiguration.headsUp(stackSize = 50.0)
            val config200bb = BlueprintConfiguration.headsUp(stackSize = 200.0)

            val estimate50 = solver.estimateSolveTime(config50bb)
            val estimate200 = solver.estimateSolveTime(config200bb)

            // Deeper stacks = longer solve time
            estimate200 shouldBeGreaterThan estimate50
        }
    }
})
