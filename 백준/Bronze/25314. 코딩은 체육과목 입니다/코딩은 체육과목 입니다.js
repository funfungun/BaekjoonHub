const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString();

const N = parseInt(input);
let temp = "";

for (let i = 0; i < N / 4; i++) {
  temp += "long ";
}

console.log(temp + "int");