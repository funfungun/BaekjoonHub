const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = parseInt(input[0]);
const scores = input[1].split(" ").map(Number);
const max = Math.max(...scores);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += (scores[i] / max) * 100;
}

console.log(sum / N);