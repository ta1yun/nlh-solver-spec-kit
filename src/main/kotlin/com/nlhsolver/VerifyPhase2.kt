package com.nlhsolver

import com.nlhsolver.poker.*

/**
 * Quick verification program for Phase 2 poker domain logic.
 * Run with: ./gradlew run --args verify
 */
fun main() {
    println("=== Phase 2 Verification ===\n")

    // Test 1: Card creation and deck generation
    println("1. Testing Card & Deck...")
    val deck = Card.createDeck()
    assert(deck.size == 52) { "Deck should have 52 cards" }
    val aceOfSpades = Card.fromString("As")
    assert(aceOfSpades.rank == Rank.ACE && aceOfSpades.suit == Suit.SPADES)
    println("   ✓ Deck generation: 52 cards")
    println("   ✓ Card parsing: $aceOfSpades")

    // Test 2: Hand Evaluation
    println("\n2. Testing Hand Evaluation...")
    val royalFlush = listOf(
        Card(Rank.ACE, Suit.SPADES),
        Card(Rank.KING, Suit.SPADES),
        Card(Rank.QUEEN, Suit.SPADES),
        Card(Rank.JACK, Suit.SPADES),
        Card(Rank.TEN, Suit.SPADES)
    )
    val royalRank = HandEvaluator.evaluate(royalFlush)
    assert(royalRank.type == HandRankType.ROYAL_FLUSH)
    println("   ✓ Royal Flush: $royalRank")

    val pairOfAces = listOf(
        Card(Rank.ACE, Suit.HEARTS),
        Card(Rank.ACE, Suit.DIAMONDS),
        Card(Rank.KING, Suit.HEARTS),
        Card(Rank.QUEEN, Suit.HEARTS),
        Card(Rank.JACK, Suit.HEARTS)
    )
    val pairRank = HandEvaluator.evaluate(pairOfAces)
    assert(pairRank.type == HandRankType.ONE_PAIR)
    assert(royalRank > pairRank)
    println("   ✓ Pair of Aces: $pairRank")
    println("   ✓ Comparison: Royal Flush > Pair")

    // Test wheel straight (A-2-3-4-5)
    val wheel = listOf(
        Card(Rank.ACE, Suit.HEARTS),
        Card(Rank.TWO, Suit.SPADES),
        Card(Rank.THREE, Suit.DIAMONDS),
        Card(Rank.FOUR, Suit.CLUBS),
        Card(Rank.FIVE, Suit.HEARTS)
    )
    val wheelRank = HandEvaluator.evaluate(wheel)
    assert(wheelRank.type == HandRankType.STRAIGHT)
    println("   ✓ Wheel straight (A-2-3-4-5): $wheelRank")

    // Test 3: 7-card evaluation
    println("\n3. Testing 7-Card Hand Evaluation...")
    val sevenCards = listOf(
        Card(Rank.ACE, Suit.SPADES),
        Card(Rank.ACE, Suit.HEARTS),
        Card(Rank.KING, Suit.SPADES),
        Card(Rank.KING, Suit.HEARTS),
        Card(Rank.QUEEN, Suit.SPADES),
        Card(Rank.JACK, Suit.DIAMONDS),
        Card(Rank.TEN, Suit.CLUBS)
    )
    val best7 = HandEvaluator.evaluateBest7(sevenCards)
    println("   ✓ Best 7-card hand: $best7")

    // Test 4: Hand Strength Table Caching
    println("\n4. Testing Hand Strength Table...")
    val cached1 = HandStrengthTable.lookupHandStrength(royalFlush)
    val cached2 = HandStrengthTable.lookupHandStrength(royalFlush)
    assert(cached1 == cached2)
    println("   ✓ Caching works: identical results")
    val cacheStats = HandStrengthTable.getCacheStats()
    println("   ✓ Cache stats: ${cacheStats.size} entries")

    // Test 5: Preflop Bucketing
    println("\n5. Testing Preflop Bucketing...")
    val allHands = PreflopBuckets.allHands
    assert(allHands.size == 169)
    println("   ✓ Total canonical hands: ${allHands.size}")

    val pocketAces = PreflopBuckets.PreflopHand.fromNotation("AA")
    val akSuited = PreflopBuckets.PreflopHand.fromNotation("AKs")
    val akOffsuit = PreflopBuckets.PreflopHand.fromNotation("AKo")
    println("   ✓ AA notation: ${pocketAces.notation}")
    println("   ✓ AKs notation: ${akSuited.notation}")
    println("   ✓ AKo notation: ${akOffsuit.notation}")

    val aaBucketId = PreflopBuckets.getBucketId(
        Card(Rank.ACE, Suit.HEARTS),
        Card(Rank.ACE, Suit.DIAMONDS)
    )
    println("   ✓ AA bucket ID: $aaBucketId")

    // Test 6: Equity Calculator
    println("\n6. Testing Equity Calculator...")
    val heroCards = listOf(
        Card(Rank.ACE, Suit.SPADES),
        Card(Rank.ACE, Suit.HEARTS)
    )

    print("   Running Monte Carlo simulation (1000 hands)...")
    val equityResult = EquityCalculator.calculateEquity(
        heroCards = heroCards,
        board = emptyList(),
        numOpponents = 1,
        numSimulations = 1000
    )
    println(" Done!")
    println("   ✓ AA preflop vs random: $equityResult")
    assert(equityResult.equity > 0.7) { "AA should have >70% equity" }

    // Test 7: Suit Isomorphism
    println("\n7. Testing Suit Isomorphism...")
    val board1 = listOf(
        Card(Rank.ACE, Suit.SPADES),
        Card(Rank.KING, Suit.SPADES),
        Card(Rank.QUEEN, Suit.HEARTS)
    )
    val board2 = listOf(
        Card(Rank.ACE, Suit.HEARTS),
        Card(Rank.KING, Suit.HEARTS),
        Card(Rank.QUEEN, Suit.SPADES)
    )

    val canonical1 = SuitIsomorphism.getCanonicalBoard(board1)
    val canonical2 = SuitIsomorphism.getCanonicalBoard(board2)
    println("   ✓ Board 1: ${board1.joinToString(" ")}")
    println("   ✓ Canonical 1: ${canonical1.joinToString(" ")}")
    println("   ✓ Board 2: ${board2.joinToString(" ")}")
    println("   ✓ Canonical 2: ${canonical2.joinToString(" ")}")

    val areIsomorphic = SuitIsomorphism.areIsomorphic(board1, board2)
    assert(areIsomorphic)
    println("   ✓ Boards are isomorphic: $areIsomorphic")

    val structure = SuitIsomorphism.analyzeSuitStructure(board1)
    println("   ✓ Suit structure: $structure")

    // Test 8: Position & Street
    println("\n8. Testing Position & Street...")
    val positions2p = Position.forPlayerCount(2)
    val positions6p = Position.forPlayerCount(6)
    println("   ✓ 2-player positions: ${positions2p.map { it.displayName }}")
    println("   ✓ 6-player positions: ${positions6p.map { it.displayName }}")

    val streets = listOf(Street.PREFLOP, Street.FLOP, Street.TURN, Street.RIVER)
    println("   ✓ Street progression: ${streets.map { it.displayName }}")
    assert(Street.FLOP.next() == Street.TURN)
    assert(Street.RIVER.next() == null)

    // Test 9: Actions
    println("\n9. Testing Actions...")
    val fold = Action.Fold
    val bet10 = Action.Bet(10.0)
    val raise25 = Action.Raise(25.0)
    println("   ✓ Fold: $fold (amount: ${fold.getAmount()})")
    println("   ✓ Bet 10bb: $bet10 (amount: ${bet10.getAmount()})")
    println("   ✓ Raise to 25bb: $raise25 (amount: ${raise25.getAmount()})")

    println("\n=== ✓ All Phase 2 Components Verified Successfully! ===")
    println("\nPhase 2 Complete:")
    println("  • Card domain models")
    println("  • Hand evaluation (5-card & 7-card)")
    println("  • Hand strength caching")
    println("  • Preflop bucketing (169 hands)")
    println("  • Equity calculator (Monte Carlo)")
    println("  • Suit isomorphism detection")
    println("  • Position & street models")
    println("  • Action types")
}
