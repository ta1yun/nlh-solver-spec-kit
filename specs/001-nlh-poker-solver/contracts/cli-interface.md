# CLI Interface Specification

**Feature**: 001-nlh-poker-solver
**Date**: 2025-12-13
**Framework**: Clikt 4.2+

## Overview

The NLH Solver CLI provides a command-line interface for all solver operations. It uses Clikt for argument parsing and command structure. All CLI commands map to equivalent REST API operations, sharing the same underlying solver engine.

---

## Command Structure

```bash
nlhsolver <command> [options] [arguments]
```

### Global Options

| Option | Short | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--help` | `-h` | Flag | - | Show help message |
| `--version` | `-v` | Flag | - | Show version information |
| `--output` | `-o` | String | `text` | Output format: `text`, `json` |
| `--verbose` | `-V` | Flag | - | Enable verbose logging |

---

## Commands

### 1. Configuration Management

#### `nlhsolver config create`

Create a new solve configuration.

**Usage**:
```bash
nlhsolver config create [options]
```

**Options**:

| Option | Short | Type | Required | Default | Description |
|--------|-------|------|----------|---------|-------------|
| `--name` | `-n` | String | No | "Untitled Solve" | Configuration name |
| `--description` | `-d` | String | No | - | Configuration description |
| `--players` | `-p` | Int | Yes | - | Number of players (2-6) |
| `--stacks` | `-s` | Map | Yes | - | Stack sizes: `BTN:100,BB:100` |
| `--position` | - | String | Yes | - | Starting position (BTN, SB, BB, etc.) |
| `--target-exploit` | `-t` | Double | No | 0.5 | Target exploitability (% pot) |
| `--max-iterations` | `-m` | Long | No | 5000000 | Maximum iterations |
| `--timeout-hours` | - | Int | No | - | Wall-clock timeout in hours |
| `--bet-sizes` | `-b` | List | No | Default | Bet sizing: `0.33,0.5,0.75,1.0,1.5,allin` |
| `--flop-buckets` | - | Int | No | 200 | Flop hand buckets (50-500) |
| `--turn-buckets` | - | Int | No | 200 | Turn hand buckets (50-500) |
| `--river-buckets` | - | Int | No | 200 | River hand buckets (50-500) |

**Examples**:
```bash
# Heads-up 100bb configuration
nlhsolver config create \
  --name "HU 100bb BTN vs BB" \
  --players 2 \
  --stacks "BTN:100,BB:100" \
  --position BTN \
  --target-exploit 0.5

# 3-way configuration with custom bet sizing
nlhsolver config create \
  --name "3-max SB vs BB vs BTN" \
  --players 3 \
  --stacks "SB:100,BB:100,BTN:100" \
  --position SB \
  --bet-sizes "0.5,1.0,allin" \
  --flop-buckets 150
```

**Output (text)**:
```text
Configuration created successfully
ID: a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c
Name: HU 100bb BTN vs BB
Players: 2
Stacks: BTN=100bb, BB=100bb
Starting Position: BTN
Target Exploitability: 0.5%
```

**Output (JSON)**:
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
    "maxIterations": 5000000
  },
  "createdAt": "2025-12-13T10:30:00Z"
}
```

---

#### `nlhsolver config list`

List all solve configurations.

**Usage**:
```bash
nlhsolver config list [options]
```

**Options**:

| Option | Short | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--limit` | `-l` | Int | 20 | Maximum results to return |
| `--offset` | - | Int | 0 | Number of results to skip |

**Example**:
```bash
nlhsolver config list --limit 10
```

**Output (text)**:
```text
Configurations (3 total):

1. a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c
   Name: HU 100bb BTN vs BB
   Players: 2, Stacks: BTN=100bb, BB=100bb
   Created: 2025-12-13 10:30:00

