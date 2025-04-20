import { test } from '@playwright/test';

test('Bài học 1: Register Page', async ({ page }) => {
    // Điều hướng tới trang 
    await test.step("Đi tới trang web", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    })

    //Thực hiện fill các trường
    await test.step("Thực hiện nhập các trường", async () => {
        await page.locator('//input[@id="username"]').fill('testusername');
        await page.locator('//input[@id="email"]').fill('testemailonly@gmail.com');
        await page.locator('//input[@id="female"]').click();
        await page.locator('//input[@id="reading"]').check();
        await page.locator('//input[@id="traveling"]').check();
        await page.locator('//option[@value="technology"]').click();
        await page.locator('//select[@id="country"]').selectOption('canada');
        await page.locator('//input[@id="dob"]').fill('1991-09-18');
        await page.locator('//input[@id="profile"]').setInputFiles('data/testimage.jpg');
        await page.locator('//textarea[@id="bio"]').fill('Kiểm tra bài test playwright số 1');
        await page.locator('//input[@id="rating"]').fill("3");
        await page.locator('//input[@id="favcolor"]').fill("#fff000");
        await page.locator('//input[@id="newsletter"]').click();
        await page.locator('//span[@class="slider round"]').click();
    })
    
    //Thực hiện submit 
    await test.step("Thực hiện submit", async () => {
        await page.locator('//button[@type="submit"]').click();
    })


});

