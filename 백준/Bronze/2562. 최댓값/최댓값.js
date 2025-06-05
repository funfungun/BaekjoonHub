const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input.map(Number);
const max = Math.max(...line);
const index = line.indexOf(max);

console.log(max);
console.log(index + 1);