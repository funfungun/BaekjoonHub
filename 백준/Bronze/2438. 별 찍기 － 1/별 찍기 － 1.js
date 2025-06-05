const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0]);

for (let i = 0; i < N; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}