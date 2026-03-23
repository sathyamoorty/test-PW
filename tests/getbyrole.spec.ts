import {test, expect, Locator} from '@playwright/test';

test("This is the test case for the getbyrole()",async ({page})=>
{
 await page.goto("https://rbot.co.in");
 const btnText:Locator=page.getByRole("button",{name:"SIGN IN"})
 await expect(btnText).toBeVisible();

})

test("This is the test case for the getbyrole() for link",async ({page})=>
{
 await page.goto("https://rbot.co.in/showform?formid=868931&nurams=rthree_bot");
 const btnText:Locator=page.getByRole("textbox")
 await btnText.fill("test");
 await expect(btnText).toBeVisible();

})

test("this is for link loactors",async ({page})=>
{
    await page.goto("https://rbot.co.in");
    const link:Locator=page.getByRole("link",{name:"Forgot Password?"})
    // await expect(link).toBeVisible();
    const link1:string=page.url();
    console.log(link1);
    
    
})