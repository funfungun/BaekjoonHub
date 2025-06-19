const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
const dist = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);

let min = cost[0];
for (let i = 1; i < N; i++) {
  min = Math.min(min, cost[i]);
  cost[i] = min;
}

let output = BigInt(0);
for (let i = 0; i < N - 1; i++) {
  output += BigInt(dist[i]) * BigInt(cost[i]);
}

console.log(String(output));