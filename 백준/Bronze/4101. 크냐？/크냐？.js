const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const line = input[i].split(" ").map(Number);
  if (line[0] > line[1]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}