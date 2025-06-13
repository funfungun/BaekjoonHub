const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = input[0];
console.log(
  N.split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);