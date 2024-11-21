const { test, expect } = require("@playwright/test");

test("AssertionsTest", async ({ page }) => {
  //open app url
  await page.goto("https://demo.nopcommerce.com/register");

  //1) expect(page).toHaveURL()   page has URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  //2) expext(page).toHaveTitle() page has Title
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //3) expect(locator).toBeVisible() Element is visible
const logoElement=await page.locator('.header-logo')
await expect(logoElement).toBeVisible()


//4) expect(locator).toBeEnabled()  Control is enabled
const searchBox=await page.locator('#small-searchterms')
await expect(searchBox).toBeEnabled()

//5) await expect(locator).toBeChecked()  Checkbox is checked
const radioButton = await page.locator('#gender-male')
await radioButton.click() // select Radio Button
await expect(radioButton).toBeChecked()

//check box
const newsLetter = await page.locator('#Newsletter')
await expect(newsLetter).toBeChecked()

//6) await expect(locator).toHaveAttribute()    Element has a DOM attribute

const registerButton = await page.locator('#register-button')
await expect(registerButton).toHaveAttribute('type', 'submit')

//7) await expect(locator).toHaveText()    Element matches text

await expect(await page.locator('.page-title h1')).toHaveText('Register') //Full Text

//8) await expect(locator).toContainText()  Element contains text

await expect(await page.locator('.page-title h1')).toContainText('Reg') //Partial Text
});



