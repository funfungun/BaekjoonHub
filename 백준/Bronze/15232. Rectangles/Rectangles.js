const fs = require("fs");
const [R, C] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < R; i++) {
  let output = "";
  for (let j = 0; j < C; j++) {
    output += "*";
  }

  console.log(output);
}