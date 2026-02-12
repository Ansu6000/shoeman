const express = require('express');
const cors = require('cors');
const path = require('path');
const { shoeCatalog, priceRanges } = require('./data.cjs');

let fetch;
const fetchReady = (async () => { fetch = (await import('node-fetch')).default; })();
const SERPAPI_KEY = process.env.SERPAPI_KEY || '16fad441d9fe8cf7b5db01ebdc42dd99cf42c05c1d5ec70da366ba4d55786ded';
const productCache = new Map();

async function fetchProductData(brand, model, { size, gender, budgetMin, budgetMax } = {}) {
    const cacheKey = `${brand}-${model}-${gender || ''}-${size || ''}-${budgetMin || ''}`.toLowerCase();
    if (productCache.has(cacheKey)) return productCache.get(cacheKey);
    const TRUSTED_RETAILERS = ['myntra', 'flipkart', 'amazon', 'ajio', 'nykaa', 'tata cliq', 'tatacliq'];
    const BRAND_DOMAINS = ['nike.com', 'adidas.co.in', 'adidas.com', 'puma.com', 'reebok.com', 'asics.com', 'skechers.com'];
    const isTrustedSource = (source) => {
        if (!source) return false;
        const s = source.toLowerCase();
        return TRUSTED_RETAILERS.some(r => s.includes(r)) || BRAND_DOMAINS.some(d => s.includes(d));
    };
    const isPriceAcceptable = (price) => {
        if (!price) return false;
        if (!budgetMin && !budgetMax) return true;
        return price >= (budgetMin ? budgetMin * 0.8 : 0) && price <= (budgetMax ? budgetMax * 1.15 : Infinity);
    };
    await fetchReady;
    try {
        const query = encodeURIComponent(`${brand} ${model} ${gender === 'men' ? "men's" : "women's"} shoes ${size ? `UK ${size}` : ''}`);
        const url = `https://serpapi.com/search.json?engine=google_shopping&q=${query}&api_key=${SERPAPI_KEY}&num=15&gl=in&hl=en`;
        const resp = await fetch(url, { timeout: 10000 });
        const data = await resp.json();
        if (data.shopping_results?.length > 0) {
            const trustedResults = data.shopping_results.filter(r => isTrustedSource(r.source));
            let bestResult = trustedResults.find(r => isPriceAcceptable(r.extracted_price)) || trustedResults[0];
            if (bestResult) {
                const res = { image: bestResult.thumbnail || '', link: bestResult.product_link || '', source: bestResult.source || '', livePrice: bestResult.extracted_price || null };
                productCache.set(cacheKey, res);
                return res;
            }
            const first = data.shopping_results[0];
            const res = { image: first.thumbnail || '', link: `https://www.google.com/search?q=${encodeURIComponent(brand + ' ' + model + ' buy')}&tbm=shop`, source: '', livePrice: null };
            productCache.set(cacheKey, res);
            return res;
        }
    } catch (e) { console.error(e); }
    return { image: '', link: '', source: '', livePrice: null };
}

function calculateScore(shoe, filters) {
    let score = 0;
    const attr = filters.attributes || {};
    if (shoe.category === filters.category) score += 3;
    if (attr.brand) {
        const brands = Array.isArray(attr.brand) ? attr.brand : [attr.brand];
        if (brands.includes(shoe.brand)) score += 2;
    }
    if (attr.vibe && shoe.attributes.vibe) {
        const userVibes = Array.isArray(attr.vibe) ? attr.vibe : [attr.vibe];
        score += 3 * userVibes.filter(v => shoe.attributes.vibe.includes(v)).length;
    }
    if (attr.silhouette && shoe.attributes.silhouette && (Array.isArray(attr.silhouette) ? attr.silhouette : [attr.silhouette]).includes(shoe.attributes.silhouette)) score += 2;
    if (attr.cushion && shoe.attributes.cushion === attr.cushion) score += 2;
    if (attr.use_case && shoe.attributes.use_case) {
        const userUses = Array.isArray(attr.use_case) ? attr.use_case : [attr.use_case];
        score += 2 * userUses.filter(u => shoe.attributes.use_case.includes(u)).length;
    }
    if (shoe.primary_price_band === filters.budgetTier) score += 3;
    score += (shoe.popularity_score || 0) + (shoe.trending_score || 0) * 1.5;
    return score;
}

const app = express();
app.use(cors());

// STATIC FILES served from /public
app.use(express.static(path.join(__dirname, 'public')));

// API ROUTE
app.get('/api/search', async (req, res) => {
    try {
        const { category, gender, budgetTier, size, attributes } = req.query;
        const attrObj = attributes ? JSON.parse(attributes) : {};
        const budgetRange = priceRanges.find(r => r.id === budgetTier);
        const targetGender = gender?.toLowerCase().trim();
        const targetCategory = category?.toLowerCase().trim();
        let candidates = shoeCatalog.filter(shoe => {
            const genders = shoe.gender?.map(g => g.toLowerCase().trim()) || [];
            if (!genders.includes(targetGender)) return false;
            if (targetCategory && !shoe.category?.toLowerCase().includes(targetCategory.split(' ')[0])) return false;
            if (budgetRange && (shoe.min_price > budgetRange.max || shoe.max_price < budgetRange.min)) return false;
            return true;
        });
        candidates = candidates.map(s => ({ ...s, finalScore: calculateScore(s, { category, budgetTier, attributes: attrObj }) }));
        candidates.sort((a, b) => b.finalScore - a.finalScore);
        let top5 = candidates.slice(0, 5);
        const results = await Promise.all(top5.map(async (shoe) => {
            const data = await fetchProductData(shoe.brand, shoe.model, { size, gender: targetGender, budgetMin: budgetRange?.min, budgetMax: budgetRange?.max });
            return { brand: shoe.brand, model: shoe.model, price: shoe.min_price, live_price: data.livePrice, image: data.image, best_link: data.link, source: data.source, why_recommended: `${shoe.brand} matches your style and budget.` };
        }));
        res.json({ recommendations: results });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Search failed" });
    }
});

// Wildcard to serve index.html for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
