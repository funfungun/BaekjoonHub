const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim();

let count = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === " ") {
    count++;
  }
}

if (input === "") {
  console.log(0);
} else {
  console.log(count + 1);
}