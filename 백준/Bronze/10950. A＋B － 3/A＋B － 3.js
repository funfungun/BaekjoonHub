const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = input[0];
for (let i = 1; i <= T; i++) {
  const line = input[i].split(" ");

  const A = parseInt(line[0]);
  const B = parseInt(line[1]);

  console.log(A + B);
}