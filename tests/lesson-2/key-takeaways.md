# Version control system
- Version Control System (VCS) là hệ thống quản lý các phiên bản.
- Có 3 loại:
  * **local**: lưu ở máy cá nhân
  * **centralize**: lưu ở một máy chủ tập trung
  * **distributed**: lưu ở nhiều máy khác nhau.

# Git
- Git là gì: 
  * git được viết bởi **Linus Torvalds**, cha đẻ của Linux
  * git là từ viết **sai chính tả có chủ đích** của get, do get đã được dùng rồi
  * dùng git do **nhu cầu quản lý phiên bản** và **làm việc giữa nhiều người với nhau.**
- Git so sánh với các VCS khác:
  * dễ dùng, có nhiều tính năng vượt trội: branching, tốc độ xử lý nhanh
  * free
  * phổ biến hơn, nhiều công ty sử dụng hơn.
- Git và GitHub:
  * **Git**: 
    * là một phần mềm
    * cài trên máy của bạn
    * là một commandline tool
    * là công cụ quản lý phiên bản, đưa file vào Git repository
    * có các tính năng của Version Control System.
  * **GitHub**:
    * là một dịch vụ web
    * host trên website
    * là công cụ có giao diện
    * là nơi để upload Git repository lên
    * có các tính năng của Version Control System và một số tính năng khác.
- Git - Three states:
  * **Working directory**: Các file mới hoặc file có thay đổi
  * **Staging area**: các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
  * **Repository**: các commit (phiên bản)
- Các câu lệnh thường dùng:
  * `git init` 
    
    --> khởi tạo một thư mục Git mới (working directory), chứa các file tạo mới chưa được commit (untracked files)
  * `git config user.name "<user_name>"`

    `git config user.email "<user_email>"` 
    
    --> cấu hình cho một repo
  * `git config --global user.name "<user_name>"`
    
    `git config --global user.email "<user_email>"`
    
    --> cấu hình cho toàn bộ máy tính
  * `git add <file_name>`
    
    --> thêm một file vào vùng staging
  * `git add .`
    
    --> thêm toàn bộ file vào vùng staging
  * `git status`
    
    --> xem trạng thái file: 
    * File màu xanh: vùng staging
    * File màu đỏ: vùng working directory
  * `git commit -m"message"`
    
    --> chuyển tất cả các file đang ở trạng thái sẵn sàng commit (staging) sang trạng thái commit (tạo một phiên bản)
  * `git log`
    
    --> kiểm tra lịch sử commit.
  - Git - commit convention:
    * Convention giúp cả team làm việc với nhau theo một quy tắc. Đồng thời nó giúp code gọn gàng, sạch đẹp hơn.
    * Dùng convention sau: `< type >: < short_description >`
      * type: *chore*, *feat*, *fix*
      * short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.
# Javascript basic
- Javascript là gì?
  * là một ngôn ngữ lập trình
  * ra đời năm 1995 bởi Brendan Eich
  * giúp cho browser hoạt động được
  * top language: [Stackoverflow report](https://survey.stackoverflow.co/2023/#section-most-popular-technologies-programming-scripting-and-markup-languages)
  * bình thường Javascript chay được do engine support 
    * Edge: Chaka
    * Firefox: SpiderMonkey
    * Chrome: V8
  * để chạy được trên máy tính không cần trình duyệt cần NodeJS
  * run-time
- Đuôi file và cách chạy file:
  * đuôi file: `file_name.js`
  * chạy lệnh bằng lệnh: `node <path_file_name>`
 - Biến (variable):
   * dùng để lưu trữ giá trị, có thể thay đổi giá trị được
   * để khai báo biến, ta có 2 từ khoá: `var` và `let`. Ta có thể khai báo và gán giá trị ngay hoặc khai báo và gán giá trị sau.
     * `var <ten_bien> = <gia_tri>;`
     * `let <ten_bien> = <gia_tri>;`
     * trong đó:<ten_bien>
       * bắt đầu bằng ký tự chữ, hoặc gạch dưới, hoặc $
       * không chứa dấu cách
       * không là các từ khoá, tức là các từ đẫ có trong Javascript (ví dụ: `var`, `let`, `for`, `if`...) 
      * khác nhau giữa `var` và `let`: 
        * `var` khai báo lại được, `let` thì không. 
        * `var` phạm vi toàn cục, `let` phạm vi trong cặp ngoặc {}
   * ta có thể sử dụng biến ngay trong hàm console.log: `console.log(ten_bien)`
   * để thay đổi giá trị của biến, ta thực hiện gán lại giá trị của biến sang giá trị khác mà không cần từ khoá `var/let`
- Hằng số (constant):
  * khai báo: `const <ten_hang_so> = <gia_tri>;`
  * sử dụng: `console.log(ten_hang_so)`
- Khi nào dùng `var/let`, khi nào dùng `const`?
  * `var/let`: khi biến sẽ gán lại
  * `const`: khi biến không gán lại
  * thường sẽ dùng `let` và `const`, không dùng `var`.
- Kiểu dữ liệu (data type):
  * có 8 kiểu dữ liệu: `String`, `Number`, `Bigint`, `Boolean`, `Undefined`, `Null`, `Symbol`, `Object`
   * kiểu `String`: dùng để khai báo một **chuỗi**
   * kiểu `Number`: dùng để khai báo một **số**
   * kiểu `Boolean`: dùng để khai báo một **giá trị kiểu đúng sai** (`true` hoặc `false`)
- Toán tử so sánh (comparison operator)
  * dùng để so sánh giá trị giữa 2 biến với nhau. Kết quả sẽ trả về Boolean (true hoặc false)
  * các toán tử so sánh:
    * so sánh hơn kém: `>`, `<`
    * so sánh bằng: `==`, `===`, `!=`,`!==`, `>=`, `<=`
- Toán tử một ngôi (unary operator):
  * dùng để tăng hoặc giảm giá trị
  * `i++` bằng với `i=i+1`
  * `i--` bằng với `i=i-1`
- Toán tử số học (arithmetic operator):
  * dùng tính toán giá trị biểu thức
  * các phép toán: `+`, `-`, `*`, `/`
- Điều kiện (conditional):
  * dùng để kiểm tra có nên thực hiện một đoạn logic không
  * cú pháp: `if (<điều kiện>) {//code}`. Nếu điều kiện đúng, sẽ chạy đoạn code.
- Vòng lặp (loops):
  * dùng để thực hiện một đoạn logic một số lần nhât định
  * cú pháp: `for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {//code}`
- Format code:
  * Mac: `Option + Shift+ F`
  * Window: `Alt + Shift + F`