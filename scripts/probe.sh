#!/usr/bin/env bash
# probe.sh — FFprobe a media file; print format + streams as JSON.
# Usage: probe.sh <media-file>
set -euo pipefail
if [ $# -lt 1 ]; then echo "usage: probe.sh <media-file>" >&2; exit 2; fi
f="$1"
[ -f "$f" ] || { echo "probe.sh: no such file: $f" >&2; exit 1; }
command -v ffprobe >/dev/null 2>&1 || { echo "probe.sh: ffprobe not found (install FFmpeg 6+)" >&2; exit 1; }
ffprobe -v error -show_format -show_streams -print_format json "$f"
echo "probe.sh: probed $f" >&2
