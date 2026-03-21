package com.nlhsolver.integration

import com.nlhsolver.poker.Position
import com.nlhsolver.solver.*
import com.nlhsolver.storage.BlueprintRepository
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import io.kotest.matchers.doubles.shouldBeLessThan
import io.kotest.matchers.string.shouldContain
import java.nio.file.Files
import java.nio.file.Paths

/**
 * Integration test for blueprint solving (T153).
 *
 * Tests the end-to-end blueprint workflow:
 * 1. Create blueprint configuration (100bb no ante)
 * 2. Save configuration to repository
 * 3. Solve blueprint (placeholder)
 * 4. Extract and save ranges
 * 5. Verify ranges exist and are valid
 */
class BlueprintSolveTest : FunSpec({

    val testDir = Paths.get("data/test_blueprints_integration")
    val repository = BlueprintRepository(testDir)

    beforeSpec {
        // Clean test directory
        if (Files.exists(testDir)) {
            Files.walk(testDir)
                .sorted(Comparator.reverseOrder())
                .forEach { Files.delete(it) }
        }
    }

    afterSpec {
        // Clean up after tests
        if (Files.exists(testDir)) {
            Files.walk(testDir)
                .sorted(Comparator.reverseOrder())
                .forEach { Files.delete(it) }
        }
    }

    context("Blueprint Solve Integration (T153)") {
        test("should create and save blueprint configuration").config(enabled = false) {
            // Create blueprint configuration
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

            // Save to repository
            repository.saveConfiguration(config)

            // Verify saved
            val loaded = repository.findConfiguration(config.blueprintId)
            loaded shouldNotBe null
            loaded!!.scenarioName shouldBe config.scenarioName
        }

        test("should solve blueprint (placeholder)").config(enabled = false) {
            // TODO: Enable when full solve infrastructure is ready
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                ante = 0.0,
                preflopBuckets = 8
            )

            repository.saveConfiguration(config)

            // Create solve configuration
            val solveConfig = config.toSolveConfiguration()

            solveConfig.name shouldContain "HU 100bb"
            solveConfig.numPlayers shouldBe 2
            solveConfig.handAbstraction.preflopBuckets shouldBe 8

            // Solve (placeholder)
            // val orchestrator = SolveOrchestrator()
            // val result = orchestrator.solve(solveConfig)

            // Verify exploitability < 1%
            // result.finalExploitability shouldBeLessThan 1.0
        }

        test("should extract and save BTN opening range").config(enabled = false) {
            // TODO: Enable when extraction is implemented
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                ante = 0.0,
                preflopBuckets = 8
            )

            repository.saveConfiguration(config)

            // Solve (placeholder)
            val strategy = StrategyProfile(
                solveJobId = config.blueprintId,
                exploitability = 0.8
            )

            // Extract BTN opening range
            val extractor = RangeExtractor()
            val btnRange = extractor.extractBTNOpeningRange(
                strategyId = strategy.strategyId,
                config = config
            )

            btnRange.position shouldBe Position.BTN
            btnRange.actionPoint shouldBe "Preflop Opening"
            btnRange.handFrequencies shouldNotBe emptyMap<String, ActionFrequencies>()

            // Save range
            repository.saveRange(btnRange)

            // Verify saved
            val loaded = repository.findRange(config.blueprintId, "Preflop Opening")
            loaded shouldNotBe null
            loaded!!.position shouldBe Position.BTN
        }

        test("should extract and save BB defense range").config(enabled = false) {
            // TODO: Enable when extraction is implemented
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                ante = 0.0,
                preflopBuckets = 8
            )

            repository.saveConfiguration(config)

            // Solve (placeholder)
            val strategy = StrategyProfile(
                solveJobId = config.blueprintId,
                exploitability = 0.8
            )

            // Extract BB defense range
            val extractor = RangeExtractor()
            val bbRange = extractor.extractBBDefenseRange(
                blueprintId = config.blueprintId.toString(),
                strategy = strategy,
                config = config
            )

            bbRange.position shouldBe Position.BB
            bbRange.actionPoint shouldBe "Defense vs BTN Open"

            // Save range
            repository.saveRange(bbRange)

            // Verify saved
            val loaded = repository.findRange(config.blueprintId, "Defense vs BTN Open")
            loaded shouldNotBe null
            loaded!!.position shouldBe Position.BB
        }

        test("should verify blueprint exploitability < 1%").config(enabled = false) {
            // TODO: Enable when full solve infrastructure is ready
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                ante = 0.0,
                preflopBuckets = 8
            )

            // Expected: exploitability < 1% (looser than refinement's 0.5%)
            // Expected: solve time: 1-2 hours
            // Expected: EV loss: < 2% of pot vs fine abstraction
        }

        test("should handle 100bb with ante scenario").config(enabled = false) {
            // TODO: Enable when full solve infrastructure is ready
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                ante = 0.125,  // 12.5% ante (common in tournaments)
                preflopBuckets = 8
            )

            config.scenarioName shouldContain "Ante"
            config.ante shouldBe 0.125

            // Save and verify
            repository.saveConfiguration(config)
            val loaded = repository.findConfiguration(config.blueprintId)
            loaded shouldNotBe null
        }

        test("should handle different stack depths").config(enabled = false) {
            // TODO: Enable when full solve infrastructure is ready
            val configs = listOf(
                BlueprintConfiguration.headsUp(stackSize = 50.0),   // Short stack
                BlueprintConfiguration.headsUp(stackSize = 100.0),  // Standard
                BlueprintConfiguration.headsUp(stackSize = 200.0)   // Deep stack
            )

            for (config in configs) {
                repository.saveConfiguration(config)
                val loaded = repository.findConfiguration(config.blueprintId)
                loaded shouldNotBe null
            }
        }
    }
})
