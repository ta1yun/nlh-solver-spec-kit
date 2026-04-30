package com.nlhsolver.integration

import com.nlhsolver.core.SimpleGameAction
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

/**
 * Comprehensive utility verification for 2-round Leduc.
 */
class TwoRoundLeducUtilityTest : FunSpec({

    fun playGame(actions: List<String>, p1Card: Int, p2Card: Int, boardCard: Int): TwoRoundLeducState {
        var state = TwoRoundLeducState(
            p1Card = p1Card, p2Card = p2Card, boardCard = boardCard,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        for (action in actions) {
            state = state.applyAction(SimpleGameAction(action, action)) as TwoRoundLeducState
        }

        return state
    }

    test("R1 fold payoffs") {
        // P1 bets, P2 folds
        val s1 = playGame(listOf("b", "f"), p1Card = 2, p2Card = 0, boardCard = 5)
        println("R1 bet-fold: ${s1.getUtility().contentToString()}, inv=[${s1.p1Invested},${s1.p2Invested}]")
        s1.isTerminal() shouldBe true
        s1.getUtility() shouldBe doubleArrayOf(1.0, -1.0)  // P1 wins P2's ante

        // P1 checks, P2 bets, P1 folds
        val s2 = playGame(listOf("c", "b", "f"), p1Card = 0, p2Card = 2, boardCard = 5)
        println("R1 check-bet-fold: ${s2.getUtility().contentToString()}, inv=[${s2.p1Invested},${s2.p2Invested}]")
        s2.isTerminal() shouldBe true
        s2.getUtility() shouldBe doubleArrayOf(-1.0, 1.0)  // P2 wins P1's ante
    }

    test("R1 check-check, R2 fold payoffs") {
        // R1: cc, R2: P1 bets, P2 folds
        val s1 = playGame(listOf("c", "c", "b", "f"), p1Card = 2, p2Card = 0, boardCard = 5)
        println("cc|bf: ${s1.getUtility().contentToString()}, inv=[${s1.p1Invested},${s1.p2Invested}]")
        s1.isTerminal() shouldBe true
        s1.getUtility() shouldBe doubleArrayOf(1.0, -1.0)  // P1 wins P2's ante

        // R1: cc, R2: P1 checks, P2 bets, P1 folds
        val s2 = playGame(listOf("c", "c", "c", "b", "f"), p1Card = 0, p2Card = 2, boardCard = 5)
        println("cc|cbf: ${s2.getUtility().contentToString()}, inv=[${s2.p1Invested},${s2.p2Invested}]")
        s2.isTerminal() shouldBe true
        s2.getUtility() shouldBe doubleArrayOf(-1.0, 1.0)  // P2 wins P1's ante
    }

    test("R1 bet-call, R2 fold payoffs") {
        // R1: bc (both invested 3), R2: P1 bets, P2 folds
        val s1 = playGame(listOf("b", "c", "b", "f"), p1Card = 2, p2Card = 0, boardCard = 5)
        println("bc|bf: ${s1.getUtility().contentToString()}, inv=[${s1.p1Invested},${s1.p2Invested}]")
        s1.isTerminal() shouldBe true
        s1.p1Invested shouldBe 7.0  // 1 ante + 2 R1 bet + 4 R2 bet
        s1.p2Invested shouldBe 3.0  // 1 ante + 2 R1 call
        s1.getUtility() shouldBe doubleArrayOf(3.0, -3.0)  // P1 wins P2's R1 investment
    }

    test("R1 check-check, R2 check-check showdown") {
        // P1 has pair of Kings, should win
        val s1 = playGame(listOf("c", "c", "c", "c"), p1Card = 4, p2Card = 0, boardCard = 5)
        println("cc|cc (P1 pair K): ${s1.getUtility().contentToString()}")
        s1.isTerminal() shouldBe true
        s1.getUtility() shouldBe doubleArrayOf(1.0, -1.0)

        // P2 has pair of Jacks, should win
        val s2 = playGame(listOf("c", "c", "c", "c"), p1Card = 2, p2Card = 1, boardCard = 0)
        println("cc|cc (P2 pair J): ${s2.getUtility().contentToString()}")
        s2.isTerminal() shouldBe true
        s2.getUtility() shouldBe doubleArrayOf(-1.0, 1.0)

        // Both have high cards, P1=Q > P2=J
        val s3 = playGame(listOf("c", "c", "c", "c"), p1Card = 2, p2Card = 0, boardCard = 5)
        println("cc|cc (P1=Q, P2=J): ${s3.getUtility().contentToString()}")
        s3.isTerminal() shouldBe true
        s3.getUtility() shouldBe doubleArrayOf(1.0, -1.0)
    }

    test("R1 bet-call, R2 bet-call showdown") {
        // P1 has pair, big pot
        val s1 = playGame(listOf("b", "c", "b", "c"), p1Card = 4, p2Card = 0, boardCard = 5)
        println("bc|bc (P1 pair): ${s1.getUtility().contentToString()}, inv=[${s1.p1Invested},${s1.p2Invested}]")
        s1.isTerminal() shouldBe true
        s1.p1Invested shouldBe 7.0  // 1+2+4
        s1.p2Invested shouldBe 7.0  // 1+2+4
        s1.getUtility() shouldBe doubleArrayOf(7.0, -7.0)
    }
})
