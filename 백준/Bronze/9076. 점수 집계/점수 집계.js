const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const line = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  if (line[1] - line[3] >= 4) {
    console.log("KIN");
  } else {
    console.log(line.reduce((acc, cur) => acc + cur) - line[0] - line[4]);
  }
}