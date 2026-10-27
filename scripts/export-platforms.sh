#!/usr/bin/env bash
# export-platforms.sh — derive platform exports from a master with two-pass loudnorm.
# STUB: implement the platform matrix (CLAUDE.md Phase 9 + Section 6) during build setup.
# Targets: -14 LUFS integrated, -1 dBTP true peak; aspect/resolution/duration per platform.
# Usage: export-platforms.sh <master.mp4> <platform> <output.mp4>
set -euo pipefail
if [ $# -lt 3 ]; then
  echo "usage: export-platforms.sh <master.mp4> <platform> <output.mp4>" >&2
  echo "platforms: youtube | shorts | reels | ig-feed | facebook | x" >&2
  exit 2
fi
master="$1"; platform="$2"; out="$3"
[ -f "$master" ] || { echo "export-platforms.sh: no such file: $master" >&2; exit 1; }
echo "export-platforms.sh: STUB — '$platform' export not yet implemented." >&2
echo "  Verify current platform specs (Phase 9 table), then implement two-pass" >&2
echo "  loudnorm to -14 LUFS / -1 dBTP at the correct aspect/resolution/duration," >&2
echo "  and write FFprobe output per file into export-log.json." >&2
exit 1
