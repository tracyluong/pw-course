// Dữ liệu mẫu ban đầu
let numbers = [1, 2, 3];
let names = ["Alice", "Bob", "Charlie"];

// 1. Push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.
numbers.push(4);
names.push("David");
console.log("Sau khi thêm 4 vào cuối numbers:", numbers);
console.log("Sau khi thêm David vào cuối names:", names);

// 2. Pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
let numbersPop = [1, 2, 3, 4]
numbersPop.pop();
console.log("Sau khi loại bỏ phần tử cuối của numbers", numbersPop);

// 3. Unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.
let numbersUnshift = [1, 2, 3];
let namesUnshift = ["Alice", "Bob", "Charlie"];
numbersUnshift.unshift(0);
namesUnshift.unshift("David");
console.log("Sau khi thêm 0 vào đầu numbers", numbersUnshift);
console.log("Sau khi thêm David vào đầu names", namesUnshift);

// 4. Shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].
let numbersShift = [1, 2, 3, 4];
numbersShift.shift();
console.log("Sau khi loại bỏ phần tử đầu của numbers:", numbersShift);
