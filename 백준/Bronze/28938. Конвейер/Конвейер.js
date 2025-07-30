const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");
const result = input[1]
  .split(" ")
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

console.log(result > 0 ? "Right" : result < 0 ? "Left" : "Stay");