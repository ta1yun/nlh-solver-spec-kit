// Recursive Leduc Tree Structure
// Solver: vanilla CFR, 200k epochs × 30 deals
// Exploitability: 0.32% (1.6 mbb/g)

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.24, bet: 0.76}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.24, bet: 0.76}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.26, bet: 0.74}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.26, bet: 0.74}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.38, evRange: 0.65, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.38, evRange: 0.65, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.32, evRange: 0.56, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.66} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.32, evRange: 0.56, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.66} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.42} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.42} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.39, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.53}, evA: {check: -0.39, bet: -5.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.39, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.53}, evA: {check: -0.39, bet: -5.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.82, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.16}, evA: {check: -0.82, bet: -4.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.82, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.16}, evA: {check: -0.82, bet: -4.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.01, evRange: 1.00, rangeWeight: 0.48, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.01, bet: 1.51}, evA: {check: 1.00, bet: 1.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.25, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.00}, evA: {check: -0.51, bet: -3.38} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.25, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.00}, evA: {check: -0.51, bet: -3.38} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.17}, evA: {check: -0.90, bet: -3.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.17}, evA: {check: -0.90, bet: -3.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, rangeWeight: 0.70, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 0.52, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 2.21}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 2.21}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.83}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.83}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.33, evRange: 7.66, rangeWeight: 0.48, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.33}, evA: {fold: -1.00, call: 0.00, raise: 7.66} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -6.17, evRange: -7.67, rangeWeight: 0.00, freq: {fold: 0.33, call: 0.67}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -6.17, evRange: -7.67, rangeWeight: 0.00, freq: {fold: 0.33, call: 0.67}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 1.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.59, evRange: -1.90, rangeWeight: 0.00, freq: {fold: 0.80, call: 0.15, raise: 0.06}, ev: {fold: -1.00, call: 1.25, raise: 0.40}, evA: {fold: -1.00, call: -4.72, raise: -8.09} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.59, evRange: -1.90, rangeWeight: 0.00, freq: {fold: 0.80, call: 0.15, raise: 0.06}, ev: {fold: -1.00, call: 1.25, raise: 0.40}, evA: {fold: -1.00, call: -4.72, raise: -8.09} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.40}, evA: {fold: -1.00, call: -4.96, raise: -8.70} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.40}, evA: {fold: -1.00, call: -4.96, raise: -8.70} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.06, evRange: 7.82, rangeWeight: 0.70, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.06}, evA: {fold: -1.00, call: 0.56, raise: 7.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.09, evRange: -8.91, rangeWeight: 0.04, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.09, evRange: -8.91, rangeWeight: 0.04, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.09, evRange: -5.22, rangeWeight: 0.02, freq: {fold: 0.95, call: 0.05}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.09, evRange: -5.22, rangeWeight: 0.02, freq: {fold: 0.95, call: 0.05}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.94, evRange: 8.94, rangeWeight: 0.89, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.60}, evA: {check: 0.67, bet: 0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.60}, evA: {check: 0.67, bet: 0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.13, evRange: 1.28, rangeWeight: 0.10, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.14, bet: 3.09}, evA: {check: 1.28, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -0.24, rangeWeight: 0.36, freq: {check: 0.81, bet: 0.19}, ev: {check: -0.77, bet: -3.47}, evA: {check: -0.24, bet: -0.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -0.24, rangeWeight: 0.36, freq: {check: 0.81, bet: 0.19}, ev: {check: -0.77, bet: -3.47}, evA: {check: -0.24, bet: -0.25} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: 0.73, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.11}, evA: {check: 0.62, bet: 0.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: 0.73, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.11}, evA: {check: 0.62, bet: 0.40} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.85, evRange: 1.41, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.85}, evA: {check: 0.94, bet: 1.41} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.45, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.77}, evA: {check: -0.50, bet: -0.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.45, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.77}, evA: {check: -0.50, bet: -0.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: -1.05, rangeWeight: 0.11, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.88}, evA: {fold: -1.00, call: -2.59, raise: -3.56} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: -1.05, rangeWeight: 0.11, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.88}, evA: {fold: -1.00, call: -2.59, raise: -3.56} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.00, evRange: 5.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.00}, evA: {fold: -1.00, call: 1.94, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.00}, evA: {fold: -1.00, call: -4.31, raise: -5.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.00}, evA: {fold: -1.00, call: -4.31, raise: -5.62} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.61, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: 2.14, rangeWeight: 0.00, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 0.66, raise: 1.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: 2.14, rangeWeight: 0.00, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 0.66, raise: 1.12} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 5.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 3.61, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.16, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.03, raise: -1.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.16, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.03, raise: -1.08} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: -4.47, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: -4.47, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.41} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.28, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.44, evRange: 1.51, rangeWeight: 0.09, freq: {check: 0.01, bet: 0.99}, ev: {check: 1.14, bet: 2.44}, evA: {check: 1.07, bet: 1.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.18, evRange: 0.93, rangeWeight: 0.10, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.73, bet: -1.68}, evA: {check: 0.93, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.18, evRange: 0.93, rangeWeight: 0.10, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.73, bet: -1.68}, evA: {check: 0.93, bet: 0.93} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.66}, evA: {check: -0.31, bet: -0.31} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.66}, evA: {check: -0.31, bet: -0.31} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.56, rangeWeight: 0.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00}, evA: {check: 1.00, bet: 1.56} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.19, evRange: 0.92, rangeWeight: 0.09, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -1.75}, evA: {check: 0.92, bet: 0.92} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.19, evRange: 0.92, rangeWeight: 0.09, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -1.75}, evA: {check: 0.92, bet: 0.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.25, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.50}, evA: {check: -0.25, bet: -0.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.25, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.50}, evA: {check: -0.25, bet: -0.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 6.83, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.99, raise: 6.83} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 3.48, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 3.46, raise: 3.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 3.48, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 3.46, raise: 3.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.43, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.15, raise: -3.81} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.43, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.15, raise: -3.81} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 3.37} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -3.42, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.64} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -3.42, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.27, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.27, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 7.53, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 3.11, raise: 7.53} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.62, evRange: -0.95, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: -2.23, raise: -2.82} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.62, evRange: -0.95, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: -2.23, raise: -2.82} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -4.55, raise: -7.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -4.55, raise: -7.19} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.38, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 3.73} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -4.72, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.45} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -4.72, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.45} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.60} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.60} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.31, raise: 0.69}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.31, raise: 0.69}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.95, evRange: -0.95, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.95, evRange: -0.95, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.70, evRange: 2.09, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.70, bet: -1.05}, evA: {check: 2.09, bet: 0.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.70, evRange: 2.09, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.70, bet: -1.05}, evA: {check: 2.09, bet: 0.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.63, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.61, bet: -3.16}, evA: {check: -2.58, bet: -2.59} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.63, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.61, bet: -3.16}, evA: {check: -2.58, bet: -2.59} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.46, evRange: 4.56, rangeWeight: 0.05, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.46, bet: 4.46}, evA: {check: 4.41, bet: 4.58} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.52, evRange: 2.49, rangeWeight: 0.25, freq: {check: 0.88, bet: 0.12}, ev: {check: 0.75, bet: -1.24}, evA: {check: 2.45, bet: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.52, evRange: 2.49, rangeWeight: 0.25, freq: {check: 0.88, bet: 0.12}, ev: {check: 0.75, bet: -1.24}, evA: {check: 2.45, bet: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.34, evRange: -1.28, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -4.54}, evA: {check: -1.30, bet: -1.27} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.34, evRange: -1.28, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -4.54}, evA: {check: -1.30, bet: -1.27} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.01, evRange: 4.08, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.01}, evA: {check: 2.98, bet: 4.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 2.95, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.82}, evA: {fold: -3.00, call: 1.01, raise: 2.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 2.95, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.82}, evA: {fold: -3.00, call: 1.01, raise: 2.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.01, evRange: -3.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -4.70, raise: -3.31} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.01, evRange: -3.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -4.70, raise: -3.31} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.07, evRange: 8.01, rangeWeight: 0.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.07}, evA: {fold: -3.00, call: 5.46, raise: 8.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -6.37, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -6.37, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.41} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.04, evRange: -7.10, rangeWeight: 0.30, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.31} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.04, evRange: -7.10, rangeWeight: 0.30, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.31} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 2.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: -2.79, rangeWeight: 0.25, freq: {fold: 0.27, call: 0.73, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.75}, evA: {fold: -3.00, call: -4.47, raise: -5.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: -2.79, rangeWeight: 0.25, freq: {fold: 0.27, call: 0.73, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.75}, evA: {fold: -3.00, call: -4.47, raise: -5.49} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.50}, evA: {fold: -3.00, call: -6.31, raise: -7.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.50}, evA: {fold: -3.00, call: -6.31, raise: -7.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 7.01, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 2.14, raise: 7.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.69, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -1.24, rangeWeight: 0.17, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.06, bet: -0.30}, evA: {check: -1.25, bet: -1.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -1.24, rangeWeight: 0.17, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.06, bet: -0.30}, evA: {check: -1.25, bet: -1.23} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.24, evRange: 4.49, rangeWeight: 0.50, freq: {check: 0.02, bet: 0.98}, ev: {check: 4.37, bet: 4.24}, evA: {check: 4.04, bet: 4.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.89, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.61, bet: -1.88}, evA: {check: -2.87, bet: -2.51} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.89, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.61, bet: -1.88}, evA: {check: -2.87, bet: -2.51} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.59, evRange: -0.73, rangeWeight: 0.29, freq: {check: 0.81, bet: 0.19}, ev: {check: 0.75, bet: -0.07}, evA: {check: -1.18, bet: -0.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.59, evRange: -0.73, rangeWeight: 0.29, freq: {check: 0.81, bet: 0.19}, ev: {check: 0.75, bet: -0.07}, evA: {check: -1.18, bet: -0.98} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.27, evRange: 5.23, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.27}, evA: {check: 2.49, bet: 5.23} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.36, evRange: -3.18, rangeWeight: 0.09, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.25, bet: -2.47}, evA: {check: -2.95, bet: -3.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.36, evRange: -3.18, rangeWeight: 0.09, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.25, bet: -2.47}, evA: {check: -2.95, bet: -3.42} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -2.96, rangeWeight: 0.40, freq: {fold: 0.42, call: 0.58, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.52, raise: -4.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -2.96, rangeWeight: 0.40, freq: {fold: 0.42, call: 0.58, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.52, raise: -4.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 3.10, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.85, evRange: -3.03, rangeWeight: 0.02, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.54, raise: -4.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.85, evRange: -3.03, rangeWeight: 0.02, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.54, raise: -4.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.10, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.10, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.97, evRange: -3.00, rangeWeight: 0.29, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.54, raise: -4.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.97, evRange: -3.00, rangeWeight: 0.29, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.54, raise: -4.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 7.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 3.37, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.47, evRange: -3.01, rangeWeight: 0.09, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.62, raise: -3.15} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.47, evRange: -3.01, rangeWeight: 0.09, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.62, raise: -3.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.16, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.16, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.52, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.58, evRange: 4.43, rangeWeight: 0.13, freq: {check: 0.84, bet: 0.16}, ev: {check: 4.70, bet: 3.97}, evA: {check: 4.44, bet: 4.38} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.02, evRange: -1.61, rangeWeight: 0.38, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.03, bet: 0.09}, evA: {check: -1.61, bet: -1.62} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.02, evRange: -1.61, rangeWeight: 0.38, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.03, bet: 0.09}, evA: {check: -1.61, bet: -1.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.58, evRange: -2.90, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.63, bet: -1.82}, evA: {check: -2.89, bet: -2.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.58, evRange: -2.90, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.63, bet: -1.82}, evA: {check: -2.89, bet: -2.95} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.30, evRange: 4.99, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.30}, evA: {check: 2.65, bet: 4.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.49, evRange: -0.02, rangeWeight: 0.26, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.15}, evA: {check: -0.49, bet: -0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.49, evRange: -0.02, rangeWeight: 0.26, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.15}, evA: {check: -0.49, bet: -0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.33, evRange: -2.81, rangeWeight: 0.09, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -2.39}, evA: {check: -2.84, bet: -2.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.33, evRange: -2.81, rangeWeight: 0.09, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -2.39}, evA: {check: -2.84, bet: -2.80} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 3.15, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.36, evRange: -2.99, rangeWeight: 0.39, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -4.54, raise: -4.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.36, evRange: -2.99, rangeWeight: 0.39, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -4.54, raise: -4.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.75, evRange: -3.04, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.57, raise: -3.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.75, evRange: -3.04, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.57, raise: -3.90} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.55, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, rangeWeight: 0.13, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.51} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, rangeWeight: 0.13, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 7.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 3.37, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.83, evRange: -2.92, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.46, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.42, raise: -4.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.83, evRange: -2.92, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.46, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.42, raise: -4.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.92, evRange: -3.00, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.57, raise: -3.23} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.92, evRange: -3.00, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.57, raise: -3.23} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.52, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.09} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.91} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.91} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 1.94, rangeWeight: 0.38, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.06}, evA: {check: 1.94, bet: 1.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 1.94, rangeWeight: 0.38, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.06}, evA: {check: 1.94, bet: 1.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.65, rangeWeight: 0.10, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.39}, evA: {check: -3.65, bet: -3.81} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.65, rangeWeight: 0.10, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.39}, evA: {check: -3.65, bet: -3.81} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.82, evRange: 6.96, rangeWeight: 0.04, freq: {check: 0.06, bet: 0.94}, ev: {check: 6.27, bet: 6.85}, evA: {check: 6.37, bet: 7.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.62, evRange: 1.79, rangeWeight: 0.25, freq: {check: 0.68, bet: 0.32}, ev: {check: 1.25, bet: -0.70}, evA: {check: 1.77, bet: 1.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.62, evRange: 1.79, rangeWeight: 0.25, freq: {check: 0.68, bet: 0.32}, ev: {check: 1.25, bet: -0.70}, evA: {check: 1.77, bet: 1.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.38, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.51}, evA: {check: -4.38, bet: -7.19} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.38, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.51}, evA: {check: -4.38, bet: -7.19} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.10, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99}, evA: {check: 4.99, bet: 8.10} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: -4.30, rangeWeight: 0.39, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.44}, evA: {fold: -5.00, call: -5.81, raise: -6.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: -4.30, rangeWeight: 0.39, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.44}, evA: {fold: -5.00, call: -5.81, raise: -6.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.16}, evA: {fold: -5.00, call: -9.00, raise: -12.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.16}, evA: {fold: -5.00, call: -9.00, raise: -12.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.01, evRange: 12.84, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.01}, evA: {fold: -5.00, call: 6.18, raise: 12.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -10.31, rangeWeight: 0.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.53} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -10.31, rangeWeight: 0.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.53} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.04, evRange: -9.19, rangeWeight: 0.00, freq: {fold: 0.95, call: 0.05}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.04, evRange: -9.19, rangeWeight: 0.00, freq: {fold: 0.95, call: 0.05}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 4.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.07, evRange: -5.02, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.77, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.47, raise: -5.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.07, evRange: -5.02, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.77, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.47, raise: -5.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.93, evRange: -5.00, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.81}, evA: {fold: -5.00, call: -8.95, raise: -5.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.93, evRange: -5.00, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.81}, evA: {fold: -5.00, call: -8.95, raise: -5.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.78, evRange: 10.53, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.78}, evA: {fold: -5.00, call: 5.30, raise: 10.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.19, evRange: -9.05, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.19, evRange: -9.05, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.81} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.76} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.76} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 4.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.30, evRange: -1.88, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.86}, evA: {check: -1.87, bet: -2.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.30, evRange: -1.88, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.86}, evA: {check: -1.87, bet: -2.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.91, evRange: 7.63, rangeWeight: 0.11, freq: {check: 0.82, bet: 0.18}, ev: {check: 6.78, bet: 7.46}, evA: {check: 7.64, bet: 7.60} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.88, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.87, bet: -4.20}, evA: {check: -4.60, bet: -5.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.88, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.87, bet: -4.20}, evA: {check: -4.60, bet: -5.17} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.42, evRange: -0.12, rangeWeight: 0.29, freq: {check: 0.41, bet: 0.59}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.77, bet: -0.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.42, evRange: -0.12, rangeWeight: 0.29, freq: {check: 0.41, bet: 0.59}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.77, bet: -0.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.75, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01}, evA: {check: 4.54, bet: 7.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.80, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.81, bet: -4.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.80, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.81, bet: -4.92} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.11, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.30, call: 0.68, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.56}, evA: {fold: -5.00, call: -6.45, raise: -5.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.11, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.30, call: 0.68, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.56}, evA: {fold: -5.00, call: -6.45, raise: -5.19} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.84, evRange: 10.63, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.84}, evA: {fold: -5.00, call: 5.30, raise: 10.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.46, evRange: -5.06, rangeWeight: 0.04, freq: {fold: 0.86, call: 0.00, raise: 0.14}, ev: {fold: -5.00, call: -6.75, raise: -1.10}, evA: {fold: -5.00, call: -8.95, raise: -5.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.46, evRange: -5.06, rangeWeight: 0.04, freq: {fold: 0.86, call: 0.00, raise: 0.14}, ev: {fold: -5.00, call: -6.75, raise: -1.10}, evA: {fold: -5.00, call: -8.95, raise: -5.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.88, evRange: -9.12, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.95} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.88, evRange: -9.12, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.95} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 3.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.66} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.09, evRange: -5.05, rangeWeight: 0.29, freq: {fold: 0.32, call: 0.67, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.03}, evA: {fold: -5.00, call: -6.62, raise: -5.86} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.09, evRange: -5.05, rangeWeight: 0.29, freq: {fold: 0.32, call: 0.67, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.03}, evA: {fold: -5.00, call: -6.62, raise: -5.86} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.42, evRange: 9.71, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.42}, evA: {fold: -5.00, call: 4.32, raise: 9.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -4.95, rangeWeight: 0.09, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 1.19}, evA: {fold: -5.00, call: -8.78, raise: -4.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -4.95, rangeWeight: 0.09, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 1.19}, evA: {fold: -5.00, call: -8.78, raise: -4.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.43, evRange: -8.96, rangeWeight: 0.20, freq: {fold: 0.79, call: 0.21}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.43, evRange: -8.96, rangeWeight: 0.20, freq: {fold: 0.79, call: 0.21}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.71} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.52, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 2.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.40} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.34, evRange: 6.25, rangeWeight: 0.58, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.21, bet: 6.34}, evA: {check: 5.94, bet: 6.26} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.13, evRange: -1.92, rangeWeight: 0.15, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.26, bet: -0.18}, evA: {check: -2.11, bet: -1.89} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.13, evRange: -1.92, rangeWeight: 0.15, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.26, bet: -0.18}, evA: {check: -2.11, bet: -1.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.21, evRange: -2.27, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.30, bet: -1.21}, evA: {check: -4.76, bet: -2.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.21, evRange: -2.27, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.30, bet: -1.21}, evA: {check: -4.76, bet: -2.27} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.33, evRange: 7.48, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.33}, evA: {check: 4.07, bet: 7.48} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.15, evRange: -1.55, rangeWeight: 0.26, freq: {check: 0.84, bet: 0.16}, ev: {check: 1.25, bet: 0.65}, evA: {check: -2.38, bet: -1.51} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.15, evRange: -1.55, rangeWeight: 0.26, freq: {check: 0.84, bet: 0.16}, ev: {check: 1.25, bet: 0.65}, evA: {check: -2.38, bet: -1.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.38, evRange: -4.85, rangeWeight: 0.09, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -2.92}, evA: {check: -5.00, bet: -4.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.38, evRange: -4.85, rangeWeight: 0.09, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -2.92}, evA: {check: -5.00, bet: -4.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.19, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.00}, evA: {fold: -5.00, call: 3.14, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.50, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.38, call: 0.62, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.54, raise: -6.74} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.50, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.38, call: 0.62, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.54, raise: -6.74} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.89, evRange: -5.07, rangeWeight: 0.00, freq: {fold: 0.97, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.52, raise: -6.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.89, evRange: -5.07, rangeWeight: 0.00, freq: {fold: 0.97, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.52, raise: -6.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.65, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 0.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.99} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.00}, evA: {fold: -5.00, call: 3.64, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.63, raise: -6.28} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.63, raise: -6.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.40, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.49}, evA: {fold: -5.00, call: -8.65, raise: -4.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.40, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.49}, evA: {fold: -5.00, call: -8.65, raise: -4.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.60, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 1.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.65} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.64, raise: 0.36}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.64, raise: 0.36}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.26, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.24, bet: -0.46}, evA: {check: 1.61, bet: 1.60} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.26, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.24, bet: -0.46}, evA: {check: 1.61, bet: 1.60} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -1.81, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.35}, evA: {check: -1.81, bet: -1.85} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -1.81, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.35}, evA: {check: -1.81, bet: -1.85} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.64, evRange: 4.33, rangeWeight: 0.03, freq: {check: 0.07, bet: 0.93}, ev: {check: 4.62, bet: 4.65}, evA: {check: 4.28, bet: 4.34} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: 2.01, rangeWeight: 0.19, freq: {check: 0.51, bet: 0.49}, ev: {check: 0.75, bet: -0.90}, evA: {check: 2.00, bet: 2.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: 2.01, rangeWeight: 0.19, freq: {check: 0.51, bet: 0.49}, ev: {check: 0.75, bet: -0.90}, evA: {check: 2.00, bet: 2.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -1.98, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.40}, evA: {check: -1.98, bet: -3.45} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -1.98, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.40}, evA: {check: -1.98, bet: -3.45} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.98, evRange: 4.94, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.98}, evA: {check: 2.99, bet: 4.94} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.64, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.02, call: 0.97, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.36}, evA: {fold: -3.00, call: -3.89, raise: -2.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.64, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.02, call: 0.97, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.36}, evA: {fold: -3.00, call: -3.89, raise: -2.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.25, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -3.43}, evA: {fold: -3.00, call: -7.00, raise: -6.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.25, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -3.43}, evA: {fold: -3.00, call: -7.00, raise: -6.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.33, evRange: 9.63, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.33}, evA: {fold: -3.00, call: 5.33, raise: 9.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.59, evRange: -5.69, rangeWeight: 0.38, freq: {fold: 0.34, call: 0.66}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.89} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.59, evRange: -5.69, rangeWeight: 0.38, freq: {fold: 0.34, call: 0.66}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.89} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.62, evRange: -2.98, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.74, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 1.95}, evA: {fold: -3.00, call: -4.36, raise: -3.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.62, evRange: -2.98, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.74, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 1.95}, evA: {fold: -3.00, call: -4.36, raise: -3.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.95, evRange: -3.01, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.35}, evA: {fold: -3.00, call: -6.80, raise: -3.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.95, evRange: -3.01, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.35}, evA: {fold: -3.00, call: -6.80, raise: -3.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.63, evRange: 8.11, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.63}, evA: {fold: -3.00, call: 4.31, raise: 8.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.91, evRange: -6.99, rangeWeight: 0.27, freq: {fold: 0.68, call: 0.32}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.91, evRange: -6.99, rangeWeight: 0.27, freq: {fold: 0.68, call: 0.32}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.38, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 2.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: -2.04, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.24, bet: -0.72}, evA: {check: -2.04, bet: -4.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: -2.04, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.24, bet: -0.72}, evA: {check: -2.04, bet: -4.08} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.20, evRange: 3.94, rangeWeight: 0.30, freq: {check: 0.43, bet: 0.57}, ev: {check: 4.99, bet: 3.61}, evA: {check: 3.94, bet: 3.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.03, evRange: -2.57, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.99, bet: -1.03}, evA: {check: -3.02, bet: -2.57} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.03, evRange: -2.57, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.99, bet: -1.03}, evA: {check: -3.02, bet: -2.57} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.75, evRange: -0.88, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.07}, evA: {check: -1.36, bet: -0.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.75, evRange: -0.88, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.07}, evA: {check: -1.36, bet: -0.99} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.05, evRange: 5.01, rangeWeight: 0.37, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.05}, evA: {check: 2.48, bet: 5.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.04, evRange: -2.88, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -2.04}, evA: {check: -3.00, bet: -2.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.04, evRange: -2.88, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -2.04}, evA: {check: -3.00, bet: -2.88} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.61, evRange: -3.01, rangeWeight: 0.41, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.67, raise: -5.85} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.61, evRange: -3.01, rangeWeight: 0.41, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.67, raise: -5.85} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 7.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 2.02, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -3.06, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.37, raise: -7.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -3.06, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.37, raise: -7.92} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.71, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.55, evRange: -3.01, rangeWeight: 0.24, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.76}, evA: {fold: -3.00, call: -4.68, raise: -5.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.55, evRange: -3.01, rangeWeight: 0.24, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.76}, evA: {fold: -3.00, call: -4.68, raise: -5.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.98, evRange: 7.00, rangeWeight: 0.37, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.98}, evA: {fold: -3.00, call: 1.99, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.42}, evA: {fold: -3.00, call: -6.37, raise: -8.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.42}, evA: {fold: -3.00, call: -6.37, raise: -8.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.67, evRange: -10.97, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.67, evRange: -10.97, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.72, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.03, evRange: 4.54, rangeWeight: 0.32, freq: {check: 0.10, bet: 0.90}, ev: {check: 4.51, bet: 5.09}, evA: {check: 4.50, bet: 4.55} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.55, evRange: -1.36, rangeWeight: 0.31, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.03, bet: -1.11}, evA: {check: -1.36, bet: -1.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.55, evRange: -1.36, rangeWeight: 0.31, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.03, bet: -1.11}, evA: {check: -1.36, bet: -1.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.00, evRange: -1.78, rangeWeight: 0.04, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.83, bet: -2.00}, evA: {check: -1.97, bet: -1.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.00, evRange: -1.78, rangeWeight: 0.04, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.83, bet: -2.00}, evA: {check: -1.97, bet: -1.78} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.94, evRange: 5.53, rangeWeight: 0.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.94}, evA: {check: 2.73, bet: 5.53} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.22, evRange: -0.48, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.56}, evA: {check: -0.83, bet: -0.47} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.22, evRange: -0.48, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.56}, evA: {check: -0.83, bet: -0.47} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.14, evRange: -3.00, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.60}, evA: {check: -3.00, bet: -3.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.14, evRange: -3.00, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.60}, evA: {check: -3.00, bet: -3.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.02, evRange: 7.04, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02}, evA: {fold: -3.00, call: 4.04, raise: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.29, evRange: -3.00, rangeWeight: 0.45, freq: {fold: 0.44, call: 0.49, raise: 0.07}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -4.43, raise: -3.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.29, evRange: -3.00, rangeWeight: 0.45, freq: {fold: 0.44, call: 0.49, raise: 0.07}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -4.43, raise: -3.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.96, evRange: -1.26, rangeWeight: 0.00, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -3.00, call: -5.25, raise: 2.40}, evA: {fold: -3.00, call: -6.75, raise: -1.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.96, evRange: -1.26, rangeWeight: 0.00, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -3.00, call: -5.25, raise: 2.40}, evA: {fold: -3.00, call: -6.75, raise: -1.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 4.68} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.90, evRange: -7.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.16} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.90, evRange: -7.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.39, evRange: 7.63, rangeWeight: 0.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.39}, evA: {fold: -3.00, call: 3.94, raise: 7.63} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.49, evRange: -3.00, rangeWeight: 0.33, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.16}, evA: {fold: -3.00, call: -4.44, raise: -3.60} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.49, evRange: -3.00, rangeWeight: 0.33, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.16}, evA: {fold: -3.00, call: -4.44, raise: -3.60} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.64, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.75}, evA: {fold: -3.00, call: -6.73, raise: -3.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.64, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.75}, evA: {fold: -3.00, call: -6.73, raise: -3.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.44, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 2.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.11, evRange: -7.00, rangeWeight: 0.23, freq: {fold: 0.81, call: 0.19}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.11, evRange: -7.00, rangeWeight: 0.23, freq: {fold: 0.81, call: 0.19}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.19, evRange: 2.28, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.25, bet: -0.32}, evA: {check: 2.28, bet: 2.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.19, evRange: 2.28, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.25, bet: -0.32}, evA: {check: 2.28, bet: 2.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.86, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.18}, evA: {check: -3.86, bet: -5.24} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.86, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.18}, evA: {check: -3.86, bet: -5.24} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.94, evRange: 7.40, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.05, bet: 6.95}, evA: {check: 6.30, bet: 7.41} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.73, evRange: 3.43, rangeWeight: 0.30, freq: {check: 0.74, bet: 0.26}, ev: {check: 1.25, bet: -0.75}, evA: {check: 3.42, bet: 3.42} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.73, evRange: 3.43, rangeWeight: 0.30, freq: {check: 0.74, bet: 0.26}, ev: {check: 1.25, bet: -0.75}, evA: {check: 3.42, bet: 3.42} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.24, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -6.00}, evA: {check: -3.24, bet: -4.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.24, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -6.00}, evA: {check: -3.24, bet: -4.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 6.91, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 5.00, bet: 6.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: -2.40, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.25}, evA: {fold: -5.00, call: -3.79, raise: -3.47} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: -2.40, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.25}, evA: {fold: -5.00, call: -3.79, raise: -3.47} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -8.62}, evA: {fold: -5.00, call: -9.00, raise: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -8.62}, evA: {fold: -5.00, call: -9.00, raise: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 12.00, evRange: 13.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 12.00}, evA: {fold: -5.00, call: 7.62, raise: 13.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.25, evRange: -11.55, rangeWeight: 0.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.25, evRange: -11.55, rangeWeight: 0.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.15, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 2.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.83, evRange: -4.63, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.91, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.27}, evA: {fold: -5.00, call: -6.08, raise: -4.95} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.83, evRange: -4.63, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.91, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.27}, evA: {fold: -5.00, call: -6.08, raise: -4.95} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -3.47}, evA: {fold: -5.00, call: -9.00, raise: -7.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -3.47}, evA: {fold: -5.00, call: -9.00, raise: -7.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.39, evRange: 11.47, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.39}, evA: {fold: -5.00, call: 5.91, raise: 11.47} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.44, evRange: -9.45, rangeWeight: 0.33, freq: {fold: 0.38, call: 0.62}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.44, evRange: -9.45, rangeWeight: 0.33, freq: {fold: 0.38, call: 0.62}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.06, evRange: -9.32, rangeWeight: 0.00, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.99} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.06, evRange: -9.32, rangeWeight: 0.00, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.99} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.34, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.18} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.54, evRange: -2.55, rangeWeight: 0.31, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.30, bet: -0.92}, evA: {check: -2.55, bet: -2.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.54, evRange: -2.55, rangeWeight: 0.31, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.30, bet: -0.92}, evA: {check: -2.55, bet: -2.54} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.04, evRange: 7.89, rangeWeight: 0.30, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.52, bet: 8.09}, evA: {check: 7.74, bet: 7.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.83, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.89, bet: 0.11}, ev: {check: -3.76, bet: -4.37}, evA: {check: -4.83, bet: -4.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.83, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.89, bet: 0.11}, ev: {check: -3.76, bet: -4.37}, evA: {check: -4.83, bet: -4.90} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.57, evRange: 1.57, rangeWeight: 0.36, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.09}, evA: {check: 1.23, bet: 1.56} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.57, evRange: 1.57, rangeWeight: 0.36, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.09}, evA: {check: 1.23, bet: 1.56} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.79, evRange: 7.71, rangeWeight: 0.22, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.79}, evA: {check: 4.83, bet: 7.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.35, rangeWeight: 0.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.56}, evA: {check: -4.36, bet: -5.58} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.35, rangeWeight: 0.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.56}, evA: {check: -4.36, bet: -5.58} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.27, evRange: -4.93, rangeWeight: 0.37, freq: {fold: 0.14, call: 0.84, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.45}, evA: {fold: -5.00, call: -6.36, raise: -4.97} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.27, evRange: -4.93, rangeWeight: 0.37, freq: {fold: 0.14, call: 0.84, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.45}, evA: {fold: -5.00, call: -6.36, raise: -4.97} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.96, evRange: 10.89, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.96}, evA: {fold: -5.00, call: 5.60, raise: 10.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.12, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -1.71}, evA: {fold: -5.00, call: -9.00, raise: -5.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.12, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -1.71}, evA: {fold: -5.00, call: -9.00, raise: -5.78} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.21, evRange: -9.39, rangeWeight: 0.31, freq: {fold: 0.53, call: 0.47}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.21, evRange: -9.39, rangeWeight: 0.31, freq: {fold: 0.53, call: 0.47}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.20} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.38, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 4.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.40, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 0.37, call: 0.55, raise: 0.08}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.45, raise: -4.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.40, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 0.37, call: 0.55, raise: 0.08}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.45, raise: -4.99} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.78, evRange: 10.53, rangeWeight: 0.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.78}, evA: {fold: -5.00, call: 5.38, raise: 10.53} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.25, evRange: -4.99, rangeWeight: 0.03, freq: {fold: 0.58, call: 0.00, raise: 0.42}, ev: {fold: -5.00, call: -6.75, raise: -0.79}, evA: {fold: -5.00, call: -8.97, raise: -4.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.25, evRange: -4.99, rangeWeight: 0.03, freq: {fold: 0.58, call: 0.00, raise: 0.42}, ev: {fold: -5.00, call: -6.75, raise: -0.79}, evA: {fold: -5.00, call: -8.97, raise: -4.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.22, evRange: -9.00, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.22, evRange: -9.00, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.76} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.40, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 3.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.47, evRange: 7.03, rangeWeight: 0.32, freq: {check: 0.45, bet: 0.55}, ev: {check: 7.87, bet: 7.14}, evA: {check: 7.03, bet: 7.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -4.02, rangeWeight: 0.31, freq: {check: 0.87, bet: 0.13}, ev: {check: -2.28, bet: -1.13}, evA: {check: -4.02, bet: -4.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -4.02, rangeWeight: 0.31, freq: {check: 0.87, bet: 0.13}, ev: {check: -2.28, bet: -1.13}, evA: {check: -4.02, bet: -4.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.49, evRange: -4.89, rangeWeight: 0.04, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.01, bet: -2.98}, evA: {check: -4.92, bet: -4.86} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.49, evRange: -4.89, rangeWeight: 0.04, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.01, bet: -2.98}, evA: {check: -4.92, bet: -4.86} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.39, evRange: 6.50, rangeWeight: 0.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.39}, evA: {check: 3.99, bet: 6.50} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.77, evRange: -1.20, rangeWeight: 0.25, freq: {check: 0.58, bet: 0.42}, ev: {check: 1.25, bet: -3.55}, evA: {check: -2.13, bet: -1.20} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.77, evRange: -1.20, rangeWeight: 0.25, freq: {check: 0.58, bet: 0.42}, ev: {check: 1.25, bet: -3.55}, evA: {check: -2.13, bet: -1.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.07, evRange: -1.43, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.07}, evA: {check: -4.89, bet: -1.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.07, evRange: -1.43, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.07}, evA: {check: -4.89, bet: -1.43} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.06, evRange: 9.09, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.06}, evA: {fold: -5.00, call: 3.73, raise: 9.09} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.78, evRange: -5.01, rangeWeight: 0.37, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.43}, evA: {fold: -5.00, call: -6.65, raise: -6.22} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.78, evRange: -5.01, rangeWeight: 0.37, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.43}, evA: {fold: -5.00, call: -6.65, raise: -6.22} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 0.68, evRange: -4.89, rangeWeight: 0.03, freq: {fold: 0.30, call: 0.00, raise: 0.70}, ev: {fold: -5.00, call: -6.75, raise: 3.17}, evA: {fold: -5.00, call: -8.67, raise: -4.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 0.68, evRange: -4.89, rangeWeight: 0.03, freq: {fold: 0.30, call: 0.00, raise: 0.70}, ev: {fold: -5.00, call: -6.75, raise: 3.17}, evA: {fold: -5.00, call: -8.67, raise: -4.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 1.92} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.63, evRange: -9.00, rangeWeight: 0.15, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.92} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.63, evRange: -9.00, rangeWeight: 0.15, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 0.15, raise: 0.85}, ev: {fold: -5.00, call: 9.00, raise: 9.00}, evA: {fold: -5.00, call: 3.62, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.40, evRange: -5.00, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.65, raise: -6.32} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.40, evRange: -5.00, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.65, raise: -6.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.56, evRange: -5.00, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.65, raise: -5.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.56, evRange: -5.00, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.65, raise: -5.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.60, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 0.79} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    },
  q: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.24, bet: 0.76}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.24, bet: 0.76}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.26, bet: 0.74}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.26, bet: 0.74}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.38, evRange: 0.65, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.38, evRange: 0.65, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.32, evRange: 0.56, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.66} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.32, evRange: 0.56, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.66} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.42} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.42} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.39, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.53}, evA: {check: -0.39, bet: -5.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.39, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.53}, evA: {check: -0.39, bet: -5.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.82, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.16}, evA: {check: -0.82, bet: -4.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.82, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.16}, evA: {check: -0.82, bet: -4.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.01, evRange: 1.00, rangeWeight: 0.48, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.01, bet: 1.51}, evA: {check: 1.00, bet: 1.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.25, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.00}, evA: {check: -0.51, bet: -3.38} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.25, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.00}, evA: {check: -0.51, bet: -3.38} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.17}, evA: {check: -0.90, bet: -3.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.17}, evA: {check: -0.90, bet: -3.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, rangeWeight: 0.70, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 0.52, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 2.21}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 2.21}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.83}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.83}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.33, evRange: 7.66, rangeWeight: 0.48, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.33}, evA: {fold: -1.00, call: 0.00, raise: 7.66} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -6.17, evRange: -7.67, rangeWeight: 0.00, freq: {fold: 0.33, call: 0.67}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -6.17, evRange: -7.67, rangeWeight: 0.00, freq: {fold: 0.33, call: 0.67}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 1.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.59, evRange: -1.90, rangeWeight: 0.00, freq: {fold: 0.80, call: 0.15, raise: 0.06}, ev: {fold: -1.00, call: 1.25, raise: 0.40}, evA: {fold: -1.00, call: -4.72, raise: -8.09} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.59, evRange: -1.90, rangeWeight: 0.00, freq: {fold: 0.80, call: 0.15, raise: 0.06}, ev: {fold: -1.00, call: 1.25, raise: 0.40}, evA: {fold: -1.00, call: -4.72, raise: -8.09} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.40}, evA: {fold: -1.00, call: -4.96, raise: -8.70} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.40}, evA: {fold: -1.00, call: -4.96, raise: -8.70} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.06, evRange: 7.82, rangeWeight: 0.70, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.06}, evA: {fold: -1.00, call: 0.56, raise: 7.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.09, evRange: -8.91, rangeWeight: 0.04, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.09, evRange: -8.91, rangeWeight: 0.04, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.09, evRange: -5.22, rangeWeight: 0.02, freq: {fold: 0.95, call: 0.05}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.09, evRange: -5.22, rangeWeight: 0.02, freq: {fold: 0.95, call: 0.05}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.94, evRange: 8.94, rangeWeight: 0.89, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.60}, evA: {check: 0.67, bet: 0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.60}, evA: {check: 0.67, bet: 0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.13, evRange: 1.28, rangeWeight: 0.10, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.14, bet: 3.09}, evA: {check: 1.28, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -0.24, rangeWeight: 0.36, freq: {check: 0.81, bet: 0.19}, ev: {check: -0.77, bet: -3.47}, evA: {check: -0.24, bet: -0.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -0.24, rangeWeight: 0.36, freq: {check: 0.81, bet: 0.19}, ev: {check: -0.77, bet: -3.47}, evA: {check: -0.24, bet: -0.25} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: 0.73, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.11}, evA: {check: 0.62, bet: 0.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: 0.73, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.11}, evA: {check: 0.62, bet: 0.40} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.85, evRange: 1.41, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.85}, evA: {check: 0.94, bet: 1.41} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.45, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.77}, evA: {check: -0.50, bet: -0.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.45, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.77}, evA: {check: -0.50, bet: -0.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: -1.05, rangeWeight: 0.11, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.88}, evA: {fold: -1.00, call: -2.59, raise: -3.56} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: -1.05, rangeWeight: 0.11, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.88}, evA: {fold: -1.00, call: -2.59, raise: -3.56} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.00, evRange: 5.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.00}, evA: {fold: -1.00, call: 1.94, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.00}, evA: {fold: -1.00, call: -4.31, raise: -5.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.00}, evA: {fold: -1.00, call: -4.31, raise: -5.62} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.61, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: 2.14, rangeWeight: 0.00, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 0.66, raise: 1.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: 2.14, rangeWeight: 0.00, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 0.66, raise: 1.12} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 5.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 3.61, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.16, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.03, raise: -1.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.16, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.03, raise: -1.08} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: -4.47, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: -4.47, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.41} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.28, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.44, evRange: 1.51, rangeWeight: 0.09, freq: {check: 0.01, bet: 0.99}, ev: {check: 1.14, bet: 2.44}, evA: {check: 1.07, bet: 1.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.18, evRange: 0.93, rangeWeight: 0.10, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.73, bet: -1.68}, evA: {check: 0.93, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.18, evRange: 0.93, rangeWeight: 0.10, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.73, bet: -1.68}, evA: {check: 0.93, bet: 0.93} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.66}, evA: {check: -0.31, bet: -0.31} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.66}, evA: {check: -0.31, bet: -0.31} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.56, rangeWeight: 0.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00}, evA: {check: 1.00, bet: 1.56} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.19, evRange: 0.92, rangeWeight: 0.09, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -1.75}, evA: {check: 0.92, bet: 0.92} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.19, evRange: 0.92, rangeWeight: 0.09, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -1.75}, evA: {check: 0.92, bet: 0.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.25, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.50}, evA: {check: -0.25, bet: -0.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.25, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.50}, evA: {check: -0.25, bet: -0.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 6.83, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.99, raise: 6.83} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 3.48, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 3.46, raise: 3.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 3.48, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 3.46, raise: 3.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.43, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.15, raise: -3.81} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.43, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.15, raise: -3.81} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 3.37} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -3.42, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.64} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -3.42, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.27, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.27, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 7.53, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 3.11, raise: 7.53} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.62, evRange: -0.95, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: -2.23, raise: -2.82} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.62, evRange: -0.95, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: -2.23, raise: -2.82} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -4.55, raise: -7.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -4.55, raise: -7.19} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.38, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 3.73} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -4.72, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.45} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -4.72, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.45} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.60} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.60} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.31, raise: 0.69}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.31, raise: 0.69}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.95, evRange: -0.95, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.95, evRange: -0.95, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.70, evRange: 2.09, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.70, bet: -1.05}, evA: {check: 2.09, bet: 0.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.70, evRange: 2.09, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.70, bet: -1.05}, evA: {check: 2.09, bet: 0.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.63, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.61, bet: -3.16}, evA: {check: -2.58, bet: -2.59} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.63, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.61, bet: -3.16}, evA: {check: -2.58, bet: -2.59} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.46, evRange: 4.56, rangeWeight: 0.05, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.46, bet: 4.46}, evA: {check: 4.41, bet: 4.58} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.52, evRange: 2.49, rangeWeight: 0.25, freq: {check: 0.88, bet: 0.12}, ev: {check: 0.75, bet: -1.24}, evA: {check: 2.45, bet: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.52, evRange: 2.49, rangeWeight: 0.25, freq: {check: 0.88, bet: 0.12}, ev: {check: 0.75, bet: -1.24}, evA: {check: 2.45, bet: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.34, evRange: -1.28, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -4.54}, evA: {check: -1.30, bet: -1.27} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.34, evRange: -1.28, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -4.54}, evA: {check: -1.30, bet: -1.27} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.01, evRange: 4.08, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.01}, evA: {check: 2.98, bet: 4.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 2.95, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.82}, evA: {fold: -3.00, call: 1.01, raise: 2.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 2.95, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.82}, evA: {fold: -3.00, call: 1.01, raise: 2.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.01, evRange: -3.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -4.70, raise: -3.31} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.01, evRange: -3.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -4.70, raise: -3.31} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.07, evRange: 8.01, rangeWeight: 0.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.07}, evA: {fold: -3.00, call: 5.46, raise: 8.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -6.37, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -6.37, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.41} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.04, evRange: -7.10, rangeWeight: 0.30, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.31} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.04, evRange: -7.10, rangeWeight: 0.30, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.31} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 2.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: -2.79, rangeWeight: 0.25, freq: {fold: 0.27, call: 0.73, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.75}, evA: {fold: -3.00, call: -4.47, raise: -5.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: -2.79, rangeWeight: 0.25, freq: {fold: 0.27, call: 0.73, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.75}, evA: {fold: -3.00, call: -4.47, raise: -5.49} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.50}, evA: {fold: -3.00, call: -6.31, raise: -7.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.50}, evA: {fold: -3.00, call: -6.31, raise: -7.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 7.01, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 2.14, raise: 7.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.69, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -1.24, rangeWeight: 0.17, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.06, bet: -0.30}, evA: {check: -1.25, bet: -1.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -1.24, rangeWeight: 0.17, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.06, bet: -0.30}, evA: {check: -1.25, bet: -1.23} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.24, evRange: 4.49, rangeWeight: 0.50, freq: {check: 0.02, bet: 0.98}, ev: {check: 4.37, bet: 4.24}, evA: {check: 4.04, bet: 4.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.89, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.61, bet: -1.88}, evA: {check: -2.87, bet: -2.51} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.89, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.61, bet: -1.88}, evA: {check: -2.87, bet: -2.51} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.59, evRange: -0.73, rangeWeight: 0.29, freq: {check: 0.81, bet: 0.19}, ev: {check: 0.75, bet: -0.07}, evA: {check: -1.18, bet: -0.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.59, evRange: -0.73, rangeWeight: 0.29, freq: {check: 0.81, bet: 0.19}, ev: {check: 0.75, bet: -0.07}, evA: {check: -1.18, bet: -0.98} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.27, evRange: 5.23, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.27}, evA: {check: 2.49, bet: 5.23} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.36, evRange: -3.18, rangeWeight: 0.09, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.25, bet: -2.47}, evA: {check: -2.95, bet: -3.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.36, evRange: -3.18, rangeWeight: 0.09, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.25, bet: -2.47}, evA: {check: -2.95, bet: -3.42} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -2.96, rangeWeight: 0.40, freq: {fold: 0.42, call: 0.58, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.52, raise: -4.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -2.96, rangeWeight: 0.40, freq: {fold: 0.42, call: 0.58, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.52, raise: -4.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 3.10, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.85, evRange: -3.03, rangeWeight: 0.02, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.54, raise: -4.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.85, evRange: -3.03, rangeWeight: 0.02, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.54, raise: -4.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.10, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.10, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.97, evRange: -3.00, rangeWeight: 0.29, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.54, raise: -4.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.97, evRange: -3.00, rangeWeight: 0.29, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.54, raise: -4.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 7.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 3.37, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.47, evRange: -3.01, rangeWeight: 0.09, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.62, raise: -3.15} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.47, evRange: -3.01, rangeWeight: 0.09, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.62, raise: -3.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.16, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.16, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.52, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.58, evRange: 4.43, rangeWeight: 0.13, freq: {check: 0.84, bet: 0.16}, ev: {check: 4.70, bet: 3.97}, evA: {check: 4.44, bet: 4.38} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.02, evRange: -1.61, rangeWeight: 0.38, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.03, bet: 0.09}, evA: {check: -1.61, bet: -1.62} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.02, evRange: -1.61, rangeWeight: 0.38, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.03, bet: 0.09}, evA: {check: -1.61, bet: -1.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.58, evRange: -2.90, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.63, bet: -1.82}, evA: {check: -2.89, bet: -2.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.58, evRange: -2.90, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.63, bet: -1.82}, evA: {check: -2.89, bet: -2.95} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.30, evRange: 4.99, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.30}, evA: {check: 2.65, bet: 4.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.49, evRange: -0.02, rangeWeight: 0.26, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.15}, evA: {check: -0.49, bet: -0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.49, evRange: -0.02, rangeWeight: 0.26, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.15}, evA: {check: -0.49, bet: -0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.33, evRange: -2.81, rangeWeight: 0.09, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -2.39}, evA: {check: -2.84, bet: -2.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.33, evRange: -2.81, rangeWeight: 0.09, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -2.39}, evA: {check: -2.84, bet: -2.80} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 3.15, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.36, evRange: -2.99, rangeWeight: 0.39, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -4.54, raise: -4.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.36, evRange: -2.99, rangeWeight: 0.39, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -4.54, raise: -4.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.75, evRange: -3.04, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.57, raise: -3.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.75, evRange: -3.04, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.57, raise: -3.90} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.55, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, rangeWeight: 0.13, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.51} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, rangeWeight: 0.13, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 7.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 3.37, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.83, evRange: -2.92, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.46, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.42, raise: -4.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.83, evRange: -2.92, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.46, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.42, raise: -4.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.92, evRange: -3.00, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.57, raise: -3.23} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.92, evRange: -3.00, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.57, raise: -3.23} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.52, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.09} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.91} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.91} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 1.94, rangeWeight: 0.38, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.06}, evA: {check: 1.94, bet: 1.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 1.94, rangeWeight: 0.38, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.06}, evA: {check: 1.94, bet: 1.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.65, rangeWeight: 0.10, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.39}, evA: {check: -3.65, bet: -3.81} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.65, rangeWeight: 0.10, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.39}, evA: {check: -3.65, bet: -3.81} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.82, evRange: 6.96, rangeWeight: 0.04, freq: {check: 0.06, bet: 0.94}, ev: {check: 6.27, bet: 6.85}, evA: {check: 6.37, bet: 7.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.62, evRange: 1.79, rangeWeight: 0.25, freq: {check: 0.68, bet: 0.32}, ev: {check: 1.25, bet: -0.70}, evA: {check: 1.77, bet: 1.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.62, evRange: 1.79, rangeWeight: 0.25, freq: {check: 0.68, bet: 0.32}, ev: {check: 1.25, bet: -0.70}, evA: {check: 1.77, bet: 1.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.38, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.51}, evA: {check: -4.38, bet: -7.19} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.38, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.51}, evA: {check: -4.38, bet: -7.19} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.10, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99}, evA: {check: 4.99, bet: 8.10} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: -4.30, rangeWeight: 0.39, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.44}, evA: {fold: -5.00, call: -5.81, raise: -6.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: -4.30, rangeWeight: 0.39, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.44}, evA: {fold: -5.00, call: -5.81, raise: -6.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.16}, evA: {fold: -5.00, call: -9.00, raise: -12.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.16}, evA: {fold: -5.00, call: -9.00, raise: -12.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.01, evRange: 12.84, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.01}, evA: {fold: -5.00, call: 6.18, raise: 12.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -10.31, rangeWeight: 0.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.53} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -10.31, rangeWeight: 0.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.53} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.04, evRange: -9.19, rangeWeight: 0.00, freq: {fold: 0.95, call: 0.05}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.04, evRange: -9.19, rangeWeight: 0.00, freq: {fold: 0.95, call: 0.05}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 4.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.07, evRange: -5.02, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.77, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.47, raise: -5.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.07, evRange: -5.02, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.77, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.47, raise: -5.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.93, evRange: -5.00, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.81}, evA: {fold: -5.00, call: -8.95, raise: -5.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.93, evRange: -5.00, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.81}, evA: {fold: -5.00, call: -8.95, raise: -5.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.78, evRange: 10.53, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.78}, evA: {fold: -5.00, call: 5.30, raise: 10.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.19, evRange: -9.05, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.19, evRange: -9.05, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.81} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.76} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.76} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 4.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.30, evRange: -1.88, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.86}, evA: {check: -1.87, bet: -2.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.30, evRange: -1.88, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.86}, evA: {check: -1.87, bet: -2.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.91, evRange: 7.63, rangeWeight: 0.11, freq: {check: 0.82, bet: 0.18}, ev: {check: 6.78, bet: 7.46}, evA: {check: 7.64, bet: 7.60} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.88, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.87, bet: -4.20}, evA: {check: -4.60, bet: -5.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.88, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.87, bet: -4.20}, evA: {check: -4.60, bet: -5.17} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.42, evRange: -0.12, rangeWeight: 0.29, freq: {check: 0.41, bet: 0.59}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.77, bet: -0.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.42, evRange: -0.12, rangeWeight: 0.29, freq: {check: 0.41, bet: 0.59}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.77, bet: -0.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.75, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01}, evA: {check: 4.54, bet: 7.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.80, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.81, bet: -4.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.80, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.81, bet: -4.92} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.11, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.30, call: 0.68, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.56}, evA: {fold: -5.00, call: -6.45, raise: -5.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.11, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.30, call: 0.68, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.56}, evA: {fold: -5.00, call: -6.45, raise: -5.19} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.84, evRange: 10.63, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.84}, evA: {fold: -5.00, call: 5.30, raise: 10.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.46, evRange: -5.06, rangeWeight: 0.04, freq: {fold: 0.86, call: 0.00, raise: 0.14}, ev: {fold: -5.00, call: -6.75, raise: -1.10}, evA: {fold: -5.00, call: -8.95, raise: -5.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.46, evRange: -5.06, rangeWeight: 0.04, freq: {fold: 0.86, call: 0.00, raise: 0.14}, ev: {fold: -5.00, call: -6.75, raise: -1.10}, evA: {fold: -5.00, call: -8.95, raise: -5.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.88, evRange: -9.12, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.95} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.88, evRange: -9.12, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.95} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 3.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.66} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.09, evRange: -5.05, rangeWeight: 0.29, freq: {fold: 0.32, call: 0.67, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.03}, evA: {fold: -5.00, call: -6.62, raise: -5.86} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.09, evRange: -5.05, rangeWeight: 0.29, freq: {fold: 0.32, call: 0.67, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.03}, evA: {fold: -5.00, call: -6.62, raise: -5.86} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.42, evRange: 9.71, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.42}, evA: {fold: -5.00, call: 4.32, raise: 9.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -4.95, rangeWeight: 0.09, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 1.19}, evA: {fold: -5.00, call: -8.78, raise: -4.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -4.95, rangeWeight: 0.09, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 1.19}, evA: {fold: -5.00, call: -8.78, raise: -4.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.43, evRange: -8.96, rangeWeight: 0.20, freq: {fold: 0.79, call: 0.21}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.43, evRange: -8.96, rangeWeight: 0.20, freq: {fold: 0.79, call: 0.21}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.71} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.52, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 2.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.40} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.34, evRange: 6.25, rangeWeight: 0.58, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.21, bet: 6.34}, evA: {check: 5.94, bet: 6.26} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.13, evRange: -1.92, rangeWeight: 0.15, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.26, bet: -0.18}, evA: {check: -2.11, bet: -1.89} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.13, evRange: -1.92, rangeWeight: 0.15, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.26, bet: -0.18}, evA: {check: -2.11, bet: -1.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.21, evRange: -2.27, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.30, bet: -1.21}, evA: {check: -4.76, bet: -2.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.21, evRange: -2.27, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.30, bet: -1.21}, evA: {check: -4.76, bet: -2.27} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.33, evRange: 7.48, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.33}, evA: {check: 4.07, bet: 7.48} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.15, evRange: -1.55, rangeWeight: 0.26, freq: {check: 0.84, bet: 0.16}, ev: {check: 1.25, bet: 0.65}, evA: {check: -2.38, bet: -1.51} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.15, evRange: -1.55, rangeWeight: 0.26, freq: {check: 0.84, bet: 0.16}, ev: {check: 1.25, bet: 0.65}, evA: {check: -2.38, bet: -1.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.38, evRange: -4.85, rangeWeight: 0.09, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -2.92}, evA: {check: -5.00, bet: -4.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.38, evRange: -4.85, rangeWeight: 0.09, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -2.92}, evA: {check: -5.00, bet: -4.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.19, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.00}, evA: {fold: -5.00, call: 3.14, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.50, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.38, call: 0.62, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.54, raise: -6.74} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.50, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.38, call: 0.62, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.54, raise: -6.74} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.89, evRange: -5.07, rangeWeight: 0.00, freq: {fold: 0.97, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.52, raise: -6.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.89, evRange: -5.07, rangeWeight: 0.00, freq: {fold: 0.97, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.52, raise: -6.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.65, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 0.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.99} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.00}, evA: {fold: -5.00, call: 3.64, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.63, raise: -6.28} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.63, raise: -6.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.40, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.49}, evA: {fold: -5.00, call: -8.65, raise: -4.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.40, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.49}, evA: {fold: -5.00, call: -8.65, raise: -4.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.60, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 1.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.65} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.64, raise: 0.36}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.64, raise: 0.36}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.26, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.24, bet: -0.46}, evA: {check: 1.61, bet: 1.60} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.26, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.24, bet: -0.46}, evA: {check: 1.61, bet: 1.60} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -1.81, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.35}, evA: {check: -1.81, bet: -1.85} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -1.81, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.35}, evA: {check: -1.81, bet: -1.85} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.64, evRange: 4.33, rangeWeight: 0.03, freq: {check: 0.07, bet: 0.93}, ev: {check: 4.62, bet: 4.65}, evA: {check: 4.28, bet: 4.34} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: 2.01, rangeWeight: 0.19, freq: {check: 0.51, bet: 0.49}, ev: {check: 0.75, bet: -0.90}, evA: {check: 2.00, bet: 2.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: 2.01, rangeWeight: 0.19, freq: {check: 0.51, bet: 0.49}, ev: {check: 0.75, bet: -0.90}, evA: {check: 2.00, bet: 2.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -1.98, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.40}, evA: {check: -1.98, bet: -3.45} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -1.98, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.40}, evA: {check: -1.98, bet: -3.45} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.98, evRange: 4.94, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.98}, evA: {check: 2.99, bet: 4.94} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.64, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.02, call: 0.97, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.36}, evA: {fold: -3.00, call: -3.89, raise: -2.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.64, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.02, call: 0.97, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.36}, evA: {fold: -3.00, call: -3.89, raise: -2.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.25, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -3.43}, evA: {fold: -3.00, call: -7.00, raise: -6.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.25, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -3.43}, evA: {fold: -3.00, call: -7.00, raise: -6.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.33, evRange: 9.63, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.33}, evA: {fold: -3.00, call: 5.33, raise: 9.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.59, evRange: -5.69, rangeWeight: 0.38, freq: {fold: 0.34, call: 0.66}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.89} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.59, evRange: -5.69, rangeWeight: 0.38, freq: {fold: 0.34, call: 0.66}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.89} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.62, evRange: -2.98, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.74, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 1.95}, evA: {fold: -3.00, call: -4.36, raise: -3.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.62, evRange: -2.98, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.74, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 1.95}, evA: {fold: -3.00, call: -4.36, raise: -3.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.95, evRange: -3.01, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.35}, evA: {fold: -3.00, call: -6.80, raise: -3.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.95, evRange: -3.01, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.35}, evA: {fold: -3.00, call: -6.80, raise: -3.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.63, evRange: 8.11, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.63}, evA: {fold: -3.00, call: 4.31, raise: 8.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.91, evRange: -6.99, rangeWeight: 0.27, freq: {fold: 0.68, call: 0.32}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.91, evRange: -6.99, rangeWeight: 0.27, freq: {fold: 0.68, call: 0.32}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.38, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 2.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: -2.04, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.24, bet: -0.72}, evA: {check: -2.04, bet: -4.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: -2.04, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.24, bet: -0.72}, evA: {check: -2.04, bet: -4.08} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.20, evRange: 3.94, rangeWeight: 0.30, freq: {check: 0.43, bet: 0.57}, ev: {check: 4.99, bet: 3.61}, evA: {check: 3.94, bet: 3.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.03, evRange: -2.57, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.99, bet: -1.03}, evA: {check: -3.02, bet: -2.57} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.03, evRange: -2.57, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.99, bet: -1.03}, evA: {check: -3.02, bet: -2.57} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.75, evRange: -0.88, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.07}, evA: {check: -1.36, bet: -0.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.75, evRange: -0.88, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.07}, evA: {check: -1.36, bet: -0.99} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.05, evRange: 5.01, rangeWeight: 0.37, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.05}, evA: {check: 2.48, bet: 5.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.04, evRange: -2.88, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -2.04}, evA: {check: -3.00, bet: -2.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.04, evRange: -2.88, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -2.04}, evA: {check: -3.00, bet: -2.88} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.61, evRange: -3.01, rangeWeight: 0.41, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.67, raise: -5.85} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.61, evRange: -3.01, rangeWeight: 0.41, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.67, raise: -5.85} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 7.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 2.02, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -3.06, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.37, raise: -7.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -3.06, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.37, raise: -7.92} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.71, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.55, evRange: -3.01, rangeWeight: 0.24, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.76}, evA: {fold: -3.00, call: -4.68, raise: -5.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.55, evRange: -3.01, rangeWeight: 0.24, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.76}, evA: {fold: -3.00, call: -4.68, raise: -5.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.98, evRange: 7.00, rangeWeight: 0.37, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.98}, evA: {fold: -3.00, call: 1.99, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.42}, evA: {fold: -3.00, call: -6.37, raise: -8.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.42}, evA: {fold: -3.00, call: -6.37, raise: -8.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.67, evRange: -10.97, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.67, evRange: -10.97, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.72, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.03, evRange: 4.54, rangeWeight: 0.32, freq: {check: 0.10, bet: 0.90}, ev: {check: 4.51, bet: 5.09}, evA: {check: 4.50, bet: 4.55} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.55, evRange: -1.36, rangeWeight: 0.31, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.03, bet: -1.11}, evA: {check: -1.36, bet: -1.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.55, evRange: -1.36, rangeWeight: 0.31, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.03, bet: -1.11}, evA: {check: -1.36, bet: -1.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.00, evRange: -1.78, rangeWeight: 0.04, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.83, bet: -2.00}, evA: {check: -1.97, bet: -1.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.00, evRange: -1.78, rangeWeight: 0.04, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.83, bet: -2.00}, evA: {check: -1.97, bet: -1.78} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.94, evRange: 5.53, rangeWeight: 0.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.94}, evA: {check: 2.73, bet: 5.53} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.22, evRange: -0.48, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.56}, evA: {check: -0.83, bet: -0.47} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.22, evRange: -0.48, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.56}, evA: {check: -0.83, bet: -0.47} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.14, evRange: -3.00, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.60}, evA: {check: -3.00, bet: -3.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.14, evRange: -3.00, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.60}, evA: {check: -3.00, bet: -3.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.02, evRange: 7.04, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02}, evA: {fold: -3.00, call: 4.04, raise: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.29, evRange: -3.00, rangeWeight: 0.45, freq: {fold: 0.44, call: 0.49, raise: 0.07}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -4.43, raise: -3.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.29, evRange: -3.00, rangeWeight: 0.45, freq: {fold: 0.44, call: 0.49, raise: 0.07}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -4.43, raise: -3.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.96, evRange: -1.26, rangeWeight: 0.00, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -3.00, call: -5.25, raise: 2.40}, evA: {fold: -3.00, call: -6.75, raise: -1.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.96, evRange: -1.26, rangeWeight: 0.00, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -3.00, call: -5.25, raise: 2.40}, evA: {fold: -3.00, call: -6.75, raise: -1.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 4.68} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.90, evRange: -7.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.16} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.90, evRange: -7.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.39, evRange: 7.63, rangeWeight: 0.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.39}, evA: {fold: -3.00, call: 3.94, raise: 7.63} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.49, evRange: -3.00, rangeWeight: 0.33, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.16}, evA: {fold: -3.00, call: -4.44, raise: -3.60} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.49, evRange: -3.00, rangeWeight: 0.33, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.16}, evA: {fold: -3.00, call: -4.44, raise: -3.60} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.64, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.75}, evA: {fold: -3.00, call: -6.73, raise: -3.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.64, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.75}, evA: {fold: -3.00, call: -6.73, raise: -3.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.44, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 2.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.11, evRange: -7.00, rangeWeight: 0.23, freq: {fold: 0.81, call: 0.19}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.11, evRange: -7.00, rangeWeight: 0.23, freq: {fold: 0.81, call: 0.19}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.19, evRange: 2.28, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.25, bet: -0.32}, evA: {check: 2.28, bet: 2.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.19, evRange: 2.28, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.25, bet: -0.32}, evA: {check: 2.28, bet: 2.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.86, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.18}, evA: {check: -3.86, bet: -5.24} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.86, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.18}, evA: {check: -3.86, bet: -5.24} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.94, evRange: 7.40, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.05, bet: 6.95}, evA: {check: 6.30, bet: 7.41} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.73, evRange: 3.43, rangeWeight: 0.30, freq: {check: 0.74, bet: 0.26}, ev: {check: 1.25, bet: -0.75}, evA: {check: 3.42, bet: 3.42} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.73, evRange: 3.43, rangeWeight: 0.30, freq: {check: 0.74, bet: 0.26}, ev: {check: 1.25, bet: -0.75}, evA: {check: 3.42, bet: 3.42} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.24, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -6.00}, evA: {check: -3.24, bet: -4.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.24, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -6.00}, evA: {check: -3.24, bet: -4.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 6.91, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 5.00, bet: 6.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: -2.40, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.25}, evA: {fold: -5.00, call: -3.79, raise: -3.47} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: -2.40, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.25}, evA: {fold: -5.00, call: -3.79, raise: -3.47} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -8.62}, evA: {fold: -5.00, call: -9.00, raise: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -8.62}, evA: {fold: -5.00, call: -9.00, raise: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 12.00, evRange: 13.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 12.00}, evA: {fold: -5.00, call: 7.62, raise: 13.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.25, evRange: -11.55, rangeWeight: 0.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.25, evRange: -11.55, rangeWeight: 0.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.15, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 2.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.83, evRange: -4.63, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.91, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.27}, evA: {fold: -5.00, call: -6.08, raise: -4.95} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.83, evRange: -4.63, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.91, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.27}, evA: {fold: -5.00, call: -6.08, raise: -4.95} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -3.47}, evA: {fold: -5.00, call: -9.00, raise: -7.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -3.47}, evA: {fold: -5.00, call: -9.00, raise: -7.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.39, evRange: 11.47, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.39}, evA: {fold: -5.00, call: 5.91, raise: 11.47} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.44, evRange: -9.45, rangeWeight: 0.33, freq: {fold: 0.38, call: 0.62}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.44, evRange: -9.45, rangeWeight: 0.33, freq: {fold: 0.38, call: 0.62}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.06, evRange: -9.32, rangeWeight: 0.00, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.99} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.06, evRange: -9.32, rangeWeight: 0.00, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.99} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.34, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.18} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.54, evRange: -2.55, rangeWeight: 0.31, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.30, bet: -0.92}, evA: {check: -2.55, bet: -2.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.54, evRange: -2.55, rangeWeight: 0.31, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.30, bet: -0.92}, evA: {check: -2.55, bet: -2.54} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.04, evRange: 7.89, rangeWeight: 0.30, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.52, bet: 8.09}, evA: {check: 7.74, bet: 7.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.83, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.89, bet: 0.11}, ev: {check: -3.76, bet: -4.37}, evA: {check: -4.83, bet: -4.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.83, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.89, bet: 0.11}, ev: {check: -3.76, bet: -4.37}, evA: {check: -4.83, bet: -4.90} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.57, evRange: 1.57, rangeWeight: 0.36, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.09}, evA: {check: 1.23, bet: 1.56} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.57, evRange: 1.57, rangeWeight: 0.36, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.09}, evA: {check: 1.23, bet: 1.56} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.79, evRange: 7.71, rangeWeight: 0.22, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.79}, evA: {check: 4.83, bet: 7.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.35, rangeWeight: 0.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.56}, evA: {check: -4.36, bet: -5.58} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.35, rangeWeight: 0.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.56}, evA: {check: -4.36, bet: -5.58} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.27, evRange: -4.93, rangeWeight: 0.37, freq: {fold: 0.14, call: 0.84, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.45}, evA: {fold: -5.00, call: -6.36, raise: -4.97} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.27, evRange: -4.93, rangeWeight: 0.37, freq: {fold: 0.14, call: 0.84, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.45}, evA: {fold: -5.00, call: -6.36, raise: -4.97} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.96, evRange: 10.89, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.96}, evA: {fold: -5.00, call: 5.60, raise: 10.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.12, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -1.71}, evA: {fold: -5.00, call: -9.00, raise: -5.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.12, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -1.71}, evA: {fold: -5.00, call: -9.00, raise: -5.78} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.21, evRange: -9.39, rangeWeight: 0.31, freq: {fold: 0.53, call: 0.47}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.21, evRange: -9.39, rangeWeight: 0.31, freq: {fold: 0.53, call: 0.47}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.20} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.38, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 4.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.40, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 0.37, call: 0.55, raise: 0.08}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.45, raise: -4.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.40, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 0.37, call: 0.55, raise: 0.08}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.45, raise: -4.99} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.78, evRange: 10.53, rangeWeight: 0.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.78}, evA: {fold: -5.00, call: 5.38, raise: 10.53} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.25, evRange: -4.99, rangeWeight: 0.03, freq: {fold: 0.58, call: 0.00, raise: 0.42}, ev: {fold: -5.00, call: -6.75, raise: -0.79}, evA: {fold: -5.00, call: -8.97, raise: -4.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.25, evRange: -4.99, rangeWeight: 0.03, freq: {fold: 0.58, call: 0.00, raise: 0.42}, ev: {fold: -5.00, call: -6.75, raise: -0.79}, evA: {fold: -5.00, call: -8.97, raise: -4.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.22, evRange: -9.00, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.22, evRange: -9.00, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.76} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.40, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 3.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.47, evRange: 7.03, rangeWeight: 0.32, freq: {check: 0.45, bet: 0.55}, ev: {check: 7.87, bet: 7.14}, evA: {check: 7.03, bet: 7.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -4.02, rangeWeight: 0.31, freq: {check: 0.87, bet: 0.13}, ev: {check: -2.28, bet: -1.13}, evA: {check: -4.02, bet: -4.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -4.02, rangeWeight: 0.31, freq: {check: 0.87, bet: 0.13}, ev: {check: -2.28, bet: -1.13}, evA: {check: -4.02, bet: -4.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.49, evRange: -4.89, rangeWeight: 0.04, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.01, bet: -2.98}, evA: {check: -4.92, bet: -4.86} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.49, evRange: -4.89, rangeWeight: 0.04, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.01, bet: -2.98}, evA: {check: -4.92, bet: -4.86} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.39, evRange: 6.50, rangeWeight: 0.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.39}, evA: {check: 3.99, bet: 6.50} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.77, evRange: -1.20, rangeWeight: 0.25, freq: {check: 0.58, bet: 0.42}, ev: {check: 1.25, bet: -3.55}, evA: {check: -2.13, bet: -1.20} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.77, evRange: -1.20, rangeWeight: 0.25, freq: {check: 0.58, bet: 0.42}, ev: {check: 1.25, bet: -3.55}, evA: {check: -2.13, bet: -1.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.07, evRange: -1.43, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.07}, evA: {check: -4.89, bet: -1.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.07, evRange: -1.43, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.07}, evA: {check: -4.89, bet: -1.43} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.06, evRange: 9.09, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.06}, evA: {fold: -5.00, call: 3.73, raise: 9.09} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.78, evRange: -5.01, rangeWeight: 0.37, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.43}, evA: {fold: -5.00, call: -6.65, raise: -6.22} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.78, evRange: -5.01, rangeWeight: 0.37, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.43}, evA: {fold: -5.00, call: -6.65, raise: -6.22} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 0.68, evRange: -4.89, rangeWeight: 0.03, freq: {fold: 0.30, call: 0.00, raise: 0.70}, ev: {fold: -5.00, call: -6.75, raise: 3.17}, evA: {fold: -5.00, call: -8.67, raise: -4.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 0.68, evRange: -4.89, rangeWeight: 0.03, freq: {fold: 0.30, call: 0.00, raise: 0.70}, ev: {fold: -5.00, call: -6.75, raise: 3.17}, evA: {fold: -5.00, call: -8.67, raise: -4.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 1.92} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.63, evRange: -9.00, rangeWeight: 0.15, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.92} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.63, evRange: -9.00, rangeWeight: 0.15, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 0.15, raise: 0.85}, ev: {fold: -5.00, call: 9.00, raise: 9.00}, evA: {fold: -5.00, call: 3.62, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.40, evRange: -5.00, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.65, raise: -6.32} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.40, evRange: -5.00, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.65, raise: -6.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.56, evRange: -5.00, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.65, raise: -5.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.56, evRange: -5.00, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.65, raise: -5.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.60, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 0.79} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    },
  k: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.24, bet: 0.76}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.24, bet: 0.76}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.26, bet: 0.74}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.26, bet: 0.74}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.38, evRange: 0.65, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.38, evRange: 0.65, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.32, evRange: 0.56, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.66} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.32, evRange: 0.56, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.66} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.42} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.42} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.39, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.53}, evA: {check: -0.39, bet: -5.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.39, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.53}, evA: {check: -0.39, bet: -5.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.82, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.16}, evA: {check: -0.82, bet: -4.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.82, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.16}, evA: {check: -0.82, bet: -4.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.01, evRange: 1.00, rangeWeight: 0.48, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.01, bet: 1.51}, evA: {check: 1.00, bet: 1.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.25, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.00}, evA: {check: -0.51, bet: -3.38} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.25, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.00}, evA: {check: -0.51, bet: -3.38} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.17}, evA: {check: -0.90, bet: -3.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -1.17}, evA: {check: -0.90, bet: -3.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, rangeWeight: 0.70, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 0.52, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 2.21}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 2.21}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.83}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.83}, evA: {fold: -1.00, call: -5.00, raise: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.33, evRange: 7.66, rangeWeight: 0.48, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.33}, evA: {fold: -1.00, call: 0.00, raise: 7.66} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -6.17, evRange: -7.67, rangeWeight: 0.00, freq: {fold: 0.33, call: 0.67}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -6.17, evRange: -7.67, rangeWeight: 0.00, freq: {fold: 0.33, call: 0.67}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 1.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.59, evRange: -1.90, rangeWeight: 0.00, freq: {fold: 0.80, call: 0.15, raise: 0.06}, ev: {fold: -1.00, call: 1.25, raise: 0.40}, evA: {fold: -1.00, call: -4.72, raise: -8.09} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.59, evRange: -1.90, rangeWeight: 0.00, freq: {fold: 0.80, call: 0.15, raise: 0.06}, ev: {fold: -1.00, call: 1.25, raise: 0.40}, evA: {fold: -1.00, call: -4.72, raise: -8.09} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.40}, evA: {fold: -1.00, call: -4.96, raise: -8.70} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.40}, evA: {fold: -1.00, call: -4.96, raise: -8.70} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.06, evRange: 7.82, rangeWeight: 0.70, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.06}, evA: {fold: -1.00, call: 0.56, raise: 7.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.09, evRange: -8.91, rangeWeight: 0.04, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.09, evRange: -8.91, rangeWeight: 0.04, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.09, evRange: -5.22, rangeWeight: 0.02, freq: {fold: 0.95, call: 0.05}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.09, evRange: -5.22, rangeWeight: 0.02, freq: {fold: 0.95, call: 0.05}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.94, evRange: 8.94, rangeWeight: 0.89, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.60}, evA: {check: 0.67, bet: 0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.60}, evA: {check: 0.67, bet: 0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.13, evRange: 1.28, rangeWeight: 0.10, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.14, bet: 3.09}, evA: {check: 1.28, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -0.24, rangeWeight: 0.36, freq: {check: 0.81, bet: 0.19}, ev: {check: -0.77, bet: -3.47}, evA: {check: -0.24, bet: -0.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -0.24, rangeWeight: 0.36, freq: {check: 0.81, bet: 0.19}, ev: {check: -0.77, bet: -3.47}, evA: {check: -0.24, bet: -0.25} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: 0.73, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.11}, evA: {check: 0.62, bet: 0.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: 0.73, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.11}, evA: {check: 0.62, bet: 0.40} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.85, evRange: 1.41, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.85}, evA: {check: 0.94, bet: 1.41} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.45, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.77}, evA: {check: -0.50, bet: -0.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.45, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.77}, evA: {check: -0.50, bet: -0.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: -1.05, rangeWeight: 0.11, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.88}, evA: {fold: -1.00, call: -2.59, raise: -3.56} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: -1.05, rangeWeight: 0.11, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.88}, evA: {fold: -1.00, call: -2.59, raise: -3.56} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.00, evRange: 5.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.00}, evA: {fold: -1.00, call: 1.94, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.00}, evA: {fold: -1.00, call: -4.31, raise: -5.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.00}, evA: {fold: -1.00, call: -4.31, raise: -5.62} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.61, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: 2.14, rangeWeight: 0.00, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 0.66, raise: 1.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: 2.14, rangeWeight: 0.00, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 0.66, raise: 1.12} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 5.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 3.61, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.16, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.03, raise: -1.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.16, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.03, raise: -1.08} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: -4.47, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: -4.47, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.41} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.28, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.44, evRange: 1.51, rangeWeight: 0.09, freq: {check: 0.01, bet: 0.99}, ev: {check: 1.14, bet: 2.44}, evA: {check: 1.07, bet: 1.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.18, evRange: 0.93, rangeWeight: 0.10, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.73, bet: -1.68}, evA: {check: 0.93, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.18, evRange: 0.93, rangeWeight: 0.10, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.73, bet: -1.68}, evA: {check: 0.93, bet: 0.93} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.66}, evA: {check: -0.31, bet: -0.31} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.66}, evA: {check: -0.31, bet: -0.31} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.56, rangeWeight: 0.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00}, evA: {check: 1.00, bet: 1.56} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.19, evRange: 0.92, rangeWeight: 0.09, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -1.75}, evA: {check: 0.92, bet: 0.92} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.19, evRange: 0.92, rangeWeight: 0.09, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -1.75}, evA: {check: 0.92, bet: 0.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.25, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.50}, evA: {check: -0.25, bet: -0.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.25, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.50}, evA: {check: -0.25, bet: -0.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 6.83, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.99, raise: 6.83} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 3.48, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 3.46, raise: 3.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 3.48, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: 3.46, raise: 3.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.43, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.15, raise: -3.81} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.43, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -3.15, raise: -3.81} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 3.37} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -3.42, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.64} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -3.42, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.27, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.27, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 7.53, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 3.11, raise: 7.53} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.62, evRange: -0.95, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: -2.23, raise: -2.82} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.62, evRange: -0.95, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.25}, evA: {fold: -1.00, call: -2.23, raise: -2.82} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -4.55, raise: -7.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.50}, evA: {fold: -1.00, call: -4.55, raise: -7.19} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.38, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 3.73} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -4.72, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.45} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -4.72, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -6.45} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.60} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.60} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.31, raise: 0.69}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.31, raise: 0.69}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.95, evRange: -0.95, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.95, evRange: -0.95, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.70, evRange: 2.09, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.70, bet: -1.05}, evA: {check: 2.09, bet: 0.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.70, evRange: 2.09, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.70, bet: -1.05}, evA: {check: 2.09, bet: 0.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.63, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.61, bet: -3.16}, evA: {check: -2.58, bet: -2.59} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.63, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.61, bet: -3.16}, evA: {check: -2.58, bet: -2.59} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.46, evRange: 4.56, rangeWeight: 0.05, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.46, bet: 4.46}, evA: {check: 4.41, bet: 4.58} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.52, evRange: 2.49, rangeWeight: 0.25, freq: {check: 0.88, bet: 0.12}, ev: {check: 0.75, bet: -1.24}, evA: {check: 2.45, bet: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.52, evRange: 2.49, rangeWeight: 0.25, freq: {check: 0.88, bet: 0.12}, ev: {check: 0.75, bet: -1.24}, evA: {check: 2.45, bet: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.34, evRange: -1.28, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -4.54}, evA: {check: -1.30, bet: -1.27} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.34, evRange: -1.28, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -4.54}, evA: {check: -1.30, bet: -1.27} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.01, evRange: 4.08, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.01}, evA: {check: 2.98, bet: 4.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 2.95, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.82}, evA: {fold: -3.00, call: 1.01, raise: 2.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 2.95, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.82}, evA: {fold: -3.00, call: 1.01, raise: 2.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.01, evRange: -3.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -4.70, raise: -3.31} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.01, evRange: -3.00, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -4.70, raise: -3.31} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.07, evRange: 8.01, rangeWeight: 0.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.07}, evA: {fold: -3.00, call: 5.46, raise: 8.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -6.37, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -6.37, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.41} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.04, evRange: -7.10, rangeWeight: 0.30, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.31} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.04, evRange: -7.10, rangeWeight: 0.30, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.31} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 2.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: -2.79, rangeWeight: 0.25, freq: {fold: 0.27, call: 0.73, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.75}, evA: {fold: -3.00, call: -4.47, raise: -5.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: -2.79, rangeWeight: 0.25, freq: {fold: 0.27, call: 0.73, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.75}, evA: {fold: -3.00, call: -4.47, raise: -5.49} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.50}, evA: {fold: -3.00, call: -6.31, raise: -7.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.50}, evA: {fold: -3.00, call: -6.31, raise: -7.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 7.01, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 2.14, raise: 7.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.69, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -1.24, rangeWeight: 0.17, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.06, bet: -0.30}, evA: {check: -1.25, bet: -1.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -1.24, rangeWeight: 0.17, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.06, bet: -0.30}, evA: {check: -1.25, bet: -1.23} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.24, evRange: 4.49, rangeWeight: 0.50, freq: {check: 0.02, bet: 0.98}, ev: {check: 4.37, bet: 4.24}, evA: {check: 4.04, bet: 4.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.89, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.61, bet: -1.88}, evA: {check: -2.87, bet: -2.51} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.89, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.61, bet: -1.88}, evA: {check: -2.87, bet: -2.51} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.59, evRange: -0.73, rangeWeight: 0.29, freq: {check: 0.81, bet: 0.19}, ev: {check: 0.75, bet: -0.07}, evA: {check: -1.18, bet: -0.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.59, evRange: -0.73, rangeWeight: 0.29, freq: {check: 0.81, bet: 0.19}, ev: {check: 0.75, bet: -0.07}, evA: {check: -1.18, bet: -0.98} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.27, evRange: 5.23, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.27}, evA: {check: 2.49, bet: 5.23} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.36, evRange: -3.18, rangeWeight: 0.09, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.25, bet: -2.47}, evA: {check: -2.95, bet: -3.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.36, evRange: -3.18, rangeWeight: 0.09, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.25, bet: -2.47}, evA: {check: -2.95, bet: -3.42} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -2.96, rangeWeight: 0.40, freq: {fold: 0.42, call: 0.58, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.52, raise: -4.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -2.96, rangeWeight: 0.40, freq: {fold: 0.42, call: 0.58, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.52, raise: -4.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 3.10, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.85, evRange: -3.03, rangeWeight: 0.02, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.54, raise: -4.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.85, evRange: -3.03, rangeWeight: 0.02, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.54, raise: -4.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.10, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.10, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.97, evRange: -3.00, rangeWeight: 0.29, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.54, raise: -4.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.97, evRange: -3.00, rangeWeight: 0.29, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.54, raise: -4.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 7.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 3.37, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.47, evRange: -3.01, rangeWeight: 0.09, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.62, raise: -3.15} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.47, evRange: -3.01, rangeWeight: 0.09, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.62, raise: -3.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.16, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.16, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.52, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.58, evRange: 4.43, rangeWeight: 0.13, freq: {check: 0.84, bet: 0.16}, ev: {check: 4.70, bet: 3.97}, evA: {check: 4.44, bet: 4.38} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.02, evRange: -1.61, rangeWeight: 0.38, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.03, bet: 0.09}, evA: {check: -1.61, bet: -1.62} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.02, evRange: -1.61, rangeWeight: 0.38, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.03, bet: 0.09}, evA: {check: -1.61, bet: -1.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.58, evRange: -2.90, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.63, bet: -1.82}, evA: {check: -2.89, bet: -2.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.58, evRange: -2.90, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.63, bet: -1.82}, evA: {check: -2.89, bet: -2.95} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.30, evRange: 4.99, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.30}, evA: {check: 2.65, bet: 4.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.49, evRange: -0.02, rangeWeight: 0.26, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.15}, evA: {check: -0.49, bet: -0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.49, evRange: -0.02, rangeWeight: 0.26, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.15}, evA: {check: -0.49, bet: -0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.33, evRange: -2.81, rangeWeight: 0.09, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -2.39}, evA: {check: -2.84, bet: -2.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.33, evRange: -2.81, rangeWeight: 0.09, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -2.39}, evA: {check: -2.84, bet: -2.80} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 3.15, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.36, evRange: -2.99, rangeWeight: 0.39, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -4.54, raise: -4.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.36, evRange: -2.99, rangeWeight: 0.39, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -4.54, raise: -4.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.75, evRange: -3.04, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.57, raise: -3.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.75, evRange: -3.04, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.57, raise: -3.90} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.55, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, rangeWeight: 0.13, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.51} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, rangeWeight: 0.13, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 7.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 3.37, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.83, evRange: -2.92, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.46, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.42, raise: -4.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.83, evRange: -2.92, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.46, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.42, raise: -4.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.92, evRange: -3.00, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.57, raise: -3.23} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.92, evRange: -3.00, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.57, raise: -3.23} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.52, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.09} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.91} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.98, evRange: -7.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.91} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 1.94, rangeWeight: 0.38, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.06}, evA: {check: 1.94, bet: 1.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 1.94, rangeWeight: 0.38, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.06}, evA: {check: 1.94, bet: 1.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.65, rangeWeight: 0.10, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.39}, evA: {check: -3.65, bet: -3.81} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.65, rangeWeight: 0.10, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.39}, evA: {check: -3.65, bet: -3.81} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.82, evRange: 6.96, rangeWeight: 0.04, freq: {check: 0.06, bet: 0.94}, ev: {check: 6.27, bet: 6.85}, evA: {check: 6.37, bet: 7.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.62, evRange: 1.79, rangeWeight: 0.25, freq: {check: 0.68, bet: 0.32}, ev: {check: 1.25, bet: -0.70}, evA: {check: 1.77, bet: 1.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.62, evRange: 1.79, rangeWeight: 0.25, freq: {check: 0.68, bet: 0.32}, ev: {check: 1.25, bet: -0.70}, evA: {check: 1.77, bet: 1.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.38, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.51}, evA: {check: -4.38, bet: -7.19} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.38, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.51}, evA: {check: -4.38, bet: -7.19} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.10, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99}, evA: {check: 4.99, bet: 8.10} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: -4.30, rangeWeight: 0.39, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.44}, evA: {fold: -5.00, call: -5.81, raise: -6.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: -4.30, rangeWeight: 0.39, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.44}, evA: {fold: -5.00, call: -5.81, raise: -6.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.16}, evA: {fold: -5.00, call: -9.00, raise: -12.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.11, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.16}, evA: {fold: -5.00, call: -9.00, raise: -12.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.01, evRange: 12.84, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.01}, evA: {fold: -5.00, call: 6.18, raise: 12.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -10.31, rangeWeight: 0.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.53} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -10.31, rangeWeight: 0.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.53} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.04, evRange: -9.19, rangeWeight: 0.00, freq: {fold: 0.95, call: 0.05}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.04, evRange: -9.19, rangeWeight: 0.00, freq: {fold: 0.95, call: 0.05}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 4.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.07, evRange: -5.02, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.77, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.47, raise: -5.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.07, evRange: -5.02, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.77, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.47, raise: -5.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.93, evRange: -5.00, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.81}, evA: {fold: -5.00, call: -8.95, raise: -5.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.93, evRange: -5.00, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.81}, evA: {fold: -5.00, call: -8.95, raise: -5.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.78, evRange: 10.53, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.78}, evA: {fold: -5.00, call: 5.30, raise: 10.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.19, evRange: -9.05, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.19, evRange: -9.05, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.81} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.76} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.76} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 4.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.30, evRange: -1.88, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.86}, evA: {check: -1.87, bet: -2.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.30, evRange: -1.88, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.86}, evA: {check: -1.87, bet: -2.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.91, evRange: 7.63, rangeWeight: 0.11, freq: {check: 0.82, bet: 0.18}, ev: {check: 6.78, bet: 7.46}, evA: {check: 7.64, bet: 7.60} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.88, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.87, bet: -4.20}, evA: {check: -4.60, bet: -5.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.88, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.87, bet: -4.20}, evA: {check: -4.60, bet: -5.17} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.42, evRange: -0.12, rangeWeight: 0.29, freq: {check: 0.41, bet: 0.59}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.77, bet: -0.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.42, evRange: -0.12, rangeWeight: 0.29, freq: {check: 0.41, bet: 0.59}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.77, bet: -0.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.75, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01}, evA: {check: 4.54, bet: 7.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.80, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.81, bet: -4.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.80, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.81, bet: -4.92} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.11, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.30, call: 0.68, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.56}, evA: {fold: -5.00, call: -6.45, raise: -5.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.11, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.30, call: 0.68, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.56}, evA: {fold: -5.00, call: -6.45, raise: -5.19} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.84, evRange: 10.63, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.84}, evA: {fold: -5.00, call: 5.30, raise: 10.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.46, evRange: -5.06, rangeWeight: 0.04, freq: {fold: 0.86, call: 0.00, raise: 0.14}, ev: {fold: -5.00, call: -6.75, raise: -1.10}, evA: {fold: -5.00, call: -8.95, raise: -5.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.46, evRange: -5.06, rangeWeight: 0.04, freq: {fold: 0.86, call: 0.00, raise: 0.14}, ev: {fold: -5.00, call: -6.75, raise: -1.10}, evA: {fold: -5.00, call: -8.95, raise: -5.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.88, evRange: -9.12, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.95} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.88, evRange: -9.12, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.95} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 3.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.66} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.09, evRange: -5.05, rangeWeight: 0.29, freq: {fold: 0.32, call: 0.67, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.03}, evA: {fold: -5.00, call: -6.62, raise: -5.86} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.09, evRange: -5.05, rangeWeight: 0.29, freq: {fold: 0.32, call: 0.67, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.03}, evA: {fold: -5.00, call: -6.62, raise: -5.86} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.42, evRange: 9.71, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.42}, evA: {fold: -5.00, call: 4.32, raise: 9.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -4.95, rangeWeight: 0.09, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 1.19}, evA: {fold: -5.00, call: -8.78, raise: -4.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -4.95, rangeWeight: 0.09, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 1.19}, evA: {fold: -5.00, call: -8.78, raise: -4.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.43, evRange: -8.96, rangeWeight: 0.20, freq: {fold: 0.79, call: 0.21}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.43, evRange: -8.96, rangeWeight: 0.20, freq: {fold: 0.79, call: 0.21}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.71} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.52, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 2.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.40} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.34, evRange: 6.25, rangeWeight: 0.58, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.21, bet: 6.34}, evA: {check: 5.94, bet: 6.26} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.13, evRange: -1.92, rangeWeight: 0.15, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.26, bet: -0.18}, evA: {check: -2.11, bet: -1.89} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.13, evRange: -1.92, rangeWeight: 0.15, freq: {check: 0.13, bet: 0.87}, ev: {check: 0.26, bet: -0.18}, evA: {check: -2.11, bet: -1.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.21, evRange: -2.27, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.30, bet: -1.21}, evA: {check: -4.76, bet: -2.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.21, evRange: -2.27, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.30, bet: -1.21}, evA: {check: -4.76, bet: -2.27} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.33, evRange: 7.48, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.33}, evA: {check: 4.07, bet: 7.48} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.15, evRange: -1.55, rangeWeight: 0.26, freq: {check: 0.84, bet: 0.16}, ev: {check: 1.25, bet: 0.65}, evA: {check: -2.38, bet: -1.51} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.15, evRange: -1.55, rangeWeight: 0.26, freq: {check: 0.84, bet: 0.16}, ev: {check: 1.25, bet: 0.65}, evA: {check: -2.38, bet: -1.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.38, evRange: -4.85, rangeWeight: 0.09, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -2.92}, evA: {check: -5.00, bet: -4.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.38, evRange: -4.85, rangeWeight: 0.09, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -2.92}, evA: {check: -5.00, bet: -4.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.19, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.00}, evA: {fold: -5.00, call: 3.14, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.50, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.38, call: 0.62, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.54, raise: -6.74} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.50, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.38, call: 0.62, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.54, raise: -6.74} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.89, evRange: -5.07, rangeWeight: 0.00, freq: {fold: 0.97, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.52, raise: -6.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.89, evRange: -5.07, rangeWeight: 0.00, freq: {fold: 0.97, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.52, raise: -6.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.65, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 0.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.99} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.00}, evA: {fold: -5.00, call: 3.64, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.63, raise: -6.28} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.63, raise: -6.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.40, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.49}, evA: {fold: -5.00, call: -8.65, raise: -4.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.40, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.49}, evA: {fold: -5.00, call: -8.65, raise: -4.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.60, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 1.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.99, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.65} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.64, raise: 0.36}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.64, raise: 0.36}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.26, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.24, bet: -0.46}, evA: {check: 1.61, bet: 1.60} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.26, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.24, bet: -0.46}, evA: {check: 1.61, bet: 1.60} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -1.81, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.35}, evA: {check: -1.81, bet: -1.85} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -1.81, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.35}, evA: {check: -1.81, bet: -1.85} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.64, evRange: 4.33, rangeWeight: 0.03, freq: {check: 0.07, bet: 0.93}, ev: {check: 4.62, bet: 4.65}, evA: {check: 4.28, bet: 4.34} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: 2.01, rangeWeight: 0.19, freq: {check: 0.51, bet: 0.49}, ev: {check: 0.75, bet: -0.90}, evA: {check: 2.00, bet: 2.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: 2.01, rangeWeight: 0.19, freq: {check: 0.51, bet: 0.49}, ev: {check: 0.75, bet: -0.90}, evA: {check: 2.00, bet: 2.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -1.98, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.40}, evA: {check: -1.98, bet: -3.45} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -1.98, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.40}, evA: {check: -1.98, bet: -3.45} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.98, evRange: 4.94, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.98}, evA: {check: 2.99, bet: 4.94} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.64, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.02, call: 0.97, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.36}, evA: {fold: -3.00, call: -3.89, raise: -2.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.64, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.02, call: 0.97, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.36}, evA: {fold: -3.00, call: -3.89, raise: -2.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.25, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -3.43}, evA: {fold: -3.00, call: -7.00, raise: -6.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.25, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -3.43}, evA: {fold: -3.00, call: -7.00, raise: -6.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.33, evRange: 9.63, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.33}, evA: {fold: -3.00, call: 5.33, raise: 9.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.59, evRange: -5.69, rangeWeight: 0.38, freq: {fold: 0.34, call: 0.66}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.89} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.59, evRange: -5.69, rangeWeight: 0.38, freq: {fold: 0.34, call: 0.66}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.89} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.62, evRange: -2.98, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.74, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 1.95}, evA: {fold: -3.00, call: -4.36, raise: -3.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.62, evRange: -2.98, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.74, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 1.95}, evA: {fold: -3.00, call: -4.36, raise: -3.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.95, evRange: -3.01, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.35}, evA: {fold: -3.00, call: -6.80, raise: -3.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.95, evRange: -3.01, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.35}, evA: {fold: -3.00, call: -6.80, raise: -3.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.63, evRange: 8.11, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.63}, evA: {fold: -3.00, call: 4.31, raise: 8.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.91, evRange: -6.99, rangeWeight: 0.27, freq: {fold: 0.68, call: 0.32}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.91, evRange: -6.99, rangeWeight: 0.27, freq: {fold: 0.68, call: 0.32}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.38, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 2.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: -2.04, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.24, bet: -0.72}, evA: {check: -2.04, bet: -4.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: -2.04, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.24, bet: -0.72}, evA: {check: -2.04, bet: -4.08} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.20, evRange: 3.94, rangeWeight: 0.30, freq: {check: 0.43, bet: 0.57}, ev: {check: 4.99, bet: 3.61}, evA: {check: 3.94, bet: 3.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.03, evRange: -2.57, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.99, bet: -1.03}, evA: {check: -3.02, bet: -2.57} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.03, evRange: -2.57, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.99, bet: -1.03}, evA: {check: -3.02, bet: -2.57} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.75, evRange: -0.88, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.07}, evA: {check: -1.36, bet: -0.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.75, evRange: -0.88, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.07}, evA: {check: -1.36, bet: -0.99} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.05, evRange: 5.01, rangeWeight: 0.37, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.05}, evA: {check: 2.48, bet: 5.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.04, evRange: -2.88, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -2.04}, evA: {check: -3.00, bet: -2.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.04, evRange: -2.88, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -2.04}, evA: {check: -3.00, bet: -2.88} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.61, evRange: -3.01, rangeWeight: 0.41, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.67, raise: -5.85} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.61, evRange: -3.01, rangeWeight: 0.41, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.67, raise: -5.85} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 7.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 2.02, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -3.06, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.37, raise: -7.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -3.06, rangeWeight: 0.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.50}, evA: {fold: -3.00, call: -6.37, raise: -7.92} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.71, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.55, evRange: -3.01, rangeWeight: 0.24, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.76}, evA: {fold: -3.00, call: -4.68, raise: -5.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.55, evRange: -3.01, rangeWeight: 0.24, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.76}, evA: {fold: -3.00, call: -4.68, raise: -5.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.98, evRange: 7.00, rangeWeight: 0.37, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.98}, evA: {fold: -3.00, call: 1.99, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.42}, evA: {fold: -3.00, call: -6.37, raise: -8.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.42}, evA: {fold: -3.00, call: -6.37, raise: -8.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.67, evRange: -10.97, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.67, evRange: -10.97, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.72, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.03, evRange: 4.54, rangeWeight: 0.32, freq: {check: 0.10, bet: 0.90}, ev: {check: 4.51, bet: 5.09}, evA: {check: 4.50, bet: 4.55} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.55, evRange: -1.36, rangeWeight: 0.31, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.03, bet: -1.11}, evA: {check: -1.36, bet: -1.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.55, evRange: -1.36, rangeWeight: 0.31, freq: {check: 0.52, bet: 0.48}, ev: {check: -0.03, bet: -1.11}, evA: {check: -1.36, bet: -1.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.00, evRange: -1.78, rangeWeight: 0.04, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.83, bet: -2.00}, evA: {check: -1.97, bet: -1.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.00, evRange: -1.78, rangeWeight: 0.04, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.83, bet: -2.00}, evA: {check: -1.97, bet: -1.78} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.94, evRange: 5.53, rangeWeight: 0.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.94}, evA: {check: 2.73, bet: 5.53} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.22, evRange: -0.48, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.56}, evA: {check: -0.83, bet: -0.47} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.22, evRange: -0.48, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.56}, evA: {check: -0.83, bet: -0.47} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.14, evRange: -3.00, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.60}, evA: {check: -3.00, bet: -3.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.14, evRange: -3.00, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.60}, evA: {check: -3.00, bet: -3.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.02, evRange: 7.04, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02}, evA: {fold: -3.00, call: 4.04, raise: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.29, evRange: -3.00, rangeWeight: 0.45, freq: {fold: 0.44, call: 0.49, raise: 0.07}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -4.43, raise: -3.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.29, evRange: -3.00, rangeWeight: 0.45, freq: {fold: 0.44, call: 0.49, raise: 0.07}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -4.43, raise: -3.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.96, evRange: -1.26, rangeWeight: 0.00, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -3.00, call: -5.25, raise: 2.40}, evA: {fold: -3.00, call: -6.75, raise: -1.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.96, evRange: -1.26, rangeWeight: 0.00, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -3.00, call: -5.25, raise: 2.40}, evA: {fold: -3.00, call: -6.75, raise: -1.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 4.68} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.90, evRange: -7.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.16} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.90, evRange: -7.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.39, evRange: 7.63, rangeWeight: 0.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.39}, evA: {fold: -3.00, call: 3.94, raise: 7.63} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.49, evRange: -3.00, rangeWeight: 0.33, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.16}, evA: {fold: -3.00, call: -4.44, raise: -3.60} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.49, evRange: -3.00, rangeWeight: 0.33, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.16}, evA: {fold: -3.00, call: -4.44, raise: -3.60} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.64, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.75}, evA: {fold: -3.00, call: -6.73, raise: -3.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.64, evRange: -3.00, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.75}, evA: {fold: -3.00, call: -6.73, raise: -3.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.44, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 2.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.11, evRange: -7.00, rangeWeight: 0.23, freq: {fold: 0.81, call: 0.19}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.11, evRange: -7.00, rangeWeight: 0.23, freq: {fold: 0.81, call: 0.19}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.05, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.19, evRange: 2.28, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.25, bet: -0.32}, evA: {check: 2.28, bet: 2.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.19, evRange: 2.28, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.25, bet: -0.32}, evA: {check: 2.28, bet: 2.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.86, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.18}, evA: {check: -3.86, bet: -5.24} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.86, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.18}, evA: {check: -3.86, bet: -5.24} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.94, evRange: 7.40, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.05, bet: 6.95}, evA: {check: 6.30, bet: 7.41} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.73, evRange: 3.43, rangeWeight: 0.30, freq: {check: 0.74, bet: 0.26}, ev: {check: 1.25, bet: -0.75}, evA: {check: 3.42, bet: 3.42} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.73, evRange: 3.43, rangeWeight: 0.30, freq: {check: 0.74, bet: 0.26}, ev: {check: 1.25, bet: -0.75}, evA: {check: 3.42, bet: 3.42} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.24, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -6.00}, evA: {check: -3.24, bet: -4.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.24, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -6.00}, evA: {check: -3.24, bet: -4.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 6.91, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 5.00, bet: 6.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: -2.40, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.25}, evA: {fold: -5.00, call: -3.79, raise: -3.47} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: -2.40, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.25}, evA: {fold: -5.00, call: -3.79, raise: -3.47} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -8.62}, evA: {fold: -5.00, call: -9.00, raise: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -8.62}, evA: {fold: -5.00, call: -9.00, raise: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 12.00, evRange: 13.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 12.00}, evA: {fold: -5.00, call: 7.62, raise: 13.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.25, evRange: -11.55, rangeWeight: 0.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.25, evRange: -11.55, rangeWeight: 0.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -11.00, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.15, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 2.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.83, evRange: -4.63, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.91, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.27}, evA: {fold: -5.00, call: -6.08, raise: -4.95} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.83, evRange: -4.63, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.91, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.27}, evA: {fold: -5.00, call: -6.08, raise: -4.95} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -3.47}, evA: {fold: -5.00, call: -9.00, raise: -7.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -3.47}, evA: {fold: -5.00, call: -9.00, raise: -7.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.39, evRange: 11.47, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.39}, evA: {fold: -5.00, call: 5.91, raise: 11.47} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.44, evRange: -9.45, rangeWeight: 0.33, freq: {fold: 0.38, call: 0.62}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.44, evRange: -9.45, rangeWeight: 0.33, freq: {fold: 0.38, call: 0.62}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.06, evRange: -9.32, rangeWeight: 0.00, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.99} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.06, evRange: -9.32, rangeWeight: 0.00, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.99} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.34, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.18} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.54, evRange: -2.55, rangeWeight: 0.31, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.30, bet: -0.92}, evA: {check: -2.55, bet: -2.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.54, evRange: -2.55, rangeWeight: 0.31, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.30, bet: -0.92}, evA: {check: -2.55, bet: -2.54} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.04, evRange: 7.89, rangeWeight: 0.30, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.52, bet: 8.09}, evA: {check: 7.74, bet: 7.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.83, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.89, bet: 0.11}, ev: {check: -3.76, bet: -4.37}, evA: {check: -4.83, bet: -4.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.83, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.89, bet: 0.11}, ev: {check: -3.76, bet: -4.37}, evA: {check: -4.83, bet: -4.90} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.57, evRange: 1.57, rangeWeight: 0.36, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.09}, evA: {check: 1.23, bet: 1.56} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.57, evRange: 1.57, rangeWeight: 0.36, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.09}, evA: {check: 1.23, bet: 1.56} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.79, evRange: 7.71, rangeWeight: 0.22, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.79}, evA: {check: 4.83, bet: 7.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.35, rangeWeight: 0.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.56}, evA: {check: -4.36, bet: -5.58} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.35, rangeWeight: 0.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.56}, evA: {check: -4.36, bet: -5.58} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.27, evRange: -4.93, rangeWeight: 0.37, freq: {fold: 0.14, call: 0.84, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.45}, evA: {fold: -5.00, call: -6.36, raise: -4.97} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.27, evRange: -4.93, rangeWeight: 0.37, freq: {fold: 0.14, call: 0.84, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.45}, evA: {fold: -5.00, call: -6.36, raise: -4.97} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.96, evRange: 10.89, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.96}, evA: {fold: -5.00, call: 5.60, raise: 10.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.12, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -1.71}, evA: {fold: -5.00, call: -9.00, raise: -5.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.12, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -1.71}, evA: {fold: -5.00, call: -9.00, raise: -5.78} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.21, evRange: -9.39, rangeWeight: 0.31, freq: {fold: 0.53, call: 0.47}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.21, evRange: -9.39, rangeWeight: 0.31, freq: {fold: 0.53, call: 0.47}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.20} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.38, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 4.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.40, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 0.37, call: 0.55, raise: 0.08}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.45, raise: -4.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.40, evRange: -5.00, rangeWeight: 0.36, freq: {fold: 0.37, call: 0.55, raise: 0.08}, ev: {fold: -5.00, call: 2.25, raise: 2.62}, evA: {fold: -5.00, call: -6.45, raise: -4.99} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.78, evRange: 10.53, rangeWeight: 0.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.78}, evA: {fold: -5.00, call: 5.38, raise: 10.53} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.25, evRange: -4.99, rangeWeight: 0.03, freq: {fold: 0.58, call: 0.00, raise: 0.42}, ev: {fold: -5.00, call: -6.75, raise: -0.79}, evA: {fold: -5.00, call: -8.97, raise: -4.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.25, evRange: -4.99, rangeWeight: 0.03, freq: {fold: 0.58, call: 0.00, raise: 0.42}, ev: {fold: -5.00, call: -6.75, raise: -0.79}, evA: {fold: -5.00, call: -8.97, raise: -4.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.22, evRange: -9.00, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.22, evRange: -9.00, rangeWeight: 0.29, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.76} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.40, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 3.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.47, evRange: 7.03, rangeWeight: 0.32, freq: {check: 0.45, bet: 0.55}, ev: {check: 7.87, bet: 7.14}, evA: {check: 7.03, bet: 7.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -4.02, rangeWeight: 0.31, freq: {check: 0.87, bet: 0.13}, ev: {check: -2.28, bet: -1.13}, evA: {check: -4.02, bet: -4.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -4.02, rangeWeight: 0.31, freq: {check: 0.87, bet: 0.13}, ev: {check: -2.28, bet: -1.13}, evA: {check: -4.02, bet: -4.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.49, evRange: -4.89, rangeWeight: 0.04, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.01, bet: -2.98}, evA: {check: -4.92, bet: -4.86} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.49, evRange: -4.89, rangeWeight: 0.04, freq: {check: 0.51, bet: 0.49}, ev: {check: -2.01, bet: -2.98}, evA: {check: -4.92, bet: -4.86} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.39, evRange: 6.50, rangeWeight: 0.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.39}, evA: {check: 3.99, bet: 6.50} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.77, evRange: -1.20, rangeWeight: 0.25, freq: {check: 0.58, bet: 0.42}, ev: {check: 1.25, bet: -3.55}, evA: {check: -2.13, bet: -1.20} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.77, evRange: -1.20, rangeWeight: 0.25, freq: {check: 0.58, bet: 0.42}, ev: {check: 1.25, bet: -3.55}, evA: {check: -2.13, bet: -1.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.07, evRange: -1.43, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.07}, evA: {check: -4.89, bet: -1.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.07, evRange: -1.43, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.07}, evA: {check: -4.89, bet: -1.43} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.06, evRange: 9.09, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.06}, evA: {fold: -5.00, call: 3.73, raise: 9.09} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.78, evRange: -5.01, rangeWeight: 0.37, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.43}, evA: {fold: -5.00, call: -6.65, raise: -6.22} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.78, evRange: -5.01, rangeWeight: 0.37, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.43}, evA: {fold: -5.00, call: -6.65, raise: -6.22} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 0.68, evRange: -4.89, rangeWeight: 0.03, freq: {fold: 0.30, call: 0.00, raise: 0.70}, ev: {fold: -5.00, call: -6.75, raise: 3.17}, evA: {fold: -5.00, call: -8.67, raise: -4.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 0.68, evRange: -4.89, rangeWeight: 0.03, freq: {fold: 0.30, call: 0.00, raise: 0.70}, ev: {fold: -5.00, call: -6.75, raise: 3.17}, evA: {fold: -5.00, call: -8.67, raise: -4.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 1.92} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.63, evRange: -9.00, rangeWeight: 0.15, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.92} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.63, evRange: -9.00, rangeWeight: 0.15, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 0.15, raise: 0.85}, ev: {fold: -5.00, call: 9.00, raise: 9.00}, evA: {fold: -5.00, call: 3.62, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.40, evRange: -5.00, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.65, raise: -6.32} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.40, evRange: -5.00, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -6.65, raise: -6.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.56, evRange: -5.00, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.65, raise: -5.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.56, evRange: -5.00, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.50}, evA: {fold: -5.00, call: -8.65, raise: -5.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.60, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 0.79} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -12.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    }
  };
})();
