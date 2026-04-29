// Recursive Leduc Tree Structure
// Each node contains its children, making navigation simple

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.38, freq: {check: 0.24, bet: 0.76} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 1.48, freq: {check: 0.24, bet: 0.76} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.55, freq: {check: 0.30, bet: 0.70} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.27, freq: {check: 0.30, bet: 0.70} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.05, freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -0.70, freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.34, freq: {check: 0.01, bet: 0.99} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 1.52, freq: {check: 0.01, bet: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.48, freq: {check: 0.14, bet: 0.86} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.22, freq: {check: 0.14, bet: 0.86} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -0.92, freq: {check: 0.70, bet: 0.30} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -0.78, freq: {check: 0.70, bet: 0.30} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.23, freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.23, freq: {check: 1.00, bet: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.76, freq: {check: 1.00, bet: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.76, freq: {check: 1.00, bet: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.06, freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.23, freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.23, freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.75, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.75, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.06, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.51, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.59, freq: {fold: 0.25, call: 0.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.59, freq: {fold: 0.25, call: 0.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.74, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.74, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.51, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.71, freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.71, freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.93, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.93, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.31, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -3.86, freq: {fold: 0.84, call: 0.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -3.86, freq: {fold: 0.84, call: 0.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.14, freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.14, freq: {check: 1.00, bet: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 2.23, freq: {check: 0.46, bet: 0.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.37, freq: {check: 0.78, bet: 0.22} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.37, freq: {check: 0.78, bet: 0.22} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.13, freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.13, freq: {check: 0.96, bet: 0.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 1.25, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.77, freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.77, freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.12, freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.12, freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 5.40, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.25, freq: {fold: 0.80, call: 0.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.25, freq: {fold: 0.80, call: 0.20} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 5.40, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.11, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.11, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -1.46, freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -1.46, freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 3.07, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.44, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.44, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.90, freq: {fold: 0.19, call: 0.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.90, freq: {fold: 0.19, call: 0.81} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.43, freq: {check: 0.01, bet: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.07, freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.07, freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.90, freq: {check: 0.93, bet: 0.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.90, freq: {check: 0.93, bet: 0.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.40, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.72, freq: {check: 0.66, bet: 0.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.72, freq: {check: 0.66, bet: 0.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.76, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.76, freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.04, freq: {fold: 0.00, call: 0.01, raise: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.24, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.24, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.31, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.31, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.52, freq: {fold: 0.97, call: 0.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.52, freq: {fold: 0.97, call: 0.03} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.43, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.65, freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.65, freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.73, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.73, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.23, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.23, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.22, freq: {fold: 0.88, call: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.22, freq: {fold: 0.88, call: 0.12} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.26, freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.05, freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.41, freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.59, freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.08, freq: {fold: 0.94, call: 0.04, raise: 0.02} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -0.93, freq: {fold: 0.94, call: 0.04, raise: 0.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.80, freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.80, freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.68, freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.68, freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.64, freq: {check: 0.30, bet: 0.70} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.80, freq: {check: 0.83, bet: 0.17} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.80, freq: {check: 0.83, bet: 0.17} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.67, freq: {check: 0.47, bet: 0.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.67, freq: {check: 0.47, bet: 0.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.74, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.74, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.74, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.06, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.06, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.78, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.78, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -6.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -6.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.18, freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.18, freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.42, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.42, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.60, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.41, freq: {fold: 0.94, call: 0.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.41, freq: {fold: 0.94, call: 0.06} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.37, freq: {check: 0.07, bet: 0.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.37, freq: {check: 0.07, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.33, freq: {check: 0.01, bet: 0.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.93, freq: {check: 0.04, bet: 0.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.93, freq: {check: 0.04, bet: 0.96} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.02, freq: {check: 0.75, bet: 0.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.02, freq: {check: 0.75, bet: 0.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.44, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.56, freq: {check: 0.55, bet: 0.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.56, freq: {check: 0.55, bet: 0.45} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.32, freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.32, freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.12, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.39, freq: {fold: 0.88, call: 0.00, raise: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.39, freq: {fold: 0.88, call: 0.00, raise: 0.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.53, freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.53, freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.12, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.21, freq: {fold: 0.96, call: 0.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.21, freq: {fold: 0.96, call: 0.04} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.40, freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.40, freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.32, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.95, freq: {fold: 1.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.95, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.54, freq: {check: 0.85, bet: 0.15} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.00, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.00, freq: {check: 0.99, bet: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.59, freq: {check: 0.95, bet: 0.05} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.59, freq: {check: 0.95, bet: 0.05} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.64, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.00, freq: {check: 0.71, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.00, freq: {check: 0.71, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.64, freq: {check: 0.48, bet: 0.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.64, freq: {check: 0.48, bet: 0.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.30, freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.30, freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.46, freq: {fold: 0.98, call: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.46, freq: {fold: 0.98, call: 0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.29, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.29, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.01, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.06, freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.06, freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.87, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.87, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.86, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.86, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.29, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.29, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.90, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.99, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -2.56, freq: {fold: 0.00, call: 1.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: 0.57, freq: {fold: 0.00, call: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.25, freq: {check: 0.95, bet: 0.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.25, freq: {check: 0.95, bet: 0.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.78, freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.78, freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.85, freq: {check: 0.05, bet: 0.95} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.26, freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.26, freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.86, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.18, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.18, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.87, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.50, freq: {fold: 0.09, call: 0.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.50, freq: {fold: 0.09, call: 0.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -6.57, freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -6.57, freq: {fold: 0.97, call: 0.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.87, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.04, freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.04, freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -4.57, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -4.57, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.85, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -4.45, freq: {fold: 0.63, call: 0.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -4.45, freq: {fold: 0.63, call: 0.37} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.03, freq: {fold: 0.96, call: 0.04} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.03, freq: {fold: 0.96, call: 0.04} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.32, freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.32, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.76, freq: {check: 0.93, bet: 0.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.87, freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.87, freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.32, freq: {check: 0.44, bet: 0.56} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.32, freq: {check: 0.44, bet: 0.56} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.72, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.87, freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.87, freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.02, freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.02, freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.77, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.35, freq: {fold: 0.85, call: 0.00, raise: 0.15} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.35, freq: {fold: 0.85, call: 0.00, raise: 0.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.65, freq: {fold: 0.62, call: 0.38} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.65, freq: {fold: 0.62, call: 0.38} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.77, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.70, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.70, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.14, freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.14, freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.29, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.83, freq: {fold: 0.75, call: 0.00, raise: 0.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.83, freq: {fold: 0.75, call: 0.00, raise: 0.25} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.61, freq: {fold: 0.48, call: 0.52} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.61, freq: {fold: 0.48, call: 0.52} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.05, freq: {fold: 0.94, call: 0.06} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.05, freq: {fold: 0.94, call: 0.06} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.30, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.04, freq: {check: 0.05, bet: 0.95} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.04, freq: {check: 0.05, bet: 0.95} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.27, freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.27, freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.00, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.52, freq: {check: 0.95, bet: 0.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.52, freq: {check: 0.95, bet: 0.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.36, freq: {check: 0.56, bet: 0.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.36, freq: {check: 0.56, bet: 0.44} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.50, freq: {fold: 0.00, call: 0.01, raise: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.39, freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.39, freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.93, freq: {fold: 0.78, call: 0.02, raise: 0.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.93, freq: {fold: 0.78, call: 0.02, raise: 0.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.52, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.91, freq: {fold: 0.74, call: 0.26} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.91, freq: {fold: 0.74, call: 0.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.63, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.63, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.30, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.07, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.07, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.22, freq: {fold: 0.83, call: 0.00, raise: 0.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.22, freq: {fold: 0.83, call: 0.00, raise: 0.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.85, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.85, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.39, freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 1.47, freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.58, freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.30, freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -2.52, freq: {fold: 0.82, call: 0.13, raise: 0.06} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: 0.24, freq: {fold: 0.82, call: 0.13, raise: 0.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.23, freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.23, freq: {check: 0.98, bet: 0.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.28, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.28, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.67, freq: {check: 0.07, bet: 0.93} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.23, freq: {check: 0.58, bet: 0.42} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.23, freq: {check: 0.58, bet: 0.42} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.26, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.26, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.70, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.69, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.69, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 8.99, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.78, freq: {fold: 0.01, call: 0.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.78, freq: {fold: 0.01, call: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -6.46, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -6.46, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.22, freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.22, freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.52, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.52, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.66, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.53, freq: {fold: 0.95, call: 0.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.53, freq: {fold: 0.95, call: 0.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.21, freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.21, freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.26, freq: {check: 0.44, bet: 0.56} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.25, freq: {check: 0.06, bet: 0.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.25, freq: {check: 0.06, bet: 0.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.22, freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.22, freq: {check: 0.96, bet: 0.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.98, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.94, freq: {check: 0.05, bet: 0.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.94, freq: {check: 0.05, bet: 0.95} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.59, freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.59, freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.79, freq: {fold: 0.96, call: 0.00, raise: 0.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.79, freq: {fold: 0.96, call: 0.00, raise: 0.04} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.41, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.41, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.16, freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.16, freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 3.71, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.13, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.13, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.74, freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.74, freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.89, freq: {check: 0.13, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.51, freq: {check: 0.48, bet: 0.52} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.51, freq: {check: 0.48, bet: 0.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.83, freq: {check: 0.02, bet: 0.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.83, freq: {check: 0.02, bet: 0.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.48, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.03, freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.03, freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.96, freq: {check: 0.64, bet: 0.36} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.96, freq: {check: 0.64, bet: 0.36} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.41, freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.41, freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 1.26, freq: {fold: 0.20, call: 0.01, raise: 0.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 1.26, freq: {fold: 0.20, call: 0.01, raise: 0.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.40, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.40, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.95, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.95, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.95, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.83, freq: {fold: 0.67, call: 0.00, raise: 0.33} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.83, freq: {fold: 0.67, call: 0.00, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -4.80, freq: {fold: 0.77, call: 0.23} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -4.80, freq: {fold: 0.77, call: 0.23} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: -0.07, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.44, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -2.99, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.61, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -3.17, freq: {fold: 0.01, call: 0.99} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: 0.17, freq: {fold: 0.01, call: 0.99} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.26, freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.26, freq: {check: 0.96, bet: 0.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {check: 0.03, bet: 0.97} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.28, freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.28, freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.22, freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.22, freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.98, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.28, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.28, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.51, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.51, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.02, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.21, freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.21, freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.07, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.07, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.54, freq: {fold: 0.47, call: 0.53} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.54, freq: {fold: 0.47, call: 0.53} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.40, freq: {check: 0.34, bet: 0.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.40, freq: {check: 0.34, bet: 0.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.84, freq: {check: 0.01, bet: 0.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.81, freq: {check: 0.88, bet: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.81, freq: {check: 0.88, bet: 0.12} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.28, freq: {check: 0.49, bet: 0.51} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.28, freq: {check: 0.49, bet: 0.51} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.61, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.04, freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.04, freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.26, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.42, freq: {fold: 0.45, call: 0.55} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.42, freq: {fold: 0.45, call: 0.55} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.26, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.73, freq: {fold: 0.92, call: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.73, freq: {fold: 0.92, call: 0.08} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.74, freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.74, freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.86, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.07, freq: {fold: 0.65, call: 0.00, raise: 0.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.07, freq: {fold: 0.65, call: 0.00, raise: 0.35} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -4.14, freq: {fold: 0.60, call: 0.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -4.14, freq: {fold: 0.60, call: 0.40} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.49, freq: {check: 0.44, bet: 0.56} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.21, freq: {check: 0.85, bet: 0.15} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.21, freq: {check: 0.85, bet: 0.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.53, freq: {check: 0.47, bet: 0.53} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.53, freq: {check: 0.47, bet: 0.53} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.92, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.42, freq: {check: 0.57, bet: 0.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.42, freq: {check: 0.57, bet: 0.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.88, freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.88, freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.16, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.96, freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.96, freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.82, freq: {fold: 0.25, call: 0.00, raise: 0.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.82, freq: {fold: 0.25, call: 0.00, raise: 0.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.16, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 3.38, freq: {fold: 0.93, call: 0.07} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 3.38, freq: {fold: 0.93, call: 0.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.75, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.75, freq: {fold: 0.99, call: 0.01} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.14, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.04, freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.04, freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.11, freq: {fold: 0.73, call: 0.00, raise: 0.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.11, freq: {fold: 0.73, call: 0.00, raise: 0.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.91, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.91, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.38, freq: {check: 0.24, bet: 0.76} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 1.48, freq: {check: 0.24, bet: 0.76} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.55, freq: {check: 0.30, bet: 0.70} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.27, freq: {check: 0.30, bet: 0.70} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.05, freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -0.70, freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.34, freq: {check: 0.01, bet: 0.99} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 1.52, freq: {check: 0.01, bet: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.48, freq: {check: 0.14, bet: 0.86} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.22, freq: {check: 0.14, bet: 0.86} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -0.92, freq: {check: 0.70, bet: 0.30} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -0.78, freq: {check: 0.70, bet: 0.30} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.23, freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.23, freq: {check: 1.00, bet: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.76, freq: {check: 1.00, bet: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.76, freq: {check: 1.00, bet: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.06, freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.23, freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.23, freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.75, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.75, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.06, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.51, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.59, freq: {fold: 0.25, call: 0.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.59, freq: {fold: 0.25, call: 0.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.74, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.74, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.51, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.71, freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.71, freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.93, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.93, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.31, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -3.86, freq: {fold: 0.84, call: 0.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -3.86, freq: {fold: 0.84, call: 0.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.14, freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.14, freq: {check: 1.00, bet: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 2.23, freq: {check: 0.46, bet: 0.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.37, freq: {check: 0.78, bet: 0.22} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.37, freq: {check: 0.78, bet: 0.22} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.13, freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.13, freq: {check: 0.96, bet: 0.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 1.25, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.77, freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.77, freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.12, freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.12, freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 5.40, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.25, freq: {fold: 0.80, call: 0.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.25, freq: {fold: 0.80, call: 0.20} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 5.40, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.11, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.11, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -1.46, freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -1.46, freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 3.07, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.44, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.44, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.90, freq: {fold: 0.19, call: 0.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.90, freq: {fold: 0.19, call: 0.81} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.43, freq: {check: 0.01, bet: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.07, freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.07, freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.90, freq: {check: 0.93, bet: 0.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.90, freq: {check: 0.93, bet: 0.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.40, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.72, freq: {check: 0.66, bet: 0.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.72, freq: {check: 0.66, bet: 0.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.76, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.76, freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.04, freq: {fold: 0.00, call: 0.01, raise: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.24, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.24, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.31, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.31, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.52, freq: {fold: 0.97, call: 0.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.52, freq: {fold: 0.97, call: 0.03} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.43, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.65, freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.65, freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.73, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.73, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.23, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.23, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.22, freq: {fold: 0.88, call: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.22, freq: {fold: 0.88, call: 0.12} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.26, freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.05, freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.41, freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.59, freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.08, freq: {fold: 0.94, call: 0.04, raise: 0.02} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -0.93, freq: {fold: 0.94, call: 0.04, raise: 0.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.80, freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.80, freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.68, freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.68, freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.64, freq: {check: 0.30, bet: 0.70} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.80, freq: {check: 0.83, bet: 0.17} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.80, freq: {check: 0.83, bet: 0.17} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.67, freq: {check: 0.47, bet: 0.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.67, freq: {check: 0.47, bet: 0.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.74, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.74, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.74, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.06, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.06, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.78, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.78, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -6.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -6.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.18, freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.18, freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.42, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.42, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.60, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.41, freq: {fold: 0.94, call: 0.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.41, freq: {fold: 0.94, call: 0.06} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.37, freq: {check: 0.07, bet: 0.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.37, freq: {check: 0.07, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.33, freq: {check: 0.01, bet: 0.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.93, freq: {check: 0.04, bet: 0.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.93, freq: {check: 0.04, bet: 0.96} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.02, freq: {check: 0.75, bet: 0.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.02, freq: {check: 0.75, bet: 0.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.44, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.56, freq: {check: 0.55, bet: 0.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.56, freq: {check: 0.55, bet: 0.45} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.32, freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.32, freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.12, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.39, freq: {fold: 0.88, call: 0.00, raise: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.39, freq: {fold: 0.88, call: 0.00, raise: 0.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.53, freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.53, freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.12, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.21, freq: {fold: 0.96, call: 0.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.21, freq: {fold: 0.96, call: 0.04} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.40, freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.40, freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.32, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.95, freq: {fold: 1.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.95, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.54, freq: {check: 0.85, bet: 0.15} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.00, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.00, freq: {check: 0.99, bet: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.59, freq: {check: 0.95, bet: 0.05} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.59, freq: {check: 0.95, bet: 0.05} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.64, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.00, freq: {check: 0.71, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.00, freq: {check: 0.71, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.64, freq: {check: 0.48, bet: 0.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.64, freq: {check: 0.48, bet: 0.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.30, freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.30, freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.46, freq: {fold: 0.98, call: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.46, freq: {fold: 0.98, call: 0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.29, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.29, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.01, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.06, freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.06, freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.87, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.87, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.86, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.86, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.29, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.29, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.90, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.99, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -2.56, freq: {fold: 0.00, call: 1.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: 0.57, freq: {fold: 0.00, call: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.25, freq: {check: 0.95, bet: 0.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.25, freq: {check: 0.95, bet: 0.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.78, freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.78, freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.85, freq: {check: 0.05, bet: 0.95} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.26, freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.26, freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.86, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.18, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.18, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.87, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.50, freq: {fold: 0.09, call: 0.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.50, freq: {fold: 0.09, call: 0.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -6.57, freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -6.57, freq: {fold: 0.97, call: 0.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.87, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.04, freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.04, freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -4.57, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -4.57, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.85, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -4.45, freq: {fold: 0.63, call: 0.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -4.45, freq: {fold: 0.63, call: 0.37} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.03, freq: {fold: 0.96, call: 0.04} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.03, freq: {fold: 0.96, call: 0.04} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.32, freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.32, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.76, freq: {check: 0.93, bet: 0.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.87, freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.87, freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.32, freq: {check: 0.44, bet: 0.56} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.32, freq: {check: 0.44, bet: 0.56} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.72, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.87, freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.87, freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.02, freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.02, freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.77, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.35, freq: {fold: 0.85, call: 0.00, raise: 0.15} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.35, freq: {fold: 0.85, call: 0.00, raise: 0.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.65, freq: {fold: 0.62, call: 0.38} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.65, freq: {fold: 0.62, call: 0.38} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.77, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.70, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.70, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.14, freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.14, freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.29, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.83, freq: {fold: 0.75, call: 0.00, raise: 0.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.83, freq: {fold: 0.75, call: 0.00, raise: 0.25} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.61, freq: {fold: 0.48, call: 0.52} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.61, freq: {fold: 0.48, call: 0.52} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.05, freq: {fold: 0.94, call: 0.06} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.05, freq: {fold: 0.94, call: 0.06} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.30, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.04, freq: {check: 0.05, bet: 0.95} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.04, freq: {check: 0.05, bet: 0.95} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.27, freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.27, freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.00, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.52, freq: {check: 0.95, bet: 0.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.52, freq: {check: 0.95, bet: 0.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.36, freq: {check: 0.56, bet: 0.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.36, freq: {check: 0.56, bet: 0.44} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.50, freq: {fold: 0.00, call: 0.01, raise: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.39, freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.39, freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.93, freq: {fold: 0.78, call: 0.02, raise: 0.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.93, freq: {fold: 0.78, call: 0.02, raise: 0.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.52, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.91, freq: {fold: 0.74, call: 0.26} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.91, freq: {fold: 0.74, call: 0.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.63, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.63, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.30, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.07, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.07, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.22, freq: {fold: 0.83, call: 0.00, raise: 0.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.22, freq: {fold: 0.83, call: 0.00, raise: 0.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.85, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.85, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.39, freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 1.47, freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.58, freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.30, freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -2.52, freq: {fold: 0.82, call: 0.13, raise: 0.06} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: 0.24, freq: {fold: 0.82, call: 0.13, raise: 0.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.23, freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.23, freq: {check: 0.98, bet: 0.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.28, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.28, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.67, freq: {check: 0.07, bet: 0.93} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.23, freq: {check: 0.58, bet: 0.42} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.23, freq: {check: 0.58, bet: 0.42} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.26, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.26, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.70, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.69, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.69, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 8.99, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.78, freq: {fold: 0.01, call: 0.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.78, freq: {fold: 0.01, call: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -6.46, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -6.46, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.22, freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.22, freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.52, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.52, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.66, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.53, freq: {fold: 0.95, call: 0.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.53, freq: {fold: 0.95, call: 0.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.21, freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.21, freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.26, freq: {check: 0.44, bet: 0.56} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.25, freq: {check: 0.06, bet: 0.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.25, freq: {check: 0.06, bet: 0.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.22, freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.22, freq: {check: 0.96, bet: 0.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.98, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.94, freq: {check: 0.05, bet: 0.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.94, freq: {check: 0.05, bet: 0.95} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.59, freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.59, freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.79, freq: {fold: 0.96, call: 0.00, raise: 0.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.79, freq: {fold: 0.96, call: 0.00, raise: 0.04} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.41, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.41, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.16, freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.16, freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 3.71, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.13, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.13, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.74, freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.74, freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.89, freq: {check: 0.13, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.51, freq: {check: 0.48, bet: 0.52} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.51, freq: {check: 0.48, bet: 0.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.83, freq: {check: 0.02, bet: 0.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.83, freq: {check: 0.02, bet: 0.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.48, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.03, freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.03, freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.96, freq: {check: 0.64, bet: 0.36} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.96, freq: {check: 0.64, bet: 0.36} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.41, freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.41, freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 1.26, freq: {fold: 0.20, call: 0.01, raise: 0.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 1.26, freq: {fold: 0.20, call: 0.01, raise: 0.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.40, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.40, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.95, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.95, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.95, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.83, freq: {fold: 0.67, call: 0.00, raise: 0.33} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.83, freq: {fold: 0.67, call: 0.00, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -4.80, freq: {fold: 0.77, call: 0.23} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -4.80, freq: {fold: 0.77, call: 0.23} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: -0.07, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.44, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -2.99, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.61, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -3.17, freq: {fold: 0.01, call: 0.99} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: 0.17, freq: {fold: 0.01, call: 0.99} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.26, freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.26, freq: {check: 0.96, bet: 0.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {check: 0.03, bet: 0.97} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.28, freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.28, freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.22, freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.22, freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.98, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.28, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.28, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.51, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.51, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.02, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.21, freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.21, freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.07, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.07, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.54, freq: {fold: 0.47, call: 0.53} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.54, freq: {fold: 0.47, call: 0.53} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.40, freq: {check: 0.34, bet: 0.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.40, freq: {check: 0.34, bet: 0.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.84, freq: {check: 0.01, bet: 0.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.81, freq: {check: 0.88, bet: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.81, freq: {check: 0.88, bet: 0.12} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.28, freq: {check: 0.49, bet: 0.51} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.28, freq: {check: 0.49, bet: 0.51} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.61, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.04, freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.04, freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.26, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.42, freq: {fold: 0.45, call: 0.55} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.42, freq: {fold: 0.45, call: 0.55} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.26, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.73, freq: {fold: 0.92, call: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.73, freq: {fold: 0.92, call: 0.08} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.74, freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.74, freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.86, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.07, freq: {fold: 0.65, call: 0.00, raise: 0.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.07, freq: {fold: 0.65, call: 0.00, raise: 0.35} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -4.14, freq: {fold: 0.60, call: 0.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -4.14, freq: {fold: 0.60, call: 0.40} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.49, freq: {check: 0.44, bet: 0.56} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.21, freq: {check: 0.85, bet: 0.15} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.21, freq: {check: 0.85, bet: 0.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.53, freq: {check: 0.47, bet: 0.53} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.53, freq: {check: 0.47, bet: 0.53} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.92, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.42, freq: {check: 0.57, bet: 0.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.42, freq: {check: 0.57, bet: 0.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.88, freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.88, freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.16, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.96, freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.96, freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.82, freq: {fold: 0.25, call: 0.00, raise: 0.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.82, freq: {fold: 0.25, call: 0.00, raise: 0.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.16, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 3.38, freq: {fold: 0.93, call: 0.07} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 3.38, freq: {fold: 0.93, call: 0.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.75, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.75, freq: {fold: 0.99, call: 0.01} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.14, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.04, freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.04, freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.11, freq: {fold: 0.73, call: 0.00, raise: 0.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.11, freq: {fold: 0.73, call: 0.00, raise: 0.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.91, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.91, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.38, freq: {check: 0.24, bet: 0.76} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 1.48, freq: {check: 0.24, bet: 0.76} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.55, freq: {check: 0.30, bet: 0.70} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.27, freq: {check: 0.30, bet: 0.70} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.05, freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -0.70, freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.34, freq: {check: 0.01, bet: 0.99} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 1.52, freq: {check: 0.01, bet: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.48, freq: {check: 0.14, bet: 0.86} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.22, freq: {check: 0.14, bet: 0.86} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -0.92, freq: {check: 0.70, bet: 0.30} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -0.78, freq: {check: 0.70, bet: 0.30} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.23, freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.23, freq: {check: 1.00, bet: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.76, freq: {check: 1.00, bet: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.76, freq: {check: 1.00, bet: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.06, freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.23, freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.23, freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.75, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.75, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.06, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.51, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.59, freq: {fold: 0.25, call: 0.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.59, freq: {fold: 0.25, call: 0.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.74, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.74, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.51, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.71, freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.71, freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.93, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.93, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.31, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -3.86, freq: {fold: 0.84, call: 0.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -3.86, freq: {fold: 0.84, call: 0.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.14, freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.14, freq: {check: 1.00, bet: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 2.23, freq: {check: 0.46, bet: 0.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.37, freq: {check: 0.78, bet: 0.22} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.37, freq: {check: 0.78, bet: 0.22} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.13, freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.13, freq: {check: 0.96, bet: 0.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 1.25, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.77, freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.77, freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.12, freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.12, freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 5.40, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.25, freq: {fold: 0.80, call: 0.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.25, freq: {fold: 0.80, call: 0.20} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 5.40, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.11, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.11, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -1.46, freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -1.46, freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 3.07, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.44, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.44, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.90, freq: {fold: 0.19, call: 0.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.90, freq: {fold: 0.19, call: 0.81} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.43, freq: {check: 0.01, bet: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.07, freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.07, freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.90, freq: {check: 0.93, bet: 0.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.90, freq: {check: 0.93, bet: 0.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.40, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.72, freq: {check: 0.66, bet: 0.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.72, freq: {check: 0.66, bet: 0.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.76, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.76, freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.04, freq: {fold: 0.00, call: 0.01, raise: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.24, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.24, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.31, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.31, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.52, freq: {fold: 0.97, call: 0.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.52, freq: {fold: 0.97, call: 0.03} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.43, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.65, freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.65, freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.73, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.73, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.23, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.23, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.22, freq: {fold: 0.88, call: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.22, freq: {fold: 0.88, call: 0.12} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.26, freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.05, freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.41, freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.59, freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.08, freq: {fold: 0.94, call: 0.04, raise: 0.02} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -0.93, freq: {fold: 0.94, call: 0.04, raise: 0.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.80, freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.80, freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.68, freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.68, freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.64, freq: {check: 0.30, bet: 0.70} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.80, freq: {check: 0.83, bet: 0.17} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.80, freq: {check: 0.83, bet: 0.17} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.67, freq: {check: 0.47, bet: 0.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.67, freq: {check: 0.47, bet: 0.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.74, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.74, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.74, freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.06, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.06, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.78, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.78, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -6.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -6.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.18, freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.18, freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.42, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.42, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.60, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.41, freq: {fold: 0.94, call: 0.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.41, freq: {fold: 0.94, call: 0.06} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.37, freq: {check: 0.07, bet: 0.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.37, freq: {check: 0.07, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.33, freq: {check: 0.01, bet: 0.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.93, freq: {check: 0.04, bet: 0.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.93, freq: {check: 0.04, bet: 0.96} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.02, freq: {check: 0.75, bet: 0.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.02, freq: {check: 0.75, bet: 0.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.44, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.56, freq: {check: 0.55, bet: 0.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.56, freq: {check: 0.55, bet: 0.45} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.32, freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.32, freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.12, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.39, freq: {fold: 0.88, call: 0.00, raise: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.39, freq: {fold: 0.88, call: 0.00, raise: 0.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.53, freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.53, freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.12, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.21, freq: {fold: 0.96, call: 0.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.21, freq: {fold: 0.96, call: 0.04} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.40, freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.40, freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.32, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.95, freq: {fold: 1.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.95, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.54, freq: {check: 0.85, bet: 0.15} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.00, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.00, freq: {check: 0.99, bet: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.59, freq: {check: 0.95, bet: 0.05} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.59, freq: {check: 0.95, bet: 0.05} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.64, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.00, freq: {check: 0.71, bet: 0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.00, freq: {check: 0.71, bet: 0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.64, freq: {check: 0.48, bet: 0.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.64, freq: {check: 0.48, bet: 0.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.30, freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.30, freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.46, freq: {fold: 0.98, call: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.46, freq: {fold: 0.98, call: 0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.29, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.29, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.01, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.06, freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.06, freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.87, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.87, freq: {fold: 0.98, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.86, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.86, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.29, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.29, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.90, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.99, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -2.56, freq: {fold: 0.00, call: 1.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: 0.57, freq: {fold: 0.00, call: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.25, freq: {check: 0.95, bet: 0.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.25, freq: {check: 0.95, bet: 0.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.78, freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.78, freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.85, freq: {check: 0.05, bet: 0.95} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.26, freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.26, freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.86, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.18, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.18, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.87, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.50, freq: {fold: 0.09, call: 0.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.50, freq: {fold: 0.09, call: 0.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -6.57, freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -6.57, freq: {fold: 0.97, call: 0.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.87, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.04, freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.04, freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -4.57, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -4.57, freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.85, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -4.45, freq: {fold: 0.63, call: 0.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -4.45, freq: {fold: 0.63, call: 0.37} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.03, freq: {fold: 0.96, call: 0.04} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.03, freq: {fold: 0.96, call: 0.04} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.32, freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.32, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.76, freq: {check: 0.93, bet: 0.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.87, freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.87, freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.32, freq: {check: 0.44, bet: 0.56} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.32, freq: {check: 0.44, bet: 0.56} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.72, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.87, freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.87, freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.02, freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.02, freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.77, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.35, freq: {fold: 0.85, call: 0.00, raise: 0.15} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.35, freq: {fold: 0.85, call: 0.00, raise: 0.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.65, freq: {fold: 0.62, call: 0.38} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.65, freq: {fold: 0.62, call: 0.38} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.77, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.70, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.70, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.14, freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.14, freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.29, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.83, freq: {fold: 0.75, call: 0.00, raise: 0.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.83, freq: {fold: 0.75, call: 0.00, raise: 0.25} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.61, freq: {fold: 0.48, call: 0.52} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.61, freq: {fold: 0.48, call: 0.52} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.05, freq: {fold: 0.94, call: 0.06} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.05, freq: {fold: 0.94, call: 0.06} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.30, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.04, freq: {check: 0.05, bet: 0.95} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.04, freq: {check: 0.05, bet: 0.95} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.27, freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.27, freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.00, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.52, freq: {check: 0.95, bet: 0.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.52, freq: {check: 0.95, bet: 0.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.36, freq: {check: 0.56, bet: 0.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.36, freq: {check: 0.56, bet: 0.44} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.50, freq: {fold: 0.00, call: 0.01, raise: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.39, freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.39, freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.93, freq: {fold: 0.78, call: 0.02, raise: 0.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.93, freq: {fold: 0.78, call: 0.02, raise: 0.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.52, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.91, freq: {fold: 0.74, call: 0.26} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.91, freq: {fold: 0.74, call: 0.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.63, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.63, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.30, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.07, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.07, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.22, freq: {fold: 0.83, call: 0.00, raise: 0.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.22, freq: {fold: 0.83, call: 0.00, raise: 0.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.85, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.85, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 0.39, freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 1.47, freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.58, freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.30, freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -2.52, freq: {fold: 0.82, call: 0.13, raise: 0.06} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: 0.24, freq: {fold: 0.82, call: 0.13, raise: 0.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.23, freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.23, freq: {check: 0.98, bet: 0.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.28, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.28, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.67, freq: {check: 0.07, bet: 0.93} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.23, freq: {check: 0.58, bet: 0.42} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.23, freq: {check: 0.58, bet: 0.42} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.26, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.26, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.70, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.69, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.69, freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 8.99, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.78, freq: {fold: 0.01, call: 0.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.78, freq: {fold: 0.01, call: 0.99} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -6.46, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -6.46, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.22, freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.22, freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.52, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.52, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.66, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.53, freq: {fold: 0.95, call: 0.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.53, freq: {fold: 0.95, call: 0.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.21, freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.21, freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.26, freq: {check: 0.44, bet: 0.56} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.25, freq: {check: 0.06, bet: 0.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.25, freq: {check: 0.06, bet: 0.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.22, freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.22, freq: {check: 0.96, bet: 0.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.98, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.94, freq: {check: 0.05, bet: 0.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.94, freq: {check: 0.05, bet: 0.95} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.59, freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.59, freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.79, freq: {fold: 0.96, call: 0.00, raise: 0.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.79, freq: {fold: 0.96, call: 0.00, raise: 0.04} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.41, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.41, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.16, freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.16, freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 3.71, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.13, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.13, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.74, freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.74, freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.89, freq: {check: 0.13, bet: 0.87} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.51, freq: {check: 0.48, bet: 0.52} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.51, freq: {check: 0.48, bet: 0.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.83, freq: {check: 0.02, bet: 0.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.83, freq: {check: 0.02, bet: 0.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.48, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.03, freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.03, freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.96, freq: {check: 0.64, bet: 0.36} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.96, freq: {check: 0.64, bet: 0.36} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.41, freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.41, freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 1.26, freq: {fold: 0.20, call: 0.01, raise: 0.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 1.26, freq: {fold: 0.20, call: 0.01, raise: 0.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.48, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.40, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.40, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.95, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.95, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.95, freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.83, freq: {fold: 0.67, call: 0.00, raise: 0.33} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.83, freq: {fold: 0.67, call: 0.00, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -4.80, freq: {fold: 0.77, call: 0.23} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -4.80, freq: {fold: 0.77, call: 0.23} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.01, freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: -0.07, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.44, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -2.99, freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: 0.61, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -3.17, freq: {fold: 0.01, call: 0.99} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: 0.17, freq: {fold: 0.01, call: 0.99} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.26, freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.26, freq: {check: 0.96, bet: 0.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {check: 0.03, bet: 0.97} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.28, freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.28, freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.77, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {check: 0.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.22, freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.22, freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.98, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.28, freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.28, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.51, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.51, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.02, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.21, freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.21, freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.07, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.07, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.54, freq: {fold: 0.47, call: 0.53} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.54, freq: {fold: 0.47, call: 0.53} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.40, freq: {check: 0.34, bet: 0.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.40, freq: {check: 0.34, bet: 0.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.84, freq: {check: 0.01, bet: 0.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.81, freq: {check: 0.88, bet: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.81, freq: {check: 0.88, bet: 0.12} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.28, freq: {check: 0.49, bet: 0.51} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.28, freq: {check: 0.49, bet: 0.51} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.61, freq: {check: 0.00, bet: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.78, freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.04, freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.04, freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.26, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.42, freq: {fold: 0.45, call: 0.55} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.42, freq: {fold: 0.45, call: 0.55} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.26, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.73, freq: {fold: 0.92, call: 0.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.73, freq: {fold: 0.92, call: 0.08} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.74, freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.74, freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.86, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.07, freq: {fold: 0.65, call: 0.00, raise: 0.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.07, freq: {fold: 0.65, call: 0.00, raise: 0.35} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -4.14, freq: {fold: 0.60, call: 0.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -4.14, freq: {fold: 0.60, call: 0.40} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.49, freq: {check: 0.44, bet: 0.56} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.21, freq: {check: 0.85, bet: 0.15} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.21, freq: {check: 0.85, bet: 0.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.53, freq: {check: 0.47, bet: 0.53} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.53, freq: {check: 0.47, bet: 0.53} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.92, freq: {check: 0.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.42, freq: {check: 0.57, bet: 0.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.42, freq: {check: 0.57, bet: 0.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.88, freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.88, freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.16, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.96, freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.96, freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.82, freq: {fold: 0.25, call: 0.00, raise: 0.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.82, freq: {fold: 0.25, call: 0.00, raise: 0.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.16, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 3.38, freq: {fold: 0.93, call: 0.07} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 3.38, freq: {fold: 0.93, call: 0.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 2.75, freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 2.75, freq: {fold: 0.99, call: 0.01} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.14, freq: {fold: 0.00, call: 0.00, raise: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.04, freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.04, freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.11, freq: {fold: 0.73, call: 0.00, raise: 0.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.11, freq: {fold: 0.73, call: 0.00, raise: 0.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.91, freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.91, freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00} },
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
