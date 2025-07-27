const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(/\s+/);
console.log(String(BigInt(input[2]) * BigInt(input[3])));