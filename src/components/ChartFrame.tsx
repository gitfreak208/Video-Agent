import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, fontFamily, type Layout } from "../brand";

// Minimal animated bar chart (data viz, CLAUDE.md Section 1). Bars grow in on a
// stagger. Real charts should source data from the claims table.
export const ChartFrame: React.FC<{
  title: string;
  data: { label: string; value: number }[];
  layout: Layout;
}> = ({ title, data, layout }) => {
  const frame = useCurrentFrame();
  const max = Math.max(...data.map((d) => d.value), 1);
  const vertical = layout === "9x16";
  const chartHeight = vertical ? 900 : 520;
  const barWidth = vertical ? 140 : 160;
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: vertical ? "0 8%" : "0 10%",
      }}
    >
      <div
        style={{
          fontFamily,
          fontSize: vertical ? 64 : 60,
          fontWeight: 700,
          color: COLORS.white,
          marginBottom: 48,
          textAlign: "center",
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          gap: vertical ? 32 : 48,
          alignItems: "flex-end",
          height: chartHeight,
        }}
      >
        {data.map((d, i) => {
          const grow = interpolate(
            frame,
            [i * 6, i * 6 + 18],
            [0, (d.value / max) * chartHeight],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          return (
            <div
              key={d.label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div
                style={{
                  width: barWidth,
                  height: grow,
                  backgroundColor: COLORS.blue,
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <div
                style={{
                  fontFamily,
                  fontSize: vertical ? 32 : 30,
                  color: COLORS.white,
                  marginTop: 16,
                }}
              >
                {d.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
