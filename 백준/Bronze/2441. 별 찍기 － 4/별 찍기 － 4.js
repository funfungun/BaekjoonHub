const fs = require("fs");
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

for (let i = 0; i < N; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += " ";
  }
  for (let j = N; j > i; j--) {
    line += "*";
  }

  console.log(line);
}