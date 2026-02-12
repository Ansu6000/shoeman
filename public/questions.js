
export const questionTree = {
    "Running & Sports": [
        {
            id: "use_case",
            question: "Where do you run?",
            subtitle: "Select primary use",
            options: [
                { label: "Road Running", value: "Road", icon: "road" },
                { label: "Trail Running", value: "Trail", icon: "tree" },
                { label: "Gym / Treadmill", value: "Gym", icon: "dumbbell" },
                { label: "Race Day", value: "Race", icon: "flag" },
                { label: "Just Walking", value: "Walking", icon: "footprints" }
            ]
        },
        {
            id: "cushion",
            question: "Cushion level?",
            options: [
                { label: "Soft & Plush", value: "Soft", icon: "cloud" },
                { label: "Balanced", value: "Balanced", icon: "scale" },
                { label: "Firm & Fast", value: "Firm", icon: "zap" }
            ]
        },
        {
            id: "fit",
            question: "Fit preference?",
            options: [
                { label: "Regular", value: "Standard" },
                { label: "Wide fit needed", value: "Wide" }
            ]
        }
    ],
    "Sneakers": [
        {
            id: "vibe",
            question: "What's your vibe?",
            subtitle: "Define your aesthetic",
            multi: true,
            options: [
                { label: "Retro / Classic", value: "Retro", icon: "archive" },
                { label: "Minimalist", value: "Minimal", icon: "circle" },
                { label: "Chunky / Dad", value: "Chunky", icon: "layers" },
                { label: "Streetwear", value: "Streetwear", icon: "flame" },
                { label: "Luxury", value: "Luxury", icon: "diamond" }
            ]
        },
        {
            id: "brand",
            question: "Favorite Brands?",
            subtitle: "Select multiple or let us surprise you",
            multi: true,
            options: [
                { label: "Nike", value: "Nike" },
                { label: "New Balance", value: "New Balance" },
                { label: "ASICS", value: "ASICS" },
                { label: "Adidas", value: "Adidas" },
                { label: "Puma", value: "Puma" },
                { label: "Onitsuka Tiger", value: "Onitsuka Tiger" },
                { label: "Converse", value: "Converse" },
                { label: "Comet", value: "Comet" },
                { label: "Surprise Me", value: "Surprise me", icon: "gift" }
            ]
        },
        {
            id: "silhouette",
            question: "Height?",
            multi: true,
            options: [
                { label: "Low Top", value: "Low" },
                { label: "Mid Top", value: "Mid" },
                { label: "High Top", value: "High" }
            ]
        },
        {
            id: "color_preference",
            question: "Color preference?",
            options: [
                { label: "Neutral (White/Black/Grey)", value: "Neutral" },
                { label: "Colorful / Bold", value: "Bold" }
            ]
        }

    ],
    "Casual": [
        {
            id: "use_case",
            question: "Primary use?",
            options: [
                { label: "Office / Work", value: "Office", icon: "briefcase" },
                { label: "College / Campus", value: "College", icon: "graduation" },
                { label: "Travel", value: "Travel", icon: "plane" },
                { label: "Daily Beater", value: "Daily", icon: "shoe" }
            ]
        },
        {
            id: "style",
            question: "Fastening style?",
            options: [
                { label: "Lace-up", value: "Lace-up" },
                { label: "Slip-on / Loafer", value: "Slip-on" }
            ]
        }
    ],
    "Formal": [
        {
            id: "type_men",
            question: "Shoe Style",
            condition: (state) => state.gender === 'men',
            options: [
                { label: "Oxford", value: "Oxford" },
                { label: "Derby", value: "Derby" },
                { label: "Loafer", value: "Loafer" },
                { label: "Monk Strap", value: "Monk" }
            ]
        },
        {
            id: "type_women",
            question: "Shoe Style",
            condition: (state) => state.gender === 'women',
            options: [
                { label: "Loafer", value: "Loafer" },
                { label: "Pumps", value: "Pumps" },
                { label: "Block Heel", value: "Block Heel" },
                { label: "Formal Flats", value: "Flats" }
            ]
        },
        {
            id: "use_case",
            question: "Occasion?",
            subtitle: "When will you wear them?",
            options: [
                { label: "Office / Daily", value: "Office" },
                { label: "Wedding / Party", value: "Wedding" },
                { label: "Interview", value: "Interview" }
            ]
        }
    ]
};
