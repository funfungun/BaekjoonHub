const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const K = Number(input[0]);
const stack = [];

for (let i = 1; i <= K; i++) {
  if (Number(input[i]) !== 0) {
    stack.push(Number(input[i]));
  } else {
    stack.pop();
  }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));