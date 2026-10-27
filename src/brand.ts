// Brand tokens for Remotion compositions. Source of truth is brand/brand.json;
// these mirror the values Alok supplied (CLAUDE.md Section 7).
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";

// Space Grotesk — brand typeface (wordmark, headlines, body, captions).
export const { fontFamily } = loadFont();

export const COLORS = {
  navy: "#022446", // dominant dark / default video background
  blue: "#0b96da", // primary + accent
  light: "#eef2ff", // light surface
  white: "#FFFFFF",
} as const;

export type Layout = "16x9" | "9x16";

export const DIMENSIONS: Record<Layout, { width: number; height: number }> = {
  "16x9": { width: 1920, height: 1080 },
  "9x16": { width: 1080, height: 1920 },
};

// Safe areas (CLAUDE.md Section 6). Vertical keeps critical content out of the
// top 250 px and bottom 350 px at 1080x1920; horizontal uses a 5% inset.
export const SAFE = { hInsetPct: 5, vTopPx: 250, vBottomPx: 350 } as const;

export const FPS = 30;
