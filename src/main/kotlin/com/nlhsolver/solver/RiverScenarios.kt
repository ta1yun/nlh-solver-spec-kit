package com.nlhsolver.solver

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Suit

/**
 * Preset river scenario configurations for testing and validation.
 *
 * These scenarios are designed to:
 * - Test solver correctness on smaller game trees (river has fewer nodes than preflop)
 * - Verify exploitability convergence
 * - Validate MDF (Minimum Defense Frequency) compliance
 * - Benchmark performance characteristics
 */
object RiverScenarios {
    /**
     * Condensed vs Polarized river spot.
     *
     * Setup:
     * - Board: K♠ 7♥ 2♦ 9♣ 4♥ (dry, no flush, no obvious straight)
     * - BTN bet 75% pot on river
     * - BB faces call/fold decision
     * - BTN range: Polarized (strong hands + bluffs, no medium strength)
     * - BB range: Condensed (medium strength, capped range)
     *
     * Expected GTO behavior:
     * - BTN should bet value hands (top pair+) and bluffs (air)
     * - BB should defend at least MDF frequency (~57% with 0.75 pot bet)
     * - Exploitability should converge to near 0
     *
     * Use case:
     * - Verify solver handles polarized vs condensed dynamics
     * - Test convergence on realistic postflop scenario
     * - Benchmark solve time vs preflop
     */
    fun condensedVsPolarized(): SolveConfiguration {
        val board = listOf(
            Card(Rank.KING, Suit.SPADES),
            Card(Rank.SEVEN, Suit.HEARTS),
            Card(Rank.TWO, Suit.DIAMONDS),
            Card(Rank.NINE, Suit.CLUBS),
            Card(Rank.FOUR, Suit.HEARTS)
        )

        val pot = 20.0
        val betSize = 15.0  // 0.75 pot

        return SolveConfiguration.river(
            board = board,
            btnRange = HandRange.polarized(
                topPercent = 20.0,    // Top 20% (sets, two pair, top pair)
                bottomPercent = 10.0, // Bottom 10% (bluffs - missed draws, weak hands)
                board = board
            ),
            bbRange = HandRange.condensed(
                percent = 50.0,  // Middle 50% (medium pairs, weak top pair, bluff catchers)
                board = board
            ),
            pot = pot + betSize,
            stackSizes = mapOf(
                Position.BTN to (50.0 - betSize),
                Position.BB to 50.0
            ),
            btnInvested = betSize,
            bbInvested = 0.0,
            convergenceCriteria = ConvergenceCriteria(
                targetExploitability = 0.01,  // 1% exploitability target
                maxIterations = 100_000,
                evaluationFrequency = 1000     // Check every 1000 iterations
            ),
            name = "River: Condensed vs Polarized (K♠7♥2♦9♣4♥)"
        )
    }

