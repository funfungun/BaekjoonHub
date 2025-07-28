const fs = require("fs");
const lambda = Number(fs.readFileSync(0, 'utf-8').toString().trim());
console.log(
  620 <= lambda && lambda <= 780
    ? "Red"
    : 590 <= lambda && lambda < 620
    ? "Orange"
    : 570 <= lambda && lambda < 590
    ? "Yellow"
    : 495 <= lambda && lambda < 570
    ? "Green"
    : 450 <= lambda && lambda < 495
    ? "Blue"
    : 425 <= lambda && lambda < 450
    ? "Indigo"
    : 380 <= lambda && lambda < 425
    ? "Violet"
    : null
);