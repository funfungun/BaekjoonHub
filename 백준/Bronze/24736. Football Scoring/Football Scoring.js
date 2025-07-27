const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const away = input[0].split(" ").map(Number);
const home = input[1].split(" ").map(Number);
console.log(
  away[0] * 6 + away[1] * 3 + away[2] * 2 + away[3] + away[4] * 2,
  home[0] * 6 + home[1] * 3 + home[2] * 2 + home[3] + home[4] * 2
);