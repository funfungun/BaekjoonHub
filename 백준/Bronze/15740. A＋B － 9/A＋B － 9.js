const fs = require("fs");
const [A, B] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

console.log(String(A + B));