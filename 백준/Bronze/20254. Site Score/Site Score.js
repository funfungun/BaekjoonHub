const fs = require("fs");
const [UR, TR, UO, TO] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log(56 * UR + 24 * TR + 14 * UO + 6 * TO);