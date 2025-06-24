const fs = require("fs");
const word = fs.readFileSync(0, 'utf-8').toString().trim().split("");

console.log(word.reverse().join(""));