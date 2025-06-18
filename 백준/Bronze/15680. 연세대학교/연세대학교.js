const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);

if (N) {
  console.log("Leading the Way to the Future");
} else {
  console.log("YONSEI");
}