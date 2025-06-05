const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input[0].split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let C = parseInt(input[1]);

if (B + C >= 60) {
  A += parseInt((B + C) / 60);
  B = (B + C) % 60;
} else {
  B += C;
}

if (A >= 24) {
  A %= 24;
}

console.log(A + " " + B);