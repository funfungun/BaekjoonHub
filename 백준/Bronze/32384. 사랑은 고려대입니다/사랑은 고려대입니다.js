const fs = require("fs");
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

const arr = [];
for (let i = 0; i < N; i++) {
  arr.push("LoveisKoreaUniversity");
}

console.log(arr.join(" "));