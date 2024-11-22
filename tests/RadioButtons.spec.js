const { test,expect } = require("@playwright/test");

test('radio buttons',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Radio Button
    await page.locator("//input[@id='male']").check(); //male
    // await page.check("//input[@id='male']");
    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();//male

    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();//female




    await page.waitForTimeout(5000) //Pausing Code

})

