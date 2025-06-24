const fs = require("fs");
const [S, C, ...L] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let left = 1;
let right = Math.max(...L);
let output = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const count = L.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (count >= C) {
    output = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}


console.log(L.reduce((acc, cur) => acc + cur) - output * C);