const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim();

for (let i = 0; i < input.length; i += 10) {
  console.log(input.slice(i, i + 10));
}