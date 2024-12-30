const { test, expect } = require("@playwright/test");
test("Keyboard actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");
  // await page.locator('name="text1"').fill("welcome to automation")

  await page.type('[name="text1"]', "welcome to automation");

  //command+A
  await page.keyboard.press("Meta+A");

  //command+C

  await page.keyboard.press("Meta+C");

  //tab
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  //command+V
  await page.keyboard.press("Meta+V");

  await page.waitForTimeout(5000)
});
