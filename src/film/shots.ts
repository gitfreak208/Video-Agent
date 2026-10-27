// Scenes and shots for "The Blind Craftsman", ported from the supplied storyboard.
// Each draw() returns the inner SVG for a 240x100 (2.4:1) frame.
import {
  OB, bg, glow, tag, mv, push, floor, cube, figure, woman, steelBox, seal, paper, filaments, hand, cubeField,
} from "./primitives";

export type Build = "CG" | "live" | "gfx";

export interface Scene {
  n: number; slug: string; title: string; tin: number; tout: number; vo: string; audio: string;
}

export interface Shot {
  id: string; s: number; tin: number; tout: number; size: string; lens: string; move: string;
  build: Build; action: string; vo: string | null; sfx: string; draw: () => string;
  // derived:
  sceneStart?: boolean; sceneNo?: number; sceneTitle?: string;
}

export const SCENES: Scene[] = [
  { n: 1, slug: "black-box", title: "The Black Box", tin: 0, tout: 20,
    vo: "For twenty years, we traded our privacy for intelligence. Every query, every medical record, every line of code, poured into corporate black boxes. We asked the machine to think for us. In return, it demanded to see everything we are.",
    audio: "Room tone, paper rustle, a far-off city. A sub-bass drone creeps in at 1C as the sun dies." },
  { n: 2, slug: "craftsman", title: "The Blind Craftsman", tin: 20, tout: 42,
    vo: "What if intelligence didn't need to see inside your vault to solve your problem? With fully homomorphic encryption, an AI agent can work on your data while it stays locked. It computes. It never sees.",
    audio: "A huge reverberant hall, HVAC hum, glass-harmonica tones. Footsteps on wet concrete. A heavy clunk as the box enters the slot." },
  { n: 3, slug: "proof", title: "The Proof", tin: 42, tout: 64,
    vo: "Then it proves its work. A zero-knowledge proof shows the exact model ran correctly on your sealed data. Anyone can check it on-chain. No one learns what's inside. And the answer comes back locked to you alone.",
    audio: "Paper slide and a soft wax-press thud. The pedestal answers with a clean sine chord. A low whoosh carries the pulse into the floor." },
  { n: 4, slug: "mesh", title: "The Mesh", tin: 64, tout: 88,
    vo: "An insurer approves a claim without reading the file. A lender funds a farm without seeing a bank statement. A drone proves it flew legally without revealing its route. No server sees your data. No blind faith. Agents that work for you, checked by math anyone can verify.",
    audio: "The one fast passage. A 96 BPM pulse; cut 4A-4C on downbeats. On the pull-back the score opens into a full swell, then drops at 4F." },
  { n: 5, slug: "outro", title: "Outro", tin: 88, tout: 108,
    vo: "The future of artificial intelligence isn't bigger data centers. It's intelligence that never has to see you.",
    audio: "The city opens up: rain, tyres, distant voices. Hard cut to two seconds of silence, then a single low tone under the title cards." },
];

