const fs = require("fs");
const n = Number(fs.readFileSync(0, 'utf-8').toString().trim());

const t = [];
t[0] = 1n;

for (let i = 1; i <= 35; i++) {
  let sum = 0n;

  for (let j = i; j > 0; j--) {
    sum += t[j - 1] * t[i - j];
  }
  t[i] = sum;
}

console.log(String(t[n]));