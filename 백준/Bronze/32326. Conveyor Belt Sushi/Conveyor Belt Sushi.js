const fs = require("fs");
const [R, G, B] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(R * 3 + G * 4 + B * 5);