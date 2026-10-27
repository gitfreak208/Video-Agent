// Maps a shot's camera-move description to an animated transform (an animatic
// reading of the storyboard's intent). progress p runs 0..1 over the shot.
export interface Cam { scale: number; x: number; y: number; rot: number }

const smooth = (p: number) => p * p * (3 - 2 * p);

export function camera(move: string, p: number): Cam {
  const m = move.toLowerCase();
  const e = smooth(Math.max(0, Math.min(1, p)));
  let scale = 1, x = 0, y = 0, rot = 0;

  if (/through/.test(m)) scale = 1 + 0.16 * e;
  else if (/push|follow/.test(m)) scale = 1 + 0.08 * e;

  if (/slider|lateral|drift|slide/.test(m)) x = 2 - 4 * e;       // L->R camera: content drifts left
  if (/crane/.test(m) && /down|↓/.test(m)) y = -2 + 4 * e;
  else if (/crane|up|↑/.test(m)) y = 2 - 4 * e;
  if (/orbit/.test(m)) { x = 1.5 - 3 * e; rot = -0.6 + 1.2 * e; }
  if (/descend|descent/.test(m)) y = -3 + 5 * e;
  if (/follow/.test(m)) x = 1.5 - 3 * e;

  if (/handheld/.test(m)) { x += Math.sin(p * Math.PI * 6) * 0.5; y += Math.cos(p * Math.PI * 5) * 0.4; }

  // A locked frame still breathes a touch, so nothing sits dead still.
  if (scale === 1 && x === 0 && y === 0 && rot === 0) scale = 1 + 0.02 * e;

  return { scale: Math.max(scale, 1), x, y, rot };
}
