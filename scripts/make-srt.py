#!/usr/bin/env python3
"""make-srt.py - convert word-level JSON (faster-whisper) to SRT and VTT.

STUB: implement segment grouping to the caption spec (CLAUDE.md Section 6):
max 2 lines; 32 chars/line in 9:16, 42 in 16:9; sentence case; proper nouns
corrected against editorial/glossary.txt. SRT and VTT come from the same JSON.

Usage: make-srt.py <words.json> <out.srt> [out.vtt]
"""
import sys


def main() -> int:
    if len(sys.argv) < 3:
        print("usage: make-srt.py <words.json> <out.srt> [out.vtt]", file=sys.stderr)
        return 2
    print("make-srt.py: STUB - implement word-level JSON -> SRT/VTT grouping.",
          file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
