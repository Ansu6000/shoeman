
const fs = require('fs');

// V5 Generator - 5000+ Production Ready
// Targeting: 1250 per category approx.

const CATEGORIES = {
    RUNNING: "Running & Sports",
    SNEAKERS: "Sneakers",
    CASUAL: "Casual",
    FORMAL: "Formal"
};

// Database of Base Models (The Seed)
const BASE_DB = {
    [CATEGORIES.RUNNING]: {
        Nike: [
            { name: "Pegasus 40", price: 11895, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cb2r5u20r5u20r5u20r5/pegasus-40-road-running-shoes-MCnWwq.png" },
            { name: "Invincible 3", price: 16995, cushion: "Soft", img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/57c25055-635c-42e6-a212-320d43714652/invincible-3-road-running-shoes-Wwmmlp.png" },
            { name: "Vaporfly 3", price: 20995, type: "Race", img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/216bf80d-888e-4c31-9f20-941834925766/vaporfly-3-road-racing-shoes-xsDgvM.png" },
            { name: "InfinityRN 4", price: 14995, type: "Stability", img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0fa30d4a-39c0-436f-b258-0051e06400ff/infinityrn-4-road-running-shoes-FkGQbG.png" },
            { name: "Winflo 10", price: 8495, type: "Budget", img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6e73719-20f7-4eb9-a3d5-195669562768/winflo-10-road-running-shoes-P1kM6T.png" },
            { name: "Zoom Fly 5", price: 14995, type: "Tempo", img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e3c-4031-95f6-17b5155f41j7/zoom-fly-5-road-running-shoes-lkx7Zp.png" },
            { name: "Wildhorse 8", price: 11495, type: "Trail", img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/def37a3c-b2ee-4820-974a-446755743849/wildhorse-8-trail-running-shoes-lCpzkv.png" },
            { name: "Metcon 9", price: 12995, type: "Gym", img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6b6683e-4363-442a-a55e-3998522t72g8/metcon-9-workout-shoes-lTp5Qp.png" }
        ],
        Adidas: [
            { name: "Ultraboost Light", price: 17999, cushion: "Soft", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/17b2b062534a41309d94af7300f898a4_9366/Ultraboost_Light_Running_Shoes_Black_HQ6339_01_standard.jpg" },
            { name: "Adizero Adios Pro 3", price: 23999, type: "Race", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63c22420d917409c95f1af7500cc689e_9366/Adizero_Adios_Pro_3_Running_Shoes_Blue_IG3132_01_standard.jpg" },
            { name: "Adizero SL", price: 11999, type: "Tempo", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d70230232537446bb35aaf0e01089947_9366/Adizero_SL_Running_Shoes_Green_GV9095_01_standard.jpg" },
            { name: "Solarboost 5", price: 14999, type: "Stability", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/72061e873919427e8d6faf3a0096956e_9366/Solarboost_5_Running_Shoes_Black_HQ6333_01_standard.jpg" },
            { name: "Galaxy 6", price: 4999, type: "Budget", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1765c95454684940986aaf360098df71_9366/Galaxy_6_Shoes_Blue_GW3848_01_standard.jpg" },
            { name: "4DFWD 3", price: 19999, type: "Tech", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/35f527f311544253818eaf8c00c7a87e_9366/4DFWD_3_Running_Shoes_Black_IG8993_01_standard.jpg" },
            { name: "Supernova Rise", price: 13999, type: "Daily", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b7f5c7e1f4d45599b51af4b00f9123f_9366/Supernova_Rise_Running_Shoes_Blue_IG5842_01_standard.jpg" }
        ],
        ASICS: [
            { name: "Gel-Kayano 30", price: 15999, cushion: "Max", type: "Stability", img: "https://images.asics.com/is/image/asics/1011B548_400_SR_RT_GLB" },
            { name: "Gel-Nimbus 26", price: 16999, cushion: "Max", type: "Daily", img: "https://images.asics.com/is/image/asics/1011B547_001_SR_RT_GLB" },
            { name: "Novablast 4", price: 13999, cushion: "Bouncy", type: "Tempo", img: "https://images.asics.com/is/image/asics/1011B693_400_SR_RT_GLB" },
            { name: "GT-2000 12", price: 12999, cushion: "Supportive", type: "Stability", img: "https://images.asics.com/is/image/asics/1011B691_400_SR_RT_GLB" },
            { name: "Gel-Cumulus 25", price: 11999, cushion: "Balanced", type: "Daily", img: "https://images.asics.com/is/image/asics/1011B541_400_SR_RT_GLB" },
            { name: "Metaspeed Sky", price: 21999, cushion: "Race", type: "Race", img: "https://images.asics.com/is/image/asics/1013A115_600_SR_RT_GLB" },
            { name: "Gel-Contend 8", price: 4499, cushion: "Balanced", type: "Budget", img: "https://images.asics.com/is/image/asics/1011B492_002_SR_RT_GLB" }
        ],
        "New Balance": [
            { name: "Fresh Foam X 1080v13", price: 16999, cushion: "Soft", img: "https://nb.scene7.com/is/image/NB/m1080l13_nb_02_i" },
            { name: "Fresh Foam X More v4", price: 15999, cushion: "Max", img: "https://nb.scene7.com/is/image/NB/mmorlh4_nb_02_i" },
            { name: "FuelCell SuperComp Elite v3", price: 22999, type: "Race", img: "https://nb.scene7.com/is/image/NB/mrcelco3_nb_02_i" },
            { name: "FuelCell Rebel v3", price: 12999, type: "Tempo", img: "https://nb.scene7.com/is/image/NB/mfcxcl3_nb_02_i" },
            { name: "Fresh Foam 880v13", price: 13999, cushion: "Balanced", img: "https://nb.scene7.com/is/image/NB/m880b13_nb_02_i" }
        ],
        Hoka: [
            { name: "Clifton 9", price: 13999, cushion: "Soft", img: "https://m.media-amazon.com/images/I/71X8k-yOnPL._AC_UY1000_.jpg" },
            { name: "Bondi 8", price: 14999, cushion: "Max", img: "https://m.media-amazon.com/images/I/61k4d2Q2OLL._AC_UY1000_.jpg" },
            { name: "Mach 6", price: 12999, cushion: "Responsive", img: "https://m.media-amazon.com/images/I/71qJ2x5yv9L._AC_UY1000_.jpg" },
            { name: "Speedgoat 5", price: 14999, type: "Trail", img: "https://m.media-amazon.com/images/I/71+s+XF+kZL._AC_UY1000_.jpg" },
            { name: "Arahi 6", price: 13999, type: "Stability", img: "https://m.media-amazon.com/images/I/61k4d2Q2OLL._AC_UY1000_.jpg" } // Reuse img
        ],
        Puma: [
            { name: "Deviate Nitro 2", price: 15999, cushion: "Responsive", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376807/03/sv01/fnd/IND/fmt/png" },
            { name: "Velocity Nitro 3", price: 11999, cushion: "Balanced", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377748/01/sv01/fnd/IND/fmt/png" },
            { name: "ForeverRun Nitro", price: 13999, cushion: "Supportive", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377757/01/sv01/fnd/IND/fmt/png" },
            { name: "Softride Enzo", price: 4499, cushion: "Budget", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377048/01/sv01/fnd/IND/fmt/png" },
            { name: "Axelion", price: 5499, cushion: "Budget", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/193627/05/sv01/fnd/IND/fmt/png" }
        ],
        Saucony: [
            { name: "Endorphin Speed 3", price: 16999, cushion: "Responsive", img: "https://m.media-amazon.com/images/I/71I+pA0VwlL._AC_UY1000_.jpg" },
            { name: "Ride 16", price: 11999, cushion: "Balanced", img: "https://m.media-amazon.com/images/I/71I+pA0VwlL._AC_UY1000_.jpg" }, // Reuse
            { name: "Triumph 21", price: 14999, cushion: "Soft", img: "https://m.media-amazon.com/images/I/71I+pA0VwlL._AC_UY1000_.jpg" },
            { name: "Kinvara 14", price: 10999, cushion: "Fast", img: "https://m.media-amazon.com/images/I/71I+pA0VwlL._AC_UY1000_.jpg" }
        ],
        Brooks: [
            { name: "Ghost 15", price: 12999, cushion: "Balanced", img: "https://m.media-amazon.com/images/I/71I+pA0VwlL._AC_UY1000_.jpg" },
            { name: "Adrenaline GTS 23", price: 13999, type: "Stability", img: "https://m.media-amazon.com/images/I/71I+pA0VwlL._AC_UY1000_.jpg" },
            { name: "Glycerin 20", price: 14999, cushion: "Soft", img: "https://m.media-amazon.com/images/I/71I+pA0VwlL._AC_UY1000_.jpg" }
        ]
    },
    [CATEGORIES.SNEAKERS]: {
        Nike: [
            { name: "Air Force 1 '07", price: 7495, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png" },
            { name: "Air Jordan 1 Low", price: 8995, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-jordan-1-low-shoes-459b4T.png" },
            { name: "Air Jordan 4 Retro", price: 19995, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9907156-f421-4d37-884e-898516d3d3x7/air-jordan-4-retro-industrial-blue-shoes-70T2fN.png" },
            { name: "Dunk Low Retro", price: 8295, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png" },
            { name: "Blazer Mid '77", price: 7995, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32d01818-1c4b-449e-af53-487627448834/blazer-mid-77-vintage-shoes-dNWPTj.png" },
            { name: "Air Max 90", price: 11895, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4ouvejcy04do7/air-max-90-shoes-krsBr1.png" },
            { name: "Air Max 97", price: 16995, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/s1amp7uosrn0rvkdldj2/air-max-97-shoes-EBZrb8.png" },
            { name: "Court Vision Low", price: 4995, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5ef537d1-c119-4503-b05f-380d1981df54/court-vision-low-shoes-q0sr67.png" },
            { name: "Tech Hera", price: 9695, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/387609a8-e14b-4171-a477-9dc45d777592/tech-hera-shoes-Plr9xM.png" }
        ],
        Adidas: [
            { name: "Samba OG", price: 10999, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b51bfefaa9784480a4cebe8b01243166_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg" },
            { name: "Gazelle", price: 9999, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/81f7278d65384668ba45af6600f9172f_9366/Gazelle_Shoes_Red_BB5480_01_standard.jpg" },
            { name: "Superstar", price: 8999, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d94c7d1fff744dfe9eb4ac0e00f75de7_9366/Superstar_Shoes_White_EG4958_01_standard.jpg" },
            { name: "Stan Smith", price: 7999, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77dd6f9c471693g0a8710153830c_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg" },
            { name: "Forum Low", price: 9999, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/25875db0505a415eb497ad3500e5728a_9366/Forum_Low_Shoes_White_FY7756_01_standard.jpg" },
            { name: "Campus 00s", price: 10999, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e2333dfd778d461ba161af000100657c_9366/Campus_00s_Shoes_Grey_HQ8707_01_standard.jpg" }
        ],
        "New Balance": [
            { name: "550", price: 11999, img: "https://nb.scene7.com/is/image/NB/bb550wt1_nb_02_i" },
            { name: "574 Core", price: 8999, img: "https://nb.scene7.com/is/image/NB/ml574evg_nb_02_i" },
            { name: "9060", price: 15999, img: "https://nb.scene7.com/is/image/NB/u9060blk_nb_02_i" },
            { name: "327", price: 8999, img: "https://nb.scene7.com/is/image/NB/ws327so_nb_02_i" },
            { name: "2002R", price: 14999, img: "https://nb.scene7.com/is/image/NB/m2002rrd_nb_02_i" },
            { name: "CT302", price: 9999, img: "https://nb.scene7.com/is/image/NB/ct302mb_nb_02_i" }
        ],
        Puma: [
            { name: "Suede Classic XXI", price: 6499, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/IND/fmt/png" },
            { name: "RS-X", price: 9999, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/391176/01/sv01/fnd/IND/fmt/png" },
            { name: "Palermo", price: 8999, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/396463/03/sv01/fnd/IND/fmt/png" },
            { name: "Slipstream", price: 8499, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/388549/01/sv01/fnd/IND/fmt/png" },
            { name: "Smash v2", price: 3999, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/364989/01/sv01/fnd/IND/fmt/png" }
        ],
        Vans: [
            { name: "Old Skool", price: 5999, img: "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO" },
            { name: "Sk8-Hi", price: 6999, img: "https://images.vans.com/is/image/Vans/VN000D5IB8C-HERO" },
            { name: "Authentic", price: 4999, img: "https://images.vans.com/is/image/Vans/VN000EE3BLK-HERO" },
            { name: "Slip-On", price: 4999, img: "https://images.vans.com/is/image/Vans/VN000EYEBLK-HERO" }
        ],
        Converse: [
            { name: "Chuck 70 High", price: 6999, img: "https://www.converse.in/media/catalog/product/1/6/162050c_01.jpg" },
            { name: "Run Star Hike", price: 8999, img: "https://www.converse.in/media/catalog/product/1/6/166800c_01.jpg" },
            { name: "One Star", price: 6599, img: "https://www.converse.in/media/catalog/product/1/7/172346c_01.jpg" }
        ],
        "Onitsuka Tiger": [
            { name: "Mexico 66", price: 10999, img: "https://images.asics.com/is/image/asics/1183C102_751_SR_RT_GLB" },
            { name: "Serrano", price: 7999, img: "https://images.asics.com/is/image/asics/1183B400_100_SR_RT_GLB" }
        ],
        Reebok: [
            { name: "Club C 85", price: 6599, img: "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/20422934f828452482390f7574b60e61_9366/Club_C_85_Shoes_White_AR0456_01_standard.jpg" },
            { name: "Classic Leather", price: 5999, img: "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/01f02170f8f8445783309e3a6288893d_9366/Classic_Leather_Shoes_White_49799_01_standard.jpg" }
        ],
        Comet: [
            { name: "X Low", price: 4499, img: "https://www.wearcomet.com/cdn/shop/files/1_7447262c-8069-424a-9ba4-59b66bb4d59a.jpg" }
        ],
        Fila: [
            { name: "Disruptor II", price: 5999, img: "https://m.media-amazon.com/images/I/71zV0c8+7+L._AC_UY1000_.jpg" }
        ],
        Skechers: [
            { name: "Uno Stand on Air", price: 6499, img: "https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers-master/default/dw1b4e9e0d/images/large/52458_BLK.jpg" }
        ]
    },
    [CATEGORIES.CASUAL]: {
        Crocs: [
            { name: "Classic Clog", price: 2995, img: "https://m.media-amazon.com/images/I/71+UwTjcURL._UL1500_.jpg" },
            { name: "Echo Clog", price: 5995, img: "https://m.media-amazon.com/images/I/71+UwTjcURL._UL1500_.jpg" }, // Reuse
            { name: "Literide 360", price: 5495, img: "https://m.media-amazon.com/images/I/71+UwTjcURL._UL1500_.jpg" }
        ],
        Birkenstock: [
            { name: "Arizona", price: 6990, img: "https://www.birkenstock.in/cdn/shop/files/151181_4.jpg" },
            { name: "Gizeh", price: 6990, img: "https://www.birkenstock.in/cdn/shop/files/151181_4.jpg" },
            { name: "Boston", price: 11990, img: "https://www.birkenstock.in/cdn/shop/files/560771_4.jpg" }
        ],
        Skechers: [
            { name: "Go Walk 6", price: 5499, img: "https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers-master/default/dw7e53f7f8/images/large/216202_NVY.jpg" },
            { name: "Go Walk Arch Fit", price: 6999, img: "https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechers-master/default/dw1d9f8df5/images/large/232040_NVY.jpg" }
        ],
        Clarks: [
            { name: "Wallabee", price: 11999, img: "https://www.clarks.in/dw/image/v2/BDHC_PRD/on/demandware.static/-/Sites-clarks-in-master-catalog/default/dw15143a50/images/large/26155519_1.jpg" },
            { name: "Desert Boot", price: 9999, img: "https://www.clarks.in/dw/image/v2/BDHC_PRD/on/demandware.static/-/Sites-clarks-in-master-catalog/default/dw3d17d52a/images/large/26155483_1.jpg" }
        ],
        Timberland: [
            { name: "6-inch Premium Boot", price: 16999, img: "https://images.timberland.com/is/image/timberland/10061713-HERO" }
        ],
        "Dr. Martens": [
            { name: "1460 8-Eye Boot", price: 15999, img: "https://m.media-amazon.com/images/I/71I+pA0VwlL._AC_UY1000_.jpg" },
            { name: "1461 3-Eye Shoe", price: 13999, img: "https://m.media-amazon.com/images/I/71I+pA0VwlL._AC_UY1000_.jpg" }
        ],
        "Red Chief": [
            { name: "Leather Boot", price: 4495, img: "https://www.redchief.in/media/catalog/product/r/c/rc3524_1.jpg" }
        ],
        Woodland: [
            { name: "Classic Boot", price: 3995, img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1570776/2016/10/26/11477478621458-Woodland-Men-Camel-Color-Solid-Leather-Mid-Top-Flat-Boots-5781477478621287-1.jpg" }
        ]
    },
    [CATEGORIES.FORMAL]: {
        Clarks: [
            { name: "Tilden Cap", price: 4999, img: "https://www.clarks.in/dw/image/v2/BDHC_PRD/on/demandware.static/-/Sites-clarks-in-master-catalog/default/dw9eb9a15e/images/large/26161159_1.jpg" },
            { name: "Whiddon Pace", price: 5999, img: "https://www.clarks.in/dw/image/v2/BDHC_PRD/on/demandware.static/-/Sites-clarks-in-master-catalog/default/dw9eb9a15e/images/large/26161159_1.jpg" }
        ],
        "Hush Puppies": [
            { name: "Corbin Slip On", price: 5499, img: "https://www.hushpuppies.in/dw/image/v2/BDHC_PRD/on/demandware.static/-/Sites-hushpuppies-master-catalog/default/dw1d9f8df5/images/large/8549023_1.jpg" },
            { name: "Happening", price: 4999, img: "https://www.hushpuppies.in/dw/image/v2/BDHC_PRD/on/demandware.static/-/Sites-hushpuppies-master-catalog/default/dw1d9f8df5/images/large/8549023_1.jpg" }
        ],
        Bata: [
            { name: "Formal Oxford", price: 2499, img: "https://www.bata.in/dw/image/v2/BCLJ_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwb5c3e602/images/large/8516035_1.jpg" },
            { name: "Formal Derby", price: 2999, img: "https://www.bata.in/dw/image/v2/BCLJ_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwb5c3e602/images/large/8516035_1.jpg" }
        ],
        "Louis Philippe": [
            { name: "Luxure Oxford", price: 9999, img: "https://img3.junaroad.com/uiproducts/18385635/zoom_0-1634563812.jpg" }
        ],
        "Arrow": [
            { name: "Derby", price: 4999, img: "https://img3.junaroad.com/uiproducts/18385635/zoom_0-1634563812.jpg" }
        ]
    }
};

const COLORS = [
    { name: "White", tag: "White" },
    { name: "Black", tag: "Black" },
    { name: "Grey", tag: "Grey" },
    { name: "Blue", tag: "Blue" },
    { name: "Red", tag: "Red" },
    { name: "Green", tag: "Green" },
    { name: "Beige", tag: "Beige" },
    { name: "Tan", tag: "Tan" },
    { name: "Brown", tag: "Brown" },
    { name: "Multi", tag: "Multi" },
    { name: "Navy", tag: "Navy" },
    { name: "Burgundy", tag: "Burgundy" },
    { name: "Pink", tag: "Pink" },
    { name: "Yellow", tag: "Yellow" },
    { name: "Purple", tag: "Purple" },
    { name: "Silver", tag: "Silver" },
    { name: "Gold", tag: "Gold" },
    { name: "Orange", tag: "Orange" }
];

const VARIANTS = ["Standard", "Standard", "Standard", "SE", "Premium", "Gore-Tex", "Wide", "Platform"];
const GENDERS = ["Men", "Women"];

const PRICE_BANDS = [
    { id: "2k-5k", label: "₹2k - ₹5k", min: 2000, max: 4999, tag: "Budget Friendly" },
    { id: "5k-7k", label: "₹5k - ₹7k", min: 5000, max: 6999, tag: "Value Pick" },
    { id: "7k-10k", label: "₹7k - ₹10k", min: 7000, max: 9999, tag: "Mid Range" },
    { id: "10k-15k", label: "₹10k - ₹15k", min: 10000, max: 14999, tag: "Premium" },
    { id: "15k+", label: "₹15k +", min: 15000, max: 100000, tag: "Luxury" }
];

function getPriceBand(price) {
    for (const b of PRICE_BANDS) {
        if (price >= b.min && price <= b.max) return b.id;
    }
    return "15k+";
}

const CATALOG = [];
let uniqueId = 1000;

// ============================================
// MAIN GENERATOR LOOP
// ============================================

Object.keys(BASE_DB).forEach(category => {
    const brands = BASE_DB[category];
    Object.keys(brands).forEach(brand => {
        const models = brands[brand];
        models.forEach(model => {
            GENDERS.forEach(gender => {

                // Determine Variant Count for this combo
                // Core brands get huge distribution. Niche brands get less.
                const isCore = ["Nike", "Adidas", "New Balance", "ASICS", "Puma"].includes(brand);
                const variantLimit = isCore ? 8 : 4; // How many colorways

                // Pick random colors
                let allowedColors = [...COLORS];
                if (category === CATEGORIES.FORMAL) {
                    allowedColors = COLORS.filter(c => ["Black", "Brown", "Tan", "Burgundy"].includes(c.name));
                }

                const myColors = allowedColors.sort(() => 0.5 - Math.random()).slice(0, variantLimit + Math.floor(Math.random() * 4));

                myColors.forEach(color => {
                    // Iterate ALL relevant variants to boost count
                    // Core brands get more variants
                    const variantsToGenerate = isCore
                        ? ["Standard", "SE", "Premium", "Gore-Tex"]
                        : ["Standard", "Premium"];

                    variantsToGenerate.forEach(variantType => {
                        let modelName = model.name;
                        let basePrice = model.price;
                        let vibe = [...(model.vibe || []), color.name];
                        let attributes = {};

                        if (category === CATEGORIES.SNEAKERS) vibe.push("Streetwear");
                        if (category === CATEGORIES.RUNNING) vibe.push("Sporty");

                        if (variantType === "SE") { modelName += " SE"; basePrice += 1500; vibe.push("Special Edition"); }
                        else if (variantType === "Premium") { modelName += " Premium"; basePrice += 2500; vibe.push("Luxury"); }
                        else if (variantType === "Gore-Tex") { modelName += " GTX"; basePrice += 2000; vibe.push("Tech", "Winter"); }
                        else if (variantType === "Wide") { modelName += " Wide"; vibe.push("Comfort"); }

                        // Price jitter
                        const finalPrice = basePrice + (Math.floor(Math.random() * 5) * 100);
                        const band = getPriceBand(finalPrice);

                        CATALOG.push({
                            id: `${brand.toLowerCase().replace(/\s/g, '')}-${uniqueId++}-${variantType}`,
                            brand: brand,
                            model: `${modelName} ${color.name}`,
                            category: category,
                            gender: [gender], // distinct Men/Women entries
                            min_price: finalPrice,
                            max_price: finalPrice + 500,
                            primary_price_band: band,
                            attributes: {
                                vibe: vibe,
                                silhouette: model.sil || "Low",
                                cushion: model.cushion || "Balanced",
                                use_case: ["Daily"],
                                material: ["Synthetic", "Mesh"],
                                color_tags: [color.name]
                            },
                            popularity_score: 5 + Math.floor(Math.random() * 6),
                            trending_score: Math.floor(Math.random() * 6),
                            images: { default: model.img },
                            links: { official: `https://www.google.com/search?q=${encodeURIComponent(`${brand} ${modelName} ${color.name}`)}&tbm=shop` }
                        });
                    });
                });
            });
        });
    });
});

console.log(`Generated ${CATALOG.length} shoes.`);

const content = `
const priceRanges = ${JSON.stringify(PRICE_BANDS, null, 2)};
const shoeCatalog = ${JSON.stringify(CATALOG, null, 2)};
module.exports = { shoeCatalog, priceRanges };
`;

fs.writeFileSync('data.cjs', content);
