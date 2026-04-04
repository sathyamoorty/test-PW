import { test, expect, type Page } from "@playwright/test";

const url = "https://rdot.in";
const dashNav = "https://rdot.in/public/admin/Dashboard";
const companyNameField = { role: "textbox" as const, name: "Company Name" };
const loginBtn = { role: "button" as const, name: "Login" };

type LoginData = {
  companyName?: string;
  userName?: string;
  password?: string;
};

async function login(page: Page, { companyName, userName, password }: LoginData) 
{
  await page.goto(url);

  if (companyName) {
    await page.getByRole(companyNameField.role, { name: companyNameField.name }).nth(0).fill(companyName);
  }

  if (userName) {
    await page.getByPlaceholder("User Name").nth(0).fill(userName);
  }

  if (password) {
    await page.getByPlaceholder("Enter Password").fill(password);
  }

  await page.getByRole(loginBtn.role, { name: loginBtn.name }).click();
}

async function getToastMessage(page: Page) {
  return page.locator("//div[@class='toast-message']").textContent();
}

test("invalid company name", async ({ page }) => {
  await login(page, {
    companyName: "123456789",
    userName: "SURESH",
    password: "Rsoft!@3456",
  });

  console.log(await getToastMessage(page));
});

test("invalid username", async ({ page }) => {
  await login(page, {
    companyName: "SATHYAMOORTHY",
    userName: "alan",
    password: "Rsoft!@3456",
  });

  console.log(await getToastMessage(page));
});

test("invalid password", async ({ page }) => {
  await login(page, {
    companyName: "SATHYAMOORTHY",
    userName: "rsoft",
    password: "Rsoft",
  });

  console.log(await getToastMessage(page));
});

test("missing company name", async ({ page }) => {
  await login(page, {});
  console.log(await getToastMessage(page));
});

test("Valid inputs", async ({ page }) => {
  await login(page, {
    companyName: "SATHYAMOORTHY",
    userName: "rsoft",
    password: "RSoft!@345",
  });

  await test.step("User lands on dashboard after login", async () => {
    await page
      .locator(
        "//li[@class='dropdown dropdown-user nav-item']//a[@class='dropdown-toggle nav-link dropdown-user-link']//img",
      )
      .click();
    console.log("Clicked on the profile icon");

    await page.getByText("CRM Setting").nth(1).click();
    console.log("Clicked on CRM Setting");

    await page.waitForTimeout(2000);
    await page.getByRole("button", { name: "User & Access Control" }).click();
    await page.waitForTimeout(2000);
    console.log("Clicked on User & Access Control");

    await page.locator('label:has-text("Profile")').click();
    console.log("Clicked on Profile");
    await page.waitForTimeout(2000);
  });
//   await test.step("Continue the flow from the dashboard", async () => {
 
//  console.log("Clicked on CRM Setting");
//  })
    
  // await test.step("User lands on dashboard after login", async () => {
  //   await expect(page).toHaveURL(dashNav);
  //   console.log("Login successful!, Navigated to Dashboard");
  // });

  // await test.step("Continue the flow from the dashboard", async () => {
  //   await page.locator("span.avatar").nth(0).click();
  // });
});
