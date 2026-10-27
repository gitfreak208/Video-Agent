// Remotion render/studio config (CLAUDE.md Section 1).
// Finals: --codec h264 --crf 18. Drafts: --scale 0.5 --crf 28 (pass on the CLI).
import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setCodec("h264");
Config.setOverwriteOutput(true);
Config.setEntryPoint("./src/index.ts");

export {};
