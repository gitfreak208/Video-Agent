import React from "react";
import { COLORS, fontFamily, type Layout } from "../brand";

// Burned-in caption (CLAUDE.md Section 6): max 2 lines, white on a 60% navy pill,
// no drop shadow, no per-word animation. Sits above the bottom safe zone.
export const Caption: React.FC<{ text: string; layout: Layout }> = ({
  text,
  layout,
}) => {
  const vertical = layout === "9x16";
  const fontSize = vertical ? 48 : 44;
  const bottom = vertical ? 360 : 90;
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily,
          fontSize,
          color: COLORS.white,
          backgroundColor: "rgba(2, 36, 70, 0.6)",
          padding: "10px 26px",
          borderRadius: 14,
          maxWidth: "86%",
          textAlign: "center",
          lineHeight: 1.25,
        }}
      >
        {text}
      </div>
    </div>
  );
};
