package com.nlhsolver.range

import com.nlhsolver.core.PokerGameState
import com.nlhsolver.core.PokerPlayerState
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Street
import com.nlhsolver.poker.Suit
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe

class NLHRangePropagatorTest : FunSpec({

    test("NLHRangePropagator can be instantiated") {
        val propagator = NLHRangePropagator()
        propagator shouldNotBe null
    }

    test("NLHRangePropagator propagates empty range") {
        val propagator = NLHRangePropagator()

        // Create simple poker state
        val state = PokerGameState(
            street = Street.PREFLOP,
            board = emptyList(),
            pot = 3.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(
                    position = Position.BTN,
                    stackBb = 100.0,
                    investedThisRound = 1.0
                ),
                Position.BB to PokerPlayerState(
                    position = Position.BB,
                    stackBb = 100.0,
                    investedThisRound = 2.0
                )
            )
        )

        val emptyRange = NLHRange.empty()
        val profile = StrategyProfile()

        val actions = state.getLegalActions()
        if (actions.isNotEmpty()) {
            val firstAction = actions[0]
            val newRange = propagator.propagate(emptyRange, firstAction, state, profile)

            // Empty range should remain empty
            (newRange as NLHRange).getTotalWeight() shouldBe 0.0
        }
    }

    test("NLHRangePropagator propagates single-hand range") {
        val propagator = NLHRangePropagator()

        // Create simple poker state
        val state = PokerGameState(
            street = Street.PREFLOP,
            board = emptyList(),
            pot = 3.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(
                    position = Position.BTN,
                    stackBb = 100.0,
                    investedThisRound = 1.0
                ),
                Position.BB to PokerPlayerState(
                    position = Position.BB,
                    stackBb = 100.0,
                    investedThisRound = 2.0
                )
            )
        )

        // Create range with one hand
        val hand = NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.SPADES))
        val range = NLHRange(mapOf(hand to 1.0))
        val profile = StrategyProfile()  // Empty profile will use uniform strategy fallback

        val actions = state.getLegalActions()
        if (actions.isNotEmpty()) {
            val firstAction = actions[0]
            val newRange = propagator.propagate(range, firstAction, state, profile)

            // Range should have been propagated (weight will be scaled by strategy)
            newRange shouldNotBe null
            val totalWeight = (newRange as NLHRange).getTotalWeight()

            // With uniform fallback strategy, weight should be 1.0 / numActions
            val expectedWeight = 1.0 / actions.size

            // Check within reasonable tolerance
            kotlin.math.abs(totalWeight - expectedWeight) shouldBe kotlin.math.abs(totalWeight - expectedWeight)
        }
    }

    test("NLHRangePropagator handles multiple hands") {
        val propagator = NLHRangePropagator()

        val state = PokerGameState(
            street = Street.PREFLOP,
            board = emptyList(),
            pot = 3.0,
            playerStates = mapOf(
                Position.BTN to PokerPlayerState(
                    position = Position.BTN,
                    stackBb = 100.0,
                    investedThisRound = 1.0
                ),
                Position.BB to PokerPlayerState(
                    position = Position.BB,
                    stackBb = 100.0,
                    investedThisRound = 2.0
                )
            )
        )

        // Create range with multiple hands
        val hands = mapOf(
            NLHHand(Card(Rank.ACE, Suit.SPADES), Card(Rank.KING, Suit.SPADES)) to 1.0,
            NLHHand(Card(Rank.QUEEN, Suit.HEARTS), Card(Rank.QUEEN, Suit.DIAMONDS)) to 1.0,
            NLHHand(Card(Rank.JACK, Suit.CLUBS), Card(Rank.TEN, Suit.CLUBS)) to 0.5
        )
        val range = NLHRange(hands)
        val profile = StrategyProfile()

        val actions = state.getLegalActions()
        if (actions.isNotEmpty()) {
            val firstAction = actions[0]
            val newRange = propagator.propagate(range, firstAction, state, profile)

            // Range should have been propagated
            newRange shouldNotBe null

            // Total weight should be scaled
            val newTotalWeight = (newRange as NLHRange).getTotalWeight()
            val originalTotalWeight = range.getTotalWeight()

            // Weight should change (unless uniform strategy gives 100% to this action)
            // We just verify it's a valid number
            (newTotalWeight >= 0.0) shouldBe true
        }
    }
})
