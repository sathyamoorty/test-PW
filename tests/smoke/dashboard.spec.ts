import { test } from "../../fixtures/testSetup";

type LoginScenario = {
  companyName?: string;
  username?: string;
  password?: string;
};

type LoginData = {
  validLogin: LoginScenario;
};

const loginData = require("../../data/auth/loginData.json") as LoginData;

test("dashboard smoke after login", async ({ loginPage, dashboardPage }) => {
  await loginPage.open();
  await loginPage.login(loginData.validLogin);

  await dashboardPage.expectLoaded();
});
