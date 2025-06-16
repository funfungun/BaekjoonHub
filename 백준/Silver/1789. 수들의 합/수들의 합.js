const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const S = parseInt(input[0]);
let N = 0;
let sum = 0;

for (let i = 1; sum + i <= S; i++) {
  sum += i;
  N++;
}

console.log(N);