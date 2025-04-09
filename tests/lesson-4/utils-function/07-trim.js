// Dữ liệu mẫu
const nameTrim = " Nguyễn Văn A ";
const userInput = " 12345 ";
const emailTrim = " example@gmail.com ";

// 1. Loại bỏ khoảng trắng đầu và cuối của name.
console.log("name sau khi loại bỏ khoảng trắng:", nameTrim.trim());

// 2. Loại bỏ tất cả khoảng trắng trong userInput.
console.log("userInput sau khi loại bỏ khoảng trắng:", userInput.replace(/\s/g, ""));

// 3. Loại bỏ khoảng trắng đầu của email.
console.log("email sau khi loại bỏ khoảng trắng:", emailTrim.trimStart());
