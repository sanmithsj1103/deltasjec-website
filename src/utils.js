// Placeholder portrait: a generated silhouette on a palette gradient. Replace with real photos via `photo` in data.js.
export function portrait(seed) {
  const tones = [
    ['#303D59', '#1E263B'],
    ['#536684', '#303D59'],
    ['#1E263B', '#536684'],
    ['#98A9C4', '#536684'],
    ['#303D59', '#98A9C4'],
  ];
  const [a, b] = tones[seed % tones.length];
  const dx = ((seed * 37) % 30) - 15;
  const hr = 64 + ((seed * 11) % 14);
  const hairPath = `<path d="M${130 + dx} 190a70 70 0 0 1 140 0q-70-40-140 0z" fill="#111522" opacity=".55"/>`;
  const hair = [
    hairPath,
    '',
    `<circle cx="${200 + dx}" cy="108" r="30" fill="#111522" opacity=".55"/>${hairPath}`,
  ][seed % 3];
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>` +
    `<rect width="400" height="500" fill="url(#g)"/>` +
    `<circle cx="${200 + dx}" cy="200" r="${hr}" fill="#DCE3EF" opacity=".88"/>${hair}` +
    `<path d="M${50 + dx} 500C${60 + dx} 380 ${130 + dx} 330 ${200 + dx} 330S${340 + dx} 380 ${350 + dx} 500Z" fill="#DCE3EF" opacity=".72"/></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

export const photoOf = (person, seed) => {
  if (!person.photo) return portrait(seed);
  // Full URL (e.g. Cloudinary) — return directly
  if (person.photo.startsWith('http')) return person.photo;
  return portrait(seed);
};

// "Dr. Meera Raghavan" -> "meera.raghavan"
export const slug = (name) =>
  name
    .toLowerCase()
    .replace(/^(dr|prof)\.\s*/, '')
    .replace(/[^a-z]+/g, '.')
    .replace(/^\.|\.$/g, '');

// Gear outline used by the Gear icon
export function gearPath(n = 8, ro = 10.2, ri = 7.6, cx = 12, cy = 12) {
  const step = (2 * Math.PI) / n;
  const pts = [];
  for (let k = 0; k < n; k++) {
    const base = k * step;
    for (const [r, o] of [[ri, -0.3], [ro, -0.17], [ro, 0.17], [ri, 0.3]]) {
      const a = base + o * step;
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
  }
  return 'M' + pts.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join(' L') + 'Z';
}
