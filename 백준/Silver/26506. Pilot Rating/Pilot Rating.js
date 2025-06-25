const fs = require("fs");
const [n, ...S] = fs.readFileSync(0, 'utf-8').toString().trim().split(/\s+/);

const sorted = S.map(Number).sort((a, b) => a - b);
let min = sorted[0] + sorted[n - 1];

for (let i = 1; i < Math.floor(n / 2); i++) {
  if (min > sorted[i] + sorted[n - i - 1]) {
    min = sorted[i] + sorted[n - i - 1];
  }
}

console.log(min);