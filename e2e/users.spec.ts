import { test, expect } from '@playwright/test';

test('happy path: users list to details', async ({ page }) => {
  await page.goto('/users');

  await expect(
    page.getByText('Users Operations Dashboard'),
  ).toBeVisible();

  await expect(
    page.getByPlaceholder('Search by name or email'),
  ).toBeVisible();

  const firstUser = page.locator('a[href^="/users/"]').first();

  await expect(firstUser).toBeVisible();

  const userName = await firstUser.textContent();

  await firstUser.click();

  await expect(page).toHaveURL(/\/users\/\d+/);

  if (userName) {
    await expect(
      page.getByText(userName.trim()),
    ).toBeVisible();
  }

  await expect(
    page.getByText(/Company/i),
  ).toBeVisible();

  await expect(
    page.getByText(/Address/i),
  ).toBeVisible();

  await expect(
    page.getByText(/Posts/i),
  ).toBeVisible();

  await expect(
    page.getByText(/Todos/i),
  ).toBeVisible();

  await page.getByText(/Back to list/i).click();

  await expect(page).toHaveURL('/users');
});