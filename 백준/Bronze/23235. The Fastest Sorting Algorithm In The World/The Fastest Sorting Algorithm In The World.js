const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  console.log(`Case ${i + 1}: Sorting... done!`);
}