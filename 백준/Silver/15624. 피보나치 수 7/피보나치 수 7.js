const fs = require("fs");
const n = Number(fs.readFileSync(0, 'utf-8').toString().trim());

const dp = [];
dp[0] = 0n;
dp[1] = 1n;

for (let i = 2; i <= n; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007n;
}
console.log(String(dp[n]));