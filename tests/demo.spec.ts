import { test, expect } from "@playwright/test";

test("shows validation and then welcome", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.click("#submitBtn");
  await expect(page.locator("#result")).toHaveText("Please enter your name");

  await page.fill("#nameInput", "Carlos");
  await page.click("#submitBtn");
  await expect(page.locator("#result")).toHaveText("Welcome Carlos 🚀");
});