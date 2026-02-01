# No-Limit Hold'em Poker Solver

A high-performance CFR+ based solver for computing Nash equilibrium strategies in No-Limit Texas Hold'em poker.

## Features

- **Full Game Tree Solving**: Preflop → Flop → Turn → River with CFR+
- **Blueprint + Refinement**: Two-phase approach for efficient range derivation
  - Blueprint: Fast preflop range solving with coarse abstraction (1-2 hours)
  - Refinement: Precise postflop solving for specific boards (10-30 minutes)
- **Hand & Board Abstraction**: Progressive bucketing and board isomorphism
- **REST API & CLI**: Multiple interfaces for solver interaction
- **Strategy Query**: Look up GTO strategies for any game state
- **Persistence**: Protocol Buffers with gzip compression

## Quick Start

### Prerequisites

- JDK 17 or higher
- Gradle 8.4+ (or use included wrapper)

### Build

```bash
./gradlew build
```

### Run CLI

```bash
# Blueprint workflow
./gradlew run --args="blueprint solve --name 100bb --stacks BTN:100,BB:100"
./gradlew run --args="blueprint analyze-ev-loss <blueprint-id>"
./gradlew run --args="refine solve <blueprint-id> --board Ks7h2d --street FLOP --pot 3.5"
```

### Run REST API Server

```bash
./gradlew run
# Server starts on http://localhost:8080
```

## Performance

### Blueprint + Refinement Performance
- **Blueprint**: 1-2 hours, ~2GB RAM, < 1% exploitability
- **Refinement**: 10-30 minutes, ~500MB RAM, < 0.5% exploitability
- **EV Loss**: < 2% of pot (validates blueprint quality)

## Testing

```bash
# Run all tests
./gradlew test
```

## License

MIT License
