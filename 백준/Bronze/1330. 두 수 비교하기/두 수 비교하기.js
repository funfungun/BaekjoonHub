const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input[0].split(" ");

const A = parseInt(line[0]);
const B = parseInt(line[1]);

if (A > B) {
  console.log(">");
} else if (A == B) {
  console.log("==");
} else {
  console.log("<");
}