    /**
     * MDF verification scenario.
     *
     * Simple river spot designed to verify Minimum Defense Frequency calculations:
     * - BTN bets X pot
     * - BB should defend at MDF = POT / (POT + BET) to prevent pure bluff exploitation
     *
     * With 0.5 pot bet: MDF = 20 / (20 + 10) = 66.67%
     * If BB folds more than 33.33%, BTN can profitably bluff any two cards.
     *
     * Setup:
     * - Board: A♠ K♥ Q♦ J♣ T♥ (straight board - reduces variance in hand strength)
     * - BTN bets 0.5 pot (default, configurable)
     * - Both players have uniform ranges (all possible hands)
     *
     * Expected behavior:
     * - BB should defend at ~66.67% frequency (with 0.5 pot bet)
     * - Defense frequency = call% + raise%
     * - Should be verifiable with MDFCalculator
     *
     * Use case:
     * - Verify MDF calculations match poker theory
     * - Test defense frequency analysis
     * - Validate exploitability in simple scenarios
     *
     * @param betSizeMultiplier Bet size as fraction of pot (e.g., 0.5 = half pot, 1.0 = pot-sized)
     */
    fun mdfTest(betSizeMultiplier: Double = 0.5): SolveConfiguration {
        require(betSizeMultiplier > 0.0) { "Bet size multiplier must be positive" }

        val board = listOf(
            Card(Rank.ACE, Suit.SPADES),
            Card(Rank.KING, Suit.HEARTS),
            Card(Rank.QUEEN, Suit.DIAMONDS),
            Card(Rank.JACK, Suit.CLUBS),
            Card(Rank.TEN, Suit.HEARTS)
        )

        val pot = 20.0
        val betSize = pot * betSizeMultiplier

        // Use simplified uniform ranges for MDF test (all hands equally weighted)
        // This removes hand strength variance and focuses on MDF mechanics
        val allPossibleHands = Card.standardDeck()
            .filterNot { it in board }
            .let { deck ->
                val hands = mutableListOf<Pair<Card, Card>>()
                for (i in deck.indices) {
                    for (j in i + 1 until deck.size) {
                        hands.add(Pair(deck[i], deck[j]))
                    }
                }
                hands
            }

        return SolveConfiguration.river(
            board = board,
            btnRange = HandRange.uniform(allPossibleHands),
            bbRange = HandRange.uniform(allPossibleHands),
            pot = pot + betSize,
            stackSizes = mapOf(
                Position.BTN to (50.0 - betSize),
                Position.BB to 50.0
            ),
            btnInvested = betSize,
            bbInvested = 0.0,
            convergenceCriteria = ConvergenceCriteria(
                targetExploitability = 0.001,  // 0.1% target (tighter for MDF verification)
                maxIterations = 50_000,
                evaluationFrequency = 500
            ),
            name = "River: MDF Test (${betSizeMultiplier}x pot bet)"
        )
    }

    /**
     * Toy example: Minimal polarized vs condensed ranges.
     *
     * This is the smallest possible meaningful scenario for testing:
     * - BTN (Polarized): 2 value hands (AA, KK) + 2 bluffs (65o, 53o) = 4 hands
     * - BB (Condensed): 3 bluff catchers (QQ, JJ, TT) = 3 hands
     * - Total: 4 × 3 = 12 matchups
     *
     * Hand rankings on board K♠ 7♥ 2♦ 9♣ 4♥:
     * - KK (top set) > AA (overpair) > QQ > JJ > TT > 65o/53o (air)
     * - BB's entire range loses to BTN's value but beats BTN's bluffs
     * - NOTE: Bluffs use ranks NOT on board (6,5,3) to avoid accidental pairs
     *
     * Setup:
     * - Board: K♠ 7♥ 2♦ 9♣ 4♥ (dry board)
     * - Pot: 20, BTN bets 10 (0.5x pot)
     * - MDF = 20/(20+10) = 66.67%
     *
     * Expected GTO:
     * - BTN should bet all value hands (100%) and bluff at optimal frequency
     * - Optimal bluff frequency: alpha = bet/(pot+bet) = 10/30 = 33%
     * - BB should defend ~66.67% (MDF) to make BTN indifferent to bluffing
     * - Exploitability should be near 0 with correct frequencies
     *
     * Use case:
     * - Verify basic solver correctness on minimal example
     * - Test MDF calculations with known correct answer
     * - Fast convergence for development/debugging
     * - Educational example of polarized vs condensed dynamics
     */
    fun toyPolarizedVsCondensed(): SolveConfiguration {
        val board = listOf(
            Card(Rank.KING, Suit.SPADES),
            Card(Rank.SEVEN, Suit.HEARTS),
            Card(Rank.TWO, Suit.DIAMONDS),
            Card(Rank.NINE, Suit.CLUBS),
            Card(Rank.FOUR, Suit.HEARTS)
        )

        // BTN Polarized Range: Strong hands + Bluffs (no medium)
        // Board is K♠ 7♥ 2♦ 9♣ 4♥ - bluffs must not pair any board card
        val btnPolarizedRange = listOf(
            // Strong hands (top of range)
            Pair(Card(Rank.ACE, Suit.CLUBS), Card(Rank.ACE, Suit.DIAMONDS)),     // AA (overpair - value)
            Pair(Card(Rank.KING, Suit.HEARTS), Card(Rank.KING, Suit.DIAMONDS)),  // KK (top set - nuts)
            // Bluffs (bottom of range) - ranks not on board: 6, 5, 3, 8, T, J, Q
            Pair(Card(Rank.SIX, Suit.CLUBS), Card(Rank.FIVE, Suit.HEARTS)),      // 65o (6-high, pure air)
            Pair(Card(Rank.FIVE, Suit.CLUBS), Card(Rank.THREE, Suit.SPADES))     // 53o (5-high, pure air)
        )

        // BB Condensed Range: Medium strength (capped, no nuts)
        // All hands lose to BTN's value (AA, KK) but beat BTN's bluffs (72o, 83o)
        val bbCondensedRange = listOf(
            Pair(Card(Rank.QUEEN, Suit.SPADES), Card(Rank.QUEEN, Suit.HEARTS)),  // QQ (best bluff catcher)
            Pair(Card(Rank.JACK, Suit.SPADES), Card(Rank.JACK, Suit.HEARTS)),    // JJ (medium bluff catcher)
            Pair(Card(Rank.TEN, Suit.SPADES), Card(Rank.TEN, Suit.DIAMONDS))     // TT (weakest bluff catcher)
        )

        val pot = 20.0

        // Start at beginning of river action (no bets yet)
        // This is simpler to debug than starting mid-action
        return SolveConfiguration.river(
            board = board,
            btnRange = HandRange.uniform(btnPolarizedRange),
            bbRange = HandRange.uniform(bbCondensedRange),
            pot = pot,
            stackSizes = mapOf(
                Position.BTN to 50.0,
                Position.BB to 50.0
            ),
            btnInvested = 0.0,
            bbInvested = 0.0,
            convergenceCriteria = ConvergenceCriteria(
                targetExploitability = 0.20,   // 20% target for initial testing
                maxIterations = 50_000,        // More iterations for convergence
                evaluationFrequency = 1000
            ),
            name = "Toy: Polarized vs Condensed (4 hands vs 3 hands)",
            maxRaisesPerStreet = 0  // No raises - classic bet/call/fold only
        )
    }

