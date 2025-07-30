const fs = require("fs");
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
console.log("WelcomeToSMUPC"[(N - 1) % 14]);