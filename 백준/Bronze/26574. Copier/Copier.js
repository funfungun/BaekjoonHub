const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 1; i < input.length; i++) {
  console.log(input[i], input[i]);
}