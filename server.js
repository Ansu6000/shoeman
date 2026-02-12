
const express = require('express');
const cors = require('cors');
const path = require('path');
const { shoeCatalog, priceRanges } = require('./data.cjs');

// Dynamic import for node-fetch (ESM module)
let fetch;
const fetchReady = (async () => { fetch = (await import('node-fetch')).default; })();

const SERPAPI_KEY = process.env.SERPAPI_KEY || '16fad441d9fe8cf7b5db01ebdc42dd99cf42c05c1d5ec70da366ba4d55786ded';

// In-memory cache for SerpAPI results (brand+model -> {image, link})
const productCache = new Map();

/**
 * Fetch real product image + shopping link from SerpAPI Google Shopping
 * ONLY returns results from trusted retailers or official brand sites
 */
async function fetchProductData(brand, model, { size, gender, budgetMin, budgetMax } = {}) {
    const cacheKey = `${brand}-${model}-${gender || ''}-${size || ''}-${budgetMin || ''}`.toLowerCase();
    if (productCache.has(cacheKey)) {
        return productCache.get(cacheKey);
    }

    // Trusted retailers — ONLY these are allowed
    const TRUSTED_RETAILERS = [
        'myntra', 'flipkart', 'amazon', 'ajio', 'nykaa', 'tata cliq', 'tatacliq'
    ];

    // Official brand domains — auto-trusted
    const BRAND_DOMAINS = [
        'nike.com', 'adidas.co.in', 'adidas.com', 'puma.com', 'reebok.com',
        'newbalance.com', 'asics.com', 'skechers.com', 'crocs.com',
        'bata.com', 'woodland.com', 'clarks.com', 'hushpuppies.com',
        'converse.com', 'vans.com', 'birkenstock.com', 'fila.com',
        'underarmour.com', 'shop.nike.com', 'shop.adidas.co.in'
    ];

    function isTrustedSource(source) {
        if (!source) return false;
        const s = source.toLowerCase();
        // Check trusted retailers
        if (TRUSTED_RETAILERS.some(r => s.includes(r))) return true;
        // Check official brand sites
        if (BRAND_DOMAINS.some(d => s.includes(d))) return true;
        return false;
    }

    function isPriceAcceptable(price) {
        if (!price) return false;
        if (!budgetMin && !budgetMax) return true;
        const lowerBound = budgetMin ? budgetMin * 0.8 : 0;
        const upperBound = budgetMax ? budgetMax * 1.15 : Infinity;
        return price >= lowerBound && price <= upperBound;
    }

    await fetchReady; // ensure node-fetch is loaded
    try {
        const parts = [brand, model];
        if (gender) parts.push(gender === 'men' ? "men's" : "women's");
        parts.push('shoes');
        if (size) parts.push(`UK ${size}`);

        const query = encodeURIComponent(parts.join(' '));
        const url = `https://serpapi.com/search.json?engine=google_shopping&q=${query}&api_key=${SERPAPI_KEY}&num=15&gl=in&hl=en`;

        const resp = await fetch(url, { timeout: 10000 });
        const data = await resp.json();

        if (data.shopping_results && data.shopping_results.length > 0) {
            // Filter to ONLY trusted sources
            const trustedResults = data.shopping_results.filter(r => isTrustedSource(r.source));

            let bestResult = null;

            // Priority 1: Trusted source + within budget
            for (const result of trustedResults) {
                if (isPriceAcceptable(result.extracted_price)) {
                    bestResult = result;
                    break;
                }
            }

            // Priority 2: Any trusted source (even if price is slightly off)
            if (!bestResult && trustedResults.length > 0) {
                bestResult = trustedResults[0];
            }

            if (bestResult) {
                const productData = {
                    image: bestResult.thumbnail || '',
                    link: bestResult.product_link || '',
                    source: bestResult.source || '',
                    livePrice: bestResult.extracted_price || null
                };
                productCache.set(cacheKey, productData);
                console.log(`   ✅ ${brand} ${model} → ₹${productData.livePrice} from ${productData.source}`);
                return productData;
            }

            // No trusted source found — use first result's IMAGE only, but link to Google Shopping
            const firstResult = data.shopping_results[0];
            const productData = {
                image: firstResult.thumbnail || '',
                link: `https://www.google.com/search?q=${encodeURIComponent(brand + ' ' + model + ' buy')}&tbm=shop`,
                source: '',
                livePrice: null
            };
            productCache.set(cacheKey, productData);
            console.log(`   ⚠️ ${brand} ${model} → no trusted retailer, using image only`);
            return productData;
        }
    } catch (err) {
        console.error(`SerpAPI error for ${brand} ${model}:`, err.message);
    }

    const fallback = { image: '', link: '', source: '', livePrice: null };
    productCache.set(cacheKey, fallback);
    return fallback;
}

