import React from "react";
import { Composition } from "remotion";
import { DIMENSIONS, FPS } from "./brand";
import { SmokeTest } from "./SmokeTest";
import { BlindCraftsman } from "./film/BlindCraftsman";
import { FILM } from "./film/shots";

const DURATION = 300; // 10 s at 30 fps

// Two root compositions, one per master (CLAUDE.md Phase 1b: no cropping — each
// ratio is designed, here via the shared `layout` prop).
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SmokeTest-16x9"
        component={SmokeTest}
        durationInFrames={DURATION}
        fps={FPS}
        width={DIMENSIONS["16x9"].width}
        height={DIMENSIONS["16x9"].height}
        defaultProps={{ layout: "16x9" as const }}
      />
      <Composition
        id="SmokeTest-9x16"
        component={SmokeTest}
        durationInFrames={DURATION}
        fps={FPS}
        width={DIMENSIONS["9x16"].width}
        height={DIMENSIONS["9x16"].height}
        defaultProps={{ layout: "9x16" as const }}
      />
      <Composition
        id="BlindCraftsman"
        component={BlindCraftsman}
        durationInFrames={Math.round(FILM.totalSeconds * FILM.fps)}
        fps={FILM.fps}
        width={1920}
        height={1080}
      />
    </>
  );
};
