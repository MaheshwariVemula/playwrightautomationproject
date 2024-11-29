const{test,expect}=require('@playwright/test')
test('Handle frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // total frames
    const allframes=await page.frames()
    console.log("Number of frames:",allframes.length)

  

    //approach 1: name or URL of the frame
    //const var = await page.frame('name')  // if name is present
   // const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
  //await frame1.fill("[name='mytext1']" , "Haaaaaaai")


  //approach2:  using from locator
  const inputs=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
  await inputs.fill("Hellloooooo")


    await page.waitForTimeout(5000)



    
})