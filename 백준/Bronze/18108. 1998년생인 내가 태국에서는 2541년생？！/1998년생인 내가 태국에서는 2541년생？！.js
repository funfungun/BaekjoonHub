const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const y = parseInt(input[0]);
console.log(y - 543);