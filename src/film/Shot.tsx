import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { DEFS } from "./primitives";
import { display, sans, mono } from "./fonts";
import { camera } from "./camera";
import type { Shot as ShotType } from "./shots";

// One shot: the ported SVG art, given an animated camera move, plus the VO line
// and (on a scene's first shot) a chapter label. Lives inside the 2.4:1 matte.
export const Shot: React.FC<{ shot: ShotType }> = ({ shot }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const p = durationInFrames > 1 ? frame / (durationInFrames - 1) : 0;
  const cam = camera(shot.move, p);

  // Full-frame type cards must fit exactly — no overscan, no camera drift.
  const isCard = shot.build === "gfx";

  // Big Shoulders loads under a different family name than the storyboard's
  // inline "Big Shoulders Display" — remap so the burnt-in titles use it.
  const art = shot.draw().split("Big Shoulders Display").join(display);

  // Gentle fades: lift from black on the very first shot, ride cuts otherwise.
  const fadeIn = interpolate(frame, [0, shot.id === "1A" ? 24 : 6], [shot.id === "1A" ? 0 : 0.35, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [durationInFrames - 6, durationInFrames], [1, shot.id === "5E" ? 0 : 0.55], {
    extrapolateLeft: "clamp",
  });
  const artOpacity = Math.min(fadeIn, fadeOut);

  // VO caption fade
  const capIn = interpolate(frame, [4, 16], [0, 1], { extrapolateRight: "clamp" });
  const capOut = interpolate(frame, [durationInFrames - 14, durationInFrames - 4], [1, 0], { extrapolateLeft: "clamp" });
  const capOpacity = Math.min(capIn, capOut);

  const showCaption = shot.vo && shot.vo !== "(continues)";

  // Chapter label on a scene's first shot
  const labelOpacity = interpolate(frame, [8, 24, 54, 72], [0, 1, 1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#000", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: isCard ? 0 : "-6%",
          transform: isCard
            ? "none"
            : `translate(${cam.x}%, ${cam.y}%) scale(${cam.scale}) rotate(${cam.rot}deg)`,
          transformOrigin: "center center",
          opacity: artOpacity,
        }}
      >
        <svg
          viewBox="0 0 240 100"
          preserveAspectRatio={isCard ? "xMidYMid meet" : "xMidYMid slice"}
          style={{ width: "100%", height: "100%", display: "block" }}
          dangerouslySetInnerHTML={{ __html: DEFS + art }}
        />
      </div>

      {shot.sceneStart ? (
        <div style={{ position: "absolute", left: 48, top: 40, opacity: labelOpacity }}>
          <div style={{ fontFamily: mono, fontSize: 18, letterSpacing: 4, color: "#F0B35C" }}>
            {String(shot.sceneNo).padStart(2, "0")}
          </div>
          <div style={{ fontFamily: display, fontWeight: 800, fontSize: 46, letterSpacing: 1, color: "#E4E8EC", textTransform: "uppercase", lineHeight: 1 }}>
            {shot.sceneTitle}
          </div>
        </div>
      ) : null}

      {showCaption ? (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 54, display: "flex", justifyContent: "center", opacity: capOpacity }}>
          <div style={{ fontFamily: sans, fontWeight: 500, fontSize: 30, lineHeight: 1.35, color: "#E4E8EC", maxWidth: "78%", textAlign: "center", textShadow: "0 2px 12px rgba(0,0,0,.85)" }}>
            {shot.vo}
          </div>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
