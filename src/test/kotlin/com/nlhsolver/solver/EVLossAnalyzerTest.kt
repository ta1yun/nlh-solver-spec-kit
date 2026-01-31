package com.nlhsolver.solver

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import io.kotest.matchers.doubles.shouldBeGreaterThan
import io.kotest.matchers.doubles.shouldBeLessThan
import io.kotest.matchers.string.shouldContain

/**
 * Tests for EVLossAnalyzer (T139-T142).
 * Verifies EV loss measurement and acceptability checking.
 */
class EVLossAnalyzerTest : FunSpec({

    context("EVLossAnalyzer (T139, T140)") {
        test("should analyze EV loss for blueprint configuration") {
            val analyzer = EVLossAnalyzer()
            val config = BlueprintConfiguration.headsUp(stackSize = 100.0)

            val result = analyzer.analyzeEVLoss(
                blueprintConfig = config,
                numSamples = 10,  // Small sample for testing
                seed = 42
            )

            result.blueprintId shouldBe config.blueprintId.toString()
            result.scenarioName shouldBe config.scenarioName
            result.numSamples shouldBe 10
        }

        test("should require positive number of samples") {
            val analyzer = EVLossAnalyzer()
            val config = BlueprintConfiguration.headsUp()

            val exception = runCatching {
                analyzer.analyzeEVLoss(config, numSamples = 0)
            }.exceptionOrNull()

            exception shouldNotBe null
            exception!!.message shouldContain "must be positive"
        }

        test("should generate summary string") {
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
    }

    context("calculateWeightedEVLoss (T141)") {
        test("should calculate weighted average EV loss") {
            val analyzer = EVLossAnalyzer()

            val evLossByHand = mapOf(
                "AA" to 0.1,  // High value hand
                "KK" to 0.15,
                "72o" to 0.01  // Low value hand
            )

            val handFrequencies = mapOf(
                "AA" to 0.5,   // Played 50% of time
                "KK" to 0.3,   // Played 30% of time
                "72o" to 0.2   // Played 20% of time
            )

            val weightedLoss = analyzer.calculateWeightedEVLoss(evLossByHand, handFrequencies)

            // Should be closer to AA/KK losses (higher frequency)
            // (0.1 * 0.5 + 0.15 * 0.3 + 0.01 * 0.2) / 1.0 = 0.097
            weightedLoss shouldBe 0.097
        }

        test("should handle equal weights") {
            val analyzer = EVLossAnalyzer()

            val evLossByHand = mapOf(
                "AA" to 0.1,
                "KK" to 0.2,
                "QQ" to 0.3
            )

            val handFrequencies = mapOf(
                "AA" to 1.0,
                "KK" to 1.0,
                "QQ" to 1.0
            )

            val weightedLoss = analyzer.calculateWeightedEVLoss(evLossByHand, handFrequencies)

            // Simple average: (0.1 + 0.2 + 0.3) / 3 = 0.2 (with floating point tolerance)
            weightedLoss shouldBeGreaterThan 0.199
            weightedLoss shouldBeLessThan 0.201
        }

        test("should require non-empty inputs") {
            val analyzer = EVLossAnalyzer()

            val exception = runCatching {
                analyzer.calculateWeightedEVLoss(emptyMap(), mapOf("AA" to 1.0))
            }.exceptionOrNull()

            exception shouldNotBe null
            exception!!.message shouldContain "cannot be empty"
        }

        test("should handle missing hands gracefully") {
            val analyzer = EVLossAnalyzer()

            val evLossByHand = mapOf(
                "AA" to 0.1
                // KK is missing
            )

            val handFrequencies = mapOf(
                "AA" to 0.5,
                "KK" to 0.5  // Frequency for hand not in EV loss map
            )

            // Should treat missing hands as 0 EV loss
            val weightedLoss = analyzer.calculateWeightedEVLoss(evLossByHand, handFrequencies)
            weightedLoss shouldBe 0.05  // (0.1 * 0.5 + 0.0 * 0.5) / 1.0
        }
    }

    context("checkAcceptability (T142)") {
        test("should accept EV loss below threshold") {
            val analyzer = EVLossAnalyzer()

            val result = EVLossResult(
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

            val acceptability = analyzer.checkAcceptability(result)

            acceptability.isAcceptable shouldBe true
            acceptability.evLossPercentOfPot shouldBe 1.5
            acceptability.threshold shouldBe 2.0
            acceptability.recommendation shouldContain "Good quality"
        }

        test("should reject EV loss above threshold") {
            val analyzer = EVLossAnalyzer()

            val result = EVLossResult(
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

            val acceptability = analyzer.checkAcceptability(result)

            acceptability.isAcceptable shouldBe false
            acceptability.recommendation shouldContain "Poor quality"
        }

        test("should provide excellent recommendation for <1% loss") {
            val analyzer = EVLossAnalyzer()

            val result = EVLossResult(
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

            val acceptability = analyzer.checkAcceptability(result)

            acceptability.recommendation shouldContain "Excellent quality"
        }

        test("should provide marginal recommendation for 2-5% loss") {
            val analyzer = EVLossAnalyzer()

            val result = EVLossResult(
                blueprintId = "test",
                scenarioName = "Test",
                numSamples = 100,
                averageEVLossBBs = 0.3,
                maxEVLossBBs = 0.5,
                evLossPercentOfPot = 3.5,  // 2-5%
                boardResults = emptyList(),
                isAcceptable = false,
                threshold = 2.0
            )

            val acceptability = analyzer.checkAcceptability(result)

            acceptability.recommendation shouldContain "Marginal quality"
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

        test("should generate summary string") {
            val acceptability = AcceptabilityResult(
                isAcceptable = true,
                evLossPercentOfPot = 1.5,
                threshold = 2.0,
                recommendation = "Good quality",
                numSamplesAnalyzed = 100
            )

            val summary = acceptability.summary()
            summary shouldContain "1.50%"
            summary shouldContain "2.00%"
            summary shouldContain "ACCEPTABLE ✓"
            summary shouldContain "100 boards"
        }
    }

    context("threshold constants") {
        test("should define standard thresholds") {
            EVLossAnalyzer.DEFAULT_THRESHOLD_PERCENT shouldBe 2.0
            EVLossAnalyzer.TIGHT_THRESHOLD_PERCENT shouldBe 1.0
            EVLossAnalyzer.LOOSE_THRESHOLD_PERCENT shouldBe 5.0
        }
    }

    context("BoardEVLoss") {
        test("should format board string") {
            val board = listOf(
                com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.ACE, com.nlhsolver.poker.Suit.HEARTS),
                com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.KING, com.nlhsolver.poker.Suit.DIAMONDS),
                com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.QUEEN, com.nlhsolver.poker.Suit.CLUBS)
            )

            val boardLoss = BoardEVLoss(
                board = board,
                blueprintEV = 0.5,
                refinementEV = 0.52,
                evLossBBs = 0.02
            )

            boardLoss.boardString shouldBe "AhKdQc"
        }
    }
})
