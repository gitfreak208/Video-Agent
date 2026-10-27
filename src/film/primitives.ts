// SVG art primitives for "The Blind Craftsman", ported verbatim from the supplied
// storyboard's draw code (viewBox 240 x 100 = 2.4:1). The previz annotations
// (tag/mv/push) are stubbed to "" so the frames render clean for the cut.

export const OB = "#05070A";

export const bg = (c = "#06080B") => `<rect width="240" height="100" fill="${c}"/>`;

export const glow = (cx: number, cy: number, rx: number, ry: number, g = "gT", o: number | string = 1) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#${g})" opacity="${o}"/>`;

// Previz-only annotations — stripped from the cinematic cut.
export const tag = (_t: string) => "";
export const mv = (..._a: unknown[]) => "";
export const push = () => "";

export const floor = (y: number, c = "#151B22") =>
  `<rect x="0" y="${y}" width="240" height="${100 - y}" fill="${c}"/><line x1="0" y1="${y}" x2="240" y2="${y}" stroke="#222A33" stroke-width=".4"/>`;

export function cube(cx: number, by: number, s: number, lit = 1) {
  const x = cx - s / 2, y = by - s, d = s * 0.22, h = s * 0.14;
  return glow(cx, by + 1, s * 1.1, s * 0.16, "gT", 0.55 * lit) +
    `<path d="M${x} ${y} L${x + d} ${y - h} L${x + s + d} ${y - h} L${x + s} ${y} Z" fill="#202A35"/>` +
    `<path d="M${x + s} ${y} L${x + s + d} ${y - h} L${x + s + d} ${by - h} L${x + s} ${by} Z" fill="#141B23"/>` +
    `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="url(#gFrost)"/>` +
    glow(cx, by - s * 0.45, s * 0.48, s * 0.48, "gT", 0.9 * lit) +
    `<path d="M${x} ${y} L${x + d} ${y - h} L${x + s + d} ${y - h} L${x + s + d} ${by - h} L${x + s} ${by} L${x} ${by} Z M${x} ${y} L${x + s} ${y} L${x + s} ${by} M${x + s} ${y} L${x + s + d} ${y - h}" fill="none" stroke="#7FA2C4" stroke-width="${Math.max(0.3, s / 80)}"/>`;
}

export function figure(x: number, by: number, h: number, c = OB, blind = false) {
  const r = h * 0.09, hy = by - h + r;
  return `<circle cx="${x}" cy="${hy}" r="${r}" fill="${c}"/>` +
    `<path d="M${x - h * 0.17} ${by} L${x - h * 0.14} ${hy + r * 1.6} Q${x} ${hy + r * 1.1} ${x + h * 0.14} ${hy + r * 1.6} L${x + h * 0.17} ${by} Z" fill="${c}"/>` +
    (blind ? `<rect x="${x - r * 1.05}" y="${hy - r * 0.35}" width="${r * 2.1}" height="${r * 0.55}" fill="#7FA2C4" opacity=".8"/>` : "");
}

export function woman(x: number, by: number, h: number, c = OB) {
  const r = h * 0.085, hy = by - h + r;
  return `<circle cx="${x}" cy="${hy}" r="${r}" fill="${c}"/>` +
    `<path d="M${x - r * 0.9} ${hy - r * 0.2} Q${x - r * 1.5} ${hy + r * 2.4} ${x - r * 0.4} ${hy + r * 2.6} L${x + r * 0.4} ${hy + r * 2.6} Q${x + r * 1.5} ${hy + r * 2.4} ${x + r * 0.9} ${hy - r * 0.2} Z" fill="${c}"/>` +
    `<path d="M${x - h * 0.13} ${by} L${x - h * 0.12} ${hy + r * 1.7} Q${x} ${hy + r * 1.2} ${x + h * 0.12} ${hy + r * 1.7} L${x + h * 0.15} ${by} Z" fill="${c}"/>`;
}

export const steelBox = (x: number, y: number, w: number, h: number, dial = true, mark = false) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#3A4652" stroke="#7FA2C4" stroke-width=".5"/><rect x="${x + w * 0.08}" y="${y + h * 0.12}" width="${w * 0.84}" height="${h * 0.1}" fill="#2A333D"/>` +
  (dial ? `<circle cx="${x + w / 2}" cy="${y + h * 0.58}" r="${Math.min(w, h) * 0.16}" fill="#20272F" stroke="#9FB7CF" stroke-width=".5"/>` : "") +
  (mark ? `<line x1="${x + w * 0.15}" y1="${y + h * 0.88}" x2="${x + w * 0.85}" y2="${y + h * 0.88}" stroke="#F0B35C" stroke-width=".9"/>` : "");

