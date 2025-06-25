const fs = require("fs");
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

const dp = [];
dp[0] = false;
dp[1] = false;
dp[2] = true;
dp[3] = false;
dp[4] = true;

for (let i = 5; i <= N; i++) {
  if (!dp[i - 1] || !dp[i - 3] || !dp[i - 4]) {
    dp[i] = true;
  } else {
    dp[i] = false;
  }
}

console.log(dp[N] ? "SK" : "CY");