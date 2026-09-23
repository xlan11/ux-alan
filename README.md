# Alan Kelly — UX portfolio

Static Astro portfolio designed for GitHub Pages, with a Git-based Decap CMS setup for future case studies.

## Local development

```sh
npm install
npm run dev
```

## Publishing

The included GitHub Actions workflow builds and deploys the site whenever `main` changes. Enable GitHub Pages in the repository settings and choose **GitHub Actions** as the source.

## Content editing

The CMS is available at `/admin/`. Before using it, configure GitHub OAuth for Decap CMS and replace the form endpoint in `src/pages/index.astro` with a Formspree endpoint. Both services have free options suitable for this static site.

The placeholder projects in `src/data/projects.js` can later be replaced by CMS content models as the case studies are added.
