const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [N, k] = input[0].split(" ").map(Number);
const sorted = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(sorted[k - 1]);