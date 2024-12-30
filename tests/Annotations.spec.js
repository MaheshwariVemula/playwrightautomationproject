const{test,expect, chromium}=require('@playwright/test')

//only
/*test.only('test1',async({page})=>{
    console.log("This is test1.....")
})
*/
//skip
/*test.skip('test2',async({page})=>{
    console.log("This is test2.....")
})
*/
/*
test.skip('test3',async({page, browserName})=>{
    console.log("This is test3.....")
    if(browserName==="webkit")
        {
            test.skip()
        }
})
*/

//Fixme
/*test('test4', ({page})=>{
    test.fixme()
    console.log("this is test 4")
})
*/

//Fail

/*test('test5',async({page})=>{
    test.fail() //expectation
    console.log("this is test5")
    expect(1).toBe(2); //actual
})*/

//
/*
test('test6', async({page,browserName})=>{
    console.log("this is test6")
    if(browserName==='firefox'){
        test.fail()
    }
    
})
*/

test('test7',async({page})=>{
    test.slow()
    console.log("this is test7")
    await page.goto("https://www.demoblaze.com/index.html")
    
})