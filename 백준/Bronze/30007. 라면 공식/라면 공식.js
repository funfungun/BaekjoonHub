const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  const [A_i, B_i, X_i] = input[i].split(" ").map(Number);
  console.log(A_i * (X_i - 1) + B_i);
}