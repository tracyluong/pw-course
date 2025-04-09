// Dữ liệu mẫu
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 3.1 Tìm giá trị đầu tiên trong scores > 80.
const foundScore = scores.find(score => score > 80);

// 3.2 Tìm giá trị đầu tiên trong ages > 20.
const foundAge = ages.find(age => age > 20);

// 3.3 Tìm từ đầu tiên trong words có độ dài > 5.
const foundWord = words.find(word => word.length > 5);

console.log("Giá trị đầu tiên trong scores > 80:", foundScore);
console.log("Giá trị đầu tiên trong ages > 20:", foundAge);
console.log("Từ đầu tiên trong words có độ dài > 5:", foundWord);
