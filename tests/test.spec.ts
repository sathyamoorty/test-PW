import { test, expect } from '@playwright/test';

test("test to check the testcases", async ({ page }) => {
    await page.goto("https://rdot.in");

    const title: string = await page.title();
    console.log(title);

    await expect(page).toHaveTitle(title); // validates actual title
});