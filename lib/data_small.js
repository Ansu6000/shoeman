
const priceRanges = [
  {
    "id": "2k-5k",
    "label": "₹2k - ₹5k",
    "min": 2000,
    "max": 4999,
    "tag": "Budget Friendly"
  },
  {
    "id": "5k-7k",
    "label": "₹5k - ₹7k",
    "min": 5000,
    "max": 6999,
    "tag": "Value Pick"
  },
  {
    "id": "7k-10k",
    "label": "₹7k - ₹10k",
    "min": 7000,
    "max": 9999,
    "tag": "Mid Range"
  },
  {
    "id": "10k-15k",
    "label": "₹10k - ₹15k",
    "min": 10000,
    "max": 14999,
    "tag": "Premium"
  },
  {
    "id": "15k+",
    "label": "₹15k +",
    "min": 15000,
    "max": 100000,
    "tag": "Luxury"
  }
];
const shoeCatalog = [
  {
    "id": "nike-1000-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Beige",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 11995,
    "max_price": 12495,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Beige",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Beige"
      ]
    },
    "popularity_score": 5,
    "trending_score": 5,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Beige&tbm=shop"
    }
  },
  {
    "id": "nike-1001-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Beige",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13495,
    "max_price": 13995,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Beige",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Beige"
      ]
    },
    "popularity_score": 9,
    "trending_score": 0,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Beige&tbm=shop"
    }
  },
  {
    "id": "nike-1002-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Beige",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14495,
    "max_price": 14995,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Beige",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Beige"
      ]
    },
    "popularity_score": 10,
    "trending_score": 4,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Beige&tbm=shop"
    }
  },
  {
    "id": "nike-1003-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Beige",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13895,
    "max_price": 14395,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Beige",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Beige"
      ]
    },
    "popularity_score": 8,
    "trending_score": 5,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Beige&tbm=shop"
    }
  },
  {
    "id": "nike-1004-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 White",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 11895,
    "max_price": 12395,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "White",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "White"
      ]
    },
    "popularity_score": 7,
    "trending_score": 2,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20White&tbm=shop"
    }
  },
  {
    "id": "nike-1005-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE White",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13695,
    "max_price": 14195,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "White",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "White"
      ]
    },
    "popularity_score": 5,
    "trending_score": 3,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20White&tbm=shop"
    }
  },
  {
    "id": "nike-1006-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium White",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14595,
    "max_price": 15095,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "White",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "White"
      ]
    },
    "popularity_score": 9,
    "trending_score": 5,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20White&tbm=shop"
    }
  },
  {
    "id": "nike-1007-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX White",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14295,
    "max_price": 14795,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "White",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "White"
      ]
    },
    "popularity_score": 8,
    "trending_score": 0,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20White&tbm=shop"
    }
  },
  {
    "id": "nike-1008-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Gold",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 11995,
    "max_price": 12495,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Gold",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Gold"
      ]
    },
    "popularity_score": 6,
    "trending_score": 1,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Gold&tbm=shop"
    }
  },
  {
    "id": "nike-1009-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Gold",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13695,
    "max_price": 14195,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Gold",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Gold"
      ]
    },
    "popularity_score": 9,
    "trending_score": 5,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Gold&tbm=shop"
    }
  },
  {
    "id": "nike-1010-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Gold",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14395,
    "max_price": 14895,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Gold",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Gold"
      ]
    },
    "popularity_score": 7,
    "trending_score": 0,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Gold&tbm=shop"
    }
  },
  {
    "id": "nike-1011-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Gold",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14095,
    "max_price": 14595,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Gold",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Gold"
      ]
    },
    "popularity_score": 7,
    "trending_score": 2,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Gold&tbm=shop"
    }
  },
  {
    "id": "nike-1012-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Navy",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 12095,
    "max_price": 12595,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Navy",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Navy"
      ]
    },
    "popularity_score": 9,
    "trending_score": 1,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Navy&tbm=shop"
    }
  },
  {
    "id": "nike-1013-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Navy",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13595,
    "max_price": 14095,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Navy",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Navy"
      ]
    },
    "popularity_score": 5,
    "trending_score": 0,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Navy&tbm=shop"
    }
  },
  {
    "id": "nike-1014-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Navy",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14595,
    "max_price": 15095,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Navy",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Navy"
      ]
    },
    "popularity_score": 10,
    "trending_score": 2,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Navy&tbm=shop"
    }
  },
  {
    "id": "nike-1015-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Navy",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14095,
    "max_price": 14595,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Navy",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Navy"
      ]
    },
    "popularity_score": 5,
    "trending_score": 3,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Navy&tbm=shop"
    }
  },
  {
    "id": "nike-1016-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Burgundy",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 11995,
    "max_price": 12495,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Burgundy",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Burgundy"
      ]
    },
    "popularity_score": 6,
    "trending_score": 0,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Burgundy&tbm=shop"
    }
  },
  {
    "id": "nike-1017-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Burgundy",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13495,
    "max_price": 13995,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Burgundy",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Burgundy"
      ]
    },
    "popularity_score": 6,
    "trending_score": 4,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Burgundy&tbm=shop"
    }
  },
  {
    "id": "nike-1018-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Burgundy",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14795,
    "max_price": 15295,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Burgundy",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Burgundy"
      ]
    },
    "popularity_score": 10,
    "trending_score": 2,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Burgundy&tbm=shop"
    }
  },
  {
    "id": "nike-1019-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Burgundy",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14195,
    "max_price": 14695,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Burgundy",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Burgundy"
      ]
    },
    "popularity_score": 8,
    "trending_score": 2,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Burgundy&tbm=shop"
    }
  },
  {
    "id": "nike-1020-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Black",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 11895,
    "max_price": 12395,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Black",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Black"
      ]
    },
    "popularity_score": 5,
    "trending_score": 5,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Black&tbm=shop"
    }
  },
  {
    "id": "nike-1021-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Black",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13595,
    "max_price": 14095,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Black",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Black"
      ]
    },
    "popularity_score": 5,
    "trending_score": 1,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Black&tbm=shop"
    }
  },
  {
    "id": "nike-1022-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Black",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14795,
    "max_price": 15295,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Black",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Black"
      ]
    },
    "popularity_score": 6,
    "trending_score": 2,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Black&tbm=shop"
    }
  },
  {
    "id": "nike-1023-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Black",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14095,
    "max_price": 14595,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Black",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Black"
      ]
    },
    "popularity_score": 8,
    "trending_score": 5,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Black&tbm=shop"
    }
  },
  {
    "id": "nike-1024-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Brown",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 12095,
    "max_price": 12595,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Brown",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Brown"
      ]
    },
    "popularity_score": 9,
    "trending_score": 5,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Brown&tbm=shop"
    }
  },
  {
    "id": "nike-1025-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Brown",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13595,
    "max_price": 14095,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Brown",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Brown"
      ]
    },
    "popularity_score": 8,
    "trending_score": 3,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Brown&tbm=shop"
    }
  },
  {
    "id": "nike-1026-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Brown",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14695,
    "max_price": 15195,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Brown",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Brown"
      ]
    },
    "popularity_score": 7,
    "trending_score": 1,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Brown&tbm=shop"
    }
  },
  {
    "id": "nike-1027-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Brown",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14095,
    "max_price": 14595,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Brown",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Brown"
      ]
    },
    "popularity_score": 6,
    "trending_score": 1,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Brown&tbm=shop"
    }
  },
  {
    "id": "nike-1028-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Silver",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 12195,
    "max_price": 12695,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Silver",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Silver"
      ]
    },
    "popularity_score": 6,
    "trending_score": 4,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Silver&tbm=shop"
    }
  },
  {
    "id": "nike-1029-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Silver",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13395,
    "max_price": 13895,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Silver",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Silver"
      ]
    },
    "popularity_score": 5,
    "trending_score": 4,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Silver&tbm=shop"
    }
  },
  {
    "id": "nike-1030-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Silver",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14795,
    "max_price": 15295,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Silver",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Silver"
      ]
    },
    "popularity_score": 6,
    "trending_score": 0,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Silver&tbm=shop"
    }
  },
  {
    "id": "nike-1031-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Silver",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14295,
    "max_price": 14795,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Silver",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Silver"
      ]
    },
    "popularity_score": 5,
    "trending_score": 1,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Silver&tbm=shop"
    }
  },
  {
    "id": "nike-1032-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Green",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 11895,
    "max_price": 12395,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Green",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Green"
      ]
    },
    "popularity_score": 8,
    "trending_score": 1,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Green&tbm=shop"
    }
  },
  {
    "id": "nike-1033-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Green",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13695,
    "max_price": 14195,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Green",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Green"
      ]
    },
    "popularity_score": 6,
    "trending_score": 3,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Green&tbm=shop"
    }
  },
  {
    "id": "nike-1034-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Green",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14795,
    "max_price": 15295,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Green",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Green"
      ]
    },
    "popularity_score": 6,
    "trending_score": 3,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Green&tbm=shop"
    }
  },
  {
    "id": "nike-1035-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Green",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14295,
    "max_price": 14795,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Green",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Green"
      ]
    },
    "popularity_score": 5,
    "trending_score": 0,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Green&tbm=shop"
    }
  },
  {
    "id": "nike-1036-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Yellow",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 11895,
    "max_price": 12395,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Yellow",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Yellow"
      ]
    },
    "popularity_score": 10,
    "trending_score": 3,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Yellow&tbm=shop"
    }
  },
  {
    "id": "nike-1037-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Yellow",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13595,
    "max_price": 14095,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Yellow",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Yellow"
      ]
    },
    "popularity_score": 6,
    "trending_score": 4,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Yellow&tbm=shop"
    }
  },
  {
    "id": "nike-1038-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Yellow",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 14495,
    "max_price": 14995,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Yellow",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Yellow"
      ]
    },
    "popularity_score": 5,
    "trending_score": 3,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Yellow&tbm=shop"
    }
  },
  {
    "id": "nike-1039-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Yellow",
    "category": "Running & Sports",
    "gender": [
      "Men"
    ],
    "min_price": 13895,
    "max_price": 14395,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Yellow",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Yellow"
      ]
    },
    "popularity_score": 6,
    "trending_score": 5,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Yellow&tbm=shop"
    }
  },
  {
    "id": "nike-1040-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Gold",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 11895,
    "max_price": 12395,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Gold",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Gold"
      ]
    },
    "popularity_score": 6,
    "trending_score": 2,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Gold&tbm=shop"
    }
  },
  {
    "id": "nike-1041-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Gold",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 13595,
    "max_price": 14095,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Gold",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Gold"
      ]
    },
    "popularity_score": 9,
    "trending_score": 3,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Gold&tbm=shop"
    }
  },
  {
    "id": "nike-1042-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Gold",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 14595,
    "max_price": 15095,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Gold",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Gold"
      ]
    },
    "popularity_score": 5,
    "trending_score": 1,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Gold&tbm=shop"
    }
  },
  {
    "id": "nike-1043-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Gold",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 14295,
    "max_price": 14795,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Gold",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Gold"
      ]
    },
    "popularity_score": 9,
    "trending_score": 5,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Gold&tbm=shop"
    }
  },
  {
    "id": "nike-1044-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Purple",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 12195,
    "max_price": 12695,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Purple",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Purple"
      ]
    },
    "popularity_score": 10,
    "trending_score": 5,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Purple&tbm=shop"
    }
  },
  {
    "id": "nike-1045-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Purple",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 13695,
    "max_price": 14195,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Purple",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Purple"
      ]
    },
    "popularity_score": 10,
    "trending_score": 3,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Purple&tbm=shop"
    }
  },
  {
    "id": "nike-1046-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Purple",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 14795,
    "max_price": 15295,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Purple",
        "Sporty",
        "Luxury"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Purple"
      ]
    },
    "popularity_score": 8,
    "trending_score": 4,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Premium%20Purple&tbm=shop"
    }
  },
  {
    "id": "nike-1047-Gore-Tex",
    "brand": "Nike",
    "model": "Pegasus 40 GTX Purple",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 14195,
    "max_price": 14695,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Purple",
        "Sporty",
        "Tech",
        "Winter"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Purple"
      ]
    },
    "popularity_score": 9,
    "trending_score": 4,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20GTX%20Purple&tbm=shop"
    }
  },
  {
    "id": "nike-1048-Standard",
    "brand": "Nike",
    "model": "Pegasus 40 Grey",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 11895,
    "max_price": 12395,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Grey",
        "Sporty"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Grey"
      ]
    },
    "popularity_score": 9,
    "trending_score": 4,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20Grey&tbm=shop"
    }
  },
  {
    "id": "nike-1049-SE",
    "brand": "Nike",
    "model": "Pegasus 40 SE Grey",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 13495,
    "max_price": 13995,
    "primary_price_band": "10k-15k",
    "attributes": {
      "vibe": [
        "Grey",
        "Sporty",
        "Special Edition"
      ],
      "silhouette": "Low",
      "cushion": "Balanced",
      "use_case": [
        "Daily"
      ],
      "material": [
        "Synthetic",
        "Mesh"
      ],
      "color_tags": [
        "Grey"
      ]
    },
    "popularity_score": 6,
    "trending_score": 0,
    "images": {
      "default": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png"
    },
    "links": {
      "official": "https://www.google.com/search?q=Nike%20Pegasus%2040%20SE%20Grey&tbm=shop"
    }
  },
  {
    "id": "nike-1050-Premium",
    "brand": "Nike",
    "model": "Pegasus 40 Premium Grey",
    "category": "Running & Sports",
    "gender": [
      "Women"
    ],
    "min_price": 14495,
    "max_price": 14995,
    "primary_price_band": "10k-15k",
    "attributes": {
      "official": "https://www.google.com/search?q=Arrow%20Derby%20Premium%20Black&tbm=shop"
    }
  }
];
module.exports = { shoeCatalog, priceRanges };
