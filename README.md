# Ticketchai — Modern B2B Travel Platform Landing Portal

A production-grade, responsive B2B travel portal landing platform built for **Ticketchai** (wordmark: `ticketchai`), empowering travel agencies across Bangladesh with instant flight issuance, worldwide hotel bookings, travel eSIMs, and insurance with automated wallet credit and competitive commissions.

---

## 🎨 Strict Brand System

| Token | Hex / Value | Usage |
|---|---|---|
| **Primary** | `#0F3E2C` (Deep Forest Green) | Logo "ticket", primary CTA buttons, dark feature panels, active navigation, icon tiles |
| **Secondary** | `#13131B` (Near-Black Navy) | Logo "chai", main headings, dark gradients, strong body text |
| **Green 50** | `#F0F7F3` | Soft badge backgrounds, input focus tints, card hover states |
| **Green 100** | `#DCEDE3` | Subtle borders, light chip badges, progress indicators |
| **Green 200** | `#B8DBC7` | Border accents, icon container outlines |
| **Green 500** | `#1F7A52` | Intermediate text highlights, success tags |
| **Green 700** | `#0F3E2C` | Deep green brand foundation |
| **Green 900** | `#0A2A1E` | Hover states for primary buttons |
| **Warm Accent**| `#F2A93B` (Amber) | Highlight words ("B2B"), promo badges, CTA arrow accents, star tags |
| **Background** | `#F4F8F6` | Soft off-white portal background |
| **Cards** | `#FFFFFF` | 16px radius (`rounded-2xl`), 1px `rgba(15, 62, 44, 0.08)` border, soft shadow |
| **Gradients** | `linear-gradient(135deg, #0F3E2C 0%, #13131B 100%)` | Hero background ambiance, dark feature panels, footer |
| **Font** | **Plus Jakarta Sans** | Headings (700-800 weight), Body (400-600 weight) via `next/font` |

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router) + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system variables
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/) (`embla-carousel-react` + `embla-carousel-autoplay`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: `react-hook-form` + `zod`
- **Typography**: Plus Jakarta Sans loaded with zero layout shift via `next/font/google`
- **SEO & Social**: OpenGraph, dynamic sitemap (`sitemap.ts`), robots directives (`robots.ts`), semantic HTML5

---

## 📂 Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout, Plus Jakarta Sans, metadata, SEO tags
│   ├── page.tsx                # Master landing page assembling all 10 core sections
│   ├── globals.css             # Tailwind v4 theme tokens, brand variables, animations
│   ├── icon.svg                # Dynamic SVG favicon (green leaf + 't' mark)
│   ├── sitemap.ts              # Dynamic search engine sitemap
│   ├── robots.ts               # Robots crawling directives
│   ├── about/page.tsx          # About Ticketchai & technology pillars
│   ├── agent-benefits/page.tsx # Commission tiers & agency growth perks
│   ├── login/page.tsx          # Agent portal login with form validation & demo auto-fill
│   ├── signup/page.tsx         # Agency registration with trade license & validation
│   └── contact/page.tsx        # 24/7 Agency support desk & inquiry form
├── components/
│   ├── Logo.tsx                # SVG wordmark with custom leaf 'i' dot (default, white, icon)
│   ├── Header.tsx              # Sticky glass header with mobile hamburger drawer
│   ├── Hero.tsx                # Hero section with tilted CSS laptop mockup & floating chips
│   ├── PromoCarousel.tsx       # Auto-playing Embla banner carousel with pagination
│   ├── WhyChooseUs.tsx         # 4 value cards with hover lift & corner accents
│   ├── AirlineMarquee.tsx      # Infinite scrolling airline marquee (text-only compliance)
│   ├── Solutions.tsx           # 4 numbered travel solution cards (01 to 04)
│   ├── AboutSection.tsx        # Story narrative & dark glass feature card
│   ├── Onboarding.tsx          # 4-step onboarding journey with connecting line
│   ├── CommissionRewards.tsx   # Commission breakdown, stat tiles & interactive ledger rows
│   ├── Footer.tsx              # Dark brand footer with regulatory placeholder badges
│   └── WhatsAppButton.tsx      # Floating WhatsApp quick-chat button (#25D366)
├── data/
│   └── content.ts              # Single source of truth for all copy and text content
├── public/
│   ├── favicon.svg             # Vector favicon for browser tabs
│   └── logo.png                # Reference raster logo
├── capture-screenshots.js      # Headless Chrome testing script
├── package.json
└── tsconfig.json
```

---

## 🛡️ Legal & Trademark Compliance

- **No Third-Party Airline Logos**: In compliance with international intellectual property and commercial partner guidelines, airline carriers in the marquee section are presented with clean text-only badges and official airline codes (`EK`, `QR`, `SQ`, `BG`, `BS`, etc.).
- **No Third-Party Certification Logos**: IATA and BASIS badges in the footer are neutral outlined placeholder cards with standard verified status and clear TODO markers for authorized enterprise onboarding.
- **Brand Identity**: Custom vector `<Logo />` reproduces the exact "ticketchai" wordmark with the organic green leaf sitting on the stem of the "i".

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📱 Responsive Testing Viewports

- **Desktop**: 1440px / 1280px / 1024px (fluid grid, 3-card promo carousel, side-by-side hero mockup)
- **Tablet**: 768px (2-column feature cards, full responsive navigation)
- **Mobile**: 375px / 360px (single-column cards, hamburger drawer, zero horizontal scroll)

---

## 📋 TODOs for Production Onboarding

1. **Airlines Commercial Licenses**: Replace carrier text-only badges with authorized vector airline crests once direct bilateral distribution contracts are signed.
2. **Regulatory Certifications**: Upload official high-resolution IATA and BASIS partnership certificate numbers in the footer trust slots.
3. **Backend API Integration**: Connect `/login` and `/signup` API routes with the production authentication service and database.
