import type { Page } from "@playwright/test";
import { env } from "../../utils/env";
import { normalizeText } from "../../utils/helpers";

type LoginInput = {
  companyName?: string;
  username?: string;
  password?: string;
};

export class LoginPage {
  constructor(private readonly page: Page) {}

  private get companyNameInput() {
    return this.page.getByRole("textbox", { name: "Company Name" }).nth(0);
  }

  private get userNameInput() {
    return this.page.getByPlaceholder("User Name").nth(0);
  }

  private get passwordInput() {
    return this.page.getByPlaceholder("Enter Password");
  }

  private get loginButton() {
    return this.page.getByRole("button", { name: "Login" });
  }

  get toastMessage() {
    return this.page.locator("//div[@class='toast-message']");
  }

  async open() {
    await this.page.goto(env.baseUrl);
  }

  async login(data: LoginInput) {
    if (data.companyName) {
      await this.companyNameInput.fill(data.companyName);
    }

    if (data.username) {
      await this.userNameInput.fill(data.username);
    }

    if (data.password) {
      await this.passwordInput.fill(data.password);
    }

    await this.loginButton.click();
  }

  async getToastMessage() {
    return normalizeText(await this.toastMessage.textContent());
  }
}
