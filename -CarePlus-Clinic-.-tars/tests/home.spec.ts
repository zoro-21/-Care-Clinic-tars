import { expect, test } from '@playwright/test';

test('home page loads core content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('CarePlus Clinic').first()).toBeVisible();
  await expect(page.getByText('Complete care services')).toBeVisible();
  await expect(page.getByLabel('Open CarePlus AI assistant')).toBeVisible();
});
