# 🧪 Website Health & Automated Testing Guide (For Beginners)

This guide explains how to run automated tests to check your website's health, verify that all pages load correctly, and make sure future updates never break your website!

---

## 🎯 What Do These Tests Check?

1. **Smoke Tests (`smoke.spec.ts`)**: Checks that your homepage loads, the main title is visible, and all header navigation links (`Home`, `Features`, `Blog`, `Contact`) work cleanly.
2. **Blog Tests (`blog.spec.ts`)**: Checks that your blog listing page displays articles, the search bar works, and clicking an article correctly opens the full reading view.
3. **CMS Studio Tests (`studio.spec.ts`)**: Checks that your embedded Sanity Studio (`/studio`) loads without crashing.

---

## 🚀 How to Run the Tests

### Option 1: Quick Command Line Test (Headless)
Open your terminal inside the project folder and run:

```bash
npm run test:e2e
```

- Playwright will automatically build your production site, start the web server, run all test suites in the background, and report **`Passed`** status!

---

### Option 2: Visual Interactive UI Runner
If you want to see the tests running visually in an interactive window:

```bash
npm run test:e2e:ui
```

- This opens the **Playwright UI Dashboard**, where you can click **Play** to watch the browser navigate your site live!

---

## 📊 Viewing Test Reports

If any test fails or if you want to see detailed screenshots and traces, run:

```bash
npx playwright show-report
```

This will open an HTML report in your browser showing exact step-by-step verification logs for every page.
