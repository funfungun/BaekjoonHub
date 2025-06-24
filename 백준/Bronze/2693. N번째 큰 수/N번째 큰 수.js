const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const A = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  console.log(A[2]);
}