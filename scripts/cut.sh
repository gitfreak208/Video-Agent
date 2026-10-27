#!/usr/bin/env bash
# cut.sh — frame-accurate cut (re-encode, never stream-copy) between in/out (Phase 6b, step 15).
# Timecodes as HH:MM:SS.mmm or seconds.
# Usage: cut.sh <input> <in_tc> <out_tc> <output.mp4>
set -euo pipefail
if [ $# -lt 4 ]; then echo "usage: cut.sh <input> <in_tc> <out_tc> <output.mp4>" >&2; exit 2; fi
in="$1"; tin="$2"; tout="$3"; out="$4"
[ -f "$in" ] || { echo "cut.sh: no such file: $in" >&2; exit 1; }
command -v ffmpeg >/dev/null 2>&1 || { echo "cut.sh: ffmpeg not found (install FFmpeg 6+)" >&2; exit 1; }
ffmpeg -y -i "$in" -ss "$tin" -to "$tout" \
  -c:v libx264 -crf 18 -preset medium -c:a aac -ar 48000 -ac 2 "$out"
echo "cut.sh: wrote $out ($tin -> $tout)" >&2
