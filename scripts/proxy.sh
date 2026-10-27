#!/usr/bin/env bash
# proxy.sh — 720p single-codec proxy for editing decisions (Phase 6b).
# Usage: proxy.sh <input> <output.mp4> [fps]
set -euo pipefail
if [ $# -lt 2 ]; then echo "usage: proxy.sh <input> <output.mp4> [fps]" >&2; exit 2; fi
in="$1"; out="$2"; fps="${3:-30}"
[ -f "$in" ] || { echo "proxy.sh: no such file: $in" >&2; exit 1; }
command -v ffmpeg >/dev/null 2>&1 || { echo "proxy.sh: ffmpeg not found (install FFmpeg 6+)" >&2; exit 1; }
ffmpeg -y -i "$in" -vf "scale=-2:720,fps=$fps" \
  -c:v libx264 -crf 28 -preset veryfast -c:a aac -ar 48000 -ac 2 "$out"
echo "proxy.sh: wrote $out (720p @ ${fps}fps)" >&2
