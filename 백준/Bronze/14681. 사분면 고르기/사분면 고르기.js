const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').split("\n");

const x = parseInt(input[0]);
const y = parseInt(input[1]);

if (x > 0) {
  if (y > 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else {
  if (y > 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}