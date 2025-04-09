// Dữ liệu mẫu
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 5.1 Kiểm tra scores có giá trị nào > 80 không.
console.log("Kiểm tra scores có giá trị nào > 80 không?", scores.some(score => score > 80));

// 5.2 Kiểm tra ages có giá trị nào < 18 không.
console.log("Kiểm tra ages có giá trị nào < 18 không?", ages.some(age => age < 18));

// 5.3 Kiểm tra words có từ nào dài > 5 không.
console.log("Kiểm tra words có từ nào dài > 5 không?", words.some(word => word.length > 5));
