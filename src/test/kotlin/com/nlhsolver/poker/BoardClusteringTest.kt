package com.nlhsolver.poker

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe

/**
 * Tests for BoardClustering (T126, T127).
 * Verifies board clustering configuration and texture-based grouping.
 */
class BoardClusteringTest : FunSpec({

    test("none() should create clustering with NONE mode") {
        val clustering = BoardClustering.none()
        clustering.mode shouldBe ClusteringMode.NONE
        clustering.flopClusters shouldBe null
        clustering.turnClusters shouldBe null
        clustering.riverClusters shouldBe null
    }

    test("blueprint() should use aggressive clustering") {
        val clustering = BoardClustering.blueprint()

        clustering.mode shouldBe ClusteringMode.TEXTURE_BASED
        clustering.flopClusters shouldBe 100
        clustering.turnClusters shouldBe 50
        clustering.riverClusters shouldBe null  // No river clustering
    }

    test("blueprint() should support configurable cluster counts") {
        val clustering = BoardClustering.blueprint(flopClusters = 150, turnClusters = 75)

        clustering.flopClusters shouldBe 150
        clustering.turnClusters shouldBe 75
    }

    test("refinement() should use no clustering") {
        val clustering = BoardClustering.refinement()
        clustering.mode shouldBe ClusteringMode.NONE
    }

    test("validation should reject invalid flop cluster counts") {
        val exception = runCatching {
            BoardClustering(
                mode = ClusteringMode.TEXTURE_BASED,
                flopClusters = 5  // < 10, invalid
            )
        }.exceptionOrNull()

        exception shouldNotBe null
        exception!!.message shouldBe "Flop clusters must be 10-1000 (got 5)"
    }

    test("validation should reject invalid turn cluster counts") {
        val exception = runCatching {
            BoardClustering(
                mode = ClusteringMode.TEXTURE_BASED,
                turnClusters = 1000  // > 500, invalid
            )
        }.exceptionOrNull()

        exception shouldNotBe null
        exception!!.message shouldBe "Turn clusters must be 10-500 (got 1000)"
    }

    test("validation should allow NONE mode without cluster counts") {
        // Should not throw
        BoardClustering(
            mode = ClusteringMode.NONE,
            flopClusters = null,
            turnClusters = null
        )
    }

    context("BoardTexture extraction") {
        test("should detect connected boards") {
            val board = listOf(
                Card(Rank.SEVEN, Suit.HEARTS),
                Card(Rank.EIGHT, Suit.DIAMONDS),
                Card(Rank.NINE, Suit.CLUBS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.connectedness shouldBe BoardTexture.Connectedness.CONNECTED
        }

        test("should detect disconnected boards") {
            val board = listOf(
                Card(Rank.TWO, Suit.HEARTS),
                Card(Rank.EIGHT, Suit.DIAMONDS),
                Card(Rank.KING, Suit.CLUBS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.connectedness shouldBe BoardTexture.Connectedness.DISCONNECTED
        }

        test("should detect paired boards") {
            val board = listOf(
                Card(Rank.KING, Suit.HEARTS),
                Card(Rank.KING, Suit.DIAMONDS),
                Card(Rank.NINE, Suit.CLUBS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.pairedStructure shouldBe BoardTexture.PairedStructure.PAIRED
        }

        test("should detect unpaired boards") {
            val board = listOf(
                Card(Rank.ACE, Suit.HEARTS),
                Card(Rank.KING, Suit.DIAMONDS),
                Card(Rank.QUEEN, Suit.CLUBS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.pairedStructure shouldBe BoardTexture.PairedStructure.UNPAIRED
        }

        test("should detect trips") {
            val board = listOf(
                Card(Rank.NINE, Suit.HEARTS),
                Card(Rank.NINE, Suit.DIAMONDS),
                Card(Rank.NINE, Suit.CLUBS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.pairedStructure shouldBe BoardTexture.PairedStructure.TRIPS
        }

        test("should detect monotone boards") {
            val board = listOf(
                Card(Rank.ACE, Suit.HEARTS),
                Card(Rank.KING, Suit.HEARTS),
                Card(Rank.QUEEN, Suit.HEARTS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.suitedness shouldBe BoardTexture.Suitedness.MONOTONE
        }

        test("should detect two-tone boards") {
            val board = listOf(
                Card(Rank.ACE, Suit.HEARTS),
                Card(Rank.KING, Suit.HEARTS),
                Card(Rank.QUEEN, Suit.DIAMONDS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.suitedness shouldBe BoardTexture.Suitedness.TWO_TONE
        }

        test("should detect rainbow boards") {
            val board = listOf(
                Card(Rank.ACE, Suit.HEARTS),
                Card(Rank.SEVEN, Suit.DIAMONDS),
                Card(Rank.TWO, Suit.CLUBS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.suitedness shouldBe BoardTexture.Suitedness.RAINBOW
        }

        test("should detect high card density") {
            val board = listOf(
                Card(Rank.ACE, Suit.HEARTS),
                Card(Rank.KING, Suit.DIAMONDS),
                Card(Rank.QUEEN, Suit.CLUBS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.highCardDensity shouldBe BoardTexture.HighCardDensity.HIGH
        }

        test("should detect medium card density") {
            val board = listOf(
                Card(Rank.KING, Suit.HEARTS),
                Card(Rank.QUEEN, Suit.DIAMONDS),
                Card(Rank.TWO, Suit.CLUBS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.highCardDensity shouldBe BoardTexture.HighCardDensity.MEDIUM
        }

        test("should detect low card density") {
            val board = listOf(
                Card(Rank.SEVEN, Suit.HEARTS),
                Card(Rank.FIVE, Suit.DIAMONDS),
                Card(Rank.TWO, Suit.CLUBS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.highCardDensity shouldBe BoardTexture.HighCardDensity.LOW
        }

        test("should handle turn boards (4 cards)") {
            val board = listOf(
                Card(Rank.ACE, Suit.HEARTS),
                Card(Rank.KING, Suit.DIAMONDS),
                Card(Rank.QUEEN, Suit.CLUBS),
                Card(Rank.JACK, Suit.SPADES)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.connectedness shouldBe BoardTexture.Connectedness.CONNECTED
            texture.highCardDensity shouldBe BoardTexture.HighCardDensity.HIGH
        }

        test("should handle river boards (5 cards)") {
            val board = listOf(
                Card(Rank.ACE, Suit.HEARTS),
                Card(Rank.KING, Suit.HEARTS),
                Card(Rank.QUEEN, Suit.HEARTS),
                Card(Rank.JACK, Suit.HEARTS),
                Card(Rank.TEN, Suit.DIAMONDS)
            )

            val texture = BoardTexture.fromBoard(board)
            texture.connectedness shouldBe BoardTexture.Connectedness.CONNECTED
            texture.suitedness shouldBe BoardTexture.Suitedness.TWO_TONE  // 4 hearts, 1 diamond
        }
    }
})
