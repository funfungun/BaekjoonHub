const fs = require("fs");
const [N, M, ...heights] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let left = 0;
let right = Math.max(...heights);
let output = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const total = heights.reduce(
    (acc, cur) => acc + (cur > mid ? cur - mid : 0),
    0
  );

  if (total >= M) {
    output = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(output);