const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  console.log((input[i] * (input[i] + 1)) / 2);
}