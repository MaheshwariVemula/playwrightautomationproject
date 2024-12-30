const{test,expect}=require('@playwright/test')
test('page screenshot',async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'HomePage.png'})

})

test('Full page screenshot',async({page})=>{

})
test('Element screenshot',async({page})=>{

})