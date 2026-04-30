package com.nlhsolver.integration

import com.nlhsolver.core.*
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Street
import com.nlhsolver.poker.PostflopBucketing
import com.nlhsolver.solver.AbstractionMode
import io.kotest.core.spec.style.FunSpec

/**
 * Check which buckets different matchups use to understand collisions.
 */
class BucketCollisionTest : FunSpec({

    test("check bucket assignments for different matchups") {
        println("\n=== Bucket Collision Analysis ===\n")

        val board = listOf(
            Card.fromString("Qd"),
            Card.fromString("7c"),
            Card.fromString("2h")
        )

        val bucketing = PostflopBucketing(numBuckets = 25)

        val matchups = listOf(
            "AA" to Pair(Card.fromString("As"), Card.fromString("Ah")),
            "KK" to Pair(Card.fromString("Ks"), Card.fromString("Kh")),
            "JJ" to Pair(Card.fromString("Js"), Card.fromString("Jh")),
            "TT" to Pair(Card.fromString("Ts"), Card.fromString("Th")),
            "99" to Pair(Card.fromString("9s"), Card.fromString("9h")),
            "AK" to Pair(Card.fromString("As"), Card.fromString("Kd")),
            "A5s" to Pair(Card.fromString("As"), Card.fromString("5s"))
        )

        println("Board: Qd7c2h")
        println("\nBucket assignments on FLOP:")
        for ((name, hand) in matchups) {
            val bucket = bucketing.getBucket(hand, board, Street.FLOP)
            println("  ${name.padEnd(6)}: bucket $bucket")
        }

        // Check if any buckets collide
        val bucketMap = mutableMapOf<Int, MutableList<String>>()
        for ((name, hand) in matchups) {
            val bucket = bucketing.getBucket(hand, board, Street.FLOP)
            bucketMap.getOrPut(bucket) { mutableListOf() }.add(name)
        }

        println("\nBucket collisions:")
        for ((bucket, hands) in bucketMap.toSortedMap()) {
            if (hands.size > 1) {
                println("  Bucket $bucket: ${hands.joinToString(", ")} *** COLLISION ***")
            } else {
                println("  Bucket $bucket: ${hands[0]}")
            }
        }

        // Now check turn and river
        println("\nExample TURN card: 4s (Qd7c2h4s)")
        val turnBoard = board + Card.fromString("4s")
        for ((name, hand) in matchups) {
            val bucket = bucketing.getBucket(hand, turnBoard, Street.TURN)
            println("  ${name.padEnd(6)}: bucket $bucket")
        }

        println("\nExample RIVER card: 8d (Qd7c2h4s8d)")
        val riverBoard = turnBoard + Card.fromString("8d")
        for ((name, hand) in matchups) {
            val bucket = bucketing.getBucket(hand, riverBoard, Street.RIVER)
            println("  ${name.padEnd(6)}: bucket $bucket")
        }
    }
})
