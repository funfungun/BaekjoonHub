const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
const stack = [];
const output = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);

  if (line[0] === 1) {
    stack.push(Number(line[1]));
  } else if (line[0] === 2) {
    output.push(stack.length ? stack.pop() : -1);
  } else if (line[0] === 3) {
    output.push(stack.length);
  } else if (line[0] === 4) {
    output.push(stack.length === 0 ? 1 : 0);
  } else if (line[0] === 5) {
    output.push(stack.length ? stack[stack.length - 1] : -1);
  }
}

console.log(output.join("\n"));