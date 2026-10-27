import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, fontFamily, type Layout } from "../brand";

// Name + role strip. Navy block with a blue accent edge; slides in with a spring.
export const LowerThird: React.FC<{
  name: string;
  role: string;
  layout: Layout;
}> = ({ name, role, layout }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 200 } });
  const x = interpolate(enter, [0, 1], [-80, 0]);
  const vertical = layout === "9x16";
  // In 9:16 the lower third sits well above the caption band (caption bottom
  // ~360 + up to 2 lines) so the two never collide (QA Section 6 check).
  const left = vertical ? 60 : 96;
  const bottom = vertical ? 640 : 150;
  return (
    <div
      style={{
        position: "absolute",
        left,
        bottom,
        transform: `translateX(${x}px)`,
        opacity: enter,
      }}
    >
      <div
        style={{
          backgroundColor: COLORS.navy,
          borderLeft: `6px solid ${COLORS.blue}`,
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            fontFamily,
            fontSize: vertical ? 44 : 40,
            fontWeight: 600,
            color: COLORS.white,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily,
            fontSize: vertical ? 28 : 26,
            color: COLORS.blue,
            marginTop: 4,
          }}
        >
          {role}
        </div>
      </div>
    </div>
  );
};
