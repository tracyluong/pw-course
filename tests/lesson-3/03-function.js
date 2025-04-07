// 1. Hàm multiply
function multiply(a, b) {
    // Khai báo biến để lưu kết quả phép nhân
    let resultMultiply = 0;
    
    // Thực hiện phép nhân và gán vào biến resultMultiply
    resultMultiply = a * b;
    
    // Trả về kết quả nhân
    return a * b;
}
console.log("Kết quả nhân là:", multiply(3, 5));
console.log("Kết quả nhân là:", multiply(6, 2));

// 2. Hàm findMin
function findMin(a, b, c) {
    // Khai báo biến để lưu giá trị nhỏ nhất, ban đầu gán bằng a
    let minValue = a;
    
    // So sánh giá trị nhỏ nhất với b, nếu b nhỏ hơn thì gán minValue = b
    if (b < minValue) {
        minValue = b;
    }
    
    // So sánh giá trị nhỏ nhất với c, nếu c nhỏ hơn thì gán minValue = c
    if (c < minValue) {
        minValue = c;
    }
    
    // Trả về giá trị nhỏ nhất
    return minValue;
}
console.log("Số nhỏ nhất là:", findMin(5, 3, 8));
console.log("Số nhỏ nhất là:", findMin(10, 15, 7));

// 3. Hàm getTopStudents
function getTopStudents(students, threshold) {
    // Lọc danh sách học sinh có điểm >= threshold
    const topStudents = students.filter(student => student.score >= threshold);
    
    // Tạo một mảng mới chỉ chứa tên của những học sinh đó
    const topStudentNames = topStudents.map(student => student.name);
    
    // Trả về danh sách tên học sinh đạt yêu cầu
    return topStudentNames;
}
const studentList = [
    { name: "Ngọc", score: 85 },
    { name: "Bình", score: 75 },
    { name: "Nhi", score: 92 },
    { name: "Linh", score: 60 }
];
console.log("Top students:", getTopStudents(studentList, 80));

// 4. Hàm calculateInterest
function calculateInterest(principal, rate, years) {
    // Tính số tiền lãi
    let interest = (principal * rate * years) / 100;
    
    // Tính tổng số tiền sau khi cộng lãi
    let totalAmount = principal + interest;
    
    // Trả về tổng số tiền
    return totalAmount;
}
console.log("Tổng số tiền sau 3 năm:", calculateInterest(1000, 5, 3));
console.log("Tổng số tiền sau 5 năm:", calculateInterest(2000, 3, 5));