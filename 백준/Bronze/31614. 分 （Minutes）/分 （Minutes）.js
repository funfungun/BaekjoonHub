const fs = require("fs");
const [H, M] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(H * 60 + M);