
// Data Inlined for Standalone Usage
const shoeCategories = [
    {
        id: "Running & Sports",
        name: "Running & Sports",
        description: "Performance gear",
        icon: "road"
    },
    {
        id: "Sneakers",
        name: "Sneakers",
        description: "Street style & daily",
        icon: "sneakers"
    },
    {
        id: "Casual",
        name: "Casual",
        description: "Relaxed comfort",
        icon: "coffee"
    },
    {
        id: "Formal",
        name: "Formal",
        description: "Sharp & professional",
        icon: "briefcase"
    }
];

const priceRanges = [
    { id: "2k-5k", label: "₹2k - ₹5k", min: 2000, max: 4999, tag: "Budget Friendly" },
    { id: "5k-7k", label: "₹5k - ₹7k", min: 5000, max: 6999, tag: "Value Pick" },
    { id: "7k-10k", label: "₹7k - ₹10k", min: 7000, max: 9999, tag: "Mid Range" },
    { id: "10k-15k", label: "₹10k - ₹15k", min: 10000, max: 14999, tag: "Premium" },
    { id: "15k+", label: "₹15k +", min: 15000, max: 100000, tag: "Luxury" }
];

const sizeOptions = [
    { uk: 3, us: 4, eu: 36 },
    { uk: 4, us: 5, eu: 37 },
    { uk: 5, us: 6, eu: 38 },
    { uk: 6, us: 7, eu: 39 },
    { uk: 7, us: 8, eu: 40 },
    { uk: 8, us: 9, eu: 41 },
    { uk: 9, us: 10, eu: 42 },
    { uk: 10, us: 11, eu: 43 },
    { uk: 11, us: 12, eu: 44 },
    { uk: 12, us: 13, eu: 45 }
];

const questionTree = {
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

const API_URL = '/api';

// Icons (Lucide Style SVGs) - Retained
const ICONS = {
    road: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19 L8 5"/><path d="M16 19 L20 5"/><line x1="12" y1="10" x2="12" y2="14"/></svg>`,
    tree: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5"/><path d="M5 19h14c-1.5-6-3.5-9-7-9-3.5 0-5.5 3-7 9z"/><path d="M12 19c-1.5-3-2.5-5-2.5-7"/><path d="M12 19c1.5-3 2.5-5 2.5-7"/></svg>`,
    dumbbell: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 6.5h11"/><path d="M6.5 17.5h11"/><path d="M6.5 6.5v11"/><path d="M17.5 6.5v11"/><path d="M3 10h18v4H3z"/></svg>`,
    flag: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
    footprints: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10h2"/><path d="M4 14h2"/><path d="M10 10h2"/><path d="M10 14h2"/></svg>`,
    cloud: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    scale: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M8 7h8"/></svg>`,
    zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    archive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
    circle: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`,
    layers: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    flame: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.5-3.3.3 1.1 1.3 2.5 3 3.8z"/></svg>`,
    diamond: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12l4 6-10 13L2 9z"/></svg>`,
    gift: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
    briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    graduation: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    plane: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20"/><path d="M13 12l5-8"/><path d="M6 12l-2 5h4l1 3 3-2 1-6"/></svg>`,
    shoe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 18a4 4 0 0 0-3.6-5.8c-1.8 0-3.4 1.2-3.4 3s1.2 2.8 3 2.8 4-1.2 4-3z"/><path d="M4 16c0-2.2 1.8-4 4-4h2.5"/><path d="M20 18c0 2.2-1.8 4-4 4H5c-1.1 0-2-.9-2-2v-4z"/><path d="M14 6l-2 4h-4L5 6h9z"/></svg>`,
    activity: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    coffee: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    sneakers: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M8 7h8"/></svg>` // Placeholder
};

const getIcon = (name) => ICONS[name] || ICONS['circle'];

const FALLBACK_SVG = (label = 'Shoeman') => {
    const safe = encodeURIComponent(String(label).slice(0, 16));
    return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0%' stop-color='%23f8f8f8'/><stop offset='100%' stop-color='%23e8e8e8'/></linearGradient></defs><rect width='600' height='600' fill='url(%23g)'/><text x='50%25' y='52%25' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='44' fill='%23333' font-weight='600'>${safe}</text></svg>`;
};

// State
let currentStep = 1;
let questionQueue = [];
let currentQuestionIndex = 0;

const selections = {
    gender: null,
    category: null,
    attributes: {},
    size: null,
    budget: null
};

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    console.log("Shoeman App Initializing...");
    try {
        renderGender();
        renderCategories();
        renderSizes();
        renderBudget();
        updateUI();
    } catch (e) {
        console.error("Initialization error:", e);
    }
}

