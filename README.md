# No-Limit Hold'em Poker Solver

A high-performance heads-up No-Limit Hold'em (NLH) poker solver using Counterfactual Regret Minimization (CFR+). Computes Game Theory Optimal (GTO) strategies for any game tree configuration.

## Project Status

**Phase 1: Setup** ✅ COMPLETE
**Phase 2: Foundational** ✅ COMPLETE
**Phase 2.5: Preflop No-Abstraction** ✅ COMPLETE
**Phase 2.6: Preflop + Flop Verification** ✅ COMPLETE
**Phase 2.7: Abstraction Development** ✅ COMPLETE
**Phase 3: User Story 1 (MVP)** ✅ COMPLETE

The NLH Poker Solver MVP is fully functional with complete game tree solving (preflop → flop → turn → river)!

**Completed Tasks**: 87/88 MVP tasks (99%)

## Features

✅ **Full Game Tree Solving**: Preflop → Flop → Turn → River
✅ **CFR+ Algorithm**: Regret Matching+ with convergence to Nash equilibrium
✅ **Range-Based Solving**: Solves over full hand ranges (all 169 canonical hands)
✅ **Board Isomorphism**: Reduces 22,100 flops to 1,755 canonical boards via suit symmetry
✅ **Hand Abstraction**: Equity-based bucketing for tractable postflop solving
✅ **Strategy Conditioning**: Query strategies conditioned on specific opponent actions
✅ **CLI & REST API**: Multiple interfaces for configuration and querying
✅ **Persistence**: Protocol Buffers with gzip compression for efficient storage

## Quick Start

### Prerequisites

- JDK 17 or higher
- Gradle 8.0+ (or use included wrapper)
- 8-16GB RAM (recommended for full game tree solves)

### Installation

```bash
git clone <repository-url>
cd nlh-solver-spec-kit
./gradlew build
```

### Running a Solve

#### 1. Via CLI (Recommended)

```bash
# Run a basic river solve (fast, ~30 seconds)
./gradlew run --args="solve river"

# Run a full preflop solve (medium, ~5-10 minutes)
./gradlew run --args="solve preflop --max-iterations=50000"

# Run a flop solve with specific board (slow, ~1-2 hours)
./gradlew run --args="solve flop --board=Ks7h2d --max-iterations=100000"
```

#### 2. Via REST API

Start the API server:

```bash
./gradlew run --args="api"
```

Then create and run a solve:

```bash
# Create configuration
curl -X POST http://localhost:8080/api/v1/configurations \
  -H "Content-Type: application/json" \
  -d '{
    "numPlayers": 2,
    "stackSizes": {"BTN": 100, "BB": 100},
    "startingStreet": "RIVER",
    "board": ["Ks", "7h", "2d", "9c", "4h"],
    "pot": 20.0
  }'

# Submit solve job
curl -X POST http://localhost:8080/api/v1/jobs \
  -H "Content-Type: application/json" \
  -d '{"configurationId": "<config-id>"}'

# Check job status
curl http://localhost:8080/api/v1/jobs/<job-id>
```

### Querying Strategies

#### List All Solved Strategies

```bash
./gradlew run --args="strategy list"
```

#### Query Full Range (13x13 Grid)

```bash
# Preflop range for BTN
./gradlew run --args="strategy range <strategy-id> --position=BTN"

# Flop range for BB on specific board
./gradlew run --args="strategy range <strategy-id> --position=BB --street=FLOP --board=Ks7h2d"

# River range for BB when facing a bet (conditioned)
./gradlew run --args="strategy range <strategy-id> --position=BB --street=RIVER --board=Ks7h2d9c4h --facing=bet"
```

#### Query Specific Hand

```bash
# Query AA preflop for BTN
./gradlew run --args="strategy hand <strategy-id> --hand=AA --position=BTN"

# Query JJ on river when facing a bet
./gradlew run --args="strategy hand <strategy-id> --hand=JJ --position=BB --street=RIVER --board=Ks7h2d9c4h --facing=bet"
```

### Example Output

