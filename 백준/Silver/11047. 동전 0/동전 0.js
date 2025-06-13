const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let change = K;
let count = 0;

for (let i = N; i >= 1; i--) {
  count += Math.floor(change / Number(input[i]));
  change %= input[i];
}

console.log(count);