2. b7d8e2f3-5c4a-4e1b-8d9c-2a3b4c5d6e7f
   Name: 3-max 100bb
   Players: 3, Stacks: SB=100bb, BB=100bb, BTN=100bb
   Created: 2025-12-12 14:20:15

3. c9a1b2c3-6d5e-4f7g-9h8i-3j4k5l6m7n8o
   Name: HU 50bb Short Stack
   Players: 2, Stacks: BTN=50bb, BB=50bb
   Created: 2025-12-11 08:45:30
```

---

#### `nlhsolver config get <configId>`

Get configuration details by ID.

**Usage**:
```bash
nlhsolver config get <configId>
```

**Arguments**:
- `<configId>`: UUID of configuration

**Example**:
```bash
nlhsolver config get a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c
```

---

#### `nlhsolver config delete <configId>`

Delete a configuration.

**Usage**:
```bash
nlhsolver config delete <configId>
```

**Arguments**:
- `<configId>`: UUID of configuration

**Options**:

| Option | Short | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--force` | `-f` | Flag | - | Skip confirmation prompt |

**Example**:
```bash
nlhsolver config delete a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c --force
```

---

### 2. Job Management

#### `nlhsolver solve run`

Submit and run a solve job (alias: `nlhsolver run`).

**Usage**:
```bash
nlhsolver solve run [options]
```

**Options**:

| Option | Short | Type | Required | Default | Description |
|--------|-------|------|----------|---------|-------------|
| `--config` | `-c` | UUID | Yes | - | Configuration ID to use |
| `--background` | `-bg` | Flag | No | - | Run in background (async) |
| `--local` | `-l` | Flag | No | true | Run locally (default) |
| `--remote` | `-r` | Flag | No | - | Run on remote executor |

**Examples**:
```bash
# Run solve synchronously (blocks until complete)
nlhsolver solve run --config a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c

# Run in background
nlhsolver solve run --config a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c --background

# Submit to remote executor
nlhsolver solve run --config a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c --remote
```

**Output (synchronous)**:
```text
Solve job submitted
Job ID: d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
Status: PENDING → RUNNING

Progress:
Iteration 10000 | Exploitability: 12.3% | Est. remaining: 4h 15m
Iteration 20000 | Exploitability: 8.7% | Est. remaining: 3h 50m
...
Iteration 950000 | Exploitability: 0.48% | Converged!

Solve completed successfully
Final Exploitability: 0.48%
Iterations: 950000
Execution Time: 3h 42m 18s
Strategy ID: e5f6g7h8-9i0j-1k2l-3m4n-5o6p7q8r9s0t
```

**Output (background)**:
```text
Solve job submitted in background
Job ID: d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
Status: PENDING

Monitor progress: nlhsolver job status d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
Cancel job: nlhsolver job cancel d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
```

---

#### `nlhsolver job list`

List solve jobs.

**Usage**:
```bash
nlhsolver job list [options]
```

**Options**:

| Option | Short | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--status` | `-s` | String | - | Filter by status (PENDING, RUNNING, COMPLETED, etc.) |
| `--config` | `-c` | UUID | - | Filter by configuration ID |
| `--limit` | `-l` | Int | 20 | Maximum results |
| `--offset` | - | Int | 0 | Results offset |

**Examples**:
```bash
# List all running jobs
nlhsolver job list --status RUNNING

# List jobs for specific configuration
nlhsolver job list --config a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c
```

---

#### `nlhsolver job status <jobId>`

Get job status and progress (alias: `nlhsolver status <jobId>`).

**Usage**:
```bash
nlhsolver job status <jobId> [options]
```

**Arguments**:
- `<jobId>`: UUID of job

**Options**:

| Option | Short | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--watch` | `-w` | Flag | - | Watch mode (auto-refresh every 30s) |

**Examples**:
```bash
# Get current status
nlhsolver job status d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s

# Watch progress in real-time
nlhsolver job status d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s --watch
```