const app = express();
app.use(cors());

// API ONLY - Static files are served natively by Vercel from the root

// ==================================================================================
// SCORING ENGINE
// ==================================================================================

function calculateScore(shoe, filters) {
    let score = 0;
    const attr = filters.attributes || {};

    // 1. Category Match (Base Requirement - Usually Filtered Out, but confirm)
    if (shoe.category === filters.category) score += 3;

    // 2. Brand Match
    let brandScore = 0;
    if (attr.brand) {
        const brands = Array.isArray(attr.brand) ? attr.brand : [attr.brand];
        if (brands.includes("Surprise me")) {
            // If surprise me, random boost to high popularity items?
            // Or neutral. Let's say +1 to keep them viable.
            brandScore += 1;
        } else if (brands.includes(shoe.brand)) {
            brandScore += 2; // Exact Match
        }
    }
    score += brandScore;

    // 3. Vibe Match
    let vibeScore = 0;
    if (attr.vibe && shoe.attributes.vibe) {
        const userVibes = Array.isArray(attr.vibe) ? attr.vibe : [attr.vibe];
        // Intersection
        const matchCount = userVibes.filter(v => shoe.attributes.vibe.includes(v)).length;
        if (matchCount > 0) vibeScore += 3 * matchCount;
    }
    score += vibeScore;

    // 4. Silhouette Match
    if (attr.silhouette && shoe.attributes.silhouette) {
        const userSilhouettes = Array.isArray(attr.silhouette) ? attr.silhouette : [attr.silhouette];
        if (userSilhouettes.includes(shoe.attributes.silhouette)) {
            score += 2;
        }
    }

    // 5. Cushion Match
    if (attr.cushion && shoe.attributes.cushion === attr.cushion) {
        score += 2;
    }

    // 6. Use Case Match
    if (attr.use_case && shoe.attributes.use_case) {
        const userUses = Array.isArray(attr.use_case) ? attr.use_case : [attr.use_case];
        const matchCount = userUses.filter(u => shoe.attributes.use_case.includes(u)).length;
        if (matchCount > 0) score += 2 * matchCount;
    }

    // 7. Price Fit (Tier Logic)
    let priceFit = 0;
    if (shoe.primary_price_band === filters.budgetTier) {
        priceFit = 3; // Perfect tier match
    } else {
        // Check overlap manually
        const range = priceRanges.find(r => r.id === filters.budgetTier);
        if (range) {
            if (shoe.max_price >= range.min && shoe.min_price <= range.max) {
                priceFit = 2; // Overlaps
            }
        }
    }
    score += priceFit;

    // 8. Popularity
    score += (shoe.popularity_score || 0);

    // 9. Trending
    score += (shoe.trending_score || 0) * 1.5;

    return score;
}

// ==================================================================================
// API
// ==================================================================================

