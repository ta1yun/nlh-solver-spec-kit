# No-Limit Hold'em Poker Solver

A game-theoretic poker solver for No-Limit Hold'em using CFR+ (Counterfactual Regret Minimization Plus) algorithm. Built with Kotlin on the JVM with both CLI and REST API interfaces.

## Project Status

**Phase 1: Setup Complete** ✅
**Phase 2: Foundational Complete** ✅
**Phase 3: MVP Complete** ✅

The NLH Poker Solver MVP is fully functional! You can now create configurations, run solves, and query solved strategies via the CLI.

**Completed Tasks**: ~80/123 (65%)

**Phase 1** - Setup ✅
- ✅ Gradle/Kotlin project initialized (JVM 17, Kotlin 1.9.22)
- ✅ All dependencies configured (Ktor, Clikt, Protocol Buffers, Kotest, MockK)
- ✅ Project directory structure created
- ✅ Build system configured

**Phase 2** - Foundational ✅
- ✅ Poker domain models (Card, Rank, Suit, Position, Street, Action)
- ✅ Hand evaluation logic (5-card and 7-card evaluation)
- ✅ Hand ranking system (HIGH_CARD to ROYAL_FLUSH with tie-breaking)
- ✅ Hand strength lookup table with caching
- ✅ Preflop bucketing (169 canonical hands)
- ✅ Equity calculator (Monte Carlo simulation)
- ✅ Suit isomorphism detection (game tree reduction)

**Phase 3** - MVP (User Story 1) ✅
- ✅ CFR+ algorithm implementation
- ✅ Game tree construction with action abstraction
- ✅ Convergence monitoring with exploitability calculation
- ✅ Strategy extraction and persistence (Protocol Buffers)
- ✅ Configuration management (create, list, validate)
- ✅ CLI interface (config, solve, strategy commands)
- ✅ Job tracking and progress monitoring
- ✅ Heads-up (2-player) preflop-only solver

**Next Phase**: Phase 4+ - Multi-street support, multi-player, background execution

## Tech Stack

- **Language**: Kotlin 1.9.22
- **JVM**: Java 17+
- **Build**: Gradle 8.5
- **REST API**: Ktor 2.3.7
- **CLI**: Clikt 4.2.2
- **Async**: kotlinx.coroutines 1.8.0
- **Persistence**: Protocol Buffers 3.25.2
- **Testing**: Kotest 5.8.0, MockK 1.13.9, JUnit 5

## Prerequisites

- **Java**: JDK 17 or higher
- **Gradle**: 8.5+ (or use wrapper - see setup below)
- **Memory**: 8GB RAM minimum, 16GB recommended
- **Storage**: 10GB+ free disk space

## Project Structure

```
nlh-solver/
├── src/
│   ├── main/
│   │   ├── kotlin/
│   │   │   └── com/nlhsolver/
│   │   │       ├── core/           # CFR+ algorithm, game tree
│   │   │       ├── poker/          # Hand evaluation, equity calculation
│   │   │       ├── solver/         # Solve orchestration
│   │   │       ├── storage/        # Protocol Buffers persistence
│   │   │       ├── api/            # REST API endpoints (Ktor)
│   │   │       └── cli/            # CLI commands (Clikt)
│   │   └── proto/                  # Protocol Buffers schemas
│   └── test/
│       └── kotlin/
│           └── com/nlhsolver/
│               ├── unit/           # Unit tests
│               ├── integration/    # Integration tests
│               └── contract/       # API contract tests
├── data/                           # Runtime storage (gitignored)
│   ├── configurations/             # Solve configurations
│   ├── jobs/                       # Job metadata
│   ├── strategies/                 # Completed strategies
│   └── queue/                      # Background job queue
├── build.gradle.kts                # Build configuration
├── settings.gradle.kts             # Project settings
└── .gitignore                      # Git ignore rules

```

## Quick Start

### 1. Initialize Gradle Wrapper

If you have Gradle installed:

```bash
gradle wrapper --gradle-version 8.5
```

