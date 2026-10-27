#!/usr/bin/env bash
# normalise.sh — conform a clip to the project target before concatenation (Phase 6b, step 16).
# Usage: normalise.sh <input> <output.mp4> [WxH] [fps]
set -euo pipefail
if [ $# -lt 2 ]; then echo "usage: normalise.sh <input> <output.mp4> [WxH] [fps]" >&2; exit 2; fi
in="$1"; out="$2"; size="${3:-1920x1080}"; fps="${4:-30}"
[ -f "$in" ] || { echo "normalise.sh: no such file: $in" >&2; exit 1; }
command -v ffmpeg >/dev/null 2>&1 || { echo "normalise.sh: ffmpeg not found (install FFmpeg 6+)" >&2; exit 1; }
w="${size%x*}"; h="${size#*x}"
ffmpeg -y -i "$in" \
  -vf "scale=$w:$h:force_original_aspect_ratio=decrease,pad=$w:$h:(ow-iw)/2:(oh-ih)/2,fps=$fps,format=yuv420p" \
  -c:v libx264 -crf 18 -preset medium -c:a aac -ar 48000 -ac 2 "$out"
echo "normalise.sh: wrote $out ($size @ ${fps}fps, yuv420p, 48k stereo)" >&2
