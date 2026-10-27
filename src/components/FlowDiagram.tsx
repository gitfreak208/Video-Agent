import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, fontFamily, type Layout } from "../brand";

// Step flow (CLAUDE.md Phase 1b scene spec). 16:9 lays nodes left-to-right;
// 9:16 restacks them vertically. Nodes enter on a stagger.
export const FlowDiagram: React.FC<{
  title?: string;
  steps: string[];
  layout: Layout;
}> = ({ title, steps, layout }) => {
  const frame = useCurrentFrame();
  const vertical = layout === "9x16";
  const nodeSize = vertical ? 150 : 170;
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // 9:16 anchors near the top so a 4-step stack clears the caption band;
        // 16:9 centres (CLAUDE.md Phase 1b: vertical restacks, does not crop).
        justifyContent: vertical ? "flex-start" : "center",
        padding: vertical ? "300px 8% 0" : "0 6%",
      }}
    >
      {title ? (
        <div
          style={{
            fontFamily,
            fontSize: vertical ? 60 : 56,
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: vertical ? 56 : 64,
            textAlign: "center",
          }}
        >
          {title}
        </div>
      ) : null}
      <div
        style={{
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          gap: vertical ? 24 : 56,
          alignItems: "center",
        }}
      >
        {steps.map((step, i) => {
          const enter = interpolate(frame, [i * 12, i * 12 + 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const scale = interpolate(enter, [0, 1], [0.8, 1]);
          return (
            <React.Fragment key={step}>
              <div
                style={{
                  width: nodeSize,
                  height: nodeSize,
                  borderRadius: 20,
                  backgroundColor: COLORS.navy,
                  border: `3px solid ${COLORS.blue}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 16,
                  opacity: enter,
                  transform: `scale(${scale})`,
                }}
              >
                <span
                  style={{
                    fontFamily,
                    fontSize: vertical ? 30 : 28,
                    color: COLORS.white,
                  }}
                >
                  {step}
                </span>
              </div>
              {i < steps.length - 1 ? (
                <div
                  style={{
                    width: vertical ? 4 : 56,
                    height: vertical ? 28 : 4,
                    backgroundColor: COLORS.blue,
                    opacity: interpolate(
                      frame,
                      [i * 12 + 6, i * 12 + 18],
                      [0, 1],
                      { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
                    ),
                  }}
                />
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
