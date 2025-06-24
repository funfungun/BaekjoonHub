const fs = require("fs");
const [K, N, ...length] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/);

let left = 1;
let right = Math.max(...length);
let output = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const count = length.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (count >= N) {
    output = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(output);