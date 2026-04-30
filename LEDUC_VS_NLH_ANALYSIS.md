# Why Leduc Converges Slower Than NLH

## The Paradox

- **Leduc**: 80 info sets total, converging to 61% @ 500k iterations
- **NLH**: Millions of info sets, converging to 0.04% @ 10k iterations

This seems backwards! Simpler game should be faster!

## The Resolution: Info Sets Visited Per Iteration

### Leduc (2 rounds, limited betting)
**Average game tree depth**: 3-5 info sets per playthrough
- Round 1: 1-2 decisions (check/bet, maybe fold/call)
- Transition to Round 2
- Round 2: 1-2 decisions (check/bet, maybe fold/call)

**Sample game**: "cc|bc"
- P1 initial (R1): 1 info set
- P2 responds (R1): 1 info set
- P1 initial (R2): 1 info set
- P2 responds (R2): 1 info set
- **Total: 4 info sets visited**

### NLH (4 streets, multiple bet sizes)
**Average game tree depth**: 20-40 info sets per playthrough
- Preflop: 2-4 decisions
- Flop: 3-8 decisions (multiple bet sizes, raises)
- Turn: 3-8 decisions
- River: 3-8 decisions

**Typical NLH game**: Multiple streets with raises
- **Total: 20-40 info sets visited per iteration**

## Training Efficiency

**Leduc**: 500k iterations × 4 info sets/iter = **2M info set updates**
- Spread across 80 info sets = **25k updates per info set**

**NLH**: 10k iterations × 30 info sets/iter = **300k info set updates**
- Even with millions of possible info sets, the RELEVANT ones (for the 5 matchups) get heavy training
- Maybe 10k-50k relevant info sets = **6-30 updates per info set**

## The Real Difference

It's not about total info sets - it's about **training density**:

1. **NLH hits more info sets per iteration**
   - Each game traverses a deep, branching tree
   - Even 10k iterations gives dense coverage of relevant strategies

2. **Leduc hits fewer info sets per iteration**
   - Shallow game tree (only 2 rounds)
   - Limited actions (check, bet, fold, call - no raises, no bet sizing)
   - Need more iterations to get same coverage

3. **NLH benefits from action diversity**
   - Multiple bet sizes create more training scenarios
   - Raise sequences provide richer feedback
   - More streets = more opportunities to learn

## Analogy

**Leduc**: Like learning vocabulary with 80 words, but only seeing 4 words per training example
- Need many examples to learn all words well

**NLH**: Like learning vocabulary with millions of words, but seeing 30 words per training example
- Fewer examples needed for the subset you're actually using

## Why Single Leduc Matchup Converges Fast

**Single matchup** concentrates training:
- Same 40-50 info sets visited repeatedly
- 100k iterations × 4 info sets = 400k updates
- 400k ÷ 40 relevant info sets = **10k updates each**
- Dense training = fast convergence

**20 matchups** dilutes training:
- 80 total info sets, each matchup uses ~40
- But info sets are SHARED across matchups
- Shared info sets get conflicting signals from different opponents
- Need more iterations to average out the noise

## Conclusion

Leduc is simpler (80 vs millions of info sets) but converges slower because:
1. ✗ Shallow game tree (4 info sets/iteration vs 30)
2. ✗ Limited action space (no raises, bet sizing)
3. ✗ Fewer opportunities for rich feedback

This explains why:
- Single Leduc matchup: 100k iterations (focused training)
- Multi Leduc (20): ~2M iterations needed (diluted training)
- NLH (5): 10k iterations (deep trees provide rich signal)

**NLH's complexity is actually an advantage for convergence speed!**