**Output**:
```text
Job ID: d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
Configuration: HU 100bb BTN vs BB (a3f5c891-4b2e-4f9a-9c1a-3d7e8f1a2b3c)
Status: RUNNING
Submitted: 2025-12-13 10:45:00
Started: 2025-12-13 10:45:02
Elapsed: 2h 15m 30s

Progress:
  Iterations: 450,000 / 5,000,000
  Current Exploitability: 2.3%
  Target: 0.5%
  Estimated Remaining: 2h 30m
```

---

#### `nlhsolver job cancel <jobId>`

Cancel a running job.

**Usage**:
```bash
nlhsolver job cancel <jobId> [options]
```

**Arguments**:
- `<jobId>`: UUID of job

**Options**:

| Option | Short | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--force` | `-f` | Flag | - | Skip confirmation |

**Example**:
```bash
nlhsolver job cancel d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s --force
```

---

### 3. Strategy Queries

#### `nlhsolver strategy list`

List all completed strategies.

**Usage**:
```bash
nlhsolver strategy list [options]
```

**Options**:

| Option | Short | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--limit` | `-l` | Int | 20 | Maximum results |
| `--offset` | - | Int | 0 | Results offset |

**Example**:
```bash
nlhsolver strategy list --limit 10
```

---

#### `nlhsolver strategy get <strategyId>`

Get strategy details.

**Usage**:
```bash
nlhsolver strategy get <strategyId>
```

**Arguments**:
- `<strategyId>`: UUID of strategy

**Example**:
```bash
nlhsolver strategy get e5f6g7h8-9i0j-1k2l-3m4n-5o6p7q8r9s0t
```

**Output**:
```text
Strategy ID: e5f6g7h8-9i0j-1k2l-3m4n-5o6p7q8r9s0t
Solve Job: d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
Configuration: HU 100bb BTN vs BB
Exploitability: 0.48%
Created: 2025-12-13 14:27:18
```

---

#### `nlhsolver strategy query <strategyId>`

Query optimal play for a specific game state.

**Usage**:
```bash
nlhsolver strategy query <strategyId> [options]
```

**Arguments**:
- `<strategyId>`: UUID of strategy

**Options**:

| Option | Short | Type | Required | Description |
|--------|-------|------|---------|-------------|
| `--street` | - | String | Yes | Street: PREFLOP, FLOP, TURN, RIVER |
| `--board` | `-b` | String | No | Board cards (e.g., "AsKdQh") |
| `--pot` | `-p` | Double | Yes | Current pot size in bb |
| `--position` | - | String | Yes | Querying position (BTN, BB, etc.) |
| `--stack` | `-s` | String | Yes | Stack sizes (e.g., "BTN:95,BB:98") |
| `--history` | - | String | No | Action history (e.g., "BTN:BET:3,BB:CALL:3") |

**Examples**:
```bash
# Preflop query
nlhsolver strategy query e5f6g7h8-9i0j-1k2l-3m4n-5o6p7q8r9s0t \
  --street PREFLOP \
  --pot 1.5 \
  --position BTN \
  --stack "BTN:100,BB:99.5" \
  --history ""

# Flop query
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

**Output (JSON)**:
```json
{
  "recommendations": {
    "CHECK": 0.452,
    "BET_0.33_POT": 0.186,
    "BET_0.75_POT": 0.241,
    "BET_1.5_POT": 0.121
  },
  "expectedValue": 1.23
}
```

---

### 4. Utility Commands

#### `nlhsolver version`

Show version information.

**Usage**:
```bash
nlhsolver version
```

**Output**:
```text
NLH Solver v1.0.0
Kotlin 1.9.22
JVM 17.0.9
```

---

#### `nlhsolver health`

Check solver service health (requires REST API server running).

**Usage**:
```bash
nlhsolver health [options]
```

**Options**:

| Option | Short | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--url` | `-u` | String | http://localhost:8080 | API server URL |

**Example**:
```bash
nlhsolver health --url http://localhost:8080
```

