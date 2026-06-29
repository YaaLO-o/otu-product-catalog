# OTU — Tech Product Catalog

A dark-themed product showcase web app for tech consumer electronics. Browse **83 products** across **12 categories** with real-time search, category filtering, and a polished mobile-first UI.

**Live Demo** → [View on GitHub Pages](https://yaa-lo-o.github.io/otu-product-catalog/)

## Features

- **83 products** spanning 12 categories: chargers, car chargers, cables, Bluetooth earbuds, wired earphones, speakers, power banks, car mounts, power strips, keyboards/mice, storage, and receivers
- **Dark Tech UI** — deep black background (`#0a0a0f`) with cyan accent (`#00e5ff`)
- **Real-time search** with debounced input and hot keyword tags
- **Category browsing** with horizontal tab scroll and 2-column product grid
- **Product detail** pages with specs table, description, and one-tap WeChat ID copy
- **Auto-rotating banner** showcasing featured products
- **Zero dependencies** — pure vanilla HTML, CSS, and JavaScript
- **Mobile-first design** rendered in a phone-frame mockup (iPhone 14 dimensions)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML5 + CSS3 + ES6 JavaScript |
| Data | Static JSON-style product data (`products.js`) |
| Styling | CSS Custom Properties, Grid, Flexbox |
| Hosting | GitHub Pages |

No frameworks. No build tools. No npm. Just open `index.html`.

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YaaLO-o/otu-product-catalog.git
cd otu-product-catalog

# Open in browser
open index.html
```

Or simply visit the [live demo](https://yaa-lo-o.github.io/otu-product-catalog/).

## Project Structure

```
otu-product-catalog/
├── index.html              # Main app (single-page, self-contained)
├── products.js             # Product data (83 items, 12 categories)
├── README.md
├── miniprogram/            # WeChat Mini Program prototype (reference)
│   ├── app.js / app.json / app.wxss
│   ├── pages/              # WeChat page components
│   ├── components/         # Reusable UI components
│   ├── cloudfunctions/     # Cloud function stubs
│   └── utils/
└── docs/
    └── 设计规格书.md        # Design specification (Chinese)
```

> The `miniprogram/` directory contains the original WeChat Mini Program source code that inspired this web version. It serves as a design reference and is not functional without a WeChat Cloud Development environment.

## Design

The UI follows a **Dark Tech** aesthetic:

- **Background**: `#0a0a0f` (deep black)
- **Cards**: `#14141f` (elevated surface)
- **Accent**: `#00e5ff` (cyan, interactive elements)
- **Warm accent**: `#ff6d00` (tags, badges)
- **Text**: `#f5f5f5` primary / `#9e9e9e` secondary

Each product category has a unique gradient background and emoji icon for visual differentiation without relying on images.

## License

MIT
