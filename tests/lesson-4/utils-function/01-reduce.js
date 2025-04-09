// Dữ liệu mẫu
const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 6.1 Tính tổng các giá trị trong scores.
const sumScores = scores.reduce((acc, cur) => acc + cur, 0);
console.log("Tổng các giá trị trong scores:", sumScores);

// 6.2 Tính tích các giá trị trong numbers.
const productNumbers = numbers.reduce((acc, cur) => acc * cur, 1);
console.log("Tích các giá trị trong numbers:", productNumbers);

// 6.3 Tính tổng các giá trị trong expenses.
const sumExpenses = expenses.reduce((acc, cur) => acc + cur, 0);
console.log("Tổng các giá trị trong expenses:", sumExpenses);
