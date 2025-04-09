// Dữ liệu mẫu
const fullName = "Nguyễn Văn A";
const dateStr = "2024-05-19";
const emailAddress = "example@gmail.com";

// 1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6).
const surname = fullName.substring(0, 6);
console.log("Trích xuất họ:", surname);

// 2. Trích xuất năm từ date (4 ký tự đầu).
const year = dateStr.substring(0, 4);
console.log("Trích xuất năm:", year);

// 3. Trích xuất tên miền từ email (từ sau "@").
const domain = emailAddress.substring(emailAddress.indexOf("@") + 1);
console.log("Trích xuất tên miền:", domain);
