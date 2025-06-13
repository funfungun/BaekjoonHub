const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const line = input[0].split(" ").map(Number);
const sorted = line.sort((a, b) => a - b);

console.log(sorted.join(" "));