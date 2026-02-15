// Standalone Deployment - No external file dependencies
const SERPAPI_KEY = process.env.SERPAPI_KEY || '16fad441d9fe8cf7b5db01ebdc42dd99cf42c05c1d5ec70da366ba4d55786ded';

// Minimal inlined data to prevent import errors
const priceRanges = [
    { "id": "2k-5k", "label": "₹2k - ₹5k", "min": 2000, "max": 4999 },
    { "id": "5k-7k", "label": "₹5k - ₹7k", "min": 5000, "max": 6999 },
    { "id": "7k-10k", "label": "₹7k - ₹10k", "min": 7000, "max": 9999 },
    { "id": "10k-15k", "label": "₹10k - ₹15k", "min": 10000, "max": 14999 },
    { "id": "15k+", "label": "₹15k +", "min": 15000, "max": 100000 }
];

const shoeCatalog = [
    {
        "id": "nike-pegasus-40",
        "brand": "Nike",
        "model": "Pegasus 40",
        "category": "Running & Sports",
        "gender": ["Men"],
        "min_price": 11000,
        "max_price": 13000,
        "attributes": { "vibe": ["Sporty"], "cushion": "Balanced" }
    },
    {
        "id": "nike-pegasus-40-women",
        "brand": "Nike",
        "model": "Pegasus 40 Women",
        "category": "Running & Sports",
        "gender": ["Women"],
        "min_price": 11000,
        "max_price": 13000,
        "attributes": { "vibe": ["Sporty"], "cushion": "Balanced" }
    }
];

export default async function handler(req, res) {
    // 1. Handle CORS immediately
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        // In Vercel, query is available on req.query
        const { category, gender, budgetTier, size, attributes: attributesRaw } = req.query;
        const attributes = attributesRaw ? JSON.parse(attributesRaw) : {};
        const selectedBrands = attributes.brand || [];
        const isSurpriseMe = selectedBrands.includes("Surprise me");

        // 1. Get Price Range
        const tier = priceRanges.find(t => t.id === budgetTier) || { min: 0, max: 1000000 };
        const minPrice = tier.min;
        const maxPrice = tier.max;

        // 2. Filter Local Catalog (Minimal Match) as fallback candidates
        const candidates = shoeCatalog.filter(shoe => {
            if (gender && !shoe.gender.some(g => g.toLowerCase() === gender.toLowerCase())) return false;
            // Basic price check for catalog
            if (shoe.min_price > maxPrice || shoe.max_price < minPrice) return false;
            return true;
        });

        // 3. ENHANCE with Live Data (SerpAPI)
        const targetGender = gender === 'men' ? "Men's" : "Women's";

        // Category Optimization Map
        const categoryOptimizers = {
            "Sneakers": "lifestyle sneakers street style casual -running -performance -sports -marathon",
            "Running & Sports": "performance running sports shoes marathon training -casual -formal",
            "Casual": "casual daily wear comfort shoes -formal -sports -running",
            "Formal": "formal dress shoes oxford derby loafer -sneaker -running -sports"
        };
        const optimizationKw = categoryOptimizers[category] || category || "Shoes";

        // Include brands in search query if selected and not surprise me
        let brandQuery = (!isSurpriseMe && selectedBrands.length > 0) ? selectedBrands.join(' ') : '';

        // Boost for Sneakers if "Surprise me" or broad search
        if (category === "Sneakers" && (isSurpriseMe || selectedBrands.length === 0)) {
            brandQuery = "popular trending lifestyle"; // Force popular results
        }

        const searchQuery = `${targetGender} ${brandQuery} ${optimizationKw} ${size ? 'Size UK ' + size : ''}`.replace(/\s+/g, ' ').trim();

        console.log("Fetching SerpAPI:", searchQuery, "Price Range:", minPrice, "-", maxPrice);

        const usp = new URLSearchParams({
            engine: "google_shopping",
            q: searchQuery,
            api_key: SERPAPI_KEY,
            num: "20", // Request more to allow filtering
            gl: "in",
            hl: "en",
            location: "India"
        });

        const serpUrl = `https://serpapi.com/search.json?${usp.toString()}`;

        const resp = await fetch(serpUrl);
        const data = await resp.json();

        let finalResults = [];

        if (data.error) {
            console.error("SerpAPI Error:", data.error);
            finalResults = candidates.map(c => ({
                brand: c.brand,
                model: c.model,
                price: c.min_price,
                live_price: c.min_price,
                image: '',
                best_link: 'https://google.com',
                why_recommended: 'Top match in catalog',
                source: 'Local Catalog Fallback'
            }));
        } else {
            const rawResults = (data.shopping_results || []).map(item => ({
                brand: item.source || item.title.split(' ')[0],
                model: item.title,
                price: item.extracted_price || 0,
                live_price: item.extracted_price,
                image: item.thumbnail,
                best_link: item.product_link,
                source: item.source || "Google Shopping"
            }));

            // Filter by Price and Brand
            finalResults = rawResults.filter(item => {
                // Price Filter
                const priceMatch = item.price >= (minPrice * 0.8) && item.price <= (maxPrice * 1.2); // Allow 20% wiggle room

                // Brand Filter
                let brandMatch = true;
                if (!isSurpriseMe && selectedBrands.length > 0) {
                    brandMatch = selectedBrands.some(b =>
                        item.model.toLowerCase().includes(b.toLowerCase()) ||
                        item.brand.toLowerCase().includes(b.toLowerCase())
                    );
                }

                // Category Match (Strictness)
                let categoryMatch = true;
                if (category === "Sneakers") {
                    const isPerformance = ["running", "marathon", "training", "performance", "sprint"].some(kw =>
                        item.model.toLowerCase().includes(kw)
                    );
                    // Exceptions for "Retro Running" or "Running Sneaker" which are lifestyle
                    const isLifestyle = ["sneaker", "casual", "retro", "lifestyle"].some(kw =>
                        item.model.toLowerCase().includes(kw)
                    );
                    if (isPerformance && !isLifestyle) categoryMatch = false;
                }

                return priceMatch && brandMatch && categoryMatch;
            });

            // If we have too few results, loosen the price constraint slightly before giving up
            if (finalResults.length < 3) {
                const supplementary = rawResults.filter(item => {
                    if (finalResults.find(f => f.model === item.model)) return false;

                    let brandMatch = true;
                    if (!isSurpriseMe && selectedBrands.length > 0) {
                        brandMatch = selectedBrands.some(b =>
                            item.model.toLowerCase().includes(b.toLowerCase()) ||
                            item.brand.toLowerCase().includes(b.toLowerCase())
                        );
                    }
                    return brandMatch; // Just brand match if price is hard to find
                });
                finalResults = [...finalResults, ...supplementary].slice(0, 10);
            }
        }

        // Final Sort and Slice
        // Sort by price proximity to the middle of range
        const midPrice = (minPrice + maxPrice) / 2;
        finalResults.sort((a, b) => Math.abs(a.price - midPrice) - Math.abs(b.price - midPrice));

        res.status(200).json({ recommendations: finalResults.slice(0, 5) });

    } catch (e) {
        console.error("Critical API Error:", e);
        res.status(500).json({ error: e.message });
    }
}
