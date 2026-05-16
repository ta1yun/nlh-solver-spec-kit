// Recursive Leduc Tree Structure
// Solver: vanilla CFR, 200k epochs × 30 deals
// Exploitability: 0.38% (1.9 mbb/g)

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.31, evRange: -2.09, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.31, evRange: -2.09, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.33, evRange: 2.50, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -1.81, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -1.81, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.44, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.44, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.15, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.15, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.30, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.10, raise: 0.10}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.30, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.10, raise: 0.10}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.51, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.47, bet: 0.53}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.60, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.81, bet: 0.19}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.60, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.81, bet: 0.19}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.53, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.07, raise: 0.07}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.53, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.07, raise: 0.07}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.69, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.08, call: 0.92}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.69, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.08, call: 0.92}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.67, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.51, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.46, bet: 0.54}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.51, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.46, bet: 0.54}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.45, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.45, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.30, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.22, bet: 0.78}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.25, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.25, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.99, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.72, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.80, raise: 0.20}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.72, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.80, raise: 0.20}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.14, call: 0.86}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.76, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.02, call: 0.04, raise: 0.94}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.67, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.67, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.00, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.00, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.23, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.23, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.62, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.62, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.98, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.07, bet: 0.93}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.76, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.76, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.74, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.74, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.03, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.03, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.57, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.57, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.27, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.36, raise: 0.64}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.99, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.99, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.89, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.14, bet: 0.86}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.89, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.14, bet: 0.86}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.99, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.70, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.56, bet: 0.44}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.70, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.56, bet: 0.44}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.24, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.63, call: 0.37, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.24, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.63, call: 0.37, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.45, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.45, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.82, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.82, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.93, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.93, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.86, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.86, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.70, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.89, bet: 0.11}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.83, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.83, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.36, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.36, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.97, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.97, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.87, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.87, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.31, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.07, bet: 0.93}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.76, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.76, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.11, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.14}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.11, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.14}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.89, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.89, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.91, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.42, call: 0.58}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.91, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.42, call: 0.58}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.07, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.79, bet: 0.21}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.38, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.39, bet: 0.61}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.38, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.39, bet: 0.61}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.29, call: 0.68, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.29, call: 0.68, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.52, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.52, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.08, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.30, call: 0.70, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.08, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.30, call: 0.70, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.11, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.11, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.55, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.55, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.01, bet: 0.99}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.44, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.44, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.63, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.40, call: 0.60, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.63, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.40, call: 0.60, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.13, call: 0.01, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.13, call: 0.01, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.97, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.97, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.92, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.92, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.78, call: 0.00, raise: 0.22}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.78, call: 0.00, raise: 0.22}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.88, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.88, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.56, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.56, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.05}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.05}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.97, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.97, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.61, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.61, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.96, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.11, bet: 0.89}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -2.77, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -2.77, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.87, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.19, call: 0.81}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.87, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.19, call: 0.81}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.76, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.23, call: 0.73, raise: 0.04}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.76, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.23, call: 0.73, raise: 0.04}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.73, call: 0.27}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.73, call: 0.27}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.84, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.48, bet: 0.52}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.75, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.75, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.91, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.91, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.54, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.54, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.69, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.69, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.94, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.17, bet: 0.83}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.54, bet: 0.46}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.54, bet: 0.46}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.80, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.62, bet: 0.38}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.80, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.62, bet: 0.38}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.44, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.47, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.44, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.47, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.63, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.63, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.86, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.86, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.50, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.50, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.15, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.15, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.01, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.01, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.90, evRange: -3.80, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.90, evRange: -3.80, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.07, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.05, call: 0.05, raise: 0.90}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.97, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.06, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.97, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.06, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.42, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.42, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.37, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.32, bet: 0.68}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.37, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.32, bet: 0.68}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.32, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.03, bet: 0.97}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.28, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.15, call: 0.81, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.28, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.15, call: 0.81, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.95, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.95, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.22, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.22, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.36, call: 0.59, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.36, call: 0.59, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.63, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.49, call: 0.00, raise: 0.51}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.63, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.49, call: 0.00, raise: 0.51}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.16, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.16, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.16, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.51, bet: 0.49}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.51, bet: 0.49}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.51, bet: 0.49}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.83, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.83, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.83, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.31, call: 0.00, raise: 0.69}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.83, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.31, call: 0.00, raise: 0.69}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.51, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.51, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.43, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.43, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.42, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.42, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.31, evRange: -2.09, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.31, evRange: -2.09, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.33, evRange: 2.50, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -1.81, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -1.81, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.44, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.44, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.15, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.15, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.30, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.10, raise: 0.10}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.30, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.10, raise: 0.10}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.51, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.47, bet: 0.53}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.60, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.81, bet: 0.19}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.60, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.81, bet: 0.19}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.53, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.07, raise: 0.07}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.53, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.07, raise: 0.07}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.69, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.08, call: 0.92}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.69, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.08, call: 0.92}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.67, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.51, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.46, bet: 0.54}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.51, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.46, bet: 0.54}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.45, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.45, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.30, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.22, bet: 0.78}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.25, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.25, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.99, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.72, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.80, raise: 0.20}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.72, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.80, raise: 0.20}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.14, call: 0.86}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.76, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.02, call: 0.04, raise: 0.94}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.67, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.67, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.00, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.00, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.23, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.23, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.62, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.62, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.98, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.07, bet: 0.93}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.76, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.76, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.74, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.74, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.03, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.03, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.57, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.57, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.27, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.36, raise: 0.64}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.99, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.99, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.89, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.14, bet: 0.86}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.89, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.14, bet: 0.86}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.99, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.70, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.56, bet: 0.44}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.70, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.56, bet: 0.44}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.24, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.63, call: 0.37, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.24, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.63, call: 0.37, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.45, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.45, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.82, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.82, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.93, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.93, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.86, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.86, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.70, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.89, bet: 0.11}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.83, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.83, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.36, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.36, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.97, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.97, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.87, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.87, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.31, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.07, bet: 0.93}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.76, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.76, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.11, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.14}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.11, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.14}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.89, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.89, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.91, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.42, call: 0.58}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.91, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.42, call: 0.58}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.07, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.79, bet: 0.21}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.38, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.39, bet: 0.61}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.38, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.39, bet: 0.61}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.29, call: 0.68, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.29, call: 0.68, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.52, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.52, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.08, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.30, call: 0.70, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.08, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.30, call: 0.70, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.11, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.11, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.55, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.55, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.01, bet: 0.99}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.44, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.44, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.63, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.40, call: 0.60, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.63, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.40, call: 0.60, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.13, call: 0.01, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.13, call: 0.01, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.97, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.97, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.92, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.92, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.78, call: 0.00, raise: 0.22}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.78, call: 0.00, raise: 0.22}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.88, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.88, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.56, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.56, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.05}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.05}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.97, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.97, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.61, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.61, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.96, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.11, bet: 0.89}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -2.77, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -2.77, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.87, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.19, call: 0.81}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.87, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.19, call: 0.81}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.76, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.23, call: 0.73, raise: 0.04}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.76, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.23, call: 0.73, raise: 0.04}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.73, call: 0.27}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.73, call: 0.27}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.84, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.48, bet: 0.52}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.75, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.75, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.91, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.91, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.54, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.54, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.69, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.69, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.94, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.17, bet: 0.83}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.54, bet: 0.46}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.54, bet: 0.46}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.80, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.62, bet: 0.38}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.80, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.62, bet: 0.38}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.44, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.47, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.44, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.47, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.63, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.63, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.86, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.86, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.50, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.50, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.15, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.15, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.01, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.01, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.90, evRange: -3.80, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.90, evRange: -3.80, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.07, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.05, call: 0.05, raise: 0.90}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.97, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.06, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.97, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.06, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.42, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.42, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.37, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.32, bet: 0.68}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.37, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.32, bet: 0.68}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.32, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.03, bet: 0.97}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.28, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.15, call: 0.81, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.28, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.15, call: 0.81, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.95, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.95, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.22, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.22, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.36, call: 0.59, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.36, call: 0.59, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.63, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.49, call: 0.00, raise: 0.51}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.63, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.49, call: 0.00, raise: 0.51}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.16, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.16, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.16, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.51, bet: 0.49}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.51, bet: 0.49}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.51, bet: 0.49}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.83, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.83, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.83, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.31, call: 0.00, raise: 0.69}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.83, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.31, call: 0.00, raise: 0.69}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.51, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.51, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.43, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.43, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.42, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.42, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.31, evRange: -2.09, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.31, evRange: -2.09, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.33, evRange: 2.50, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -1.81, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -1.81, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.44, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.44, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.15, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.15, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.30, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.10, raise: 0.10}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.30, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.10, raise: 0.10}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 0.53, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.51, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.47, bet: 0.53}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.60, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.81, bet: 0.19}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.60, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.81, bet: 0.19}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.53, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.07, raise: 0.07}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.53, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.07, raise: 0.07}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.69, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.08, call: 0.92}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.69, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.08, call: 0.92}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.67, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.51, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.46, bet: 0.54}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.51, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.46, bet: 0.54}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.45, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.45, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.30, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.22, bet: 0.78}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.25, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.25, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.99, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.72, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.80, raise: 0.20}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.72, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.80, raise: 0.20}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.14, call: 0.86}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.76, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.02, call: 0.04, raise: 0.94}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.67, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.67, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.00, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.00, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.23, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.23, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.95, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.62, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.62, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.98, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.07, bet: 0.93}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.76, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.76, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.74, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.74, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.03, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.03, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.57, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.57, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.27, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.36, raise: 0.64}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.99, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.99, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.89, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.14, bet: 0.86}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.89, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.14, bet: 0.86}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.99, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.70, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.56, bet: 0.44}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.70, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.56, bet: 0.44}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.24, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.63, call: 0.37, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.24, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.63, call: 0.37, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.45, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.45, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.82, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.82, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.93, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.93, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.86, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.86, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.70, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.89, bet: 0.11}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.79, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.83, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.83, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.44, bet: 0.56}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.36, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.36, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.97, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.97, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.87, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.87, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -7.00, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.31, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.07, bet: 0.93}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.76, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.76, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.04, call: 0.96}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.11, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.14}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.11, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.86, call: 0.14}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.89, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.89, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.91, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.42, call: 0.58}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.91, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.42, call: 0.58}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.07, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.79, bet: 0.21}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.89, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.38, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.39, bet: 0.61}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.38, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.39, bet: 0.61}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.95, bet: 0.05}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.29, call: 0.68, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.29, call: 0.68, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.52, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.52, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.90, call: 0.00, raise: 0.10}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.08, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.30, call: 0.70, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.08, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.30, call: 0.70, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.11, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.11, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.55, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.55, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.01, bet: 0.99}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.44, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.44, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.63, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.40, call: 0.60, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.63, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.40, call: 0.60, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.13, call: 0.01, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.13, call: 0.01, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.97, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.97, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.92, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.92, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.78, call: 0.00, raise: 0.22}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.78, call: 0.00, raise: 0.22}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.88, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.88, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.56, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.56, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.05}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.05}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.97, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.97, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.61, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.61, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.96, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.11, bet: 0.89}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -2.77, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -2.77, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.87, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.19, call: 0.81}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.87, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.19, call: 0.81}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.76, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.23, call: 0.73, raise: 0.04}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.76, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.23, call: 0.73, raise: 0.04}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.73, call: 0.27}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.73, call: 0.27}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: 0.93, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.84, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.48, bet: 0.52}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.75, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.75, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.65, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.99, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.91, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.91, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.54, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.54, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.69, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.69, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.94, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.17, bet: 0.83}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.54, bet: 0.46}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.54, bet: 0.46}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.80, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.62, bet: 0.38}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.80, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.62, bet: 0.38}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.44, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.47, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.44, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.47, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.63, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.63, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.86, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.86, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.50, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.50, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.68, call: 0.32, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.15, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.15, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.01, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.01, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.91, bet: 0.09}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.90, evRange: -3.80, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.90, evRange: -3.80, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.07, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.05, call: 0.05, raise: 0.90}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.25, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.97, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.06, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.97, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.06, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.42, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.42, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.37, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.32, bet: 0.68}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.37, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.32, bet: 0.68}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.32, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.03, bet: 0.97}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.28, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.15, call: 0.81, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.28, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.15, call: 0.81, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.95, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.95, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.22, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.22, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.36, call: 0.59, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.16, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.36, call: 0.59, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.63, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.49, call: 0.00, raise: 0.51}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.63, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.49, call: 0.00, raise: 0.51}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.16, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.16, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.16, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.51, bet: 0.49}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.88, bet: 0.12}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.51, bet: 0.49}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.51, bet: 0.49}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.34, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.83, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.83, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.83, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.31, call: 0.00, raise: 0.69}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.83, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.31, call: 0.00, raise: 0.69}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.51, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.51, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.43, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.43, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.42, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.42, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
