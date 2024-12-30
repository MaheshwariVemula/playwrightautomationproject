const { test, expect } = require("@playwright/test");
test("Date picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  // await page.fill("#datepicker","12/25/2025")

  //date picker
  const year = "2024";
  const month = "March";
  const date = "20";

  await page.click("#datepicker"); //open calender
  while(true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();
    if (currentYear == year && currentMonth == month) {
      break;
    }
    await page.locator('[title="Next"]').click()
  }

  await page.waitForTimeout(5000);
});