// ========================
// Render Logic
// ========================

function renderGender() {
    const cards = document.querySelectorAll('#genderGrid .option-card');
    if (cards.length === 0) {
        console.warn('renderGender: No gender cards found!');
        return;
    }
    console.log(`renderGender: Attaching listeners to ${cards.length} cards`);
    cards.forEach(card => {
        card.onclick = () => {
            console.log('Gender selected:', card.dataset.value);
            selections.gender = card.dataset.value;
            cards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            goToStep(2);
        };
    });
}

function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    if (!grid) {
        console.warn('renderCategories: #categoryGrid not found');
        return;
    }
    grid.innerHTML = '';

    if (!shoeCategories || shoeCategories.length === 0) {
        console.error('renderCategories: No categories data available!');
        grid.innerHTML = '<p class="error-msg">Failed to load categories.</p>';
        return;
    }

    shoeCategories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'option-card category-card';
        card.innerHTML = `
            <div class="card-icon">${getIcon(category.icon)}</div>
            <div class="card-content">
                <span class="card-title">${category.name}</span>
                <span class="card-desc">${category.description}</span>
            </div>
        `;
        card.onclick = () => {
            selections.category = category;
            loadDynamicQuestions(category.id);
            goToStep(3);
        };
        grid.appendChild(card);
    });
}

function loadDynamicQuestions(categoryId) {
    const allQuestions = questionTree[categoryId] || [];
    // Filter questions based on condition
    questionQueue = allQuestions.filter(q => !q.condition || q.condition(selections));
    currentQuestionIndex = 0;
}

function renderDynamicQuestion() {
    if (currentQuestionIndex >= questionQueue.length) {
        goToStep(4); // Size
        return;
    }

    const q = questionQueue[currentQuestionIndex];
    const grid = document.getElementById('dynamicGrid');
    const title = document.getElementById('dynamicTitle');
    const subtitle = document.getElementById('dynamicSubtitle');

    if (title) title.textContent = q.question;
    if (subtitle) subtitle.textContent = q.subtitle || 'Select the best option';

    const stepLabel = document.querySelector('.progress-step[data-step="3"] .step-label');
    if (stepLabel) stepLabel.textContent = `Preference ${currentQuestionIndex + 1}/${questionQueue.length}`;

    if (grid) {
        grid.innerHTML = '';

        // Check if Multi-Select
        const isMulti = q.multi === true;

        // Create container for options
        q.options.forEach(opt => {
            const card = document.createElement('div');
            card.className = 'option-card style-card';
            if (isMulti) card.classList.add('multi-select-card');

            // Icon
            const iconHtml = opt.icon ? `<span class="opt-icon">${getIcon(opt.icon)}</span>` : '';

            card.innerHTML = `
                <div class="card-content">
                    ${iconHtml}
                    <span class="card-title">${opt.label}</span>
                    ${isMulti ? '<div class="checkbox-indicator"></div>' : ''}
                </div>
            `;

            // Logic
            card.onclick = () => {
                if (isMulti) {
                    handleMultiSelect(q.id, opt.value, card);
                } else {
                    selections.attributes[q.id] = opt.value;
                    nextQuestion();
                }
            };

            // Check if already selected (for back navigation)
            if (isMulti) {
                const currentVals = selections.attributes[q.id] || [];
                if (currentVals.includes(opt.value)) {
                    card.classList.add('selected');
                }
            }

            grid.appendChild(card);
        });

        // Add Continue Button for Multi-Select
        if (isMulti) {
            const btnContainer = document.createElement('div');
            btnContainer.className = 'full-width-action';
            btnContainer.innerHTML = `<button class="btn btn-primary" id="multiContinueBtn">Continue</button>`;
            grid.appendChild(btnContainer);

            document.getElementById('multiContinueBtn').onclick = () => {
                const vals = selections.attributes[q.id];
                if (!vals || vals.length === 0) {
                    // Start animation shake lightly? Or just allow empty? Allowed empty is safer UX.
                    // But let's prompt.
                    selections.attributes[q.id] = [];
                }
                nextQuestion();
            };
        }
    }
}

