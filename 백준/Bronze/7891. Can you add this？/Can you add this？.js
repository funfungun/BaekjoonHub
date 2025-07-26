const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  const line = input[i].split(" ").map(Number);
  console.log(line[0] + line[1]);
}