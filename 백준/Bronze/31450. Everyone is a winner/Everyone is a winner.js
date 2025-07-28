const fs = require("fs");
const [M, K] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(M % K == 0 ? "Yes" : "No");