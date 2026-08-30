package com.nlhsolver.range

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.integration.LeducState
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeGreaterThan
import io.kotest.matchers.shouldBe

class LeducRangeTest : FunSpec({

    test("LeducHand creation and conflicts") {
        val ja = LeducHand(0)  // J♠
        val jb = LeducHand(1)  // J♥
        val qa = LeducHand(2)  // Q♠

        ja.id shouldBe "Ja"
        ja.rankName shouldBe "J"
        ja.rank shouldBe 0

        // Same rank conflicts
        ja.conflicts(jb) shouldBe true

        // Different rank doesn't conflict
        ja.conflicts(qa) shouldBe false
    }

    test("LeducRange uniform creation") {
        val range = LeducRange.uniform()

        // All hands should have weight 1.0
        range.getWeight(LeducHand(0)) shouldBe 1.0
        range.getWeight(LeducHand(5)) shouldBe 1.0

        range.getTotalWeight() shouldBe 6.0
        range.getActiveHands().size shouldBe 6
    }

    test("LeducRange excluding") {
        val range = LeducRange.uniform()
        val ka = LeducHand(4)  // K♠

        val filtered = range.excluding(ka) as LeducRange

        // K♠ and K♥ should be excluded (same rank)
        filtered.getWeight(LeducHand(4)) shouldBe 0.0
        filtered.getWeight(LeducHand(5)) shouldBe 0.0

        // Other hands should remain
        filtered.getWeight(LeducHand(0)) shouldBe 1.0

        filtered.getTotalWeight() shouldBe 4.0
    }

    test("Range propagation - betting polarizes range") {
        // Train a simple solver
        val matchups = mutableListOf<LeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 / 2 != p2 / 2) {  // Different ranks
                    matchups.add(LeducState(
                        p1Card = p1, p2Card = p2, boardCard = -1,
                        round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                    ))
                }
            }
        }

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        repeat(10000) { solver.train(matchups[it % matchups.size], 1) }
        val profile = solver.getStrategyProfile()

        // Start with uniform range
        val startRange = LeducRange.uniform()

        // P1 bets
        val initialState = LeducState(
            p1Card = 1, p2Card = 3, boardCard = -1,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val betAction = initialState.getLegalActions().first { it.getActionId() == "b" }

        val propagator = LeducRangePropagator()
        val bettingRange = propagator.propagate(
            startRange, betAction, initialState, profile
        ) as LeducRange

        println("\\nRange after P1 bets:")
        println("  J: ${(bettingRange.getWeightForRank(0) / bettingRange.getTotalWeight() * 100).toInt()}%")
        println("  Q: ${(bettingRange.getWeightForRank(1) / bettingRange.getTotalWeight() * 100).toInt()}%")
        println("  K: ${(bettingRange.getWeightForRank(2) / bettingRange.getTotalWeight() * 100).toInt()}%")

        // Kings should have higher weight in betting range
        val norm = bettingRange.normalized()
        val kWeight = norm.getWeightForRank(2)
        val jWeight = norm.getWeightForRank(0)

        kWeight shouldBeGreaterThan jWeight
        println("  ✓ Kings bet more than Jacks (${(kWeight*100).toInt()}% vs ${(jWeight*100).toInt()}%)")
    }
})
