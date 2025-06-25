const fs = require("fs");
const [N, L, ...h] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/);

const sorted = h.map(Number).sort((a, b) => a - b);

let length = L;
for (let i = 0; i < N; i++) {
  if (sorted[i] <= length) {
    length++;
  } else {
    break;
  }
}

console.log(length);