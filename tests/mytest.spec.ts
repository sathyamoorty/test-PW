import { test, expect } from '@playwright/test';

test("this is the first test", async ({ page }) => {
   await page.goto("https://rbot.co.in");
   await expect(page).toHaveTitle("Chatbot");
   expect(page).toHaveURL("https://rbot.co.in");
});