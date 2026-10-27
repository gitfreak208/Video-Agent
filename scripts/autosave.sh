#!/usr/bin/env bash
# Auto-save conversation progress to the Video-Agent repo and push to GitHub.
# Invoked as a Claude Code "Stop" hook: it receives the hook JSON on stdin,
# copies the session transcript into the repo, then commits and pushes.
set -uo pipefail

REPO="/c/Users/mohit.bhatt/Video-Agent"

# Read the hook payload from stdin.
input="$(cat)"

# Pull transcript_path and session_id out of the JSON with Python (jq/node absent).
read -r transcript session <<EOF
$(printf '%s' "$input" | python -c "import sys,json
try:
    d=json.load(sys.stdin)
except Exception:
    d={}
print(d.get('transcript_path','') or '-', d.get('session_id','') or '-')" 2>/dev/null)
EOF

cd "$REPO" 2>/dev/null || exit 0

mkdir -p sessions

# Copy the raw transcript so the full conversation is captured verbatim.
if [ "${transcript:-}" != "-" ] && [ -n "${transcript:-}" ] && [ -f "$transcript" ]; then
  cp -f "$transcript" "sessions/${session:--unknown}.jsonl" 2>/dev/null || true
fi

git add -A 2>/dev/null || true

# Nothing staged? Then there is nothing to save this turn.
if git diff --cached --quiet 2>/dev/null; then
  exit 0
fi

stamp="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
git commit -q -m "autosave: $stamp (session ${session:--unknown})" 2>/dev/null || exit 0
git push -q origin main 2>/dev/null || true

exit 0
