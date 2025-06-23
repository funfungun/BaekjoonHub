const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);
input.sort((a, b) => b - a);

console.log(input[1]);