# 🎈 Sanity.io Headless CMS Setup Guide (Step-by-Step for Beginners)

Welcome! This guide will walk you through setting up **Sanity.io** to manage your blog articles directly from your website. You do **not** need any coding experience—just follow these simple steps!

---

## 📍 Step 1: Create a Free Sanity.io Account

1. Open your web browser and go to [https://www.sanity.io](https://www.sanity.io).
2. Click the **"Get Started"** or **"Sign Up"** button in the top right corner.
3. Sign in using your **Google account**, **GitHub account**, or email.

---

## 📍 Step 2: Create Your New Project

1. Once logged into your Sanity dashboard ([https://www.sanity.io/manage](https://www.sanity.io/manage)), click **"Create new project"**.
2. Give your project a name (for example: `Aura Architects Blog`).
3. Select the **Free / Community plan** (which gives you generous free usage limits).
4. Click **"Create project"**.

---

## 📍 Step 3: Copy Your Project ID

1. In your project dashboard, look near the top left corner of the screen.
2. You will see a short code called **Project ID** (for example: `abc123xyz`).
3. Click the copy icon or write down this **Project ID**.

---

## 📍 Step 4: Add Your Project ID to `.env.local`

1. Open the project folder on your computer in your text editor (or File Explorer).
2. Create a new file named **`.env.local`** in the main project folder.
3. Copy and paste the following lines into your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-26
```

> 💡 **Important**: Replace `your_actual_project_id_here` with the Project ID you copied in Step 3! Save the file.

---

## 📍 Step 5: Access Your Embedded Sanity Studio

1. Start your website (or open your live website URL).
2. Go to the URL: `http://localhost:3000/studio` (or `https://your-domain.com/studio`).
3. Log in with your Sanity account credentials.
4. You will see your visual content editor!

### Creating Your First Blog Article:
- Click on **"Blog Post"** under Content.
- Click **"Create new Blog Post"**.
- Enter your **Title**, **Slug** (click *Generate*), **Author**, **Published Date**, and **Rich Text Body**.
- Click the green **"Publish"** button at the bottom right.

🎉 **That's it! Your new article will immediately appear live on your website at `/blog`!**
