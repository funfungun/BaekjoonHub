const fs = require("fs");
const [W, H] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log((W * H * 0.5).toFixed(1));