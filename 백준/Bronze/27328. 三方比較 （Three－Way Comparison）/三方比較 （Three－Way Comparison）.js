const fs = require("fs");
const [A, B] = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

console.log(A < B ? -1 : A == B ? 0 : 1);