const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let [A, B] = input[0].split(" ").map(Number);
let count = 0;

while (A < B) {
  if (B % 2 === 0) {
    B /= 2;
    count++;
  } else if (B % 10 === 1) {
    B = Math.floor(B / 10);
    count++;
  } else {
    break;
  }
}

if (A === B) {
  console.log(count + 1);
} else {
  console.log(-1);
}