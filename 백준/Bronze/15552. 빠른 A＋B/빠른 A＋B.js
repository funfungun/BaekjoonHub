const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().split("\n");

const T = parseInt(input[0]);
let output = "";

for (let i = 0; i < T; i++) {
  const line = input[i + 1].split(" ");
  const A = parseInt(line[0]);
  const B = parseInt(line[1]);
  output += A + B + "\n";
}

console.log(output);