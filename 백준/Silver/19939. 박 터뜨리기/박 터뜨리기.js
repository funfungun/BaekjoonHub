const fs = require("fs");
const [N, K] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const min = (K * (K + 1)) / 2;

if (N < min) {
  console.log(-1);
} else {
  const leave = N - min;
  const left = leave % K;
  const diff = K - 1 + (left > 0 ? 1 : 0);

  console.log(diff);
}