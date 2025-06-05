const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0]);
const line = input[1].split(" ");
const v = parseInt(input[2]);

let cnt = 0;

for (let i = 0; i < N; i++) {
  if (line[i] == v) {
    cnt++;
  }
}

console.log(cnt);