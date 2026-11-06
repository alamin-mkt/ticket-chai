export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface PromoCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  theme: "gradient-dark" | "gradient-green" | "gradient-navy";
  hasAppButtons?: boolean;
}

export interface WhyChooseUsCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface AirlinePartner {
  id: string;
  name: string;
  region: string;
  code: string;
}

export interface SolutionCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  badge: string;
  iconName: string;
  href: string;
}

export interface OnboardingStep {
  step: string;
  title: string;
  description: string;
  badgeText: string;
}

export const siteContent = {
  meta: {
    title: "Ticketchai — B2B Travel Portal for Travel Agencies in Bangladesh",
    description:
      "Empower your travel agency with Ticketchai. Instant flight bookings, hotel reservations, travel eSIMs, and insurance with wallet credit and highest commission rates.",
    siteName: "Ticketchai",
    siteUrl: "https://ticketchai.com",
    keywords: [
      "B2B Travel Platform Bangladesh",
      "Flight API Bangladesh",
      "Travel Agency Portal",
      "Ticketchai",
      "Hotel Booking for Agents",
      "Travel eSIM Bangladesh",
      "Travel Insurance B2B",
      "Airlines Inventory",
    ],
  },

  header: {
    apiText: "API",
    apiHref: "#api",
    signUpText: "Sign Up",
    signUpHref: "/signup",
    loginText: "Login",
    loginHref: "/login",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/#solutions" },
      { label: "Airlines", href: "/#airlines" },
      { label: "About", href: "/about" },
      { label: "Agent Benefits", href: "/agent-benefits" },
      { label: "Contact", href: "/contact" },
    ],
  },

  hero: {
    badges: {
      airlines: "700+ Airlines",
      support: "24/7 Agent Support",
    },
    headlinePrefix: "Your Trusted",
    headlineAccent: "B2B",
    headlineSuffix: "TRAVEL PLATFORM",
    subtext:
      "One powerful B2B platform for flights, hotels, SIM & insurance, with instant booking, wallet credit and competitive commissions.",
    ctaPrimary: {
      text: "Become an Agent",
      href: "/signup",
    },
    ctaSecondary: {
      text: "Login Dashboard",
      href: "/login",
    },
    dashboardPreview: {
      agencyName: "Skylink Travels Ltd.",
      agentId: "TC-88921",
      walletBalance: "BDT 384,500",
      creditLimit: "BDT 500,000",
      activeBookings: 14,
      totalCommission: "BDT 42,850",
      recentFlight: {
        from: "DAC (Dhaka)",
        to: "DXB (Dubai)",
        airline: "Direct Carrier 208",
        departureDate: "Tomorrow, 08:45 AM",
        status: "Confirmed",
        fare: "BDT 46,200",
        commission: "+ BDT 3,250",
      },
    },
  },

  promoCarousel: {
    title: "Special Agent Promotions",
    subtitle: "Exclusive campaigns and mobile capabilities for verified travel agencies.",
    cards: [
      {
        id: "promo-1",
        badge: "Special Fare Access",
        title: "Best Experience on Global Flights",
        description:
          "Access exclusive B2B wholesale tariffs, private net fares, and instant ticket re-issuance across leading international carriers.",
        ctaText: "Explore Flight Rates",
        ctaHref: "/signup",
        theme: "gradient-dark",
      },
      {
        id: "promo-2",
        badge: "Ticketchai Agent App",
        title: "Download Mobile App",
        description:
          "Issue PNRs, manage your agency wallet, and send vouchers to clients straight from your iOS or Android device anywhere.",
        ctaText: "Get Download Link",
        ctaHref: "#download-app",
        hasAppButtons: true,
        theme: "gradient-navy",
      },
      {
        id: "promo-3",
        badge: "Volume Incentives",
        title: "Exclusive Agent Offers & Commission",
        description:
          "Unlock up to 7.5% instant commission, seasonal bonus pools, and automated cash rebates credited directly to your agency wallet.",
        ctaText: "View Commission Tiers",
        ctaHref: "/agent-benefits",
        theme: "gradient-green",
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "WHY CHOOSE US",
    heading: "Trusted by Travel Agencies",
    subtext:
      "Purpose-built B2B tools engineered to give modern travel agencies maximum profitability and zero friction.",
    cards: [
      {
        id: "wcu-1",
        title: "1050+ Airlines",
        description:
          "Comprehensive global and domestic carrier inventory with real-time seat availability and GDS integration.",
        iconName: "Plane",
        metric: "1050+ Carriers",
      },
      {
        id: "wcu-2",
        title: "Best Prices Guaranteed",
        description:
          "Enjoy special net B2B fares that help your agency quote competitive rates and maximize markups on every booking.",
        iconName: "TrendingUp",
        metric: "Net B2B Rates",
      },
      {
        id: "wcu-3",
        title: "Travel Rewards",
        description:
          "Earn commission rewards, wallet cashbacks, and seasonal milestone incentives on every ticket issued.",
        iconName: "Award",
        metric: "Up to 7.5% Return",
      },
      {
        id: "wcu-4",
        title: "24/7 Support",
        description:
          "Dedicated agency support desk available 24/7 via phone, chat, and ticketing to resolve urgent flight reissues & changes.",
        iconName: "Headphones",
        metric: "Sub-2m Response",
      },
    ],
  },

  airlineMarquee: {
    eyebrow: "TRUSTED TRAVEL NETWORK",
    heading: "Connected with Global Airline Inventories",
    subtext:
      "Connecting travel agencies with direct airline APIs, global distribution systems, and consolidator inventories worldwide.",
    statChip: "700+ Airline Inventory",
    footerLine: "Reliable inventory • Competitive fares • Instant booking",
    /*
      NOTE: In compliance with trademark and licensing regulations, we present airline
      partner names using clean text-only badges and abstract carrier monograms.
      Real airline logos require explicit bilateral marketing agreements.
    */
    airlines: [
      { id: "ek", name: "Emirates Airlines", region: "Middle East", code: "EK" },
      { id: "qr", name: "Qatar Airways", region: "Middle East", code: "QR" },
      { id: "sq", name: "Singapore Airlines", region: "Southeast Asia", code: "SQ" },
      { id: "bg", name: "Biman Bangladesh Airlines", region: "South Asia", code: "BG" },
      { id: "bs", name: "US-Bangla Airlines", region: "South Asia", code: "BS" },
      { id: "sv", name: "Saudia Airlines", region: "Middle East", code: "SV" },
      { id: "tk", name: "Turkish Airlines", region: "Europe / Asia", code: "TK" },
      { id: "ey", name: "Etihad Airways", region: "Middle East", code: "EY" },
      { id: "g9", name: "Air Arabia", region: "Middle East", code: "G9" },
      { id: "fz", name: "flydubai", region: "Middle East", code: "FZ" },
      { id: "mh", name: "Malaysia Airlines", region: "Southeast Asia", code: "MH" },
      { id: "ku", name: "Kuwait Airways", region: "Middle East", code: "KU" },
    ],
  },

  solutions: {
    eyebrow: "OUR TRAVEL SOLUTIONS",
    heading: "Everything Your Agency Needs",
    subtext:
      "A single unified portal to fulfill flights, accommodations, roaming data, and travel insurance for your customers.",
    cards: [
      {
        number: "01",
        title: "Flight Booking",
        subtitle: "Domestic & International",
        description:
          "Instant PNR issuance, automated void & refund requests, seat selection, and special group quotes for your agency.",
        tag: "700+ Airlines",
        badge: "B2B Solution",
        iconName: "Plane",
        href: "/signup",
      },
      {
        number: "02",
        title: "Hotel Booking",
        subtitle: "Worldwide Inventory",
        description:
          "Over 1.2 million verified hotels, resorts, and apartments with instant voucher delivery and flexible cancellation terms.",
        tag: "1.2M+ Properties",
        badge: "B2B Solution",
        iconName: "Building2",
        href: "/signup",
      },
      {
        number: "03",
        title: "Travel SIM",
        subtitle: "SIM & eSIM Worldwide",
        description:
          "Instant eSIM QR codes and physical data packages covering 160+ countries with effortless high-speed roaming connectivity.",
        tag: "160+ Countries",
        badge: "B2B Solution",
        iconName: "Smartphone",
        href: "/signup",
      },
      {
        number: "04",
        title: "Travel Insurance",
        subtitle: "Worldwide Protection",
        description:
          "Comprehensive travel medical policies, baggage delay protection, and trip cancellation coverage issued in under 60 seconds.",
        tag: "Global Coverage",
        badge: "B2B Solution",
        iconName: "ShieldCheck",
        href: "/signup",
      },
    ],
  },

  about: {
    eyebrow: "ABOUT TICKETCHAI",
    headingPrefix: "Empowering Travel Agencies",
    headingSuffix: "with smarter travel technology.",
    paragraph1:
      "Ticketchai was built to bridge the operational gap for travel agencies across Bangladesh and beyond. We replace manual booking chaos with high-speed automated APIs, flexible credit facilities, real-time ticket reissues, and round-the-clock agent operations.",
    paragraph2:
      "Whether you are an established IATA travel firm or an ambitious retail travel consultant, Ticketchai supplies the infrastructure, inventory depth, and financial flexibility your business needs to flourish.",
    learnMoreText: "Learn More About Ticketchai →",
    learnMoreHref: "/about",
    panel: {
      badge: "B2B PLATFORM ADVANTAGE",
      title: "One Platform. More Possibilities.",
      items: [
        {
          title: "Built for Travel Agencies",
          description:
            "A dedicated B2B environment designed specifically around agency workflows, multi-staff roles, and custom client markups.",
          iconName: "Building",
        },
        {
          title: "Flexible Wallet & Credit",
          description:
            "Seamless top-up via local banking channels, bKash, Nagad, or credit lines to ensure non-stop booking operations.",
          iconName: "Wallet",
        },
        {
          title: "Fast & Reliable Booking",
          description:
            "High-availability search engines guaranteeing sub-second response times and immediate PNR generation without lag.",
          iconName: "Zap",
        },
      ],
      statusDot: "Trusted B2B travel ecosystem",
    },
  },

  onboarding: {
    eyebrow: "FAST & SIMPLE ONBOARDING",
    heading: "Start Your B2B Journey",
    subtext: "Four simple steps to launch ticket issuance with Ticketchai.",
    steps: [
      {
        step: "01",
        title: "Create Account",
        description: "Submit agency profile, trade license number, and primary contact details.",
        badgeText: "Step 1",
      },
      {
        step: "02",
        title: "Get Approved",
        description: "Our dedicated verification team reviews and approves your agency profile swiftly.",
        badgeText: "Step 2",
      },
      {
        step: "03",
        title: "Fund Wallet",
        description: "Top up via instant bank transfer, mobile financial service, or approved credit limit.",
        badgeText: "Step 3",
      },
      {
        step: "04",
        title: "Start Booking",
        description: "Search 700+ airlines, book hotels & eSIMs, and start earning instant commissions.",
        badgeText: "Step 4",
      },
    ],
    pillBanner: {
      text: "Ready to get started? Register your agency and join our B2B travel network.",
      ctaText: "Become an Agent →",
      ctaHref: "/signup",
    },
  },

  commission: {
    eyebrow: "MAXIMIZE AGENCY REVENUE",
    headingLine1: "More bookings.",
    headingLine2: "More opportunity.",
    subtext:
      "Grow your agency revenue with transparent commissions, volume-based milestone rewards, and instant transaction settlement without hidden deductions.",
    ctaText: "Explore Agent Benefits →",
    ctaHref: "/agent-benefits",
    panel: {
      badge: "B2B BENEFIT",
      title: "Competitive Commission",
      stat1: {
        label: "Flexible",
        sub: "Wallet & Credit Facilities",
      },
      stat2: {
        label: "Scale",
        sub: "Booking Growth & Tiered Bonus",
      },
      rows: [
        {
          id: "cr-1",
          title: "Competitive Commission",
          description: "Earn top-tier commissions on domestic and international ticket sales.",
          iconName: "TrendingUp",
        },
        {
          id: "cr-2",
          title: "Flexible Wallet",
          description: "Manage top-ups, transaction logs, credit balance, and refunds from one dashboard.",
          iconName: "CreditCard",
        },
        {
          id: "cr-3",
          title: "Clear Transactions",
          description: "Real-time ledger with automated receipts and exportable agency financial statements.",
          iconName: "Receipt",
        },
      ],
    },
  },

  footer: {
    description:
      "Ticketchai is your trusted travel partner. Smart bookings, competitive deals, and reliable support, all in one platform.",
    links: {
      solutions: [
        { label: "Flight Booking", href: "/#solutions" },
        { label: "Hotel Booking", href: "/#solutions" },
        { label: "Travel SIM & eSIM", href: "/#solutions" },
        { label: "Travel Insurance", href: "/#solutions" },
      ],
      agency: [
        { label: "About Us", href: "/about" },
        { label: "Agent Benefits", href: "/agent-benefits" },
        { label: "Become an Agent", href: "/signup" },
        { label: "Agent Login", href: "/login" },
      ],
      legal: [
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms & Conditions", href: "#terms" },
        { label: "Refund Policy", href: "#refund" },
        { label: "Purchase & Sale Terms", href: "#purchase-terms" },
      ],
    },
    copyright: "© 2026 Ticketchai. All rights reserved.",
    developerNote: "Developed BY Al Amin Khan",
  },

  whatsapp: {
    phoneNumber: "+8801700000000",
    message: "Hello Ticketchai support, I would like to inquire about agency registration.",
    tooltip: "Chat with Agent Support on WhatsApp",
  },
};
