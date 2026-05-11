package com.nlhsolver.export

import com.nlhsolver.core.PokerGameState
import com.nlhsolver.core.PokerPlayerState
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Street
import com.nlhsolver.poker.Suit
import com.nlhsolver.range.NLHHand
import com.nlhsolver.range.NLHRange
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeGreaterThan
import io.kotest.matchers.doubles.shouldBeLessThan
import io.kotest.matchers.shouldBe

class NLHEVCalculatorTest : FunSpec({

    val evCalc = NLHEVCalculator()

    test("NLHEVCalculator getMatchupUtility - hero wins") {
        // Create river state with complete board
        val state = PokerGameState(
            street = Street.RIVER,
            board = listOf(
                Card(Rank.ACE, Suit.DIAMONDS),
                Card(Rank.KING, Suit.CLUBS),
                Card(Rank.QUEEN, Suit.HEARTS),
                Card(Rank.SEVEN, Suit.SPADES),
                Card(Rank.TWO, Suit.CLUBS)
            ),
            pot = 100.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(Position.BTN, 100.0),
                Position.BB to PokerPlayerState(Position.BB, 100.0)
            )
        )

        // Hero has two pair (aces and kings)
        val heroHand = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.DIAMONDS))

        // Opponent has one pair (queens)
        val oppHand = NLHHand(Card(Rank.QUEEN, Suit.SPADES), Card(Rank.NINE, Suit.SPADES))

        val utility = evCalc.getMatchupUtility(state, heroHand, oppHand, heroPlayer = 0)

        // Hero should win the pot
        utility shouldBe 100.0
    }

    test("NLHEVCalculator getMatchupUtility - hero loses") {
        val state = PokerGameState(
            street = Street.RIVER,
            board = listOf(
                Card(Rank.ACE, Suit.DIAMONDS),
                Card(Rank.KING, Suit.CLUBS),
                Card(Rank.QUEEN, Suit.HEARTS),
                Card(Rank.SEVEN, Suit.SPADES),
                Card(Rank.TWO, Suit.CLUBS)
            ),
            pot = 100.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(Position.BTN, 100.0),
                Position.BB to PokerPlayerState(Position.BB, 100.0)
            )
        )

        // Hero has one pair (queens)
        val heroHand = NLHHand(Card(Rank.QUEEN, Suit.SPADES), Card(Rank.NINE, Suit.SPADES))

        // Opponent has two pair (aces and kings)
        val oppHand = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.DIAMONDS))

        val utility = evCalc.getMatchupUtility(state, heroHand, oppHand, heroPlayer = 0)

        // Hero should lose the pot
        utility shouldBe -100.0
    }

    test("NLHEVCalculator getMatchupUtility - tie") {
        val state = PokerGameState(
            street = Street.RIVER,
            board = listOf(
                Card(Rank.ACE, Suit.DIAMONDS),
                Card(Rank.KING, Suit.DIAMONDS),
                Card(Rank.QUEEN, Suit.DIAMONDS),
                Card(Rank.JACK, Suit.DIAMONDS),
                Card(Rank.TEN, Suit.DIAMONDS)
            ),
            pot = 100.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(Position.BTN, 100.0),
                Position.BB to PokerPlayerState(Position.BB, 100.0)
            )
        )

        // Both players have same royal flush on board
        val heroHand = NLHHand(Card(Rank.TWO, Suit.SPADES), Card(Rank.THREE, Suit.SPADES))
        val oppHand = NLHHand(Card(Rank.FOUR, Suit.SPADES), Card(Rank.FIVE, Suit.SPADES))

        val utility = evCalc.getMatchupUtility(state, heroHand, oppHand, heroPlayer = 0)

        // Tie - pot split
        utility shouldBe 0.0
    }

    test("NLHEVCalculator getValidOpponentHands filters conflicting cards") {
        val state = PokerGameState(
            street = Street.RIVER,
            board = listOf(
                Card(Rank.ACE, Suit.DIAMONDS),
                Card(Rank.KING, Suit.DIAMONDS),
                Card(Rank.QUEEN, Suit.DIAMONDS),
                Card(Rank.JACK, Suit.DIAMONDS),
                Card(Rank.TEN, Suit.DIAMONDS)
            ),
            pot = 100.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(Position.BTN, 100.0),
                Position.BB to PokerPlayerState(Position.BB, 100.0)
            )
        )

        // Hero has A♠K♠
        val heroHand = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.SPADES))

        // Opponent range includes hands with conflicting cards
        val oppRange = NLHRange(mapOf(
            NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.QUEEN, Suit.SPADES)) to 1.0,  // Conflicts (A♠)
            NLHHand(Card(Rank.QUEEN, Suit.HEARTS), Card(Rank.QUEEN, Suit.CLUBS)) to 1.0,   // OK
            NLHHand(Card(Rank.ACE, Suit.DIAMONDS), Card(Rank.ACE, Suit.CLUBS)) to 1.0      // Conflicts (A♦ on board)
        ))

        val validHands = evCalc.getValidOpponentHands(heroHand, state, oppRange)

        // Only QQ should remain (doesn't conflict with hero or board)
        validHands.size shouldBe 1
        val (hand, weight) = validHands[0]
        hand.id shouldBe "QQ"
        weight shouldBe 1.0
    }

    test("NLHEVCalculator shouldAverageOverBoards") {
        // PREFLOP with no board - should average
        val preflopState = PokerGameState(
            street = Street.PREFLOP,
            board = emptyList(),
            pot = 3.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(Position.BTN, 100.0),
                Position.BB to PokerPlayerState(Position.BB, 100.0)
            )
        )
        evCalc.shouldAverageOverBoards(preflopState) shouldBe true

        // FLOP with 3 cards - should average over turn
        val flopState = preflopState.copy(
            street = Street.FLOP,
            board = listOf(
                Card(Rank.ACE, Suit.SPADES),
                Card(Rank.KING, Suit.HEARTS),
                Card(Rank.QUEEN, Suit.DIAMONDS)
            )
        )
        evCalc.shouldAverageOverBoards(flopState) shouldBe true

        // TURN with 4 cards - should average over river
        val turnState = flopState.copy(
            street = Street.TURN,
            board = flopState.board + Card(Rank.JACK, Suit.CLUBS)
        )
        evCalc.shouldAverageOverBoards(turnState) shouldBe true

        // RIVER with 5 cards - no averaging needed
        val riverState = turnState.copy(
            street = Street.RIVER,
            board = turnState.board + Card(Rank.TEN, Suit.SPADES)
        )
        evCalc.shouldAverageOverBoards(riverState) shouldBe false
    }

    test("NLHEVCalculator getPossibleBoards generates turn cards") {
        val flopState = PokerGameState(
            street = Street.FLOP,
            board = listOf(
                Card(Rank.ACE, Suit.SPADES),
                Card(Rank.KING, Suit.HEARTS),
                Card(Rank.QUEEN, Suit.DIAMONDS)
            ),
            pot = 100.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(Position.BTN, 100.0),
                Position.BB to PokerPlayerState(Position.BB, 100.0)
            )
        )

        val heroHand = NLHHand(Card(Rank.JACK, Suit.CLUBS), Card(Rank.TEN, Suit.CLUBS))
        val oppRange = NLHRange.empty()

        val boards = evCalc.getPossibleBoards(flopState, heroHand)

        // Should generate 52 - 2 (hero) - 3 (board) = 47 possible turn cards
        boards.size shouldBe 47

        // Each should have probability 1/47
        boards.forEach { (state, prob) ->
            state.street shouldBe Street.TURN
            state.board.size shouldBe 4
            prob shouldBe 1.0 / 47.0
        }

        // Total probability should sum to ~1.0
        val totalProb = boards.sumOf { it.second }
        kotlin.math.abs(totalProb - 1.0) shouldBeLessThan 0.001
    }

    test("NLHEVCalculator getPossibleBoards generates river cards") {
        val turnState = PokerGameState(
            street = Street.TURN,
            board = listOf(
                Card(Rank.ACE, Suit.SPADES),
                Card(Rank.KING, Suit.HEARTS),
                Card(Rank.QUEEN, Suit.DIAMONDS),
                Card(Rank.JACK, Suit.CLUBS)
            ),
            pot = 100.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(Position.BTN, 100.0),
                Position.BB to PokerPlayerState(Position.BB, 100.0)
            )
        )

        val heroHand = NLHHand(Card(Rank.TEN, Suit.CLUBS), Card(Rank.NINE, Suit.CLUBS))
        val oppRange = NLHRange.empty()

        val boards = evCalc.getPossibleBoards(turnState, heroHand)

        // Should generate 52 - 6 (hero + board) = 46 possible river cards
        boards.size shouldBe 46

        // Each should have probability 1/46
        boards.forEach { (state, prob) ->
            state.street shouldBe Street.RIVER
            state.board.size shouldBe 5
            prob shouldBe 1.0 / 46.0
        }

        // Total probability should sum to ~1.0
        val totalProb = boards.sumOf { it.second }
        kotlin.math.abs(totalProb - 1.0) shouldBeLessThan 0.001
    }

    test("NLHEVCalculator calculateEV smoke test") {
        // Simple smoke test - just verify it doesn't crash
        val riverState = PokerGameState(
            street = Street.RIVER,
            board = listOf(
                Card(Rank.ACE, Suit.SPADES),
                Card(Rank.KING, Suit.HEARTS),
                Card(Rank.QUEEN, Suit.DIAMONDS),
                Card(Rank.JACK, Suit.CLUBS),
                Card(Rank.TEN, Suit.SPADES)
            ),
            pot = 100.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(Position.BTN, 100.0),
                Position.BB to PokerPlayerState(Position.BB, 100.0)
            )
        )

        val heroHand = NLHHand(Card(Rank.NINE, Suit.SPADES), Card(Rank.EIGHT, Suit.SPADES))
        val heroRange = NLHRange(mapOf(heroHand to 1.0))
        val oppRange = NLHRange(mapOf(
            NLHHand(Card(Rank.TWO, Suit.CLUBS), Card(Rank.THREE, Suit.CLUBS)) to 1.0
        ))

        val profile = StrategyProfile()

        // Calculate EV (won't be meaningful without trained strategy, but should not crash)
        val ev = evCalc.calculateEV(riverState, heroHand, heroRange, oppRange, profile, heroPlayer = 0)

        // Just verify it returns a finite number
        ev.isFinite() shouldBe true
    }
})
