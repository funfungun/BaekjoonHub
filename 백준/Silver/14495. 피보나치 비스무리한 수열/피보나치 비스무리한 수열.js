const fs = require("fs");
const n = Number(fs.readFileSync(0, 'utf-8').toString().trim());

const dp = [];
dp[0] = 1n;
dp[1] = 1n;
dp[2] = 1n;

for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 3] + dp[i - 1];
}

console.log(String(dp[n - 1]));