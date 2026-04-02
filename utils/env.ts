import { APP_ROUTES } from "../constants/routes";

export const env = {
  baseUrl: process.env.BASE_URL ?? APP_ROUTES.login,
};
