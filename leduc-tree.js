// Recursive Leduc Tree Structure
// Each node contains its children, making navigation simple

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", freq: {check: 1.00, bet: 0.00} },
        { id: "Qa", label: "Q♠", freq: {check: 1.00, bet: 0.00} },
        { id: "Qb", label: "Q♥", freq: {check: 1.00, bet: 0.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.25, call: 0.75} },
        { id: "Kb", label: "K♥", freq: {fold: 0.25, call: 0.75} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.84, call: 0.16} },
        { id: "Kb", label: "K♥", freq: {fold: 0.84, call: 0.16} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", freq: {check: 1.00, bet: 0.00} },
        { id: "Ja", label: "J♠", freq: {check: 0.78, bet: 0.22} },
        { id: "Jb", label: "J♥", freq: {check: 0.78, bet: 0.22} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", freq: {check: 0.96, bet: 0.04} },
        { id: "Ja", label: "J♠", freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.80, call: 0.20} },
        { id: "Kb", label: "K♥", freq: {fold: 0.80, call: 0.20} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Jb", label: "J♥", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.19, call: 0.81} },
        { id: "Kb", label: "K♥", freq: {fold: 0.19, call: 0.81} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", freq: {check: 0.93, bet: 0.07} },
        { id: "Jb", label: "J♥", freq: {check: 0.93, bet: 0.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.66, bet: 0.34} },
        { id: "Qb", label: "Q♥", freq: {check: 0.66, bet: 0.34} },
        { id: "Ja", label: "J♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Jb", label: "J♥", freq: {fold: 0.97, call: 0.03} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.88, call: 0.12} },
        { id: "Jb", label: "J♥", freq: {fold: 0.88, call: 0.12} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.83, bet: 0.17} },
        { id: "Kb", label: "K♥", freq: {check: 0.83, bet: 0.17} },
        { id: "Qa", label: "Q♠", freq: {check: 0.47, bet: 0.53} },
        { id: "Qb", label: "Q♥", freq: {check: 0.47, bet: 0.53} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.94, call: 0.06} },
        { id: "Kb", label: "K♥", freq: {fold: 0.94, call: 0.06} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.07, bet: 0.93} },
        { id: "Kb", label: "K♥", freq: {check: 0.07, bet: 0.93} },
        { id: "Ja", label: "J♠", freq: {check: 0.04, bet: 0.96} },
        { id: "Jb", label: "J♥", freq: {check: 0.04, bet: 0.96} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.75, bet: 0.25} },
        { id: "Kb", label: "K♥", freq: {check: 0.75, bet: 0.25} },
        { id: "Ja", label: "J♠", freq: {check: 0.55, bet: 0.45} },
        { id: "Jb", label: "J♥", freq: {check: 0.55, bet: 0.45} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.88, call: 0.00, raise: 0.12} },
        { id: "Jb", label: "J♥", freq: {fold: 0.88, call: 0.00, raise: 0.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", freq: {fold: 0.97, call: 0.03} },
        { id: "Ja", label: "J♠", freq: {fold: 0.96, call: 0.04} },
        { id: "Jb", label: "J♥", freq: {fold: 0.96, call: 0.04} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.89, call: 0.00, raise: 0.11} },
        { id: "Jb", label: "J♥", freq: {fold: 0.89, call: 0.00, raise: 0.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 1.00, call: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Ja", label: "J♠", freq: {check: 0.95, bet: 0.05} },
        { id: "Jb", label: "J♥", freq: {check: 0.95, bet: 0.05} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.71, bet: 0.29} },
        { id: "Qb", label: "Q♥", freq: {check: 0.71, bet: 0.29} },
        { id: "Ja", label: "J♠", freq: {check: 0.48, bet: 0.52} },
        { id: "Jb", label: "J♥", freq: {check: 0.48, bet: 0.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.98, call: 0.02} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.98, call: 0.02} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.95, bet: 0.05} },
        { id: "Kb", label: "K♥", freq: {check: 0.95, bet: 0.05} },
        { id: "Qa", label: "Q♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.09, call: 0.91} },
        { id: "Kb", label: "K♥", freq: {fold: 0.09, call: 0.91} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.97, call: 0.03} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Kb", label: "K♥", freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.63, call: 0.37} },
        { id: "Kb", label: "K♥", freq: {fold: 0.63, call: 0.37} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.96, call: 0.04} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.96, call: 0.04} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Ja", label: "J♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.44, bet: 0.56} },
        { id: "Kb", label: "K♥", freq: {check: 0.44, bet: 0.56} },
        { id: "Ja", label: "J♠", freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Kb", label: "K♥", freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Ja", label: "J♠", freq: {fold: 0.85, call: 0.00, raise: 0.15} },
        { id: "Jb", label: "J♥", freq: {fold: 0.85, call: 0.00, raise: 0.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.62, call: 0.38} },
        { id: "Kb", label: "K♥", freq: {fold: 0.62, call: 0.38} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.75, call: 0.00, raise: 0.25} },
        { id: "Jb", label: "J♥", freq: {fold: 0.75, call: 0.00, raise: 0.25} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.48, call: 0.52} },
        { id: "Kb", label: "K♥", freq: {fold: 0.48, call: 0.52} },
        { id: "Ja", label: "J♠", freq: {fold: 0.94, call: 0.06} },
        { id: "Jb", label: "J♥", freq: {fold: 0.94, call: 0.06} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.05, bet: 0.95} },
        { id: "Qb", label: "Q♥", freq: {check: 0.05, bet: 0.95} },
        { id: "Ja", label: "J♠", freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.95, bet: 0.05} },
        { id: "Qb", label: "Q♥", freq: {check: 0.95, bet: 0.05} },
        { id: "Ja", label: "J♠", freq: {check: 0.56, bet: 0.44} },
        { id: "Jb", label: "J♥", freq: {check: 0.56, bet: 0.44} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Ja", label: "J♠", freq: {fold: 0.78, call: 0.02, raise: 0.20} },
        { id: "Jb", label: "J♥", freq: {fold: 0.78, call: 0.02, raise: 0.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.74, call: 0.26} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.74, call: 0.26} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.83, call: 0.00, raise: 0.17} },
        { id: "Jb", label: "J♥", freq: {fold: 0.83, call: 0.00, raise: 0.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", freq: {check: 0.98, bet: 0.02} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.58, bet: 0.42} },
        { id: "Kb", label: "K♥", freq: {check: 0.58, bet: 0.42} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.01, call: 0.99} },
        { id: "Kb", label: "K♥", freq: {fold: 0.01, call: 0.99} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.95, call: 0.05} },
        { id: "Kb", label: "K♥", freq: {fold: 0.95, call: 0.05} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", freq: {check: 0.98, bet: 0.02} },
        { id: "Ja", label: "J♠", freq: {check: 0.06, bet: 0.94} },
        { id: "Jb", label: "J♥", freq: {check: 0.06, bet: 0.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", freq: {check: 0.96, bet: 0.04} },
        { id: "Ja", label: "J♠", freq: {check: 0.05, bet: 0.95} },
        { id: "Jb", label: "J♥", freq: {check: 0.05, bet: 0.95} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.96, call: 0.00, raise: 0.04} },
        { id: "Jb", label: "J♥", freq: {fold: 0.96, call: 0.00, raise: 0.04} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", freq: {fold: 0.97, call: 0.03} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.48, bet: 0.52} },
        { id: "Qb", label: "Q♥", freq: {check: 0.48, bet: 0.52} },
        { id: "Ja", label: "J♠", freq: {check: 0.02, bet: 0.98} },
        { id: "Jb", label: "J♥", freq: {check: 0.02, bet: 0.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", freq: {check: 0.64, bet: 0.36} },
        { id: "Jb", label: "J♥", freq: {check: 0.64, bet: 0.36} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Ja", label: "J♠", freq: {fold: 0.20, call: 0.01, raise: 0.79} },
        { id: "Jb", label: "J♥", freq: {fold: 0.20, call: 0.01, raise: 0.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.67, call: 0.00, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.67, call: 0.00, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.77, call: 0.23} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.77, call: 0.23} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", freq: {check: 0.96, bet: 0.04} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.47, call: 0.53} },
        { id: "Kb", label: "K♥", freq: {fold: 0.47, call: 0.53} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.34, bet: 0.66} },
        { id: "Kb", label: "K♥", freq: {check: 0.34, bet: 0.66} },
        { id: "Ja", label: "J♠", freq: {check: 0.88, bet: 0.12} },
        { id: "Jb", label: "J♥", freq: {check: 0.88, bet: 0.12} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.49, bet: 0.51} },
        { id: "Kb", label: "K♥", freq: {check: 0.49, bet: 0.51} },
        { id: "Ja", label: "J♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.45, call: 0.55} },
        { id: "Kb", label: "K♥", freq: {fold: 0.45, call: 0.55} },
        { id: "Ja", label: "J♠", freq: {fold: 0.92, call: 0.08} },
        { id: "Jb", label: "J♥", freq: {fold: 0.92, call: 0.08} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Kb", label: "K♥", freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Ja", label: "J♠", freq: {fold: 0.65, call: 0.00, raise: 0.35} },
        { id: "Jb", label: "J♥", freq: {fold: 0.65, call: 0.00, raise: 0.35} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.60, call: 0.40} },
        { id: "Kb", label: "K♥", freq: {fold: 0.60, call: 0.40} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.85, bet: 0.15} },
        { id: "Qb", label: "Q♥", freq: {check: 0.85, bet: 0.15} },
        { id: "Ja", label: "J♠", freq: {check: 0.47, bet: 0.53} },
        { id: "Jb", label: "J♥", freq: {check: 0.47, bet: 0.53} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.57, bet: 0.43} },
        { id: "Qb", label: "Q♥", freq: {check: 0.57, bet: 0.43} },
        { id: "Ja", label: "J♠", freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.25, call: 0.00, raise: 0.75} },
        { id: "Jb", label: "J♥", freq: {fold: 0.25, call: 0.00, raise: 0.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.93, call: 0.07} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.93, call: 0.07} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.73, call: 0.00, raise: 0.27} },
        { id: "Jb", label: "J♥", freq: {fold: 0.73, call: 0.00, raise: 0.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", freq: {check: 1.00, bet: 0.00} },
        { id: "Qa", label: "Q♠", freq: {check: 1.00, bet: 0.00} },
        { id: "Qb", label: "Q♥", freq: {check: 1.00, bet: 0.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.25, call: 0.75} },
        { id: "Kb", label: "K♥", freq: {fold: 0.25, call: 0.75} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.84, call: 0.16} },
        { id: "Kb", label: "K♥", freq: {fold: 0.84, call: 0.16} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", freq: {check: 1.00, bet: 0.00} },
        { id: "Ja", label: "J♠", freq: {check: 0.78, bet: 0.22} },
        { id: "Jb", label: "J♥", freq: {check: 0.78, bet: 0.22} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", freq: {check: 0.96, bet: 0.04} },
        { id: "Ja", label: "J♠", freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.80, call: 0.20} },
        { id: "Kb", label: "K♥", freq: {fold: 0.80, call: 0.20} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Jb", label: "J♥", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.19, call: 0.81} },
        { id: "Kb", label: "K♥", freq: {fold: 0.19, call: 0.81} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", freq: {check: 0.93, bet: 0.07} },
        { id: "Jb", label: "J♥", freq: {check: 0.93, bet: 0.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.66, bet: 0.34} },
        { id: "Qb", label: "Q♥", freq: {check: 0.66, bet: 0.34} },
        { id: "Ja", label: "J♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Jb", label: "J♥", freq: {fold: 0.97, call: 0.03} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.88, call: 0.12} },
        { id: "Jb", label: "J♥", freq: {fold: 0.88, call: 0.12} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.83, bet: 0.17} },
        { id: "Kb", label: "K♥", freq: {check: 0.83, bet: 0.17} },
        { id: "Qa", label: "Q♠", freq: {check: 0.47, bet: 0.53} },
        { id: "Qb", label: "Q♥", freq: {check: 0.47, bet: 0.53} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.94, call: 0.06} },
        { id: "Kb", label: "K♥", freq: {fold: 0.94, call: 0.06} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.07, bet: 0.93} },
        { id: "Kb", label: "K♥", freq: {check: 0.07, bet: 0.93} },
        { id: "Ja", label: "J♠", freq: {check: 0.04, bet: 0.96} },
        { id: "Jb", label: "J♥", freq: {check: 0.04, bet: 0.96} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.75, bet: 0.25} },
        { id: "Kb", label: "K♥", freq: {check: 0.75, bet: 0.25} },
        { id: "Ja", label: "J♠", freq: {check: 0.55, bet: 0.45} },
        { id: "Jb", label: "J♥", freq: {check: 0.55, bet: 0.45} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.88, call: 0.00, raise: 0.12} },
        { id: "Jb", label: "J♥", freq: {fold: 0.88, call: 0.00, raise: 0.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", freq: {fold: 0.97, call: 0.03} },
        { id: "Ja", label: "J♠", freq: {fold: 0.96, call: 0.04} },
        { id: "Jb", label: "J♥", freq: {fold: 0.96, call: 0.04} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.89, call: 0.00, raise: 0.11} },
        { id: "Jb", label: "J♥", freq: {fold: 0.89, call: 0.00, raise: 0.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 1.00, call: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Ja", label: "J♠", freq: {check: 0.95, bet: 0.05} },
        { id: "Jb", label: "J♥", freq: {check: 0.95, bet: 0.05} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.71, bet: 0.29} },
        { id: "Qb", label: "Q♥", freq: {check: 0.71, bet: 0.29} },
        { id: "Ja", label: "J♠", freq: {check: 0.48, bet: 0.52} },
        { id: "Jb", label: "J♥", freq: {check: 0.48, bet: 0.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.98, call: 0.02} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.98, call: 0.02} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.95, bet: 0.05} },
        { id: "Kb", label: "K♥", freq: {check: 0.95, bet: 0.05} },
        { id: "Qa", label: "Q♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.09, call: 0.91} },
        { id: "Kb", label: "K♥", freq: {fold: 0.09, call: 0.91} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.97, call: 0.03} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Kb", label: "K♥", freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.63, call: 0.37} },
        { id: "Kb", label: "K♥", freq: {fold: 0.63, call: 0.37} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.96, call: 0.04} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.96, call: 0.04} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Ja", label: "J♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.44, bet: 0.56} },
        { id: "Kb", label: "K♥", freq: {check: 0.44, bet: 0.56} },
        { id: "Ja", label: "J♠", freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Kb", label: "K♥", freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Ja", label: "J♠", freq: {fold: 0.85, call: 0.00, raise: 0.15} },
        { id: "Jb", label: "J♥", freq: {fold: 0.85, call: 0.00, raise: 0.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.62, call: 0.38} },
        { id: "Kb", label: "K♥", freq: {fold: 0.62, call: 0.38} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.75, call: 0.00, raise: 0.25} },
        { id: "Jb", label: "J♥", freq: {fold: 0.75, call: 0.00, raise: 0.25} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.48, call: 0.52} },
        { id: "Kb", label: "K♥", freq: {fold: 0.48, call: 0.52} },
        { id: "Ja", label: "J♠", freq: {fold: 0.94, call: 0.06} },
        { id: "Jb", label: "J♥", freq: {fold: 0.94, call: 0.06} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.05, bet: 0.95} },
        { id: "Qb", label: "Q♥", freq: {check: 0.05, bet: 0.95} },
        { id: "Ja", label: "J♠", freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.95, bet: 0.05} },
        { id: "Qb", label: "Q♥", freq: {check: 0.95, bet: 0.05} },
        { id: "Ja", label: "J♠", freq: {check: 0.56, bet: 0.44} },
        { id: "Jb", label: "J♥", freq: {check: 0.56, bet: 0.44} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Ja", label: "J♠", freq: {fold: 0.78, call: 0.02, raise: 0.20} },
        { id: "Jb", label: "J♥", freq: {fold: 0.78, call: 0.02, raise: 0.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.74, call: 0.26} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.74, call: 0.26} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.83, call: 0.00, raise: 0.17} },
        { id: "Jb", label: "J♥", freq: {fold: 0.83, call: 0.00, raise: 0.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", freq: {check: 0.98, bet: 0.02} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.58, bet: 0.42} },
        { id: "Kb", label: "K♥", freq: {check: 0.58, bet: 0.42} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.01, call: 0.99} },
        { id: "Kb", label: "K♥", freq: {fold: 0.01, call: 0.99} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.95, call: 0.05} },
        { id: "Kb", label: "K♥", freq: {fold: 0.95, call: 0.05} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", freq: {check: 0.98, bet: 0.02} },
        { id: "Ja", label: "J♠", freq: {check: 0.06, bet: 0.94} },
        { id: "Jb", label: "J♥", freq: {check: 0.06, bet: 0.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", freq: {check: 0.96, bet: 0.04} },
        { id: "Ja", label: "J♠", freq: {check: 0.05, bet: 0.95} },
        { id: "Jb", label: "J♥", freq: {check: 0.05, bet: 0.95} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.96, call: 0.00, raise: 0.04} },
        { id: "Jb", label: "J♥", freq: {fold: 0.96, call: 0.00, raise: 0.04} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", freq: {fold: 0.97, call: 0.03} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.48, bet: 0.52} },
        { id: "Qb", label: "Q♥", freq: {check: 0.48, bet: 0.52} },
        { id: "Ja", label: "J♠", freq: {check: 0.02, bet: 0.98} },
        { id: "Jb", label: "J♥", freq: {check: 0.02, bet: 0.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", freq: {check: 0.64, bet: 0.36} },
        { id: "Jb", label: "J♥", freq: {check: 0.64, bet: 0.36} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Ja", label: "J♠", freq: {fold: 0.20, call: 0.01, raise: 0.79} },
        { id: "Jb", label: "J♥", freq: {fold: 0.20, call: 0.01, raise: 0.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.67, call: 0.00, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.67, call: 0.00, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.77, call: 0.23} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.77, call: 0.23} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", freq: {check: 0.96, bet: 0.04} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.47, call: 0.53} },
        { id: "Kb", label: "K♥", freq: {fold: 0.47, call: 0.53} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.34, bet: 0.66} },
        { id: "Kb", label: "K♥", freq: {check: 0.34, bet: 0.66} },
        { id: "Ja", label: "J♠", freq: {check: 0.88, bet: 0.12} },
        { id: "Jb", label: "J♥", freq: {check: 0.88, bet: 0.12} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.49, bet: 0.51} },
        { id: "Kb", label: "K♥", freq: {check: 0.49, bet: 0.51} },
        { id: "Ja", label: "J♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.45, call: 0.55} },
        { id: "Kb", label: "K♥", freq: {fold: 0.45, call: 0.55} },
        { id: "Ja", label: "J♠", freq: {fold: 0.92, call: 0.08} },
        { id: "Jb", label: "J♥", freq: {fold: 0.92, call: 0.08} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Kb", label: "K♥", freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Ja", label: "J♠", freq: {fold: 0.65, call: 0.00, raise: 0.35} },
        { id: "Jb", label: "J♥", freq: {fold: 0.65, call: 0.00, raise: 0.35} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.60, call: 0.40} },
        { id: "Kb", label: "K♥", freq: {fold: 0.60, call: 0.40} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.85, bet: 0.15} },
        { id: "Qb", label: "Q♥", freq: {check: 0.85, bet: 0.15} },
        { id: "Ja", label: "J♠", freq: {check: 0.47, bet: 0.53} },
        { id: "Jb", label: "J♥", freq: {check: 0.47, bet: 0.53} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.57, bet: 0.43} },
        { id: "Qb", label: "Q♥", freq: {check: 0.57, bet: 0.43} },
        { id: "Ja", label: "J♠", freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.25, call: 0.00, raise: 0.75} },
        { id: "Jb", label: "J♥", freq: {fold: 0.25, call: 0.00, raise: 0.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.93, call: 0.07} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.93, call: 0.07} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.73, call: 0.00, raise: 0.27} },
        { id: "Jb", label: "J♥", freq: {fold: 0.73, call: 0.00, raise: 0.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", freq: {check: 1.00, bet: 0.00} },
        { id: "Qa", label: "Q♠", freq: {check: 1.00, bet: 0.00} },
        { id: "Qb", label: "Q♥", freq: {check: 1.00, bet: 0.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.25, call: 0.75} },
        { id: "Kb", label: "K♥", freq: {fold: 0.25, call: 0.75} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.86, call: 0.13, raise: 0.01} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.84, call: 0.16} },
        { id: "Kb", label: "K♥", freq: {fold: 0.84, call: 0.16} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {check: 1.00, bet: 0.00} },
        { id: "Kb", label: "K♥", freq: {check: 1.00, bet: 0.00} },
        { id: "Ja", label: "J♠", freq: {check: 0.78, bet: 0.22} },
        { id: "Jb", label: "J♥", freq: {check: 0.78, bet: 0.22} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", freq: {check: 0.96, bet: 0.04} },
        { id: "Ja", label: "J♠", freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.61, call: 0.39, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.80, call: 0.20} },
        { id: "Kb", label: "K♥", freq: {fold: 0.80, call: 0.20} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.04, call: 0.96, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Jb", label: "J♥", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.19, call: 0.81} },
        { id: "Kb", label: "K♥", freq: {fold: 0.19, call: 0.81} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", freq: {check: 0.93, bet: 0.07} },
        { id: "Jb", label: "J♥", freq: {check: 0.93, bet: 0.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.66, bet: 0.34} },
        { id: "Qb", label: "Q♥", freq: {check: 0.66, bet: 0.34} },
        { id: "Ja", label: "J♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Jb", label: "J♥", freq: {fold: 0.97, call: 0.03} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.30, call: 0.69, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.88, call: 0.12} },
        { id: "Jb", label: "J♥", freq: {fold: 0.88, call: 0.12} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Qa", label: "Q♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.83, bet: 0.17} },
        { id: "Kb", label: "K♥", freq: {check: 0.83, bet: 0.17} },
        { id: "Qa", label: "Q♠", freq: {check: 0.47, bet: 0.53} },
        { id: "Qb", label: "Q♥", freq: {check: 0.47, bet: 0.53} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.22, call: 0.78, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.94, call: 0.06} },
        { id: "Kb", label: "K♥", freq: {fold: 0.94, call: 0.06} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.07, bet: 0.93} },
        { id: "Kb", label: "K♥", freq: {check: 0.07, bet: 0.93} },
        { id: "Ja", label: "J♠", freq: {check: 0.04, bet: 0.96} },
        { id: "Jb", label: "J♥", freq: {check: 0.04, bet: 0.96} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.75, bet: 0.25} },
        { id: "Kb", label: "K♥", freq: {check: 0.75, bet: 0.25} },
        { id: "Ja", label: "J♠", freq: {check: 0.55, bet: 0.45} },
        { id: "Jb", label: "J♥", freq: {check: 0.55, bet: 0.45} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.44, call: 0.56, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.88, call: 0.00, raise: 0.12} },
        { id: "Jb", label: "J♥", freq: {fold: 0.88, call: 0.00, raise: 0.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", freq: {fold: 0.97, call: 0.03} },
        { id: "Ja", label: "J♠", freq: {fold: 0.96, call: 0.04} },
        { id: "Jb", label: "J♥", freq: {fold: 0.96, call: 0.04} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.58, call: 0.41, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.89, call: 0.00, raise: 0.11} },
        { id: "Jb", label: "J♥", freq: {fold: 0.89, call: 0.00, raise: 0.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 1.00, call: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Ja", label: "J♠", freq: {check: 0.95, bet: 0.05} },
        { id: "Jb", label: "J♥", freq: {check: 0.95, bet: 0.05} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.71, bet: 0.29} },
        { id: "Qb", label: "Q♥", freq: {check: 0.71, bet: 0.29} },
        { id: "Ja", label: "J♠", freq: {check: 0.48, bet: 0.52} },
        { id: "Jb", label: "J♥", freq: {check: 0.48, bet: 0.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.43, call: 0.56, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.98, call: 0.02} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.98, call: 0.02} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.53, call: 0.46, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.98, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.95, bet: 0.05} },
        { id: "Kb", label: "K♥", freq: {check: 0.95, bet: 0.05} },
        { id: "Qa", label: "Q♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Qb", label: "Q♥", freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.09, call: 0.91} },
        { id: "Kb", label: "K♥", freq: {fold: 0.09, call: 0.91} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.97, call: 0.03} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Kb", label: "K♥", freq: {fold: 0.15, call: 0.83, raise: 0.02} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.97, call: 0.00, raise: 0.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.63, call: 0.37} },
        { id: "Kb", label: "K♥", freq: {fold: 0.63, call: 0.37} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.96, call: 0.04} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.96, call: 0.04} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Kb", label: "K♥", freq: {check: 0.99, bet: 0.01} },
        { id: "Ja", label: "J♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Jb", label: "J♥", freq: {check: 0.98, bet: 0.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.44, bet: 0.56} },
        { id: "Kb", label: "K♥", freq: {check: 0.44, bet: 0.56} },
        { id: "Ja", label: "J♠", freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Kb", label: "K♥", freq: {fold: 0.31, call: 0.67, raise: 0.02} },
        { id: "Ja", label: "J♠", freq: {fold: 0.85, call: 0.00, raise: 0.15} },
        { id: "Jb", label: "J♥", freq: {fold: 0.85, call: 0.00, raise: 0.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.62, call: 0.38} },
        { id: "Kb", label: "K♥", freq: {fold: 0.62, call: 0.38} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.37, call: 0.62, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.75, call: 0.00, raise: 0.25} },
        { id: "Jb", label: "J♥", freq: {fold: 0.75, call: 0.00, raise: 0.25} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.48, call: 0.52} },
        { id: "Kb", label: "K♥", freq: {fold: 0.48, call: 0.52} },
        { id: "Ja", label: "J♠", freq: {fold: 0.94, call: 0.06} },
        { id: "Jb", label: "J♥", freq: {fold: 0.94, call: 0.06} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.05, bet: 0.95} },
        { id: "Qb", label: "Q♥", freq: {check: 0.05, bet: 0.95} },
        { id: "Ja", label: "J♠", freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.95, bet: 0.05} },
        { id: "Qb", label: "Q♥", freq: {check: 0.95, bet: 0.05} },
        { id: "Ja", label: "J♠", freq: {check: 0.56, bet: 0.44} },
        { id: "Jb", label: "J♥", freq: {check: 0.56, bet: 0.44} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.26, call: 0.69, raise: 0.05} },
        { id: "Ja", label: "J♠", freq: {fold: 0.78, call: 0.02, raise: 0.20} },
        { id: "Jb", label: "J♥", freq: {fold: 0.78, call: 0.02, raise: 0.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.74, call: 0.26} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.74, call: 0.26} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.83, call: 0.00, raise: 0.17} },
        { id: "Jb", label: "J♥", freq: {fold: 0.83, call: 0.00, raise: 0.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", freq: {check: 0.98, bet: 0.02} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.58, bet: 0.42} },
        { id: "Kb", label: "K♥", freq: {check: 0.58, bet: 0.42} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.01, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.01, call: 0.99} },
        { id: "Kb", label: "K♥", freq: {fold: 0.01, call: 0.99} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.20, call: 0.79, raise: 0.01} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.95, call: 0.05} },
        { id: "Kb", label: "K♥", freq: {fold: 0.95, call: 0.05} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.98, bet: 0.02} },
        { id: "Kb", label: "K♥", freq: {check: 0.98, bet: 0.02} },
        { id: "Ja", label: "J♠", freq: {check: 0.06, bet: 0.94} },
        { id: "Jb", label: "J♥", freq: {check: 0.06, bet: 0.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", freq: {check: 0.96, bet: 0.04} },
        { id: "Ja", label: "J♠", freq: {check: 0.05, bet: 0.95} },
        { id: "Jb", label: "J♥", freq: {check: 0.05, bet: 0.95} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.49, call: 0.50, raise: 0.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.96, call: 0.00, raise: 0.04} },
        { id: "Jb", label: "J♥", freq: {fold: 0.96, call: 0.00, raise: 0.04} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.68, call: 0.31, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.97, call: 0.03} },
        { id: "Kb", label: "K♥", freq: {fold: 0.97, call: 0.03} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.48, bet: 0.52} },
        { id: "Qb", label: "Q♥", freq: {check: 0.48, bet: 0.52} },
        { id: "Ja", label: "J♠", freq: {check: 0.02, bet: 0.98} },
        { id: "Jb", label: "J♥", freq: {check: 0.02, bet: 0.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.63, bet: 0.37} },
        { id: "Qb", label: "Q♥", freq: {check: 0.63, bet: 0.37} },
        { id: "Ja", label: "J♠", freq: {check: 0.64, bet: 0.36} },
        { id: "Jb", label: "J♥", freq: {check: 0.64, bet: 0.36} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.46, call: 0.52, raise: 0.02} },
        { id: "Ja", label: "J♠", freq: {fold: 0.20, call: 0.01, raise: 0.79} },
        { id: "Jb", label: "J♥", freq: {fold: 0.20, call: 0.01, raise: 0.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.70, call: 0.29, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.67, call: 0.00, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.67, call: 0.00, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.77, call: 0.23} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.77, call: 0.23} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.96, bet: 0.04} },
        { id: "Kb", label: "K♥", freq: {check: 0.96, bet: 0.04} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.52, bet: 0.48} },
        { id: "Kb", label: "K♥", freq: {check: 0.52, bet: 0.48} },
        { id: "Qa", label: "Q♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Qb", label: "Q♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 0.99, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.07, call: 0.93, raise: 0.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.47, call: 0.53} },
        { id: "Kb", label: "K♥", freq: {fold: 0.47, call: 0.53} },
        { id: "Qa", label: "Q♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.34, bet: 0.66} },
        { id: "Kb", label: "K♥", freq: {check: 0.34, bet: 0.66} },
        { id: "Ja", label: "J♠", freq: {check: 0.88, bet: 0.12} },
        { id: "Jb", label: "J♥", freq: {check: 0.88, bet: 0.12} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.49, bet: 0.51} },
        { id: "Kb", label: "K♥", freq: {check: 0.49, bet: 0.51} },
        { id: "Ja", label: "J♠", freq: {check: 0.99, bet: 0.01} },
        { id: "Jb", label: "J♥", freq: {check: 0.99, bet: 0.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Kb", label: "K♥", freq: {fold: 0.03, call: 0.96, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.45, call: 0.55} },
        { id: "Kb", label: "K♥", freq: {fold: 0.45, call: 0.55} },
        { id: "Ja", label: "J♠", freq: {fold: 0.92, call: 0.08} },
        { id: "Jb", label: "J♥", freq: {fold: 0.92, call: 0.08} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Kb", label: "K♥", freq: {fold: 0.38, call: 0.51, raise: 0.12} },
        { id: "Ja", label: "J♠", freq: {fold: 0.65, call: 0.00, raise: 0.35} },
        { id: "Jb", label: "J♥", freq: {fold: 0.65, call: 0.00, raise: 0.35} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.60, call: 0.40} },
        { id: "Kb", label: "K♥", freq: {fold: 0.60, call: 0.40} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
        { id: "Qa", label: "Q♠", freq: {check: 0.85, bet: 0.15} },
        { id: "Qb", label: "Q♥", freq: {check: 0.85, bet: 0.15} },
        { id: "Ja", label: "J♠", freq: {check: 0.47, bet: 0.53} },
        { id: "Jb", label: "J♥", freq: {check: 0.47, bet: 0.53} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {check: 0.57, bet: 0.43} },
        { id: "Qb", label: "Q♥", freq: {check: 0.57, bet: 0.43} },
        { id: "Ja", label: "J♠", freq: {check: 0.01, bet: 0.99} },
        { id: "Jb", label: "J♥", freq: {check: 0.01, bet: 0.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.72, call: 0.27, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.25, call: 0.00, raise: 0.75} },
        { id: "Jb", label: "J♥", freq: {fold: 0.25, call: 0.00, raise: 0.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.93, call: 0.07} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.93, call: 0.07} },
        { id: "Ja", label: "J♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Jb", label: "J♥", freq: {fold: 0.99, call: 0.01} },
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
        { id: "Qa", label: "Q♠", freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.48, call: 0.51, raise: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 0.73, call: 0.00, raise: 0.27} },
        { id: "Jb", label: "J♥", freq: {fold: 0.73, call: 0.00, raise: 0.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Qa", label: "Q♠", freq: {fold: 0.99, call: 0.01} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.99, call: 0.01} },
        { id: "Ja", label: "J♠", freq: {fold: 1.00, call: 0.00} },
        { id: "Jb", label: "J♥", freq: {fold: 1.00, call: 0.00} },
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
