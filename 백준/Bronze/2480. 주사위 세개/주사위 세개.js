const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input[0].split(" ");

const one = parseInt(line[0]);
const two = parseInt(line[1]);
const three = parseInt(line[2]);

if (one === two && two === three) {
  console.log(10000 + one * 1000);
} else if (one === two || one === three) {
  console.log(1000 + one * 100);
} else if (two === three) {
  console.log(1000 + two * 100);
} else {
  console.log(Math.max(one, two, three) * 100);
}