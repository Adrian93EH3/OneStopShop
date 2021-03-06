let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/Project-3',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

const productSeed = [

        {
            "image": "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202376M166012_1.jpg",
            "name": "Burberry Checkered Bag",
            "price": 990.00,
            "category": "Backpacks",
            "description": "This is a luxurious backpack made by none other than Burberry."
        },
        {
            "image": "https://img1.cohimg.net/is/image/Coach/89931_qbcah_a0?fmt=jpg&wid=680&hei=885&bgc=f0f0f0&fit=vfit&qlt=75",
            "name": "Coach Large Ranger Backpack",
            "price": 250.00,
            "category": "Backpacks",
            "description": "Large leather bag with many storage options, including a inside laptop sleeve, multifunction pockets, and closes with drawstring and clips."
        },
        {
            "image": "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202451M166261_1.jpg",
            "name": "Gucci Black Backpack",
            "price": 1980.00,
            "category": "Backpacks",
            "description": "The GG motif in a distinct black/grey combination is further enriched with Web straps and black leather trims. Made in soft GG Supreme, a softer version of GG Supreme canvas, crafted from a coated microfiber fabric with the GG motif."
        },
        {
            "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQHqjGklhIC-tmrCFe4Ij1lU47xXJIfzcp6zwB8SxFgYgx5EqDdDYQX-2xpj9CwptYejl0l7tZMhfzc3l_fv1ovkdbQjfqsy-ZuTFd8fwMBywciUCBwfb0g&usqp=CAY",
            "name": "Nike Wheat Backpack",
            "price": 75.00,
            "category": "Backpacks",
            "description": "The Nike Utility Speed Backpack keeps your gear close, secure and organized when commuting to and from training sessions. Cushioned straps give you comfort on the go, and the pack opens flat for easy access to must-have items."
        },
        {
            "image": "https://www.rei.com/media/c871bd1b-a4a7-4a27-b63e-e7d127368e12?size=784x588",
            "name": "Atmos AG 50",
            "price": 240.00,
            "category": "Backpacks",
            "description": "The Atmos™ AG 50 is the best-fitting, most ventilated and comfortable pack ever made for traditional backpacking trips lasting a weekend or more. The innovative AntiGravity suspension makes it feel like you're carrying less weight and seamlessly wraps around your body, which means you'll enjoy every mile more than ever. From easy to use stretch mesh side pockets, Stow-on-the-Go trekking pole attachment, and FlapJacket for lidless use, the Atmos™ AG 50 is still the top contender. Backed by our All Mighty Guarantee, forever."
        },
        {
            "image": "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202418M166423_1.jpg",
            "name": "Saint Laurent Black Bag",
            "price": 860.00,
            "category": "Backpacks",
            "description": "Backpack with leather trimmed Saint Laurent printed from pocket, Saint Laurent signature embossed exterior zip pocket and interior key clip, cell phone pocket, zip compartment and padded slot pocket."
        },
        {
            "image": "https://stockx.imgix.net/products/streetwear/Supreme-Backpack-SS20-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1582320818&w=1000",
            "name": "Supreme SS20 Black",
            "price": 225.00,
            "category": "Backpacks",
            "description": "Multi pocket bag with adjustable straps and two side pouches for water bottles the outer most pocket is a see throught mesh."
        },
        {
            "image": "https://stockx.imgix.net/products/streetwear/Supreme-Backpack-SS20-Red.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1582233624&w=1000",
            "name": "Supreme SS20 Red",
            "price": 225.00,
            "category": "Backpacks",
            "description": "Multi pocket bag with adjustable straps and two side pouches for water bottles the outer most pocket is a see throught mesh."
        },
        {
            "image": "https://cdn.shopify.com/s/files/1/2880/2774/products/TanHarperBackpack1_1800x1800.jpg?v=1591979771",
            "name": "Harper Leather Bag",
            "price": 269.00,
            "category": "Backpacks",
            "description": "Harper's Crazy Horse Leather Backpack provides amazing durability along with giving off a stylish look. It has been carefully made with an embossing technique and from an excellent quality crazy horse leather. This bag acquires an antique, unique look with time since it is made of a natural material. Apart from being aesthetically pleasing, this backpack provides plenty of space in which you can easily store your essentials.This bag is also quite strong and sturdy and can withstand tough environments. The thoughtfully-designed shoulder straps distribute the weight evenly so that your shoulders feel relaxed and comfortable. You can also adjust the shoulder straps according to your liking. Harper's Crazy Horse Leather Backpack is a perfect choice for school, work, traveling, camping, or hiking etc. Its grab handle is lined with leather so you can easily and comfortably carry it around too."
        },
        {
            "image": "https://www.balenciaga.com/66/45/45474478cq_14_a_f.jpg",
            "name": "Wheel Small Backpack",
            "price": 950.00,
            "category": "Backpacks",
            "description": "This small nylon bag that was made in Italy by the ever famous Balenciaga brand comes with adjustable shoulder straps."
        },
        {
            "image": "https://img1.cohimg.net/is/image/Coach/89897_qbm2_a0?fmt=jpg&wid=680&hei=885&bgc=f0f0f0&fit=vfit&qlt=75",
            "name": "Hudson Backpack with Hore and Carriage Print",
            "price": 289.00,
            "category": "Backpacks",
            "description": "Printed Coated canvas and natural pebble leather, the bag has multiple pouches for your phone or laptop."
        },
        {
            "image": "https://img1.cohimg.net/is/image/Coach/3001_qboh0_a0?fmt=jpg&wid=680&hei=885&bgc=f0f0f0&fit=vfit&qlt=75",
            "name": "West Backpack In Signature Canvas With Varsity Stripe",
            "price": 249.00,
            "category": "Backpacks",
            "description": "Signature coated canvas and smooth calf leather, has two seperate compartments with zip closures, and adjustable shoulder straps."
        },
        {
            "image": "https://a248.e.akamai.net/f/248/9086/10h/s7d2.scene7.com/is/image/FoxRacing/25956248_1?$dw_detn1$&wid=800&hei=800",
            "name": "Fox Racing Men's Honda Pullover",
            "price": 85.00,
            "category": "Clothing",
            "description": "This hoodie is made out of 80% cotton / 20% Polyester, is also part of the Fox X Honda collection"
        },
        {
            "image": "https://media.hufworldwide.com/media/catalog/product/cache/image/1268x1172/e9c3970ab036de70892d86c6d221abfe/W/A/WAVE-ANORAK-JACKET_HOT-PINK_JK00229_HOTPK_01.jpg",
            "name": "HUF Multicolored Jacket",
            "price": 85.00,
            "category": "Clothing",
            "description": "Inspired by retro outdoors wear, the Wave Anorak Jacket is made of durable nylon treated with a water-repellent coating and is equipped with a half-zip opening, two handwarmer pockets, and a high-collar hood for extra protection. Constructed with color-blocked paneling for a throwback vibe, the jacket features HUF's 'Peak' logo in a rubber patch on the front pocket, and in a reflective foil-print across the back."
        },
        {
            "image": "https://media.hufworldwide.com/media/catalog/product/cache/image/1268x1172/e9c3970ab036de70892d86c6d221abfe/N/E/NETWORK-LIGHTWEIGHT-JACKET_REALTREE-BLACK_JK00248_RTBLK_01.jpg",
            "name": "HUF Camo Jacket",
            "price": 110.00,
            "category": "Clothing",
            "description": "HUF teams up with renowned outdoors wear-specialist Realtree® on the Network Lightweight Jacket, inspired by 90s tactical gear. Featuring Realtree’s® signature 3D camouflage, the jacket is made of water-repellent nylon with a mesh overlay for a retro aesthetic. Cut with a full-zip front and spacious high-collar hood to protect against heavy weather, the piece is finished with two handwarmer pockets, a rubber Triple Triangle logo at left chest, and HUF’s ‘Peak’ logo at back."
        },
        {
            "image": "https://s7d5.scene7.com/is/image/UrbanOutfitters/56539760_023_b?$xlarge$&fit=constrain&qlt=80&wid=683",
            "name": "North Face Tan Puffer Jacket",
            "price": 70.00,
            "category": "Clothing",
            "description": "Padded jacket in windproof, water-repellent fabric. Lined, detachable hood with drawstring and faux fur trim. Zipper at front and wind flap with snap fasteners. Fleece-lined handwarmer pockets, patch pockets with flap and snap fasteners, and one inner pocket with hook-loop fastener. Ribbing at cuffs and hem. Lined. Polyester fill."
        },
        {
            "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Primitive-x-Naruto-Crows-Burgundy-Coaches-Jacket-_337361-front-US.jpg",
            "name": "Primitive x Naruto Crows Burgundy Coaches Jacket",
            "price": 75.00,
            "category": "Clothing",
            "description": "Layer up in iconic anime swag with the Crows burgundy coaches jacket from Primitive x Naruto. This burgundy coaches jacket features a classic foldover collar, button-up placket, and collaborative Primitive and Naruto graphics screen-printed at the left chest and back to complete the design."
        },
        {
            "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Broken-Promises-We-Ain-t-Homies-Black-Hooded-Coaches-Jacket-_315315-front-US.jpg",
            "name": "Broken Promises We Ain't Homies Black Hooded Coaches Jacket",
            "price": 70.00,
            "category": "Clothing",
            "description": "Grab an eye-catching new layer for the cooler weather with the We Ain't Homies black jacket from Broken Promises. This hooded jacket comes in black and features embroidered text at the left chest in white that reads We Ain't Homies while the back displays large white screen-printed text that reads fake friends stab you in the back, real friends stab you in the heart. A full snap button placket with custom BP hardware, adjustable drawstring hood and bottom hem, along with two hand pockets offer a classic silhouette, while the light grey jersey lining offers a comfortable fit and feel"
        },
        {
            "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Vans-Barbed-Floral-White-Hoodie-_167121-front-CA.jpg",
            "name": "Vans Barbed Floral White Hoodie",
            "price": 55.00,
            "category": "Clothing",
            "description": "Spruce up your hoodie game with some fun floral flair in the Vans Barbed floral white hoodie. A mostly white colorway throughout is contrasted by screen-printed pink logo script on the left chest for colorful branding, while the floral, barbed wire patterns lining both sleeves add some serious fashion-forward flair. A fleece lined interior and relaxed fit keep this hoodie extremely comfortable and the adjustable drawstring hood along with kangaroo pouch pocket maintain a truly classic silhouette overall."
        },
        {
            "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Empyre-Fredia-Old-Soul-Black-%26-Purple-Tie-Dye-Hoodie-_330505-front-US.jpg",
            "name": "Empyre Fredia Old Soul Black & Purple Tie Dye Hoodie",
            "price": 35.00,
            "category": "Clothing",
            "description": "Your favorite hoodie is here to keep you cozy all year long. The Fredia Old Soul black and purple tie-dye hoodie from Empyre features a unique purple and black dye treatment throughout for a one-of-a-kind look, while the adjustable hood and kangaroo pocket is sure to keep you warm and comfy. Finished with wild graphics screen-printed on the back of a trippy skeleton with butterflies and mushrooms, along with text that reads old soul."
        },
        {
            "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Broken-Promises-Unfollow-Black-Tie-Dye-Hoodie-_335573-back-US.jpg",
            "name": "Broken Promises Unfollow Black Tie-Dye Hoodie",
            "price": 52.00,
            "category": "Clothing",
            "description": "Wear the Unfollow black tie-dye hoodie from Broken Promises as a reminder that it's okay to cut negative influences out of your life. This hooded sweatshirt comes in a black and grey tie-dye color and features a white graphic across the back and sleeves for additional impact."
        },
        {
            "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Civil-Love-Is-A-Drug-Orchid-Hoodie-_336547-front-US.jpg",
            "name": "Civil Love Is A Drug Orchid Hoodie",
            "price": 65.00,
            "category": "Clothing",
            "description": "Throw some irresistible color into your collection with the Love Is A Drug orchid hoodie from Civil! This purple-pink hoodie features a large rose graphic at the center chest, surrounded by Love is a drug text, and the Civil Regime Rebel Youth text on the left sleeve gives it a ton of killer branding."
        },
        {
            "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Dravus-Dierdra-Pink-Hoodie-_330503-back-US.jpg",
            "name": "Dravus Dierdra Pink Hoodie",
            "price": 35.00,
            "category": "Clothing",
            "description": "Succulents are all the rage and the Dierdra pink hoodie from Dravus is a stylish way to get in on the fun. Several succulent graphics across the back are complemented by the Life would succ without you, let's stick together text that surrounds them, for a bit of piercing humor. Finished off with the flower graphic at the left chest, the Dierdra hoodie is sure to give your look some extra botanical pizzazz."
        },
        {
            "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/JV-by-Jac-Vanek-Loser-Purple%2C-Yellow%2C-%26-Blue-Tie-Dye-Hoodie-_336819-front-US.jpg",
            "name": "JV by Jac Vanek Loser Purple, Yellow, & Blue Tie Dye Hoodie",
            "price": 45.00,
            "category": "Clothing",
            "description": "Be loud and proud about your insecurities in the Loser purple, yellow, and blue tie dye hoodie from JV by Jac Vanek! This sweatshirt adds a pretty pastel touch to any look with swirling purple, yellow, and blue tones, and rainbow-colored text reading Loser at the chest for a look that's sure to have people saying, no you're not."
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/view51/CS-157-548_400.png",
            "name": "AMD Threadripper Ultimate",
            "price": 7349.00,
            "category": "Tech",
            "description": "CPU: AMD Ryzen™ Threadripper 3990X 2.9GHz [4.3GHz Turbo] 64Core 128Threads 288MB Cache 280W Processor CPU / Processor Cooling Fan: Asetek 570LC 120mm (Fatboy) Liquid CPU Cooling System w/ Copper Cold Plate (Single Standard 120MM Fan) Motherboard: ASRock TRX40 Creator ATX w/ WiFi 6, RGB, Dual LAN, 4 PCIe x16, 8 SATA3, 3 M.2 SATA/PCIe RAM / System Memory: 32GB (8GBx4) DDR4/3000MHz Quad Channel Memory (ADATA XPG Z1) Video Card: GeForce RTX™ 3090 24GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 1250 Watts - Enermax EDT1250EWT MaxTytan Series 80 PLUS Titanium certified Full Modular Active PFC Power Supply Primary Hard Drive: 1TB WD Blue SN550 M.2 NVME SSD + 4TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/PCO11LIRIK/CS-193-105_400.png",
            "name": "Lirik 200",
            "price": 5455.00,
            "category": "Tech",
            "description": "CPU: Intel® Core™ Processor i9-10900X Ten-Core 3.7GHz (Turbo 4.7GHz) 19.25MB Intel Smart Cache LGA2066 (Quad Channels) CPU / Processor Cooling Fan: CyberpowerPC MasterLiquid Lite 360mm ARGB CPU Liquid Cooler with Dual Chamber Pump & Copper Cold Plate (Intel) Motherboard: GIGABYTE GA-X299 UD4 PRO ATX w/ RGB, Digital LED Support, USB 3.1, 5 PCIe x16, 8 SATA3, 2 M.2 SATA/PCIe [Intel Optane Ready] RAM / System Memory: 64GB (16GBx4) DDR4/3000MHz Quad Channel Memory (ADATA XPG Z1) Video Card: GeForce RTX™ 3090 24GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 850 Watts - Corsair RM Series RM850 80 PLUS GOLD Certified Fully Modular Ultra Quiet Power Supply Primary Hard Drive: 2TB Intel® 665P SERIES PCIe NVMe M.2 SSD - Seq R/W: Up to 2000/2000 MB/s, Rnd R/W up to 250/250k (Single Drive) Secondary Hard Drive: 3TB (3TBx1) SATA-III 6.0Gb/s 64MB Cache 5400RPM HDD (Single Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/EnthooEliteXT/CS-220-112_400.png",
            "name": "Luxe 4K",
            "price": 5039.00,
            "category": "Tech",
            "description": "CPU: Intel® Core™ Processor i9-10980XE Eighteen-Core 3.0GHz (Turbo 4.8GHz) 24.75MB Intel Smart Cache LGA2066 (Quad Channels) Venom Boost Fast And Efficient Factory Overclocking: Ultimate OC (Ultimate Overclock 30% or more) CPU / Processor Cooling Fan: BitsPower CP HydroFluxe Custom HardTube Water Cooling Kit 360MM RAD/D5PUMP/Intel CPU Block (Clear) (3 x Standard 120MM Fans) Coolant for Cyberpower Xtreme Hydro Water Cooling Kits: Thermaltake P1000 Pastel Coolant - Red Motherboard: GIGABYTE GA-X299 UD4 PRO ATX w/ RGB, Digital LED Support, USB 3.1, 5 PCIe x16, 8 SATA3, 2 M.2 SATA/PCIe [Intel Optane Ready] RAM / System Memory: 64GB (16GBx4) DDR4/3000MHz Quad Channel Memory (ADATA XPG Z1) Video Card: GeForce® RTX 2080 SUPER™ 8GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 1250 Watts - Enermax EDT1250EWT MaxTytan Series 80 PLUS Titanium certified Full Modular Active PFC Power Supply Primary Hard Drive: 1TB SAMSUNG 970 PRO PCIe NVMe M.2 SSD - Seq R/W: Up to 3500/2700 MB/s, Rnd R/W up to 500/500k (Single Drive) Secondary Hard Drive: 4TB (4TBx1) SATA-III 6.0Gb/s 64MB Cache 5400RPM HDD (Single Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/EnthooEliteXT/CS-220-112_400.png",
            "name": "Hyper Liquid Alloy Black Mamba",
            "price": 4965.00,
            "category": "Tech",
            "description": "CPU: Intel® Core™ Processor i9-10980XE Eighteen-Core 3.0GHz (Turbo 4.8GHz) 24.75MB Intel Smart Cache LGA2066 (Quad Channels) Venom Boost Fast And Efficient Factory Overclocking: Ultimate OC (Ultimate Overclock 30% or more) CPU / Processor Cooling Fan: BitsPower CP HydroFluxe Custom HardTube Water Cooling Kit 360MM RAD/D5PUMP/Intel CPU Block (Clear) (3 x Standard 120MM Fans) Coolant for Cyberpower Xtreme Hydro Water Cooling Kits: Thermaltake C1000 Pure Clear Coolant Motherboard: GIGABYTE GA-X299 UD4 PRO ATX w/ RGB, Digital LED Support, USB 3.1, 5 PCIe x16, 8 SATA3, 2 M.2 SATA/PCIe [Intel Optane Ready] RAM / System Memory: 32GB (8GBx4) DDR4/3000MHz Quad Channel Memory (ADATA XPG Z1) Video Card: GeForce RTX™ 3090 24GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 1250 Watts - Enermax EDT1250EWT MaxTytan Series 80 PLUS Titanium certified Full Modular Active PFC Power Supply Primary Hard Drive: 512GB SAMSUNG 970 PRO PCIe NVMe M.2 SSD - Seq R/W: Up to 3500/2300 MB/s, Rnd R/W up to 370/500k (Single Drive) Secondary Hard Drive: 4TB (4TBx1) SATA-III 6.0Gb/s 64MB Cache 5400RPM HDD (Single Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/PCO11XL/CS-193-107_400.png",
            "name": "Gamer Infinity XLC",
            "price": 2535.00,
            "category": "Tech",
            "description": "CPU: Intel® Core™ Processor i9-10900K 10/20 3.70GHz [Turbo 5.2GHz] 20MB Cache LGA1200 CPU / Processor Cooling Fan: CyberpowerPC MasterLiquid Lite 240mm ARGB CPU Liquid Cooler with Dual Chamber Pump & Copper Cold Plate (Intel) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB) Video Card: GeForce RTX™ 3080 10GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 1,000 Watts - Standard 80 Plus Gold Power Supply Primary Hard Drive: 1TB WD Blue SN550 M.2 NVME SSD + 3TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/PCO11AIR/CS-193-103.png",
            "name": "Pro Designer 100",
            "price": 1859.00,
            "category": "Tech",
            "description": "CPU: Intel® Core™ Processor i7-10700 8/16 2.90GHz [Turbo 4.8GHz] 16MB Cache LGA1200 CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME Z490-P ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB) Video Card: GeForce® RTX 2070 SUPER™ 8GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 512GB ADATA XPG ASX6000LNP-512GT-C PCIe NVMe M.2 SSD - Seq R/W: Up to 1800/1200 MB/s, Rnd R/W up to 180/200k (Single Drive) Secondary Hard Drive: 2TB (2TBx1) SATA-III 6.0Gb/s 256MB Cache 7200RPM HDD (Single Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/cube802/cs-192-401_400.png",
            "name": "Syber L Elite 300",
            "price": 1725.00,
            "category": "Tech",
            "description": "CPU: Intel® Core™ Processor i7-10700K 8/16 3.80GHz [Turbo 5.1GHz] 16MB Cache LGA1200 CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 16GB (8GBx2) DDR4/3200MHz Dual Channel Memory (Performance Memory by Major Brands) Video Card: GeForce® RTX 2070 SUPER™ 8GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 1TB WD Blue SN550 M.2 NVME SSD + 3TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/H510/CS-211-222_400.png",
            "name": "Gamer Master 8000",
            "price": 1525.00,
            "category": "Tech",
            "description": "CPU: AMD Ryzen 7 3800XT 3.9GHz [4.7GHz Turbo] 8 Cores/ 16 Threads 36MB Cache 105W Processor CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME B550-PLUS ATX w/ RGB, GbT LAN, 2 PCIe x16, 3 PCIe x1, 6 SATA3, 2 M.2 SATA/PCIe RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB) Video Card: GeForce® RTX 2060 SUPER™ 8GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 512GB ADATA XPG ASX6000LNP PCIe NVMe + Seagate 2TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/cube802/cs-192-401_400.png",
            "name": "Syber L pro 200",
            "price": 1335.00,
            "category": "Tech",
            "description": "CPU: Intel® Core™ Processor i7-10700 8/16 2.90GHz [Turbo 4.8GHz] 16MB Cache LGA1200 CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 16GB (8GBx2) DDR4/3200MHz Dual Channel Memory (Performance Memory by Major Brands) Video Card: AMD Radeon™ RX 5600 XT 6GB GDDR6 PCIe 4.0 [Navi] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 512GB ADATA XPG ASX6000LNP PCIe NVMe + Seagate 2TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/p418x/cs-450-140_400.png",
            "name": "AMD Ryzen 7X Configuration",
            "price": 1265.00,
            "category": "Tech",
            "description": "CPU: AMD Ryzen 7 3700X 3.6GHz [4.4GHz Turbo] 8 Cores/ 16 Threads 36MB Cache 65W Processor CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME B550-PLUS ATX w/ RGB, GbT LAN, 2 PCIe x16, 3 PCIe x1, 6 SATA3, 2 M.2 SATA/PCIe RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB Video Card: GeForce® GTX 1660 SUPER 6GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 240GB WD Green SSD + 1TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/p400a/CS-220-220_400.png",
            "name": "Gamer Xtreme 1000",
            "price": 1165.00,
            "category": "Tech",
            "description": "CPU: Intel® Core™ Processor i5-10400F 6/12 2.90GHz [Turbo 4.3GHz] 12MB Cache LGA1200 [w/o Integrated Graphic] (Comet Lake-S) CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB) Video Card: GeForce® GTX 1650 SUPER 4GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 512GB ADATA XPG ASX6000LNP PCIe NVMe + Seagate 2TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "https://www.cyberpowerpc.com/images/cs/p418R/cs-450-159_400.png",
            "name": "Battlebox 2020 Essential Core",
            "price": 999.00,
            "category": "Tech",
            "description": "CPU: Intel® Core™ Processor i5-10400F 6/12 2.90GHz [Turbo 4.3GHz] 12MB Cache LGA1200 [w/o Integrated Graphic] (Comet Lake-S) CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB Video Card: GeForce® GTX 1660 SUPER 6GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 240GB WD Green Series M.2 SATA-III 6.0Gb/s SSD - Seq R/W: Up to 540/460 MB/s, Rnd R/W up to 37/68k (Single Drive) Secondary Hard Drive: 2TB (2TBx1) SATA-III 6.0Gb/s 256MB Cache 7200RPM HDD (Single Drive)"
        },
        {
            "image": "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/dbx18w8zcnb6om4iehag/sf-air-force-1-premium-mens-shoe-Bv04G5.jpg",
            "name": "Nike SF Air Force 1 Premium",
            "price": 200.00,
            "category": "Shoes",
            "description": "A hoops icon toughens up with the Nike SF Air Force 1 Premium Men's Shoe. Crafted with a genuine leather and fabric upper, it features military-inspired details, a customizable ankle strap and a Nike Air unit for cushioned comfort."
        },
        {
            "image": "https://www.balenciaga.com/66/11/11906913mg_12_a_f.jpg",
            "name": "Knife Knit 80mm",
            "price": 695.00,
            "category": "Shoes",
            "description": "This high heel is a clean black knit heel with a 80mm arch, and has a elongated pointed toe."
        },
        {
            "image": "https://www.balenciaga.com/66/11/11858237pv_12_a_f.jpg",
            "name": "Corset 80mm Bootie",
            "price": 1490.00,
            "category": "Shoes",
            "description": "This high heel is made with shiny sheep skin, with a 80mm arch, and has semi-shiny palladium hardwear, the corset effect is ade with lace and eyelets."
        },
        {
            "image": "https://www.balenciaga.com/66/11/11795161nt_12_a_f.jpg",
            "name": "Speed Sneaker Graffiti",
            "price": 825.00,
            "category": "Shoes",
            "description": "The sock-like design are very lightweight coming in at 240g making it feel like there is a could unter your feet, the sould has the logo on the side of it."
        },
        {
            "image": "https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/grid_image_3/460x497/17f82f742ffe127f42dca9de82fb58b1/E/I/1592293528_3SH118YJP_H069_E03_GH.jpg?imwidth=430",
            "name": "B23 High-Top Sneaker",
            "price": 1100.00,
            "category": "Shoes",
            "description": "The B23 high-top sneaker is set apart by its white and black Dior Oblique motif and transparent paneling. Essential details, such as eyelets and a lace-up front, a white and beige rubber sole, a rounded and reinforced toe as well as a back tab recall the codes of the classic high-top style. The sneaker is further enhanced with contrasting details on the sides, including a 'DIOR' signature, and pairs easily with any casual outfit."
        },
        {
            "image": "https://www.balenciaga.com/66/11/11804965ii_12_a_f.jpg",
            "name": "Strike 20mm Lace-Up Boot",
            "price": 950.00,
            "category": "Shoes",
            "description": "This platform boot is mad efor smooth mat calfskin, with tone-on-tone lacing and stitching, and thick toothed rubber outsole."
        },
        {
            "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/97223f0a-dfde-4ca6-9ddd-c2436f154ff0/jordan-zoom-92-mens-shoe-HGMsj5.jpg",
            "name": "Jordan Zoom '92",
            "price": 150.00,
            "category": "Shoes",
            "description": "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort while tapping into the irreverent spirit of that era's designs. A stretchy fit sleeve and underfoot cushioning offer a comfortable fit. '90s-inspired details give the shoe its retro flavor."
        },
        {
            "image": "https://images.neimanmarcus.com/ca/7/product_assets/N/5/B/M/K/NMN5BMK_mz.jpg",
            "name": "Giuseppe Zanotti Men's Velvet & Patent Leather Mid-Top Sneakers",
            "price": 710.00,
            "category": "Shoes",
            "description": "This mid-top sneaker is made out of velvet and patent metallic leather, with a round toe and duel zips on either side of the laces, and a rubber outsoul."
        },
        {
            "image": "https://images.neimanmarcus.com/ca/5/product_assets/N/5/S/8/K/NMN5S8K_mz.jpg",
            "name": "Christian Louboutin Men's Spiked Sock 30 Neoprene Sneakers",
            "price": 1295.00,
            "category": "Shoes",
            "description": "This sock like sneaker has spiked embellishments, the front toe is rounded and reinforced to make the shoe more durable,and the pull-tab has the logo on it."
        },
        {
            "image": "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwdb73de11/images/a_107/167758C_A_107X1.jpg?sw=964",
            "name": "Pride Chuck Taylor All Star",
            "price": 65.00,
            "category": "Shoes",
            "description": "A celebration of inclusivity and Pride, in all its forms and colors, inspired by the many flags raised by the LGBTQIA+ community. The “More Color, More Pride” flag expands to include brown and black stripes — representing the power of diversity and inclusion. With the Chuck Taylor All Star, a black-and-white classic is made over with brilliant, bright color."
        },
        {
            "image": "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwb7894c1d/images/a_107/165092C_A_107X1.jpg?sw=964",
            "name": "Chuck Taylor All Star Space Racer High Top",
            "price": 60.00,
            "category": "Shoes",
            "description": "Switch up your go-to Chucks with this space-inspired remake. We've swapped out classic canvas for a polyester denim and topped it off with color-popped tape designs as a nod to outerspace repairs. It turns out duct tape really can fix anything."
        },
        {
            "image": "https://www.balenciaga.com/66/11/11929538wq_12_a_f.jpg",
            "name": "Knife Shark 110mm Boot Over-The-Knee",
            "price": 2250.00,
            "category": "Shoes",
            "description": "These over-the-knee boots are made out of calfskin, and has a 100mm arch with a thin heel and a elongated pointy toe."
        },
        {
             "image": "https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202376M166012_1.jpg",
             "name": "Burberry Checkered Bag",
             "price": 990.00,
             "category": "Featured",
             "description": "This is a luxurious backpack made by none other than Burberry."
         },
         {
             "image": "https://www.cyberpowerpc.com/images/cs/p400a/CS-220-220_400.png",
             "name": "Gamer Xtreme 1000",
             "price": 1165.00,
             "category": "Featured",
             "description": "Mid-range gaming PC built with an Intel i5-10400 processor, a GTX 1650 SUPER 4GB GPU, 32GB of DDR4 RAM, Windows 10 Home, and much more"
         },
         {
             "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/97223f0a-dfde-4ca6-9ddd-c2436f154ff0/jordan-zoom-92-mens-shoe-HGMsj5.jpg",
             "name": "Jordan Zoom '92",
             "price": 150.00,
             "category": "Featured",
             "description": "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort while tapping into the irreverent spirit of that era's designs. A stretchy fit sleeve and underfoot cushioning offer a comfortable fit. '90s-inspired details give the shoe its retro flavor."
         },
         {
             "image": "https://www.cyberpowerpc.com/images/cs/PCO11XL/CS-193-107_400.png",
             "name": "Gamer Infinity XLC",
             "price": 2535.00,
             "category": "Featured",
             "description": "CPU: Intel® Core™ Processor i9-10900K 10/20 3.70GHz [Turbo 5.2GHz] 20MB Cache LGA1200 CPU / Processor Cooling Fan: CyberpowerPC MasterLiquid Lite 240mm ARGB CPU Liquid Cooler with Dual Chamber Pump & Copper Cold Plate (Intel) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB) Video Card: GeForce RTX™ 3080 10GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 1,000 Watts - Standard 80 Plus Gold Power Supply Primary Hard Drive: 1TB WD Blue SN550 M.2 NVME SSD + 3TB SATA III Hard Drive Combo (Combo Drive)"
         },
         {
             "image": "https://www.cyberpowerpc.com/images/cs/PCO11AIR/CS-193-103.png",
             "name": "Pro Designer 100",
             "price": 1859.00,
             "category": "Featured",
             "description": "High-end gaming PC with an Intel i7-10700 processor, a GeForce RTX 2070 SUPER 8GB GPU, 32GB of DDR4 RAM, Windows 10 Home, and much more." 
         },
         {
             "image": "https://images.neimanmarcus.com/ca/7/product_assets/N/5/B/M/K/NMN5BMK_mz.jpg",
             "name": "Giuseppe Zanotti Men's Velvet & Patent Leather Mid-Top Sneakers",
             "price": 710.00,
             "category": "Featured",
             "description": "This mid-top sneaker is made out of velvet and patent metallic leather, with a round toe and duel zips on either side of the laces, and a rubber outsoul."
         },
         {
             "image": "https://www.cyberpowerpc.com/images/cs/view51/CS-157-548_400.png",
             "name": "AMD Threadripper Ultimate",
             "price": 7349.00,
             "category": "Featured",
             "description": "CPU: AMD Ryzen™ Threadripper 3990X 2.9GHz [4.3GHz Turbo] 64Core 128Threads 288MB Cache 280W Processor CPU / Processor Cooling Fan: Asetek 570LC 120mm (Fatboy) Liquid CPU Cooling System w/ Copper Cold Plate (Single Standard 120MM Fan) Motherboard: ASRock TRX40 Creator ATX w/ WiFi 6, RGB, Dual LAN, 4 PCIe x16, 8 SATA3, 3 M.2 SATA/PCIe RAM / System Memory: 32GB (8GBx4) DDR4/3000MHz Quad Channel Memory (ADATA XPG Z1) Video Card: GeForce RTX™ 3090 24GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 1250 Watts - Enermax EDT1250EWT MaxTytan Series 80 PLUS Titanium certified Full Modular Active PFC Power Supply Primary Hard Drive: 1TB WD Blue SN550 M.2 NVME SSD + 4TB SATA III Hard Drive Combo (Combo Drive)"
         },
         {
             "image": "https://img1.cohimg.net/is/image/Coach/89931_qbcah_a0?fmt=jpg&wid=680&hei=885&bgc=f0f0f0&fit=vfit&qlt=75",
             "name": "Coach Large Ranger Backpack",
             "price": 250.00,
             "category": "Featured",
             "description": "Large leather bag with many storage options, including a inside laptop sleeve, multifunction pockets, and closes with drawstring and clips."
         },
         {
            "image": "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwdb73de11/images/a_107/167758C_A_107X1.jpg?sw=964",
            "name": "Pride Chuck Taylor All Star",
            "price": 65.00,
            "category": "Featured",
            "description": "A celebration of inclusivity and Pride, in all its forms and colors, inspired by the many flags raised by the LGBTQIA+ community. The “More Color, More Pride” flag expands to include brown and black stripes — representing the power of diversity and inclusion. With the Chuck Taylor All Star, a black-and-white classic is made over with brilliant, bright color."
        },
        {
            "image": "https://www.balenciaga.com/66/45/45474478cq_14_a_f.jpg",
            "name": "Wheel Small Backpack",
            "price": 950.00,
            "category": "Featured",
            "description": "This small nylon bag that was made in Italy by the ever famous Balenciaga brand comes with adjustable shoulder straps."
        }
     ]

db.Products.deleteMany({})
    .then(() => db.Products.collection.insertMany(productSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })