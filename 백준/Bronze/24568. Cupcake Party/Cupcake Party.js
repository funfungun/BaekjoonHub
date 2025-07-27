const fs = require("fs");
const [R, S] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);
console.log(R * 8 + S * 3 - 28);