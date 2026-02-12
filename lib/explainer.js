
const explainerMap = {
    // Vibes
    "Retro": "Matches your retro aesthetic perfectly.",
    "Minimal": "Clean and minimal design as requested.",
    "Chunky": "Hits that bold, chunky trend you prefer.",
    "Streetwear": "A staple in modern streetwear culture.",
    "Luxury": "Premium feel with a luxury touch.",

    // Use Cases
    "Road": "Designed specifically for road running.",
    "Trail": "Perfect grip for trail adventures.",
    "Gym": "Stable and supportive for gym sessions.",
    "Race": "Built for speed on race day.",
    "Walking": "Maximum comfort for walking.",
    "Office": "Smart enough for the office.",
    "College": "Durable and stylish for campus life.",
    "Travel": "Ideal for long travel days.",
    "Daily": "Your perfect daily driver.",

    // Cushion
    "Soft": "Features soft, plush cushioning.",
    "Firm": "Provides a responsive, firm ride.",
    "Balanced": "A perfect balance of soft and responsive.",

    // Silhouette
    "Low": "Classic low-top silhouette.",
    "Mid": "Supportive mid-cut design.",
    "High": "Iconic high-top look.",

    // Formal
    "Oxford": "Timeless Oxford formal style.",
    "Derby": "Versatile Derby construction.",
    "Loafer": "Effortless slip-on elegance."
};

function explainRecommendation(shoe, userSelections) {
    let reasons = [];

    // 1. Vibe Match
    if (userSelections.vibe && shoe.attributes.vibe) {
        // userSelections.vibe might be array or string
        const userVibes = Array.isArray(userSelections.vibe) ? userSelections.vibe : [userSelections.vibe];

        const commonVibes = userVibes.filter(v => shoe.attributes.vibe.includes(v));
        if (commonVibes.length > 0) {
            reasons.push(explainerMap[commonVibes[0]] || `Matches your ${commonVibes[0].toLowerCase()} vibe.`);
        }
    }

    // 2. Use Case Match
    if (userSelections.use_case && shoe.attributes.use_case) {
        const userUses = Array.isArray(userSelections.use_case) ? userSelections.use_case : [userSelections.use_case];
        const commonUse = userUses.filter(u => shoe.attributes.use_case.includes(u));
        if (commonUse.length > 0) {
            reasons.push(explainerMap[commonUse[0]] || `Great for ${commonUse[0].toLowerCase()}.`);
        }
    }

    // 3. Brand Match
    if (userSelections.brand) {
        const userBrands = Array.isArray(userSelections.brand) ? userSelections.brand : [userSelections.brand];
        if (userBrands.includes(shoe.brand)) {
            reasons.push(`${shoe.brand} is one of your preferred brands.`);
        }
    }

    // 4. Budget Logic
    if (shoe.primary_price_band === userSelections.budgetTier) {
        reasons.push("Fits perfectly within your budget tier.");
    }

    // Deduplicate
    const uniqueReasons = [...new Set(reasons)];

    if (uniqueReasons.length === 0) {
        return `A ${shoe.popularity_score}/10 popularity rated pick for ${shoe.category}.`;
    }

    return uniqueReasons.slice(0, 2).join(" ");
}

module.exports = { explainRecommendation };
