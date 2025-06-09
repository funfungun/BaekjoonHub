const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = Array(31).fill(0);

for (let i = 0; i < 28; i++) {
  const line = parseInt(input[i]);
  arr[line] = 1;
}

for (let i = 1; i <= 30; i++) {
  if (arr[i] === 0) {
    console.log(i);
  }
}