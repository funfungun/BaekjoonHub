const fs = require("fs");
const X = Number(fs.readFileSync(0, 'utf-8').toString().trim());

console.log(Math.pow(X, 3));