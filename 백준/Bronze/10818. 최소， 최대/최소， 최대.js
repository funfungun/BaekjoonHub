const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input[1].split(" ").map(Number);

console.log(Math.min(...line), Math.max(...line));