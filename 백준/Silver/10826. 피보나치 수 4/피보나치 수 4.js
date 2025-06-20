const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const n = Number(input);
let arr = new Array(n + 1).fill(0n);

arr[0] = 0n;
arr[1] = 1n;
for (let i = 2; i <= n; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

console.log(String(arr[n]));