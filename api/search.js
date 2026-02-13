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

// Use CommonJS export for stability
module.exports = async (req, res) => {
    // 1. Handle CORS immediately
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { category, gender, budgetTier, size, attributes } = req.query;

        // 2. Filter Local Catalog (Minimal Match)
        const candidates = shoeCatalog.filter(shoe => {
            if (gender && !shoe.gender.some(g => g.toLowerCase() === gender.toLowerCase())) return false;
            return true;
        }).slice(0, 5); // Take top 5 basic matches

        // 3. ENHANCE with Live Data (SerpAPI)
        // We will search for exactly what the user asked for, using the local matches mainly as query templates
        // or just constructing a raw smart query.

        const targetGender = gender === 'men' ? "Men's" : "Women's";
        const targetCategory = category || "Shoes";
        // Construct a specific query for SerpAPI
        const searchQuery = `${targetGender} ${targetCategory} shoes ${size ? 'Size UK ' + size : ''}`;

        console.log("Fetching SerpAPI:", searchQuery);

        const usp = new URLSearchParams({
            engine: "google_shopping",
            q: searchQuery,
            api_key: SERPAPI_KEY,
            num: "5",
            gl: "in",
            hl: "en",
            location: "India"
        });

        const serpUrl = `https://serpapi.com/search.json?${usp.toString()}`;

        const resp = await fetch(serpUrl);
        const data = await resp.json();

        if (data.error) {
            console.error("SerpAPI Error:", data.error);
            // Fallback to local candidates if API fails but we don't crash
            return res.status(200).json({
                recommendations: candidates.map(c => ({
                    brand: c.brand,
                    model: c.model,
                    price: c.min_price,
                    live_price: c.min_price,
                    image: '', // Needs a fallback image
                    best_link: 'https://google.com',
                    source: 'Local Catalog Fallback'
                }))
            });
        }

        // Transform SerpAPI results
        const results = (data.shopping_results || []).map(item => ({
            brand: item.source || item.title.split(' ')[0],
            model: item.title,
            price: item.extracted_price || 0,
            live_price: item.extracted_price,
            image: item.thumbnail,
            best_link: item.product_link,
            source: item.source || "Google Shopping"
        }));

        res.status(200).json({ recommendations: results });

    } catch (e) {
        console.error("Critical API Error:", e);
        res.status(500).json({ error: e.message });
    }
}
