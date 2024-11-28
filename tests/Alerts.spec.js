const{test,expect}=require('@playwright/test');
test.skip('Alert with OK', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling   //Dialog window handler
   page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain("I am an alert box!")

    dialog.accept();

   })
   await page.click("//button[@id='alertBtn']")
    await page.waitForTimeout(5000);
  

});


test.skip('Confirmation Dialog-Alert with OK and cancel ', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling   //Dialog window handler
   page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain("Press a button!")

    await dialog.accept(); //close by ok button
    // await dialog.dismiss(); //close by using cancel

   })
   await page.click("#confirmBtn")
   await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
   //await expect(page.locator("#demo")).toHaveText("you pressed Cancel!")
    await page.waitForTimeout(5000);
  

});

test('Prompt Dialog ', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling   //Dialog window handler
   page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain("Please enter your name:")
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept('John'); // close by using OK button

    
   })
    await page.click("#promptBtn")
   await expect(page.locator("#demo")).toHaveText("Hello John! How are you today?");
   //await expect(page.locator("#demo")).toHaveText("you pressed Cancel!")
    await page.waitForTimeout(5000);
  
})
