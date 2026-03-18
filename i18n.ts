import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files will be loaded from the public/locales folder if using backend,
// but for simplicity and immediate results, we can define them here or import them.

const resources = {
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "services": "Services",
                "about": "About",
                "contact": "Contact",
                "requestService": "Request Service"
            },
            "hero": {
                "badge": "UAE'S PREMIUM TECHNICAL PARTNER",
                "headlines": {
                    "0": { "line1": "Bringing Your", "line2": "Electronics", "line3": "Back to Life." },
                    "1": { "line1": "Get Your Electronics", "line2": "Back to", "line3": "Peak Performance." },
                    "2": { "line1": "Where Electronics", "line2": "Expertise Meets", "line3": "Precision." }
                },
                "descriptions": {
                    "0": "Trusted electronics repair and installation specialists serving Dubai, Sharjah, and across the United Arab Emirates - delivering precision workmanship with over 36 years of experience.",
                    "1": "Convenient pick-up and delivery, fast turnaround times, and over 36 years of trusted electronics expertise. Designed around your schedule.",
                    "2": "We collect, fix, and return your electronics faster, with care you can trust."
                },
                "cta": "Explore Services",
                "emergency": "Emergency Support",
                "quickServicesTitle": "Services you need?",
                "quickServices": {
                    "repair": "Device Repairs",
                    "install": "Expert Installation",
                    "buy": "Accessories & Parts"
                },
                "slides": {
                    "repair": { "title": "Precision Tech Repairs", "category": "Gadgets & IT" },
                    "install": { "title": "Professional Installation", "category": "Smart Home & Appliances" },
                    "ac": { "title": "Advanced AC Services", "category": "Climate Control" }
                }
            },
            "footer": {
                "description": "Trusted electronics repair and installation specialists serving Dubai, Sharjah, and across the UAE with over 36 years of experience.",
                "services": "Services",
                "quickLinks": "Quick Links",
                "contactUs": "Contact Us",
                "rights": "All rights reserved.",
                "privacy": "Privacy Policy",
                "terms": "Terms of Service",
                "serviceLinks": {
                    "repair": "Device Repairs",
                    "install": "Expert Installation",
                    "accessories": "Accessories & Parts"
                },
                "bookTechnician": "Book a Technician",
                "ourValues": "Our Values"
            },
            "servicesSection": {
                "badge": "Engineered Solutions",
                "title": "Precision in Every Service",
                "description": "We leverage factory-standard diagnostics to restore your devices to original performance.",
                "viewDetails": "View Details",
                "cards": {
                    "repair": {
                        "title": "Device Repairs",
                        "desc": "Get your gadgets and appliances repaired quickly and reliably by certified technicians."
                    },
                    "install": {
                        "title": "Expert Installation",
                        "desc": "We set up your devices safely and efficiently so they're ready to use immediately."
                    },
                    "accessories": {
                        "title": "Accessories & Parts",
                        "desc": "Find high-quality accessories that perfectly match your devices and keep them performing at their best."
                    }
                }
            },
            "whyUs": {
                "title": "Why Choose",
                "titleAccent": "Khidmaatt.",
                "feature1": {
                    "title": "Expert Repairs, Fast & Hassle-Free",
                    "desc": "We fix smartphones, laptops, tablets, and home appliances with high-quality parts, proven methods, and convenient pickup & delivery - all done quickly and reliably."
                },
                "feature2": {
                    "title": "Trusted Across the UAE",
                    "desc": "With decades of experience and a reputation for honest, professional service, we make electronics care effortless."
                },
                "statsHeader": "Established 1990. Serving the Future.",
                "statsSubheader": "Our Impact at a Glance",
                "stats": {
                    "years": { "val": "36+", "label": "Years", "desc": "Fixing tech you love" },
                    "fixes": { "val": "250K+", "label": "Devices", "desc": "Restored across the UAE" },
                    "partners": { "val": "50+", "label": "Partners", "desc": "Trusted brand partnerships" }
                }
            },
            "testimonials": {
                "badge": "Customer Voice",
                "title": "Trusted by",
                "titleAccent": "Thousands",
                "subtitle": "Across the UAE",
                "desc": "Our commitment to quality and transparency has made us the go-to service partner for tech repairs and installations.",
                "avgRating": "Average Service Rating",
                "list": {
                    "ahmed": "Khidmaatt saved my life when my office AC broke down in the middle of summer. Their response time was under 2 hours, and the repair was perfect. Highly recommended!",
                    "sarah": "Professional, efficient, and honest. They fixed my MacBook Pro which several other shops said was unrepairable. The transparency in their pricing is refreshing.",
                    "mohammed": "I've used their service for everything from TV installation to laptop repair. They are consistent, polite, and clearly experts in what they do. 10/10."
                },
                "names": {
                    "ahmed": "Ahmed Al-Mansoori",
                    "sarah": "Sarah Jenkins",
                    "mohammed": "Mohammed Ibrahim"
                },
                "roles": {
                    "ahmed": "Business Owner",
                    "sarah": "Graphic Designer",
                    "mohammed": "Tech Enthusiast"
                }
            },
            "emergency": {
                "badge": "Urgent Response Unit",
                "title": "Critical Failure?",
                "subtitle": "We're Active 24/7.",
                "desc": "Our emergency response unit provides priority dispatch for server rooms, critical home systems, and high-value technical assets across the Sharjah and Dubai corridor.",
                "hotline": "Rapid Service Hotline"
            },
            "contactHome": {
                "title": "Secure Your",
                "titleAccent": "Appointment.",
                "desc": "Connect with our technical advisors. We provide transparent pricing and confirmed service windows for every booking.",
                "support": "Technical Support",
                "official": "Official Correspondence",
                "hq": "Sharjah Industrial HQ",
                "form": {
                    "name": "Name",
                    "namePlaceholder": "Full Name",
                    "phone": "Phone",
                    "phonePlaceholder": "+971 5X XXX XXXX",
                    "phoneRequired": "Phone number is required.",
                    "phoneInvalid": "Please enter a valid UAE phone number.",
                    "service": "Service Context",
                    "message": "Technical Description",
                    "messagePlaceholder": "Describe the issue or requirements...",
                    "submit": "Confirm Booking",
                    "loading": "Processing...",
                    "success": "Request Received",
                    "successDesc": "Our team will contact you shortly."
                }
            },
            "servicesPage": {
                "header": {
                    "badge": "Service Catalog",
                    "title": "Engineered",
                    "titleAccent": "Integrity.",
                    "description": "From precision appliance repairs to professional installations, we provide specialized solutions that meet the highest international standards."
                },
                "serviceGrade": "Service Grade",
                "authorizedPartner": "Authorized Partner",
                "requestService": "Request Service",
                "longDescriptions": {
                    "repair": "Get your gadgets and appliances repaired quickly and reliably by certified technicians.",
                    "install": "We set up your devices safely and efficiently so they're ready to use immediately.",
                    "accessories": "Find high-quality accessories that perfectly match your devices and keep them performing at their best."
                },
                "highlights": {
                    "repair": [
                        "Genuine parts for long-lasting performance",
                        "Expert diagnostics to fix issues right",
                        "Fast turnaround with no hassle"
                    ],
                    "install": [
                        "Professional installation for optimal performance",
                        "Hassle-free, on-site service",
                        "Quick guidance so you can start right away"
                    ],
                    "accessories": [
                        "Certified, compatible products only",
                        "Chargers, cables, and premium peripherals",
                        "Reliable performance every time"
                    ]
                }
            },
            "aboutPage": {
                "seo": {
                    "title": "About Khidmaatt",
                    "description": "Khidmaatt, powered by MIGroup, brings over 36 years of expertise in electronics repair and service across the UAE."
                },
                "intro": {
                    "badge": "Our Story",
                    "title": "Beyond the",
                    "titleAccent": "Standard.",
                    "desc": ", powered by MIGroup, brings over 36 years of expertise in electronics repair and service. Since the early 1990s, we've been helping customers across the UAE with reliable, efficient, and affordable solutions."
                },
                "heritage": {
                    "badge": "Heritage Since 1990",
                    "title": "Trusted Expertise, Every Device.",
                    "desc": "Our skilled technicians handle a wide range of electronics — from laptops, tablets, and TVs to fridges, A/C units, and more. We know how important your devices are, so we combine fast turnaround times with meticulous care. Over the years, Khidmaatt has earned a reputation for trustworthy service, on-time delivery, and complete customer satisfaction. Every repair, big or small, is treated with professionalism and precision."
                },
                "stats": {
                    "years": "36+",
                    "yearsLabel": "Years",
                    "techs": "100+",
                    "techsLabel": "Technicians",
                    "glorious": "36+",
                    "gloriousLabel": "Glorious Years"
                },
                "values": {
                    "integrity": { "title": "Technical Integrity", "desc": "No shortcuts. We use factory-certified procedures for every individual component." },
                    "human": { "title": "Human Centric", "desc": "Service is about people. We prioritize your schedule and peace of mind." },
                    "roots": { "title": "Regional Roots", "desc": "Proudly UAE-born. We understand the unique technical challenges of the region." },
                    "growth": { "title": "Continuous Growth", "desc": "Investing in the latest diagnostic AI and robotic repair tools." }
                },
                "hq": {
                    "badge": "Strategic Hub",
                    "title": "The Heart of Sharjah Industry.",
                    "desc": "Located in the biggest used appliance and computer market in the GCC, our headquarters houses our logistics hub and authorized service centers.",
                    "label": "Corporate Office"
                }
            },
            "contactPage": {
                "seo": {
                    "title": "Contact Us - Technical Support",
                    "description": "Get in touch with Khidmaatt for authorized repair and installation services in Sharjah and Dubai. 24/7 emergency priority line available."
                },
                "intro": {
                    "badge": "Connect With Us",
                    "title": "At Your",
                    "titleAccent": "Command.",
                    "desc": "Technical excellence is just a message away. Reach out for consultations, emergency fixes, or status updates."
                },
                "contacts": {
                    "support": "Primary Support",
                    "correspondence": "Correspondence",
                    "office": "Office Hub"
                },
                "form": {
                    "name": "Full Name",
                    "namePlaceholder": "e.g. John Doe",
                    "phone": "Direct Phone",
                    "phonePlaceholder": "+971 5X XXX XXXX",
                    "phoneRequired": "Phone number is required.",
                    "phoneInvalid": "Please enter a valid UAE phone number.",
                    "email": "Official Email",
                    "emailPlaceholder": "john@company.ae",
                    "service": "Service Classification",
                    "servicePlaceholder": "Select Core Service...",
                    "other": "Other Technical Inquiry",
                    "message": "Technical Summary",
                    "messagePlaceholder": "Provide details about your device or the required assistance...",
                    "submit": "Confirm Request",
                    "success": "Transmission Successful.",
                    "successDesc": "Thank you for choosing Khidmaat. A lead technician will call you within 30 minutes."
                },
                "whatsapp": {
                    "title": "WhatsApp Instant Support",
                    "desc": "Chat directly for an instant quote."
                },
                "windows": {
                    "service": {
                        "title": "Service Window",
                        "mon": "Monday",
                        "tue": "Tuesday",
                        "wed": "Wednesday",
                        "thu": "Thursday",
                        "fri": "Friday",
                        "sat": "Saturday",
                        "sun": "Sunday"
                    },
                    "priority": {
                        "badge": "Priority Line",
                        "desc": "Facing a critical technical emergency? Our team is on standby 24/7.",
                        "cta": "Call Emergency Support"
                    }
                },
                "map": {
                    "title": "Sharjah HQ"
                }
            },
            "privacy": {
                "title": "Privacy Policy",
                "badge": "Data Protection",
                "lastUpdated": "Last Updated: February 2024",
                "intro": "At Khidmaatt, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our services.",
                "sections": {
                    "collection": {
                        "title": "Data Collection",
                        "desc": "We collect information you provide directly to us, such as your name, phone number, and address when you book a service."
                    },
                    "usage": {
                        "title": "How We Use Data",
                        "desc": "Your data is used solely to provide and improve our technical services, including sending service updates and confirmations."
                    },
                    "protection": {
                        "title": "Data Protection",
                        "desc": "We implement industry-standard security measures to ensure your personal data remains confidential and secure."
                    }
                }
            },
            "terms": {
                "title": "Terms & Conditions",
                "badge": "Service Agreement",
                "lastUpdated": "Last Updated: February 2024",
                "intro": "By accessing or using Khidmaatt services, you agree to be bound by these terms. Please read them carefully before booking a technician.",
                "sections": {
                    "service": {
                        "title": "Service Terms",
                        "desc": "Our technicians provide services based on the information provided. We reserve the right to adjust quotes if the actual issue differs from the description."
                    },
                    "warranty": {
                        "title": "Warranty Policy",
                        "desc": "We provide a standard warranty on most repairs. This covers the specific part replaced or repaired and does not cover new issues."
                    },
                    "cancellation": {
                        "title": "Cancellation",
                        "desc": "Cancellations must be made at least 2 hours before the scheduled window. Late cancellations may incur a nominal visit fee."
                    }
                }
            },
            "modal": {
                "flowTitles": {
                    "repair": "Device Repairs",
                    "install": "Expert Installation",
                    "buy": "Accessories & Parts",
                    "select": "Select Service"
                },
                "header": {
                    "step": "Step",
                    "portal": "Service Portal 2.0"
                },
                "footer": {
                    "live": "Live:",
                    "usersSelecting": "Users selecting services",
                    "secure": "SECURE SSL ENCRYPTED"
                },
                "repair": {
                    "step1Title": "Which device do you need help with?",
                    "searchPlaceholder": "Search device type...",
                    "step2TitleBrand": "Select your brand",
                    "step2TitleType": "What type of product?",
                    "step3Title": "Describe the issue",
                    "step3Placeholder": "Tell us what's wrong with your device... (e.g. screen is cracked, not turning on, battery drains fast)",
                    "step4Title": "How would you like to proceed?",
                    "visitCenter": "Visit Service Center",
                    "visitCenterDesc": "Fastest turnaround at our labs.",
                    "visitCenterPrice": "Price quoted after inspection",
                    "homePickup": "Home/Office Pickup",
                    "homePickupDesc": "We collect and deliver back.",
                    "homePickupPrice": "Price quoted based on location",
                    "ourCenter": "Our Service Center",
                    "centerName": "Oneway Electronics",
                    "centerAddress": "Industrial Area 6, Sharjah, UAE",
                    "timings": "Timings",
                    "timingWeekday": "Mon–Thu, Sat–Sun: 9AM – 10PM",
                    "timingFriday": "Fri: 4PM – 10PM"
                },
                "install": {
                    "step2Title": "What services do you need for",
                    "step2Desc": "Select all that apply, then continue.",
                    "servicesSelected_one": "{{count}} service selected",
                    "servicesSelected_other": "{{count}} services selected"
                },
                "customer": {
                    "title": "Contact Details",
                    "desc": "Please provide your information to proceed.",
                    "fullName": "Full Name",
                    "namePlaceholder": "Enter your name",
                    "nameRequired": "Full name is required.",
                    "email": "Email Address",
                    "emailPlaceholder": "Enter your email",
                    "emailRequired": "Email address is required.",
                    "emailInvalid": "Please enter a valid email address.",
                    "phone": "Phone Number",
                    "phonePlaceholder": "+971 5X XXX XXXX",
                    "phoneRequired": "Phone number is required.",
                    "phoneInvalid": "Please enter a valid UAE phone number.",
                    "brandName": "Brand Name",
                    "optional": "(Optional)",
                    "brandPlaceholder": "e.g. Samsung, LG, Apple...",
                    "address": "Address",
                    "addressPlaceholder": "Enter your address",
                    "addressRequired": "Address is required.",
                    "fillRequired": "Please fill in all required fields to continue.",
                    "reviewOrder": "Review Order"
                },
                "summary": {
                    "title": "Service Request Ready",
                    "desc": "Review your selection and choose your preferred payment method.",
                    "selectedItems": "Selected Items",
                    "device": "Device",
                    "brand": "Brand",
                    "type": "Type",
                    "issue": "Issue",
                    "delivery": "Delivery",
                    "visit": "Visit",
                    "homePickup": "Home Pickup",
                    "category": "Category",
                    "service": "Service",
                    "model": "Model",
                    "advanceFee": "Advance Service Fee",
                    "feeAmount": "AED 10.00",
                    "feeDesc": "Pickup, delivery, and labor fees will be quoted based on your location and service. Our team will contact you with the final price.",
                    "advancePayment": "Advance Payment",
                    "payOnline": "Pay Online",
                    "processing": "Processing...",
                    "payLater": "Pay Later",
                    "sending": "Sending..."
                },
                "buttons": {
                    "continue": "Continue",
                    "proceedToInfo": "Proceed to Info"
                },
                "devices": {
                    "Mobile Repair": "Mobile Repair",
                    "Laptop/Desktop Repair": "Laptop/Desktop Repair",
                    "Tablet Repair": "Tablet Repair",
                    "AC Repair": "AC Repair",
                    "Refrigerator Repair": "Refrigerator Repair",
                    "Washers & Dryers Repair": "Washers & Dryers Repair",
                    "TV Repair": "TV Repair",
                    "Microwave Oven Repair": "Microwave Oven Repair",
                    "Cooker Repair": "Cooker Repair",
                    "Hood Repair": "Hood Repair",
                    "Hob Repair": "Hob Repair",
                    "Beverage Cooler Repair": "Beverage Cooler Repair",
                    "Wine Cooler Repair": "Wine Cooler Repair",
                    "Mackbook/iMac Repair": "MacBook/iMac Repair",
                    "Wearable Repair": "Wearable Repair",
                    "Airpods Repair": "AirPods Repair",
                    "ipod Repair": "iPod Repair",
                    "HUAWEI FreeClip": "HUAWEI FreeClip",
                    "Peripherals Repair": "Peripherals Repair",
                    "Console Repair": "Console Repair"
                },
                "installCategories": {
                    "TV Installation": "TV Installation",
                    "Home Appliance": "Home Appliance",
                    "AC Installation": "AC Installation",
                    "Ringer Installation": "Ringer Installation",
                    "Smart Door Lock": "Smart Door Lock",
                    "Smart Security Camera": "Smart Security Camera",
                    "Smart Switches": "Smart Switches",
                    "Smart Thermostat": "Smart Thermostat",
                    "WiFi Solution": "WiFi Solution",
                    "Audio Visual Solution": "Audio Visual Solution"
                },
                "buyCategories": {
                    "RAM": "RAM",
                    "SSD": "SSD",
                    "Laptop Adaptor": "Laptop Adaptor",
                    "Laptop Battery": "Laptop Battery",
                    "Cables & Chargers": "Cables & Chargers",
                    "Keyboard & Mouse": "Keyboard & Mouse",
                    "Screen Protector": "Screen Protector",
                    "Phone Cases": "Phone Cases",
                    "Headphones & Earbuds": "Headphones & Earbuds"
                },
                "productTypes": {
                    "Apple": "Apple",
                    "Samsung": "Samsung",
                    "OnePlus": "OnePlus",
                    "Huawei": "Huawei",
                    "Xiaomi": "Xiaomi",
                    "Google Pixel": "Google Pixel",
                    "OPPO": "OPPO",
                    "Vivo": "Vivo",
                    "Nokia": "Nokia",
                    "Realme": "Realme",
                    "Honor": "Honor",
                    "Other": "Other",
                    "iPad": "iPad",
                    "Android Tablet": "Android Tablet",
                    "Windows Tablet": "Windows Tablet",
                    "E-Reader": "E-Reader",
                    "Laptop": "Laptop",
                    "Desktop PC": "Desktop PC",
                    "All-in-One PC": "All-in-One PC",
                    "Gaming Laptop": "Gaming Laptop",
                    "Gaming Desktop": "Gaming Desktop",
                    "True Wireless Earbuds": "True Wireless Earbuds",
                    "Over-Ear Headphones": "Over-Ear Headphones",
                    "Neckband Earphones": "Neckband Earphones",
                    "Wired Earphones": "Wired Earphones",
                    "French Door Refrigerator": "French Door Refrigerator",
                    "Side-by-Side Refrigerator": "Side-by-Side Refrigerator",
                    "Top Freezer Refrigerator": "Top Freezer Refrigerator",
                    "Bottom Freezer Refrigerator": "Bottom Freezer Refrigerator",
                    "Single Door Refrigerator": "Single Door Refrigerator",
                    "Mini Fridge": "Mini Fridge",
                    "Split AC": "Split AC",
                    "Window AC": "Window AC",
                    "Standing AC": "Standing AC",
                    "Portable AC": "Portable AC",
                    "Cassette AC": "Cassette AC",
                    "Central AC": "Central AC",
                    "Duct AC": "Duct AC",
                    "Gas Cooker": "Gas Cooker",
                    "Electric Cooker": "Electric Cooker",
                    "Induction Cooker": "Induction Cooker",
                    "Range Cooker": "Range Cooker",
                    "Slow Cooker": "Slow Cooker",
                    "Gas Hob": "Gas Hob",
                    "Induction Hob": "Induction Hob",
                    "Electric Hob": "Electric Hob",
                    "Ceramic Hob": "Ceramic Hob",
                    "Domino Hob": "Domino Hob",
                    "LED TV": "LED TV",
                    "OLED TV": "OLED TV",
                    "QLED TV": "QLED TV",
                    "Smart TV": "Smart TV",
                    "Curved TV": "Curved TV",
                    "Projector": "Projector",
                    "Xbox Console": "Xbox Console",
                    "Xbox Controller": "Xbox Controller",
                    "Xbox Headset": "Xbox Headset",
                    "PlayStation Console": "PlayStation Console",
                    "PlayStation Controller": "PlayStation Controller",
                    "Nintendo Switch": "Nintendo Switch",
                    "Smartwatch": "Smartwatch",
                    "Fitness Band": "Fitness Band",
                    "Smart Ring": "Smart Ring",
                    "Smart Glasses": "Smart Glasses",
                    "Freestanding Wine Cooler": "Freestanding Wine Cooler",
                    "Built-in Wine Cooler": "Built-in Wine Cooler",
                    "Dual Zone Wine Cooler": "Dual Zone Wine Cooler",
                    "Single Zone Wine Cooler": "Single Zone Wine Cooler",
                    "Countertop Wine Cooler": "Countertop Wine Cooler",
                    "iPod Touch": "iPod Touch",
                    "iPod Classic": "iPod Classic",
                    "iPod Nano": "iPod Nano",
                    "iPod Shuffle": "iPod Shuffle",
                    "MP3 Player": "MP3 Player",
                    "Portable Music Player": "Portable Music Player",
                    "Open-Ear Earbuds": "Open-Ear Earbuds",
                    "Clip-On Earbuds": "Clip-On Earbuds",
                    "Sport Earbuds": "Sport Earbuds",
                    "MacBook Air": "MacBook Air",
                    "MacBook Pro": "MacBook Pro",
                    "iMac": "iMac",
                    "Mac Mini": "Mac Mini",
                    "Mac Studio": "Mac Studio",
                    "Mac Pro": "Mac Pro",
                    "Mouse": "Mouse",
                    "Keyboard": "Keyboard",
                    "Webcam": "Webcam",
                    "Monitor": "Monitor",
                    "Printer": "Printer",
                    "Scanner": "Scanner",
                    "AirPods": "AirPods",
                    "AirPods Pro": "AirPods Pro",
                    "AirPods Max": "AirPods Max",
                    "Earbuds": "Earbuds",
                    "Solo Microwave": "Solo Microwave",
                    "Grill Microwave": "Grill Microwave",
                    "Convection Microwave": "Convection Microwave",
                    "Built-in Microwave": "Built-in Microwave",
                    "Over-the-Range Microwave": "Over-the-Range Microwave",
                    "Wall-Mounted Hood": "Wall-Mounted Hood",
                    "Island Hood": "Island Hood",
                    "Built-in Hood": "Built-in Hood",
                    "Chimney Hood": "Chimney Hood",
                    "Downdraft Hood": "Downdraft Hood",
                    "Freestanding Cooler": "Freestanding Cooler",
                    "Built-in Cooler": "Built-in Cooler",
                    "Countertop Cooler": "Countertop Cooler",
                    "Commercial Cooler": "Commercial Cooler",
                    "Front Load Washer": "Front Load Washer",
                    "Top Load Washer": "Top Load Washer",
                    "Dryer": "Dryer",
                    "Washer-Dryer Combo": "Washer-Dryer Combo",
                    "Semi-Automatic Washer": "Semi-Automatic Washer"
                }
            }
        }
    },
    ar: {
        translation: {
            "nav": {
                "home": "الرئيسية",
                "services": "الخدمات",
                "about": "من نحن",
                "contact": "اتصل بنا",
                "requestService": "طلب خدمة"
            },
            "hero": {
                "badge": "الشريك الفني المميز في الإمارات",
                "headlines": {
                    "0": { "line1": "نعيد", "line2": "أجهزتك الإلكترونية", "line3": "إلى الحياة." },
                    "1": { "line1": "أعد أجهزتك", "line2": "الإلكترونية إلى", "line3": "أفضل أداء." },
                    "2": { "line1": "حيث تلتقي", "line2": "خبرة الإلكترونيات", "line3": "بالدقة." }
                },
                "descriptions": {
                    "0": "متخصصون موثوقون في إصلاح وتركيب الإلكترونيات نخدم دبي والشارقة وجميع أنحاء الإمارات العربية المتحدة - نقدم أعمالاً دقيقة بخبرة تتجاوز ٣٠ عاماً.",
                    "1": "استلام وتوصيل مريح، أوقات إنجاز سريعة، وأكثر من ٣٠ عاماً من الخبرة الموثوقة في الإلكترونيات. مصمم حول جدولك الزمني.",
                    "2": "نستلم، نصلح، ونعيد أجهزتك الإلكترونية بشكل أسرع، بعناية يمكنك الوثوق بها."
                },
                "cta": "استكشاف الخدمات",
                "emergency": "دعم الطوارئ",
                "quickServicesTitle": "ما الخدمات التي تحتاجها؟",
                "quickServices": {
                    "repair": "إصلاح الأجهزة",
                    "install": "تركيب احترافي",
                    "buy": "ملحقات وقطع غيار"
                },
                "slides": {
                    "repair": { "title": "إصلاحات تقنية دقيقة", "category": "الأدوات وتكنولوجيا المعلومات" },
                    "install": { "title": "تركيب احترافي", "category": "المنزل الذكي والأجهزة" },
                    "ac": { "title": "خدمات التكييف المتقدمة", "category": "التحكم في المناخ" }
                }
            },
            "footer": {
                "description": "متخصصون موثوقون في إصلاح وتركيب الإلكترونيات نخدم دبي والشارقة وجميع أنحاء الإمارات بخبرة تتجاوز ٣٠ عاماً.",
                "services": "الخدمات",
                "quickLinks": "روابط سريعة",
                "contactUs": "اتصل بنا",
                "rights": "جميع الحقوق محفوظة.",
                "privacy": "سياسة الخصوصية",
                "terms": "شروط الخدمة",
                "serviceLinks": {
                    "repair": "إصلاح الأجهزة",
                    "install": "تركيب احترافي",
                    "accessories": "ملحقات وقطع غيار"
                },
                "bookTechnician": "حجز فني",
                "ourValues": "قيمنا"
            },
            "servicesSection": {
                "badge": "حلول مدروسة",
                "title": "الدقة في كل خدمة",
                "description": "نحن نستخدم تشخيصات معايير المصنع وثلاثة عقود من التراث لاستعادة أجهزتك إلى الأداء الأصلي.",
                "viewDetails": "عرض التفاصيل",
                "cards": {
                    "repair": {
                        "title": "إصلاح الأجهزة",
                        "desc": "احصل على إصلاح أجهزتك وأدواتك المنزلية بسرعة وموثوقية من قبل فنيين معتمدين."
                    },
                    "install": {
                        "title": "تركيب احترافي",
                        "desc": "نقوم بإعداد أجهزتك بأمان وكفاءة حتى تكون جاهزة للاستخدام فوراً."
                    },
                    "accessories": {
                        "title": "ملحقات وقطع غيار",
                        "desc": "اعثر على ملحقات عالية الجودة تتطابق تماماً مع أجهزتك وتحافظ على أفضل أدائها."
                    }
                }
            },
            "whyUs": {
                "title": "لماذا تختار",
                "titleAccent": "خدمات.",
                "feature1": {
                    "title": "إصلاحات احترافية، سريعة وبلا عناء",
                    "desc": "نصلح الهواتف الذكية وأجهزة الكمبيوتر المحمولة والأجهزة اللوحية والأجهزة المنزلية بقطع غيار عالية الجودة وأساليب مجربة واستلام وتوصيل مريح - كل ذلك بسرعة وموثوقية."
                },
                "feature2": {
                    "title": "موثوق بنا في جميع أنحاء الإمارات",
                    "desc": "مع عقود من الخبرة وسمعة في الخدمة الصادقة والاحترافية، نجعل العناية بالإلكترونيات سهلة."
                },
                "statsHeader": "تأسست عام ١٩٩٠. نخدم المستقبل.",
                "statsSubheader": "تأثيرنا في لمحة",
                "stats": {
                    "years": { "val": "+٣٣", "label": "عاماً", "desc": "نصلح التقنية التي تحبها" },
                    "fixes": { "val": "+٢٥٠ ألف", "label": "جهاز", "desc": "تم إصلاحه في جميع أنحاء الإمارات" },
                    "partners": { "val": "+٥٠", "label": "شريك", "desc": "شراكات علامات تجارية موثوقة" }
                }
            },
            "testimonials": {
                "badge": "صوت العميل",
                "title": "موثوق بنا من قبل",
                "titleAccent": "الآلاف",
                "subtitle": "في جميع أنحاء الإمارات",
                "desc": "التزامنا بالجودة والشفافية جعلنا شريك الخدمة المفضل لإصلاحات وتركيبات التكنولوجيا.",
                "avgRating": "متوسط تقييم الخدمة",
                "list": {
                    "ahmed": "أنقذتني خدمات عندما تعطل مكيف مكتبي في منتصف الصيف. كان وقت الاستجابة أقل من ساعتين، وكان الإصلاح مثالياً. أوصي بهم بشدة!",
                    "sarah": "احترافية، كفاءة، وأمانة. قاموا بإصلاح جهاز MacBook Pro الخاص بي الذي قالت عدة متاجر أخرى إنه غير قابل للإصلاح. الشفافية في أسعارهم رائعة.",
                    "mohammed": "لقد استخدمت خدمتهم لكل شيء من تركيب التلفزيون إلى إصلاح الكمبيوتر المحمول. إنهم متسقون ومهذبون وخبراء بوضوح في عملهم. ١٠/١٠."
                },
                "names": {
                    "ahmed": "أحمد المنصوري",
                    "sarah": "سارة جنكينز",
                    "mohammed": "محمد إبراهيم"
                },
                "roles": {
                    "ahmed": "صاحب أعمال",
                    "sarah": "مصممة جرافيك",
                    "mohammed": "متحمس للتكنولوجيا"
                }
            },
            "emergency": {
                "badge": "وحدة الاستجابة العاجلة",
                "title": "عطل حرج؟",
                "subtitle": "نحن متاحون ٢٤/٧.",
                "desc": "توفر وحدة الاستجابة للطوارئ لدينا إرسالاً ذا أولوية لغرف الخوادم، والأنظمة المنزلية الحرجة، والأصول التقنية عالية القيمة عبر ممر الشارقة ودبي.",
                "hotline": "الخط الساخن للخدمة السريعة"
            },
            "contactHome": {
                "title": "احجز",
                "titleAccent": "موعدك.",
                "desc": "تواصل مع مستشارينا التقنيين. نحن نقدم تسعيراً شفافاً وفترات خدمة مؤكدة لكل حجز.",
                "support": "الدعم الفني",
                "official": "المراسلات الرسمية",
                "hq": "المقر الصناعي في الشارقة",
                "form": {
                    "name": "الاسم",
                    "namePlaceholder": "الاسم الكامل",
                    "phone": "الهاتف",
                    "phonePlaceholder": "+٩٧١ ٥X XXX XXXX",
                    "phoneRequired": "رقم الهاتف مطلوب.",
                    "phoneInvalid": "يرجى إدخال رقم هاتف إماراتي صالح.",
                    "service": "نوع الخدمة",
                    "message": "الوصف الفني",
                    "messagePlaceholder": "صف المشكلة أو المتطلبات...",
                    "submit": "تأكيد الحجز",
                    "loading": "جاري المعالجة...",
                    "success": "تم استلام الطلب",
                    "successDesc": "سيتصل بك فريقنا قريباً."
                }
            },
            "servicesPage": {
                "header": {
                    "badge": "كتالوج الخدمات",
                    "title": "نزاهة",
                    "titleAccent": "هندسية.",
                    "description": "من إصلاحات الأجهزة الدقيقة إلى التركيبات الاحترافية، نقدم حلولاً متخصصة تلبي أعلى المعايير الدولية."
                },
                "serviceGrade": "درجة الخدمة",
                "authorizedPartner": "شريك معتمد",
                "requestService": "طلب خدمة",
                "longDescriptions": {
                    "repair": "احصل على إصلاح أجهزتك وأدواتك المنزلية بسرعة وموثوقية من قبل فنيين معتمدين.",
                    "install": "نقوم بإعداد أجهزتك بأمان وكفاءة حتى تكون جاهزة للاستخدام فوراً.",
                    "accessories": "اعثر على ملحقات عالية الجودة تتطابق تماماً مع أجهزتك وتحافظ على أفضل أدائها."
                },
                "highlights": {
                    "repair": [
                        "قطع غيار أصلية لأداء يدوم طويلاً",
                        "تشخيصات خبيرة لإصلاح المشاكل بشكل صحيح",
                        "إنجاز سريع بلا عناء"
                    ],
                    "install": [
                        "تركيب احترافي للأداء الأمثل",
                        "خدمة في الموقع بلا متاعب",
                        "إرشاد سريع حتى تبدأ فوراً"
                    ],
                    "accessories": [
                        "منتجات معتمدة ومتوافقة فقط",
                        "شواحن وكابلات وأجهزة طرفية متميزة",
                        "أداء موثوق في كل مرة"
                    ]
                }
            },
            "aboutPage": {
                "seo": {
                    "title": "عن خدمات",
                    "description": "خدمات، مدعومة من مجموعة MI، تقدم أكثر من ٣٠ عاماً من الخبرة في إصلاح وخدمة الإلكترونيات في جميع أنحاء الإمارات."
                },
                "intro": {
                    "badge": "قصتنا",
                    "title": "ما وراء",
                    "titleAccent": "المعايير.",
                    "desc": "، مدعومة من مجموعة MI، تقدم أكثر من ٣٠ عاماً من الخبرة في إصلاح وخدمة الإلكترونيات. منذ أوائل التسعينيات، نساعد العملاء في جميع أنحاء الإمارات بحلول موثوقة وفعالة وبأسعار معقولة."
                },
                "heritage": {
                    "badge": "تراث منذ عام ١٩٩٠",
                    "title": "خبرة موثوقة، لكل جهاز.",
                    "desc": "يتعامل فنيونا المهرة مع مجموعة واسعة من الإلكترونيات — من أجهزة الكمبيوتر المحمولة والأجهزة اللوحية والتلفزيونات إلى الثلاجات ووحدات التكييف وغيرها. نحن نعرف مدى أهمية أجهزتك، لذلك نجمع بين سرعة الإنجاز والعناية الدقيقة. على مر السنين، اكتسبت خدمات سمعة في الخدمة الموثوقة والتسليم في الوقت المحدد ورضا العملاء الكامل. كل إصلاح، كبيراً كان أو صغيراً، يُعامل باحترافية ودقة."
                },
                "stats": {
                    "years": "+٣٣",
                    "yearsLabel": "عام",
                    "techs": "+١٠٠",
                    "techsLabel": "فني",
                    "glorious": "+٣٠",
                    "gloriousLabel": "عام من الأمجاد"
                },
                "values": {
                    "integrity": { "title": "النزاهة الفنية", "desc": "لا اختصارات. نستخدم إجراءات معتمدة من المصنع لكل مكون على حدة." },
                    "human": { "title": "محورنا الإنسان", "desc": "الخدمة تتعلق بالناس. نحن نعطي الأولوية لجدولك الزمني وراحة بالك." },
                    "roots": { "title": "جذور إقليمية", "desc": "فخورون بنشأتنا في الإمارات. نحن نفهم التحديات التقنية الفريدة للمنطقة." },
                    "growth": { "title": "نمو مستمر", "desc": "الاستثمار في أحدث تقنيات التشخيص بالذكاء الاصطناعي وأدوات الإصلاح الروبوتية." }
                },
                "hq": {
                    "badge": "مركز استراتيجي",
                    "title": "قلب الصناعة في الشارقة.",
                    "desc": "يقع مقرنا في أكبر سوق للأجهزة المستعملة والكمبيوتر في دول مجلس التعاون الخليجي، ويضم مركزنا اللوجستي ومراكز الخدمة المعتمدة.",
                    "label": "المكتب الرئيسي"
                }
            },
            "contactPage": {
                "seo": {
                    "title": "اتصل بنا - الدعم الفني",
                    "description": "تواصل مع خدمات للحصول على خدمات الإصلاح والتركيب المعتمدة في الشارقة ودبي. يتوفر خط أولوية للطوارئ على مدار الساعة طوال أيام الأسبوع."
                },
                "intro": {
                    "badge": "تواصل معنا",
                    "title": "نحن تحت",
                    "titleAccent": "تصرفك.",
                    "desc": "التميز التقني على بعد رسالة واحدة فقط. تواصل معنا للحصول على الاستشارات، أو الإصلاحات الطارئة، أو تحديثات الحالة."
                },
                "contacts": {
                    "support": "الدعم الأساسي",
                    "correspondence": "المراسلات",
                    "office": "مركز المكتب"
                },
                "form": {
                    "name": "الاسم الكامل",
                    "namePlaceholder": "مثال: جون دو",
                    "phone": "الهاتف المباشر",
                    "phonePlaceholder": "+٩٧١ ٥X XXX XXXX",
                    "phoneRequired": "رقم الهاتف مطلوب.",
                    "phoneInvalid": "يرجى إدخال رقم هاتف إماراتي صالح.",
                    "email": "البريد الإلكتروني الرسمي",
                    "emailPlaceholder": "john@company.ae",
                    "service": "تصنيف الخدمة",
                    "servicePlaceholder": "اختر الخدمة الأساسية...",
                    "other": "استفسار فني آخر",
                    "message": "ملخص فني",
                    "messagePlaceholder": "قدم تفاصيل حول جهازك أو المساعدة المطلوبة...",
                    "submit": "تأكيد الطلب",
                    "success": "تم الإرسال بنجاح.",
                    "successDesc": "شكراً لاختيارك خدمات. سيتصل بك فريق فني في غضون ٣٠ دقيقة."
                },
                "whatsapp": {
                    "title": "دعم واتساب الفوري",
                    "desc": "دردش مباشرة للحصول على عرض سعر فوري."
                },
                "windows": {
                    "service": {
                        "title": "نافذة الخدمة",
                        "mon": "الاثنين",
                        "tue": "الثلاثاء",
                        "wed": "الأربعاء",
                        "thu": "الخميس",
                        "fri": "الجمعة",
                        "sat": "السبت",
                        "sun": "الأحد"
                    },
                    "priority": {
                        "badge": "خط الأولوية",
                        "desc": "هل تواجه حالة طوارئ فنية حرجة؟ فريقنا في حالة استعداد ٢٤/٧.",
                        "cta": "الاتصال بدعم الطوارئ"
                    }
                },
                "map": {
                    "title": "المقر الرئيسي في الشارقة"
                }
            },
            "privacy": {
                "title": "سياسة الخصوصية",
                "badge": "حماية البيانات",
                "lastUpdated": "آخر تحديث: فبراير ٢٠٢٤",
                "intro": "في خدمات، نحن نأخذ خصوصيتك على محمل الجد. تصف هذه السياسة كيفية جمعنا لمعلوماتك الشخصية واستخدامها وحمايتها عند استخدامك لخدماتنا.",
                "sections": {
                    "collection": {
                        "title": "جمع البيانات",
                        "desc": "نحن نجمع المعلومات التي تقدمها لنا مباشرة، مثل اسمك ورقم هاتفك وعنوانك عند حجز الخدمة."
                    },
                    "usage": {
                        "title": "كيف نستخدم البيانات",
                        "desc": "تُستخدم بياناتك فقط لتوفير وتحسين خدماتنا الفنية، بما في ذلك إرسال تحديثات وتأكيدات الخدمة."
                    },
                    "protection": {
                        "title": "حماية البيانات",
                        "desc": "نحن نطبق تدابير أمنية قياسية لضمان بقاء بياناتك الشخصية سرية وآمنة."
                    }
                }
            },
            "terms": {
                "title": "الشروط والأحكام",
                "badge": "اتفاقية الخدمة",
                "lastUpdated": "آخر تحديث: فبراير ٢٠٢٤",
                "intro": "من خلال الوصول إلى خدمات خدمات أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. يرجى قراءتها بعناية قبل حجز فني.",
                "sections": {
                    "service": {
                        "title": "شروط الخدمة",
                        "desc": "يقدم فنيونا الخدمات بناءً على المعلومات المقدمة. نحن نحتفظ بالحق في تعديل تقديرات الأسعار إذا كانت المشكلة الحقيقية تختلف عن الوصف."
                    },
                    "warranty": {
                        "title": "سياسة الضمان",
                        "desc": "نحن نقدم ضماناً قياسياً على معظم الإصلاحات. يغطي هذا الجزء المحدد الذي تم استبداله أو إصلاحه ولا يغطي المشكلات الجديدة."
                    },
                    "cancellation": {
                        "title": "الإلغاء",
                        "desc": "يجب إجراء الإلغاء قبل ساعتين على الأقل من الموعد المحدد. قد تترتب على الإلغاء المتأخر رسوم زيارة رمزية."
                    }
                }
            },
            "modal": {
                "flowTitles": {
                    "repair": "إصلاح الأجهزة",
                    "install": "تركيب احترافي",
                    "buy": "إكسسوارات وقطع غيار",
                    "select": "اختر الخدمة"
                },
                "header": {
                    "step": "الخطوة",
                    "portal": "بوابة الخدمة ٢.٠"
                },
                "footer": {
                    "live": "مباشر:",
                    "usersSelecting": "مستخدمون يختارون خدمات",
                    "secure": "مشفر بتقنية SSL آمنة"
                },
                "repair": {
                    "step1Title": "أي جهاز تحتاج مساعدة بشأنه؟",
                    "searchPlaceholder": "ابحث عن نوع الجهاز...",
                    "step2TitleBrand": "اختر العلامة التجارية",
                    "step2TitleType": "ما نوع المنتج؟",
                    "step3Title": "صف المشكلة",
                    "step3Placeholder": "أخبرنا ما المشكلة في جهازك... (مثال: الشاشة مكسورة، لا يعمل، البطارية تنفد بسرعة)",
                    "step4Title": "كيف تود المتابعة؟",
                    "visitCenter": "زيارة مركز الخدمة",
                    "visitCenterDesc": "أسرع إنجاز في مختبراتنا.",
                    "visitCenterPrice": "السعر يُحدد بعد الفحص",
                    "homePickup": "استلام من المنزل/المكتب",
                    "homePickupDesc": "نستلم الجهاز ونعيده إليك.",
                    "homePickupPrice": "السعر يُحدد حسب الموقع",
                    "ourCenter": "مركز الخدمة لدينا",
                    "centerName": "ون واي إلكترونيكس",
                    "centerAddress": "المنطقة الصناعية ٦، الشارقة، الإمارات",
                    "timings": "المواعيد",
                    "timingWeekday": "الإثنين–الخميس، السبت–الأحد: ٩ص – ١٠م",
                    "timingFriday": "الجمعة: ٤م – ١٠م"
                },
                "install": {
                    "step2Title": "ما الخدمات التي تحتاجها لـ",
                    "step2Desc": "اختر كل ما ينطبق، ثم تابع.",
                    "servicesSelected_one": "{{count}} خدمة مختارة",
                    "servicesSelected_other": "{{count}} خدمات مختارة"
                },
                "customer": {
                    "title": "بيانات التواصل",
                    "desc": "يرجى تقديم معلوماتك للمتابعة.",
                    "fullName": "الاسم الكامل",
                    "namePlaceholder": "أدخل اسمك",
                    "nameRequired": "الاسم الكامل مطلوب.",
                    "email": "البريد الإلكتروني",
                    "emailPlaceholder": "أدخل بريدك الإلكتروني",
                    "emailRequired": "البريد الإلكتروني مطلوب.",
                    "emailInvalid": "يرجى إدخال بريد إلكتروني صالح.",
                    "phone": "رقم الهاتف",
                    "phonePlaceholder": "+٩٧١ ٥X XXX XXXX",
                    "phoneRequired": "رقم الهاتف مطلوب.",
                    "phoneInvalid": "يرجى إدخال رقم هاتف إماراتي صالح.",
                    "brandName": "اسم العلامة التجارية",
                    "optional": "(اختياري)",
                    "brandPlaceholder": "مثال: سامسونج، إل جي، أبل...",
                    "address": "العنوان",
                    "addressPlaceholder": "أدخل عنوانك",
                    "addressRequired": "العنوان مطلوب.",
                    "fillRequired": "يرجى ملء جميع الحقول المطلوبة للمتابعة.",
                    "reviewOrder": "مراجعة الطلب"
                },
                "summary": {
                    "title": "طلب الخدمة جاهز",
                    "desc": "راجع اختياراتك واختر طريقة الدفع المفضلة.",
                    "selectedItems": "العناصر المختارة",
                    "device": "الجهاز",
                    "brand": "العلامة التجارية",
                    "type": "النوع",
                    "issue": "المشكلة",
                    "delivery": "التوصيل",
                    "visit": "زيارة",
                    "homePickup": "استلام منزلي",
                    "category": "الفئة",
                    "service": "الخدمة",
                    "model": "الموديل",
                    "advanceFee": "رسوم الخدمة المقدمة",
                    "feeAmount": "١٠.٠٠ درهم",
                    "feeDesc": "رسوم الاستلام والتوصيل والعمالة ستُحدد حسب موقعك والخدمة المطلوبة. سيتواصل فريقنا معك بالسعر النهائي.",
                    "advancePayment": "الدفع المقدم",
                    "payOnline": "ادفع أونلاين",
                    "processing": "جارٍ المعالجة...",
                    "payLater": "ادفع لاحقاً",
                    "sending": "جارٍ الإرسال..."
                },
                "buttons": {
                    "continue": "متابعة",
                    "proceedToInfo": "المتابعة للمعلومات"
                },
                "devices": {
                    "Mobile Repair": "إصلاح الهاتف",
                    "Laptop/Desktop Repair": "إصلاح اللابتوب/الكمبيوتر",
                    "Tablet Repair": "إصلاح التابلت",
                    "AC Repair": "إصلاح المكيف",
                    "Refrigerator Repair": "إصلاح الثلاجة",
                    "Washers & Dryers Repair": "إصلاح الغسالات والمجففات",
                    "TV Repair": "إصلاح التلفزيون",
                    "Microwave Oven Repair": "إصلاح فرن الميكروويف",
                    "Cooker Repair": "إصلاح الطباخ",
                    "Hood Repair": "إصلاح الشفاط",
                    "Hob Repair": "إصلاح الموقد",
                    "Beverage Cooler Repair": "إصلاح مبرد المشروبات",
                    "Wine Cooler Repair": "إصلاح مبرد النبيذ",
                    "Mackbook/iMac Repair": "إصلاح ماك بوك/آي ماك",
                    "Wearable Repair": "إصلاح الأجهزة القابلة للارتداء",
                    "Airpods Repair": "إصلاح الإيربودز",
                    "ipod Repair": "إصلاح الآيبود",
                    "HUAWEI FreeClip": "هواوي فري كليب",
                    "Peripherals Repair": "إصلاح الملحقات",
                    "Console Repair": "إصلاح أجهزة الألعاب"
                },
                "installCategories": {
                    "TV Installation": "تركيب التلفزيون",
                    "Home Appliance": "الأجهزة المنزلية",
                    "AC Installation": "تركيب المكيف",
                    "Ringer Installation": "تركيب الجرس",
                    "Smart Door Lock": "القفل الذكي",
                    "Smart Security Camera": "كاميرا المراقبة الذكية",
                    "Smart Switches": "المفاتيح الذكية",
                    "Smart Thermostat": "منظم الحرارة الذكي",
                    "WiFi Solution": "حلول الواي فاي",
                    "Audio Visual Solution": "حلول الصوت والصورة"
                },
                "buyCategories": {
                    "RAM": "رام",
                    "SSD": "إس إس دي",
                    "Laptop Adaptor": "شاحن لابتوب",
                    "Laptop Battery": "بطارية لابتوب",
                    "Cables & Chargers": "كابلات وشواحن",
                    "Keyboard & Mouse": "لوحة مفاتيح وماوس",
                    "Screen Protector": "واقي شاشة",
                    "Phone Cases": "أغطية هواتف",
                    "Headphones & Earbuds": "سماعات رأس وأذن"
                },
                "productTypes": {
                    "Apple": "أبل",
                    "Samsung": "سامسونج",
                    "OnePlus": "ون بلس",
                    "Huawei": "هواوي",
                    "Xiaomi": "شاومي",
                    "Google Pixel": "جوجل بيكسل",
                    "OPPO": "أوبو",
                    "Vivo": "فيفو",
                    "Nokia": "نوكيا",
                    "Realme": "ريلمي",
                    "Honor": "هونر",
                    "Other": "أخرى",
                    "iPad": "آيباد",
                    "Android Tablet": "تابلت أندرويد",
                    "Windows Tablet": "تابلت ويندوز",
                    "E-Reader": "قارئ إلكتروني",
                    "Laptop": "لابتوب",
                    "Desktop PC": "كمبيوتر مكتبي",
                    "All-in-One PC": "كمبيوتر الكل في واحد",
                    "Gaming Laptop": "لابتوب ألعاب",
                    "Gaming Desktop": "كمبيوتر ألعاب مكتبي",
                    "True Wireless Earbuds": "سماعات لاسلكية بالكامل",
                    "Over-Ear Headphones": "سماعات فوق الأذن",
                    "Neckband Earphones": "سماعات بشريط رقبة",
                    "Wired Earphones": "سماعات سلكية",
                    "French Door Refrigerator": "ثلاجة بابين فرنسية",
                    "Side-by-Side Refrigerator": "ثلاجة جنب إلى جنب",
                    "Top Freezer Refrigerator": "ثلاجة بفريزر علوي",
                    "Bottom Freezer Refrigerator": "ثلاجة بفريزر سفلي",
                    "Single Door Refrigerator": "ثلاجة باب واحد",
                    "Mini Fridge": "ثلاجة صغيرة",
                    "Split AC": "مكيف سبليت",
                    "Window AC": "مكيف شباك",
                    "Standing AC": "مكيف عامودي",
                    "Portable AC": "مكيف متنقل",
                    "Cassette AC": "مكيف كاسيت",
                    "Central AC": "تكييف مركزي",
                    "Duct AC": "مكيف مجاري هواء",
                    "Gas Cooker": "طباخ غاز",
                    "Electric Cooker": "طباخ كهربائي",
                    "Induction Cooker": "طباخ حثي",
                    "Range Cooker": "طباخ نطاقي",
                    "Slow Cooker": "طباخ بطيء",
                    "Gas Hob": "موقد غاز",
                    "Induction Hob": "موقد حثي",
                    "Electric Hob": "موقد كهربائي",
                    "Ceramic Hob": "موقد سيراميك",
                    "Domino Hob": "موقد دومينو",
                    "LED TV": "تلفزيون LED",
                    "OLED TV": "تلفزيون OLED",
                    "QLED TV": "تلفزيون QLED",
                    "Smart TV": "تلفزيون ذكي",
                    "Curved TV": "تلفزيون منحني",
                    "Projector": "بروجكتور",
                    "Xbox Console": "جهاز إكس بوكس",
                    "Xbox Controller": "يد تحكم إكس بوكس",
                    "Xbox Headset": "سماعة إكس بوكس",
                    "PlayStation Console": "جهاز بلايستيشن",
                    "PlayStation Controller": "يد تحكم بلايستيشن",
                    "Nintendo Switch": "نينتندو سويتش",
                    "Smartwatch": "ساعة ذكية",
                    "Fitness Band": "سوار لياقة",
                    "Smart Ring": "خاتم ذكي",
                    "Smart Glasses": "نظارات ذكية",
                    "Freestanding Wine Cooler": "مبرد نبيذ قائم",
                    "Built-in Wine Cooler": "مبرد نبيذ مدمج",
                    "Dual Zone Wine Cooler": "مبرد نبيذ مزدوج",
                    "Single Zone Wine Cooler": "مبرد نبيذ أحادي",
                    "Countertop Wine Cooler": "مبرد نبيذ سطحي",
                    "iPod Touch": "آيبود تاتش",
                    "iPod Classic": "آيبود كلاسيك",
                    "iPod Nano": "آيبود نانو",
                    "iPod Shuffle": "آيبود شافل",
                    "MP3 Player": "مشغل MP3",
                    "Portable Music Player": "مشغل موسيقى محمول",
                    "Open-Ear Earbuds": "سماعات مفتوحة الأذن",
                    "Clip-On Earbuds": "سماعات بمشبك",
                    "Sport Earbuds": "سماعات رياضية",
                    "MacBook Air": "ماك بوك إير",
                    "MacBook Pro": "ماك بوك برو",
                    "iMac": "آي ماك",
                    "Mac Mini": "ماك ميني",
                    "Mac Studio": "ماك ستوديو",
                    "Mac Pro": "ماك برو",
                    "Mouse": "ماوس",
                    "Keyboard": "لوحة مفاتيح",
                    "Webcam": "كاميرا ويب",
                    "Monitor": "شاشة",
                    "Printer": "طابعة",
                    "Scanner": "ماسح ضوئي",
                    "AirPods": "إيربودز",
                    "AirPods Pro": "إيربودز برو",
                    "AirPods Max": "إيربودز ماكس",
                    "Earbuds": "سماعات أذن",
                    "Solo Microwave": "ميكروويف عادي",
                    "Grill Microwave": "ميكروويف شواية",
                    "Convection Microwave": "ميكروويف حراري",
                    "Built-in Microwave": "ميكروويف مدمج",
                    "Over-the-Range Microwave": "ميكروويف فوق الفرن",
                    "Wall-Mounted Hood": "شفاط حائطي",
                    "Island Hood": "شفاط جزيرة",
                    "Built-in Hood": "شفاط مدمج",
                    "Chimney Hood": "شفاط مدخنة",
                    "Downdraft Hood": "شفاط سحب سفلي",
                    "Freestanding Cooler": "مبرد قائم",
                    "Built-in Cooler": "مبرد مدمج",
                    "Countertop Cooler": "مبرد سطحي",
                    "Commercial Cooler": "مبرد تجاري",
                    "Front Load Washer": "غسالة تحميل أمامي",
                    "Top Load Washer": "غسالة تحميل علوي",
                    "Dryer": "مجفف",
                    "Washer-Dryer Combo": "غسالة ومجفف",
                    "Semi-Automatic Washer": "غسالة نصف أوتوماتيك"
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        detection: {
            order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        }
    });

export default i18n;
