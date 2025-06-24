const fs = require("fs");
const [N, ...a] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

console.log(a.sort((a, b) => a - b).join(" "));