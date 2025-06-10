const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const T = parseInt(input[0]);
for (let i = 1; i <= T; i++) {
  const line = input[i];
  console.log(line[0] + line[line.length - 1]);
}