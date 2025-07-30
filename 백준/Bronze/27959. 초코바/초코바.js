const fs = require("fs");
const [N, M] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(N * 100 >= M ? "Yes" : "No");