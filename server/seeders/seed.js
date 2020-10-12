let mongoose = require("mongoose");
let db = require("..models/");

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
            "image": "burberrybp.png",
            "name": "Burberry Checkered Bag",
            "price": "$990.00",
            "category": "Backpack",
            "description": "This is a luxurious backpack made by none other than Burberry."
        },
        {
            "image": "coachbp.png",
            "name": "Coach Large Ranger Backpack",
            "price": "$250.00",
            "category": "Backpack",
            "description": "Large leather bag with many storage options, including a inside laptop sleeve, multifunction pockets, and closes with drawstring and clips."
        },
        {
            "image": "guccibp.png",
            "name": "Gucci Black Backpack",
            "price": "$1,980.00",
            "category": "Backpack",
            "description": "The GG motif in a distinct black/grey combination is further enriched with Web straps and black leather trims. Made in soft GG Supreme, a softer version of GG Supreme canvas, crafted from a coated microfiber fabric with the GG motif."
        },
        {
            "image": "nikewheatbp.png",
            "name": "Nike Wheat Backpack",
            "price": "$75.00",
            "category": "Backpack",
            "description": "The Nike Utility Speed Backpack keeps your gear close, secure and organized when commuting to and from training sessions. Cushioned straps give you comfort on the go, and the pack opens flat for easy access to must-have items."
        },
        {
            "image": "ospreybp.png",
            "name": "Atmos AG 50",
            "price": "$240.00",
            "category": "Backpack",
            "description": "The Atmos™ AG 50 is the best-fitting, most ventilated and comfortable pack ever made for traditional backpacking trips lasting a weekend or more. The innovative AntiGravity suspension makes it feel like you're carrying less weight and seamlessly wraps around your body, which means you'll enjoy every mile more than ever. From easy to use stretch mesh side pockets, Stow-on-the-Go trekking pole attachment, and FlapJacket for lidless use, the Atmos™ AG 50 is still the top contender. Backed by our All Mighty Guarantee, forever."
        },
        {
            "image": "saintlaurentbp.png",
            "name": "City Backpack in nylon canvas and leather",
            "price": "$860.00",
            "category": "Backpack",
            "description": "Backpack with leather trimmed Saint Laurent printed from pocket, Saint Laurent signature embossed exterior zip pocket and interior key clip, cell phone pocket, zip compartment and padded slot pocket."
        },
        {
            "image": "supremeblackbp.png",
            "name": "Supreme SS20 black",
            "price": "$225.00",
            "category": "Backpack",
            "description": "Multi pockety bag with adjustable straps and two side pouches for watter bottels the outer most pocket is a see throught mesh."
        },
        {
            "image": "supremeredbp.png",
            "name": "Supreme SS20 red",
            "price": "$225.00",
            "category": "Backpack",
            "description": "Multi pockety bag with adjustable straps and two side pouches for watter bottels the outer most pocket is a see throught mesh."
        },
        {
            "image": "leather.png",
            "name": "Crazy Horse Leather Backpack Yukon Bags",
            "price": "$269.00",
            "category": "Backpack",
            "description": "Crazy Horse Leather Backpack provides amazing durability along with giving off a stylish look. It has been carefully made with an embossing technique and from an excellent quality crazy horse leather. This bag acquires an antique, unique look with time since it is made of a natural material. Apart from being aesthetically pleasing, this backpack provides plenty of space in which you can easily store your essentials.This bag is also quite strong and sturdy and can withstand tough environments. The thoughtfully-designed shoulder straps distribute the weight evenly so that your shoulders feel relaxed and comfortable. You can also adjust the shoulder straps according to your liking. Crazy Horse Leather Backpack is a perfect choice for school, work, traveling, camping, or hiking etc. Its grab handle is lined with leather so you can easily and comfortably carry it around too."
        },
        {
            "image": "balenciagabp.png",
            "name": "Wheel Small Backpack Balenciaga",
            "price": "$950.00",
            "category": "Backpack",
            "description": "This amall nylon bag that was made in italy comes with adjustable shoulder straps, and three different pockets."
        },
        {
            "image": "coachbp2.png",
            "name": "Hudson Backpack with Hore and Carriage Print",
            "price": "$289.00",
            "category": "Backpack",
            "description": "Printed Coated canvas and natural pebble leather, the bag has multipule poutches for your phone or laptop."
        },
        {
            "image": "coachbp3.png",
            "name": "West Backpack In Signature Canvas With Varsity Stripe",
            "price": "$249.00",
            "category": "Backpack",
            "description": "Signature coated canvas and smooth calf leather, has two seperate compartments with zip closures, and adjustable shoulder straps."
        },
        {
            "image": "HRF1.png",
            "name": "Fox Racing Men's Honda Pullover",
            "price": "$85.00",
            "category": "Clothing",
            "description": "This hoodie is made out of 80% cotton / 20% Polyester, is also part of the Fox X Honda collection"
        },
        {
            "image": "HUFMultiF.png",
            "name": "Wave Anorak Jacket",
            "price": "$85.00",
            "category": "Clothing",
            "description": "Inspired by retro outdoors wear, the Wave Anorak Jacket is made of durable nylon treated with a water-repellent coating and is equipped with a half-zip opening, two handwarmer pockets, and a high-collar hood for extra protection. Constructed with color-blocked paneling for a throwback vibe, the jacket features HUF's 'Peak' logo in a rubber patch on the front pocket, and in a reflective foil-print across the back."
        },
        {
            "image": "HUFCamoF.png",
            "name": "Network Lightweight Jacket",
            "price": "$110.00",
            "category": "Clothing",
            "description": "HUF teams up with renowned outdoors wear-specialist Realtree® on the Network Lightweight Jacket, inspired by 90s tactical gear. Featuring Realtree’s® signature 3D camouflage, the jacket is made of water-repellent nylon with a mesh overlay for a retro aesthetic. Cut with a full-zip front and spacious high-collar hood to protect against heavy weather, the piece is finished with two handwarmer pockets, a rubber Triple Triangle logo at left chest, and HUF’s ‘Peak’ logo at back."
        },
        {
            "image": "BrownF.png",
            "name": "Hooded Puffer Jacket",
            "price": "$70.00",
            "category": "Clothing",
            "description": "Padded jacket in windproof, water-repellent fabric. Lined, detachable hood with drawstring and faux fur trim. Zipper at front and wind flap with snap fasteners. Fleece-lined handwarmer pockets, patch pockets with flap and snap fasteners, and one inner pocket with hook-loop fastener. Ribbing at cuffs and hem. Lined. Polyester fill."
        },
        {
            "image": "ItachiF.png",
            "name": "Primitive x Naruto Crows Burgundy Coaches Jacket",
            "price": "$75.00",
            "category": "Clothinbg",
            "description": "Layer up in iconic anime swag with the Crows burgundy coaches jacket from Primitive x Naruto. This burgundy coaches jacket features a classic foldover collar, button-up placket, and collaborative Primitive and Naruto graphics screen-printed at the left chest and back to complete the design."
        },
        {
            "image": "FakeFriendsF.png",
            "name": "Broken Promises We Ain't Homies Black Hooded Coaches Jacket",
            "price": "$70.00",
            "category": "Clothing",
            "description": "Grab an eye-catching new layer for the cooler weather with the We Ain't Homies black jacket from Broken Promises. This hooded jacket comes in black and features embroidered text at the left chest in white that reads We Ain't Homies while the back displays large white screen-printed text that reads fake friends stab you in the back, real friends stab you in the heart. A full snap button placket with custom BP hardware, adjustable drawstring hood and bottom hem, along with two hand pockets offer a classic silhouette, while the light grey jersey lining offers a comfortable fit and feel"
        },
        {
            "image": "VansF.png",
            "name": "Vans Barbed Floral White Hoodie",
            "price": "$55.00",
            "category": "Clothing",
            "description": "Spruce up your hoodie game with some fun floral flair in the Vans Barbed floral white hoodie. A mostly white colorway throughout is contrasted by screen-printed pink logo script on the left chest for colorful branding, while the floral, barbed wire patterns lining both sleeves add some serious fashion-forward flair. A fleece lined interior and relaxed fit keep this hoodie extremely comfortable and the adjustable drawstring hood along with kangaroo pouch pocket maintain a truly classic silhouette overall."
        },
        {
            "image": "OldSoulF.png",
            "name": "Empyre Fredia Old Soul Black & Purple Tie Dye Hoodie",
            "price": "$35.00",
            "category": "Clothing",
            "description": "Your favorite hoodie is here to keep you cozy all year long. The Fredia Old Soul black and purple tie-dye hoodie from Empyre features a unique purple and black dye treatment throughout for a one-of-a-kind look, while the adjustable hood and kangaroo pocket is sure to keep you warm and comfy. Finished with wild graphics screen-printed on the back of a trippy skeleton with butterflies and mushrooms, along with text that reads old soul."
        },
        {
            "image": "UnfollowF.png",
            "name": "Broken Promises Unfollow Black Tie-Dye Hoodie",
            "price": "$52.00",
            "category": "Clothing",
            "description": "Wear the Unfollow black tie-dye hoodie from Broken Promises as a reminder that it's okay to cut negative influences out of your life. This hooded sweatshirt comes in a black and grey tie-dye color and features a white graphic across the back and sleeves for additional impact."
        },
        {
            "image": "LoveDrugF.png",
            "name": "Civil Love Is A Drug Orchid Hoodie",
            "price": "$65.00",
            "category": "Clothing",
            "description": "Throw some irresistible color into your collection with the Love Is A Drug orchid hoodie from Civil! This purple-pink hoodie features a large rose graphic at the center chest, surrounded by Love is a drug text, and the Civil Regime Rebel Youth text on the left sleeve gives it a ton of killer branding."
        },
        {
            "image": "PinkF.png",
            "name": "Dravus Dierdra Pink Hoodie",
            "price": "$35.00",
            "category": "Clothing",
            "description": "Succulents are all the rage and the Dierdra pink hoodie from Dravus is a stylish way to get in on the fun. Several succulent graphics across the back are complemented by the Life would succ without you, let's stick together text that surrounds them, for a bit of piercing humor. Finished off with the flower graphic at the left chest, the Dierdra hoodie is sure to give your look some extra botanical pizzazz."
        },
        {
            "image": "LoserF.png",
            "name": "JV by Jac Vanek Loser Purple, Yellow, & Blue Tie Dye Hoodie",
            "price": "$45.00",
            "category": "Clothing",
            "description": "Be loud and proud about your insecurities in the Loser purple, yellow, and blue tie dye hoodie from JV by Jac Vanek! This sweatshirt adds a pretty pastel touch to any look with swirling purple, yellow, and blue tones, and rainbow-colored text reading Loser at the chest for a look that's sure to have people saying, no you're not."
        },
        {
            "image": "PC1.png",
            "name": "AMD Threadripper Ultimate",
            "price": "$7,349.00",
            "category": "Computer",
            "description": "CPU: AMD Ryzen™ Threadripper 3990X 2.9GHz [4.3GHz Turbo] 64Core 128Threads 288MB Cache 280W Processor CPU / Processor Cooling Fan: Asetek 570LC 120mm (Fatboy) Liquid CPU Cooling System w/ Copper Cold Plate (Single Standard 120MM Fan) Motherboard: ASRock TRX40 Creator ATX w/ WiFi 6, RGB, Dual LAN, 4 PCIe x16, 8 SATA3, 3 M.2 SATA/PCIe RAM / System Memory: 32GB (8GBx4) DDR4/3000MHz Quad Channel Memory (ADATA XPG Z1) Video Card: GeForce RTX™ 3090 24GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 1250 Watts - Enermax EDT1250EWT MaxTytan Series 80 PLUS Titanium certified Full Modular Active PFC Power Supply Primary Hard Drive: 1TB WD Blue SN550 M.2 NVME SSD + 4TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "PC2.png",
            "name": "Lirik 200",
            "price": "$5,455.00",
            "category": "Computer",
            "description": "CPU: Intel® Core™ Processor i9-10900X Ten-Core 3.7GHz (Turbo 4.7GHz) 19.25MB Intel Smart Cache LGA2066 (Quad Channels) CPU / Processor Cooling Fan: CyberpowerPC MasterLiquid Lite 360mm ARGB CPU Liquid Cooler with Dual Chamber Pump & Copper Cold Plate (Intel) Motherboard: GIGABYTE GA-X299 UD4 PRO ATX w/ RGB, Digital LED Support, USB 3.1, 5 PCIe x16, 8 SATA3, 2 M.2 SATA/PCIe [Intel Optane Ready] RAM / System Memory: 64GB (16GBx4) DDR4/3000MHz Quad Channel Memory (ADATA XPG Z1) Video Card: GeForce RTX™ 3090 24GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 850 Watts - Corsair RM Series RM850 80 PLUS GOLD Certified Fully Modular Ultra Quiet Power Supply Primary Hard Drive: 2TB Intel® 665P SERIES PCIe NVMe M.2 SSD - Seq R/W: Up to 2000/2000 MB/s, Rnd R/W up to 250/250k (Single Drive) Secondary Hard Drive: 3TB (3TBx1) SATA-III 6.0Gb/s 64MB Cache 5400RPM HDD (Single Drive)"
        },
        {
            "image": "PC3.png",
            "name": "Luxe 4K",
            "price": "$5,039.00",
            "category": "Computer",
            "description": "CPU: Intel® Core™ Processor i9-10980XE Eighteen-Core 3.0GHz (Turbo 4.8GHz) 24.75MB Intel Smart Cache LGA2066 (Quad Channels) Venom Boost Fast And Efficient Factory Overclocking: Ultimate OC (Ultimate Overclock 30% or more) CPU / Processor Cooling Fan: BitsPower CP HydroFluxe Custom HardTube Water Cooling Kit 360MM RAD/D5PUMP/Intel CPU Block (Clear) (3 x Standard 120MM Fans) Coolant for Cyberpower Xtreme Hydro Water Cooling Kits: Thermaltake P1000 Pastel Coolant - Red Motherboard: GIGABYTE GA-X299 UD4 PRO ATX w/ RGB, Digital LED Support, USB 3.1, 5 PCIe x16, 8 SATA3, 2 M.2 SATA/PCIe [Intel Optane Ready] RAM / System Memory: 64GB (16GBx4) DDR4/3000MHz Quad Channel Memory (ADATA XPG Z1) Video Card: GeForce® RTX 2080 SUPER™ 8GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 1250 Watts - Enermax EDT1250EWT MaxTytan Series 80 PLUS Titanium certified Full Modular Active PFC Power Supply Primary Hard Drive: 1TB SAMSUNG 970 PRO PCIe NVMe M.2 SSD - Seq R/W: Up to 3500/2700 MB/s, Rnd R/W up to 500/500k (Single Drive) Secondary Hard Drive: 4TB (4TBx1) SATA-III 6.0Gb/s 64MB Cache 5400RPM HDD (Single Drive)"
        },
        {
            "image": "PC4.png",
            "name": "Hyper Liquid Alloy Black Mamba",
            "price": "$4,965.00",
            "category": "Computer",
            "description": "CPU: Intel® Core™ Processor i9-10980XE Eighteen-Core 3.0GHz (Turbo 4.8GHz) 24.75MB Intel Smart Cache LGA2066 (Quad Channels) Venom Boost Fast And Efficient Factory Overclocking: Ultimate OC (Ultimate Overclock 30% or more) CPU / Processor Cooling Fan: BitsPower CP HydroFluxe Custom HardTube Water Cooling Kit 360MM RAD/D5PUMP/Intel CPU Block (Clear) (3 x Standard 120MM Fans) Coolant for Cyberpower Xtreme Hydro Water Cooling Kits: Thermaltake C1000 Pure Clear Coolant Motherboard: GIGABYTE GA-X299 UD4 PRO ATX w/ RGB, Digital LED Support, USB 3.1, 5 PCIe x16, 8 SATA3, 2 M.2 SATA/PCIe [Intel Optane Ready] RAM / System Memory: 32GB (8GBx4) DDR4/3000MHz Quad Channel Memory (ADATA XPG Z1) Video Card: GeForce RTX™ 3090 24GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 1250 Watts - Enermax EDT1250EWT MaxTytan Series 80 PLUS Titanium certified Full Modular Active PFC Power Supply Primary Hard Drive: 512GB SAMSUNG 970 PRO PCIe NVMe M.2 SSD - Seq R/W: Up to 3500/2300 MB/s, Rnd R/W up to 370/500k (Single Drive) Secondary Hard Drive: 4TB (4TBx1) SATA-III 6.0Gb/s 64MB Cache 5400RPM HDD (Single Drive)"
        },
        {
            "image": "PC5.png",
            "name": "Gamer Infinity XLC",
            "price": "$2,535.00",
            "category": "Computer",
            "description": "CPU: Intel® Core™ Processor i9-10900K 10/20 3.70GHz [Turbo 5.2GHz] 20MB Cache LGA1200 CPU / Processor Cooling Fan: CyberpowerPC MasterLiquid Lite 240mm ARGB CPU Liquid Cooler with Dual Chamber Pump & Copper Cold Plate (Intel) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB) Video Card: GeForce RTX™ 3080 10GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 1,000 Watts - Standard 80 Plus Gold Power Supply Primary Hard Drive: 1TB WD Blue SN550 M.2 NVME SSD + 3TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "PC6.png",
            "name": "Pro Designer 100",
            "price": "$1,859.00",
            "category": "Computer",
            "description": "CPU: Intel® Core™ Processor i7-10700 8/16 2.90GHz [Turbo 4.8GHz] 16MB Cache LGA1200 CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME Z490-P ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB) Video Card: GeForce® RTX 2070 SUPER™ 8GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 512GB ADATA XPG ASX6000LNP-512GT-C PCIe NVMe M.2 SSD - Seq R/W: Up to 1800/1200 MB/s, Rnd R/W up to 180/200k (Single Drive) Secondary Hard Drive: 2TB (2TBx1) SATA-III 6.0Gb/s 256MB Cache 7200RPM HDD (Single Drive)"
        },
        {
            "image": "PC7.png",
            "name": "Syber L Elite 300",
            "price": "$1,725.00",
            "category": "Computer",
            "description": "CPU: Intel® Core™ Processor i7-10700K 8/16 3.80GHz [Turbo 5.1GHz] 16MB Cache LGA1200 CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 16GB (8GBx2) DDR4/3200MHz Dual Channel Memory (Performance Memory by Major Brands) Video Card: GeForce® RTX 2070 SUPER™ 8GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 1TB WD Blue SN550 M.2 NVME SSD + 3TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "PC8.png",
            "name": "Gamer Master 8000",
            "price": "$1,525.00",
            "category": "Computer",
            "description": "CPU: AMD Ryzen 7 3800XT 3.9GHz [4.7GHz Turbo] 8 Cores/ 16 Threads 36MB Cache 105W Processor CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME B550-PLUS ATX w/ RGB, GbT LAN, 2 PCIe x16, 3 PCIe x1, 6 SATA3, 2 M.2 SATA/PCIe RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB) Video Card: GeForce® RTX 2060 SUPER™ 8GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 512GB ADATA XPG ASX6000LNP PCIe NVMe + Seagate 2TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "PC9.png",
            "name": "Syber L pro 200",
            "price": "$1,335.00",
            "category": "Computer",
            "description": "CPU: Intel® Core™ Processor i7-10700 8/16 2.90GHz [Turbo 4.8GHz] 16MB Cache LGA1200 CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 16GB (8GBx2) DDR4/3200MHz Dual Channel Memory (Performance Memory by Major Brands) Video Card: AMD Radeon™ RX 5600 XT 6GB GDDR6 PCIe 4.0 [Navi] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 512GB ADATA XPG ASX6000LNP PCIe NVMe + Seagate 2TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "PC10.png",
            "name": "AMD Ryzen 7X Configuration",
            "price": "$1,265",
            "category": "Computer",
            "description": "CPU: AMD Ryzen 7 3700X 3.6GHz [4.4GHz Turbo] 8 Cores/ 16 Threads 36MB Cache 65W Processor CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME B550-PLUS ATX w/ RGB, GbT LAN, 2 PCIe x16, 3 PCIe x1, 6 SATA3, 2 M.2 SATA/PCIe RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB Video Card: GeForce® GTX 1660 SUPER 6GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 240GB WD Green SSD + 1TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "PC11.png",
            "name": "Gamer Xtreme 1000",
            "price": "$1,165.00",
            "category": "Computer",
            "description": "CPU: Intel® Core™ Processor i5-10400F 6/12 2.90GHz [Turbo 4.3GHz] 12MB Cache LGA1200 [w/o Integrated Graphic] (Comet Lake-S) CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB) Video Card: GeForce® GTX 1650 SUPER 4GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 512GB ADATA XPG ASX6000LNP PCIe NVMe + Seagate 2TB SATA III Hard Drive Combo (Combo Drive)"
        },
        {
            "image": "PC12.png",
            "name": "Battlebox 2020 Essential Core",
            "price": "$999.00",
            "category": "Computer",
            "description": "CPU: Intel® Core™ Processor i5-10400F 6/12 2.90GHz [Turbo 4.3GHz] 12MB Cache LGA1200 [w/o Integrated Graphic] (Comet Lake-S) CPU / Processor Cooling Fan: CyberPowerPC Asetek 550LC 120mm Liquid Cooling CPU Cooler (Single Standard 120MM Fan) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB Video Card: GeForce® GTX 1660 SUPER 6GB GDDR6 (Turing) [VR Ready] (Single Card) Power Supply: 600 Watts - Standard 600Watts 80 Plus Gold high-efficient Power Supply Primary Hard Drive: 240GB WD Green Series M.2 SATA-III 6.0Gb/s SSD - Seq R/W: Up to 540/460 MB/s, Rnd R/W up to 37/68k (Single Drive) Secondary Hard Drive: 2TB (2TBx1) SATA-III 6.0Gb/s 256MB Cache 7200RPM HDD (Single Drive)"
        },
        {
            "image": "AF1.png",
            "name": "Nike SF Air Force 1 Premium",
            "price": "$200.00",
            "category": "Shoes",
            "description": "A hoops icon toughens up with the Nike SF Air Force 1 Premium Men's Shoe. Crafted with a genuine leather and fabric upper, it features military-inspired details, a customizable ankle strap and a Nike Air unit for cushioned comfort."
        },
        {
            "image": "BHeel.png",
            "name": "Knife Knit 80mm",
            "price": "$695.00",
            "category": "Shoes",
            "description": "This high heel is a clean black knit heel with a 80mm arch, and has a elongated pointed toe."
        },
        {
            "image": "BLacedHeel.png",
            "name": "Corset 80mm Bootie",
            "price": "$1,490.00",
            "category": "Shoes",
            "description": "This high heel is made with shiny sheep skin, with a 80mm arch, and has semi-shiny palladium hardwear, the corset effect is ade with lace and eyelets."
        },
        {
            "image": "Bletteredsole.png",
            "name": "Speed Sneaker Graffiti",
            "price": "$825",
            "category": "Shoes",
            "description": "The sock-like shoes are very lightweight coming in at 240g making it feel like there is a could unter your feet, the sould has the logo on the side of it."
        },
        {
            "image": "diorwhitegray.png",
            "name": "B23 High-Top Sneaker",
            "price": "$1,100.00",
            "category": "Shoes",
            "description": "The B23 high-top sneaker is set apart by its white and black Dior Oblique motif and transparent paneling. Essential details, such as eyelets and a lace-up front, a white and beige rubber sole, a rounded and reinforced toe as well as a back tab recall the codes of the classic high-top style. The sneaker is further enhanced with contrasting details on the sides, including a 'DIOR' signature, and pairs easily with any casual outfit."
        },
        {
            "image": "BPlatform.png",
            "name": "Strike 20mm Lace-Up Boot",
            "price": "$950",
            "category": "Shoe",
            "description": "This platform boot is mad efor smooth mat calfskin, with tone-on-tone lacing and stitching, and thick toothed rubber outsole."
        },
        {
            "image": "jordan.png",
            "name": "Jordan Zoom '92",
            "price": "$150.00",
            "category": "Shoes",
            "description": "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort while tapping into the irreverent spirit of that era's designs. A stretchy fit sleeve and underfoot cushioning offer a comfortable fit. '90s-inspired details give the shoe its retro flavor."
        },
        {
            "image": "NMbluetongue.png",
            "name": "Giuseppe Zanotti Men's Velvet & Patent Leather Mid-Top Sneakers",
            "price": "$710.00",
            "category": "Shoes",
            "description": "This mid-top sneaker is made out of velvet and patent metallic leather, with a round toe and duel zips on either side of the laces, and a rubber outsoul."
        },
        {
            "image": "NMspike.png",
            "name": "Christian Louboutin Men's Spiked Sock 30 Neoprene Sneakers",
            "price": "$1,295.00",
            "category": "Shoes",
            "description": "This sock like sneaker has spiked embellishments, the front toe is rounded and reinforced to make the shoe more durable,and the pull-tab has the logo on it."
        },
        {
            "image": "PrideCT.png",
            "name": "Pride Chuck Taylor All Star",
            "price": "$65.00",
            "category": "Shoes",
            "description": "A celebration of inclusivity and Pride, in all its forms and colors, inspired by the many flags raised by the LGBTQIA+ community. The “More Color, More Pride” flag expands to include brown and black stripes — representing the power of diversity and inclusion. With the Chuck Taylor All Star, a black-and-white classic is made over with brilliant, bright color."
        },
        {
            "image": "Converse.png",
            "name": "Chuck Taylor All Star Space Racer High Top",
            "price": "$60.00",
            "category": "Shoes",
            "description": "Switch up your go-to Chucks with this space-inspired remake. We've swapped out classic canvas for a polyester denim and topped it off with color-popped tape designs as a nod to outerspace repairs. It turns out duct tape really can fix anything."
        },
        {
            "image": "BPink.png",
            "name": "Knife Shark 110mm Over-The-Knee",
            "price": "$2,250.00",
            "category": "Shoes",
            "description": "These over-the-knee boots are made out of calfskin, and has a 100mm arch with a thin heel and a elongated pointy toe."
        },
        {
             "image": "burberrybp.png",
             "name": "Burberry Checkered Bag",
             "price": "$990.00",
             "category": "Backpack",
             "description": "This is a luxurious backpack made by none other than Burberry."
         },
         {
             "image": "PC11.png",
             "name": "Gamer Xtreme 1000",
             "price": "$1165.00",
             "category": "Pre-built Computer",
             "description": "Mid-range gaming PC built with an Intel i5-10400 processor, a GTX 1650 SUPER 4GB GPU, 32GB of DDR4 RAM, Windows 10 Home, and much more"
         },
         {
             "image": "jordan.png",
             "name": "Jordan Zoom '92",
             "price": "$150.00",
             "category": "Shoes",
             "description": "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort while tapping into the irreverent spirit of that era's designs. A stretchy fit sleeve and underfoot cushioning offer a comfortable fit. '90s-inspired details give the shoe its retro flavor."
         },
         {
             "image": "PC5.png",
             "name": "Gamer Infinity XLC",
             "price": "$2,535.00",
             "category": "Computer",
             "description": "CPU: Intel® Core™ Processor i9-10900K 10/20 3.70GHz [Turbo 5.2GHz] 20MB Cache LGA1200 CPU / Processor Cooling Fan: CyberpowerPC MasterLiquid Lite 240mm ARGB CPU Liquid Cooler with Dual Chamber Pump & Copper Cold Plate (Intel) Motherboard: ASUS PRIME Z490-V ATX, ARGB, 1GbE LAN, 2 PCIe x16, 4 PCIe x1, 4 SATA3, 2x M.2 SATA/PCIe + WiFi 6 Intel 201AX RAM / System Memory: 32GB (16GBx2) DDR4/3200MHz Dual Channel Memory (Team T-Force Delta RGB) Video Card: GeForce RTX™ 3080 10GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 1,000 Watts - Standard 80 Plus Gold Power Supply Primary Hard Drive: 1TB WD Blue SN550 M.2 NVME SSD + 3TB SATA III Hard Drive Combo (Combo Drive)"
         },
         {
             "image": "PC6.png",
             "name": "Pro Designer 100",
             "price": "$1859.00",
             "category": "Pre-built Computer",
             "description": "High-end gaming PC with an Intel i7-10700 processor, a GeForce RTX 2070 SUPER 8GB GPU, 32GB of DDR4 RAM, Windows 10 Home, and much more." 
         },
         {
             "image": "NMbluetongue.png",
             "name": "Giuseppe Zanotti Men's Velvet & Patent Leather Mid-Top Sneakers",
             "price": "$710.00",
             "category": "Shoes",
             "description": "This mid-top sneaker is made out of velvet and patent metallic leather, with a round toe and duel zips on either side of the laces, and a rubber outsoul."
         },
         {
             "image": "PC1.png",
             "name": "AMD Threadripper Ultimate",
             "price": "$7,349.00",
             "category": "Computer",
             "description": "CPU: AMD Ryzen™ Threadripper 3990X 2.9GHz [4.3GHz Turbo] 64Core 128Threads 288MB Cache 280W Processor CPU / Processor Cooling Fan: Asetek 570LC 120mm (Fatboy) Liquid CPU Cooling System w/ Copper Cold Plate (Single Standard 120MM Fan) Motherboard: ASRock TRX40 Creator ATX w/ WiFi 6, RGB, Dual LAN, 4 PCIe x16, 8 SATA3, 3 M.2 SATA/PCIe RAM / System Memory: 32GB (8GBx4) DDR4/3000MHz Quad Channel Memory (ADATA XPG Z1) Video Card: GeForce RTX™ 3090 24GB GDDR6X (Ampere) [VR Ready] (Single Card) Power Supply: 1250 Watts - Enermax EDT1250EWT MaxTytan Series 80 PLUS Titanium certified Full Modular Active PFC Power Supply Primary Hard Drive: 1TB WD Blue SN550 M.2 NVME SSD + 4TB SATA III Hard Drive Combo (Combo Drive)"
         },
         {
             "image": "coachbp.png",
             "name": "Coach Large Ranger Backpack",
             "price": "$250.00",
             "category": "Backpack",
             "description": "Large leather bag with many storage options, including a inside laptop sleeve, multifunction pockets, and closes with drawstring and clips."
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