
  const {test, expect} = require('@playwright/test');
//import { test, expect } from "@playwright/test";

test('Locators Page', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // Click on the login button by its ID
    await page.click("id=login2");

  // Add additional assertions or actions if needed


  // provide user name
  //await page.locator('#loginusername').fill('pavanol');
  // await page.fill('#loginusername');

  await page.fill('#loginusername','pavanol');

  // // provide password 
   await page.fill("input[id='loginpassword']",'test@123');

  // // click login button  -xpath

   await page.click("//button[normalize-space()='Log in']");

  // // verify logout link presence -xpath

   const logoutlink = page.locator("(//a[normalize-space()='Log out'])[1]")

   await expect(logoutlink).toBeVisible();

  await page.close()



});
