const fs = require("fs");
const N = +fs.readFileSync(0, 'utf-8').toString().trim();

console.log(N % 2 === 1 ? "SK" : "CY");