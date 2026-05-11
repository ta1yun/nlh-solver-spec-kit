package com.nlhsolver.range

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Suit
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe

class NLHHandTest : FunSpec({

    test("NLHHand creation and ID generation") {
        // Pocket pair
        val aa = NLHHand(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.ACE, Suit.HEARTS)
        )
        aa.id shouldBe "AA"
        aa.isPair() shouldBe true
        aa.isSuited() shouldBe false

        // Suited hand
        val aks = NLHHand(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.KING, Suit.SPADES)
        )
        aks.id shouldBe "AKs"
        aks.isPair() shouldBe false
        aks.isSuited() shouldBe true

        // Offsuit hand
        val ako = NLHHand(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.KING, Suit.HEARTS)
        )
        ako.id shouldBe "AKo"
        ako.isPair() shouldBe false
        ako.isSuited() shouldBe false
    }

    test("NLHHand canonical form - higher card first") {
        // Cards in order
        val hand1 = NLHHand(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.KING, Suit.HEARTS)
        )
        hand1.id shouldBe "AKo"

        // Cards reversed - should still be AKo
        val hand2 = NLHHand(
            Card(Rank.KING, Suit.HEARTS),
            Card(Rank.ACE, Suit.SPADES)
        )
        hand2.id shouldBe "AKo"

        // Both should have same ID
        hand1.id shouldBe hand2.id
    }

    test("NLHHand conflicts - same card") {
        val hand1 = NLHHand(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.KING, Suit.SPADES)
        )

        val hand2 = NLHHand(
            Card(Rank.ACE, Suit.SPADES), // Same A♠
            Card(Rank.QUEEN, Suit.SPADES)
        )

        hand1.conflicts(hand2) shouldBe true
    }

    test("NLHHand conflicts - no overlap") {
        val hand1 = NLHHand(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.KING, Suit.SPADES)
        )

        val hand2 = NLHHand(
            Card(Rank.QUEEN, Suit.HEARTS),
            Card(Rank.JACK, Suit.HEARTS)
        )

        hand1.conflicts(hand2) shouldBe false
    }

    test("NLHHand conflicts - pairs with same rank don't conflict if different suits") {
        val aa1 = NLHHand(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.ACE, Suit.HEARTS)
        )

        val aa2 = NLHHand(
            Card(Rank.ACE, Suit.DIAMONDS),
            Card(Rank.ACE, Suit.CLUBS)
        )

        // Different pocket aces combos - no conflict
        aa1.conflicts(aa2) shouldBe false
    }

    test("NLHHand highCard and lowCard") {
        val ako = NLHHand(
            Card(Rank.KING, Suit.HEARTS),  // Lower rank first
            Card(Rank.ACE, Suit.SPADES)    // Higher rank second
        )

        ako.highCard().rank shouldBe Rank.ACE
        ako.lowCard().rank shouldBe Rank.KING
    }

    test("NLHHand fromString - pocket pair") {
        val aa = NLHHand.fromString("AA")
        aa.id shouldBe "AA"
        aa.isPair() shouldBe true
        aa.highCard().rank shouldBe Rank.ACE
        aa.lowCard().rank shouldBe Rank.ACE
    }

    test("NLHHand fromString - suited") {
        val aks = NLHHand.fromString("AKs")
        aks.id shouldBe "AKs"
        aks.isSuited() shouldBe true
        aks.isPair() shouldBe false
        aks.highCard().rank shouldBe Rank.ACE
        aks.lowCard().rank shouldBe Rank.KING
    }

    test("NLHHand fromString - offsuit") {
        val ako = NLHHand.fromString("AKo")
        ako.id shouldBe "AKo"
        ako.isSuited() shouldBe false
        ako.isPair() shouldBe false
        ako.highCard().rank shouldBe Rank.ACE
        ako.lowCard().rank shouldBe Rank.KING
    }

    test("NLHHand allCombos generates 1326 hands") {
        val allHands = NLHHand.allCombos()
        allHands.size shouldBe 1326

        // Check no duplicates
        val uniqueHands = allHands.toSet()
        uniqueHands.size shouldBe 1326

        // Verify that many hands DO conflict (share at least one card)
        // For example: A♠K♠ and A♠Q♠ both have A♠
        var conflictCount = 0
        val sampleSize = 100 // Check first 100 hands to avoid O(n²) runtime
        for (i in 0 until minOf(sampleSize, allHands.size)) {
            for (j in i + 1 until minOf(sampleSize, allHands.size)) {
                if (allHands[i].conflicts(allHands[j])) {
                    conflictCount++
                }
            }
        }

        // Many hands should conflict with each other
        conflictCount shouldNotBe 0
    }

    test("NLHHand combosForHand - pocket pair has 6 combos") {
        val aaCombos = NLHHand.combosForHand("AA")
        aaCombos.size shouldBe 6

        // All should be pairs
        aaCombos.forEach { it.isPair() shouldBe true }

        // All should have ID "AA"
        aaCombos.forEach { it.id shouldBe "AA" }

        // All should be unique (different suit combinations)
        val uniqueCombos = aaCombos.toSet()
        uniqueCombos.size shouldBe 6

        // Pocket pair combos DO conflict with each other (they share cards)
        // Example: A♠A♥ and A♠A♦ both have A♠
        var conflictCount = 0
        for (i in aaCombos.indices) {
            for (j in i + 1 until aaCombos.size) {
                if (aaCombos[i].conflicts(aaCombos[j])) {
                    conflictCount++
                }
            }
        }
        // Each of 6 combos should conflict with some others (not all, but many)
        conflictCount shouldNotBe 0
    }

    test("NLHHand combosForHand - suited hand has 4 combos") {
        val aksCombos = NLHHand.combosForHand("AKs")
        aksCombos.size shouldBe 4

        // All should be suited
        aksCombos.forEach { it.isSuited() shouldBe true }

        // All should have ID "AKs"
        aksCombos.forEach { it.id shouldBe "AKs" }

        // All should be unique
        val uniqueCombos = aksCombos.toSet()
        uniqueCombos.size shouldBe 4

        // Suited combos should NOT conflict (each uses a different suit)
        // A♠K♠, A♥K♥, A♦K♦, A♣K♣ - no shared cards
        for (i in aksCombos.indices) {
            for (j in i + 1 until aksCombos.size) {
                aksCombos[i].conflicts(aksCombos[j]) shouldBe false
            }
        }
    }

    test("NLHHand combosForHand - offsuit hand has 12 combos") {
        val akoCombos = NLHHand.combosForHand("AKo")
        akoCombos.size shouldBe 12

        // All should be offsuit
        akoCombos.forEach { it.isSuited() shouldBe false }
        akoCombos.forEach { it.isPair() shouldBe false }

        // All should have ID "AKo"
        akoCombos.forEach { it.id shouldBe "AKo" }

        // All should be unique
        val uniqueCombos = akoCombos.toSet()
        uniqueCombos.size shouldBe 12

        // Offsuit combos DO conflict with each other when they share a card
        // Example: A♠K♥ and A♠K♦ both have A♠
        var conflictCount = 0
        for (i in akoCombos.indices) {
            for (j in i + 1 until akoCombos.size) {
                if (akoCombos[i].conflicts(akoCombos[j])) {
                    conflictCount++
                }
            }
        }
        // Many offsuit combos share at least one card
        conflictCount shouldNotBe 0
    }

    test("NLHHand toString returns ID") {
        val ako = NLHHand(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.KING, Suit.HEARTS)
        )
        ako.toString() shouldBe "AKo"
    }

    test("NLHHand worst hand - 72o") {
        val worst = NLHHand(
            Card(Rank.SEVEN, Suit.SPADES),
            Card(Rank.TWO, Suit.HEARTS)
        )
        worst.id shouldBe "72o"
        worst.highCard().rank shouldBe Rank.SEVEN
        worst.lowCard().rank shouldBe Rank.TWO
    }

    test("NLHHand equality with normalized order") {
        val hand1 = NLHHand(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.KING, Suit.SPADES)
        )

        val hand2 = NLHHand(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.KING, Suit.SPADES)
        )

        val hand3 = NLHHand(
            Card(Rank.KING, Suit.SPADES), // Reversed order
            Card(Rank.ACE, Suit.SPADES)
        )

        // Same cards = equal (order normalized)
        hand1 shouldBe hand2

        // Same cards in different order = equal (automatically normalized)
        hand1 shouldBe hand3
        hand1.id shouldBe hand3.id

        // Both should have same card1 and card2 (normalized)
        hand1.card1 shouldBe hand3.card1
        hand1.card2 shouldBe hand3.card2
    }

    test("NLHHand combos total count") {
        // Verify combo counts: 13 pairs * 6 + 78 non-pairs * 4 suited + 78 non-pairs * 12 offsuit
        // = 78 + 312 + 936 = 1326
        val pairCombos = (0 until 13).sumOf { NLHHand.combosForHand("${Rank.entries[it].symbol}${Rank.entries[it].symbol}").size }
        pairCombos shouldBe 78  // 13 ranks * 6 combos each

        // Count some non-pair combos
        val akSuitedCombos = NLHHand.combosForHand("AKs").size
        akSuitedCombos shouldBe 4

        val akOffsuitCombos = NLHHand.combosForHand("AKo").size
        akOffsuitCombos shouldBe 12
    }
})
