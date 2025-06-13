const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim();

let output = 0;
const line = input.split("-");

for (let i = 0; i < line.length; i++) {
  let temp = line[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i === 0) {
    output += temp;
  } else {
    output -= temp;
  }
}

console.log(output);