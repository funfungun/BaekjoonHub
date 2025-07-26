const fs = require("fs");
const L = Number(fs.readFileSync(0, 'utf-8').toString().trim());
L % 5 === 0 ? console.log(L / 5) : console.log(Math.floor(L / 5) + 1);