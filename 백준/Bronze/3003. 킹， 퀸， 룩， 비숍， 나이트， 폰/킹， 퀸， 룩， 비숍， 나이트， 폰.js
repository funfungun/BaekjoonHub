const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [K, Q, L, B, N, P] = input[0].split(" ");
console.log(`${1 - K} ${1 - Q} ${2 - L} ${2 - B} ${2 - N} ${8 - P}`);