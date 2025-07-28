const fs = require("fs");
const [S_ab, F_ab] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);
console.log(S_ab > F_ab ? "flight" : "high speed rail");