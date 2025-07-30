const fs = require("fs");
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
console.log(
  (N * (N + 1)) / 2 +
    "\n" +
    Math.pow((N * (N + 1)) / 2, 2) +
    "\n" +
    Math.pow((N * (N + 1)) / 2, 2)
);