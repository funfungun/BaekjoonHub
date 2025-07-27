const fs = require("fs");
const N = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

N.includes(9) ? console.log("F") : console.log("S");