```
RIVER Range for BB facing bet
Board: K♠ 7♥ 2♦ 9♣ 4♥

Legend: R=Raise% C=Call% F=Fold%  |  Green=Raise  Yellow=Call  Red=Fold

      A     K     Q     J     T     9     8     7     6     5     4     3     2
----------------------------------------------------------------------
Q  |   -     -   C62    -     -     -     -     -     -     -     -     -     -
J  |   -     -     -   C97    -     -     -     -     -     -     -     -     -
T  |   -     -     -     -   F54    -     -     -     -     -     -     -     -

Summary:
  Hands with data: 3/169
  Average Call:  68.6%
  Average Fold:  31.4%
```

## Strategy Conditioning

The `--facing` parameter allows you to filter strategies by opponent action:

- `--facing=check` - Strategy when opponent checks
- `--facing=bet` - Defense strategy when facing any bet
- `--facing=bet:10` - Defense against specific bet size (10 chips)
- `--facing=raise` - Strategy when facing a raise

See [docs/strategy-conditioning.md](docs/strategy-conditioning.md) for detailed examples and use cases.

## Architecture

### Core Components

- **CFRSolver**: Implements CFR+ algorithm with Regret Matching+
- **SolveOrchestrator**: Coordinates game tree construction, CFR execution, and convergence
- **StrategyQueryService**: Handles strategy lookups and range queries
- **GameTreeBuilder**: Constructs game trees from solve configurations
- **ExploitabilityCalculator**: Computes best-response exploitability
- **ConvergenceMonitor**: Tracks convergence progress and criteria

### Abstraction Layers

- **Board Canonicalization**: Reduces suit-isomorphic boards to canonical forms
- **Hand Bucketing**: Groups similar hands using equity-based clustering
  - Preflop: 169 canonical hands (no abstraction)
  - Flop: 50 buckets (street-specific)
  - Turn: 30 buckets (street-specific)
  - River: 20 buckets (street-specific)

### Storage

- **Protocol Buffers**: Efficient binary serialization with gzip compression
- **File-based**: Strategies, jobs, and configurations stored in `data/` directory
- **Compression**: ~10x reduction in storage size

## CLI Commands

### Configuration Management

```bash
./gradlew run --args="config create --players=2 --stacks='BTN:100,BB:100'"
./gradlew run --args="config list"
./gradlew run --args="config get <id>"
```

### Solve Execution

```bash
./gradlew run --args="solve run --config=<id>"
./gradlew run --args="solve preflop"
./gradlew run --args="solve flop --board=Ks7h2d"
./gradlew run --args="solve river"
```

### Job Management

```bash
./gradlew run --args="job list"
./gradlew run --args="job status <id>"
```

### Strategy Queries

```bash
./gradlew run --args="strategy list"
./gradlew run --args="strategy show <id> [--verbose] [--full]"
./gradlew run --args="strategy range <id> --position=BTN [--facing=check]"
./gradlew run --args="strategy hand <id> --hand=AKs --position=BTN [--facing=bet]"
```

## REST API Endpoints

### Configurations

- `POST /api/v1/configurations` - Create configuration
- `GET /api/v1/configurations` - List all configurations
- `GET /api/v1/configurations/{id}` - Get configuration details

### Jobs

- `POST /api/v1/jobs` - Submit solve job
- `GET /api/v1/jobs` - List all jobs
- `GET /api/v1/jobs/{id}` - Get job status

### Strategies

- `POST /api/v1/strategies/{id}/query` - Query strategy for game state
- `GET /api/v1/strategies` - List all strategies

### Health

- `GET /api/v1/health` - Health check

## Performance

### Solve Times (8-16GB RAM, 4-8 cores)

| Street | Iterations | Time | Exploitability |
|--------|-----------|------|----------------|
| River (fixed board) | 10K | 30s | <0.5% |
| Preflop (169 hands) | 50K | 5-10 min | <0.5% |
| Flop (1 board) | 100K | 1-2 hours | <0.5% |
| Full Game Tree | 100K+ | 4-8 hours | <0.5% |

### Memory Usage

- River solve: ~50MB
- Preflop + Flop: ~500MB
- Full game tree: ~8-16GB

## Testing

Run the test suite:

```bash
./gradlew test
```

Run specific tests:

```bash
./gradlew test --tests "ToyRiverScenarioTest"
./gradlew test --tests "FlopConvergenceTest"
./gradlew test --tests "AkqCFRTest"
```

