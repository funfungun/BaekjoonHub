const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  input[i].length >= 6 && input[i].length <= 9
    ? console.log("yes")
    : console.log("no");
}