const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(A[K - 1]);