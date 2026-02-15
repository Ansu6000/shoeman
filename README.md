# Shoeman® — Intelligent Footwear Discovery Engine

Shoeman is a high-performance recommendation engine designed to eliminate choice paralysis in the digital footwear marketplace. By leveraging a multi-signal scoring algorithm and live market data via SerpAPI, Shoeman delivers exactly five precision-matched recommendations tailored to specific user profiles, budgets, and technical requirements.

## Product Vision

The modern e-commerce experience is plagued by over-abundance. A typical search for "running shoes" returns thousands of results across multiple retailers, often ignoring the user's specific biomechanical needs or actual budget constraints. 

Shoeman solves this by shifting from **search** to **discovery**. Instead of filtering through noise, users engage with a 30-second diagnostic questionnaire that generates a curated "Perfect Pair" shortlist.

## Core Capabilities

### 1. Multi-Signal Scoring Algorithm
Every recommendation is the result of a scoring matrix that evaluates:
- **Profile Alignment**: Mandatory filters for gender, category, and UK sizing.
- **Budget Integrity**: Strict price-matching logic with a controlled ±20% tolerance to capture market deals while respecting user constraints.
- **Brand Diversity Layer**: A round-robin selection strategy that ensures a variety of manufacturers are represented in every result set.
- **Technical Attributes**: Context-aware scoring for running gait (cushion), aesthetic vibe (silhouette), and utility (use case).

### 2. Live Market Enrichment
Shoeman does not rely on static, outdated pricing. It performs real-time queries against Google Shopping (India) to provide:
- **Live Pricing**: Accurate costs from major Indian retailers (Amazon, Myntra, Flipkart, Ajio).
- **Stock Validation**: High-fidelity product links and current availability.
- **Retailer Whitelisting**: Automatic exclusion of unverified third-party resellers to ensure product authenticity.

### 3. Progressive Disclosure Architecture
The UI is built on a minimalist "Palmer" design system, focusing on visual clarity and reducing cognitive load through a step-by-step progressive disclosure questionnaire.

---

## Technical Stack

- **Frontend**: Vanilla JavaScript (ES6+), Semantic HTML5, CSS3 (Custom Design System).
- **Backend**: Node.js / Express (Vercel Serverless Architecture).
- **Data Enrichment**: SerpAPI (Google Shopping Engine Integration).
- **Logic**: Custom Round-Robin Diversity Algorithm & Model De-duplication.

---

## Deployment and Setup

### Local Development
1. Clone the repository: `git clone https://github.com/Ansu6000/shoeman.git`
2. Install dependencies: `npm install`
3. Configure Environment: Create a `.env` file in the root directory.
   ```
   SERPAPI_KEY=your_production_key_here
   ```
4. Execute: `npm start`

### Production
The engine is optimized for deployment on Vercel. Continuous Integration handles the building of serverless functions within the `api/` directory.

---

## API Documentation

### Recommendation Endpoint
`GET /api/reco`

**Parameters:**
- `category`: [Sneakers | Running & Sports | Casual | Formal]
- `gender`: [men | women]
- `budgetTier`: [2k-5k | 5k-7k | 7k-10k | 10k-15k | 15k+]
- `size`: UK Shoe Size (Numeric)
- `attributes`: Stringified JSON of secondary preferences (brands, vibe, etc.)

**Response Schema:**
Returns a JSON object containing an array of 5 `recommendations`. Each item includes brand name, model title, extracted price, high-resolution thumbnail, and a direct-to-retailer product link.

---

## Product Roadmap

- **Phase 2.0**: Implementation of user feedback loops to refine the scoring weights.
- **Phase 2.1**: Expansion of the retailer whitelist to include niche boutique sneaker stores in India.
- **Phase 3.0**: Migration of the core scoring engine to a vector-based similarity search (RAG) for deeper attribute matching.

---

© 2026 Shoeman®. Built for precision discovery.
