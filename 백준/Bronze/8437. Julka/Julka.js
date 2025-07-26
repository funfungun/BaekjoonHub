const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

const Klaudia = (input[0] + input[1]) / 2n;
const Natalia = (input[0] - input[1]) / 2n;
console.log(Klaudia + "\n" + Natalia);