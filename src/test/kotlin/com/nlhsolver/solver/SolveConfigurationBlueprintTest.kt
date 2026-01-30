package com.nlhsolver.solver

import com.nlhsolver.poker.BoardClustering
import com.nlhsolver.poker.ClusteringMode
import com.nlhsolver.poker.Position
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

/**
 * Tests for SolveConfiguration blueprint mode (T128).
 * Verifies blueprint vs refinement configuration settings.
 */
class SolveConfigurationBlueprintTest : FunSpec({

    val stackSizes = mapOf(
        Position.BTN to 100.0,
        Position.BB to 100.0
    )

    test("blueprint() should use coarse hand abstraction") {
        val config = SolveConfiguration.blueprint(stackSizes)

        config.handAbstraction.mode shouldBe AbstractionMode.EQUITY_BUCKETING
        config.handAbstraction.preflopBuckets shouldBe 8
        config.handAbstraction.flopBuckets shouldBe 25
        config.handAbstraction.turnBuckets shouldBe 15
        config.handAbstraction.riverBuckets shouldBe 10
    }

    test("blueprint() should support configurable preflop buckets") {
        val config8 = SolveConfiguration.blueprint(stackSizes, preflopBuckets = 8)
        config8.handAbstraction.preflopBuckets shouldBe 8

        val config12 = SolveConfiguration.blueprint(stackSizes, preflopBuckets = 12)
        config12.handAbstraction.preflopBuckets shouldBe 12

        val config15 = SolveConfiguration.blueprint(stackSizes, preflopBuckets = 15)
        config15.handAbstraction.preflopBuckets shouldBe 15
    }

    test("blueprint() should use aggressive board clustering") {
        val config = SolveConfiguration.blueprint(stackSizes)

        config.boardClustering.mode shouldBe ClusteringMode.TEXTURE_BASED
        config.boardClustering.flopClusters shouldBe 100
        config.boardClustering.turnClusters shouldBe 50
        config.boardClustering.riverClusters shouldBe null
    }

    test("blueprint() should use looser convergence criteria") {
        val config = SolveConfiguration.blueprint(stackSizes)

        // Blueprint targets 1% exploitability (looser than refinement's 0.5%)
        config.convergenceCriteria.targetExploitability shouldBe 1.0
    }

    test("preflop() should support board clustering parameter") {
        val config = SolveConfiguration.preflop(
            stackSizes = stackSizes,
            boardClustering = BoardClustering.blueprint()
        )

        config.boardClustering.mode shouldBe ClusteringMode.TEXTURE_BASED
        config.boardClustering.flopClusters shouldBe 100
    }

    test("preflop() should default to no board clustering") {
        val config = SolveConfiguration.preflop(stackSizes = stackSizes)

        config.boardClustering.mode shouldBe ClusteringMode.NONE
        config.boardClustering.flopClusters shouldBe null
    }

    test("blueprint() should have correct name") {
        val config = SolveConfiguration.blueprint(stackSizes)
        config.name shouldBe "Blueprint Solve"
    }

    test("blueprint() should support custom name") {
        val config = SolveConfiguration.blueprint(
            stackSizes = stackSizes,
            name = "HU 100bb Blueprint"
        )
        config.name shouldBe "HU 100bb Blueprint"
    }
})
