const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const n = Number(input);
const fib = [0, 1];

for (let i = 2; i <= n; i++) {
  const next = fib[i - 1] + fib[i - 2];
  fib.push(next);
}

console.log(fib[n]);