const fs = require("fs");
const [n1, k1, n2, k2] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(n1 * k1 + n2 * k2);