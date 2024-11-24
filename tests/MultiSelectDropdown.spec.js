const { test, expect } = require("@playwright/test");

test("Handle dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // select multiple options from multi select dropdown
  // await page.selectOption("#colors",['Red', 'Blue','Yellow'])

  //Assertions
  //1) check number of options in Dropdown

  //const options = await page.locator("#colors option")
  //await expect(options).toHaveCount(7);

  //2) check number of options by using js array

  //const options = await page.$$("#colors option");

  //console.log("Number of options:", options.length);
  // await expect(options.length).toBe(7);

  //3) check presence of value in the Dropdown

  const content = await page.locator("#colors").textContent();
  await expect(content.includes("Blue")).toBeTruthy();

  await page.waitForTimeout(5000);
});
