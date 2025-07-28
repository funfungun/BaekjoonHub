const fs = require("fs");
const [T, V] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(T * V);