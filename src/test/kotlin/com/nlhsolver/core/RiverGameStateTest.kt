package com.nlhsolver.core

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Street
import com.nlhsolver.poker.Suit
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*

/**
 * Test river game state creation and basic properties.
 */
class RiverGameStateTest {

    @Test
    fun `create simple river game state`() {
        val board = listOf(
            Card(Rank.KING, Suit.SPADES),
            Card(Rank.SEVEN, Suit.HEARTS),
            Card(Rank.TWO, Suit.DIAMONDS),
            Card(Rank.NINE, Suit.CLUBS),
            Card(Rank.FOUR, Suit.HEARTS)
        )

        val btnHand = Pair(Card(Rank.ACE, Suit.CLUBS), Card(Rank.ACE, Suit.DIAMONDS))
        val bbHand = Pair(Card(Rank.JACK, Suit.SPADES), Card(Rank.JACK, Suit.HEARTS))

        val state = StartingHandSampler.createGameState(
            street = Street.RIVER,
            board = board,
            btnHand = btnHand,
            bbHand = bbHand,
            btnStack = 50.0,
            bbStack = 50.0,
            pot = 20.0,
            btnInvested = 0.0,
            bbInvested = 0.0
        )

        println("Created river game state:")
        println("  Street: ${state.street}")
        println("  Board: ${state.board.joinToString("")}")
        println("  Pot: ${state.pot}")
        println("  Is terminal: ${state.isTerminal()}")
        println("  Current player: ${state.currentPlayer()}")
        println("  Legal actions: ${state.getLegalActions().size}")

        // Assertions
        assertEquals(Street.RIVER, state.street)
        assertEquals(5, state.board.size)
        assertEquals(20.0, state.pot, 0.01)
        assertFalse(state.isTerminal(), "State should not be terminal")
        assertNotNull(state.currentPlayer(), "State should have a current player")

        val currentPlayer = state.currentPlayer()
        println("  Current player position: ${if (currentPlayer == 0) "BTN" else "BB"}")

        // Should have legal actions
        val actions = state.getLegalActions()
        assertTrue(actions.isNotEmpty(), "Should have legal actions")
        println("  Legal actions: $actions")
    }
}