This creates `gradlew` (Unix) and `gradlew.bat` (Windows) wrapper scripts.

### 2. Build the Project

```bash
./gradlew build
```

Expected output: `BUILD SUCCESSFUL`

### 3. Install CLI Executable

```bash
./gradlew installDist
```

This creates the `nlhsolver` CLI executable at `./nlhsolver`

### 4. Run Your First Solve

```bash
# Create a configuration
./nlhsolver config create \
  --name "My First Solve" \
  --players 2 \
  --stacks "BTN:50,BB:50" \
  --position BTN \
  --target-exploit 5.0 \
  --max-iterations 2500 \
  --eval-freq 1000 \
  --bet-sizes "1.0x,ALL_IN"

# Run the solve (use the config ID from above)
./nlhsolver solve run --config <config-id>

# Check persisted strategies
ls data/strategies/
```

## Usage Guide

### Configuration Management

**Create a solve configuration:**
```bash
./nlhsolver config create \
  --name "Heads-Up 50bb" \
  --players 2 \
  --stacks "BTN:50,BB:50" \
  --position BTN \
  --target-exploit 5.0 \
  --max-iterations 5000 \
  --eval-freq 2500 \
  --bet-sizes "1.0x,ALL_IN"
```

**List all configurations:**
```bash
./nlhsolver config list
```

**View a specific configuration:**
```bash
./nlhsolver config show <config-id>
```

### Running Solves

**Run a solve synchronously:**
```bash
./nlhsolver solve run --config <config-id>
```

The solver will:
1. Build the game tree
2. Run CFR+ iterations until convergence or max iterations
3. Calculate final exploitability
4. Persist the strategy to `data/strategies/`

**Example output:**
```
Starting solve for configuration: Heads-Up 50bb
  Players: 2
  Target Exploitability: 5.0%
  Max Iterations: 5000

Job created: a1b2c3d4-e5f6-7890-abcd-ef1234567890

Solve completed!

Job: a1b2c3d4-e5f6-7890-abcd-ef1234567890
  Configuration: <config-id>
  Status: COMPLETED
  Result:
    Final Exploitability: 0.000000%
    Iterations Run: 2500
    Converged: true
    Completion: CONVERGED
    Execution Time: 0s
    Strategy: <strategy-id>

SUCCESS: Solve completed: a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

### Querying Strategies

**Query a solved strategy:**
```bash
./nlhsolver strategy query <strategy-id> \
  --street PREFLOP \
  --pot 1.5 \
  --position BTN \
  --stack 49.5
