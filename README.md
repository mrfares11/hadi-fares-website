# Personal Website

My personal portfolio — built with [Next.js](https://nextjs.org), Tailwind CSS, and TypeScript. Deployed on [Vercel](https://vercel.com) with automatic deploys on every push to `main`.

## ✏️ How to edit my content

**All text lives in one file:** [`src/data/content.ts`](src/data/content.ts).
Open it and replace the placeholder values — name, role, bio, experience, projects, achievements, etc. The whole site updates automatically.

## 🖼️ How to change images

1. Put image files in the [`public/`](public) folder (e.g. `public/profile.jpg`, `public/projects/my-app.jpg`).
2. Reference them in `src/data/content.ts` by path starting with `/` (e.g. `"/profile.jpg"`).

The starter ships with placeholder `.svg` images — just replace the paths with your own files.

## 🎨 Changing the accent color / theme

Edit the CSS variables at the top of [`src/app/globals.css`](src/app/globals.css). Change `--accent` to re-theme the entire site. Dark mode follows the visitor's system setting automatically.

## 🚀 Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## 🔁 Deploying (auto-deploy on push)

This repo is connected to Vercel. Once connected, **every `git push` to `main` triggers a new production deploy** automatically — no manual steps. Pull requests get their own preview URLs.
