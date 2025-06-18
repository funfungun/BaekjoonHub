const fs = require("fs");
const input = fs.readFileSync(0,'utf-8').toString().trim().split(" ");

console.log(
  (input[0] ** 2 +
    input[1] ** 2 +
    input[2] ** 2 +
    input[3] ** 2 +
    input[4] ** 2) %
    10
);