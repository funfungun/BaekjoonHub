const fs = require("fs");
const [N, ...num] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const dp = new Array(N).fill(1);
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (num[j] < num[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));