**Output**:
```text
Service: Healthy
Version: 1.0.0
Uptime: 3h 24m 15s
Active Jobs: 2
```

---

## Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | General error |
| 2 | Invalid arguments |
| 3 | Configuration error |
| 4 | Job execution failure |
| 5 | Network/remote error |
| 130 | Interrupted by user (Ctrl+C) |

---

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NLHSOLVER_API_URL` | REST API server URL | http://localhost:8080 |
| `NLHSOLVER_DATA_DIR` | Data storage directory | `~/.nlhsolver/data` |
| `NLHSOLVER_LOG_LEVEL` | Logging level (DEBUG, INFO, WARN, ERROR) | INFO |
| `NLHSOLVER_MAX_WORKERS` | Maximum concurrent background jobs | 3 |

---

## Configuration File

Optional config file: `~/.nlhsolver/config.toml`

```toml
[api]
url = "http://localhost:8080"

[storage]
data_dir = "~/.nlhsolver/data"
compression = true

[solver]
max_workers = 3
default_target_exploitability = 0.5

[logging]
level = "INFO"
file = "~/.nlhsolver/logs/solver.log"
```

---

## Shell Completion

Generate shell completion scripts:

```bash
# Bash
nlhsolver completion bash > /etc/bash_completion.d/nlhsolver

# Zsh
nlhsolver completion zsh > /usr/local/share/zsh/site-functions/_nlhsolver

# Fish
nlhsolver completion fish > ~/.config/fish/completions/nlhsolver.fish
```

---

## Examples: Common Workflows

### Workflow 1: Create and Run a Simple Solve

```bash
# 1. Create configuration
nlhsolver config create \
  --name "HU 100bb" \
  --players 2 \
  --stacks "BTN:100,BB:100" \
  --position BTN
# Output: Config ID: a3f5...

# 2. Run solve in background
nlhsolver solve run --config a3f5... --background
# Output: Job ID: d1e2...

# 3. Monitor progress
nlhsolver job status d1e2... --watch

# 4. Query strategy (after completion)
nlhsolver strategy query <strategy-id> \
  --street FLOP \
  --board "AsKdQh" \
  --pot 7.0 \
  --position BB \
  --stack "BTN:97,BB:96.5"
```

---

### Workflow 2: List and Resume Jobs

```bash
# List running jobs
nlhsolver job list --status RUNNING

# Check specific job
nlhsolver job status d1e2...

# Cancel if needed
nlhsolver job cancel d1e2... --force
```

---

### Workflow 3: Batch Solves

```bash
# Create multiple configurations
for stacks in 50 100 150 200; do
  nlhsolver config create \
    --name "HU ${stacks}bb" \
    --players 2 \
    --stacks "BTN:${stacks},BB:${stacks}" \
    --position BTN
done

# Submit batch jobs
nlhsolver config list --output json | \
  jq -r '.configurations[].configId' | \
  xargs -I {} nlhsolver solve run --config {} --background
```

---

## Error Handling

### Validation Errors

```bash
$ nlhsolver config create --players 7 --stacks "BTN:100,BB:100" --position BTN
Error: Invalid number of players. Must be 2-6.
Exit code: 2
```

### Job Failures

```bash
$ nlhsolver job status d1e2...
Job ID: d1e2f3g4-7h8i-9j0k-1l2m-3n4o5p6q7r8s
Status: FAILED
Error: OUT_OF_MEMORY
Message: JVM heap exhausted after 1,250,000 iterations. Reduce hand abstraction granularity or increase heap size.
Retriable: true
```

---

## Notes

- All CLI commands that interact with the solver use the same REST API endpoints internally
- CLI provides a more ergonomic interface for terminal users compared to direct API calls
- JSON output mode (`--output json`) enables scripting and automation
- Background execution is managed via the solver's job queue system
- Strategy queries require completed solve jobs with stored strategy profiles
