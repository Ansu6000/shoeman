
// Main shoe categories
export const shoeCategories = [
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
    icon: "sneakers" // will need to map to 'shoe' or add icon
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

// Price ranges (TIERS)
export const priceRanges = [
  { id: "2k-5k", label: "₹2k - ₹5k", min: 2000, max: 4999, tag: "Budget Friendly" },
  { id: "5k-7k", label: "₹5k - ₹7k", min: 5000, max: 6999, tag: "Value Pick" },
  { id: "7k-10k", label: "₹7k - ₹10k", min: 7000, max: 9999, tag: "Mid Range" },
  { id: "10k-15k", label: "₹10k - ₹15k", min: 10000, max: 14999, tag: "Premium" },
  { id: "15k+", label: "₹15k +", min: 15000, max: 100000, tag: "Luxury" }
];

// Size options
export const sizeOptions = [
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
