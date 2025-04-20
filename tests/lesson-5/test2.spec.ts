import { test } from "@playwright/test";

test("Product page", async ({ page }) => {
    await test.step("Truy cập trang Playwright", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Nhấn link Bài học 2: Product page", async () => {
        await page.locator("//a[@href ='02-xpath-product-page.html']").click();
    });

    await test.step("Thêm 2 sản phẩm 1", async() => {
        await page.locator("//button[@data-product-id='1']").dblclick();

    });

    await test.step("Thêm 3 sản phẩm 2", async() => {
        await page.locator("//button[@data-product-id='2']").click({clickCount: 3});
    });

    await test.step("Thêm 1 sản phẩm 3", async() => {
        await page.locator("//button[@data-product-id='3']").click();
    });
})