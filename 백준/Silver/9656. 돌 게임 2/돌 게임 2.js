const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

console.log(N % 2 === 0 ? "SK" : "CY");