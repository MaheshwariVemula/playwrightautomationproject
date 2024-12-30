const { test, expect } = require("@playwright/test");
test("test1@cute", async ({ page }) => {
  console.log("This is my test1..");
});
test("test2@notcute", async ({ page }) => {
  console.log("This is my test2..");
});
test("test3@notcute", async ({ page }) => {
  console.log("This is my test3..");
});
test("test4@cute", async ({ page }) => {
  console.log("This is my test4..");
});
test("test5@notcute@cute", async ({ page }) => {
  console.log("This is my test5..");
});


