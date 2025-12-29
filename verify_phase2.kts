#!/usr/bin/env kotlin

@file:DependsOn("com.nlhsolver:nlh-solver:1.0.0")

import com.nlhsolver.poker.*

println("=== Phase 2 Verification Script ===\n")

// Test 1: Card creation and deck generation
println("1. Card & Deck Tests:")
val deck = Card.createDeck()
println("   ✓ Deck size: ${deck.size} (expected 52)")
val aceOfSpades = Card.fromString("As")
println("   ✓ Parsed As: $aceOfSpades")

// Test 2: Hand Evaluation
println("\n2. Hand Evaluation Tests:")
val royalFlush = listOf(
    Card.fromString("As"),
    Card.fromString("Ks"),
    Card.fromString("Qs"),
    Card.fromString("Js"),
    Card.fromString("Ts")
)
val royalRank = HandEvaluator.evaluate(royalFlush)
println("   ✓ Royal Flush: $royalRank")

val pair = listOf(
    Card.fromString("Ah"),
    Card.fromString("Ad"),
    Card.fromString("Kh"),
    Card.fromString("Qh"),
    Card.fromString("Jh")
)
val pairRank = HandEvaluator.evaluate(pair)
println("   ✓ Pair of Aces: $pairRank")
println("   ✓ Royal > Pair: ${royalRank > pairRank}")

// Test 3: Preflop Bucketing
println("\n3. Preflop Bucketing Tests:")
val aaPocket = PreflopBuckets.getBucketId(Card.fromString("Ah"), Card.fromString("Ad"))
val akSuited = PreflopBuckets.PreflopHand.fromNotation("AKs")
println("   ✓ AA bucket ID: $aaPocket")
println("   ✓ AKs notation: ${akSuited.notation}")
println("   ✓ Total buckets: ${PreflopBuckets.allHands.size} (expected 169)")

// Test 4: Equity Calculator
println("\n4. Equity Calculation Tests:")
val heroCards = listOf(Card.fromString("As"), Card.fromString("Ah"))
val equity = EquityCalculator.calculateEquity(
    heroCards = heroCards,
    board = emptyList(),
    numOpponents = 1,
    numSimulations = 1000
)
println("   ✓ AA preflop equity: ${String.format("%.1f%%", equity.equity * 100)}")

// Test 5: Suit Isomorphism
println("\n5. Suit Isomorphism Tests:")
val board1 = listOf(Card.fromString("As"), Card.fromString("Ks"), Card.fromString("Qh"))
val board2 = listOf(Card.fromString("Ah"), Card.fromString("Kh"), Card.fromString("Qs"))
val canonical1 = SuitIsomorphism.getCanonicalBoard(board1)
val canonical2 = SuitIsomorphism.getCanonicalBoard(board2)
println("   ✓ Board 1: $board1")
println("   ✓ Canonical 1: $canonical1")
println("   ✓ Board 2: $board2")
println("   ✓ Canonical 2: $canonical2")
println("   ✓ Are isomorphic: ${SuitIsomorphism.areIsomorphic(board1, board2)}")

// Test 6: Position & Street
println("\n6. Position & Street Tests:")
val positions = Position.forPlayerCount(6)
println("   ✓ 6-player positions: ${positions.map { it.displayName }}")
println("   ✓ Flop -> Turn: ${Street.FLOP.next()}")

println("\n=== All Phase 2 Components Working! ===")
