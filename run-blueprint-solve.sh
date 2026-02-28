#!/bin/bash
# Script to run production blueprint solve safely in tmux
#
# Usage:
#   ./run-blueprint-solve.sh          # Start in tmux
#   ./run-blueprint-solve.sh attach   # Attach to existing session
#   ./run-blueprint-solve.sh logs     # Tail logs

set -e

SESSION_NAME="blueprint-solve"
LOG_FILE="logs/nlhsolver.log"

case "${1:-start}" in
    start)
        # Check if session already exists
        if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
            echo "Session '$SESSION_NAME' already exists!"
            echo "Use './run-blueprint-solve.sh attach' to attach to it"
            echo "Or './run-blueprint-solve.sh kill' to terminate it"
            exit 1
        fi

        # Create logs directory
        mkdir -p logs data/blueprints data/strategies

        echo "Starting production blueprint solve in tmux session: $SESSION_NAME"
        echo ""
        echo "The solve will run in the background and survive terminal closure."
        echo ""
        echo "To monitor progress:"
        echo "  ./run-blueprint-solve.sh attach    # Attach to tmux session"
        echo "  ./run-blueprint-solve.sh logs      # Tail log file"
        echo ""
        echo "To detach from tmux: Press Ctrl+B, then D"
        echo ""
        echo "Starting in 3 seconds..."
        sleep 3

        # Start tmux session with the solve command (auto-answer "yes")
        tmux new-session -d -s "$SESSION_NAME" "cd $(pwd) && echo 'yes' | ./gradlew runProductionBlueprint --console=plain --no-daemon 2>&1 | tee logs/blueprint-solve-$(date +%Y%m%d-%H%M%S).log; echo 'Press Enter to close'; read"

        echo ""
        echo "✓ Session started!"
        echo ""
        echo "Attaching to session (use Ctrl+B then D to detach)..."
        sleep 2
        tmux attach-session -t "$SESSION_NAME"
        ;;

    attach)
        if ! tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
            echo "No session '$SESSION_NAME' found!"
            echo "Use './run-blueprint-solve.sh start' to start one"
            exit 1
        fi
        echo "Attaching to session $SESSION_NAME (Ctrl+B then D to detach)..."
        tmux attach-session -t "$SESSION_NAME"
        ;;

    logs)
        echo "Tailing $LOG_FILE (Ctrl+C to exit)..."
        echo ""
        tail -f "$LOG_FILE" 2>/dev/null || echo "Log file not found yet: $LOG_FILE"
        ;;

    kill)
        if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
            echo "Killing session $SESSION_NAME..."
            tmux kill-session -t "$SESSION_NAME"
            echo "✓ Session killed"
        else
            echo "No session '$SESSION_NAME' found"
        fi
        ;;

    status)
        if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
            echo "Session '$SESSION_NAME' is RUNNING"
            echo ""
            echo "Recent log output:"
            tail -20 "$LOG_FILE" 2>/dev/null || echo "(no logs yet)"
        else
            echo "Session '$SESSION_NAME' is NOT running"
        fi
        ;;

    *)
        echo "Usage: $0 {start|attach|logs|kill|status}"
        echo ""
        echo "  start   - Start blueprint solve in new tmux session"
        echo "  attach  - Attach to existing tmux session"
        echo "  logs    - Tail log file"
        echo "  kill    - Kill tmux session"
        echo "  status  - Check if session is running"
        exit 1
        ;;
esac
