const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
const line = input[1].split(" ").map(Number);
const M = Number(input[2]);

let left = 0;
let right = Math.max(...line);
let output = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  const total = line.reduce((acc, cur) => acc + Math.min(cur, mid), 0);

  if (total <= M) {
    output = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(output);