const fs = require("fs");
const [HH, MM] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log((HH - 9) * 60 + MM);