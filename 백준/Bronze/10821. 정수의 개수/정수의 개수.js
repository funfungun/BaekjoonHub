const fs = require("fs");
const S = fs.readFileSync(0, 'utf-8').toString().trim().split(",");

console.log(S.length);