const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const T = parseInt(input[0]);
for (let i = 1; i <= T; i++) {
  const line = input[i].split(" ");
  const R = parseInt(line[0]);
  const S = line[1];

  let output = "";
  for (let j = 0; j < S.length; j++) {
    for (let k = 0; k < R; k++) {
      output += S[j];
    }
  }

  console.log(output);
}