# alex

Refactored static mirror of `https://www.raspberry.ventures` into a standard Vite project structure.

## Structure

- `src/` – source entry files (`main.js`, `styles.css`)
- `public/assets/` – mirrored images, fonts, JS/CSS assets
- `*.html` – multi-page HTML entries
- `vite.config.js` – Vite config with multi-page build and GitHub Pages base path

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy to GitHub Pages

Build output is generated into `dist/` with base path `/alex/`.
