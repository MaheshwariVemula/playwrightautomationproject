const { test, expect } = require("@playwright/test");

test("Soft assertions", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  /*Hard Assetion
  await expect(page).toHaveTitle("STORE");

  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

  await expect(page.locator('.navbar-brand')).toBeVisible();*/

  //Soft assetions

  await expect.soft(page).toHaveTitle("STORE");

  await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");

  await expect.soft(page.locator('.navbar-brand')).toBeVisible()


});
