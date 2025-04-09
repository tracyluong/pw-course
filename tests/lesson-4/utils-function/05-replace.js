// Dữ liệu mẫu
const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber.
const replacedPhoneNumber = phoneNumber.replace(/ /g, ".");
console.log("phoneNumber sau khi thay khoảng trắng bằng '.' :", replacedPhoneNumber);

// 2. Thay "lỗi" bằng "bug" trong report.
const replacedReport = report.replace("lỗi", "bug");
console.log("report sau khi thay 'lỗi' bằng 'bug':", replacedReport);

// 3. Thay "," bằng "." trong numbersStr.
const replacedNumbersStr = numbersStr.replace(/,/g, ".");
console.log("numbersStr sau khi thay ','' bằng '.':", replacedNumbersStr);
