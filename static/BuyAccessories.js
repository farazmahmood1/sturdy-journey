export const BUY_ACCESSORIES = {
  RAM: {
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=600&auto=format&fit=crop",
    types: [
      {
        id: 1,
        name: "DDR4 8GB",
        models: [
          { id: 101, name: "Corsair Vengeance LPX 8GB DDR4 3200MHz", options: ["RGB Lighting", "Low Profile", "Lifetime Warranty", "High Performance", "XMP Support"] },
          { id: 102, name: "Kingston HyperX Fury 8GB DDR4 3200MHz", options: ["Black Heat Spreader", "Plug & Play", "2-Year Warranty", "Overclockable", "Low Latency"] },
          { id: 103, name: "G.Skill Ripjaws V 8GB DDR4 3200MHz", options: ["High Performance", "Red Heat Spreader", "Limited Edition", "XMP Ready", "Voltage Control"] },
        ],
      },
      {
        id: 2,
        name: "DDR4 16GB",
        models: [
          { id: 104, name: "Corsair Vengeance LPX 16GB DDR4 3200MHz", options: ["RGB Lighting", "XMP Support", "Low Profile", "Lifetime Warranty", "High Endurance"] },
          { id: 105, name: "Kingston Fury Beast 16GB DDR4 3200MHz", options: ["Plug & Play", "Low Latency", "Overclockable", "Heat Spreader", "High Performance"] },
          { id: 106, name: "Crucial Ballistix 16GB DDR4 3600MHz", options: ["High Performance", "Red Heat Spreader", "XMP Ready", "Lifetime Warranty", "Voltage Control"] },
        ],
      },
      {
        id: 3,
        name: "DDR5 16GB",
        models: [
          { id: 107, name: "Corsair Dominator Platinum 16GB DDR5 5200MHz", options: ["RGB Lighting", "Lifetime Warranty", "XMP Ready", "High Frequency", "Low Latency"] },
          { id: 108, name: "Kingston Fury Beast 16GB DDR5 5600MHz", options: ["Plug & Play", "XMP Profile", "Overclockable", "Heat Spreader", "Voltage Control"] },
          { id: 109, name: "G.Skill Trident Z5 16GB DDR5 6000MHz", options: ["High Performance", "RGB Lighting", "XMP Ready", "Low Latency", "Premium Build"] },
        ],
      },
      {
        id: 4,
        name: "DDR5 32GB",
        models: [
          { id: 110, name: "Corsair Vengeance 32GB DDR5 5600MHz", options: ["RGB Lighting", "Lifetime Warranty", "XMP Ready", "High Capacity", "Low Profile"] },
          { id: 111, name: "Kingston Fury Beast 32GB DDR5 6000MHz", options: ["Plug & Play", "XMP Profile", "High Performance", "Heat Spreader", "Overclockable"] },
          { id: 112, name: "G.Skill Trident Z5 RGB 32GB DDR5 6400MHz", options: ["RGB Lighting", "Premium Build", "XMP Ready", "Ultra Low Latency", "High Frequency"] },
        ],
      },
    ],
  },

  SSD: {
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=600&auto=format&fit=crop",
    types: [
      {
        id: 5,
        name: "SATA SSD",
        models: [
          { id: 201, name: "Samsung 870 EVO 500GB", options: ["5-Year Warranty", "Software Included", "High Reliability", "Energy Efficient", "Durable"] },
          { id: 202, name: "Crucial MX500 1TB", options: ["Data Migration Software", "5-Year Warranty", "High Performance", "Low Power", "Shock Resistant"] },
          { id: 203, name: "WD Blue 3D NAND 1TB", options: ["High Reliability", "Limited Warranty", "Energy Efficient", "Durable", "Compact Size"] },
        ],
      },
      {
        id: 6,
        name: "NVMe SSD",
        models: [
          { id: 204, name: "Samsung 980 Pro 1TB", options: ["Heat Sink Option", "5-Year Warranty", "High Speed", "Durable", "Energy Efficient"] },
          { id: 205, name: "WD Black SN850X 1TB", options: ["RGB Version Available", "Limited Warranty", "High Performance", "Fast Transfer", "Low Latency"] },
          { id: 206, name: "Kingston KC3000 1TB", options: ["High Endurance", "Plug & Play", "Overclockable", "Low Latency", "Durable Build"] },
        ],
      },
      {
        id: 7,
        name: "Portable SSD",
        models: [
          { id: 207, name: "Samsung T7 1TB", options: ["AES Encryption", "USB-C Cable Included", "Shock Resistant", "Compact", "Fast Transfer"] },
          { id: 208, name: "SanDisk Extreme 1TB", options: ["Shock Resistant", "Fast Transfer", "Durable Case", "USB-C & USB-A", "Lightweight"] },
          { id: 209, name: "Crucial X8 1TB", options: ["USB-C & USB-A", "Durable Build", "Fast Transfer", "Shock Resistant", "Lightweight"] },
        ],
      },
    ],
  },

  "Laptop Adaptor": {
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600&auto=format&fit=crop",
    types: [
      {
        id: 8,
        name: "Dell Laptop Adaptor",
        models: [
          { id: 301, name: "Dell 65W Original Charger", options: ["Fast Charging", "Compact Design", "Overheat Protection", "Long Cable", "Lightweight"] },
          { id: 302, name: "Dell 90W Slim Charger", options: ["Slim Design", "High Efficiency", "Overvoltage Protection", "Lightweight", "Durable"] },
          { id: 303, name: "Dell 130W USB-C Charger", options: ["USB-C PD", "Fast Charging", "Compact", "Durable", "Overcurrent Protection"] },
        ],
      },
      {
        id: 9,
        name: "HP Laptop Adaptor",
        models: [
          { id: 304, name: "HP 65W Smart AC Adapter", options: ["Smart Chip", "Compact Size", "Fast Charging", "Durable", "Overvoltage Protection"] },
          { id: 305, name: "HP 90W Slim Adapter", options: ["Slim Design", "Durable Cable", "High Efficiency", "Lightweight", "Overheat Protection"] },
          { id: 306, name: "HP 120W USB-C Adapter", options: ["USB-C PD", "Fast Charge", "Compact Design", "Durable", "Overcurrent Protection"] },
        ],
      },
      {
        id: 10,
        name: "Lenovo Laptop Adaptor",
        models: [
          { id: 307, name: "Lenovo 65W Round Pin Adapter", options: ["Round Pin", "Compact", "Fast Charging", "Durable", "Overvoltage Protection"] },
          { id: 308, name: "Lenovo 90W Slim Tip Adapter", options: ["Slim Tip", "Fast Charging", "High Efficiency", "Compact", "Lightweight"] },
          { id: 309, name: "Lenovo 135W USB-C Adapter", options: ["USB-C PD", "High Efficiency", "Fast Charging", "Durable", "Overcurrent Protection"] },
        ],
      },
      {
        id: 11,
        name: "Apple MacBook Charger",
        models: [
          { id: 310, name: "Apple 30W USB-C Power Adapter", options: ["USB-C PD", "Compact", "Fast Charging", "Original Apple", "Lightweight"] },
          { id: 311, name: "Apple 67W USB-C Power Adapter", options: ["USB-C PD", "Fast Charging", "MagSafe Compatible", "Original Apple", "Compact"] },
          { id: 312, name: "Apple 140W USB-C Power Adapter", options: ["USB-C PD", "High Power", "MagSafe 3", "Original Apple", "Fast Charging"] },
        ],
      },
    ],
  },

  "Laptop Battery": {
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=600&auto=format&fit=crop",
    types: [
      {
        id: 12,
        name: "Dell Laptop Battery",
        models: [
          { id: 401, name: "Dell XPS 13 Battery (52Wh)", options: ["Original Dell", "Long Life", "1-Year Warranty", "Fast Charging", "Energy Efficient"] },
          { id: 402, name: "Dell Inspiron Battery (42Wh)", options: ["Compatible", "High Capacity", "1-Year Warranty", "Reliable", "Affordable"] },
          { id: 403, name: "Dell Latitude Battery (60Wh)", options: ["Original Dell", "Extended Life", "2-Year Warranty", "Fast Charging", "Durable"] },
        ],
      },
      {
        id: 13,
        name: "HP Laptop Battery",
        models: [
          { id: 404, name: "HP Pavilion Battery (41Wh)", options: ["Original HP", "Long Life", "1-Year Warranty", "Fast Charging", "Lightweight"] },
          { id: 405, name: "HP EliteBook Battery (56Wh)", options: ["Original HP", "High Capacity", "2-Year Warranty", "Extended Life", "Durable"] },
          { id: 406, name: "HP Omen Battery (70Wh)", options: ["High Performance", "Original HP", "1-Year Warranty", "Fast Charging", "Long Life"] },
        ],
      },
      {
        id: 14,
        name: "Lenovo Laptop Battery",
        models: [
          { id: 407, name: "Lenovo ThinkPad Battery (57Wh)", options: ["Original Lenovo", "Extended Life", "2-Year Warranty", "Fast Charging", "Reliable"] },
          { id: 408, name: "Lenovo IdeaPad Battery (45Wh)", options: ["Compatible", "Long Life", "1-Year Warranty", "Affordable", "Energy Efficient"] },
          { id: 409, name: "Lenovo Legion Battery (80Wh)", options: ["High Performance", "Original Lenovo", "1-Year Warranty", "Fast Charging", "Long Life"] },
        ],
      },
      {
        id: 15,
        name: "Apple MacBook Battery",
        models: [
          { id: 410, name: "MacBook Air M1/M2 Battery", options: ["Original Apple", "Long Life", "1-Year Warranty", "Fast Charging", "Energy Efficient"] },
          { id: 411, name: "MacBook Pro 14\" Battery", options: ["Original Apple", "High Capacity", "1-Year Warranty", "Fast Charging", "Extended Life"] },
          { id: 412, name: "MacBook Pro 16\" Battery", options: ["Original Apple", "Maximum Capacity", "1-Year Warranty", "Fast Charging", "Long Life"] },
        ],
      },
    ],
  },

  "Cables & Chargers": {
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop",
    types: [
      {
        id: 16,
        name: "USB-C Cable",
        models: [
          { id: 501, name: "Anker USB-C to USB-C 100W 1.8m", options: ["100W PD", "Fast Data Transfer", "Braided Nylon", "Durable", "Universal"] },
          { id: 502, name: "Baseus USB-C to USB-C 60W 1m", options: ["60W PD", "Fast Charging", "Compact", "Durable", "Affordable"] },
          { id: 503, name: "Samsung USB-C Cable Original 1.2m", options: ["Original Samsung", "Fast Charging", "Data Transfer", "Durable", "Lightweight"] },
        ],
      },
      {
        id: 17,
        name: "Lightning Cable",
        models: [
          { id: 504, name: "Apple Lightning Cable Original 1m", options: ["MFi Certified", "Original Apple", "Fast Charging", "Durable", "Compact"] },
          { id: 505, name: "Anker Lightning Cable 1.8m", options: ["MFi Certified", "Braided Nylon", "Fast Charging", "Durable", "Long Cable"] },
          { id: 506, name: "Baseus Lightning Cable 1m", options: ["MFi Certified", "Fast Charging", "Compact", "Affordable", "Durable"] },
        ],
      },
      {
        id: 18,
        name: "HDMI Cable",
        models: [
          { id: 507, name: "HDMI 2.1 Cable 2m - 8K", options: ["8K@60Hz", "4K@120Hz", "High Speed", "Gold Plated", "Braided"] },
          { id: 508, name: "HDMI 2.0 Cable 3m - 4K", options: ["4K@60Hz", "High Speed", "Gold Plated", "Durable", "Universal"] },
          { id: 509, name: "Mini HDMI to HDMI Cable 1.5m", options: ["4K Support", "Gold Plated", "Compact", "Universal", "Durable"] },
        ],
      },
      {
        id: 19,
        name: "Fast Charger",
        models: [
          { id: 510, name: "Apple 20W USB-C Power Adapter", options: ["Original Apple", "USB-C PD", "Fast Charging", "Compact", "Lightweight"] },
          { id: 511, name: "Samsung 25W Super Fast Charger", options: ["Original Samsung", "Super Fast", "USB-C PD", "Compact", "Overheat Protection"] },
          { id: 512, name: "Anker 65W GaN Charger (3 Ports)", options: ["65W GaN", "3 Ports", "USB-C PD", "Compact", "Universal"] },
        ],
      },
    ],
  },

  "Keyboard & Mouse": {
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format&fit=crop",
    types: [
      {
        id: 20,
        name: "Wireless Keyboard",
        models: [
          { id: 601, name: "Logitech MX Keys S", options: ["Backlit", "Multi-Device", "USB-C Charging", "Quiet Keys", "Smart Illumination"] },
          { id: 602, name: "Apple Magic Keyboard", options: ["Touch ID", "Wireless", "Rechargeable", "Slim Design", "Original Apple"] },
          { id: 603, name: "Microsoft Surface Keyboard", options: ["Bluetooth", "Slim Design", "Long Battery", "Quiet Keys", "Ergonomic"] },
        ],
      },
      {
        id: 21,
        name: "Mechanical Keyboard",
        models: [
          { id: 604, name: "Keychron K2 Wireless Mechanical", options: ["Hot-Swappable", "RGB Backlit", "Bluetooth", "Compact 75%", "Gateron Switches"] },
          { id: 605, name: "Razer BlackWidow V4", options: ["RGB Chroma", "Razer Green Switches", "Wrist Rest", "Media Keys", "Durable"] },
          { id: 606, name: "Corsair K70 RGB Pro", options: ["Cherry MX Switches", "RGB Backlit", "Aluminum Frame", "Wrist Rest", "USB Passthrough"] },
        ],
      },
      {
        id: 22,
        name: "Gaming Mouse",
        models: [
          { id: 607, name: "Logitech G Pro X Superlight", options: ["Wireless", "Ultra Light 63g", "25K DPI", "Long Battery", "5 Buttons"] },
          { id: 608, name: "Razer DeathAdder V3", options: ["Wireless", "Ergonomic", "30K DPI", "90hr Battery", "Ultra Light"] },
          { id: 609, name: "SteelSeries Rival 650", options: ["Wireless", "Dual Sensor", "RGB", "Custom Weight", "256 CPI Steps"] },
        ],
      },
      {
        id: 23,
        name: "Wireless Mouse",
        models: [
          { id: 610, name: "Logitech MX Master 3S", options: ["Multi-Device", "USB-C Charging", "Quiet Clicks", "Ergonomic", "8K DPI"] },
          { id: 611, name: "Apple Magic Mouse", options: ["Multi-Touch", "Wireless", "Rechargeable", "Slim Design", "Original Apple"] },
          { id: 612, name: "Microsoft Arc Mouse", options: ["Bluetooth", "Foldable", "Ultra Slim", "Portable", "Long Battery"] },
        ],
      },
    ],
  },

  "Screen Protector": {
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=600&auto=format&fit=crop",
    types: [
      {
        id: 24,
        name: "iPhone Screen Protector",
        models: [
          { id: 701, name: "Tempered Glass for iPhone 16 Pro Max", options: ["9H Hardness", "Anti-Fingerprint", "Full Coverage", "Easy Install", "Crystal Clear"] },
          { id: 702, name: "Tempered Glass for iPhone 15/16", options: ["9H Hardness", "Anti-Scratch", "Full Coverage", "Bubble-Free", "HD Clarity"] },
          { id: 703, name: "Privacy Screen Protector for iPhone", options: ["Privacy Filter", "9H Hardness", "Anti-Spy", "Full Coverage", "Anti-Fingerprint"] },
        ],
      },
      {
        id: 25,
        name: "Samsung Screen Protector",
        models: [
          { id: 704, name: "Tempered Glass for Galaxy S24 Ultra", options: ["9H Hardness", "Curved Edge", "Fingerprint Compatible", "Full Coverage", "HD Clarity"] },
          { id: 705, name: "Tempered Glass for Galaxy S23/S24", options: ["9H Hardness", "Anti-Scratch", "Full Coverage", "Easy Install", "Crystal Clear"] },
          { id: 706, name: "Film Protector for Galaxy Z Fold/Flip", options: ["Flexible Film", "Full Coverage", "Anti-Fingerprint", "Self-Healing", "HD Clarity"] },
        ],
      },
      {
        id: 26,
        name: "Tablet Screen Protector",
        models: [
          { id: 707, name: "Tempered Glass for iPad Pro 12.9\"", options: ["9H Hardness", "Anti-Glare", "Apple Pencil Compatible", "Full Coverage", "HD Clarity"] },
          { id: 708, name: "Tempered Glass for iPad Air/iPad 10th Gen", options: ["9H Hardness", "Anti-Fingerprint", "Full Coverage", "Easy Install", "Crystal Clear"] },
          { id: 709, name: "Tempered Glass for Samsung Galaxy Tab S9", options: ["9H Hardness", "Anti-Scratch", "Full Coverage", "S Pen Compatible", "Bubble-Free"] },
        ],
      },
      {
        id: 27,
        name: "Laptop Screen Protector",
        models: [
          { id: 710, name: "Anti-Glare Protector for MacBook Pro 14\"", options: ["Anti-Glare", "Anti-Fingerprint", "Easy Install", "Reusable", "HD Clarity"] },
          { id: 711, name: "Privacy Filter for 15.6\" Laptop", options: ["Privacy Filter", "Anti-Spy", "Easy Attach", "Universal Fit", "Reusable"] },
          { id: 712, name: "Blue Light Filter for 13\" Laptop", options: ["Blue Light Block", "Anti-Glare", "Eye Protection", "Easy Install", "Universal"] },
        ],
      },
    ],
  },

  "Phone Cases": {
    image: "https://images.unsplash.com/photo-1541877944-ac82a091518a?q=80&w=600&auto=format&fit=crop",
    types: [
      {
        id: 28,
        name: "iPhone Cases",
        models: [
          { id: 801, name: "Apple MagSafe Silicone Case (iPhone 16)", options: ["MagSafe", "Original Apple", "Soft Touch", "Wireless Charging", "Drop Protection"] },
          { id: 802, name: "OtterBox Defender for iPhone 15/16", options: ["Military-Grade", "Multi-Layer", "Port Covers", "Belt Clip", "Drop Tested"] },
          { id: 803, name: "Spigen Ultra Hybrid for iPhone 15/16", options: ["Crystal Clear", "Air Cushion", "Slim Fit", "Anti-Yellowing", "MagSafe Compatible"] },
        ],
      },
      {
        id: 29,
        name: "Samsung Cases",
        models: [
          { id: 804, name: "Samsung Clear View Cover (Galaxy S24)", options: ["Original Samsung", "Clear View", "LED Notifications", "Slim Design", "Wireless Charging"] },
          { id: 805, name: "OtterBox Symmetry for Galaxy S24", options: ["Slim Design", "Drop Protection", "Scratch Resistant", "Wireless Charging", "Durable"] },
          { id: 806, name: "Spigen Tough Armor for Galaxy S24", options: ["Kickstand", "Dual Layer", "Air Cushion", "Drop Tested", "Slim Profile"] },
        ],
      },
      {
        id: 30,
        name: "Universal & Other Cases",
        models: [
          { id: 807, name: "Waterproof Phone Pouch (Universal)", options: ["IPX8 Waterproof", "Touch Sensitive", "Fits Up to 7\"", "Lanyard Included", "Clear Window"] },
          { id: 808, name: "Belt Clip Holster (Universal)", options: ["Fits Up to 6.7\"", "Magnetic Closure", "Belt Loop", "Card Slot", "Durable Leather"] },
          { id: 809, name: "Ringke Fusion for Pixel/OnePlus", options: ["Crystal Clear", "Slim Fit", "Anti-Yellowing", "Drop Protection", "Wireless Charging"] },
        ],
      },
    ],
  },

  "Headphones & Earbuds": {
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    types: [
      {
        id: 31,
        name: "Wireless Earbuds",
        models: [
          { id: 901, name: "Apple AirPods Pro 2nd Gen", options: ["Active Noise Cancellation", "Transparency Mode", "MagSafe Charging", "Spatial Audio", "IPX4"] },
          { id: 902, name: "Samsung Galaxy Buds 2 Pro", options: ["ANC", "360 Audio", "IPX7", "Ambient Sound", "Voice Detect"] },
          { id: 903, name: "Sony WF-1000XM5", options: ["Industry-Leading ANC", "LDAC", "Speak-to-Chat", "30hr Battery", "IPX4"] },
        ],
      },
      {
        id: 32,
        name: "Over-Ear Headphones",
        models: [
          { id: 904, name: "Sony WH-1000XM5", options: ["Industry-Leading ANC", "30hr Battery", "Multipoint", "Speak-to-Chat", "Foldable"] },
          { id: 905, name: "Apple AirPods Max", options: ["Spatial Audio", "Active ANC", "Digital Crown", "Premium Build", "20hr Battery"] },
          { id: 906, name: "Bose QuietComfort Ultra", options: ["CustomTune ANC", "Immersive Audio", "24hr Battery", "Multipoint", "Comfortable"] },
        ],
      },
      {
        id: 33,
        name: "Gaming Headset",
        models: [
          { id: 907, name: "SteelSeries Arctis Nova Pro", options: ["Hi-Fi ANC", "GameDAC", "Dual Wireless", "Swappable Battery", "Premium Audio"] },
          { id: 908, name: "Razer BlackShark V2 Pro", options: ["Wireless", "THX Spatial Audio", "Detachable Mic", "Lightweight", "50mm Drivers"] },
          { id: 909, name: "HyperX Cloud III Wireless", options: ["Wireless", "DTS Spatial Audio", "53mm Drivers", "Detachable Mic", "120hr Battery"] },
        ],
      },
      {
        id: 34,
        name: "Neckband & Sport Earphones",
        models: [
          { id: 910, name: "Beats Flex Wireless Neckband", options: ["Apple W1 Chip", "Magnetic Earbuds", "12hr Battery", "USB-C Charging", "Lightweight"] },
          { id: 911, name: "Sony WI-1000XM2 Neckband", options: ["ANC", "LDAC", "10hr Battery", "Dual Noise Sensors", "Premium Audio"] },
          { id: 912, name: "JBL Endurance Run 2 Sport", options: ["IP67 Waterproof", "Twistlock Fit", "10hr Battery", "Speed Charge", "Lightweight"] },
        ],
      },
    ],
  },
};
