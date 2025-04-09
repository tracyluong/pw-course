// Dữ liệu mẫu
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 2.1 Lọc các giá trị trong scores > 80.
const filteredScores = scores.filter(score => score > 80);

// 2.2 Lọc các giá trị trong ages ≥ 18.
const filteredAges = ages.filter(age => age >= 18);

// 2.3 Lọc các từ trong words có độ dài > 5.
const filteredWords = words.filter(word => word.length > 5);

console.log("Các giá trị trong scores > 80:", filteredScores);
console.log("Các giá trị trong ages ≥ 18:", filteredAges);
console.log("Các từ trong words có độ dài > 5:", filteredWords);
