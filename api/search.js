const { shoeCatalog, priceRanges } = require('./data.cjs');

// Logic for fetching product data
let fetch;
const fetchReady = (async () => {
    fetch = (await import('node-fetch')).default;
})();

const SERPAPI_KEY = process.env.SERPAPI_KEY || '16fad441d9fe8cf7b5db01ebdc42dd99cf42c05c1d5ec70da366ba4d55786ded';
const productCache = new Map();

async function fetchProductData(brand, model, { size, gender, budgetMin, budgetMax } = {}) {
    await fetchReady;
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
        const lowerBound = budgetMin ? budgetMin * 0.8 : 0;
        const upperBound = budgetMax ? budgetMax * 1.15 : Infinity;
        return price >= lowerBound && price <= upperBound;
    };

    try {
        const query = encodeURIComponent(`${brand} ${model} ${gender === 'men' ? "men's" : "women's"} shoes ${size ? `UK ${size}` : ''}`);
        const url = `https://serpapi.com/search.json?engine=google_shopping&q=${query}&api_key=${SERPAPI_KEY}&num=15&gl=in&hl=en`;
        const resp = await fetch(url, { timeout: 10000 });
        const data = await resp.json();

        if (data.shopping_results?.length > 0) {
            const trustedResults = data.shopping_results.filter(r => isTrustedSource(r.source));
            let bestResult = null;
            for (const result of trustedResults) {
                if (isPriceAcceptable(result.extracted_price)) {
                    bestResult = result;
                    break;
                }
            }
            if (!bestResult && trustedResults.length > 0) bestResult = trustedResults[0];

            if (bestResult) {
                const res = {
                    image: bestResult.thumbnail || '',
                    link: bestResult.product_link || '',
                    source: bestResult.source || '',
                    livePrice: bestResult.extracted_price || null
                };
                productCache.set(cacheKey, res);
                return res;
            }

            const firstResult = data.shopping_results[0];
            const res = {
                image: firstResult.thumbnail || '',
                link: `https://www.google.com/search?q=${encodeURIComponent(brand + ' ' + model + ' buy')}&tbm=shop`,
                source: '',
                livePrice: null
            };
            productCache.set(cacheKey, res);
            return res;
        }
    } catch (err) {
        console.error(`SerpAPI error:`, err.message);
    }

    return { image: '', link: '', source: '', livePrice: null };
}

function calculateScore(shoe, filters) {
    let score = 0;
    const attr = filters.attributes || {};
    if (shoe.category === filters.category) score += 3;

    if (attr.brand) {
        const brands = Array.isArray(attr.brand) ? attr.brand : [attr.brand];
        if (brands.includes(shoe.brand)) score += 5;
    }

    if (attr.vibe && shoe.attributes.vibe) {
        const userVibes = Array.isArray(attr.vibe) ? attr.vibe : [attr.vibe];
        const matchCount = userVibes.filter(v => shoe.attributes.vibe.includes(v)).length;
        if (matchCount > 0) score += 3 * matchCount;
    }

    if (attr.silhouette && shoe.attributes.silhouette) {
        const userSilhouettes = Array.isArray(attr.silhouette) ? attr.silhouette : [attr.silhouette];
        if (userSilhouettes.includes(shoe.attributes.silhouette)) score += 3;
    }

    if (shoe.primary_price_band === filters.budgetTier) score += 3;
    score += (shoe.popularity_score || 0) + (shoe.trending_score || 0) * 1.5;

    return score;
}

// Vercel Serverless Function entry point
module.exports = async (req, res) => {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }

    try {
        const { category, gender, budgetTier, size, attributes } = req.query;
        if (!category && !gender) {
            // Probably a heartbeat or direct访问
            return res.status(200).json({ status: "ok", message: "Shoeman API is live" });
        }

        const attrObj = attributes ? JSON.parse(attributes) : {};
        const budgetRange = priceRanges.find(r => r.id === budgetTier);
        const targetGender = gender?.toLowerCase().trim();
        const targetCategory = category?.toLowerCase().trim();

        let candidates = shoeCatalog.filter(shoe => {
            const shoeGenders = shoe.gender?.map(g => g.toLowerCase().trim()) || [];
            if (!shoeGenders.includes(targetGender)) return false;

            if (targetCategory) {
                const shoeCat = (shoe.category || '').toLowerCase().trim();
                if (!shoeCat.includes(targetCategory.split(' ')[0])) return false;
            }

            if (budgetRange) {
                if (shoe.min_price > budgetRange.max || shoe.max_price < budgetRange.min) return false;
            }
            return true;
        });

        // Scoring
        const scored = candidates.map(shoe => ({
            ...shoe,
            score: calculateScore(shoe, { category, budgetTier, attributes: attrObj })
        }));

        scored.sort((a, b) => b.score - a.score);
        const top5 = scored.slice(0, 5);

        // Enrich with live data
        const recommendations = await Promise.all(top5.map(async (shoe) => {
            const liveData = await fetchProductData(shoe.brand, shoe.model, {
                size: size || null,
                gender: targetGender,
                budgetMin: budgetRange?.min,
                budgetMax: budgetRange?.max
            });

            return {
                brand: shoe.brand,
                model: shoe.model,
                price: shoe.min_price,
                live_price: liveData.livePrice,
                image: liveData.image,
                best_link: liveData.link,
                source: liveData.source,
                why_recommended: `${shoe.brand} matches your ${attrObj.vibe?.join(' & ') || 'style'} preference.`
            };
        }));

        res.status(200).json({ recommendations });
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