Inspect test results:

```bash
./gradlew test --tests "ToyRiverScenarioTest.inspect*"
```

## Configuration

### Environment Variables

- `NLH_MAX_MATCHUPS` - Limit matchup count for testing (e.g., `export NLH_MAX_MATCHUPS=100`)

### Convergence Criteria

Default convergence settings:

- Target exploitability: 0.5% of pot
- Max iterations: 1,000,000
- Evaluation frequency: Every 100 iterations

Configure via `SolveConfiguration`:

```kotlin
ConvergenceCriteria(
    targetExploitability = 0.005,  // 0.5%
    maxIterations = 1_000_000,
    evaluationFrequency = 100
)
```

## Development

### Project Structure

```
src/
├── main/
│   ├── kotlin/com/nlhsolver/
│   │   ├── core/          # CFR solver, game tree, convergence
│   │   ├── poker/         # Poker domain (cards, hands, evaluation)
│   │   ├── solver/        # Orchestration, strategy extraction
│   │   ├── storage/       # Persistence (Protocol Buffers)
│   │   ├── api/           # REST API (Ktor)
│   │   └── cli/           # CLI commands (Clikt)
│   └── proto/             # Protocol Buffers schemas
└── test/
    └── kotlin/com/nlhsolver/
        ├── unit/          # Unit tests
        ├── integration/   # Integration tests
        └── contract/      # API contract tests
```

### Building from Source

```bash
./gradlew build
./gradlew compileKotlin
./gradlew test
```

### Running Locally

```bash
# CLI
./gradlew run --args="<command>"

# API Server
./gradlew run --args="api"
```

## Tech Stack

- **Language**: Kotlin 1.9.22
- **JVM**: Java 17+
- **Build**: Gradle 8.5
- **REST API**: Ktor 2.3.7
- **CLI**: Clikt 4.2.2
- **Async**: kotlinx.coroutines 1.8.0
- **Persistence**: Protocol Buffers 3.25.2
- **Testing**: Kotest 5.8.0, MockK 1.13.9, JUnit 5

## Roadmap

### Phase 1-3: MVP ✅ COMPLETE (87/88 tasks)
- ✅ Full game tree solver (preflop → river)
- ✅ CFR+ with convergence
- ✅ CLI and REST API
- ✅ Range-based solving with all 169 hands
- ✅ Board isomorphism and hand bucketing
- ✅ Strategy conditioning by opponent action
- ✅ MDF verification and KKT condition tests

### Phase 4: Multi-Player Support (Planned - 10 tasks)
- Extend to 3-6 players
- Multi-player equilibrium computation
- Position-specific strategy queries

### Phase 5: Background Execution (Planned - 15 tasks)
- Async job queue
- Remote solve execution
- Job cancellation

### Phase 6: Progress Monitoring (Planned - 8 tasks)
- Real-time progress updates
- Iteration speed tracking
- Estimated time remaining

### Phase 7: Polish (Planned - 13 tasks)
- Error handling improvements
- Comprehensive logging
- Production readiness

## Documentation

- **Strategy Conditioning Guide**: `docs/strategy-conditioning.md`
- **Feature Spec**: `specs/001-nlh-poker-solver/spec.md`
- **Implementation Plan**: `specs/001-nlh-poker-solver/plan.md`
- **Data Model**: `specs/001-nlh-poker-solver/data-model.md`
- **API Contracts**: `specs/001-nlh-poker-solver/contracts/`
- **Task Breakdown**: `specs/001-nlh-poker-solver/tasks.md`

## References

- [CFR Algorithm](http://modelai.gettysburg.edu/2013/cfr/cfr.pdf) - Zinkevich et al.
- [CFR+](https://arxiv.org/abs/1407.5042) - Discounted CFR variants
- [Poker Abstraction](https://poker.cs.ualberta.ca/publications/AAMAS13-abstraction.pdf) - Hand and board abstraction techniques

## License

TBD

## Contributing

This project follows a phased implementation approach. See `specs/001-nlh-poker-solver/tasks.md` for the complete task breakdown and current progress.

---

**Status**: MVP Complete (87/88 tasks, 99%)
**Next**: Phase 4+ - Multi-player, background execution, progress monitoring
