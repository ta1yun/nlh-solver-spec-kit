# Quickstart Guide: No-Limit Hold'em Poker Solver

**Feature**: 001-nlh-poker-solver
**Branch**: `001-nlh-poker-solver`
**Date**: 2025-12-13

## Overview

This guide helps developers get the NLH Solver running locally, submit a solve job, and query results. It covers both CLI and REST API usage.

---

## Prerequisites

### System Requirements

- **Java**: JDK 17 or higher
- **Memory**: Minimum 8GB RAM, recommended 16GB
- **CPU**: Multi-core processor (4+ cores recommended)
- **Storage**: 10GB+ free disk space
- **OS**: Linux, macOS, or Windows

### Development Tools (for building from source)

- **Kotlin**: 1.9+ (via Gradle, auto-installed)
- **Gradle**: 8.5+ (via wrapper)
- **Git**: For cloning repository

---

## Installation

### Option 1: Download Pre-built Binary (Future)

```bash
# Download latest release
curl -L https://github.com/example/nlhsolver/releases/latest/download/nlhsolver.tar.gz -o nlhsolver.tar.gz

# Extract
tar -xzf nlhsolver.tar.gz

# Add to PATH
export PATH=$PATH:$(pwd)/nlhsolver/bin

# Verify installation
nlhsolver version
```

### Option 2: Build from Source

```bash
# Clone repository
git clone https://github.com/example/nlhsolver.git
cd nlhsolver

# Checkout feature branch
git checkout 001-nlh-poker-solver

# Build project
./gradlew build

# Run tests
./gradlew test

# Create distribution
./gradlew installDist

# Add to PATH (optional)
export PATH=$PATH:$(pwd)/build/install/nlhsolver/bin

# Verify installation
./build/install/nlhsolver/bin/nlhsolver version
```

**Expected Output**:
```text
NLH Solver v1.0.0
Kotlin 1.9.22
JVM 17.0.9
```

---

## Quick Start: CLI

### 1. Create a Solve Configuration

Create a heads-up (2-player) configuration with 100bb stacks:

```bash
nlhsolver config create \
  --name "HU 100bb BTN vs BB" \
  --players 2 \
  --stacks "BTN:100,BB:100" \
  --position BTN \
  --target-exploit 0.5
```

**Output**:
```text
Configuration created successfully
ID: a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c
Name: HU 100bb BTN vs BB
Players: 2
Stacks: BTN=100bb, BB=100bb
Starting Position: BTN
Target Exploitability: 0.5%
```

Save the configuration ID for the next step.

---

### 2. Submit a Solve Job

Submit the solve job in background mode:

```bash
nlhsolver solve run --config a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c --background
```

**Output**:
```text
Solve job submitted in background
Job ID: d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
Status: PENDING

Monitor progress: nlhsolver job status d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
Cancel job: nlhsolver job cancel d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
```

---

### 3. Monitor Progress

Watch the solve progress in real-time:

```bash
nlhsolver job status d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s --watch
```

**Output** (updates every 30 seconds):
```text
Job ID: d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
Configuration: HU 100bb BTN vs BB (a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c)
Status: RUNNING
Submitted: 2025-12-13 10:45:00
Started: 2025-12-13 10:45:02
Elapsed: 1h 32m 15s

Progress:
  Iterations: 380,000 / 5,000,000
  Current Exploitability: 3.2%
  Target: 0.5%
  Estimated Remaining: 2h 45m

[Updates automatically every 30s. Press Ctrl+C to exit.]
```

---

### 4. Query Strategy (After Completion)

Once the solve completes, retrieve the strategy ID from the job:

```bash
nlhsolver job status d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s --output json | jq -r '.result.strategyProfileId'
```

**Output**:
```text
e5f6g7h8-9i0j-1k2l-3m4n-5o6p7q8r9s0t
```

Now query the strategy for a specific game state:

```bash
nlhsolver strategy query e5f6g7h8-9i0j-1k2l-3m4n-5o6p7q8r9s0t \
  --street FLOP \
  --board "AsKdQh" \
  --pot 7.0 \
  --position BB \
  --stack "BTN:97,BB:96.5" \
  --history "BTN:BET:3,BB:CALL:3"
```

**Output**:
```text
Strategy for BB on AsKdQh flop (pot: 7.0bb)

Recommendations:
  Check: 45.2%
  Bet 0.33× pot (2.3bb): 18.6%
  Bet 0.75× pot (5.3bb): 24.1%
  Bet 1.5× pot (10.5bb): 12.1%

Expected Value: +1.23bb
```

---

## Quick Start: REST API

### 1. Start the API Server

```bash
# Start server (default port 8080)
nlhsolver server start

# Or specify custom port
nlhsolver server start --port 8080
```

**Output**:
```text
NLH Solver API Server
Listening on http://localhost:8080
Health endpoint: http://localhost:8080/api/v1/health

Press Ctrl+C to stop.
```

---

### 2. Create Configuration via API

