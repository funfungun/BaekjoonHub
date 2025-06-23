const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const arr = [
  ...input[1].split(" ").map(Number),
  ...input[2].split(" ").map(Number),
].sort((a, b) => a - b);
console.log(arr.join(" "));