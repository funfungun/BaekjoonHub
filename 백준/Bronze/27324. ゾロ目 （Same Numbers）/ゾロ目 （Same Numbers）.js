const fs = require("fs");
const N = fs.readFileSync(0, 'utf-8').toString().trim().split("");

if (N[0] === N[1]) {
  console.log(1);
} else {
  console.log(0);
}