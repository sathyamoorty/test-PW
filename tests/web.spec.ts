import { test, expect, Locator } from '@playwright/test';

test("test the getByAltText locator", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    const image: Locator = page.getByAltText("Image");
    console.log("this is the getByAltText");
});

test("test getText locators", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    const word: Locator = page.getByText("Location not set");
    await expect(word).toBeVisible();
    console.log("this is to take the getText");
});

test("test rsoft image", async ({ page }) => {
    await page.goto("https://rsoftai.com/");

    const word: Locator = page.getByAltText("RSoft Ai   Sales Improvement Solution");

    // Correct assertion with await
    await expect(page).toHaveURL("https://www.rsoftai.com/");
});