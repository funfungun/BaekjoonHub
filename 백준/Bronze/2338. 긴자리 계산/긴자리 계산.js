const fs = require("fs");
const [A, B] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

console.log(String(A + B));
console.log(String(A - B));
console.log(String(A * B));