// Recursive Leduc Tree Structure
// Subgame refinement (5M baseline + 2M bc|xb)

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.50, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.83, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.50, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.83, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
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
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
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
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.50, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 1.83, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.50, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.83, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.50, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.83, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
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
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
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
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.50, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 1.83, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.08, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.50, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.83, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.50, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.83, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
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
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
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
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.50, evRange: 2.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.53, evRange: 0.53, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.77, bet: 0.29}, evA: {check: 0.77, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.09, evRange: -2.09, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.31, bet: -2.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 1.83, evRange: 1.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.80, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.27, evRange: 0.27, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.00, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.81, evRange: -1.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.80, bet: -2.87} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.67, evRange: 3.67, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: 1.29, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 0.00, raise: 3.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.88, evRange: -1.88, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.00, raise: -0.88} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.38, evRange: -1.37, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.88, evRange: -5.87, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.20} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.17, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: 0.93, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.98, bet: 0.87}, evA: {check: 0.98, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.95, evRange: -2.95, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.60, bet: -3.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.50, evRange: 3.50, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.40, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.81, evRange: 0.81, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 0.75, bet: 0.87}, evA: {check: 0.00, bet: 0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.77, evRange: -2.77, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.40, bet: -3.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.60, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: 1.21, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 0.00, raise: 4.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.96, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.60, raise: -0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -2.13, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -7.63, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.80} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.50, evRange: -1.50, rangeWeight: 0.17, freq: {fold: 0.50, call: 0.50}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.32, evRange: 1.32, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.19, bet: 1.46}, evA: {check: 1.19, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -3.80, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.90, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.35, evRange: 1.35, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.00, bet: 1.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -3.73, rangeWeight: 0.20, freq: {check: 0.50, bet: 0.50}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.00, bet: -3.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.00, evRange: 5.00, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 7.20, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.13, evRange: 1.13, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 0.00, raise: 6.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.04, evRange: -4.04, rangeWeight: 0.20, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -7.20, raise: -0.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.88, evRange: -2.88, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.38, evRange: -9.38, rangeWeight: 0.20, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.40} },
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
