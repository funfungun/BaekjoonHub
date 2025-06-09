const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().split("\n");

const X = parseInt(input[0]);
const N = parseInt(input[1]);
let sum = 0;

for (let i = 0; i < N; i++) {
  let line = input[i + 2].split(" ");
  const a = parseInt(line[0]);
  const b = parseInt(line[1]);
  sum += a * b;
}

if (X === sum) {
  console.log("Yes");
} else {
  console.log("No");
}