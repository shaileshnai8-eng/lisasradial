import { test, expect } from '@playwright/test';

test('has correct restaurant details', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');

  // Check Title
  await expect(page).toHaveTitle(/Lisa's Radial Cafe/);

  // Check Hero Section
  const heroTitle = page.locator('#hero h2');
  await expect(heroTitle).toContainText("Lisa's Radial Cafe");

  // Check About Section
  const aboutSection = page.locator('#about');
  await expect(aboutSection).toContainText("A Traditional Diner Experience in Omaha");

  // Check Contact Info in Footer
  const footer = page.locator('#footer');
  await expect(footer).toContainText('817 N 40th St');
  await expect(footer).toContainText('Omaha, NE 68131');
  await expect(footer).toContainText('402-551-2176');

  // Check Menu Item
  const menuItem = page.locator('.menu-item').filter({ hasText: 'Blueberry Pancakes' });
  await expect(menuItem).toBeVisible();
  await expect(menuItem).toContainText('$8.95');

  // Check Theme Toggle
  const toggle = page.locator('#theme-toggle');
  await toggle.click();
  await expect(page.locator('body')).toHaveClass(/light-mode/);
  await expect(page.locator('#theme-icon')).toHaveClass(/bi-sun/);
});