app.get('/api/search', async (req, res) => {
    try {
        const { category, gender, budgetTier, size, attributes } = req.query;
        const attrObj = attributes ? JSON.parse(attributes) : {};

        console.log(`🔍 Search: ${gender} ${category} [${budgetTier}] size:${size || 'any'}`, attrObj);

        // Resolve the price range for strict filtering
        const budgetRange = priceRanges.find(r => r.id === budgetTier);

        // 1. Initial Filtering (Case-Insensitive)
        const targetGender = gender ? gender.toLowerCase().trim() : '';
        const targetCategory = category ? category.toLowerCase().trim() : '';

        let candidates = shoeCatalog.filter(shoe => {
            if (!shoe.gender) return false;
            const shoeGenders = shoe.gender.map(g => g.toLowerCase().trim());
            const genderMatch = shoeGenders.includes(targetGender);

            if (!genderMatch) return false;

            // Category Check (Case-Insensitive + Loose Match)
            if (targetCategory) {
                const shoeCat = (shoe.category || '').toLowerCase().trim();
                if (shoeCat !== targetCategory) {
                    const firstWord = targetCategory.split(' ')[0];
                    if (!shoeCat.includes(firstWord)) {
                        return false;
                    }
                }
            }

            // STRICT Price Filtering: Exclude shoes outside budget
            if (budgetRange) {
                if (shoe.min_price > budgetRange.max || shoe.max_price < budgetRange.min) {
                    return false;
                }
            }

            return true;
        });

        console.log(`   Found ${candidates.length} candidates after filtering`);

        // 2. Scoring
        candidates = candidates.map(shoe => ({
            ...shoe,
            finalScore: calculateScore(shoe, { category, budgetTier, attributes: attrObj })
        }));

        // 3. Sorting
        candidates.sort((a, b) => b.finalScore - a.finalScore);

        // 4. Strict Limit (Top 5)
        let top5 = candidates.slice(0, 5);

        // 5. Fallback logic
        if (top5.length < 5) {
            console.log("⚠️ Not enough exact matches, expanding search...");
            const existingIds = new Set(top5.map(s => s.id));

            let fillers = shoeCatalog
                .filter(s => {
                    if (!s.gender) return false;
                    const g = s.gender.map(x => x.toLowerCase().trim());
                    if (!g.includes(targetGender)) return false;
                    if (existingIds.has(s.id)) return false;
                    if (budgetRange) {
                        if (s.min_price > budgetRange.max || s.max_price < budgetRange.min) {
                            return false;
                        }
                    }
                    return true;
                })
                .sort((a, b) => b.popularity_score - a.popularity_score);

            for (const filler of fillers) {
                if (top5.length >= 5) break;
                top5.push({ ...filler, finalScore: 0 });
            }

            if (top5.length < 5) {
                const existingIds2 = new Set(top5.map(s => s.id));
                const fillers2 = shoeCatalog
                    .filter(s => {
                        if (!s.gender) return false;
                        const g = s.gender.map(x => x.toLowerCase().trim());
                        return g.includes(targetGender) && !existingIds2.has(s.id);
                    })
                    .sort((a, b) => b.popularity_score - a.popularity_score);

                for (const filler of fillers2) {
                    if (top5.length >= 5) break;
                    top5.push({ ...filler, finalScore: 0 });
                }
            }
        }

        // 6. Enrich with REAL product data from SerpAPI (parallel calls)
        // Pass size, gender, budget for accurate product matching
        console.log('   🔎 Fetching real product images & links...');
        const enrichedResults = await Promise.all(top5.map(async (shoe) => {
            const reason = explainSelection(shoe, { ...attrObj, budgetTier });

            const productData = await fetchProductData(shoe.brand, shoe.model, {
                size: size || null,
                gender: targetGender,
                budgetMin: budgetRange?.min,
                budgetMax: budgetRange?.max
            });

            return {
                brand: shoe.brand,
                model: shoe.model,
                price: shoe.min_price,
                max_price: shoe.max_price,
                live_price: productData.livePrice,
                image: productData.image,
                primary_price_band: shoe.primary_price_band,
                best_link: productData.link,
                source: productData.source,
                why_recommended: reason
            };
        }));

        console.log('   ✅ Enriched all 5 results');
        res.json({ recommendations: enrichedResults });

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Search failed" });
    }
});

// Helper for Explanation (Inline or import)
function explainSelection(shoe, selections) {
    const parts = [];

    // Brand match
    if (shoe.brand && selections.brand &&
        (Array.isArray(selections.brand) ? selections.brand.includes(shoe.brand) : selections.brand === shoe.brand)) {
        parts.push(`${shoe.brand} matches your brand preference.`);
    }

    // Budget fit
    if (shoe.primary_price_band === selections.budgetTier) {
        parts.push("Fits your budget perfectly.");
    }

    // Vibe match
    if (selections.vibe && shoe.attributes && shoe.attributes.vibe) {
        const userVibes = Array.isArray(selections.vibe) ? selections.vibe : [selections.vibe];
        const matched = userVibes.filter(v => shoe.attributes.vibe.includes(v));
        if (matched.length > 0) {
            parts.push(`${matched.join(' & ')} style match.`);
        }
    }

    // Use case match
    if (selections.use_case && shoe.attributes && shoe.attributes.use_case) {
        const userUses = Array.isArray(selections.use_case) ? selections.use_case : [selections.use_case];
        const matched = userUses.filter(u => shoe.attributes.use_case.includes(u));
        if (matched.length > 0) {
            parts.push(`Great for ${matched.join(', ').toLowerCase()} use.`);
        }
    }

    // Cushion match
    if (selections.cushion && shoe.attributes && shoe.attributes.cushion === selections.cushion) {
        parts.push(`${selections.cushion} cushioning as preferred.`);
    }

    // Popularity boost
    if (shoe.popularity_score >= 8) {
        parts.push("Highly popular choice.");
    }

    // Generic backup
    if (parts.length === 0) return `A top-rated ${shoe.category || 'shoe'} choice.`;
    return parts.slice(0, 3).join(" ");
}

// Export for Vercel serverless
module.exports = app;

// Only listen when running locally (not on Vercel)
if (!process.env.VERCEL) {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`\n🚀 Shoeman Internal Engine running at http://localhost:${PORT}\n`);
    });
}
