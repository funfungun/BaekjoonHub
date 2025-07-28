const fs = require("fs");
const n = Number(fs.readFileSync(0, 'utf-8').toString().trim());

const output = [];
output.push("V".repeat(n / 5));
output.push("I".repeat(n % 5));
console.log(output.join(""));