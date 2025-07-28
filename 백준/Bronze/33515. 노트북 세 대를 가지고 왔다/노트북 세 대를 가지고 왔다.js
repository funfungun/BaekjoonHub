const fs = require("fs");
const [T1, T2] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

T1 < T2 ? console.log(T1) : console.log(T2);