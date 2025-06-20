const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const n = Number(input);
let f = [];
let count1 = 0;
let count2 = 0;

const fib = (n) => {
  if (n === 1 || n === 2) {
    count1++;
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

const fibonacci = (n) => {
  f[1] = 1;
  f[2] = 1;
  for (let i = 3; i <= n; i++) {
    count2++;
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
};

fib(n);
fibonacci(n);

console.log(count1, count2);