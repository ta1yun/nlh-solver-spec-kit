package com.nlhsolver.solver

import com.nlhsolver.poker.*
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import io.kotest.matchers.doubles.shouldBeGreaterThan
import io.kotest.matchers.doubles.shouldBeLessThan
import io.kotest.matchers.string.shouldContain
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.maps.shouldContainKey
import java.util.UUID

/**
 * Tests for RefinementConfiguration, RangeFilter, and RefinementSolver (T143-T146).
 * Verifies refinement solving with blueprint ranges and fine abstraction.
 */
class RefinementTest : FunSpec({

    context("RefinementConfiguration (T143)") {
        test("should create valid flop refinement configuration") {
            val blueprintId = UUID.randomUUID()
            val board = listOf(
                Card(Rank.KING, Suit.SPADES),
                Card(Rank.SEVEN, Suit.HEARTS),
                Card(Rank.TWO, Suit.DIAMONDS)
            )

            val config = RefinementConfiguration.flop(
                blueprintId = blueprintId,
                board = board,
                stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0),
                pot = 3.5
            )

            config.blueprintId shouldBe blueprintId
            config.startingStreet shouldBe Street.FLOP
            config.board shouldBe board
            config.boardString() shouldBe "Ks7h2d"
            config.scenarioName shouldContain "Flop"
            config.flopBuckets shouldBe 200
            config.turnBuckets shouldBe 200
            config.riverBuckets shouldBe 200
        }

        test("should create valid turn refinement configuration") {
            val blueprintId = UUID.randomUUID()
            val board = listOf(
                Card(Rank.KING, Suit.SPADES),
                Card(Rank.SEVEN, Suit.HEARTS),
                Card(Rank.TWO, Suit.DIAMONDS),
                Card(Rank.ACE, Suit.CLUBS)
            )

            val config = RefinementConfiguration.turn(
                blueprintId = blueprintId,
                board = board,
                stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0),
                pot = 10.0
            )

            config.startingStreet shouldBe Street.TURN
            config.board.size shouldBe 4
            config.boardString() shouldBe "Ks7h2dAc"
        }

        test("should create valid river refinement configuration") {
            val blueprintId = UUID.randomUUID()
            val board = listOf(
                Card(Rank.KING, Suit.SPADES),
                Card(Rank.SEVEN, Suit.HEARTS),
                Card(Rank.TWO, Suit.DIAMONDS),
                Card(Rank.ACE, Suit.CLUBS),
                Card(Rank.QUEEN, Suit.SPADES)
            )

            val config = RefinementConfiguration.river(
                blueprintId = blueprintId,
                board = board,
                stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0),
                pot = 20.0
            )

            config.startingStreet shouldBe Street.RIVER
            config.board.size shouldBe 5
            config.boardString() shouldBe "Ks7h2dAcQs"
        }

        test("should reject preflop refinement") {
            val blueprintId = UUID.randomUUID()

            val exception = runCatching {
                RefinementConfiguration(
                    blueprintId = blueprintId,
                    scenarioName = "Invalid",
                    board = emptyList(),
                    startingStreet = Street.PREFLOP,
                    stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0),
                    pot = 1.5
                )
            }.exceptionOrNull()

            exception shouldNotBe null
            exception!!.message shouldContain "postflop"
        }

        test("should reject mismatched board and street") {
            val blueprintId = UUID.randomUUID()
            val board = listOf(
                Card(Rank.KING, Suit.SPADES),
                Card(Rank.SEVEN, Suit.HEARTS)
            )  // Only 2 cards

            val exception = runCatching {
                RefinementConfiguration(
                    blueprintId = blueprintId,
                    scenarioName = "Invalid",
                    board = board,
                    startingStreet = Street.FLOP,  // Expects 3 cards
                    stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0),
                    pot = 3.5
                )
            }.exceptionOrNull()

            exception shouldNotBe null
            exception!!.message shouldContain "Board must have 3 cards"
        }

        test("should validate bucket counts") {
            val blueprintId = UUID.randomUUID()
            val board = listOf(
                Card(Rank.KING, Suit.SPADES),
                Card(Rank.SEVEN, Suit.HEARTS),
                Card(Rank.TWO, Suit.DIAMONDS)
            )

            val exception = runCatching {
                RefinementConfiguration.flop(
                    blueprintId = blueprintId,
                    board = board,
                    stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0),
                    pot = 3.5,
                    flopBuckets = 10  // Too few
                )
            }.exceptionOrNull()

            exception shouldNotBe null
            exception!!.message shouldContain "between 50 and 1000"
        }

        test("should convert to SolveConfiguration") {
            val blueprintId = UUID.randomUUID()
            val board = listOf(
                Card(Rank.KING, Suit.SPADES),
                Card(Rank.SEVEN, Suit.HEARTS),
                Card(Rank.TWO, Suit.DIAMONDS)
            )

            val config = RefinementConfiguration.flop(
                blueprintId = blueprintId,
                board = board,
                stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0),
                pot = 3.5
            )

            val btnRange = HandRange.allCanonicalHands()
            val bbRange = HandRange.allCanonicalHands()

            val solveConfig = config.toSolveConfiguration(btnRange, bbRange)

            solveConfig.startingStreet shouldBe Street.FLOP
            solveConfig.board shouldBe board
            solveConfig.pot shouldBe 3.5
            solveConfig.handAbstraction.flopBuckets shouldBe 200
        }

        test("should mark as solved") {
            val config = RefinementConfiguration.flop(
                blueprintId = UUID.randomUUID(),
                board = listOf(
                    Card(Rank.KING, Suit.SPADES),
                    Card(Rank.SEVEN, Suit.HEARTS),
                    Card(Rank.TWO, Suit.DIAMONDS)
                ),
                stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0),
                pot = 3.5
            )

            val solved = config.markSolved()

            solved.solveStatus shouldBe RefinementStatus.SOLVED
            solved.solvedAt shouldNotBe null
        }
    }

    context("RangeFilter - Card Removal (T144)") {
        test("should filter hands with card removal") {
            val hands = mapOf(
                Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS)) to 1.0,  // AA
                Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS)) to 1.0,  // KK
                Pair(Card(Rank.QUEEN, Suit.SPADES), Card(Rank.QUEEN, Suit.HEARTS)) to 1.0  // QQ
            )
            val range = HandRange.WeightedRange(hands)

            val board = listOf(
                Card(Rank.ACE, Suit.HEARTS)  // Blocks Ah
            )

            val filtered = RangeFilter.filterForBoard(range, board)

            // AA pair containing Ah should be blocked
            // KK and QQ should remain
            filtered.size() shouldBe 2
        }

        test("should handle empty board") {
            val hands = mapOf(
                Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS)) to 0.5,
                Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS)) to 0.5
            )
            val range = HandRange.WeightedRange(hands)

            val filtered = RangeFilter.filterForBoard(range, emptyList())

            // Should return unchanged
            filtered.size() shouldBe range.size()
        }

        test("should normalize after filtering") {
            val hands = mapOf(
                Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.DIAMONDS)) to 2.0,
                Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS)) to 2.0
            )
            val range = HandRange.WeightedRange(hands)

            val board = emptyList<Card>()
            val filtered = RangeFilter.filterForBoard(range, board)

            // Should be normalized
            val total = filtered.hands.values.sum()
            total shouldBeGreaterThan 0.99
            total shouldBeLessThan 1.01
        }
    }


    context("RefinementSolver (T146)") {
        test("should create RefinementSolver instance") {
            val solver = RefinementSolver()
            solver shouldNotBe null
        }

        test("should solve refinement configuration").config(enabled = false) {
            // TODO: Enable when full solve infrastructure is ready
            val solver = RefinementSolver()
            val blueprintId = UUID.randomUUID()

            val config = RefinementConfiguration.flop(
                blueprintId = blueprintId,
                board = listOf(
                    Card(Rank.KING, Suit.SPADES),
                    Card(Rank.SEVEN, Suit.HEARTS),
                    Card(Rank.TWO, Suit.DIAMONDS)
                ),
                stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0),
                pot = 3.5
            )

            val result = solver.solve(config)

            result.refinementId shouldBe config.refinementId
            result.blueprintId shouldBe blueprintId
            result.exploitability shouldBeGreaterThan 0.0
            result.boardString() shouldBe "Ks7h2d"
        }

        test("should generate RefinementResult summary") {
            val result = RefinementResult(
                refinementId = UUID.randomUUID(),
                blueprintId = UUID.randomUUID(),
                scenarioName = "Flop: Ks7h2d",
                board = listOf(
                    Card(Rank.KING, Suit.SPADES),
                    Card(Rank.SEVEN, Suit.HEARTS),
                    Card(Rank.TWO, Suit.DIAMONDS)
                ),
                startingStreet = Street.FLOP,
                strategyProfile = StrategyProfile(
                    solveJobId = UUID.randomUUID(),
                    exploitability = 0.45
                ),
                exploitability = 0.45,
                solveTimeSeconds = 600.0,
                iterations = 100000,
                btnRange = HandRange.allCanonicalHands(),
                bbRange = HandRange.allCanonicalHands()
            )

            val summary = result.summary()

            summary shouldContain "Ks7h2d"
            summary shouldContain "FLOP"
            summary shouldContain "0.45"
            summary shouldContain "600"
        }

        test("should generate ComparisonResult summary") {
            val comparison = ComparisonResult(
                refinementId = UUID.randomUUID(),
                blueprintId = UUID.randomUUID(),
                board = listOf(
                    Card(Rank.KING, Suit.SPADES),
                    Card(Rank.SEVEN, Suit.HEARTS),
                    Card(Rank.TWO, Suit.DIAMONDS)
                ),
                blueprintExploitability = 1.0,
                refinementExploitability = 0.45,
                evDifferenceBBs = 0.02,
                isImprovement = true
            )

            val summary = comparison.summary()

            summary shouldContain "1.00"
            summary shouldContain "0.45"
            summary shouldContain "IMPROVED ✓"
        }
    }

    context("RangeFilter - BlueprintRange filtering") {
        test("should filter BlueprintRange to HandRange") {
            val blueprintRange = BlueprintRange(
                blueprintId = UUID.randomUUID().toString(),
                position = Position.BTN,
                actionPoint = "Preflop Opening",
                handFrequencies = mapOf(
                    "AA" to ActionFrequencies(raise = 1.0),
                    "KK" to ActionFrequencies(raise = 0.9, fold = 0.1),
                    "72o" to ActionFrequencies(fold = 1.0)
                )
            )

            val board = listOf(
                Card(Rank.ACE, Suit.HEARTS)
            )

            val filtered = RangeFilter.filterBlueprintRange(blueprintRange, board)

            // Should convert to HandRange and filter
            // AA with Ah on board should be blocked
            // Total hands should be reduced
            filtered.size() shouldNotBe 0
        }
    }
})
