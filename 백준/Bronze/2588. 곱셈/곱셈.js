const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const one = parseInt(input[0]);
const two = parseInt(input[1]);

console.log(one * (two % 10));
console.log(one * parseInt((two % 100) / 10));
console.log(one * parseInt(two / 100));
console.log(one * two);