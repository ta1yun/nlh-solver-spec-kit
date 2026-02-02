# Production Blueprint Solve Guide

## Overview

This guide explains how to run a **production blueprint solve** to generate GTO preflop ranges for 100bb heads-up poker.

**Expected Runtime:** 1-2 hours
**Memory Required:** 4-8GB RAM
**Output:** Nash equilibrium preflop ranges + full game tree strategy

## Quick Start

### Option 1: Using tmux (Recommended)

This survives terminal closure and is safe for laptop users:

```bash
./run-blueprint-solve.sh start
```

Commands:
- `./run-blueprint-solve.sh attach` - Reconnect to running solve
- `./run-blueprint-solve.sh logs` - Watch log output
- `./run-blueprint-solve.sh status` - Check if running
- `./run-blueprint-solve.sh kill` - Stop the solve

**Detaching from tmux:** Press `Ctrl+B`, then `D`

### Option 2: Direct Run (Foreground)

Only if you'll keep terminal open for 1-2 hours:

```bash
./gradlew runProductionBlueprint --no-daemon
```

### Option 3: Docker (Best for Long Runs)

```bash
docker-compose up -d api
docker exec -it nlh-solver-api /app/bin/runProductionBlueprint
```

## What Gets Solved

**Configuration:**
- Scenario: 100bb heads-up, BTN vs BB, no ante
- All 1,326 hand matchups (full combinatorics)
- Preflop → Flop → Turn → River (complete game tree)
- 8 preflop buckets (coarse abstraction for speed)
- Target: < 1% exploitability
- Max iterations: 10 million

**Abstraction Details:**
- Preflop: 8 buckets (Premium pairs, Medium pairs, Broadway, Suited connectors, etc.)
- Flop: 25 buckets (equity-based)
- Turn: 15 buckets
- River: 10 buckets
- Board clustering: ~100 flop clusters, ~50 turn clusters

## Monitoring Progress

### Via tmux
```bash
./run-blueprint-solve.sh attach
```

### Via logs
```bash
tail -f logs/nlhsolver.log
```

### Progress Format
```
Time Elapsed    Iterations   Exploitability   Iter/sec     Est. Remaining
--------------------------------------------------------------------------------
5m 23s          50000        2.34% (3.51bb)   156          1h 45m
```

## Output Files

After completion:

1. **Blueprint Configuration**
   - `data/blueprints/<uuid>.json` - Scenario metadata

2. **Strategy Data**
   - `data/strategies/<uuid>.pb.gz` - Full strategy (Protocol Buffers, gzipped)
   - Contains equilibrium frequencies for every decision point

3. **Logs**
   - `logs/nlhsolver.log` - Detailed solve log
   - `logs/blueprint-solve-<timestamp>.log` - Session log

## Post-Solve Analysis

Once complete, you can:

### 1. Analyze EV Loss
Measure quality vs fine abstraction:
```bash
./gradlew run --args="blueprint analyze-ev-loss <blueprint-id>"
```

Expected EV loss: < 2% of pot (validates blueprint quality)

### 2. View Ranges
Extract opening/defense ranges:
```bash
./gradlew run --args="blueprint show <blueprint-id>"
```

### 3. Run Refinement
Solve specific boards with blueprint ranges:
```bash
./gradlew run --args="refine solve <blueprint-id> --board KsQh7d --street FLOP"
```

## Troubleshooting

### Out of Memory
Increase heap size:
```bash
JAVA_OPTS="-Xmx16g" ./gradlew runProductionBlueprint
```

### Solve Taking Too Long
- Check CPU usage: should be near 100%
- Monitor iteration speed: expect 100-300 iter/sec
- If too slow, try fewer buckets (not recommended for production)

### Need to Interrupt
- If using tmux: `./run-blueprint-solve.sh kill`
- **Warning:** No checkpoint/resume yet - will lose all progress!
- Consider implementing Phase 5 (Background Execution) for checkpoint support

### Session Disconnected
If tmux session died:
```bash
./run-blueprint-solve.sh status  # Check if still running
./run-blueprint-solve.sh attach  # Reconnect if running
```

## Performance Expectations

Based on testing:

| Matchups | Iterations | Streets | Time    |
|----------|------------|---------|---------|
| 10       | 500        | River   | 1 sec   |
| 50       | 5,000      | Full    | 30+ min |
| 1,326    | 10M        | Full    | 1-2 hrs |

**Note:** River-only is ~1000x faster than full tree due to reduced game tree size.

## Next Steps After Completion

1. **Generate Range Charts**
   - Export to PioSOLVER format
   - Create visual heat maps
   - Compare vs standard ranges

2. **Refinement Solves**
   - Use blueprint ranges for postflop spots
   - Much faster (10-30 min per board)
   - Higher precision (< 0.5% exploitability)

3. **Multiple Scenarios**
   - 50bb short stack
   - 200bb deep stack
   - With antes (tournaments)
   - 3-handed (SB vs BB)

4. **Production Deployment**
   - Implement Phase 5 for background job queue
   - Add checkpoint/resume
   - Deploy in Kubernetes for scale
