const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
let sum = 0;
let A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let B = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  sum += A[i] * B[i];
}
console.log(sum);