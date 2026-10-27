# Delivery — The Blind Craftsman (cinematic animatic)

**File:** `videos/2026-10-27_blind-craftsman/renders/final/blind-craftsman_16x9.mp4`
(not in git — heavy media is gitignored; reproducible from source, see below)

**Spec:** 1920×1080, 24 fps, H.264 (CRF 18), 108.0 s, ~19 MB, no audio.
Content is matted to 2.4:1 (140 px letterbox top/bottom), per the storyboard.

## What this is
A **cinematic animatic** built from the storyboard's own blocking sketches (ported to
Remotion), with animated camera moves reading each shot's intent, the VO as on-screen
text, chapter cards, your title/end cards, film grain, vignette, and tungsten palette.
All 24 shots, cut to the storyboard's exact timings.

## What it is NOT (honest scope)
- **Not the finished live-action + photoreal-CG film.** This toolchain makes motion
  graphics; it cannot film the eye/hands/faces or render photoreal halls, drones, cities.
- **Silent.** No TTS key configured, so the VO is on-screen text, not spoken. No music.
  The storyboard footer asks for a scratch VO before animation — add a TTS key (or a VO
  file) and this re-cuts to it.

## Re-render
Node + FFmpeg are portable under `C:\Users\mohit.bhatt\tools`. From the repo root:
```
$env:Path = 'C:\Users\mohit.bhatt\tools\node-v24.22.1-win-x64;' + $env:Path
npx remotion studio          # preview/scrub the composition "BlindCraftsman"
npx remotion render src/index.ts BlindCraftsman out.mp4 --codec=h264 --crf=18
```
Source: `src/film/` (shots.ts = data ported from the storyboard; Shot.tsx = camera +
captions; BlindCraftsman.tsx = matte + grain; primitives.ts = the SVG art).

## Next passes if wanted
- Scratch TTS VO (ElevenLabs/OpenAI key) + a music bed, then re-time to the read.
- A 3840×2160 master (bump the composition to 2160 and re-render).
- Swap any shot's sketch for a supplied Veo/live clip by dropping it into the shot.
