const fs = require("fs");
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

let sum = 1;
for (let i = 1; i <= N; i++) {
  sum *= i;
}

console.log(sum);