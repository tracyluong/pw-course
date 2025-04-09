// Dữ liệu mẫu
const scores = [85, 90, 78];
const numbers = [1, 2, 3];

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.
const adjustedScores = scores.map(score => score < 90 ? score * 1.1 : score * 0.95);
console.log("Mảng mới ( tăng 10% nếu < 90, giảm 5% nếu ≥ 90) :", adjustedScores);

// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
const numbersAsString = numbers.map(num => num.toString());
console.log("Mảng mới chuyển thành dạng chuỗi:", numbersAsString);

// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị.
const doubledNumbers = numbers.map(num => num * 2);
console.log("Mảng mới nhân đôi mỗi giá trị:", doubledNumbers);
