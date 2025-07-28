const fs = require("fs");
const x = Number(fs.readFileSync(0, 'utf-8').toString().trim());
console.log(Math.floor(x));