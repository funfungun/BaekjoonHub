const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let N = Number(input[0]);
let count = 0;

while (N >= 0) {
  if (N % 5 === 0) {
    count += N / 5;
    break;
  }
  N -= 3;
  count++;
}

if (N >= 0) {
  console.log(count);
} else {
  console.log(-1);
}