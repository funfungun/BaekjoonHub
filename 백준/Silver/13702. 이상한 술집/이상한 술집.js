const fs = require("fs");
const [N, K, ...V] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let left = 1;
let right = Math.max(...V);
let output = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const count = V.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (count >= K) {
    output = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(output);