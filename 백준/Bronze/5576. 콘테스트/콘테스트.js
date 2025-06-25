const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const W = [];
const K = [];

for (let i = 0; i < 10; i++) {
  W.push(input[i]);
}

for (let i = 10; i < 20; i++) {
  K.push(input[i]);
}

W.sort((a, b) => b - a);
K.sort((a, b) => b - a);

console.log(W[0] + W[1] + W[2], K[0] + K[1] + K[2]);