package com.nlhsolver.solver

import com.nlhsolver.poker.Street
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe

/**
 * Tests for HandAbstraction (T124).
 * Verifies street-specific bucket configuration for blueprint and refinement solving.
 */
class HandAbstractionTest : FunSpec({

    test("blueprint() should use correct bucket counts per street") {
        val abstraction = HandAbstraction.blueprint(preflopBuckets = 8)

        abstraction.getBucketCount(Street.PREFLOP) shouldBe 8
        abstraction.getBucketCount(Street.FLOP) shouldBe 25
        abstraction.getBucketCount(Street.TURN) shouldBe 15
        abstraction.getBucketCount(Street.RIVER) shouldBe 10
    }

    test("blueprint() should support configurable preflop bucket count") {
        val abstraction12 = HandAbstraction.blueprint(preflopBuckets = 12)
        abstraction12.getBucketCount(Street.PREFLOP) shouldBe 12

        val abstraction15 = HandAbstraction.blueprint(preflopBuckets = 15)
        abstraction15.getBucketCount(Street.PREFLOP) shouldBe 15
    }

    test("refinement() should use correct bucket counts per street") {
        val abstraction = HandAbstraction.refinement()

        // Refinement doesn't specify preflop buckets, uses default
        abstraction.getBucketCount(Street.PREFLOP) shouldBe 200
        abstraction.getBucketCount(Street.FLOP) shouldBe 50
        abstraction.getBucketCount(Street.TURN) shouldBe 30
        abstraction.getBucketCount(Street.RIVER) shouldBe 20
    }

    test("refinement() should use 2x blueprint bucket counts for postflop") {
        val blueprint = HandAbstraction.blueprint()
        val refinement = HandAbstraction.refinement()

        refinement.getBucketCount(Street.FLOP) shouldBe blueprint.getBucketCount(Street.FLOP) * 2
        refinement.getBucketCount(Street.TURN) shouldBe blueprint.getBucketCount(Street.TURN) * 2
        refinement.getBucketCount(Street.RIVER) shouldBe blueprint.getBucketCount(Street.RIVER) * 2
    }

    test("getBucketCount() should fall back to default when street-specific not set") {
        val abstraction = HandAbstraction(
            mode = AbstractionMode.EQUITY_BUCKETING,
            numBuckets = 100,
            preflopBuckets = null,
            flopBuckets = 50
        )

        abstraction.getBucketCount(Street.PREFLOP) shouldBe 100  // Falls back to default
        abstraction.getBucketCount(Street.FLOP) shouldBe 50       // Uses street-specific
        abstraction.getBucketCount(Street.TURN) shouldBe 100      // Falls back to default
        abstraction.getBucketCount(Street.RIVER) shouldBe 100     // Falls back to default
    }

    test("blueprint() should use EQUITY_BUCKETING mode") {
        val abstraction = HandAbstraction.blueprint()
        abstraction.mode shouldBe AbstractionMode.EQUITY_BUCKETING
    }

    test("refinement() should use EQUITY_BUCKETING mode") {
        val abstraction = HandAbstraction.refinement()
        abstraction.mode shouldBe AbstractionMode.EQUITY_BUCKETING
    }

    test("effectiveMode() should respect AUTO mode based on range sizes") {
        val abstraction = HandAbstraction.auto()

        // Small ranges: should use NONE
        abstraction.effectiveMode(btnRangeSize = 10, bbRangeSize = 10) shouldBe AbstractionMode.NONE

        // Large ranges: should use EQUITY_BUCKETING
        abstraction.effectiveMode(btnRangeSize = 100, bbRangeSize = 100) shouldBe AbstractionMode.EQUITY_BUCKETING
    }

    test("effectiveMode() should preserve explicit mode selection") {
        val noneAbstraction = HandAbstraction.none()
        noneAbstraction.effectiveMode(btnRangeSize = 1000, bbRangeSize = 1000) shouldBe AbstractionMode.NONE

        val bucketingAbstraction = HandAbstraction.equityBucketing(50)
        bucketingAbstraction.effectiveMode(btnRangeSize = 5, bbRangeSize = 5) shouldBe AbstractionMode.EQUITY_BUCKETING
    }

    test("validation should reject invalid bucket counts") {
        val exception = runCatching {
            HandAbstraction(
                mode = AbstractionMode.EQUITY_BUCKETING,
                preflopBuckets = 200  // > 169, invalid
            )
        }.exceptionOrNull()

        exception shouldNotBe null
        exception!!.message shouldBe "Preflop buckets must be 8-169 (got 200)"
    }

    test("validation should accept valid bucket counts") {
        // Should not throw
        HandAbstraction(
            mode = AbstractionMode.EQUITY_BUCKETING,
            preflopBuckets = 8,
            flopBuckets = 25,
            turnBuckets = 15,
            riverBuckets = 10
        )
    }
})
