const fs = require("fs");
const [n, ...num] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/);

console.log(num.map(Number).reduce((acc, cur) => acc + cur));