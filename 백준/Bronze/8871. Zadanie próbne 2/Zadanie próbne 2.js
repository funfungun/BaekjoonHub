const fs = require("fs");
const n = Number(fs.readFileSync(0, 'utf-8').toString().trim());
console.log((n + 1) * 2, (n + 1) * 3);