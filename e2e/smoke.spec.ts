import { test, expect } from '@playwright/test';

test.describe('Smoke Test Suite', () => {
  test('Homepage loads successfully with visible main heading', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    // Verify header brand logo text
    await expect(page.locator('header').getByText('AURA.')).toBeVisible();

    // Verify main hero headline
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText('Architecting');

    // Verify core specs highlight bar
    await expect(page.getByText('Strict Security Policy')).toBeVisible();
  });

  test('Main navigation links are present and unbroken', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('header nav');
    await expect(nav).toBeVisible();

    // Check Home link
    const homeLink = nav.locator('a[href="/"]');
    await expect(homeLink).toBeVisible();

    // Check Blog link
    const blogLink = nav.locator('a[href="/blog"]');
    await expect(blogLink).toBeVisible();

    // Check Features link
    const featuresLink = nav.locator('a[href="/#features"]');
    await expect(featuresLink).toBeVisible();

    // Check Contact link
    const contactLink = nav.locator('a[href="/contact"]');
    await expect(contactLink).toBeVisible();
  });
});
