const fs = require("fs");
const X = Number(fs.readFileSync(0, 'utf-8').toString().trim());
console.log(X % 7 == 2 ? 1 : 0);