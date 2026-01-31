package com.nlhsolver.integration

import com.nlhsolver.solver.*
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import io.kotest.matchers.doubles.shouldBeLessThan
import io.kotest.matchers.doubles.shouldBeGreaterThan
import io.kotest.matchers.string.shouldContain

/**
 * Integration test for EV loss measurement (T154).
 *
 * Tests the end-to-end EV loss measurement workflow:
 * 1. Create blueprint configuration
 * 2. Analyze EV loss vs fine abstraction
 * 3. Verify EV loss < 2% threshold
 * 4. Check acceptability
 */
class EVLossTest : FunSpec({

    context("EV Loss Measurement Integration (T154)") {
        test("should analyze EV loss for blueprint") {
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                ante = 0.0,
                preflopBuckets = 8
            )

            val analyzer = EVLossAnalyzer()

            // Analyze with small sample for testing
            val result = analyzer.analyzeEVLoss(
                blueprintConfig = config,
                numSamples = 10,
                seed = 42
            )

            result.blueprintId shouldBe config.blueprintId.toString()
            result.scenarioName shouldBe config.scenarioName
            result.numSamples shouldBe 10
            result.threshold shouldBe EVLossAnalyzer.DEFAULT_THRESHOLD_PERCENT
        }

        test("should verify EV loss < 2% threshold").config(enabled = false) {
            // TODO: Enable when actual solving is implemented
            val config = BlueprintConfiguration.headsUp(
                stackSize = 100.0,
                ante = 0.0,
                preflopBuckets = 8
            )

            val analyzer = EVLossAnalyzer()

            // Analyze with representative sample
            val result = analyzer.analyzeEVLoss(
                blueprintConfig = config,
                numSamples = 100,
                seed = 42
            )

            // Verify EV loss < 2% of pot (Libratus-style blueprint quality)
            result.evLossPercentOfPot shouldBeLessThan 2.0
            result.isAcceptable shouldBe true
        }

        test("should check acceptability with default threshold") {
            val analyzer = EVLossAnalyzer()

            // Create result with acceptable EV loss
            val goodResult = EVLossResult(
                blueprintId = "test",
                scenarioName = "Test",
                numSamples = 100,
                averageEVLossBBs = 0.1,
                maxEVLossBBs = 0.2,
                evLossPercentOfPot = 1.5,  // Below 2% threshold
                boardResults = emptyList(),
                isAcceptable = true,
                threshold = 2.0
            )

            val acceptability = analyzer.checkAcceptability(goodResult)

            acceptability.isAcceptable shouldBe true
            acceptability.evLossPercentOfPot shouldBe 1.5
            acceptability.threshold shouldBe 2.0
            acceptability.recommendation shouldContain "Good quality"
        }

        test("should reject high EV loss") {
            val analyzer = EVLossAnalyzer()

            // Create result with unacceptable EV loss
            val badResult = EVLossResult(
                blueprintId = "test",
                scenarioName = "Test",
                numSamples = 100,
                averageEVLossBBs = 0.5,
                maxEVLossBBs = 1.0,
                evLossPercentOfPot = 6.0,  // Above 2% threshold
                boardResults = emptyList(),
                isAcceptable = false,
                threshold = 2.0
            )

            val acceptability = analyzer.checkAcceptability(badResult)

            acceptability.isAcceptable shouldBe false
            acceptability.recommendation shouldContain "Poor quality"
        }

        test("should provide excellent recommendation for <1% loss") {
            val analyzer = EVLossAnalyzer()

            val excellentResult = EVLossResult(
                blueprintId = "test",
                scenarioName = "Test",
                numSamples = 100,
                averageEVLossBBs = 0.05,
                maxEVLossBBs = 0.1,
                evLossPercentOfPot = 0.8,  // < 1%
                boardResults = emptyList(),
                isAcceptable = true,
                threshold = 2.0
            )

            val acceptability = analyzer.checkAcceptability(excellentResult)

            acceptability.recommendation shouldContain "Excellent quality"
        }

        test("should support custom threshold") {
            val analyzer = EVLossAnalyzer()

            val result = EVLossResult(
                blueprintId = "test",
                scenarioName = "Test",
                numSamples = 100,
                averageEVLossBBs = 0.3,
                maxEVLossBBs = 0.5,
                evLossPercentOfPot = 3.0,
                boardResults = emptyList(),
                isAcceptable = false,
                threshold = 5.0
            )

            // Check with loose threshold
            val acceptability = analyzer.checkAcceptability(result, thresholdPercent = 5.0)

            acceptability.isAcceptable shouldBe true
            acceptability.threshold shouldBe 5.0
        }

        test("should calculate weighted EV loss correctly") {
            val analyzer = EVLossAnalyzer()

            val evLossByHand = mapOf(
                "AA" to 0.1,
                "KK" to 0.15,
                "72o" to 0.01
            )

            val handFrequencies = mapOf(
                "AA" to 0.5,
                "KK" to 0.3,
                "72o" to 0.2
            )

            val weightedLoss = analyzer.calculateWeightedEVLoss(evLossByHand, handFrequencies)

            // (0.1 * 0.5 + 0.15 * 0.3 + 0.01 * 0.2) / 1.0 = 0.097
            weightedLoss shouldBe 0.097
        }

        test("should generate comprehensive summary") {
            val result = EVLossResult(
                blueprintId = "test-id",
                scenarioName = "HU 100bb",
                numSamples = 100,
                averageEVLossBBs = 0.15,
                maxEVLossBBs = 0.35,
                evLossPercentOfPot = 1.5,
                boardResults = emptyList(),
                isAcceptable = true,
                threshold = 2.0
            )

            val summary = result.summary()

            summary shouldContain "HU 100bb"
            summary shouldContain "100 boards"
            summary shouldContain "1.50%"
            summary shouldContain "ACCEPTABLE"
        }

        test("should verify standard thresholds") {
            EVLossAnalyzer.DEFAULT_THRESHOLD_PERCENT shouldBe 2.0
            EVLossAnalyzer.TIGHT_THRESHOLD_PERCENT shouldBe 1.0
            EVLossAnalyzer.LOOSE_THRESHOLD_PERCENT shouldBe 5.0
        }
    }
})
