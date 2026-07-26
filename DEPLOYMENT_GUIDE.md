# 🚀 Vercel Deployment & GitHub Actions CI/CD Guide

This guide explains how to connect your Next.js application to **Vercel** for automated deployments, how **GitHub Actions** runs your E2E tests automatically on every push, and critical best practices for avoiding deployment build errors.

---

## 📍 Step 1: Push Your Code to GitHub

1. Open your terminal in the project directory.
2. Push your project to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete luxury Next.js platform with Sanity & Playwright"
   git push origin main
   ```

---

## 📍 Step 2: Connect Your Repository to Vercel

1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Select your GitHub repository from the list and click **"Import"**.
4. In the **Environment Variables** section, add your Sanity CMS credentials:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `your_actual_sanity_project_id`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `NEXT_PUBLIC_SANITY_API_VERSION` = `2026-07-26`
5. Click **"Deploy"**.

Vercel will automatically build your Next.js project and assign your site a production URL (e.g., `https://aura-architects.vercel.app`).

---

## 🔄 How Vercel Preview URLs & GitHub Actions Work Together

### 1. Vercel Preview Deployments
Whenever you create a new feature branch or Pull Request (PR), Vercel automatically builds a temporary **Preview Deployment URL** (e.g. `https://aura-architects-git-feat-blog-aura.vercel.app`). This allows you to visually review live changes before merging to `main`.

### 2. GitHub Actions Playwright Pipeline (`.github/workflows/playwright.yml`)
On every push or pull request to `main`, GitHub Actions automatically:
- Caches `node_modules` and Playwright browsers for fast build times.
- Compiles the Next.js production build (`npm run build`).
- Executes all smoke and E2E test suites (`npm run test:e2e`).
- Uploads test reports if any assertions fail.

If tests fail, GitHub will block merging the Pull Request, protecting your live production site from regressions!

---

## 📊 Viewing Vercel Analytics & Speed Insights Dashboards

Once your application is deployed to Vercel, page view traffic and Core Web Vitals performance are automatically tracked in a 100% privacy-friendly way:

1. **Analytics Dashboard (Traffic & Page Views)**:
   - Log into your [Vercel Dashboard](https://vercel.com/dashboard), select your project, and click the **"Analytics"** tab.
   - View top visited pages (`/`, `/blog`, `/contact`), visitor geography, device types, and referrer traffic without setting up complex tracking cookies or Google Analytics.

2. **Speed Insights Dashboard (Core Web Vitals)**:
   - Click the **"Speed Insights"** tab in your Vercel project settings.
   - Monitor real-user performance metrics including **LCP** (Largest Contentful Paint), **FID/INP** (Interaction to Next Paint), and **CLS** (Cumulative Layout Shift) to ensure your website stays blazingly fast.


> [!CAUTION]
> **Case-Sensitivity Mismatch Hazard**:
> On **Windows** and **macOS**, file paths are case-insensitive by default (e.g. importing `./components/NavBar` when the file is named `nav-bar.tsx` might work locally).
> 
> However, **Vercel's deployment servers run Linux**, which is strictly **case-sensitive**. If an import statement or folder name has incorrect letter casing, your Vercel build will instantly fail with a `ModuleNotFoundError`!
>
> ### Our Kebab-Case Safeguard:
> To prevent case-sensitivity deployment bugs:
> 1. All directories, components, utilities, and routes strictly use lower-case `kebab-case` (e.g., `nav-bar.tsx`, `glass-card.tsx`, `post-card.tsx`, `blog-utils.ts`).
> 2. All TypeScript import paths match the exact lower-case file name.
> 3. Always check your Git status before pushing to confirm no accidental capital letters exist in folder names.
