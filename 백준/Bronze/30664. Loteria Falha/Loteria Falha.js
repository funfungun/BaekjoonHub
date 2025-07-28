const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

for (let i = 0; i < input.length - 1; i++) {
  console.log(input[i] % 42n == 0 ? "PREMIADO" : "TENTE NOVAMENTE");
}