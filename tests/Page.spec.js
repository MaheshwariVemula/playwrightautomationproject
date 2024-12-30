const { test, expect } = require("@playwright/test");
test("Page", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator("#productTable");

  //1)  total number of rows & columns
  const columns = await table.locator("thead tr th");
  console.log("Number of columns:", await columns.count());
  expect(await columns.count()).toBe(4);

  const rows = await table.locator("tbody tr");
  console.log("Number of rows:", await rows.count());
  expect(await rows.count()).toBe(5);

  //2) select check box for product 2
  /*const machedRow=rows.filter({
    has: page.locator('td'),
    hasText: 'Laptop'

  })*/

  
  await machedRow.locator('input').check()
  await page.waitForTimeout(5000);
});
