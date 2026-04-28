// Recursive Leduc Tree Structure
// Each node contains its children, making navigation simple

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.24, bet: 0.76} },
        { id: "Kb", label: "K♥", freq: {check: 0.24, bet: 0.76} },
        { id: "Qa", label: "Q♠", freq: {check: 0.30, bet: 0.70} },
        { id: "Qb", label: "Q♥", freq: {check: 0.30, bet: 0.70} },
        { id: "Ja", label: "J♠", freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.01, bet: 0.99} },
        { id: "Kb", label: "K♥", freq: {check: 0.01, bet: 0.99} },
        { id: "Qa", label: "Q♠", freq: {check: 0.14, bet: 0.86} },
        { id: "Qb", label: "Q♥", freq: {check: 0.14, bet: 0.86} },
        { id: "Ja", label: "J♠", freq: {check: 0.70, bet: 0.30} },
        { id: "Jb", label: "J♥", freq: {check: 0.70, bet: 0.30} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Ja", label: "J♠", freq: {fold: 0.94, call: 0.04, raise: 0.02} },
        { id: "Jb", label: "J♥", freq: {fold: 0.94, call: 0.04, raise: 0.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Jb", label: "J♥", freq: {fold: 0.00, call: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Ja", label: "J♠", freq: {fold: 0.82, call: 0.13, raise: 0.06} },
        { id: "Jb", label: "J♥", freq: {fold: 0.82, call: 0.13, raise: 0.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.01, call: 0.99} },
        { id: "Jb", label: "J♥", freq: {fold: 0.01, call: 0.99} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.24, bet: 0.76} },
        { id: "Kb", label: "K♥", freq: {check: 0.24, bet: 0.76} },
        { id: "Qa", label: "Q♠", freq: {check: 0.30, bet: 0.70} },
        { id: "Qb", label: "Q♥", freq: {check: 0.30, bet: 0.70} },
        { id: "Ja", label: "J♠", freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.01, bet: 0.99} },
        { id: "Kb", label: "K♥", freq: {check: 0.01, bet: 0.99} },
        { id: "Qa", label: "Q♠", freq: {check: 0.14, bet: 0.86} },
        { id: "Qb", label: "Q♥", freq: {check: 0.14, bet: 0.86} },
        { id: "Ja", label: "J♠", freq: {check: 0.70, bet: 0.30} },
        { id: "Jb", label: "J♥", freq: {check: 0.70, bet: 0.30} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Ja", label: "J♠", freq: {fold: 0.94, call: 0.04, raise: 0.02} },
        { id: "Jb", label: "J♥", freq: {fold: 0.94, call: 0.04, raise: 0.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Jb", label: "J♥", freq: {fold: 0.00, call: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Ja", label: "J♠", freq: {fold: 0.82, call: 0.13, raise: 0.06} },
        { id: "Jb", label: "J♥", freq: {fold: 0.82, call: 0.13, raise: 0.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.01, call: 0.99} },
        { id: "Jb", label: "J♥", freq: {fold: 0.01, call: 0.99} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.24, bet: 0.76} },
        { id: "Kb", label: "K♥", freq: {check: 0.24, bet: 0.76} },
        { id: "Qa", label: "Q♠", freq: {check: 0.30, bet: 0.70} },
        { id: "Qb", label: "Q♥", freq: {check: 0.30, bet: 0.70} },
        { id: "Ja", label: "J♠", freq: {check: 0.92, bet: 0.08} },
        { id: "Jb", label: "J♥", freq: {check: 0.92, bet: 0.08} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.01, bet: 0.99} },
        { id: "Kb", label: "K♥", freq: {check: 0.01, bet: 0.99} },
        { id: "Qa", label: "Q♠", freq: {check: 0.14, bet: 0.86} },
        { id: "Qb", label: "Q♥", freq: {check: 0.14, bet: 0.86} },
        { id: "Ja", label: "J♠", freq: {check: 0.70, bet: 0.30} },
        { id: "Jb", label: "J♥", freq: {check: 0.70, bet: 0.30} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 0.37, raise: 0.63} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.01, call: 0.86, raise: 0.13} },
        { id: "Ja", label: "J♠", freq: {fold: 0.94, call: 0.04, raise: 0.02} },
        { id: "Jb", label: "J♥", freq: {fold: 0.94, call: 0.04, raise: 0.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Jb", label: "J♥", freq: {fold: 0.00, call: 1.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 0.41, raise: 0.59} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.01, call: 0.62, raise: 0.38} },
        { id: "Ja", label: "J♠", freq: {fold: 0.82, call: 0.13, raise: 0.06} },
        { id: "Jb", label: "J♥", freq: {fold: 0.82, call: 0.13, raise: 0.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Kb", label: "K♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.00, call: 1.00} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.00, call: 1.00} },
        { id: "Ja", label: "J♠", freq: {fold: 0.01, call: 0.99} },
        { id: "Jb", label: "J♥", freq: {fold: 0.01, call: 0.99} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Ka", label: "K♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Qa", label: "Q♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Qb", label: "Q♥", freq: {check: 0.50, bet: 0.50} },
        { id: "Ja", label: "J♠", freq: {check: 0.50, bet: 0.50} },
        { id: "Jb", label: "J♥", freq: {check: 0.50, bet: 0.50} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
        { id: "Kb", label: "K♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Ja", label: "J♠", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
        { id: "Jb", label: "J♥", freq: {fold: 0.33, call: 0.33, raise: 0.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Qa", label: "Q♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Qb", label: "Q♥", freq: {fold: 0.50, call: 0.50} },
        { id: "Ja", label: "J♠", freq: {fold: 0.50, call: 0.50} },
        { id: "Jb", label: "J♥", freq: {fold: 0.50, call: 0.50} },
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
