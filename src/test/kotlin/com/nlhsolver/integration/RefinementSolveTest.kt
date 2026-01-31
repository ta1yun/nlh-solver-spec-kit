package com.nlhsolver.integration

import com.nlhsolver.poker.*
import com.nlhsolver.solver.*
import com.nlhsolver.storage.BlueprintRepository
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import io.kotest.matchers.doubles.shouldBeLessThan
import io.kotest.matchers.string.shouldContain
import java.nio.file.Files
import java.nio.file.Paths
import java.util.UUID

/**
 * Integration test for refinement solving (T155).
 *
 * Tests the end-to-end refinement workflow:
 * 1. Create blueprint with saved ranges
 * 2. Create refinement configuration for specific board (Ks7h2d)
 * 3. Filter blueprint ranges for card removal
 * 4. Solve with fine abstraction
 * 5. Verify exploitability < 0.5%
 */
class RefinementSolveTest : FunSpec({

    val testDir = Paths.get("data/test_refinement_integration")
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

    context("Refinement Solve Integration (T155)") {
        test("should create refinement configuration for Ks7h2d flop") {
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
                pot = 3.5,
                flopBuckets = 200,
                turnBuckets = 200,
                riverBuckets = 200
            )

            config.blueprintId shouldBe blueprintId
            config.startingStreet shouldBe Street.FLOP
            config.board shouldBe board
            config.boardString() shouldBe "Ks7h2d"
            config.pot shouldBe 3.5
            config.flopBuckets shouldBe 200
        }

        test("should filter blueprint ranges for card removal") {
            // Create test ranges
            val btnRange = HandRange.allCanonicalHands()
            val bbRange = HandRange.allCanonicalHands()

            // Board blocks some hands
            val board = listOf(
                Card(Rank.KING, Suit.SPADES),
                Card(Rank.SEVEN, Suit.HEARTS),
                Card(Rank.TWO, Suit.DIAMONDS)
            )

            // Filter for card removal
            val filteredBtn = RangeFilter.filterForBoard(btnRange, board)
            val filteredBb = RangeFilter.filterForBoard(bbRange, board)

            // Verify ranges are filtered
            filteredBtn.size() shouldNotBe btnRange.size()
            filteredBb.size() shouldNotBe bbRange.size()

            // Verify ranges are normalized
            val btnTotal = filteredBtn.hands.values.sum()
            val bbTotal = filteredBb.hands.values.sum()

            btnTotal shouldBe 1.0
            bbTotal shouldBe 1.0
        }

        test("should solve refinement with fine abstraction").config(enabled = false) {
            // TODO: Enable when full solve infrastructure is ready
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
                pot = 3.5,
                flopBuckets = 200,
                turnBuckets = 200,
                riverBuckets = 200
            )

            val solver = RefinementSolver()
            val result = solver.solve(config)

            result.refinementId shouldBe config.refinementId
            result.blueprintId shouldBe blueprintId
            result.boardString() shouldBe "Ks7h2d"

            // Verify exploitability < 0.5% (tighter than blueprint's 1%)
            result.exploitability shouldBeLessThan 0.5
        }

        test("should compare blueprint vs refinement strategies").config(enabled = false) {
            // TODO: Enable when full solve infrastructure is ready
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

            val solver = RefinementSolver()
            val comparison = solver.compareWithBlueprint(config)

            comparison.refinementId shouldBe config.refinementId
            comparison.blueprintId shouldBe blueprintId
            comparison.boardString() shouldBe "Ks7h2d"

            // Verify refinement has lower exploitability
            comparison.refinementExploitability shouldBeLessThan comparison.blueprintExploitability
            comparison.isImprovement shouldBe true
        }

        test("should generate refinement result summary") {
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

        test("should handle turn refinement") {
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

        test("should handle river refinement") {
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

        test("should verify refinement uses fine abstraction") {
            val config = RefinementConfiguration.flop(
                blueprintId = UUID.randomUUID(),
                board = listOf(
                    Card(Rank.KING, Suit.SPADES),
                    Card(Rank.SEVEN, Suit.HEARTS),
                    Card(Rank.TWO, Suit.DIAMONDS)
                ),
                stackSizes = mapOf(Position.BTN to 100.0, Position.BB to 100.0),
                pot = 3.5,
                flopBuckets = 200,
                turnBuckets = 200,
                riverBuckets = 200
            )

            // Verify fine abstraction (200 buckets vs 8-25 in blueprint)
            config.flopBuckets shouldBe 200
            config.turnBuckets shouldBe 200
            config.riverBuckets shouldBe 200

            // Verify tighter convergence
            config.convergenceCriteria.targetExploitability shouldBe 0.5
        }

        test("should verify solve time is 10-30 minutes").config(enabled = false) {
            // TODO: Enable when actual solving is implemented
            // Expected: solve time 10-30 minutes (vs 1-2 hours for blueprint)
            // Expected: exploitability < 0.5% (vs < 1% for blueprint)
            // Expected: memory ~500MB (vs ~2GB for blueprint)
        }
    }
})