```

### Retrieving Results

All solve results are automatically persisted to the `data/` directory:

**Strategy files:**
```bash
data/strategies/
├── <strategy-id>-metadata.pb.gz    # Strategy metadata (exploitability, solve job ID)
└── <strategy-id>-data.pb.gz        # Full strategy data (all information sets)
```

**Configuration files:**
```bash
data/configurations/
└── <config-id>.pb.gz               # Solve configuration parameters
```

**Job files:**
```bash
data/jobs/
└── <job-id>.pb.gz                  # Job metadata and progress
```

### Understanding Results

- **Exploitability**: How far the strategy is from Nash equilibrium (0% = perfect)
- **Converged**: Whether the solver reached the target exploitability
- **Completion Type**:
  - `CONVERGED`: Reached target exploitability
  - `ITERATION_LIMIT`: Hit max iterations without converging
  - `TIMEOUT`: Hit time limit

### Current Limitations (MVP)

The current MVP supports:
- ✅ Heads-up (2-player) poker only
- ✅ Preflop-only games (no flop/turn/river)
- ✅ Simplified bet sizing (1.0x pot and ALL_IN only)
- ✅ Maximum 2 raises per betting round
- ⚠️ No hand evaluation at showdown (split pot if both players call)

These limitations will be addressed in future phases.

## Development Roadmap

### Phase 1: Setup ✅ COMPLETE
- [X] Gradle project initialization
- [X] All dependencies configured
- [X] Directory structure created
- [X] Build system with Protocol Buffers support

### Phase 2: Foundational ✅ COMPLETE
- [X] Poker domain models (Card, Position, Street, Action)
- [X] Hand evaluation logic (5-card and 7-card)
- [X] Hand ranking comparison system
- [X] Hand strength lookup table
- [X] Preflop bucketing (169 canonical hands)
- [X] Equity calculator (Monte Carlo simulation)
- [X] Suit isomorphism detection

### Phase 3: User Story 1 - MVP (Core Solver) ✅ COMPLETE
- [X] Game tree construction
- [X] CFR+ algorithm implementation
- [X] Solve orchestration
- [X] Protocol Buffers schemas
- [X] Storage layer (file-based)
- [X] Strategy query service
- [ ] REST API endpoints (deferred to Phase 4)
- [X] CLI commands

### Phases 4-7: Additional Features
- [ ] Multi-player support (3-6 players)
- [ ] Background/remote execution
- [ ] Progress monitoring
- [ ] Polish and production readiness

**Full task breakdown**: See `specs/001-nlh-poker-solver/tasks.md` (123 tasks total)

## Documentation

- **Feature Spec**: `specs/001-nlh-poker-solver/spec.md`
- **Implementation Plan**: `specs/001-nlh-poker-solver/plan.md`
- **Data Model**: `specs/001-nlh-poker-solver/data-model.md`
- **API Contracts**: `specs/001-nlh-poker-solver/contracts/`
- **Research**: `specs/001-nlh-poker-solver/research.md`
- **Quickstart Guide**: `specs/001-nlh-poker-solver/quickstart.md`
- **Task Breakdown**: `specs/001-nlh-poker-solver/tasks.md`

## Key Features (Planned)

- **CFR+ Solver**: Game-theoretic optimal strategies for No-Limit Hold'em
- **Configurable**: Stack sizes (10bb-500bb), player counts (2-6)
- **Optimized**: Hand bucketing, suit isomorphism, node caching
- **Dual Interface**: CLI and REST API
- **Background Execution**: Async job queue for long-running solves
- **Strategy Queries**: Look up optimal play for specific game states
- **Performance Target**: Heads-up 100bb solve in <4 hours on consumer hardware

## Build Commands

```bash
# Build project
./gradlew build

# Run tests
./gradlew test

# Run specific test
./gradlew test --tests "com.nlhsolver.poker.CardTest"

# Clean build
./gradlew clean build

# Generate Protocol Buffers code
./gradlew generateProto

# Create distribution
./gradlew installDist

# Run application (once implemented)
./gradlew run
```

## Development Notes

### Protocol Buffers

Protocol Buffers schemas should be placed in `src/main/proto/`. The Gradle plugin will automatically:
- Generate Kotlin code to `build/generated/source/proto/main/kotlin/`
- Make generated code available to the compiler

### Data Storage

The `data/` directory is gitignored and used for runtime storage:
- **configurations/**: Solve configuration files (.pb.gz)
- **jobs/**: Job metadata files (.pb.gz)
- **strategies/**: Completed strategy files (.pb.gz)
- **queue/**: Background job queue state

### Testing

- **Unit tests**: `src/test/kotlin/com/nlhsolver/unit/`
- **Integration tests**: `src/test/kotlin/com/nlhsolver/integration/`
- **Contract tests**: `src/test/kotlin/com/nlhsolver/contract/`

Framework: Kotest for property-based testing, MockK for mocking

## Performance Goals

- **Heads-Up 100bb Solve**: <4 hours on 8-16GB RAM
- **Exploitability**: <0.5% of pot
- **Strategy Queries**: <5 seconds
- **Concurrent Jobs**: Support 3+ background solves
- **Game Tree Size**: 50-100M nodes (with abstractions)

## Contributing

This project follows a phased implementation approach. See `specs/001-nlh-poker-solver/tasks.md` for the complete task breakdown and current progress.

## License

TBD

## Contact

TBD

---

**Status**: Phase 1, 2 & 3 Complete - MVP is fully functional! (~80/123 tasks, 65%)
**Next**: Phase 4+ - Multi-street support, multi-player, REST API, background execution
