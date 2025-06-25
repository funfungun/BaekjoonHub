const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const t = Number(input[0]);
const dp = [];
dp[0] = 1n;
dp[1] = 1n;
dp[2] = 2n;
dp[3] = 4n;

for (let i = 4; i <= 67; i++) {
  dp[i] = dp[i - 4] + dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let i = 1; i <= t; i++) {
  const n = Number(input[i]);
  console.log(String(dp[n]));
}