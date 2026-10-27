#!/usr/bin/env python3
"""contact-sheet.py - build a contact sheet for a clip (CLAUDE.md Phase 6b, step 8).

One frame per detected shot plus one every 10 s, timecode burned in, tiled to a grid.

STUB: wire PySceneDetect shot boundaries + FFmpeg frame extraction + tiling.

Usage: contact-sheet.py <clip> <out.png>
"""
import sys


def main() -> int:
    if len(sys.argv) < 3:
        print("usage: contact-sheet.py <clip> <out.png>", file=sys.stderr)
        return 2
    print("contact-sheet.py: STUB - implement shot detection + frame tiling.",
          file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
