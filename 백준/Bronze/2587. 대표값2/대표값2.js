const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;
const sorted = input.sort((a, b) => a - b);

for (let i = 0; i < 5; i++) {
  sum += sorted[i];
}

console.log(sum / 5);
console.log(sorted[2]);