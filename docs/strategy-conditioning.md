# Strategy Conditioning by Action

The `--facing` parameter allows you to filter strategy queries to specific game situations, eliminating the problem of averaging across different info sets.

## Overview

Without conditioning, strategy visualizations average over all info sets for a hand, mixing different game situations (e.g., being first to act vs. facing a bet). With the `--facing` parameter, you can view strategies conditioned on specific opponent actions.

## Usage

The `--facing` parameter is available for both `strategy range` and `strategy hand` commands.

### Basic Syntax

```bash
./gradlew run --args="strategy range <strategy-id> --position=<position> --street=<street> --board=<board> --facing=<action>"
./gradlew run --args="strategy hand <strategy-id> --hand=<hand> --position=<position> --street=<street> --board=<board> --facing=<action>"
```

## Facing Options

### 1. Facing Check: `--facing=check`

Shows strategy when opponent checks to you.

**Example: BTN's betting strategy after BB checks**
```bash
./gradlew run --args="strategy range 8a00b3c1-1ebf-4018-ae92-a675a8e0a980 --position=BTN --street=RIVER --board=Ks7h2d9c4h --facing=check"
```

**Output:**
- Shows check/bet frequencies for each hand
- Reveals polarized betting strategy (value hands + bluffs)

### 2. Facing Bet: `--facing=bet`

Shows defense strategy when facing any bet size.

**Example: BB's defense frequencies against BTN's bet**
```bash
./gradlew run --args="strategy range 8a00b3c1-1ebf-4018-ae92-a675a8e0a980 --position=BB --street=RIVER --board=Ks7h2d9c4h --facing=bet"
```

**Output:**
- Shows fold/call/raise frequencies for each hand
- Reveals defense strategy and minimum defense frequency (MDF)

### 3. Facing Specific Bet Size: `--facing=bet:10`

Shows defense strategy when facing a specific bet size.

**Example: BB's defense against BTN's bet of 10 chips**
```bash
./gradlew run --args="strategy hand 8a00b3c1-1ebf-4018-ae92-a675a8e0a980 --hand=JJ --position=BB --street=RIVER --board=Ks7h2d9c4h --facing=bet:10"
```

**Output:**
- Shows fold/call/raise frequencies for specific bet size
- More precise than `--facing=bet` if multiple bet sizes exist

### 4. Facing Raise: `--facing=raise`

Shows strategy when facing a raise.

**Example: BB's defense against BTN's raise**
```bash
./gradlew run --args="strategy range <strategy-id> --position=BB --street=RIVER --board=Ks7h2d9c4h --facing=raise"
```

You can also specify raise amounts: `--facing=raise:20`

## Example Output

### Range View with Facing Filter

```bash
./gradlew run --args="strategy range 8a00b3c1-1ebf-4018-ae92-a675a8e0a980 --position=BB --street=RIVER --board=Ks7h2d9c4h --facing=bet"
```

```
Loading flop (Ks7h2d9c4h) range for BB facing bet...
RIVER Range for BB
Board: K♠ 7♥ 2♦ 9♣ 4♥
======================================================================

Legend: R=Raise% C=Call% F=Fold%  |  Green=Raise  Yellow=Call  Red=Fold

      A     K     Q     J     T     9     8     7     6     5     4     3     2
----------------------------------------------------------------------
Q  |   -     -   C62    -     -     -     -     -     -     -     -     -     -
J  |   -     -     -   C97    -     -     -     -     -     -     -     -     -
T  |   -     -     -     -   F54    -     -     -     -     -     -     -     -

Summary:
  Hands with data: 3/169
  Average Raise: 0.0%
  Average Call:  68.6%
  Average Fold:  31.4%
```

### Hand View with Facing Filter

```bash
./gradlew run --args="strategy hand 8a00b3c1-1ebf-4018-ae92-a675a8e0a980 --hand=JJ --position=BB --street=RIVER --board=Ks7h2d9c4h --facing=bet"
```

```
Hand: JJ
  Position: BB
  Street: RIVER
  Board: K♠ 7♥ 2♦ 9♣ 4♥
  Bucket ID: -1
  Info Sets Matched: 1

  Action Frequencies:
    call     97.2%  █████████████████████████████
    fold     2.8%
```

## Use Cases

### 1. Analyzing Defense Frequencies (MDF)

Check if BB is defending at the correct frequency against BTN's bets:

```bash
./gradlew run --args="strategy range <id> --position=BB --facing=bet"
```

Expected MDF = Pot / (Pot + Bet)

### 2. Analyzing Betting Ranges

See which hands BTN bets for value and as bluffs:

```bash
./gradlew run --args="strategy range <id> --position=BTN --facing=check"
```

### 3. Comparing Strategies Across Bet Sizes

Compare defense frequencies against different bet sizes:

```bash
# Small bet
./gradlew run --args="strategy hand <id> --hand=JJ --facing=bet:5"

# Large bet
./gradlew run --args="strategy hand <id> --hand=JJ --facing=bet:15"
```

## Technical Details

### Info Set Format

Info sets contain action history in the format:
```
p0:hand=JsJh:street=RIVER:board=KINGSPADES,...:pot=30.0:history=BB:CHECK|BTN:BET:10.0
```

### History Format

- Actions are separated by `|` (pipe character)
- Each action has format: `POSITION:ACTION` or `POSITION:ACTION:AMOUNT`
- Examples:
  - `BB:CHECK` - BB checked
  - `BTN:BET:10.0` - BTN bet 10 chips
  - `BB:CHECK|BTN:BET:10.0` - BB checked, then BTN bet 10

### Matching Logic

The `--facing` parameter matches the **last action** in the history:
- `--facing=check` matches info sets ending with a CHECK action
- `--facing=bet` matches info sets ending with a BET action (any size)
- `--facing=bet:10` matches info sets ending with BET:10.0 (±0.01 tolerance)

## Limitations

- The action labels may show "raise" for bets (when not facing a prior bet) due to internal action representation
- Empty history (first to act) is treated as implicitly facing a check
- Only filters by the most recent action in the history

## Related Commands

- `strategy list` - List all solved strategies
- `strategy show <id>` - Show strategy metadata
- `strategy query <id>` - Low-level info set query
