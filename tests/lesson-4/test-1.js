// 1. Khởi động Tàu Vũ trụ K13
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K13";

let crew = ["Đăng Khoa", "Phúc Nguyên", "Quỳnh Như","Thơm", "Thu Hiền", "Minh Phương (Juli)", "Nhật Khánh", "Thu Trang"];

function launchShip(crewArray) {
  let crewList = "";
  for (let i = 0; i < crewArray.length; i++) {
    crewList += crewArray[i];
    // Thêm dấu phẩy nếu chưa phải phần tử cuối
    if (i < crewArray.length - 1) {
      crewList += ", ";
    }
  }

  let message = "Chuẩn bị khởi động! Phi hành đoàn gồm: " +
                crewList +
                " sẽ đồng hành cùng bạn trong chuyến phiêu lưu " +
                mission + "!";
  return message;
}

// Gọi hàm và in ra console
let launchMessage = launchShip(crew);
console.log(launchMessage);


// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
  let distance = speed * time;
  return distance;
}

let shipSpeed = 1000; // km/h
let travelTime = 24; // giờ

let distance = calculateDistance(shipSpeed, travelTime);
console.log("Khoảng cách đến hành tinh bí ẩn là: " + distance + " km");


// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
  let hexTime = time.toString(16);
  return hexTime;
}

let timeInSeconds = 120;
let convertedTime = convertTimeToHex(timeInSeconds);
console.log("Thời gian 120 giây theo hệ thập lục phân là: " + convertedTime);


// 4. Khám phá kho báu
function decryptCode(code) {
  let result = "";

  for (let i = 0; i < code.length; i++) {
    let char = code[i];

    if (char === " ") {
      result += " ";
    } else if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
}

let secretCode = "K13 Challenge";
let decrypted = decryptCode(secretCode);
console.log("Mật mã đã giải là: " + decrypted);


// 5. Trở về Trái Đất
function returnToEarth() {
  let message = "Chuẩn bị trở về Trái Đất!";
  console.log(message);
}

returnToEarth();