export const SHOTS: Shot[] = [
  // Scene 1
  { id: "1A", s: 1, tin: 0, tout: 4, size: "ECU", lens: "100 mm macro", move: "Locked off, slow focus breathe", build: "live",
    action: "Fade up from black on a human eye. Window and desk reflected in the cornea. The iris tightens in sunlight, then dilates as a shadow passes.",
    vo: "For twenty years, we traded our privacy for intelligence.", sfx: "Room tone; VO in at 0:01",
    draw: () => bg("#0E0C0A") + glow(120, 50, 120, 60, "gT", 0.18) + `<path d="M18 50 Q120 -6 222 50 Q120 106 18 50 Z" fill="#8C857C"/><path d="M18 50 Q120 -6 222 50" fill="none" stroke="#2A241E" stroke-width="3"/>` + `<circle cx="120" cy="50" r="27" fill="url(#gIris)"/><circle cx="120" cy="50" r="12" fill="#030405"/><rect x="104" y="35" width="9" height="7" fill="#F0B35C" opacity=".75"/><line x1="108.5" y1="35" x2="108.5" y2="42" stroke="#8C857C" stroke-width=".6"/>` + tag("") },
  { id: "1B", s: 1, tin: 4, tout: 8, size: "Tabletop CU", lens: "50 mm", move: "Lateral slider, L to R, very slow", build: "live",
    action: "Glide across an old desk at paper height: a medical chart, a bank statement, printed code with handwritten notes. Dust hangs in a sunbeam.",
    vo: "Every query, every medical record, every line of code,", sfx: "Paper flutter, clock tick",
    draw: () => bg("#0D0B09") + `<polygon points="0,0 90,0 240,100 120,100" fill="url(#gSun)"/>` + floor(58, "#1A1610") + paper(30, 46, 46, 30, -8) + paper(92, 40, 50, 34, 4, "#C9C2B4") + paper(156, 48, 44, 30, -3) + `<rect x="-6" y="64" width="70" height="40" fill="#C9C2B4" opacity=".35"/>` + mv() },
  { id: "1C", s: 1, tin: 8, tout: 11, size: "Top-down insert", lens: "40 mm", move: "Locked overhead", build: "live",
    action: "Overhead on the scattered documents. A hard-edged shadow sweeps across them right to left. The sunlight goes from gold to steel.",
    vo: "poured into corporate black boxes.", sfx: "Sub-bass drone enters",
    draw: () => bg("#16130F") + paper(16, 14, 60, 42, -12) + paper(70, 30, 62, 46, 8, "#C9C2B4") + paper(140, 10, 56, 40, 14) + paper(170, 52, 54, 38, -6, "#B8B1A3") + paper(40, 58, 50, 36, 3) + `<rect x="100" y="0" width="160" height="100" fill="url(#gShadow)" transform="scale(-1 1) translate(-340 0)"/>` + mv() },
  { id: "1D", s: 1, tin: 11, tout: 15, size: "MCU", lens: "75 mm", move: "Slow push-in", build: "live",
    action: "A dark glass phone lies face-up among the papers, reflecting them. The screen wakes with a cold glow and the reflected documents vanish into it.",
    vo: "We asked the machine to think for us.", sfx: "Faint electrical whine as screen wakes",
    draw: () => bg("#0B0A09") + floor(30, "#14110D") + paper(14, 40, 50, 40, -10, "#6E685E", 4) + paper(176, 36, 52, 42, 9, "#6E685E", 4) + `<rect x="84" y="24" width="72" height="56" rx="5" fill="#020304" stroke="#3A4652" stroke-width="1"/>` + glow(120, 52, 34, 26, "gS", 0.9) + `<rect x="88" y="28" width="64" height="48" rx="3" fill="none" stroke="#7FA2C4" stroke-width=".5" opacity=".7"/>` + push() },
  { id: "1E", s: 1, tin: 15, tout: 20, size: "ECU to black", lens: "75 mm", move: "Push through the glass", build: "CG",
    action: "Keep pushing until the black screen fills frame. A pinpoint of tungsten light appears deep in the black. It becomes the cube in 2A.",
    vo: "In return, it demanded to see everything we are.", sfx: "Drone swells, then hard cut to silence",
    draw: () => bg("#010203") + glow(120, 50, 140, 70, "gS", 0.12) + glow(120, 52, 6, 6, "gT", 1) + `<rect x="2" y="2" width="236" height="96" fill="none" stroke="#3A4652" stroke-width="1" opacity=".5"/>` + push() },
  // Scene 2
  { id: "2A", s: 2, tin: 20, tout: 26, size: "EWS", lens: "40 mm", move: "Locked off, symmetrical", build: "CG",
    action: "A vast black industrial hall in haze. The cube stands dead center, lit from within. Steel edges crisp, panes frosted. Wet concrete mirrors it.",
    vo: "What if intelligence didn't need to see inside your vault to solve your problem?", sfx: "1.5 s of hall tone before VO",
    draw: () => bg("#040507") + Array.from({ length: 9 }, (_, i) => `<line x1="${14 + i * 27}" y1="0" x2="${14 + i * 27}" y2="70" stroke="#11161C" stroke-width="2"/>`).join("") + glow(120, 52, 100, 40, "gS", 0.15) + floor(70, "#0B0E12") + cube(120, 70, 24) + glow(120, 80, 22, 4, "gT", 0.4) },
  { id: "2B", s: 2, tin: 26, tout: 29, size: "MS through glass", lens: "75 mm", move: "Slow push-in", build: "CG",
    action: "Through the frosted pane: the Agent in profile. As it turns, the light catches a cloth band across its eyes. It works by touch alone.",
    vo: null, sfx: "Glass-harmonica tone rises",
    draw: () => bg("#06080B") + `<rect x="24" y="6" width="192" height="88" fill="url(#gFrost)" stroke="#7FA2C4" stroke-width=".8"/>` + glow(140, 50, 80, 44, "gT", 0.75) + figure(118, 96, 78, "#07090C", true) + hand(132, 58, 0.7, -10, "#07090C") + filaments(150, 52, 200, 40, 4, 8) + push() },
  { id: "2C", s: 2, tin: 29, tout: 32, size: "Macro", lens: "100 mm macro", move: "Slow drift left", build: "CG",
    action: "Macro on the hands pulling glowing filaments into braids. Threads split, rejoin and lock together. Oval bokeh behind.",
    vo: "With fully homomorphic encryption,", sfx: "Filament tones; cello pulse begins",
    draw: () => bg("#050608") + glow(60, 30, 40, 30, "gT", 0.25) + glow(190, 70, 30, 20, "gT", 0.2) + filaments(0, 50, 240, 46, 8, 22) + hand(36, 66, 1.5, -18) + `<g transform="scale(-1 1) translate(-240 0)">${hand(30, 62, 1.5, -12)}</g>` + mv() },
  { id: "2D", s: 2, tin: 32, tout: 35, size: "WS, over shoulder", lens: "40 mm", move: "Follow from behind, slow", build: "CG",
    action: "The woman walks toward the cube, carrying a heavy steel box with a dial lock against her chest. She is a silhouette against the glow.",
    vo: "an AI agent can work on your data while it stays locked.", sfx: "Footsteps on wet concrete, long reverb",
    draw: () => bg("#040507") + floor(72, "#0B0E12") + cube(140, 72, 40) + woman(82, 104, 80, "#030405") + `<path d="M88 32 Q94 44 92 60" fill="none" stroke="#F0B35C" stroke-width=".8" opacity=".8"/>` + steelBox(74, 50, 18, 13) + mv() },
  { id: "2E", s: 2, tin: 35, tout: 38, size: "CU insert", lens: "100 mm", move: "Locked", build: "CG",
    action: "Her hands slide the steel box into a slot in the glass. The slot's lip glows tungsten. The box disappears inside.",
    vo: null, sfx: "Heavy mechanical clunk; seal hiss",
    draw: () => bg("#06080B") + `<rect x="110" y="0" width="130" height="100" fill="url(#gFrost)" stroke="#7FA2C4" stroke-width=".8"/>` + glow(175, 50, 70, 50, "gT", 0.5) + `<rect x="108" y="44" width="10" height="30" fill="#020304" stroke="#F0B35C" stroke-width=".9"/>` + steelBox(56, 46, 58, 26) + hand(30, 52, 1.3, 0) + hand(30, 70, 1.3, 4) },
  { id: "2F", s: 2, tin: 38, tout: 42, size: "MCU inside cube", lens: "50 mm", move: "Slow orbit right, 15 deg", build: "CG",
    action: "Inside: the box sits on the bench, still locked. The Agent lays both hands on the lid. Filaments thread into the box through its seams. The lid never opens.",
    vo: "It computes. It never sees.", sfx: "Tones fold inward, then hush",
    draw: () => bg("#0A0D11") + glow(120, 40, 110, 50, "gT", 0.4) + floor(70, "#151B22") + steelBox(86, 46, 68, 28, true) + filaments(30, 20, 92, 52, 4, 10) + filaments(210, 22, 148, 52, 4, 10) + hand(98, 44, 1, 8) + `<g transform="scale(-1 1) translate(-240 0)">${hand(98, 44, 1, 8)}</g>` + mv() },
  // Scene 3
  { id: "3A", s: 3, tin: 42, tout: 46, size: "Macro", lens: "100 mm macro", move: "Locked, rack focus to lid", build: "CG",
    action: "The box slides back out of the slot toward lens, still locked. A new line glows faintly on its lid: the encrypted result is inside.",
    vo: "Then it proves its work.", sfx: "Metal-on-glass slide",
    draw: () => bg("#06080B") + `<rect x="0" y="0" width="240" height="40" fill="url(#gFrost)"/>` + `<rect x="60" y="34" width="120" height="8" fill="#020304" stroke="#F0B35C" stroke-width=".8"/>` + `<path d="M64 42 L176 42 L204 96 L36 96 Z" fill="#3A4652" stroke="#7FA2C4" stroke-width=".6"/>` + `<line x1="70" y1="80" x2="170" y2="80" stroke="#F0B35C" stroke-width="1.4"/>` + glow(120, 80, 60, 6, "gT", 0.5) },
  { id: "3B", s: 3, tin: 46, tout: 50, size: "Macro", lens: "100 mm macro", move: "Locked", build: "CG",
    action: "From under the glass, a sheet of heavy paper slides out. It carries one golden seal. Tungsten hits the gold and throws a horizontal anamorphic flare.",
    vo: "A zero-knowledge proof shows the exact model ran correctly on your sealed data.", sfx: "Paper slide, soft wax thud",
    draw: () => bg("#06080B") + `<rect x="0" y="0" width="240" height="34" fill="url(#gFrost)"/>` + `<line x1="0" y1="34" x2="240" y2="34" stroke="#7FA2C4" stroke-width=".6"/>` + `<path d="M70 36 L170 36 L188 96 L52 96 Z" fill="#CFC7B6"/>` + seal(120, 64, 15) + `<rect x="0" y="62" width="240" height="4" fill="url(#gFlare)" opacity=".8"/>` },
  { id: "3C", s: 3, tin: 50, tout: 53, size: "MCU", lens: "75 mm", move: "Handheld-feel drift", build: "live",
    action: "The woman picks up the paper and studies the seal. The cube is behind her, a rim light on her profile. Then she turns away from the cube.",
    vo: "(continues)", sfx: "Breath, paper",
    draw: () => bg("#05070A") + glow(200, 46, 70, 50, "gT", 0.55) + woman(110, 112, 110, "#030405") + `<path d="M104 18 Q98 34 106 50" fill="none" stroke="#F0B35C" stroke-width=".9" opacity=".8"/>` + `<g transform="rotate(-8 150 70)"><rect x="132" y="56" width="40" height="30" fill="#CFC7B6"/>${seal(152, 70, 7)}</g>` },
  { id: "3D", s: 3, tin: 53, tout: 57, size: "WS", lens: "40 mm", move: "Slow crane down to floor level", build: "CG",
    action: "A low obsidian pedestal stands a few metres away: the public verifier. She lays the seal into its groove. A ring of light fires a pulse down into the concrete, racing off into the dark.",
    vo: "Anyone can check it on-chain.", sfx: "Clean sine chord; low whoosh",
    draw: () => bg("#040507") + floor(66, "#0B0E12") + cube(46, 66, 30, 0.8) + woman(104, 90, 58, "#030405") + `<rect x="130" y="56" width="40" height="16" fill="#0E1216" stroke="#3A4652" stroke-width=".6"/>` + `<ellipse cx="150" cy="56" rx="20" ry="3" fill="none" stroke="#F0B35C" stroke-width="1"/>` + seal(150, 55, 3) + `<path d="M150 72 L150 80 L240 80" fill="none" stroke="#F0B35C" stroke-width="1.1"/>` + glow(214, 80, 18, 3, "gT", 0.8) + mv() },
  { id: "3E", s: 3, tin: 57, tout: 60, size: "ECU face", lens: "100 mm", move: "Locked, ultra-shallow", build: "live",
    action: "Her face, lit from below by the pedestal. The word VERIFIED, projected by its light, moves across her cheek and eyes. Her expression stays steady.",
    vo: "No one learns what's inside.", sfx: "Chord sustains",
    draw: () => bg("#05070A") + `<path d="M60 0 Q30 50 70 100 L190 100 Q214 50 180 0 Z" fill="#1A1714"/>` + glow(120, 100, 90, 50, "gT", 0.5) + `<path d="M84 40 Q98 34 110 40 M132 40 Q144 34 158 40" fill="none" stroke="#05070A" stroke-width="2.6"/>` + `<text x="120" y="66" text-anchor="middle" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="17" letter-spacing="4" fill="#F0B35C" opacity=".72">VERIFIED</text>` },
  { id: "3F", s: 3, tin: 60, tout: 64, size: "CU insert", lens: "100 mm", move: "Slow push", build: "live",
    action: "Her thumb rests on the box's dial. Only her key opens the answer. She does not open it here; it stays private.",
    vo: "And the answer comes back locked to you alone.", sfx: "One dial click",
    draw: () => bg("#06080B") + `<rect x="20" y="10" width="200" height="82" fill="#3A4652" stroke="#7FA2C4" stroke-width=".8"/><line x1="40" y1="82" x2="200" y2="82" stroke="#F0B35C" stroke-width="1.4"/>` + `<circle cx="120" cy="48" r="24" fill="#20272F" stroke="#9FB7CF" stroke-width="1"/>` + Array.from({ length: 24 }, (_, i) => { const a = i * Math.PI / 12; return `<line x1="${(120 + Math.cos(a) * 20).toFixed(1)}" y1="${(48 + Math.sin(a) * 20).toFixed(1)}" x2="${(120 + Math.cos(a) * 23).toFixed(1)}" y2="${(48 + Math.sin(a) * 23).toFixed(1)}" stroke="#9FB7CF" stroke-width=".5"/>`; }).join("") + hand(140, 46, 2, 160) + push() },
  // Scene 4
  { id: "4A", s: 4, tin: 64, tout: 67, size: "CU over shoulder", lens: "50 mm", move: "Quick push, cut on beat", build: "live",
    action: "An insurer's hands hold a tablet. The patient file shows as a locked tile that never opens. A small gold seal appears beside it. The thumb taps APPROVE.",
    vo: "An insurer approves a claim without reading the file.", sfx: "Downbeat; UI tick",
    draw: () => bg("#0A0D11") + glow(120, 50, 100, 50, "gS", 0.2) + `<rect x="58" y="12" width="124" height="80" rx="5" fill="#0E1216" stroke="#3A4652"/>` + `<rect x="70" y="24" width="48" height="40" fill="#1C2530" stroke="#7FA2C4" stroke-width=".6"/>` + steelBox(84, 34, 20, 18) + seal(146, 44, 12) + `<rect x="126" y="68" width="42" height="12" fill="#F0B35C"/><text x="147" y="76.5" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="6" fill="#090B0E">APPROVE</text>` + hand(160, 80, 1.1, -30, "#1A1714") },
  { id: "4B", s: 4, tin: 67, tout: 70, size: "MS, low angle", lens: "40 mm", move: "Quick push, cut on beat", build: "live",
    action: "A farmer at dusk, weathered hands on a phone in a field. The screen shows the loan funded and a gold seal. On the horizon, one cube glows.",
    vo: "A lender funds a farm without seeing a bank statement.", sfx: "Downbeat; wind in crops",
    draw: () => bg("#141820") + `<rect x="0" y="0" width="240" height="64" fill="#1B2431"/>` + glow(120, 64, 140, 18, "gT", 0.25) + floor(64, "#0C0F0A") + Array.from({ length: 40 }, (_, i) => `<line x1="${i * 6 + 2}" y1="100" x2="${i * 6 + 4}" y2="${74 + (i * 7) % 12}" stroke="#1E2618" stroke-width="1"/>`).join("") + cube(60, 64, 4) + `<rect x="148" y="28" width="38" height="64" rx="4" fill="#020304" stroke="#3A4652"/>` + seal(167, 52, 9) + hand(130, 84, 1.4, -10, "#2A2219") },
  { id: "4C", s: 4, tin: 70, tout: 73, size: "WS", lens: "40 mm", move: "Locked; drone descends into frame", build: "CG",
    action: "Night. A delivery drone lands on a charging pad. Rotor wash scatters dust. The pad's ring lights and a gold seal projects onto it.",
    vo: "A drone proves it flew legally without revealing its route.", sfx: "Downbeat; rotor whine down",
    draw: () => bg("#05070A") + floor(64, "#0B0E12") + `<ellipse cx="120" cy="80" rx="56" ry="11" fill="#11161C" stroke="#F0B35C" stroke-width="1"/>` + seal(120, 80, 6) + `<rect x="104" y="36" width="32" height="8" rx="2" fill="#1C2530" stroke="#7FA2C4" stroke-width=".5"/>` + [84, 156].map((x) => `<line x1="${x}" y1="34" x2="${x + (x < 120 ? 20 : -20)}" y2="40" stroke="#3A4652" stroke-width="1"/><ellipse cx="${x}" cy="33" rx="14" ry="1.8" fill="#7FA2C4" opacity=".35"/>`).join("") + mv() },
  { id: "4D", s: 4, tin: 73, tout: 76, size: "High angle", lens: "40 mm", move: "Crane up begins", build: "CG",
    action: "Back to the original cube, seen from high above. Pulses of light run out from its base along floor seams in every direction.",
    vo: "No server sees your data.", sfx: "Score opens",
    draw: () => bg("#05070A") + `<path d="M120 26 L150 44 L120 62 L90 44 Z" fill="#202A35" stroke="#7FA2C4" stroke-width=".6"/>` + glow(120, 44, 30, 18, "gT", 0.9) + [[0, 10], [240, 20], [10, 98], [230, 96], [120, 100], [0, 52], [240, 60]].map(([x, y]) => `<line x1="120" y1="44" x2="${x}" y2="${y}" stroke="#F0B35C" stroke-width=".6" opacity=".7"/>`).join("") + mv() },
  { id: "4E", s: 4, tin: 76, tout: 84, size: "EWS", lens: "40 mm", move: "Continuous crane up and back, 8 s", build: "CG",
    action: "The hero pull-back. One cube becomes dozens, then hundreds, spread across a dark landscape and linked by thin pulses on the ground.",
    vo: "No blind faith. Agents that work for you, checked by math anyone can verify.", sfx: "Full swell",
    draw: () => bg("#040507") + `<rect x="0" y="0" width="240" height="30" fill="#0B1118"/>` + floor(30, "#07090C") + cubeField(7, 70, 30) + mv() },
  { id: "4F", s: 4, tin: 84, tout: 88, size: "EWS", lens: "40 mm", move: "Hold", build: "CG",
    action: "Hold on the field. One wave of pulses ripples across the whole network. Music drops out on the last frame.",
    vo: null, sfx: "Swell, then drop",
    draw: () => bg("#040507") + `<rect x="0" y="0" width="240" height="30" fill="#0B1118"/>` + floor(30, "#07090C") + cubeField(7, 70, 30, false) + [30, 60, 95].map((r, i) => `<ellipse cx="120" cy="72" rx="${r * 1.8}" ry="${r * 0.45}" fill="none" stroke="#F0B35C" stroke-width="${0.9 - i * 0.25}" opacity="${0.8 - i * 0.2}"/>`).join("") },
  // Scene 5
  { id: "5A", s: 5, tin: 88, tout: 92, size: "MS", lens: "50 mm", move: "Slow push", build: "live",
    action: "The woman stands with the locked box in one hand and the sealed proof in the other. The cube glows behind her.",
    vo: "The future of artificial intelligence isn't bigger data centers.", sfx: "Hall tone returns",
    draw: () => bg("#040507") + floor(76, "#0B0E12") + cube(178, 76, 46) + woman(98, 112, 100, "#030405") + steelBox(56, 64, 24, 18) + `<rect x="124" y="60" width="18" height="22" fill="#CFC7B6"/>` + seal(133, 71, 5) + push() },
  { id: "5B", s: 5, tin: 92, tout: 97, size: "WS from behind", lens: "40 mm", move: "Locked; she walks out of frame depth", build: "CG",
    action: "She turns from the light and walks toward a huge rolling door onto a blue-hour city, wet streets and glowing windows. A streetlight throws a flare. She becomes small against it.",
    vo: "It's intelligence that never has to see you.", sfx: "City opens: rain, traffic",
    draw: () => bg("#040507") + floor(80, "#0B0E12") + `<rect x="70" y="14" width="100" height="66" fill="url(#gCity)"/>` + [[74, 50, 14], [90, 34, 12], [104, 44, 10], [116, 26, 14], [132, 40, 12], [146, 30, 10], [158, 48, 10]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${80 - y}" fill="#14202E"/>`).join("") + `<rect x="0" y="54" width="240" height="2" fill="url(#gFlare)"/>` + woman(120, 82, 22, "#030405") + glow(120, 82, 50, 4, "gS", 0.6) },
  { id: "5C", s: 5, tin: 97, tout: 99, size: "Black", lens: "-", move: "-", build: "gfx",
    action: "Hard cut to black. Two seconds of silence.", vo: null, sfx: "2 s of true silence",
    draw: () => bg("#000") },
  { id: "5D", s: 5, tin: 99, tout: 104, size: "Title card", lens: "-", move: "12-frame fade up", build: "gfx",
    action: "Title: ZERO-KNOWLEDGE AI AGENTS. Sub-line: Encrypted compute, zero-knowledge proof.", vo: null, sfx: "Single low tone",
    draw: () => bg("#000") + `<text x="120" y="50" text-anchor="middle" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="13" letter-spacing="2.4" fill="#E4E8EC">ZERO-KNOWLEDGE AI AGENTS</text><text x="120" y="62" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="4.4" letter-spacing="1.1" fill="#7FA2C4">ENCRYPTED COMPUTE / ZERO-KNOWLEDGE PROOF</text>` },
  { id: "5E", s: 5, tin: 104, tout: 108, size: "End card", lens: "-", move: "Cross-dissolve; 1 s fade out", build: "gfx",
    action: "Tagline: Don't trust. Verify.", vo: null, sfx: "Tone decays",
    draw: () => bg("#000") + `<text x="120" y="54" text-anchor="middle" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="700" font-size="13" letter-spacing="2" fill="#F0B35C">Don't trust. Verify.</text>` },
];

// derive scene-start flags for the chapter label
for (const sc of SCENES) {
  const first = SHOTS.find((s) => s.s === sc.n);
  if (first) { first.sceneStart = true; first.sceneNo = sc.n; first.sceneTitle = sc.title; }
}

export const FILM = { fps: 24, totalSeconds: 108 };
