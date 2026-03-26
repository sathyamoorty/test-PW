import {test, expect, Locator} from '@playwright/test';  
import { log } from 'console';

test("Invalid email",async ({page})=>{
    console.log("Test: Validating invalid email error message");
    
    await page.goto("https://rbot.co.in/");
    console.log("Navigated to login page");  
    await page.getByPlaceholder("Enter your email id").fill("setuprsoftai");
    await page.getByPlaceholder("Enter your password").fill("Rsoft!@3456");   
    console.log("Email and password entered");    
    await page.getByRole("button", { name: "SIGN IN" }).click();
    console.log("Sign in button clicked");
    const errorMessage = page.getByText("Invalid Email id");
    await errorMessage.waitFor({ state: 'visible', timeout: 5000 });
    if (await errorMessage.isVisible()) {
        console.log("Error message 'Invalid Email id' is displayed");
        await expect(errorMessage).toBeVisible();
    } else {
        console.log("FAILED: Error message 'Invalid Email id' was not displayed");
    }
})
test("invalid password",async ({page})=>{
        await page.goto("https://rbot.co.in/");
        await page.getByPlaceholder("Enter your email id").fill("setup@rsoftai.com");
        await page.getByPlaceholder("Enter your password").fill("RSoft");
        await page.getByRole("button", { name: "SIGN IN" }).click();
        const passerr=page.getByText("Incorrect Password");
       await passerr.waitFor({state:"visible",timeout:5000});
        if(await passerr.isVisible()){
            console.log("Error message 'Incorrect Password' is displayed");
            await expect(passerr).toBeVisible();
        }
        else{
            log("FAILED: Error message 'Incorrect Password' was not displayed");
        }
    })
test("missing email and password",async({page})=>{
 await page.goto("https://rbot.co.in/");
 await page.getByRole("button", { name: "SIGN IN" }).click();    
 const emailerr=page.getByText("Email is required");
 await emailerr.waitFor({state:"visible",timeout:5000});
 const passerr=page.getByText("Password is required");
 await passerr.waitFor({state:"visible",timeout:5000});
 if(await emailerr.isVisible() && await passerr.isVisible()){
    console.log("Error messages for missing email and password are displayed");
 }
 else{
    console.log("There is not messsage is displayed for missing email and password");
 }
});

test("both correct",async({page})=>
{
    await page.goto("https://rbot.co.in/");
    await page.getByPlaceholder("Enter your email id").fill("setup@rsoftai.com");
    await page.getByPlaceholder("Enter your password").fill("Rsoft!@3456");
    await page.getByRole("button", { name: "SIGN IN" }).click();
    const dash1=await page.getByAltText("User").isVisible()
    console.log(dash1)
    if(dash1){
        console.log("Login successful, dashboard is visible");
    }
    else{
        console.log("Login failed, dashboard is not visible");
    }
});