// Picks up every logo file saved in src/assets/tech/ and maps file name (no extension) -> URL.
// Example: src/assets/tech/ansys.svg  ->  LOGOS.ansys
const files = import.meta.glob('./assets/tech/*.{svg,png,webp}', { eager: true, query: '?url', import: 'default' });

export const LOGOS = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), url])
);