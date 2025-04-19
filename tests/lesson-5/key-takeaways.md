# DOM

**Document Object Model** là interface giúp tương tác với các element thông qua ngôn ngữ lập trình như JavaScript.

## Cấu trúc của một element:

`<option value="usa">United States</option>`

- Thẻ mở: `<option value="usa">`
- Text: `United States`
- Thẻ đóng: `</option>`
- Thuộc tính `value`
- Giá trị của thuộc tính `"usa"`

Thẻ tự đóng:
`<img src="image.jpg" alt="Image description"/>`
`<br>`
`<hr>`

## Các thẻ HTML thường gặp

- Thẻ `<div>` (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ `<h1></h1>` đến `<h6></h6>` (viết tắt của heading): dùng để tạo ra các header phân cấp
  theo thứ tự từ lớn đến bé.
- Thẻ `<form></form>`: dùng để chứa một form thông tin.
- Thẻ `input`: `text`, `email`, `radio`, `checkbox`, `file`, `color`, `range`, `date`
- Thẻ `textarea`: hiển thị ô input, dạng to.
- Thẻ `radio button`: tạo nút chọn một (radio).
- Thẻ `checkbox`: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ `list` và `dropdown`: hiển thị danh sách hoặc menu thả xuống.
- Thẻ `button`: tạo nút bấm.
- Thẻ `table`: hiển thị bảng dữ liệu.
  - `thead` = table heading
    - `tr` = table row = 1 dòng
      - `th`: table heading: text in đậm.
  - `tbody`
    - `tr` -> `td` = table data
- Thẻ `date picker`: tạo bộ chọn ngày.
- Thẻ `slider`: tạo thanh trượt.
- Thẻ `iframe`: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.

# Selector

* Là **cách chọn phần tử trên trang**
* Có nhiều kiểu:
  * **XPath selector**
  * **CSS selector**
  * **Playwright selector**
* Tìm hiểu Xpath selector:

  * Xpath = XML Path

  * Có hai loại gồm:

    - **Tuyệt đối**: đi dọc theo cây DOM - bắt đầu bằng `/`
    
      Ví dụ: `/html/body/div/input[1]`
    - **Tương đối**: tìm dựa vào đặc tính - bắt đầu bằng `//`
    Ví dụ: `//input[@id='email']`

    Lưu ý: Nên dùng loại Xpath tương đối

# Playwright basic syntax

1. **test**

    Là đơn vị cơ bản để khai báo một test
    
    Ví dụ:
    ````
    import { test } from '@playwright/test';

    test('<tên test>', async ({ page }) => {
    // Code của test
    });
2. **step**

    Là đơn vị nhỏ hơn test, để khai báo từng step của test case.

    Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain. 

    Ví dụ:
    ````
    test('<tên test>', async ({ page }) => {
      await test.step('Tên step', async () => {
      // Code here
      });
    });
3. **Basic actions**

- Navigate: `await page.goto('https://pw-practice.playwrightvn.com/');`
- Click:
  - Single click: `await page.locator("//button").click();`
  - Double click: `await page.locator("//button").dblclick();`
  - Right click: `await page.locator("//button").click({ button: 'right'});`
  - Click with modifier: `await page.locator("//button").click({modifiers: ['Shift'],})`
- Input:
  - fill: `page.locator("//input").fill('Playwright Viet Nam');`
  - pressSequentially: `page.locator("//input").pressSequentially('Playwright Viet Nam', { delay: 100,});`
- Radio/Checkbox:
  - Kiểm tra radio/checkbox đã được check: `await page.locator("//input[@id='male']").isChecked();`
  - Check radio/checkbox: `await page.locator("//input[@id='male']").check();`
  - Set radio/checkbox được check và uncheck: `await page.locator("//input[@id='male']").setChecked(true hoặc false);`
- Dropdown:
  - Chọn một option theo attribute value: `await page.locator("//select[@id='country']").selectOption({ value: "uk" });`
  - Chọn một option theo label:`await page.locator("//select[@id='country']").selectOption({ label: "Canada" });`
- Upload file: `await page.locator("//input[@id='profile']").setInputFiles("<path của file muốn upload>");});`