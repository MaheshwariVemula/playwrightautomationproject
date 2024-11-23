const { test, expect } = require("@playwright/test");

test("Handle checkboxes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //single checkbox
  await page.locator("//input[@id='sunday' and @type='checkbox']").check();
  // await page.check("(//input[@id='sunday'])[1]");
  await expect(
    await page.locator("//input[@id='sunday' and @type='checkbox']")
  ).toBeChecked();
  await expect(
    await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()
  ).toBeTruthy();
  await expect(
    await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()
  ).toBeFalsy();

  //How to Handle Multiple Selectors
  const checkboxLocators = [
    "//input[@id='sunday' and @type='checkbox']",
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='tuesday' and @type='checkbox']",
    "//input[@id='friday' and @type='checkbox']",
    "//input[@id='saturday' and @type='checkbox']",
  ];
  for (const locator of checkboxLocators) { //select multiple checkboxes
    await page.locator(locator).check();
  }
  await page.waitForTimeout(5000);

  for (const locator of checkboxLocators) { // unselect multiple selectors which are already selected
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
  }

  await page.waitForTimeout(5000);
});
