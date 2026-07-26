import { test, expect } from '@playwright/test';

test.describe('Sanity Studio CMS Route Test Suite', () => {
  test('/studio route loads embedded Sanity Studio UI without crashing', async ({ page }) => {
    const response = await page.goto('/studio');
    expect(response?.status()).toBe(200);

    // Give Sanity Studio UI bundle a moment to mount in DOM
    await page.waitForTimeout(2000);

    // Verify page container mounted without 404 or server crash
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });
});
