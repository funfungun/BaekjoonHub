const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const line = input[i].split(" ");
  const A = parseInt(line[0]);
  const B = parseInt(line[1]);
  console.log(A + B);
}