# Parul Sharma | Personal Website

A clean, static HTML portfolio website. No frameworks, no build tools — just sturdy HTML, CSS, and assets.

## Pages

- **index.html** — Home / Landing page
- **cv.html** — Curriculum Vitae / Resume
- **publications.html** — Academic publications and research papers
- **research.html** — Research interests and focus areas

## Structure

```
.
├── index.html              # Home page
├── cv.html                 # CV/Resume
├── publications.html       # Publications
├── research.html           # Research interests
├── styles/
│   └── global.css          # Main stylesheet
├── public/
│   ├── img/                # Images
│   ├── blogImages/         # Blog/article images
│   ├── assets/             # Other assets
│   └── robots.txt          # SEO robots file
└── README.md               # This file
```

## Quick Start

### View locally

```bash
# Option 1: Open file directly
open index.html

# Option 2: Serve via HTTP (allows proper asset loading)
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g., `parul-sharma.github.io`)
2. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. Go to Settings → Pages → Source: set to `main` branch, `/` (root) folder
4. Visit your site at `https://YOUR_USERNAME.github.io`

## Features

- ✅ No dependencies — pure HTML/CSS
- ✅ Fast and reliable — no build step needed
- ✅ SEO-friendly — standard semantic HTML
- ✅ Mobile-responsive — works on all devices
- ✅ Easy to maintain — edit HTML files directly

## Notes

- All pages share a consistent header, navigation, and footer
- Styling is centralized in `styles/global.css`
- Images and assets are in `public/`
- No databases or backend required — fully static site

---

Built with ❤️ for longevity and simplicity.
