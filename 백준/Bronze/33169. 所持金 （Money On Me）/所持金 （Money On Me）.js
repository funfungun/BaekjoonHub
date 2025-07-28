const fs = require("fs");
const [A, B] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(A * 1000 + B * 10000);