import { test } from "@playwright/test"; 

test.setTimeout(180_000); // 3 phút

test("Todo page", async ({ page }) => {
  await test.step("Truy cập trang Playwright", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.waitForTimeout(1000);
  });

  await test.step("Nhấn link Bài học 3: Todo page", async () => {
    await page.locator("//a[@href ='03-xpath-todo-list.html']").click();
    await page.waitForTimeout(1000);
  });

  await test.step("Thêm mới 100 Todo item", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
      await page.locator('//button[@id="add-task"]').click();
    }
  });

  await test.step("Xoá todo có số lẻ", async () => {
    page.on("dialog", async dialog => {
      await dialog.accept();
    });

    const deleteButtons = await page.locator("//ul[@id='task-list']/li/button[contains(@id, '-delete')]").all();

    for (const button of deleteButtons) {
      const id = await button.getAttribute("id"); // ví dụ: "todo-3-delete"
      const match = id?.match(/todo-(\d+)-delete/);
      const number = match ? parseInt(match[1]) : null;

      if (number && number % 2 !== 0) {
        await button.click();
      }
    }
  });
});