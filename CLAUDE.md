# nlh-solver-spec-kit Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-12-14

## Active Technologies

- Kotlin 1.9+ with JVM target (Java 17+) (001-nlh-poker-solver)

## Project Structure

```text
src/
tests/
```

## Commands

# Add commands for Kotlin 1.9+ with JVM target (Java 17+)

## Code Style

Kotlin 1.9+ with JVM target (Java 17+): Follow standard conventions

## Git Commit Guidelines

- Keep commit messages to a single line (no multi-line descriptions)

## Recent Changes

- 001-nlh-poker-solver: Added Kotlin 1.9+ with JVM target (Java 17+)

<!-- MANUAL ADDITIONS START -->

## Design Workflow

**CRITICAL: User is the designer, Claude is the implementer.**

### Design Authority
- **ALL architectural and design decisions** must come from design files in `specs/001-nlh-poker-solver/`
- Design files:
  - `spec.md` - Feature specifications and requirements
  - `data-model.md` - Data structure designs
  - `plan.md` - Implementation plans
  - `tasks.md` - Implementation tasks

### Implementation Rules
1. **Before implementing**: Read relevant design files to understand the intended architecture
2. **No freelancing**: Do NOT make design decisions or architectural changes without explicit design specs
3. **Clarify, don't assume**: If a design decision is needed, ASK the user (designer) rather than making the choice
4. **Follow the spec**: Implement exactly what the design specifies, no "improvements" or "enhancements"
5. **Report gaps**: If the spec is incomplete or unclear, surface it to the designer

### Separation of Concerns
- **User (Designer)**: Creates specs, makes architectural decisions, defines interfaces
- **Claude (Implementer)**: Writes code that implements the specs, reports issues, suggests optimizations ONLY when asked

**When in doubt, read the specs first!**

## UI/Viewer Development Rules

**CRITICAL: UI files are externally generated or user-managed. Claude iterates ONLY on designated files.**

### Leduc Viewer

1. **Base file:** `viewer/leduc-range-viewer.html`
   - All UI iterations happen here
   - This is the single source of truth for Leduc viewer development

2. **For major versions:**
   - Create copies: `viewer/leduc-range-viewer-v2.html`, `viewer/leduc-range-viewer-v3.html`, etc.
   - Always stem from `viewer/leduc-range-viewer.html`
   - Update base file with improvements from versioned copies as needed

3. **NEVER touch:**
   - `strategy-viewer.html` (shared/template file)
   - `viewer/index.html` (unless explicitly requested)
   - Root directory HTML files (except when copying TO viewer/)

### NLH Viewer (Future)

1. **External UI generation:**
   - NLH will have externally generated UI files in `viewer/`
   - Claude iterates EXCLUSIVELY on these generated files
   - Do NOT create new UI files from scratch

2. **Workflow:**
   - User provides/generates base UI file
   - Claude makes requested modifications to that specific file only
   - No touching template files or creating parallel versions without permission

### General Rules

- Edit `viewer/` files directly (no syncing from root)
- Ask before creating new viewer files or touching shared templates
- **Violation = stop and ask first**

<!-- MANUAL ADDITIONS END -->
