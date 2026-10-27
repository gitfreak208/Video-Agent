# Intake — The Blind Craftsman

**Source:** supplied storyboard `The Blind Craftsman.html` (v1, FHE + ZK cut). Place the original file in `brief/` unchanged (I can't access the original bytes to copy them verbatim — see `brief/README.md`).

## Objective
A 1:48 YouTube hero film arguing that private AI agents can compute on your data while it stays encrypted (fully homomorphic encryption) and then prove the work ran correctly without revealing anything (zero-knowledge). Viewer takeaway: "intelligence that never has to see you."

## Audience
[inferred] Technically literate enterprise / privacy / AI audience. The piece is conceptual brand-film, not a product explainer. Not the agent's default institutional-finance audience.

## Format (as storyboarded)
- 3840×2160, **23.976 fps**, 2.39:1 anamorphic matte inside 16:9.
- Look: obsidian/tungsten/steel-blue, anamorphic flares, 35mm grain. Fonts: Big Shoulders Display + IBM Plex.
- **Diverges from the agent's defaults** (30 fps, 1080/2160 @ Rec.709) and **entirely from the Antier brand** (navy #022446 / blue #0b96da / Space Grotesk). This looks like a standalone hero film, not an Antier-branded asset. Needs confirming (Q2).
- VO ≈ 180 words at ~115 wpm.

## Capability assessment — the crux (CLAUDE.md Section 0)

This storyboard is a **live-action + photoreal-CG cinematic film**. This pipeline produces **motion-graphics / Remotion compositions**. Mapping the 24 shots by build tag:

| Build tag | Shots | Can this pipeline make it? |
|---|---|---|
| **Live** (real footage) | 1A eye, 1B desk, 1C docs, 1D phone, 3C/3E/3F face+hands, 4A insurer, 4B farmer, 5A woman | **No.** The agent cannot film. Live-action must be shot and supplied (Section 0). |
| **CG** (photoreal) | 2A–2F hall/cube/filaments, 3A/3B/3D box+seal+pedestal, 4C drone, 4D/4E/4F mesh, 5B city | **Not as specified.** Photoreal 3D environments, a recurring character and a volumetric cube are a 3D/VFX job, not Remotion motion graphics. |
| **GFX** (type/graphics) | 5C–5E title/end cards | **Yes**, natively. |

**Verdict (falsifiable):** this film as storyboarded cannot be delivered as a finished cinematic piece from the installed toolchain (Remotion + FFmpeg + TTS). Only the title/graphics shots are a direct fit. Claiming otherwise would be the "quiet downgrade" Section 0 forbids.

## What IS achievable here (nearest alternatives)
1. **Animatic / previz (recommended).** Animate the storyboard's own blocking sketches in Remotion at 2.39:1, cut to the exact shot timings, with the VO as scratch audio (TTS if a key is added) and on-screen slates. This is a real, useful deliverable — the storyboard's footer already asks for a scratch-VO cut before animation. It is previz, not the final film.
2. **Stylised motion-graphics reinterpretation.** Re-conceive the idea as a flat/graphic explainer in a buildable style (loses the photoreal cinematic look entirely). Would need a new creative pass, not this storyboard.
3. **Generative-video attempt (partial, gated).** With a video-gen key (Runway/Kling/Veo), generate some shots. Honest caveat: 24 narrative shots with a consistent character + cube + recurring seal is beyond reliable gen-video today, is costly (over the $10/run ceiling), and needs heavy human review. Not a path to a coherent finished film.
4. **Out of scope.** Treat it as a brief for a film crew + VFX house; this pipeline isn't the tool.

## Gate questions (Phase 2)
1. **Deliverable:** given the above, which of 1–4 do you want? (Default: #1, the Remotion animatic.)
2. **Brand:** keep the storyboard's cinematic look, or is this meant to carry Antier brand (navy/Space Grotesk)? (Default: keep the storyboard look; it's a standalone hero film.)
3. **Scratch VO:** want TTS scratch VO on the animatic? Needs an ElevenLabs/OpenAI key in `.env`. (Default: on-screen VO text only until a key is added.)

**No build starts until a deliverable is chosen and (for an animatic) this plan is approved.**
