const { shoeCatalog, priceRanges } = require('./data.js');

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
            // Handle broader category match
            if (targetCategory && shoe.category) {
                const catLower = shoe.category.toLowerCase();
                // if e.g. "Running & Sports" vs "Running", try simple substring match
                const simpleCat = targetCategory.split(' ')[0];
                if (!catLower.includes(simpleCat)) return false;
            }
            if (budgetRange && (shoe.min_price > budgetRange.max || shoe.max_price < budgetRange.min)) return false;
            return true;
        });

        // Simple scoring
        const scored = candidates.map(shoe => {
            let score = 0;
            if (shoe.category === category) score += 3;
            return { ...shoe, score };
        }).sort((a, b) => b.score - a.score).slice(0, 5);

        // Use Global fetch (Node 18+)
        const results = await Promise.all(scored.map(async (shoe) => {
            const query = encodeURIComponent(`${shoe.brand} ${shoe.model} ${targetGender} shoes ${size ? `UK ${size}` : ''}`);
            const url = `https://serpapi.com/search.json?engine=google_shopping&q=${query}&api_key=${SERPAPI_KEY}&num=3&gl=in&hl=en&location=India`;

            let data = { shopping_results: [] };
            try {
                const resp = await fetch(url);
                if (resp.ok) {
                    data = await resp.json();
                } else {
                    console.error("SerpAPI fetch failed for:", query, resp.status);
                }
            } catch (e) { console.error("SerpAPI Error:", e.message); }

            const best = data.shopping_results?.[0] || {};

            // Fallback image if SerpAPI fails
            const defaultImages = {
                'Nike': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
                // Other fallbacks handled by frontend BRAND_IMAGES if null
            };

            return {
                brand: shoe.brand,
                model: shoe.model,
                price: shoe.min_price,
                live_price: best.extracted_price || null,
                image: best.thumbnail || defaultImages[shoe.brand] || '',
                best_link: best.product_link || `https://www.google.com/search?q=${query}&tbm=shop`,
                source: best.source || 'Google Shopping'
            };
        }));

        res.status(200).json({ recommendations: results });
    } catch (e) {
        console.error("API Error detailed:", e);
        res.status(500).json({ error: "Internal Error", details: e.message });
    }
};
