// Maps every file in src/assets/photos/ to its Vite-processed, cache-busted URL.
// Add a photo file to src/assets/photos/ and reference it in data.js by just
// the filename without extension, e.g.  photo: 'norman'
const files = import.meta.glob('./assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const PHOTOS = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    url,
  ])
);
