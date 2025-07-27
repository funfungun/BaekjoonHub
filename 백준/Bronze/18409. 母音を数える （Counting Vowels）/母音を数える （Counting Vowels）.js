const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");
const S = input[1].split("");
let count = 0;

for (let i = 0; i < S.length; i++) {
  if (S[i] == "a" || S[i] == "e" || S[i] == "i" || S[i] == "o" || S[i] == "u") {
    count++;
  }
}
console.log(count);