// Dữ liệu mẫu
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không.
console.log("Tất cả giá trị trong scores có > 70 không? ", scores.every(score => score > 70));

// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không.
console.log("Tất cả giá trị trong ages có > 15 không? ", ages.every(age => age > 15));

// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không.
console.log("Tất cả từ trong words có độ dài > 3 không? ", words.every(word => word.length > 3));