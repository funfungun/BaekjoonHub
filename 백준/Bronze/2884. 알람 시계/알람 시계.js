const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input[0].split(" ");

let H = parseInt(line[0]);
let M = parseInt(line[1]);

if (M - 45 < 0) {
  H -= 1;
  M += 60 - 45;
} else {
    M -= 45;
}

if (H < 0) {
  H += 24;
}

console.log(H + " " + M);