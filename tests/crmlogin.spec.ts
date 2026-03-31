import {test, expect, Locator} from "@playwright/test";

test("invalid company name",async({page})=>{
    await page.goto("https://rdot.in");
    await page.getByRole("textbox", { name: "Company Name" }).nth(0).fill("123456789");
    await page.getByPlaceholder("User Name").nth(0).fill("SURESH");
    await page.getByPlaceholder("Enter Password").fill("Rsoft!@3456");
    await page.getByRole("button", { name: "Login" }).click();
    const errmessage=await page.locator("//div[@class='toast-message']").textContent()  ;
    console.log(errmessage);
})
test("invalid username",async({page})=>{
    await page.goto("https://rdot.in");
    await page.getByRole("textbox", { name: "Company Name" }).nth(0).fill("SATHYAMOORTHY");
    await page.getByPlaceholder("User Name").nth(0).fill("qwertyuiop");
    await page.getByPlaceholder("Enter Password").fill("Rsoft!@3456");
    await page.getByRole("button", { name: "Login" }).click();
    const errmessage=await page.locator("//div[@class='toast-message']").textContent()  ;
    console.log(errmessage);
})
test("invalid password",async({page})=>{
    await page.goto("https://rdot.in");
    await page.getByRole("textbox", { name: "Company Name" }).nth(0).fill("SATHYAMOORTHY");
    await page.getByPlaceholder("User Name").nth(0).fill("rsoft");
    await page.getByPlaceholder("Enter Password").fill("Rsoft");
    await page.getByRole("button", { name: "Login" }).click();
    const errmessage=await page.locator("//div[@class='toast-message']").textContent()  ;
    console.log(errmessage);
})
test("missing company name",async({page})=>{
    await page.goto("https://rdot.in");
    // await page.getByPlaceholder("User Name").nth(0).fill("rsoft");
    // await page.getByPlaceholder("Enter Password").fill("Rsoft!@3456");
    await page.getByRole("button", { name: "Login" }).click();
    const errmessage=await page.locator("//div[@class='toast-message']").textContent()  ;
    console.log(errmessage);
})

test("Valid inputs", async ({ page }) => {

    await page.goto("https://rdot.in");

    await page.getByRole("textbox", { name: "Company Name" }).nth(0).fill("SATHYAMOORTHY");
    await page.getByPlaceholder("User Name").nth(0).fill("rsoft");
    await page.getByPlaceholder("Enter Password").fill("RSoft!@345");

    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://rdot.in/public/admin/Dashboard");    

});