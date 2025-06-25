const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input[0];

for (let i = 0; i < T; i++) {
  const N = input[i + 1];
  const dp0 = [];
  const dp1 = [];

  dp0[0] = 1;
  dp1[0] = 0;
  dp0[1] = 0;
  dp1[1] = 1;

  for (let j = 2; j <= N; j++) {
    dp0[j] = dp0[j - 2] + dp0[j - 1];
    dp1[j] = dp1[j - 2] + dp1[j - 1];
  }

  console.log(dp0[N], dp1[N]);
}