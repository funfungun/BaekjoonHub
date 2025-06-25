const fs = require("fs");
const N = BigInt(fs.readFileSync(0, 'utf-8').toString().trim());

console.log(N % 2n == 1 ? "SK" : "CY");