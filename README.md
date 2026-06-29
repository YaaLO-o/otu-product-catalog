# OTU — Tech Product Catalog

A dark-themed product showcase web app for tech consumer electronics. Browse **83 products** across **12 categories** with real-time search, category filtering, and a polished mobile-first UI.

**Live Demo** → [View on GitHub Pages](https://yaalo-o.github.io/otu-product-catalog/)

## Why This Project

My family is starting a tech consumer electronics booth at Yiwu International Trade City (义乌国际商贸城), selling chargers, cables, earbuds, power banks, and more. Customers visit the booth to browse products, but a physical catalog is slow to update and hard to carry around.

I built this as a **WeChat Mini Program** so customers could scan a QR code, browse the full product catalog on their phone, and copy our WeChat ID to place orders. The `miniprogram/` directory contains the complete Mini Program source code with cloud backend.

However, WeChat Mini Program publishing requires business registration and domain verification, which takes time. To demonstrate the project immediately, I built a **standalone web version** (`index.html`) that replicates the full Mini Program experience in a browser — same UI, same data, same interactions. This is the live demo you see above.

Once the WeChat review is complete, the Mini Program can be deployed directly.

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

Or simply visit the [live demo](https://yaalo-o.github.io/otu-product-catalog/).

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
