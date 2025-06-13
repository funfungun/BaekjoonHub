const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
const P = input[1].split(" ").map(Number);
const sorted = P.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < N - 1; i++) {
  sum += sorted[i];
  sorted[i + 1] += sorted[i];
}

console.log(sum + sorted[N - 1]);