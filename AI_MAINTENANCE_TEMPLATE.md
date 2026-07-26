# 🤖 AI Maintenance Prompt Template (`AI_MAINTENANCE_TEMPLATE.md`)

Use this document whenever you need an AI coding assistant (like Antigravity or ChatGPT) to make updates, add new features, fix bugs, or adjust styling on this website. 

Simply copy the prompt template below, fill in the bracketed `[ ]` details, and paste it to the AI.

---

## 📋 Copy & Paste Maintenance Prompt Template

```text
Act as an expert Next.js, Tailwind CSS, and Sanity CMS architect working on this codebase in Maintenance Mode.

### Task Type: [Feature Request / Bug Fix / Styling Adjustment]
[Describe what you want to add, fix, or change in detail here. Example: "Add a newsletter popup modal that appears after 5 seconds."]

---

### Mandatory Architectural Rules & Constraints for AI:

1. READ CORE SPECIFICATIONS FIRST:
   - Inspect prd.md, implementation_plan.md, and security.md before writing any code.
   - Respect the established visual design language (Pure Black #000000, Champagne Gold #C5A880, Deep Anthracite #1A1A1A, Alabaster #F8F8F8, Warm Platinum #D3D3D3).

2. ENFORCE STRICT KEBAB-CASE NAMING:
   - All new or modified files, directories, components, utilities, and routes MUST use strict lower-case kebab-case (e.g., newsletter-modal.tsx, user-utils.ts).
   - Never use PascalCase or camelCase for file names to prevent case-sensitivity deployment failures on Vercel's Linux servers.

3. MANDATORY VERIFICATION BEFORE DECLARING SUCCESS:
   - Run the production build command to confirm clean compilation:
     cmd.exe /c "set PATH=C:\Users\banni\.antigravity\node\node-v20.15.1-win-x64;%PATH% && npm run build"
   - Run the Playwright E2E and smoke tests to ensure zero regressions:
     cmd.exe /c "set PATH=C:\Users\banni\.antigravity\node\node-v20.15.1-win-x64;%PATH% && npm run test:e2e"

4. UPDATE DOCUMENTATION:
   - If adding new features or components, update task.md and walkthrough.md to document your changes.

5. DYNAMIC SITEMAP & CONTENT TYPES:
   - If adding new Sanity content types (such as "Projects", "Case Studies", or "Services"), update the GROQ query and URL generator inside src/app/sitemap.ts to include the new dynamic routes in the sitemap.

6. RESEND EMAIL SERVICE SETUP:
   - To send live emails from the /contact form, sign up for a free account at https://resend.com, add & verify your custom domain, generate an API key, and add RESEND_API_KEY=re_your_api_key to your .env.local file and Vercel Environment Variables settings.
```

---

## 💡 Quick Examples of Common Maintenance Tasks

### Example A: Adding a New Component
```text
Act as an expert Next.js, Tailwind CSS, and Sanity CMS architect working on this codebase in Maintenance Mode.

Task Type: Feature Request
Please create a new testimonials carousel component on the homepage displaying client reviews with Champagne Gold rating stars and glassmorphic card styling.

[Copy mandatory rules from template above]
```

### Example B: Fixing a Bug
```text
Act as an expert Next.js, Tailwind CSS, and Sanity CMS architect working on this codebase in Maintenance Mode.

Task Type: Bug Fix
The mobile navigation menu drawer closes too quickly when tapping outside. Please refine the backdrop click handler in src/components/common/nav-bar.tsx.

[Copy mandatory rules from template above]
```

### Example C: Updating Design System Tokens
```text
Act as an expert Next.js, Tailwind CSS, and Sanity CMS architect working on this codebase in Maintenance Mode.

Task Type: Styling Adjustment
Please adjust the hover shadow glow on all action-button.tsx components to be slightly softer and increase the border radius on glass-card.tsx panels.

[Copy mandatory rules from template above]
```