function handleMultiSelect(questionId, value, cardElement) {
    let current = selections.attributes[questionId] || [];

    // Check "Surprise Me" exclusivity
    const SURPRISE = "Surprise me";

    if (value === SURPRISE) {
        if (current.includes(SURPRISE)) {
            current = []; // Toggle off
            cardElement.classList.remove('selected');
        } else {
            current = [SURPRISE]; // Clear others, set this
            // Visual clear
            document.querySelectorAll('.multi-select-card').forEach(c => c.classList.remove('selected'));
            cardElement.classList.add('selected');
        }
    } else {
        // Normal Brand
        if (current.includes(SURPRISE)) {
            current = []; // Clear surprise me if picking normal
            document.querySelectorAll('.multi-select-card').forEach(c => {
                if (c.innerText.includes("Surprise")) c.classList.remove('selected');
            });
        }

        if (current.includes(value)) {
            current = current.filter(v => v !== value);
            cardElement.classList.remove('selected');
        } else {
            current.push(value);
            cardElement.classList.add('selected');
        }
    }

    selections.attributes[questionId] = current;
}

function nextQuestion() {
    const grid = document.getElementById('dynamicGrid');
    currentQuestionIndex++;
    grid.style.opacity = '0';
    setTimeout(() => {
        renderDynamicQuestion();
        grid.style.opacity = '1';
    }, 300);
}

function renderSizes() {
    const grid = document.getElementById('sizeGrid');
    if (!grid) return;
    grid.innerHTML = '';
    sizeOptions.forEach(size => {
        const btn = document.createElement('button');
        btn.className = 'size-btn';
        btn.innerHTML = `<span class="size-uk">UK ${size.uk}</span>`;
        btn.onclick = () => {
            selections.size = size;
            goToStep(5);
        };
        grid.appendChild(btn);
    });
}

function renderBudget() {
    const grid = document.getElementById('budgetGrid');
    if (!grid) return;
    grid.innerHTML = '';
    priceRanges.forEach(range => {
        const card = document.createElement('div');
        card.className = 'option-card budget-card';
        card.innerHTML = `
            <div class="budget-tag">${range.tag}</div>
            <span class="budget-range">${range.label}</span>
        `;
        card.onclick = () => {
            selections.budget = range;
            searchShoes();
        };
        grid.appendChild(card);
    });
}

// ========================
// Navigation
// ========================

function goToStep(step) {
    currentStep = step;
    if (step === 3) {
        renderDynamicQuestion();
    }
    updateUI();
}

window.prevStep = function () {
    if (currentStep > 1) {
        if (currentStep === 3 && currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderDynamicQuestion();
            return;
        }
        currentStep--;
        updateUI();
    }
};

window.resetApp = function () {
    currentStep = 1;
    selections.gender = null;
    selections.category = null;
    selections.attributes = {};
    selections.size = null;
    selections.budget = null;
    questionQueue = [];
    currentQuestionIndex = 0;

    const nav = document.getElementById('quizNav');
    if (nav) nav.style.display = 'flex';
    document.getElementById('results').classList.remove('active');

    updateUI();
};

function updateUI() {
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    const activeSection = document.getElementById(`step${currentStep}`);
    if (activeSection) activeSection.classList.add('active');

    const progressFill = document.getElementById('progressFill');
    const totalVisSteps = 5;
    let pct = ((currentStep - 1) / (totalVisSteps - 1)) * 100;
    if (progressFill) progressFill.style.width = `${pct}%`;

    document.querySelectorAll('.progress-step').forEach((stepEl, idx) => {
        const stepNum = idx + 1;
        stepEl.classList.toggle('active', stepNum === currentStep);
        stepEl.classList.toggle('completed', stepNum < currentStep);
    });

    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.disabled = currentStep === 1;
}

// ========================
// Search
// ========================

