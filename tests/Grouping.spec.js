const { test, expect } = require("@playwright/test");
test.beforeAll(async () => {
  console.log("This is beforeAll Hook......");
});
test.afterAll(async () => {
  console.log("This is AfterAll Hook..... ");
});

test.beforeEach(async () => {
  console.log("This is beforeEach Hook.....");
});

test.afterEach(async () => {
  console.log("This is afterEach Hook.......");
});

test.describe.only("Group1", () => {
  test("Test1", async ({ page }) => {
    console.log("This is my Test1.......");
  });
  test("Test2", async ({ page }) => {
    console.log("This is my Test2.......");
  });
});
test.describe("Group2", () => {
  test("Test3", async ({ page }) => {
    console.log("This is my Test3.......");
  });
  test("Test4", async ({ page }) => {
    console.log("This is my Test4.......");
  });
});
