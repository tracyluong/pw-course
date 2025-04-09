// Dữ liệu mẫu
const numbers = [1, 2, 3];

// 1.1 In lần lượt từng phần tử của numbers.
numbers.forEach(num => {
  console.log(num);
});

// 1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
let sum = 0;
let max = numbers[0];
let min = numbers[0];

numbers.forEach(num => {
  sum += num;
  if (num > max) max = num;
  if (num < min) min = num;
});

console.log("Tổng của numbers", sum);
console.log("Giá trị lớn nhất của numbers:", max);
console.log("Giá trị nhỏ nhất của numbers:", min);

// 1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
const doubled = [];
numbers.forEach(num => {
  doubled.push(num * 2);
});
console.log("Mảng mới từ numbers với mỗi phần tử nhân đôi là:", doubled);
