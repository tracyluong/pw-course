// Dữ liệu mẫu
const student = {
    name: "Alex",
    age: 10,
    salary: 20
  };
  
  // 3.1 In tên và giá trị mỗi thuộc tính của student
  for (const key in student) {
    console.log(`${key}: ${student[key]}`);
  }
  
  // 3.2 Tính tổng các giá trị số trong student
  let sum = 0;
  for (const key in student) {
    if (typeof student[key] === 'number') {
      sum += student[key];
    }
  }
  console.log("Tổng các giá trị số trong student:", sum);
  
  // 3.3 Tạo mảng chứa tên các thuộc tính của student
  const keys = [];
  for (const key in student) {
    keys.push(key);
  }
  console.log("Tên các thuộc tính của student:", keys);
  