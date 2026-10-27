import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, fontFamily, type Layout } from "../brand";

// Centred headline on navy. Fades and rises in over the first 15 frames.
export const TitleCard: React.FC<{
  title: string;
  subtitle?: string;
  layout: Layout;
}> = ({ title, subtitle, layout }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 15], [24, 0], { extrapolateRight: "clamp" });
  const vertical = layout === "9x16";
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.navy,
        alignItems: "center",
        justifyContent: "center",
        padding: "0 8%",
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          fontFamily,
          fontSize: vertical ? 84 : 96,
          fontWeight: 700,
          color: COLORS.white,
          textAlign: "center",
          lineHeight: 1.1,
        }}
      >
        {title}
      </div>
      {subtitle ? (
        <div
          style={{
            fontFamily,
            fontSize: vertical ? 40 : 46,
            color: COLORS.blue,
            marginTop: 24,
            textAlign: "center",
          }}
        >
          {subtitle}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
