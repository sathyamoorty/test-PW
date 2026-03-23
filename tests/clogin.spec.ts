import {test, expect, Locator} from '@playwright/test';  
import { log } from 'console';

test("valid Login", async ({page}) => {
    await page.goto("https://rbot.co.in/");
    const email:Locator=page.getByPlaceholder("Enter your email id");
    email.fill("setup@rsoftai.com");
    console.log("this is the email id");
    const pass:Locator=page.getByPlaceholder("Enter your password");
    pass.fill("Rsoft!@3456");
    console.log("this is the password");
    const btn:Locator=page.getByRole("button", {name:"SIGN IN"});
    await btn.click();
    log("this is the sign in button");
    const url=page.url();
    // expect(url).toBe("https://rbot.co.in/Dashboard");

}  );