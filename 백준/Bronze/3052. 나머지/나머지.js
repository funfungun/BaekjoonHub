const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let arr = new Array(42).fill(0);
let count = 0;

for (let i = 0; i < 10; i++) {
  const num = parseInt(input[i]);
  arr[num % 42] = 1;
}

for (let i = 0; i < 42; i++) {
  if (arr[i]) {
    count++;
  }
}

console.log(count);