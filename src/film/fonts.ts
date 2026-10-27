// Fonts for the film (match the storyboard: Big Shoulders + IBM Plex).
// Limit weights/subsets to keep font network requests small across the render.
import { loadFont as loadDisplay } from "@remotion/google-fonts/BigShoulders";
import { loadFont as loadSans } from "@remotion/google-fonts/IBMPlexSans";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";

const opts = { subsets: ["latin"], ignoreTooManyRequestsWarning: true } as const;

export const display = loadDisplay("normal", { weights: ["700", "800"], ...opts }).fontFamily;
export const sans = loadSans("normal", { weights: ["400", "500"], ...opts }).fontFamily;
export const mono = loadMono("normal", { weights: ["400", "500"], ...opts }).fontFamily;
