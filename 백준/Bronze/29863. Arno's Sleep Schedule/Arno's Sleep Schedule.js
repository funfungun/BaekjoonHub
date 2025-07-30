const fs = require("fs");
const [H1, H2] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(20 <= H1 && H1 <= 23 ? H2 + 24 - H1 : H2 - H1);