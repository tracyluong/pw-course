const height = 170; // Chiều cao tính bằng cm
const oddPart = height % 100; // Lấy số lẻ của chiều cao
const idealWeight = (oddPart * 9) / 10;
const maxWeight = oddPart;
const minWeight = (oddPart * 8) / 10;
console.log("Cân nặng lý tưởng: " + idealWeight + " kg, Cân nặng tối đa: " + maxWeight + " kg, Cân nặng tối thiểu: " + minWeight + " kg");