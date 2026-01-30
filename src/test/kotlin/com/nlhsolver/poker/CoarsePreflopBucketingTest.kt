package com.nlhsolver.poker

import com.nlhsolver.poker.PreflopBuckets.PreflopHand
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import io.kotest.matchers.collections.shouldContain
import io.kotest.matchers.collections.shouldHaveSize
import io.kotest.matchers.ints.shouldBeInRange
import io.kotest.matchers.string.shouldContain

/**
 * Tests for CoarsePreflopBucketing (T125).
 * Verifies strategic grouping of 169 canonical hands into 8/12/15 buckets.
 */
class CoarsePreflopBucketingTest : FunSpec({

    context("8-bucket grouping") {
        test("should group premium pairs (QQ+) into bucket 0") {
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("AA")) shouldBe 0
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("KK")) shouldBe 0
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("QQ")) shouldBe 0
        }

        test("should group medium pairs (77-JJ) into bucket 1") {
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("JJ")) shouldBe 1
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("TT")) shouldBe 1
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("99")) shouldBe 1
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("88")) shouldBe 1
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("77")) shouldBe 1
        }

        test("should group small pairs (22-66) into bucket 2") {
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("66")) shouldBe 2
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("55")) shouldBe 2
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("22")) shouldBe 2
        }

        test("should group broadway (AK, AQ) into bucket 3") {
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("AKs")) shouldBe 3
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("AKo")) shouldBe 3
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("AQs")) shouldBe 3
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("AQo")) shouldBe 3
        }

        test("should group suited connectors into bucket 4") {
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("JTs")) shouldBe 4
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("T9s")) shouldBe 4
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("98s")) shouldBe 4
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("87s")) shouldBe 4
        }

        test("should group offsuit broadways into bucket 5") {
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("KQo")) shouldBe 5
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("QJo")) shouldBe 5
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("JTo")) shouldBe 5
        }

        test("should group suited aces (A9s-A2s) into bucket 6") {
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("A9s")) shouldBe 6
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("A5s")) shouldBe 6
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("A2s")) shouldBe 6
        }

        test("should group trash into bucket 7") {
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("72o")) shouldBe 7
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("83o")) shouldBe 7
            CoarsePreflopBucketing.getBucket8(PreflopHand.fromNotation("J2o")) shouldBe 7
        }

        test("all hands should map to exactly one bucket 0-7") {
            val buckets = PreflopBuckets.allHands.map { hand ->
                CoarsePreflopBucketing.getBucket8(hand)
            }

            buckets.forEach { bucket ->
                bucket shouldBeInRange 0..7
            }
        }

        test("should produce descriptions for all 8 buckets") {
            for (bucketId in 0..7) {
                val description = CoarsePreflopBucketing.getBucketDescription(bucketId, numBuckets = 8)
                description shouldNotBe "Unknown"
            }
        }
    }

    context("12-bucket grouping") {
        test("should separate AA/KK from QQ/JJ") {
            CoarsePreflopBucketing.getBucket12(PreflopHand.fromNotation("AA")) shouldBe 0
            CoarsePreflopBucketing.getBucket12(PreflopHand.fromNotation("KK")) shouldBe 0
            CoarsePreflopBucketing.getBucket12(PreflopHand.fromNotation("QQ")) shouldBe 1
            CoarsePreflopBucketing.getBucket12(PreflopHand.fromNotation("JJ")) shouldBe 1
        }

        test("should separate AKs/AKo from AQs/AJs") {
            CoarsePreflopBucketing.getBucket12(PreflopHand.fromNotation("AKs")) shouldBe 4
            CoarsePreflopBucketing.getBucket12(PreflopHand.fromNotation("AKo")) shouldBe 4
            CoarsePreflopBucketing.getBucket12(PreflopHand.fromNotation("AQs")) shouldBe 5
            CoarsePreflopBucketing.getBucket12(PreflopHand.fromNotation("AJs")) shouldBe 5
        }

        test("all hands should map to exactly one bucket 0-11") {
            val buckets = PreflopBuckets.allHands.map { hand ->
                CoarsePreflopBucketing.getBucket12(hand)
            }

            buckets.forEach { bucket ->
                bucket shouldBeInRange 0..11
            }
        }
    }

    context("15-bucket grouping") {
        test("should give AA its own bucket") {
            CoarsePreflopBucketing.getBucket15(PreflopHand.fromNotation("AA")) shouldBe 0
        }

        test("should give KK its own bucket") {
            CoarsePreflopBucketing.getBucket15(PreflopHand.fromNotation("KK")) shouldBe 1
        }

        test("should give QQ its own bucket") {
            CoarsePreflopBucketing.getBucket15(PreflopHand.fromNotation("QQ")) shouldBe 2
        }

        test("should separate high and low suited connectors") {
            CoarsePreflopBucketing.getBucket15(PreflopHand.fromNotation("JTs")) shouldBe 9
            CoarsePreflopBucketing.getBucket15(PreflopHand.fromNotation("T9s")) shouldBe 9
            CoarsePreflopBucketing.getBucket15(PreflopHand.fromNotation("98s")) shouldBe 9

            CoarsePreflopBucketing.getBucket15(PreflopHand.fromNotation("87s")) shouldBe 10
            CoarsePreflopBucketing.getBucket15(PreflopHand.fromNotation("76s")) shouldBe 10
        }

        test("all hands should map to exactly one bucket 0-14") {
            val buckets = PreflopBuckets.allHands.map { hand ->
                CoarsePreflopBucketing.getBucket15(hand)
            }

            buckets.forEach { bucket ->
                bucket shouldBeInRange 0..14
            }
        }
    }

    context("getBucket() with numBuckets parameter") {
        test("should dispatch to correct bucketing function") {
            val hand = PreflopHand.fromNotation("AA")

            CoarsePreflopBucketing.getBucket(hand, 8) shouldBe
                CoarsePreflopBucketing.getBucket8(hand)

            CoarsePreflopBucketing.getBucket(hand, 12) shouldBe
                CoarsePreflopBucketing.getBucket12(hand)

            CoarsePreflopBucketing.getBucket(hand, 15) shouldBe
                CoarsePreflopBucketing.getBucket15(hand)
        }

        test("should throw on unsupported bucket count") {
            val exception = runCatching {
                CoarsePreflopBucketing.getBucket(PreflopHand.fromNotation("AA"), 10)
            }.exceptionOrNull()

            exception shouldNotBe null
            exception!!.message shouldContain "Unsupported bucket count"
        }
    }

    context("getBucketFromNotation()") {
        test("should accept notation strings") {
            CoarsePreflopBucketing.getBucketFromNotation("AA", 8) shouldBe 0
            CoarsePreflopBucketing.getBucketFromNotation("72o", 8) shouldBe 7
        }
    }

    context("getHandsInBucket()") {
        test("should return all hands in bucket 0 for 8-bucket grouping") {
            val bucket0Hands = CoarsePreflopBucketing.getHandsInBucket(0, 8)

            // Premium pairs: AA, KK, QQ
            bucket0Hands shouldHaveSize 3
            val notations = bucket0Hands.map { it.notation }
            notations shouldContain "AA"
            notations shouldContain "KK"
            notations shouldContain "QQ"
        }

        test("should return all hands in bucket 3 for 8-bucket grouping") {
            val bucket3Hands = CoarsePreflopBucketing.getHandsInBucket(3, 8)

            // Broadway: AKs, AKo, AQs, AQo
            bucket3Hands shouldHaveSize 4
            val notations = bucket3Hands.map { it.notation }
            notations shouldContain "AKs"
            notations shouldContain "AKo"
            notations shouldContain "AQs"
            notations shouldContain "AQo"
        }

        test("all buckets should partition the 169 hands") {
            val all8Buckets = (0..7).flatMap { bucketId ->
                CoarsePreflopBucketing.getHandsInBucket(bucketId, 8)
            }

            all8Buckets shouldHaveSize 169
        }
    }

    context("bucket descriptions") {
        test("should provide meaningful descriptions for 8-bucket mode") {
            CoarsePreflopBucketing.getBucketDescription(0, 8) shouldBe "Premium pairs (QQ+)"
            CoarsePreflopBucketing.getBucketDescription(3, 8) shouldBe "Broadway (AK, AQ)"
            CoarsePreflopBucketing.getBucketDescription(7, 8) shouldBe "Trash"
        }

        test("should provide meaningful descriptions for 12-bucket mode") {
            CoarsePreflopBucketing.getBucketDescription(0, 12) shouldBe "Premium pairs (AA, KK)"
            CoarsePreflopBucketing.getBucketDescription(4, 12) shouldBe "AK (suited and offsuit)"
        }

        test("should provide meaningful descriptions for 15-bucket mode") {
            CoarsePreflopBucketing.getBucketDescription(0, 15) shouldBe "AA"
            CoarsePreflopBucketing.getBucketDescription(1, 15) shouldBe "KK"
            CoarsePreflopBucketing.getBucketDescription(14, 15) shouldBe "Trash"
        }
    }
})
