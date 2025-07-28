const fs = require("fs");
const [A, B, C] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

A + B + C <= 21 ? console.log(1) : console.log(0);