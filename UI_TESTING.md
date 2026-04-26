# UI Testing & Validation

## Quick Validation After Changes

Run ESLint to catch undefined variables, syntax errors, and common mistakes:

```bash
npm run lint
```

This will catch errors like:
- ✅ Undefined variables (e.g., `r1_p2_facing` instead of `r1_p2_facing_bet`)
- ✅ Unused variables
- ✅ JSX syntax errors
- ✅ React-specific issues

## Auto-fix Simple Issues

```bash
npm run lint:fix
```

## Watch Mode (Optional)

To automatically lint on file changes:

```bash
npm install --save-dev nodemon
npm run lint:watch
```

## What Gets Checked

- `strategy-viewer.html` - All JavaScript code including JSX
- Catches errors **before** you open in browser
- React components validated
- Global variables (React, ReactDOM, window.LEDUC_SOLUTION, etc.) properly configured

## Example Output

```
/Users/tpai/Projects/nlh-solver-spec-kit/strategy-viewer.html
  175:30  error  'r1_p2_facing' is not defined  no-undef

✖ 1 problem (1 error, 0 warnings)
```

## Workflow

1. Make changes to `strategy-viewer.html`
2. Run `npm run lint` before opening in browser
3. Fix any errors
4. Open in browser to test visually

This catches 90% of JavaScript errors at "compile time" instead of runtime!
