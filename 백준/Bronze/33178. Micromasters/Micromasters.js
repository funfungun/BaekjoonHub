const fs = require('fs');
const n = Number(fs.readFileSync(0, 'utf-8').toString().trim());

console.log(Math.floor(n/10));