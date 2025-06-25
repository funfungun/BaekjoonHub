const fs = require("fs");
const [N, k] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let left = 1;
let right = Math.pow(10, 10);
let output = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let count = 0;
  for (let i = 1; i <= N; i++) {
    count += Math.min(N, Math.floor(mid / i));
  }

  if (count >= k) {
    output = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(output);