```bash
curl -X POST http://localhost:8080/api/v1/configurations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "HU 100bb BTN vs BB",
    "numPlayers": 2,
    "stackSizes": {
      "BTN": 100.0,
      "BB": 100.0
    },
    "startingPosition": "BTN",
    "convergenceCriteria": {
      "targetExploitability": 0.5
    }
  }'
```

**Response** (201 Created):
```json
{
  "configId": "a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c",
  "name": "HU 100bb BTN vs BB",
  "numPlayers": 2,
  "stackSizes": {
    "BTN": 100.0,
    "BB": 100.0
  },
  "startingPosition": "BTN",
  "convergenceCriteria": {
    "targetExploitability": 0.5,
    "maxIterations": 5000000,
    "evaluationFrequency": 10000
  },
  "betSizingScheme": {
    "sizes": [
      {"type": "POT_RELATIVE", "multiplier": 0.33},
      {"type": "POT_RELATIVE", "multiplier": 0.5},
      {"type": "POT_RELATIVE", "multiplier": 0.75},
      {"type": "POT_RELATIVE", "multiplier": 1.0},
      {"type": "POT_RELATIVE", "multiplier": 1.5},
      {"type": "ALL_IN"}
    ]
  },
  "handAbstraction": {
    "preflopBuckets": 169,
    "flopBuckets": 200,
    "turnBuckets": 200,
    "riverBuckets": 200,
    "bucketingMethod": "EQUITY_HISTOGRAM"
  },
  "createdAt": "2025-12-13T10:45:00Z",
  "updatedAt": "2025-12-13T10:45:00Z"
}
```

---

### 3. Submit Solve Job

```bash
curl -X POST http://localhost:8080/api/v1/jobs \
  -H "Content-Type: application/json" \
  -d '{
    "configurationId": "a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c",
    "executionLocation": "LOCAL"
  }'
```

**Response** (202 Accepted):
```json
{
  "jobId": "d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s",
  "configurationId": "a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c",
  "status": "PENDING",
  "progress": {
    "iterationsCompleted": 0,
    "lastUpdatedAt": "2025-12-13T10:45:02Z"
  },
  "createdAt": "2025-12-13T10:45:02Z",
  "executionLocation": "LOCAL"
}
```

---

### 4. Monitor Progress

```bash
curl http://localhost:8080/api/v1/jobs/d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s/progress
```

**Response** (200 OK):
```json
{
  "iterationsCompleted": 380000,
  "currentExploitability": 3.2,
  "estimatedIterationsRemaining": 820000,
  "estimatedTimeRemainingSeconds": 9900,
  "lastUpdatedAt": "2025-12-13T12:17:15Z"
}
```

---

### 5. Query Strategy

```bash
curl -X POST http://localhost:8080/api/v1/strategies/e5f6g7h8-9i0j-1k2l-3m4n-5o6p7q8r9s0t/query \
  -H "Content-Type: application/json" \
  -d '{
    "gameState": {
      "street": "FLOP",
      "board": ["As", "Kd", "Qh"],
      "pot": 7.0,
      "playerStates": {
        "BTN": {
          "position": "BTN",
          "stackBb": 97.0,
          "investedThisRound": 0.0,
          "isFolded": false,
          "isAllIn": false
        },
        "BB": {
          "position": "BB",
          "stackBb": 96.5,
          "investedThisRound": 0.0,
          "isFolded": false,
          "isAllIn": false
        }
      },
      "actionHistory": [
        {"actor": "BTN", "action": {"type": "BET", "sizeBb": 3.0}, "amountBb": 3.0},
        {"actor": "BB", "action": {"type": "CALL"}, "amountBb": 3.0}
      ]
    },
    "position": "BB"
  }'
```

**Response** (200 OK):
```json
{
  "recommendations": {
    "CHECK": 0.452,
    "BET": 0.548
  },
  "expectedValue": 1.23
}
```

---

## Configuration Tuning

### Memory Tuning

If solves run out of memory, increase JVM heap size:

```bash
# Set via environment variable
export JAVA_OPTS="-Xmx12g"
nlhsolver solve run --config <config-id>

# Or via Gradle (for development)
./gradlew run --args="solve run --config <config-id>" -Xmx12g
```

### Abstraction Tuning

Reduce hand buckets to decrease memory usage and solve time:

```bash
nlhsolver config create \
  --name "HU 100bb (reduced abstraction)" \
  --players 2 \
  --stacks "BTN:100,BB:100" \
  --position BTN \
  --flop-buckets 100 \
  --turn-buckets 100 \
  --river-buckets 100
```

This reduces game tree size by ~50% but may slightly increase final exploitability.

---

## Troubleshooting

### Issue: Solve Fails with OUT_OF_MEMORY

**Symptom**:
```text
Error: OUT_OF_MEMORY
Message: JVM heap exhausted after 1,250,000 iterations.
```

**Solution**:
1. Increase JVM heap size: `export JAVA_OPTS="-Xmx16g"`
2. Reduce hand abstraction granularity (fewer buckets)
3. Close other memory-intensive applications

---

### Issue: Solve Takes Longer Than 4 Hours

**Symptom**: Solve doesn't converge within expected timeframe.

