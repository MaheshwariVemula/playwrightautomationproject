//Reference (https://playwright.dev/docs/input#upload-files)

const {test,expect}= require('@playwright/test')
test('Single File', async({page})=>{
    await page.goto('https://www.foundit.in/')

})

/* test('Multiple File', async({page})=>{

})
*/