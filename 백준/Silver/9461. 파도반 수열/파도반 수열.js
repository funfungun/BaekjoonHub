const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const P = [];
P[0] = 1;
P[1] = 1;
P[2] = 1;

for (let i = 3; i <= 100; i++) {
  P[i] = P[i - 2] + P[i - 3];
}

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const N = Number(input[i]);
  console.log(P[N - 1]);
}