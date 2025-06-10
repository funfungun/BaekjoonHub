const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = parseInt(input[0]);
const num = input[1];
let sum = 0;

for (let i = 0; i < N; i++) {
  const line = parseInt(num[i]);
  sum += line;
}

console.log(sum);