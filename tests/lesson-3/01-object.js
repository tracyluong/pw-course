// 1. Tạo object car
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log("Năm sản xuất:", car.year); // In ra năm sản xuất

// 2. Tạo object person
const person = {
    name: "Nguyen Van A",
    address: {
        street: "123 Street",
        city: "Hanoi",
        country: "Vietnam"
    }
};
console.log("Tên đường:", person.address.street); // In ra tên đường

// 3. Tạo object student
const student = {
    name: "Nguyen Van B",
    grades: {
        math: 9,
        english: 8
    }
};
console.log("Điểm toán:", student["grades"]["math"]); // Truy cập điểm toán

// 4. Tạo object settings và thay đổi volume
const settings = {
    volume: 40,
    brightness: 80
};
settings.volume = 75;
console.log("Object settings mới:", settings); // In ra object mới

// 5. Tạo object bike và thêm thuộc tính color
const bike = {
    brand: "Honda"
};
bike.color = "red";
console.log("Object bike mới:", bike); // In ra object sau khi thêm color

// 6. Tạo object employee và xóa thuộc tính age
const employee = {
    name: "Le Van C",
    age: 30
};
delete employee.age;
console.log("Object employee mới:", employee); // In ra object sau khi xóa age

// 7. Tạo object school
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log("Danh sách lớp học:", school); // In ra danh sách lớp học