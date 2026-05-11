package com.nlhsolver.range

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Suit
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeGreaterThan
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe

class NLHRangeTest : FunSpec({

    test("NLHRange uniform creation") {
        val range = NLHRange.uniform()

        // Should have all 1326 combos
        val activeHands = range.getActiveHands()
        activeHands.size shouldBe 1326

        // Total weight should be 1326 (all combos weight 1.0)
        range.getTotalWeight() shouldBe 1326.0

        // Check specific hand
        val aks = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.SPADES))
        range.getWeight(aks) shouldBe 1.0
    }

    test("NLHRange empty") {
        val range = NLHRange.empty()

        range.getActiveHands().size shouldBe 0
        range.getTotalWeight() shouldBe 0.0

        val aks = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.SPADES))
        range.getWeight(aks) shouldBe 0.0
    }

    test("NLHRange excluding") {
        val range = NLHRange.uniform()

        // Exclude A♠K♠
        val aks = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.SPADES))
        val filtered = range.excluding(aks) as NLHRange

        // A♠K♠ should be removed
        filtered.getWeight(aks) shouldBe 0.0

        // A♠Q♠ should also be removed (conflicts with A♠)
        val aqs = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.QUEEN, Suit.SPADES))
        filtered.getWeight(aqs) shouldBe 0.0

        // A♥K♥ should remain (no conflict)
        val akh = NLHHand(Card(Rank.ACE, Suit.HEARTS), Card(Rank.KING, Suit.HEARTS))
        filtered.getWeight(akh) shouldBe 1.0

        // Total weight should be less than original
        filtered.getTotalWeight() shouldNotBe range.getTotalWeight()
        filtered.getTotalWeight() shouldBeGreaterThan 0.0
    }

    test("NLHRange normalized") {
        val range = NLHRange.uniform()
        val normalized = range.normalized()

        // Should sum to ~1.0 (within floating point tolerance)
        val totalWeight = normalized.getTotalWeight()
        kotlin.math.abs(totalWeight - 1.0) shouldNotBe Double.MAX_VALUE
        // Allow for accumulated floating point error
        (totalWeight >= 0.999 && totalWeight <= 1.001) shouldBe true

        // Each hand should have weight ~1/1326
        val aks = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.SPADES))
        val expectedWeight = 1.0 / 1326.0
        val actualWeight = normalized.getWeight(aks)

        // Check within floating point tolerance
        kotlin.math.abs(actualWeight - expectedWeight) shouldNotBe Double.MAX_VALUE
        (actualWeight >= expectedWeight * 0.9999 && actualWeight <= expectedWeight * 1.0001) shouldBe true
    }

    test("NLHRange fromHandTypes - specific hands") {
        val range = NLHRange.fromHandTypes(mapOf(
            "AA" to 1.0,    // 6 combos
            "KK" to 1.0,    // 6 combos
            "AKs" to 1.0    // 4 combos
        ))

        // Should have 16 combos total
        range.getActiveHands().size shouldBe 16
        range.getTotalWeight() shouldBe 16.0

        // Check specific combo weights
        val aas = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS))
        range.getWeight(aas) shouldBe 1.0

        val aks = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.SPADES))
        range.getWeight(aks) shouldBe 1.0

        // AKo should not be in range
        val ako = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.HEARTS))
        range.getWeight(ako) shouldBe 0.0
    }

    test("NLHRange fromHandTypes - partial weight") {
        val range = NLHRange.fromHandTypes(mapOf(
            "AKo" to 0.5    // Half of 12 combos = 6 combos worth
        ))

        // Should have 12 combos with weight 0.5 each
        range.getActiveHands().size shouldBe 12
        range.getTotalWeight() shouldBe 6.0  // 12 * 0.5

        val ako = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.HEARTS))
        range.getWeight(ako) shouldBe 0.5
    }

    test("NLHRange fromString - simple") {
        val range = NLHRange.fromString("AA,KK,AKs")

        // 6 + 6 + 4 = 16 combos
        range.getActiveHands().size shouldBe 16
        range.getTotalWeight() shouldBe 16.0
    }

    test("NLHRange fromString - empty") {
        val range = NLHRange.fromString("")
        range.getActiveHands().size shouldBe 0
        range.getTotalWeight() shouldBe 0.0
    }

    test("NLHRange getWeightForHandType") {
        val range = NLHRange.fromHandTypes(mapOf(
            "AA" to 1.0,    // 6 combos
            "AKs" to 0.5    // 4 combos with weight 0.5 = 2.0 total
        ))

        // AA has 6 combos * 1.0 weight = 6.0
        range.getWeightForHandType("AA") shouldBe 6.0

        // AKs has 4 combos * 0.5 weight = 2.0
        range.getWeightForHandType("AKs") shouldBe 2.0

        // AKo not in range
        range.getWeightForHandType("AKo") shouldBe 0.0
    }

    test("NLHRange filterTo") {
        val range = NLHRange.fromHandTypes(mapOf(
            "AA" to 1.0,
            "KK" to 1.0,
            "QQ" to 1.0,
            "AKs" to 1.0
        ))

        // Filter to just AA and KK
        val filtered = range.filterTo(setOf("AA", "KK"))

        filtered.getWeightForHandType("AA") shouldBe 6.0
        filtered.getWeightForHandType("KK") shouldBe 6.0
        filtered.getWeightForHandType("QQ") shouldBe 0.0
        filtered.getWeightForHandType("AKs") shouldBe 0.0

        filtered.getTotalWeight() shouldBe 12.0
    }

    test("NLHRange union") {
        val range1 = NLHRange.fromHandTypes(mapOf(
            "AA" to 1.0,
            "AKs" to 0.5
        ))

        val range2 = NLHRange.fromHandTypes(mapOf(
            "KK" to 1.0,
            "AKs" to 0.8  // Higher weight
        ))

        val merged = range1.union(range2)

        // Should have AA, KK, and AKs with max weights
        merged.getWeightForHandType("AA") shouldBe 6.0   // From range1
        merged.getWeightForHandType("KK") shouldBe 6.0   // From range2
        merged.getWeightForHandType("AKs") shouldBe 3.2  // max(0.5, 0.8) * 4 combos
    }

    test("NLHRange scale") {
        val range = NLHRange.fromHandTypes(mapOf("AA" to 1.0))

        val scaled = range.scale(0.5)

        // Each combo should have weight 0.5
        val aas = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS))
        scaled.getWeight(aas) shouldBe 0.5

        // Total weight should be 6 * 0.5 = 3.0
        scaled.getTotalWeight() shouldBe 3.0
    }

    test("NLHRange uniformExcluding") {
        val heroHand = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.SPADES))
        val range = NLHRange.uniformExcluding(heroHand)

        // Hero hand should be excluded
        range.getWeight(heroHand) shouldBe 0.0

        // Hands with A♠ should be excluded
        val aqs = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.QUEEN, Suit.SPADES))
        range.getWeight(aqs) shouldBe 0.0

        // Hands without A♠ or K♠ should remain
        val qqh = NLHHand(Card(Rank.QUEEN, Suit.HEARTS), Card(Rank.QUEEN, Suit.DIAMONDS))
        range.getWeight(qqh) shouldBe 1.0

        // Should have fewer than 1326 combos
        range.getTotalWeight() shouldNotBe 1326.0
        range.getTotalWeight() shouldBeGreaterThan 0.0
    }

    test("NLHRange fromBuckets") {
        // Create simple bucket mapping: high cards vs low cards
        val allCombos = NLHHand.allCombos()
        val bucketMapping = allCombos.associateWith { hand ->
            // Bucket 0: has an ace
            // Bucket 1: no ace
            if (hand.highCard().rank == Rank.ACE || hand.lowCard().rank == Rank.ACE) 0 else 1
        }

        // Give buckets equal weight
        val bucketWeights = mapOf(0 to 100.0, 1 to 100.0)

        val range = NLHRange.fromBuckets(bucketWeights, bucketMapping)

        // Count hands in each bucket
        val bucket0Count = allCombos.count { bucketMapping[it] == 0 }
        val bucket1Count = allCombos.count { bucketMapping[it] == 1 }

        // Total weight should be ~200 (within floating point tolerance)
        val totalWeight = range.getTotalWeight()
        kotlin.math.abs(totalWeight - 200.0) shouldNotBe Double.MAX_VALUE
        // Allow for accumulated floating point error
        (totalWeight >= 199.0 && totalWeight <= 201.0) shouldBe true

        // Each hand in bucket 0 should have weight ~100/bucket0Count
        val aks = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.SPADES))
        val expectedWeight = 100.0 / bucket0Count
        val actualWeight = range.getWeight(aks)

        kotlin.math.abs(actualWeight - expectedWeight) shouldNotBe Double.MAX_VALUE
        (actualWeight >= expectedWeight * 0.9999 && actualWeight <= expectedWeight * 1.0001) shouldBe true
    }

    test("NLHRange activeHands sorted by weight") {
        val range = NLHRange.fromHandTypes(mapOf(
            "AA" to 1.0,
            "KK" to 0.5,
            "QQ" to 0.25
        ))

        val activeHands = range.getActiveHands()

        // First hand should have highest weight (AA = 1.0)
        activeHands.first().second shouldBe 1.0

        // Should be sorted descending
        for (i in 0 until activeHands.size - 1) {
            activeHands[i].second shouldBeGreaterThan activeHands[i + 1].second - 0.01
        }
    }

    test("NLHRange toString") {
        val range = NLHRange.fromHandTypes(mapOf(
            "AA" to 1.0,
            "KK" to 1.0
        ))

        val str = range.toString()

        // Should contain basic info
        str shouldNotBe ""
        str.contains("12") shouldBe true  // 12 active combos
    }
})
