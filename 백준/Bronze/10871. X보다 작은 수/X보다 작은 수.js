const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input[0].split(" ");
const N = parseInt(line[0]);
const X = parseInt(line[1]);
const A = input[1].split(" ").map(Number);

const result = [];

for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    result.push(A[i]);
  }
}

console.log(result.join(" "));