export function seal(cx: number, cy: number, r: number) {
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#gG)"/><circle cx="${cx}" cy="${cy}" r="${r * 0.78}" fill="none" stroke="#8A6220" stroke-width="${r / 14}"/>`;
  for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; s += `<line x1="${cx}" y1="${cy}" x2="${(cx + Math.cos(a) * r * 0.7).toFixed(2)}" y2="${(cy + Math.sin(a) * r * 0.7).toFixed(2)}" stroke="#8A6220" stroke-width="${r / 18}"/>`; }
  return s + `<circle cx="${cx}" cy="${cy}" r="${r * 0.3}" fill="none" stroke="#8A6220" stroke-width="${r / 16}"/>`;
}

export const paper = (x: number, y: number, w: number, h: number, rot = 0, c = "#BDB6A8", lines = 6) => {
  let s = `<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`;
  for (let i = 1; i <= lines; i++) s += `<line x1="${x + w * 0.1}" y1="${y + i * h / (lines + 1)}" x2="${x + w * (i % 3 ? 0.9 : 0.6)}" y2="${y + i * h / (lines + 1)}" stroke="#6E685E" stroke-width=".5"/>`;
  return s + "</g>";
};

export const filaments = (x1: number, y1: number, x2: number, y2: number, n = 6, spread = 14) =>
  Array.from({ length: n }, (_, i) => `<path d="M${x1} ${y1 + (i - n / 2) * 2} C${x1 + (x2 - x1) * 0.35} ${y1 - spread + i * spread / n * 2} ${x1 + (x2 - x1) * 0.65} ${y2 + spread - i * spread / n * 2} ${x2} ${y2 + (i - n / 2) * 1.2}" fill="none" stroke="${i % 2 ? "#F0B35C" : "#FFE3A3"}" stroke-width="${i % 3 ? 0.4 : 0.7}" opacity=".9"/>`).join("");

export const hand = (x: number, y: number, s = 1, rot = 0, c = "#0D1014") =>
  `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><path d="M0 0 C6 -3 14 -3 20 -1 L30 -4 C33 -4.5 33 -1.5 30 -1 L22 1 L32 1 C35 1 35 4 32 4 L20 5 C12 7 4 7 0 6 Z" fill="${c}" stroke="#2B3540" stroke-width=".4"/></g>`;

function rng(seed: number) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }

export function cubeField(seed: number, count: number, horizon: number, pulses = true) {
  const r = rng(seed); const pts: [number, number, number][] = [];
  for (let i = 0; i < count; i++) { const d = Math.pow(r(), 1.8); const y = horizon + 2 + d * (98 - horizon); pts.push([r() * 260 - 10, y, 1.2 + d * 9]); }
  pts.sort((a, b) => a[1] - b[1]);
  let s = "";
  if (pulses) for (let i = 1; i < pts.length; i++) { const j = Math.floor(r() * i); if (Math.abs(pts[i][0] - pts[j][0]) < 70) s += `<line x1="${pts[i][0].toFixed(1)}" y1="${pts[i][1].toFixed(1)}" x2="${pts[j][0].toFixed(1)}" y2="${pts[j][1].toFixed(1)}" stroke="#F0B35C" stroke-width="${(0.15 + pts[i][2] / 40).toFixed(2)}" opacity=".45"/>`; }
  return s + pts.map(([x, y, sz]) => cube(x, y, sz, 0.9)).join("");
}

// Shared gradient/marker defs used by every frame (from the storyboard).
export const DEFS = `<defs>
<radialGradient id="gT"><stop offset="0" stop-color="#F0B35C" stop-opacity=".95"/><stop offset=".45" stop-color="#C98A3E" stop-opacity=".35"/><stop offset="1" stop-color="#C98A3E" stop-opacity="0"/></radialGradient>
<radialGradient id="gS"><stop offset="0" stop-color="#7FA2C4" stop-opacity=".55"/><stop offset="1" stop-color="#7FA2C4" stop-opacity="0"/></radialGradient>
<radialGradient id="gG"><stop offset="0" stop-color="#FFE3A3"/><stop offset=".6" stop-color="#D9A441"/><stop offset="1" stop-color="#8A6220"/></radialGradient>
<radialGradient id="gIris" cx=".5" cy=".5" r=".5"><stop offset=".3" stop-color="#2D4258"/><stop offset=".8" stop-color="#5E7F9F"/><stop offset="1" stop-color="#1A2633"/></radialGradient>
<linearGradient id="gFrost" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1C2530"/><stop offset="1" stop-color="#0E1319"/></linearGradient>
<linearGradient id="gSun" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0B35C" stop-opacity=".32"/><stop offset="1" stop-color="#F0B35C" stop-opacity="0"/></linearGradient>
<linearGradient id="gShadow" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#05070A" stop-opacity=".92"/><stop offset=".8" stop-color="#05070A" stop-opacity=".75"/><stop offset="1" stop-color="#05070A" stop-opacity="0"/></linearGradient>
<linearGradient id="gFlare" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7FA2C4" stop-opacity="0"/><stop offset=".5" stop-color="#BFD6EE" stop-opacity=".9"/><stop offset="1" stop-color="#7FA2C4" stop-opacity="0"/></linearGradient>
<linearGradient id="gCity" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B3E54"/><stop offset="1" stop-color="#7FA2C4"/></linearGradient>
</defs>`;
