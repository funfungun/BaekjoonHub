const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const T = Number(input[0]);
let fib = [0, 1];
for (let i = 2; i < 46; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}

for (let i = 1; i <= T; i++) {
  let n = Number(input[i]);
  let output = [];

  for (let j = fib.length - 1; j >= 2; j--) {
    if (fib[j] <= n) {
      output.push(fib[j]);
      n -= fib[j];
    }
    if (n === 0) {
      break;
    }
  }

  output.sort((a, b) => a - b);
  console.log(output.join(" "));
}