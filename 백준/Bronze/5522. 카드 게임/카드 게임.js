const fs = require("fs");
const A = fs.readFileSync(0, 'utf-8').toString().split("\n").map(Number);

console.log(A.reduce((acc, cur) => acc + cur));