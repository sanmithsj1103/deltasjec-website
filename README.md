# Delta Club Website

React + Vite single-page site for the Delta engineering club.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build and deploy
```bash
npm run build      # outputs dist/
```
Deploy `dist/` on Cloudflare Pages, Netlify or Vercel (build command `npm run build`, output folder `dist`).

## Where to edit things
| What | File |
| --- | --- |
| Team, departments, partners, faculty messages, sub-page text | `src/data.js` |
| Colours, fonts, sizes | `src/styles.css` (tokens at the top) |
| Page sections | `src/components/` |
| Join form submission | `src/components/Join.jsx` (see the `submit` function) |
| Logo | `src/assets/logo-full.png`, `logo-mark.png` |

## Font
The design uses Tungsten Condensed/Compressed Bold, which is a licensed font. Anton is loaded from Google Fonts as a free stand-in.
With a web licence, add the woff2 files to `src/assets/fonts/` and uncomment the `@font-face` block at the top of `src/styles.css`.

## Real photos
Member photos currently come from a generated placeholder (`src/utils.js`). Put real photos in `src/assets/team/`, add a `photo` field per person in `src/data.js`, and the cards will use it.
