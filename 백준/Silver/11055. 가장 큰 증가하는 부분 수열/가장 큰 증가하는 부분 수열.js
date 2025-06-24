const fs = require("fs");
const [N, ...A] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .split(/\s+/)
  .map(Number);

const dp = [...A];
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      dp[i] = Math.max(dp[i], dp[j] + A[i]);
    }
  }
}

console.log(Math.max(...dp));