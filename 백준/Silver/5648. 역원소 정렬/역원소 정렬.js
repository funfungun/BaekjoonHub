const fs = require("fs");
const [n, ...arr] = fs.readFileSync(0, 'utf-8').toString().trim().split(/\s+/);

console.log(
  arr
    .map((v) => v.split("").reverse().join(""))
    .map(Number)
    .sort((a, b) => a - b)
    .join("\n")
);