**Solution**:
1. Check system resources (CPU usage, available memory)
2. Reduce abstraction granularity for faster solving (trade accuracy for speed)
3. Increase `maxIterations` if approaching limit
4. Consider remote execution on more powerful hardware

---

### Issue: API Server Won't Start

**Symptom**:
```text
Error: Address already in use: bind
```

**Solution**:
1. Check if port 8080 is already in use: `lsof -i :8080`
2. Stop conflicting process or use different port: `nlhsolver server start --port 8081`

---

### Issue: Strategy Query Returns Error

**Symptom**:
```text
Error: Game state does not match solve configuration
```

**Solution**:
1. Verify game state parameters match configuration (number of players, stack sizes)
2. Ensure board cards are valid for the street (3 for flop, 4 for turn, 5 for river)
3. Check action history is consistent with game state

---

## Next Steps

### For Developers

1. **Read Design Docs**:
   - [Data Model](./data-model.md) - Entity definitions and relationships
   - [REST API Contract](./contracts/rest-api.yaml) - OpenAPI specification
   - [CLI Interface](./contracts/cli-interface.md) - Command-line usage

2. **Explore Code**:
   - `src/main/kotlin/com/nlhsolver/core/` - CFR+ algorithm
   - `src/main/kotlin/com/nlhsolver/poker/` - Hand evaluation, bucketing
   - `src/main/kotlin/com/nlhsolver/solver/` - Solve orchestration
   - `src/test/kotlin/` - Unit and integration tests

3. **Run Tests**:
   ```bash
   ./gradlew test
   ./gradlew integrationTest
   ```

### For Users

1. **Create More Configurations**:
   - Try different stack sizes (50bb, 150bb, 200bb)
   - Experiment with 3+ player scenarios
   - Customize bet sizing schemes

2. **Analyze Results**:
   - Compare strategies across different configurations
   - Study GTO recommendations for common scenarios
   - Analyze exploitability metrics

3. **Optimize Performance**:
   - Benchmark different abstraction granularities
   - Profile memory usage for large solves
   - Test remote execution setup

---

## Resources

### Documentation

- [Feature Specification](./spec.md) - Requirements and user stories
- [Implementation Plan](./plan.md) - Technical approach and architecture
- [Research](./research.md) - CFR+ algorithm and technology decisions

### External Resources

- **CFR+ Algorithm**: "Solving Large Imperfect Information Games Using CFR+" (Tammelin et al., 2014)
- **Regret Matching+**: "Solving Imperfect-Information Games via Discounted Regret Minimization" (Brown & Sandholm, 2019)
- **Poker Abstractions**: "Better Automated Abstraction Techniques" (Gilpin & Sandholm, 2007)

### Community

- GitHub Issues: https://github.com/example/nlhsolver/issues
- Discussions: https://github.com/example/nlhsolver/discussions
- Wiki: https://github.com/example/nlhsolver/wiki

---

## Example: End-to-End Workflow

Here's a complete example from configuration to query:

```bash
# 1. Create configuration
CONFIG_ID=$(nlhsolver config create \
  --name "HU 100bb" \
  --players 2 \
  --stacks "BTN:100,BB:100" \
  --position BTN \
  --output json | jq -r '.configId')

echo "Config ID: $CONFIG_ID"

# 2. Submit solve job
JOB_ID=$(nlhsolver solve run --config $CONFIG_ID --background --output json | jq -r '.jobId')

echo "Job ID: $JOB_ID"

# 3. Wait for completion (poll every 60 seconds)
while true; do
  STATUS=$(nlhsolver job status $JOB_ID --output json | jq -r '.status')
  echo "Status: $STATUS"

  if [ "$STATUS" = "COMPLETED" ]; then
    break
  elif [ "$STATUS" = "FAILED" ]; then
    echo "Solve failed!"
    exit 1
  fi

  sleep 60
done

# 4. Get strategy ID
STRATEGY_ID=$(nlhsolver job status $JOB_ID --output json | jq -r '.result.strategyProfileId')

echo "Strategy ID: $STRATEGY_ID"

# 5. Query strategy
nlhsolver strategy query $STRATEGY_ID \
  --street FLOP \
  --board "AsKdQh" \
  --pot 7.0 \
  --position BB \
  --stack "BTN:97,BB:96.5" \
  --history "BTN:BET:3,BB:CALL:3"
```

---

## Performance Benchmarks

Expected performance on standard hardware:

| Scenario | Hardware | Time to Converge | Final Exploitability | Memory Usage |
|----------|----------|------------------|---------------------|--------------|
| HU 100bb (default abstraction) | 8-core, 16GB RAM | 3-4 hours | <0.5% | 10-12GB |
| HU 50bb (default abstraction) | 8-core, 16GB RAM | 1-2 hours | <0.5% | 6-8GB |
| 3-way 100bb (default abstraction) | 16-core, 32GB RAM | 8-12 hours | <1.0% | 20-28GB |

---

## Support

For issues, questions, or contributions:
- Open an issue on GitHub
- Consult the [troubleshooting section](#troubleshooting)
- Check [existing documentation](./plan.md)
