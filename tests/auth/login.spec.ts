import { test, expect } from "../../fixtures/testSetup";

type LoginScenario = {
  testName: string;
  companyName?: string;
  username?: string;
  password?: string;
};

type LoginData = {
  invalidLoginScenarios: LoginScenario[];
  validLogin: LoginScenario;
};

const loginData = require("../../data/auth/loginData.json") as LoginData;

for (const scenario of loginData.invalidLoginScenarios) {
  test(scenario.testName, async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(scenario);

    await expect(loginPage.toastMessage).toBeVisible();
    console.log(await loginPage.getToastMessage());
  });
}

test(loginData.validLogin.testName, async ({ loginPage, dashboardPage }) => {
  await loginPage.open();
  await loginPage.login(loginData.validLogin);

  await dashboardPage.expectLoaded();
});
