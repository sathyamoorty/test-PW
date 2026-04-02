import { expect, type Page } from "@playwright/test";
import { APP_ROUTES } from "../../constants/routes";

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async expectLoaded() {
    await expect(this.page).toHaveURL(APP_ROUTES.dashboard);
  }
}
