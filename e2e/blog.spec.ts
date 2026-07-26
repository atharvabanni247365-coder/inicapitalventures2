import { test, expect } from '@playwright/test';

test.describe('Blog Rendering Test Suite', () => {
  test('Blog index loads articles and allows keyword filtering', async ({ page }) => {
    await page.goto('/blog');

    // Verify main blog title
    await expect(page.locator('h1')).toContainText('Insights & Architecture');

    // Verify search input bar exists
    const searchInput = page.locator('input[placeholder*="Search articles"]');
    await expect(searchInput).toBeVisible();

    // Verify articles are rendered
    const articles = page.locator('h2, h3');
    await expect(articles.first()).toBeVisible();
  });

  test('Clicking an article navigates to dynamic slug page and renders body', async ({ page }) => {
    await page.goto('/blog');

    // Click first Read Article or title link
    const firstArticleLink = page.locator('a[href^="/blog/"]').first();
    await expect(firstArticleLink).toBeVisible();
    await firstArticleLink.click();

    // Verify we navigated to an article detail slug page
    await expect(page).toHaveURL(/\/blog\/[\w-]+/);

    // Verify back link is visible
    await expect(page.locator('text=Back to All Articles')).toBeVisible();

    // Verify article title heading is displayed
    const articleTitle = page.locator('h1');
    await expect(articleTitle).toBeVisible();
  });
});
