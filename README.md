# Shoeman®

Find your perfect pair in 30 seconds.

A shoe recommendation engine that understands your style, budget, and size — then finds real products from trusted Indian retailers like Myntra, Amazon, Flipkart, and Ajio.

---

## What It Does

Instead of scrolling through thousands of listings across shopping sites, you answer 5 quick questions. Shoeman searches a catalog of 5,430 shoes from 26 brands, scores them against your preferences, and returns exactly **5 recommendations** with real photos, live prices, and direct purchase links.

No accounts. No tracking. Just shoes.

---

## How It Works

1. **Take the quiz** — Gender → Category → Preferences → Size → Budget
2. **Scoring engine runs** — Matches your answers against 5,430 shoes across brand, style, price, use case, and more
3. **Live enrichment** — Fetches real product images and prices from Google Shopping via SerpAPI
4. **Trusted sources only** — Only shows results from Myntra, Amazon, Flipkart, Ajio, Nykaa, Tata CLiQ, and official brand sites. No random resellers.

---

## Quick Start

**Prerequisites:** Node.js 18+, a SerpAPI key ([get one here](https://serpapi.com), free tier gives 100 searches/month)

```bash
git clone https://github.com/your-username/shoeman.git
cd shoeman
npm install
echo "SERPAPI_KEY=your_key_here" > .env
npm start
```

Open http://localhost:3000

---

## Project Structure

```
shoeman/
├── index.html            Homepage
├── search.html           Quiz interface
├── styles.css            Design system and all styling
├── app.js                Frontend logic — quiz flow, API calls, rendering
├── questions.js           Dynamic question trees per category
├── data.js               Categories, price ranges, size options
├── server.js             Express API, scoring engine, SerpAPI integration
├── data.cjs              Shoe catalog (5,430 entries)
├── generate_catalog.js   Script that generates the catalog
├── .env                  SerpAPI key (not committed)
└── package.json
```

---

## Features

- **Adaptive questions** — Running shoes ask about cushion and terrain. Sneakers ask about vibe and silhouette. Formals ask about occasion.
- **5,430 shoes, 26 brands** — Nike, Adidas, ASICS, New Balance, Hoka, Puma, Vans, Converse, Skechers, Clarks, Timberland, and more.
- **Live prices** — Real market prices fetched from actual retailers, not estimated data.
- **Size-aware** — Your selected UK size is included in the product search.
- **Budget filtering** — Results stay within your chosen range. Tolerance of ±20% to catch deals.
- **Retailer whitelist** — Only Myntra, Amazon, Flipkart, Ajio, Nykaa, Tata CLiQ, and official brand sites. Everything else is rejected.
- **Caching** — SerpAPI results cached in memory so repeated queries are instant.

---

## How Scoring Works

Each shoe is scored across multiple signals:

- **Category + Gender** — hard filters, must match
- **Budget** — hard filter on price range, +3 bonus for exact tier match
- **Brand preference** — +5 for each brand the user selected
- **Vibe/Style** — +3 per match (Streetwear, Retro, Minimal, etc.)
- **Use case** — +2 per match (Road, Trail, Office, etc.)
- **Silhouette** — +3 per match (Low, Mid, High top)
- **Color** — +2 for matching preference
- **Cushion level** — +3 for matching preference
- **Popularity + Trending** — built-in scores from catalog data

Top 5 win. After scoring, each shoe is enriched with live data from Google Shopping.

---

## Categories

**Running & Sports** — Where do you run? Cushion level? Fit preference?

**Sneakers** — What's your vibe? Favorite brands? Height? Color preference?

**Casual** — Primary use? Fastening style?

**Formal** — Shoe style (gender-specific)? Occasion?

---

## API

### GET /api/search

Query params: `category`, `gender`, `budgetTier`, `size`, `attributes` (JSON string)

Returns 5 recommendations, each with: brand, model, live price, product image, purchase link, retailer source, and a short explanation of why it was recommended.

---

## Tech Stack

- Frontend: HTML, CSS, vanilla JavaScript
- Backend: Node.js, Express
- Data enrichment: SerpAPI (Google Shopping)
- No frameworks, no build step

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `SERPAPI_KEY` | SerpAPI key for Google Shopping queries |

---

## License

MIT

---

Built for sneaker lovers in India.
