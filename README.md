# Martin Ndungu · Portfolio

A modern portfolio built with React, Vite, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## Build for Production

```bash
npm run build
```

This will generate a production-ready build in the `dist` directory.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## Deploy

The site is hosted on GitHub Pages at **https://mine-martin-12.github.io/**.

Every push to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site with `npm run build` and publishes `dist/` to Pages. In the repository settings, Pages must be set to **Source: GitHub Actions**.

Client-side routes such as `/about` survive a page refresh because of the redirect in `public/404.html` and the restore script in `index.html`.
