// Dữ liệu mẫu
const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// 1. Chia name thành mảng các từ (dùng khoảng trắng).
const nameParts = name.split(" ");
console.log("Name sau khi được chia thành mảng các từ:", nameParts);

// 2. Chia emails thành mảng các email (dùng dấu phẩy).
const emailArray = emails.split(",");
console.log("Emails sau khi chia thành mảng các email:", emailArray);

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
const dateParts = date.split("-");
console.log("Date sau khi chia thành mảng ngày, tháng, năm:", dateParts);
