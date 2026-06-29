# OTU Product Catalog — WeChat Mini Program

A dark-themed product showcase mini program for tech consumer electronics. Pure display with no transactions — users browse products and copy a WeChat ID to make contact.

## Features

- **83 products** across **12 categories** (drones, robots, smart home, 3D printers, etc.)
- Dark Tech UI theme (`#0a0a0f` background, `#00e5ff` accent)
- Real-time search with instant results
- Category browsing with horizontal tag scroll + 2-column grid
- Product detail pages with image carousel, spec table, and one-tap WeChat ID copy
- Cloud-powered backend (WeChat Cloud Development)

## Tech Stack

- **Frontend**: WeChat native WXML + WXSS + JS
- **Backend**: WeChat Cloud Development (Cloud Database + Cloud Functions + Cloud Storage)
- **UI**: Custom Dark Tech theme, responsive grid layout

## Project Structure

```
miniprogram/
├── app.js / app.json / app.wxss     # Global config + Dark Tech theme
├── products.js                       # Product data (83 items, import source)
├── pages/
│   ├── index/       Home (Banner + category entry + hot picks)
│   ├── category/    Category (tag scroll + grid + pagination)
│   ├── search/      Search (live search + hot tags)
│   ├── detail/      Detail (carousel + specs + copy WeChat ID)
│   └── about/       About (brand info + product stats + contact)
├── components/
│   └── product-card/ Reusable product card (list/grid)
├── cloudfunctions/
│   ├── getProducts/ Query by category/hot/pagination
│   └── searchProducts/ Keyword search
└── docs/                            # Design docs + SOP
```

## Getting Started

1. Open the project directory in [WeChat DevTools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. Compile and preview
3. Deploy cloud functions: right-click `cloudfunctions/getProducts` → Upload and Deploy
4. Import product data: Cloud Console → Database → `products` → Import (JSON/CSV)

## License

MIT
