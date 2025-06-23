const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
const line = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const sorted = [...new Set(line)];
console.log(sorted.join(" "));