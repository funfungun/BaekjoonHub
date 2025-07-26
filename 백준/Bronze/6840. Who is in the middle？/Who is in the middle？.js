const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);
console.log(input[1]);