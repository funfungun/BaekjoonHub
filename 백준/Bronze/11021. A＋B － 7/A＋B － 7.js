const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().split("\n");

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const line = input[i].split(" ");
  const A = parseInt(line[0]);
  const B = parseInt(line[1]);

  console.log(`Case #${i}: ${A + B}`);
}