const { shoeCatalog, priceRanges } = require('../data.cjs');

let fetch;
const fetchReady = (async () => {
    fetch = (await import('node-fetch')).default;
})();

const SERPAPI_KEY = process.env.SERPAPI_KEY || '16fad441d9fe8cf7b5db01ebdc42dd99cf42c05c1d5ec70da366ba4d55786ded';

module.exports = async (req, res) => {
    // Standard Vercel Headers for CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { category, gender, budgetTier, size, attributes } = req.query;
        if (!category && !gender) return res.status(200).json({ status: "alive" });

        const attrObj = attributes ? JSON.parse(attributes) : {};
        const budgetRange = priceRanges.find(r => r.id === budgetTier);
        const targetGender = gender?.toLowerCase().trim();
        const targetCategory = category?.toLowerCase().trim();

        const candidates = shoeCatalog.filter(shoe => {
            const genders = shoe.gender?.map(g => g.toLowerCase().trim()) || [];
            if (!genders.includes(targetGender)) return false;
            if (targetCategory && !shoe.category?.toLowerCase().includes(targetCategory.split(' ')[0])) return false;
            if (budgetRange && (shoe.min_price > budgetRange.max || shoe.max_price < budgetRange.min)) return false;
            return true;
        });

        // Simple scoring
        const scored = candidates.map(shoe => {
            let score = 0;
            if (shoe.category === category) score += 3;
            // Add more scoring if needed, but keeping it simple for now
            return { ...shoe, score };
        }).sort((a, b) => b.score - a.score).slice(0, 5);

        await fetchReady;
        const results = await Promise.all(scored.map(async (shoe) => {
            const query = encodeURIComponent(`${shoe.brand} ${shoe.model} ${targetGender} shoes ${size ? `UK ${size}` : ''}`);
            const url = `https://serpapi.com/search.json?engine=google_shopping&q=${query}&api_key=${SERPAPI_KEY}&num=5&gl=in&hl=en`;

            let data = { shopping_results: [] };
            try {
                const resp = await fetch(url);
                data = await resp.json();
            } catch (e) { console.error("SerpAPI Error:", e.message); }

            const best = data.shopping_results?.[0] || {};
            return {
                brand: shoe.brand,
                model: shoe.model,
                price: shoe.min_price,
                live_price: best.extracted_price || null,
                image: best.thumbnail || '',
                best_link: best.product_link || `https://www.google.com/search?q=${query}&tbm=shop`,
                source: best.source || ''
            };
        }));

        res.status(200).json({ recommendations: results });
    } catch (e) {
        console.error("API Error:", e);
        res.status(500).json({ error: "Internal Error" });
    }
};
