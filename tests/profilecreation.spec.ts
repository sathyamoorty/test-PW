import { test, expect, type Page } from "@playwright/test";

const url = "https://rdot.in";
// let Random:any;
// Random = Math.random().toString(36).substring(2, 3);
// console.log(Random,'ggg');



async function login(page: Page) {
  await page.goto(url);

  await page.getByRole("textbox", { name: "Company Name" }).nth(0).fill("PRIYAN");
  await page.getByPlaceholder("User Name").nth(0).fill("rsoft");
  await page.getByPlaceholder("Enter Password").fill("RSoft!@345");
  await page.getByRole("button", { name: "Login" }).click();
}

async function getToastMessage(page: Page) {
  const toast = page.locator("//div[@class='toast-message']");
//   await expect(toast).toBeVisible({ timeout: 15_000 });
  return (await toast.textContent())?.trim() ?? "";
}

async function gotoProfileCreation(page: Page) {
  await login(page);
    console.log("Logged in successfully");
  await page
    .locator(
      "//li[@class='dropdown dropdown-user nav-item']//a[@class='dropdown-toggle nav-link dropdown-user-link']//img",
    )
    .click();

  await page.getByText("CRM Setting").nth(1).click();
  await page.getByRole("button", { name: "User & Access Control" }).click();
  await page.locator('label:has-text("Profile")').click();
  await page.getByRole("button", { name: "Creating Profile" }).click();

  await expect(page.locator("[name='profilename']").nth(0)).toBeVisible();
}

test.describe("Profile Creation", () => {
  test.beforeEach(async ({ page }) => {
    test.setTimeout(90_000);
    await gotoProfileCreation(page);
  });

  test("Profile creation", async ({ page }) =>
 {
    
    await page.locator("[name='profilename']").nth(0).fill("sathya");
    await page.getByRole("button", { name: "save" }).click();
    expect(await getToastMessage(page)).toContain("Description Can't be Empty!!!");
      await page.locator('label:has-text("Profile")').click();
    await page.getByRole("button", { name: "Creating Profile" }).click();
    await page.locator("[name='description']").nth(0).fill("This is a test profile");
    await page.getByRole("button", { name: "save" }).click();
    expect(await getToastMessage(page)).toContain("Profile Name Can't be Empty!!!");
      await page.locator('label:has-text("Profile")').click();
    await page.getByRole("button", { name: "Creating Profile" }).click();
     await page.locator("[name='profilename']").nth(0).fill("sathya");
    await page.locator("[name='description']").nth(0).fill("This is a test profile");
    await page.getByRole("button", { name: "save" }).click();
    expect(await getToastMessage(page)).toContain("Profile Created Successfully!!!");
    


  });

//   test("Give the data in description field", async ({ page }) => {
//     await page.locator("[name='description']").nth(0).fill("This is a test profile");
//     await page.getByRole("button", { name: "save" }).click();
//     expect(await getToastMessage(page)).toContain("Profile Name Can't be Empty!!!");
//   });

//   test("Give the data in all fields", async ({ page }) => {
//     await page.locator("[name='profilename']").nth(0).fill("Alan");
//     await page.locator("[name='description']").nth(0).fill("This is a test profile");
//     await page.getByRole("button", { name: "save" }).click();
//     expect(await getToastMessage(page)).toContain("Profile Created Successfully!!!");
//   })
});
