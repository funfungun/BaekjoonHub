const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = parseInt(input[0]);

for (let i = 1; i < N; i++) {
  let line = "";

  for (let j = i; j < N; j++) {
    line += " ";
  }

  line += "*".repeat(2 * i - 1);
  console.log(line);
}

console.log("*".repeat(2 * N - 1));

for (let i = N - 1; i >= 1; i--) {
  let line = "";

  for (let j = N - 1; j >= i; j--) {
    line += " ";
  }

  line += "*".repeat(2 * i - 1);
  console.log(line);
}