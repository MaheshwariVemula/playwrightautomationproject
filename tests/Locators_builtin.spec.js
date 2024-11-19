
const {test, expect} = require('@playwright/test');

test('Builtin-Locators', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // getByAltText method
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //getByPlaceholder method
   await page.getByPlaceholder('Username').fill("Admin");

   await page.getByPlaceholder('password').fill("admin123");

    //getByRole Method

  await page.getByRole('button',{type:'submit'}).click()

  //getByText method

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    await expect(await page.getByText(name)).toBeVisible();
    

    


})


