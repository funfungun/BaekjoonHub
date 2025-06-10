const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const S = input[0];
const i = parseInt(input[1]);

console.log(S[i - 1]);