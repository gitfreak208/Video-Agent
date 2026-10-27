import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, type Layout } from "../brand";

// Brand intro: Antier wordmark on the light surface (navy mark reads on #eef2ff).
export const Intro: React.FC<{ layout: Layout }> = ({ layout }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 200 } });
  const scale = interpolate(enter, [0, 1], [0.82, 1]);
  const width = layout === "9x16" ? 720 : 780;
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.light,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Img
        src={staticFile("antier-logo.svg")}
        style={{ width, opacity: enter, transform: `scale(${scale})` }}
      />
    </AbsoluteFill>
  );
};