async function searchShoes() {
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    const resultsSection = document.getElementById('results');
    if (resultsSection) resultsSection.classList.add('active');
    const nav = document.getElementById('quizNav');
    if (nav) nav.style.display = 'none';

    const content = document.getElementById('resultsContent');
    content.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner-modern">
                <div class="spinner-ring"></div><div class="spinner-ring"></div>
            </div>
            <p class="loading-text">Curating your collection...</p>
        </div>`;

    // Process Params — include size + gender for accurate SerpAPI results
    const params = new URLSearchParams({
        category: selections.category?.id,
        gender: selections.gender,
        budgetTier: selections.budget?.id,
        size: selections.size?.uk || '',
        attributes: JSON.stringify(selections.attributes)
    });

    try {
        const res = await fetch(`${API_URL}/search?${params}`);
        if (!res.ok) throw new Error('Search Failed');

        const data = await res.json();

        if (data.recommendations && data.recommendations.length > 0) {
            displayResults(data.recommendations);
        } else {
            content.innerHTML = `<div class="no-results-state"><h3>No perfect matches.</h3><p>We are expanding our catalog daily.</p><button class="btn btn-primary" onclick="resetApp()">Try Again</button></div>`;
        }
    } catch (e) {
        console.error(e);
        content.innerHTML = `<div class="no-results-state"><h3>Network Error</h3><p>Ensure server is running.</p><button class="btn btn-primary" onclick="resetApp()">Retry</button></div>`;
    }
}

// Brand-based fallback images (high quality, reliable Unsplash URLs)
const BRAND_IMAGES = {
    'Nike': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    'Adidas': 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop',
    'Puma': 'https://images.unsplash.com/photo-1608379743498-63cc44e58d27?w=400&h=400&fit=crop',
    'New Balance': 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop',
    'ASICS': 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop',
    'Converse': 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop',
    'Skechers': 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop',
    'Reebok': 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    'Woodland': 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop',
    'Clarks': 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=400&fit=crop',
    'Hoka': 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&fit=crop',
    'Saucony': 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
    'Vans': 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop',
    'Brooks': 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop',
    'Crocs': 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=400&fit=crop',
    'Birkenstock': 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop',
    'Onitsuka Tiger': 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop',
    'Dr. Martens': 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=400&h=400&fit=crop',
    'Hush Puppies': 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=400&fit=crop',
    'Bata': 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=400&h=400&fit=crop',
    'Red Chief': 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop',
    'Comet': 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400&h=400&fit=crop',
    'Fila': 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop',
    'Timberland': 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400&h=400&fit=crop',
    'Louis Philippe': 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=400&fit=crop',
    'Arrow': 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=400&fit=crop',
    'default': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
};

function getBrandImage(brand) {
    return BRAND_IMAGES[brand] || BRAND_IMAGES['default'];
}

function formatPrice(price) {
    if (price >= 1000) {
        return `₹${price.toLocaleString('en-IN')}`;
    }
    return `₹${price}`;
}

function displayResults(shoes) {
    const content = document.getElementById('resultsContent');
    if (!content) return;
    content.innerHTML = `<div class="results-grid" id="resultsGrid"></div>`;
    const grid = document.getElementById('resultsGrid');

    // Get user's selected size for display
    const userSize = selections.size ? `UK ${selections.size.uk}` : '';

    shoes.forEach((shoe, i) => {
        const card = document.createElement('a');
        card.className = 'result-card';
        card.href = shoe.best_link || `https://www.google.com/search?q=${encodeURIComponent(shoe.brand + ' ' + shoe.model + ' buy online India')}&tbm=shop`;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.style.animationDelay = `${i * 0.1}s`;

        const why = shoe.why_recommended ? `<div class="why-tag">${shoe.why_recommended}</div>` : '';

        // Use REAL live price from SerpAPI, not fake catalog price
        const priceDisplay = shoe.live_price
            ? formatPrice(shoe.live_price)
            : formatPrice(shoe.price);

        // Use brand image as fallback
        const brandFallback = getBrandImage(shoe.brand);
        const imgSrc = shoe.image || brandFallback;

        // CTA with source info
        const ctaText = shoe.source ? `Buy on ${shoe.source} →` : 'View Options →';

        // Size badge
        const sizeBadge = userSize ? `<span class="size-badge">${userSize}</span>` : '';

        card.innerHTML = `
            <div class="result-rank">#${i + 1}</div>
            <div class="result-media">
                <img src="${imgSrc}" loading="lazy" class="result-image" 
                     onerror="this.onerror=null; this.src='${brandFallback}'">
            </div>
            <div class="result-info">
                <div class="result-brand">${shoe.brand} ${sizeBadge}</div>
                <div class="result-name">${shoe.model}</div>
                <div class="result-price">${priceDisplay}</div>
                ${why}
            </div>
            <div class="result-cta">${ctaText}</div>
        `;
        grid.appendChild(card);
    });
}
