const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const line = input[i].split(" ").map((t) => t.split("").reverse().join(""));
  console.log(line.join(" "));
}