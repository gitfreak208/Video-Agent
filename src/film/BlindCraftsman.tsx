import React from "react";
import { AbsoluteFill, Series, useCurrentFrame } from "remotion";
import { SHOTS, FILM } from "./shots";
import { Shot } from "./Shot";

// Film grain via animated fractal noise.
const Grain: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ mixBlendMode: "overlay", opacity: 0.05, pointerEvents: "none" }}>
      <svg width="100%" height="100%">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={f % 17} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </AbsoluteFill>
  );
};

const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      pointerEvents: "none",
      background: "radial-gradient(ellipse 72% 90% at 50% 48%, rgba(0,0,0,0) 54%, rgba(0,0,0,0.55) 100%)",
    }}
  />
);

// The 2.4:1 matte inside 16:9 (1920x1080 -> content band 1920x800, 140px bars).
export const BlindCraftsman: React.FC = () => {
  const fps = FILM.fps;
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 140, height: 800, overflow: "hidden" }}>
        <Series>
          {SHOTS.map((s) => (
            <Series.Sequence key={s.id} durationInFrames={Math.round((s.tout - s.tin) * fps)}>
              <Shot shot={s} />
            </Series.Sequence>
          ))}
        </Series>
        <Vignette />
        <Grain />
      </div>
    </AbsoluteFill>
  );
};
