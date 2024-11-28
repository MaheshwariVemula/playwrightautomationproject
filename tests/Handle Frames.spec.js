const{test,expect}=require('@playwright/test')
test('Handle frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')
    
})