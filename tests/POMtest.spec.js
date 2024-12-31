
//const{test,expect}= require('@playwright/test')
import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
test('test',async({page})=>{
    //Log in
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('pavanol','test@123')
    await page.waitForTimeout(5000)



    //Home Page


    //Cart

})


