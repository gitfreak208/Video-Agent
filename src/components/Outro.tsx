import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { COLORS, fontFamily, type Layout } from "../brand";

// End card on navy: logomark + CTA. CTA text is a placeholder until the decision
// log sets the real one (CLAUDE.md Phase 10 / QA end-card check).
export const Outro: React.FC<{ cta?: string; layout: Layout }> = ({
  cta = "antier.com",
  layout,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const markSize = layout === "9x16" ? 260 : 220;
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.navy,
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <Img src={staticFile("antier-mark.png")} style={{ width: markSize }} />
      <div
        style={{
          fontFamily,
          fontSize: layout === "9x16" ? 48 : 52,
          color: COLORS.white,
          marginTop: 36,
          fontWeight: 600,
        }}
      >
        {cta}
      </div>
    </AbsoluteFill>
  );
};
