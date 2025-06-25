const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ");
  console.log(`Case #${i}: ${line.reverse().join(" ")}`);
}