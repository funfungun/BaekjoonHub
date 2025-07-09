const fs = require("fs");
const n = fs.readFileSync(0, 'utf-8').toString().trim();
console.log(n.toUpperCase());