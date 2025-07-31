const fs = require("fs");
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

let output = 1;
for (let i = N; i > 0; i--) {
  output *= i;
}

console.log(output);