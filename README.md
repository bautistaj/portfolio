# 🌐 bautistaj — Multilingual Developer Portfolio

Static landing page for `bautistaj`, full-stack developer. Built in HTML, CSS and Bootstrap. It includes:

- 🌐 English (default) versions
- 🌓 Dark mode by default
- ✅ SEO-friendly: canonical, hreflang, sitemap, Open Graph
- ⚡ Fast and minified with [esbuild](https://esbuild.github.io/)

## 📁 Structure

```
portfolio/
├── index.html         # English version
├── css/style.css
├── js/script.js
├── sitemap.xml
├── robots.txt
└── site.webmanifest
```

## ⚙️ Minify with esbuild

```bash
npx esbuild css/style.css --minify --outfile=css/style.min.css
npx esbuild js/script.js --minify --outfile=js/script.min.js
```

Update HTML:

```html
<link rel="stylesheet" href="./css/style.min.css" />
<script src="./js/script.min.js" defer></script>
```

## 🚀 Deploy

### GitHub Pages

- Upload `/portfolio` folder to your `bautistaj/portfolio` repo
- Enable GitHub Pages → `main` branch → root

👉 https://bautistaj.github.io/portfolio/

### Custom domain (bautistaj.dev)

- Upload to your hosting or GitHub Pages with CNAME
- Make sure canonical and sitemap URLs are correct

## 🔍 Validate

- [Google Search Console](https://search.google.com/search-console/about)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [hreflang.org](https://hreflang.org/)
- [Squoosh](https://squoosh.app/) — compress images
- [Tinypng](https://tinypng.com/) — compress images 

## 📫 Contact

Made by [bautistaj](bautistaj@outloo.com) — Full-Stack Developer