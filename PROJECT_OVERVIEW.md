# 🏛️ Master Project Overview & System Audit (`PROJECT_OVERVIEW.md`)

This document provides a comprehensive health audit, architectural breakdown, complete route map, launch checklist, and next-step prompt extensions for this modern **Next.js**, **Tailwind CSS**, and **Sanity CMS** research blog platform.

---

## 🏗️ 1. System Architecture Summary

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                            NEXT.JS 14 APP ROUTER                            │
│           (React 18 • TypeScript • Tailwind CSS • Glassmorphism)            │
└───────┬──────────────────────┬─────────────────────┬─────────────────┬──────┘
        │                      │                     │                 │
        ▼                      ▼                     ▼                 ▼
┌──────────────┐      ┌─────────────────┐   ┌─────────────────┐ ┌──────────────┐
│  SANITY CMS  │      │  RESEND ACTIONS │   │ VERCEL PLATFORM │ │  PLAYWRIGHT  │
│ Studio & GROQ│      │ Server Actions  │   │ Analytics & Speed│ │ E2E Testing  │
│  (/studio)   │      │   (/contact)    │   │   (Insights)    │ │   Suite      │
└──────────────┘      └─────────────────┘   └─────────────────┘ └──────────────┘
```

- **Frontend Core**: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Lucide icons.
- **Design Tokens**: Pure Black (`#000000`), Champagne Gold (`#C5A880`), Deep Anthracite (`#1A1A1A`), Alabaster (`#F8F8F8`), Warm Platinum (`#D3D3D3`).
- **Content Engine**: Embedded Sanity Studio at `/studio` with GROQ queries, PortableText rich text rendering, and fallback post handling.
- **Form & Email Dispatch**: Server Actions with Resend API integration (`resend.emails.send()`) and React Email templates.
- **Dynamic SEO**: Dynamic `/sitemap.xml`, `/robots.txt`, dynamic OG Image generator Edge route (`/api/og`), and JSON-LD Article structured data.
- **CI/CD & Testing**: Playwright E2E test suites running on GitHub Actions CI.

---

## 📊 2. Audit & Build Status

| Health Check Category | Status | Details |
| :--- | :---: | :--- |
| **Production Build Compilation** | **`PASS`** | Compiled with zero errors (`npm run build`, 10/10 static pages optimized) |
| **TypeScript Type Checks** | **`PASS`** | Zero type errors or missing definitions |
| **Kebab-Case Naming Discipline** | **`PASS`** | 100% adherence across all components, lib, types, and app routes |
| **Playwright E2E Test Suite** | **`PASS`** | 5/5 test suites passed in 8.4 seconds (`npm run test:e2e`) |
| **Security Headers & CSP** | **`PASS`** | Configured in `next.config.mjs` |

---

## 🗺️ 3. Complete Route Map

| URL Path | Type | Description |
| :--- | :---: | :--- |
| **`/`** | `Static` | Hero landing experience, feature cards grid, stats counter, & contact section |
| **`/blog`** | `Static` | Research blog index with real-time title search and category tag filtering |
| **`/blog/[slug]`** | `Dynamic` | Individual research article reader with Table of Contents and PortableText |
| **`/studio`** | `Dynamic` | Embedded Sanity Studio CMS admin dashboard |
| **`/contact`** | `Static` | Direct inquiry contact page with Server Action & Resend email form |
| **`/sitemap.xml`** | `Static` | Dynamic XML sitemap listing all published article URLs for search engines |
| **`/robots.txt`** | `Static` | Crawler rules pointing to sitemap.xml |
| **`/api/og`** | `Dynamic (Edge)` | Open Graph social share image generator route (`ImageResponse`) |
| **`/api/contact`** | `Dynamic` | Public API endpoint for contact form inquiries |
| **`/api/newsletter`** | `Dynamic` | Public API endpoint for newsletter subscription |

---

## 🚀 4. Pre-Launch Checklist

- [ ] **GitHub Repository**: Code pushed to `https://github.com/YOUR_USERNAME/YOUR_REPO`.
- [ ] **Sanity CMS Setup**: Account created at [Sanity.io](https://www.sanity.io), Project ID added to `.env.local` & Vercel.
- [ ] **Resend Email Setup**: Free account created at [Resend.com](https://resend.com), API key added as `RESEND_API_KEY`.
- [ ] **Vercel Deployment**: GitHub repo imported into Vercel Dashboard and deployed.
- [ ] **GoDaddy Custom Domain**: GoDaddy DNS updated:
  - `A Record` (`@`) → `76.76.21.21`
  - `CNAME Record` (`www`) → `cname.vercel-dns.com`

---

## 🔮 5. Next-Step Feature Prompts

Below are customized prompts you can copy and paste into future AI sessions to add popular extra features:

### 💡 Prompt Option 1: Dark / Light Mode Toggle
```text
Act as an expert Next.js and Tailwind CSS architect. Please add a Dark / Light Mode toggle switch to our nav-bar.tsx using next-themes. Ensure that the dark mode uses Pure Black (#000000) as the main background, Warm Platinum for borders, and Champagne Gold for active highlights.
```

### 💡 Prompt Option 2: Newsletter Subscription Popup Modal
```text
Act as an expert Next.js and Tailwind CSS architect. Please build an interactive newsletter subscription popup modal component (newsletter-modal.tsx) that appears after a visitor spends 8 seconds on the homepage. Integrate it with our /api/newsletter route.
```

### 💡 Prompt Option 3: Social Media Share Buttons Component
```text
Act as an expert Next.js and Tailwind CSS architect. Please create a social-share-bar.tsx component on our /blog/[slug] article pages allowing readers to share the current research paper directly to Twitter/X, LinkedIn, Facebook, and via email.
```

### 💡 Prompt Option 4: Sanity Comment Section for Research Blog
```text
Act as an expert Next.js, Tailwind CSS, and Sanity CMS architect. Please add a comment schema to our Sanity schemas and build an interactive comment submission & display component at the bottom of our /blog/[slug] pages so readers can post comments on research articles.
```

### 💡 Prompt Option 5: Portfolio Projects / Case Studies Showcase Route
```text
Act as an expert Next.js, Tailwind CSS, and Sanity CMS architect. Please create a new /projects portfolio showcase section (and /projects/[slug] detail route) with a custom project schema in Sanity. Remember to update the sitemap.ts GROQ query to include the new project routes.
```
