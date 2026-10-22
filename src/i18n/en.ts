import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    aboutUs: "ABOUT US",
    wado: "WADO",
    guide: "Exercise Guide",
    support: "Support",
    store: "STORE",
    myPage: "MY PAGE",
    aboutSub: [
      { label: "Company Overview", href: "/about/overview" },
      { label: "Company History", href: "/about/history" },
      { label: "Certifications & Patents", href: "/about/certifications" },
      { label: "Location", href: "/about/location" },
    ],
    guideSub: [
      { label: "Barospine", href: "/guide/barospine" },
      { label: "Kids", href: "/guide/kids" },
      { label: "Golf", href: "/guide/golf" },
      { label: "Foam Roller", href: "/guide/foamroller" },
    ],
    supportSub: [
      { label: "Customer Support", href: "/support" },
      { label: "Notices", href: "/support/notice" },
      { label: "Resources", href: "/support/resources" },
    ],
  },

  hero: {
    badge: "FINI SPORTS",
    headline1: "Exercise doesn't have to be",
    headline2: "complicated",
    sub1: "Start your own wellness routine with a massage ball or mini foam roller.",
    sub2: "FINI Sports is with you from the very first step.",
    cta1: "Get Started",
    cta2: "View Best Sellers",
    categories: ["MASSAGE BALL", "MINI FOAM ROLLER", "SPARK MAT", "BAROSPINE"],
  },

  painPoints: {
    title: "Sound familiar?",
    subtitle: "Thousands of customers have shared the same struggles",
    items: [
      "I signed up for a gym membership, but I'm too busy to go more than twice a month.",
      "After yoga class ends, I have no idea how to practice at home.",
      "I have terrible forward head posture and want to start exercising, but I don't know what to buy.",
      "I've bought so many diet gadgets that just ended up collecting dust.",
      "I want a reliable one-stop shop for all the small equipment my PT studio needs.",
    ],
    transition: "Don't worry.",
    transitionHighlight: "FINI Sports has the answer.",
  },

  solution: {
    badge: "Why FINI Sports",
    title: "Your partner in health and happiness,",
    titleHighlight: "FINI Sports",
    values: [
      {
        title: "Proven Quality",
        desc: "Stop wasting money on cheap products.\nWe carefully select only fitness equipment that has been tested for durability and safety.",
      },
      {
        title: "Affordable for Everyone",
        desc: "From beginner resistance bands to professional weights,\nstart your fitness journey at prices that won't break the bank.",
      },
      {
        title: "Curated by Purpose",
        desc: "Home training, yoga, rehabilitation, weight loss, PT\u2014\nquickly find the right product for your goal.",
      },
    ],
  },

  categoriesSection: {
    title: "The perfect gear for",
    titleHighlight: "your fitness goal",
    items: [
      {
        emoji: "\uD83C\uDFE0",
        label: "Home Training",
        quote: "30 minutes after work\u2014your living room becomes your personal gym.",
        desc: "A mat, a dumbbell, and a resistance band are all you need. Discover home training essentials that let you work out systematically without a gym.",
        cta: "Shop Home Training",
      },
      {
        emoji: "\uD83E\uDDD8",
        label: "Yoga & Pilates",
        quote: "Even after class ends, your practice continues.",
        desc: "Non-slip yoga mats, pilates rings, foam rollers, and yoga blocks. A premium accessory collection to complete your practice.",
        cta: "Shop Yoga & Pilates",
      },
      {
        emoji: "\uD83D\uDCAA",
        label: "Rehab & Posture Correction",
        quote: "A pain-free body is the best body.",
        desc: "From forward head posture and rounded shoulders to post-injury recovery. Self-rehabilitation and correction solutions bridging hospital and home.",
        cta: "Shop Rehab & Correction",
      },
      {
        emoji: "\uD83D\uDD25",
        label: "Weight Loss",
        quote: "This year, I'm actually going to start.",
        desc: "It's okay to be a beginner. Start small and light. Make a change with workout equipment you'll actually stick with.",
        cta: "Shop Weight Loss",
      },
      {
        emoji: "\uD83E\uDD4A",
        label: "PT & Trainers",
        quote: "Equipment your clients trust is what defines your expertise.",
        desc: "Boxing gloves, training bands, accessory sets and more. All the fitness equipment your studio needs, in one place.",
        cta: "Shop PT & Trainer Gear",
      },
    ],
  },

  trust: {
    title: "Why choose",
    titleHighlight: "FINI Sports",
    stats: [
      {
        label: "Expertise",
        value: "Fitness Equipment Specialists",
        desc: "Covering yoga, pilates, rehab, and PT",
      },
      {
        label: "Fast Shipping",
        value: "Next-Day Dispatch",
        desc: "Quick delivery nationwide after order",
      },
      {
        label: "Customer Satisfaction",
        value: "Consistently High Ratings",
        desc: "Top-rated seller satisfaction",
      },
      {
        label: "Fair Pricing",
        value: "No Middlemen",
        desc: "We cut the markup by operating directly",
      },
    ],
  },

  bestsellers: {
    badge: "WADO Products",
    title: "Our Products",
    desc: "WADO is FINI Sports' in-house brand, designed for everyday health and wellness.",
    viewAll: "View All Products",
  },

  testimonials: {
    title: "Real stories from",
    titleHighlight: "our customers",
    reviews: [
      {
        text: "I've bought three yoga mats because of slipping issues, but the one I got here truly doesn't slip.",
        author: "Yoga enthusiast, 2 years",
        tag: "Yoga Mat",
      },
      {
        text: "After using the posture correction foam roller, my neck pain has noticeably decreased.",
        author: "Rehabilitation customer",
        tag: "Posture Correction",
      },
      {
        text: "I got all the small equipment for my new PT studio here. Great response time and quality.",
        author: "Personal trainer",
        tag: "PT Equipment",
      },
    ],
  },

  finalCta: {
    title: "Today is the best day to start",
    desc1: "It's not fancy equipment that changes your body\u2014it's consistent habits.",
    desc2: "Find the right first piece of workout gear for you at FINI Sports.",
    cta1: "View Best Sellers",
    cta2: "Shop by Category",
  },

  footer: {
    slogan: "Your partner in health and happiness",
    company: "FINI CO., LTD",
    navTitle: "Navigation",
    contactTitle: "Contact",
    phone: "031-846-7187",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    ceo: "CEO: Sung-gu Kang | Business Reg. No.: 476-88-00753 | E-commerce Permit: 2018-Gyeonggi Yangju-0005",
    bizNo: "476-88-00753",
    salesNo: "2018-Gyeonggi Yangju-0005",
    rights: "FINI CO., LTD. All rights reserved.",
  },

  // ─── Sub Pages ───────────────────────────────────

  aboutOverview: {
    badge: "About Us",
    title: "Company Overview",
    subtitle: "Your partner in health and happiness, FINI CO., LTD",
    introTitle: "FINI CO., LTD",
    intro1:
      "FINI CO., LTD is a company that plans, manufactures, and distributes professional fitness equipment across various fields including yoga, pilates, rehabilitation, weight loss, and personal training, all under the slogan \"Your partner in health and happiness.\"",
    intro2:
      "Through our in-house brand WADO, we offer quality-verified products such as massage balls, foam rollers, Barospine devices, and yoga mats. We have obtained ISO 9001 Quality Management System certification, ensuring the quality and safety of our products.",
    tags: ["ISO 9001 Certified", "Patent Holder", "In-house Brand WADO"],
    companyInfoTitle: "Company Information",
    companyInfo: [
      { dt: "Company Name", dd: "FINI CO., LTD" },
      { dt: "CEO", dd: "Sung-gu Kang" },
      { dt: "Established", dd: "2018" },
      { dt: "Business Area", dd: "Sports equipment manufacturing & distribution" },
      { dt: "In-house Brand", dd: "WADO" },
      { dt: "Business Reg. No.", dd: "476-88-00753" },
      { dt: "E-commerce Permit", dd: "2018-Gyeonggi Yangju-0005" },
      { dt: "Headquarters", dd: "24, Oemi-ro, Yangju-si, Gyeonggi-do, South Korea" },
      { dt: "Phone", dd: "031-846-7187" },
      { dt: "Email", dd: "admin@finisports.com" },
    ],
    visionTitle: "Our Vision",
    visions: [
      {
        title: "Quality First",
        desc: "We provide only safe and durable products through rigorous quality control.",
      },
      {
        title: "Customer-Centric",
        desc: "We continuously research and improve to support our customers' healthy lifestyles.",
      },
      {
        title: "Pursuit of Innovation",
        desc: "We create new value through patented technology and ergonomic design.",
      },
    ],
  },

  aboutHistory: {
    badge: "Our History",
    title: "Company History",
    subtitle: "A journey toward healthier living since 2018",
    timeline: [
      {
        year: "2018",
        events: [
          "FINI CO., LTD established",
          "Fitness equipment distribution business launched",
          "E-commerce business permit registered (2018-Gyeonggi Yangju-0005)",
        ],
      },
      {
        year: "2019",
        events: [
          "In-house brand WADO launched",
          "WADO trademark application filed",
          "FINI trademark application filed",
        ],
      },
      {
        year: "2020",
        events: [
          "WADO trademark registered (No. 40-1583819)",
          "FINI trademark registered (No. 40-1583820)",
          "Online store launched (finisports.com)",
          "Naver Smartstore shop opened",
        ],
      },
      {
        year: "2021",
        events: [
          "WADO Mini Foam Roller released",
          "WADO Massage Ball series released (Single / Peanut)",
          "Expanded to open markets including Auction and Gmarket",
        ],
      },
      {
        year: "2022",
        events: [
          "Patent registered for spinal stretching exercise device (No. 10-2443801)",
          "Barospine series released",
          "Spark Mat developed and released",
        ],
      },
      {
        year: "2023",
        events: [
          "ISO 9001:2015 Quality Management System certification obtained (GQ-232424)",
          "Barospine Pro released",
          "SPARK KIT / SPARK KIT+ sets released",
        ],
      },
      {
        year: "2024",
        events: [
          "Pilates Ring released",
          "NBR Yoga Mat lineup expanded (10/15/20mm)",
          "B2B business expansion (PT centers, pilates studios)",
        ],
      },
      {
        year: "2025",
        events: [
          "Brand renewal and official website redesign",
          "Baro Curve released",
          "Half Foam Roller released",
        ],
      },
    ],
  },

  aboutCerts: {
    badge: "Certifications & Patents",
    title: "Certifications & Patents",
    subtitle:
      "FINI Sports guarantees product quality and safety through international certifications and patented technology.",
    certs: [
      {
        title: "ISO 9001:2015 Quality Management System",
        org: "GERMAN CERT",
        number: "GQ-232424",
        date: "2023.01.20",
        scope: "Manufacturing and distribution of sports equipment",
      },
      {
        title: "Patent \u2014 Spinal Stretching Exercise Device",
        org: "KIPO (Korean Intellectual Property Office)",
        number: "No. 10-2443801",
        date: "2022.09.13",
        scope: "Core technology patent for Barospine",
      },
      {
        title: "Trademark Registration \u2014 WADO",
        org: "KIPO (Korean Intellectual Property Office)",
        number: "No. 40-1583819",
        date: "2020.03.09",
        scope: "Class 27: Sports mats and 4 other items",
      },
      {
        title: "Trademark Registration \u2014 FINI",
        org: "KIPO (Korean Intellectual Property Office)",
        number: "No. 40-1583820",
        date: "2020.03.09",
        scope: "Class 10: Medical belts and 10 other items",
      },
    ],
  },

  aboutLocation: {
    badge: "Location",
    title: "How to Find Us",
    subtitle: "Directions to FINI CO., LTD headquarters.",
    addressTitle: "Headquarters Address",
    roadAddr: "24, Oemi-ro, Yangju-si, Gyeonggi-do, South Korea",
    roadAddrLabel: "Street Address",
    lotAddr: "208-1, Nambang-dong, Yangju-si, Gyeonggi-do, South Korea",
    lotAddrLabel: "Lot Address",
    zipLabel: "Zip Code",
    contactTitle: "Contact",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Business Hours",
    hours: "Weekdays 09:00 \u2013 18:00",
    hoursSub: "Lunch 12:00\u201313:00 / Closed on weekends & public holidays",
  },

  wadoPage: {
    badge: "WADO Brand",
    title: "Our Products",
    desc: "WADO is FINI Sports' in-house brand designed for everyday health and wellness. From massage and stretching to posture correction and exercise\u2014find the right product for your needs.",
    allFilter: "All",
    detailOpen: "View Details",
    detailClose: "Close",
    buyBtn: "Buy on Store",
  },

  guideHub: {
    badge: "Exercise Guide",
    title: "Exercise Guide",
    desc: "Learn the correct exercise methods for each category using WADO products.",
    viewGuide: "View Guide",
    categories: [
      {
        title: "Barospine",
        subtitle: "Barospine",
        desc: "Spinal stretching and posture correction exercises",
      },
      {
        title: "Kids",
        subtitle: "Kids",
        desc: "Posture correction exercises for growing children",
      },
      {
        title: "Golf",
        subtitle: "Golf",
        desc: "Flexibility and rotational conditioning for golfers",
      },
      {
        title: "Foam Roller",
        subtitle: "Foam Roller",
        desc: "Self-massage and myofascial release guide",
      },
    ],
  },

  guideTemplate: {
    stretchTitle: "Stretching Guide",
    videoTitle: "Video Guide",
    videoSoon: "Coming Soon",
    videoPlaceholder: "Video guides will be updated soon",
    tipsTitle: "Tips",
    tips: [
      {
        title: "Warm Up First",
        desc: "Light warm-up movements before stretching help prevent injury.",
      },
      {
        title: "Don't Overdo It",
        desc: "Stop immediately if you feel pain. Stretch gradually within a comfortable range.",
      },
      {
        title: "Be Consistent",
        desc: "Short daily sessions are more effective than occasional long ones.",
      },
    ],
  },

  guideBarospine: {
    badge: "Barospine Guide",
    title: "Barospine Exercise Guide",
    desc: "Learn spinal stretching and posture correction exercises using the Barospine. Practice for just 10 minutes a day with proper form.",
    exercises: [
      {
        title: "Basic Stretching",
        desc: "Sit with your hips on the Barospine cradle and slowly lie back, then raise both arms overhead to increase the range of motion in your chest and shoulders. Place the level mat under your neck for comfortable support.",
      },
      {
        title: "Pelvic Stretching",
        desc: "Place one leg folded inward on the high-top of the Barospine with arms extended forward, while the opposite leg is stretched out straight resting on the mid-top. Slowly lean your upper body forward to stabilize the pelvis.",
      },
      {
        title: "Lower Body Stretching",
        desc: "Lie on the floor with your hips at the end of the high-top, tailbone supported on the ground. Place one foot on the Barospine and the opposite ankle on that knee, then gently pull toward your body.",
      },
    ],
  },

  guideKids: {
    badge: "Kids Guide",
    title: "Kids Exercise Guide",
    desc: "An exercise guide using the Barospine designed for growing children. Help your child build good posture habits from an early age.",
    exercises: [
      {
        title: "Kids Basic Stretching",
        desc: "Have the child lie comfortably on the Barospine and extend both arms overhead. This helps with spinal alignment and posture correction for growing children. Perform gently for about 5\u201310 minutes.",
      },
      {
        title: "Kids Abdominal Stretching",
        desc: "Lie face down on the Barospine and slowly lift the upper body using both arms. This movement relaxes the abdominal muscles and increases spinal flexibility.",
      },
      {
        title: "Kids Lower Body Stretching",
        desc: "Sit on the Barospine with legs extended forward, and slowly lean the upper body forward. This improves hamstring and lower back flexibility and can also help relieve growing pains.",
      },
    ],
  },

  guideGolf: {
    badge: "Golf Guide",
    title: "Golf Exercise Guide",
    desc: "A Barospine conditioning guide for golfers. Develop the flexibility and rotational power needed for your swing.",
    exercises: [
      {
        title: "Golf Shoulder Stretching",
        desc: "Lie on the Barospine and spread both arms out to the sides to open up the chest. This expands the shoulder range of motion needed for golf swings and helps prevent shoulder injuries before and after rounds.",
      },
      {
        title: "Golf Spinal Rotation Stretching",
        desc: "Lie with your back on the Barospine, bend your knees, and slowly rotate them side to side. This increases thoracic spine rotation, helping you achieve a smoother swing.",
      },
      {
        title: "Golf Hip Stretching",
        desc: "Sit on the Barospine, place one ankle on the opposite knee, then slowly lie back. This improves hip joint flexibility, supporting stable lower body rotation and power transfer.",
      },
    ],
  },

  guideFoamroller: {
    badge: "Foam Roller Guide",
    title: "Foam Roller Exercise Guide",
    desc: "A self-massage and myofascial release guide using the mini foam roller and half foam roller.",
    exercises: [
      {
        title: "Neck & Shoulder Foam Roller Massage",
        desc: "Place the mini foam roller behind your neck and slowly roll it side to side. This releases tension in the trapezius and cervical muscles, effectively relieving forward head posture and shoulder tightness.",
      },
      {
        title: "Back & Lower Back Foam Roller Stretching",
        desc: "Place the foam roller under your back with knees bent, and slowly roll up and down. This releases the fascia around the thoracic and lumbar spine\u2014highly recommended for those who sit for long periods.",
      },
      {
        title: "Lower Body Foam Roller Release",
        desc: "Place your thighs (front and back) and calves on the foam roller, apply body weight, and roll slowly. Myofascial release before and after exercise helps prevent muscle soreness and aids recovery.",
      },
    ],
  },

  supportPage: {
    badge: "Customer Support",
    title: "Customer Support",
    desc: "Check our FAQ below or contact us directly with any questions.",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "How long does shipping take?",
        a: "Orders are shipped within 1\u20133 business days after confirmation. Delivery typically takes 1\u20132 days after dispatch, though timing may vary by region.",
      },
      {
        q: "How much is shipping?",
        a: "Standard shipping is 3,000 KRW. Free shipping is available on orders over a certain amount. Additional fees may apply for remote or island areas.",
      },
      {
        q: "How do I request an exchange or return?",
        a: "Exchanges and returns are accepted within 7 days of receipt. For change-of-mind returns, the round-trip shipping fee of 6,000 KRW is the customer's responsibility. Defective products are exchanged free of charge.",
      },
      {
        q: "What's the difference between product firmness levels (Lv1, Lv2, Lv3)?",
        a: "Lv1 (Soft) is recommended for sensitive areas or beginners, Lv2 (Medium) for general use, and Lv3 (Hard) for those who prefer strong pressure or have very tight muscles. We recommend starting with Lv1.",
      },
      {
        q: "Can anyone use the Barospine?",
        a: "Most adults can use the Barospine safely. However, if you have a history of spinal surgery or severe disc conditions, please consult a medical professional before use.",
      },
      {
        q: "Do you offer bulk or B2B orders?",
        a: "Yes, we do. For bulk orders for PT studios, yoga centers, pilates studios, hospitals, and more, please contact our customer service at 031-846-7187. We will provide a customized quote.",
      },
      {
        q: "Do you ship internationally?",
        a: "We currently do not offer international shipping; only domestic (South Korea) delivery is available. For international shipping inquiries, please email us at admin@finisports.com.",
      },
    ],
    formTitle: "Contact Us",
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    subjectLabel: "Subject",
    subjectPlaceholder: "Enter the subject of your inquiry",
    messageLabel: "Message",
    messagePlaceholder: "Please describe your inquiry in detail",
    submitBtn: "Send Inquiry",
    contactTitle: "Contact Information",
    contactPhone: "031-846-7187",
    contactPhoneSub: "Weekdays 09:00 \u2013 18:00 (Lunch 12:00 \u2013 13:00)",
    contactEmail: "admin@finisports.com",
    contactEmailSub: "Accepted 24/7, replies within 1\u20132 business days",
    contactAddress: "208-1, Nambang-dong, Yangju-si, Gyeonggi-do (24 Oemi-ro)",
    contactAddressSub: "FINI CO., LTD",
    contactHours: "Weekdays 09:00 \u2013 18:00",
    contactHoursSub: "Closed on weekends & public holidays",
  },

  noticePage: {
    badge: "Notice",
    title: "Notices",
    desc: "Stay up to date with the latest news and announcements from FINI Sports.",
  },

  resourcesPage: {
    badge: "Resources",
    title: "Resources",
    desc: "Download product catalogs, exercise guides, certification documents, and more.",
    downloadNote:
      "For inquiries about resource downloads, please contact admin@finisports.com.",
  },

  products: [
    {
      name: "WADO Single Massage Ball",
      desc: "A self-myofascial release massage ball available in 3 firmness levels (Lv1\u2013Lv3). Precisely targets tight muscles in the neck, shoulders, soles of the feet, and more.",
      detail:
        "The WADO Single Massage Ball comes in 3 firmness levels\u2014Relief Green (Lv1 Soft), Marina Blue (Lv2 Medium), and Blossom Coral (Lv3 Hard)\u2014so you can choose based on your sensitivity and target area. The lacrosse-ball-style spherical design allows precise pressure on narrow areas like the back of the neck, shoulders, soles of the feet, and glutes, effectively releasing tight muscles and fascia.",
      features: [
        "3 firmness levels",
        "Targeted pressure relief",
        "Myofascial release",
        "Compact & portable",
      ],
    },
    {
      name: "WADO Peanut Massage Ball",
      desc: "A dual-sphere peanut design that simultaneously releases muscles on both sides of the spine. Optimized for myofascial release across the back, lower back, calves, and more.",
      detail:
        "The peanut-shaped dual-ball structure cradles the spine in the center groove, massaging both sides simultaneously. It is particularly effective for myofascial release over larger areas such as the back, lower back, calves, and back of the neck. Placing it on the floor and applying body weight delivers deep tissue stimulation.",
      features: [
        "Dual-ball design",
        "Simultaneous bilateral release",
        "Wide area coverage",
        "Deep massage with body weight",
      ],
    },
    {
      name: "WADO Mini Foam Roller",
      desc: "A compact mini foam roller you can use anywhere. Available in 3 firmness levels (Deep Pink, Alice Mint, Cosmic Latte) for customized myofascial care.",
      detail:
        "Designed at half the size of a standard foam roller, it's easy to use at the office, while traveling, or at home. Available in Deep Pink (Lv3 Hard), Alice Mint (Lv2 Medium), and Cosmic Latte (Lv1 Soft) for tailored myofascial care. The grid-pattern surface delivers optimal muscle stimulation.",
      features: [
        "Compact size",
        "3 firmness levels",
        "Grid-pattern surface",
        "Easy to carry",
      ],
    },
    {
      name: "WADO Half Foam Roller",
      desc: "A half-cylinder design for balance training and stretching in one. Perfect for foot arch support, core stability, and rehabilitation exercises.",
      detail:
        "The half-cylinder shape has a flat base that sits securely on the floor, making it ideal for balance training. It can be used for foot arch stretching, core stability work, lower body strength training, and a variety of rehabilitation and pilates exercises.",
      features: [
        "Stable half-round design",
        "Balance training",
        "Core strengthening",
        "Rehabilitation exercises",
      ],
    },
    {
      name: "WADO Barospine",
      desc: "An ergonomically curved spinal stretching and correction device. Expert-recommended with premium materials and safe design for 10-minute daily self-care.",
      detail:
        "Designed with an ergonomic curve that follows the spine's natural alignment. Made with premium materials and a safe design, it is recommended by professionals as a spinal stretching device. Just 10 minutes of daily use can help relieve forward head posture, rounded shoulders, and spinal tension.",
      features: [
        "Ergonomic curve",
        "Premium materials",
        "Expert recommended",
        "10-minute daily self-care",
      ],
    },
    {
      name: "WADO Barospine Pro",
      desc: "The Pro version of the Barospine. With a more precisely engineered curvature, it focuses on improving forward head posture, rounded shoulders, and spinal alignment. A self-rehab solution bridging hospital and home.",
      detail:
        "An upgraded version of the Barospine, featuring a more precisely calculated curvature that maximizes correction effects for the neck and back. Specifically designed to address common modern posture issues\u2014forward head posture, rounded shoulders, and spinal misalignment\u2014it serves as a rehabilitation solution connecting clinical physical therapy with at-home self-care.",
      features: [
        "Precision-engineered curvature",
        "Forward head & rounded shoulder improvement",
        "Rehabilitation solution",
        "Professional grade",
      ],
    },
    {
      name: "WADO Baro Curve",
      desc: "A posture correction tool that restores the natural C-curve of the neck and lower back. Just 5 minutes a day helps build proper posture habits.",
      detail:
        "Designed to restore the natural C-curves of the neck (cervical lordosis) and lower back (lumbar lordosis). Just 5 minutes of daily use helps realign a compromised spinal curve and develop good posture habits. Its lightweight, slim design makes it easy to use anywhere.",
      features: [
        "C-curve restoration",
        "5 minutes a day",
        "Slim design",
        "Healthy posture habits",
      ],
    },
    {
      name: "WADO Spark Mat",
      desc: "A massage mat with full-body acupressure points. Available in Soft and Hard firmness, and 3 colors\u2014Linen Beige, Black, and Stone Gray\u2014to blend naturally with any interior.",
      detail:
        "A massage mat with strategically placed nodes to stimulate acupressure points across the entire body. Choose between Soft and Hard firmness levels, catering to sensitive users and those seeking strong stimulation alike. Available in Linen Beige, Black, and Stone Gray to complement any interior.",
      features: [
        "Full-body acupressure points",
        "Soft / Hard 2 levels",
        "3 color options",
        "Interior-friendly design",
      ],
    },
    {
      name: "SPARK KIT",
      desc: "A synergy set combining the Spark Mat and Mini Foam Roller. Use the foam roller on the acupressure mat for complete full-body myofascial release and stretching.",
      detail:
        "Pairs the Spark acupressure mat with the WADO Mini Foam Roller in one set. Using the mini foam roller on the acupressure mat provides full-body myofascial release and deep stretching in a single session. The ideal starter set for home care beginners.",
      features: [
        "Mat + Foam Roller set",
        "Full-body myofascial release",
        "Synergy effect",
        "Great for beginners",
      ],
    },
    {
      name: "SPARK KIT+",
      desc: "An all-in-one kit with the Spark Mat, Mini Foam Roller, and Massage Ball. Everything you need for home care\u2014from beginner to professional\u2014in a single set.",
      detail:
        "An all-in-one home care kit that includes the Spark Mat, Mini Foam Roller, and Massage Ball. From acupressure and myofascial release to targeted area massage, it covers a wide range of self-care needs. A complete package that satisfies beginners and professionals alike.",
      features: [
        "All-in-one kit",
        "3-piece set",
        "Versatile self-care",
        "Complete package",
      ],
    },
    {
      name: "WADO Pilates Ring",
      desc: "Made from durable, flexible material for both inward and outward resistance exercises. An essential pilates accessory for full-body toning of the thighs, arms, and chest.",
      detail:
        "Crafted from highly durable, flexible material, it supports both inward (adduction) and outward (abduction) resistance exercises. An essential pilates accessory that targets and strengthens various muscle groups across the body, including the inner thighs, inner arms, and chest.",
      features: [
        "Inward / outward exercises",
        "Full-body toning",
        "Durable & flexible material",
        "Pilates essential",
      ],
    },
    {
      name: "WADO NBR Yoga Mat",
      desc: "A premium yoga mat with non-slip NBR material for a stable grip. Choose from 10mm, 15mm, or 20mm thickness to find your perfect cushioning.",
      detail:
        "Made from high-density NBR (Nitrile Butadiene Rubber) material, it delivers excellent cushioning and a non-slip grip. Available in three thicknesses\u201410mm, 15mm, and 20mm\u2014so you can choose based on your exercise style and floor surface. Suitable for yoga, pilates, home training, and more.",
      features: [
        "NBR non-slip material",
        "3 thickness options",
        "High-density cushioning",
        "Multi-purpose use",
      ],
    },
  ],
};
