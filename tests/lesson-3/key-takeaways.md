# Git
  * Undo actions
    * Thay đổi commit message: có 2 cách
      * *git commit --amend*
        - *gõ i -> vào chế độ insert*
        - *gõ esc để thoát insert*
        - *gõ ":wq" -> write and quit*
      * *git commit --amend -m"message"*
    * Đưa từ vùng staging về working directory:

      *git restore --staged <file>*
    * Đưa từ vùng repository về working directory (uncommit):

      *git reset HEAD|~1* (undo 1 commit)

  * Branching model
    * Dùng branch để tạo ra **một vùng làm việc mới**, không ảnh hưởng tới vùng làm việc đã ổn định
    * Cách tạo branch: có 2 cách:

       *git branch <ten_branch>*

       *git checkout <ten_branch>*

       hoặc:

       *git checkout -b <ten_branch>*

  * .gitignore file
    * .gitignore (bỏ qua) : dùng để **bỏ qua các file không cần git theo dõi**
      * ignore file: <file_name>
      * ignore folder: <folder_name>/


# Javascript basic (Advance concepts)
  * Conventions (quy tắc):
    * giúp code theo một format, dễ nhìn
    * người khác trong team dễ đọc code
    * có 4 dạng: 
      * **snake_case** : chưa dùng
      * **kebab-case**: tên file
      * **camelCase**: tên biến
      * **PascalCase**: tên class
 
  * Formatted console.log:

    *console.log ('Hello World');*

    *console.log ("Hello World");*

    *console.log(`${variable_name}`);*
  * Logical operator
    * && : cả 2 vế của mệnh đề đều đúng
    * || : một trong 2 vế đúng
    * != : đảo ngược lại giá trị của mệnh đề
  * Object and array
    * Object (đối tượng): dùng để **lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số**
      * Khai báo: 

        *let/const <ten_object> = {*

           *<thuoc_tinh>: <gia_tri>,*

          ...

        *}*

        trong đó:
        - <thuoc_tinh> : giống quy tắc đặt tên biến
        - <gia_tri> : có kiểu giống biến, hoặc là một object khác
      * Sử dụng: 

        *console.log("name = " + user.name);*

        *console.log("manufacture name = " + product.manufacturer.name);*

        *console.log("price = ", product["price"]);*
      * Gán lại:

        *user.age = 28;*

        *product["manufacture"]["year"] = 2025;*
    * Array (mảng): là một đối tượng trong Javascript, giúp lưu trữ một tập hợp các giá trị, lưu trữ dưới một tên biến và có thể sử dụng các thao tác trên mảng.
    Một mảng có thể chứa **nhiều loại dữ liệu khác nhau**.
      * Khai báo mảng:

        *let/const/var <tên_mảng> = [<danh sách các giá trị, cách nhau bởi dấu phẩy ",">]*
      * Thao tác trên mảng:
        - Lấy độ dài mảng: dùng thuộc tính *length* của array.
        - Truy xuất phần tử của mạng: dùng cú pháp *arr[< index>]*, trong đó index là số thứ tự, tính từ 0.
        - Thêm phần tử vào mảng: 
          - Thêm vào đầu mảng: sử dụng hàm *unshift()*
          - Thêm vào cuối mảng: sử dụng hàm *push()*
        - Xoá phần tử khỏi mảng: 
          - Xoá phần tử đầu của mảng: sử dụng hàm *shift()*
          - Xoá phần tử cuối của mảng: sử dụng hàm *pop()*
  * Function
    * Function (hàm): là **đoạn code được đặt tên và có thể tái sử dụng**, thực hiện một nhiệm vụ hoặc một tính toán cụ thể
    * Khai báo hàm: 
    
       *function <tên_hàm>(<danh_sách_tham_số>) {*
 
       *// code*
       
       *}*
       
       trong đó:
         - function : từ khoá khai báo hàm
         - <tên_hàm> : tên của hàm
         - <danh_sách_tham_số> : các tham số của hàm, cách nhau bởi dấu phẩy ","
         - code : đoạn logic thực thi trong hàm.
    * Gọi hàm: Hàm không thể tự chạy được. Muốn chạy, ta cần gọi hàm.
      * Hàm không có tham số: Đối với hàm không có tham số, ta chỉ cần gọi hàm bằng cách viết tên hàm và thêm cặp ngoặc tròn phía sau.

        Ví dụ: *hello();*
      * Hàm có tham số: Tham số giúp hàm trở nên linh động hơn. Tham số nằm trong cặp ngoặc tròn.

        Ví dụ:

        *function describePerson(name, age, city){*

        *console.log(name + " is " + age + "years old and lives in " + city + ".");*

        *}*

        *describePerson("Bob", 30, "New York");*
      * Hàm có giá trị trả về: Hàm có giá trị trả về là hàm trả về một giá trị sau khi hoàn thành việc thực thi. Giá trị trả về được chỉ định bằng từ khoá *return*

        Ví dụ:

          *function add(a, b) { //a và b là tham số*

          *return a + b; // trả về tổng a và b*

           *}*

          *let sum = add( 5, 3);*