    /**
     * Simple river scenario with small ranges for quick testing.
     *
     * Setup:
     * - Board: 7♠ 7♥ 2♦ 2♣ 3♥ (paired board)
     * - BTN and BB each have only a few hand combos
     * - Very small game tree for fast convergence
     *
     * Use case:
     * - Quick smoke test for river solving
     * - Development/debugging
     * - CI/CD fast validation
     */
    fun quickTest(): SolveConfiguration {
        val board = listOf(
            Card(Rank.SEVEN, Suit.SPADES),
            Card(Rank.SEVEN, Suit.HEARTS),
            Card(Rank.TWO, Suit.DIAMONDS),
            Card(Rank.TWO, Suit.CLUBS),
            Card(Rank.THREE, Suit.HEARTS)
        )

        // Very small ranges: just a few representative hands
        val smallRange = listOf(
            Pair(Card(Rank.ACE, Suit.SPADES), Card(Rank.ACE, Suit.HEARTS)),    // AA
            Pair(Card(Rank.KING, Suit.SPADES), Card(Rank.KING, Suit.HEARTS)),  // KK
            Pair(Card(Rank.QUEEN, Suit.SPADES), Card(Rank.QUEEN, Suit.HEARTS)),// QQ
            Pair(Card(Rank.JACK, Suit.SPADES), Card(Rank.TEN, Suit.SPADES)),   // JTs
            Pair(Card(Rank.NINE, Suit.SPADES), Card(Rank.EIGHT, Suit.SPADES))  // 98s
        )

        val pot = 10.0

        return SolveConfiguration.river(
            board = board,
            btnRange = HandRange.uniform(smallRange),
            bbRange = HandRange.uniform(smallRange),
            pot = pot,
            stackSizes = mapOf(
                Position.BTN to 25.0,
                Position.BB to 25.0
            ),
            btnInvested = 0.0,
            bbInvested = 0.0,
            convergenceCriteria = ConvergenceCriteria(
                targetExploitability = 0.05,  // 5% target (relaxed for quick test)
                maxIterations = 10_000,
                evaluationFrequency = 100
            ),
            name = "River: Quick Test (small ranges)"
        )
    }
}
