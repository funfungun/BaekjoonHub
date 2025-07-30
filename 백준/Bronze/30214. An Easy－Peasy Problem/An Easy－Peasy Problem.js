const fs = require("fs");
const [s1, s2] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(s1 * 2 >= s2 ? "E" : "H");