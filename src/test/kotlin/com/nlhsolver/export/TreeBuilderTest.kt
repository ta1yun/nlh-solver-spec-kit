package com.nlhsolver.export

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.integration.LeducState
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldNotBeEmpty
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe

/**
 * Tests for the refactored TreeBuilder interface.
 *
 * Validates that the new TreeBuilder produces valid tree structures
 * with all required metadata.
 */
class TreeBuilderTest : FunSpec({

    test("LeducTreeBuilder produces valid tree structure") {
        // Train a solver
        val solver = CFRSolver()
        val rootState = LeducState(
            p1Card = 0,
            p2Card = 2,
            boardCard = -1,
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        solver.train(rootState, iterations = 10000)
        val profile = solver.getStrategyProfile()

        // Build tree
        val builder = LeducTreeBuilder()
        val tree = builder.buildTree(
            rootState,
            profile,
            TreeBuildContext(boardName = "K")
        )

        // Validate tree structure
        tree shouldNotBe null
        tree.terminal shouldBe false
        tree.actions.shouldNotBeEmpty()
        tree.hands.shouldNotBeEmpty()
        tree.meta shouldNotBe null

        // Validate metadata
        tree.meta!!.round shouldBe 1
        tree.meta!!.pot shouldBe 2
        tree.meta!!.toCall shouldBe 0

        // Validate actions
        tree.actions.size shouldBe 2  // check and bet
        tree.actions.contains("check") shouldBe true
        tree.actions.contains("bet") shouldBe true

        // Validate hands
        tree.hands.size shouldBe 6  // All 6 Leduc cards in R1

        // Each hand should have required fields
        for (hand in tree.hands) {
            hand["id"] shouldNotBe null
            hand["label"] shouldNotBe null
            hand["equity"] shouldNotBe null
            hand["evUniform"] shouldNotBe null
            hand["evRange"] shouldNotBe null
            hand["rangeWeight"] shouldNotBe null
            hand["freq"] shouldNotBe null
            hand["ev"] shouldNotBe null
        }

        println("✓ Tree structure validated")
    }

    test("Chance nodes are created correctly") {
        val solver = CFRSolver()
        val rootState = LeducState(
            p1Card = 0,
            p2Card = 2,
            boardCard = -1,
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        solver.train(rootState, iterations = 10000)
        val profile = solver.getStrategyProfile()

        val builder = LeducTreeBuilder()
        val tree = builder.buildTree(
            rootState,
            profile,
            TreeBuildContext(boardName = "K")
        )

        // Navigate to a betting round completion (should have chance node)
        val checkNode = tree.children["check"] as? TreeNode
        checkNode shouldNotBe null

        if (checkNode != null && checkNode.children.containsKey("check")) {
            val xxNode = checkNode.children["check"]

            // After xx (both check), should transition to chance node
            if (xxNode is Map<*, *>) {
                val isChance = xxNode["chance"] as? Boolean
                isChance shouldBe true

                val outcomes = xxNode["outcomes"] as? List<*>
                outcomes shouldNotBe null
                outcomes!!.size shouldBe 3  // J, Q, K boards

                println("✓ Chance node created with 3 board outcomes")
            }
        }
    }

    test("Terminal nodes are handled correctly") {
        val solver = CFRSolver()
        val rootState = LeducState(
            p1Card = 0,
            p2Card = 2,
            boardCard = 4,
            round = 2,
            p1Invested = 3.0,
            p2Invested = 3.0,
            history = "bc|"
        )

        solver.train(rootState, iterations = 1000)
        val profile = solver.getStrategyProfile()

        val builder = LeducTreeBuilder()
        val tree = builder.buildTree(
            rootState,
            profile,
            TreeBuildContext(boardName = "K")
        )

        // Navigate to terminal (fold or showdown)
        val betNode = tree.children["bet"] as? TreeNode
        betNode shouldNotBe null

        if (betNode != null) {
            val foldNode = betNode.children["fold"] as? TreeNode
            foldNode shouldNotBe null
            foldNode!!.terminal shouldBe true
            foldNode.outcome shouldBe "fold"

            println("✓ Terminal nodes handled correctly")
        }
    }

    test("Range weights are normalized") {
        val solver = CFRSolver()
        val rootState = LeducState(
            p1Card = 0,
            p2Card = 2,
            boardCard = -1,
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        solver.train(rootState, iterations = 10000)
        val profile = solver.getStrategyProfile()

        val builder = LeducTreeBuilder()
        val tree = builder.buildTree(
            rootState,
            profile,
            TreeBuildContext(boardName = "K")
        )

        // Sum range weights
        var totalWeight = 0.0
        for (hand in tree.hands) {
            val weight = hand["rangeWeight"] as? Double ?: 0.0
            totalWeight += weight
        }

        // Should sum to approximately 1.0 (allowing for floating point error)
        val epsilon = 0.01
        assert(kotlin.math.abs(totalWeight - 1.0) < epsilon) {
            "Range weights should sum to 1.0, got $totalWeight"
        }

        println("✓ Range weights normalized (sum = $totalWeight)")
    }

    test("Action frequencies sum to 1.0") {
        val solver = CFRSolver()
        val rootState = LeducState(
            p1Card = 0,
            p2Card = 2,
            boardCard = -1,
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        solver.train(rootState, iterations = 10000)
        val profile = solver.getStrategyProfile()

        val builder = LeducTreeBuilder()
        val tree = builder.buildTree(
            rootState,
            profile,
            TreeBuildContext(boardName = "K")
        )

        // Check each hand's frequencies
        for (hand in tree.hands) {
            val freqMap = hand["freq"] as? Map<*, *>
            freqMap shouldNotBe null

            if (freqMap != null) {
                val total = freqMap.values.sumOf { (it as? Double) ?: 0.0 }
                val epsilon = 0.01
                assert(kotlin.math.abs(total - 1.0) < epsilon) {
                    "Action frequencies for ${hand["id"]} should sum to 1.0, got $total"
                }
            }
        }

        println("✓ All action frequencies sum to 1.0")
    }
})
