import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { COLORS, type Layout } from "./brand";
import { Intro } from "./components/Intro";
import { TitleCard } from "./components/TitleCard";
import { LowerThird } from "./components/LowerThird";
import { Caption } from "./components/Caption";
import { FlowDiagram } from "./components/FlowDiagram";
import { Outro } from "./components/Outro";

// 10-second dual-master smoke test (CLAUDE.md Section 11, step 6).
// Exercises: brand font, palette, Intro, TitleCard, LowerThird, Caption,
// FlowDiagram, Outro, in both 16:9 and 9:16. The supplied-clip-through-cut.sh
// path is added once system FFmpeg is installed.
export const SmokeTest: React.FC<{ layout: Layout }> = ({ layout }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navy }}>
      <Series>
        <Series.Sequence durationInFrames={60}>
          <Intro layout={layout} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={90}>
          <TitleCard
            title="Programmable money, built to last"
            subtitle="Antier Solutions"
            layout={layout}
          />
          <LowerThird name="Antier Solutions" role="Tokenisation engineering" layout={layout} />
          <Caption text="A smoke-test caption in Space Grotesk." layout={layout} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={90}>
          <AbsoluteFill style={{ backgroundColor: COLORS.navy }}>
            <FlowDiagram
              title="Issuance in four controlled steps"
              steps={["Onboarding", "Structuring", "Token creation", "Distribution"]}
              layout={layout}
            />
            <Caption text="Each step is a control, not a claim about returns." layout={layout} />
          </AbsoluteFill>
        </Series.Sequence>

        <Series.Sequence durationInFrames={60}>
          <Outro cta="antier.com" layout={layout} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
