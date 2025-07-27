const fs = require("fs");
const [a, b, c] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);
console.log(String((b - c) / a));