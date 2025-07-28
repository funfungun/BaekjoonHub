const fs = require("fs");
const x = Number(fs.readFileSync(0, 'utf-8').toString().trim());
console.log(x % 3 === 1 ? "U" : x % 3 === 2 ? "O" : "S");