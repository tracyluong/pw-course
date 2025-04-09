// Dữ liệu mẫu
const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1 In lần lượt từng ký tự của str
for (const ch of str) {
  console.log(ch);
}

// 2.2 Tạo mảng đảo ngược từ str
const reversedStrArray = [];
for (const ch of str) {
  reversedStrArray.unshift(ch); // chèn đầu mảng
}
console.log("Mảng đảo ngược là:", reversedStrArray);

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
let firstIndex = -1;
let lastIndex = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    if (firstIndex === -1) {
      firstIndex = i;
    }
    lastIndex = i;
  }
}
console.log("Vị trí đầu tiên của giá trị 3 trong arr:", firstIndex);
console.log("Vị trí cuối cùng của giá trị 3 trong arr:", lastIndex);

// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr
const freq = {};
for (const num of dupArr) {
  freq[num] = (freq[num] || 0) + 1;
}

const uniqueItems = [];
for (const num of dupArr) {
  if (freq[num] === 1) {
    uniqueItems.push(num);
  }
}
console.log("Các phần tử xuất hiện 1 lần trong dupArr:", uniqueItems);
