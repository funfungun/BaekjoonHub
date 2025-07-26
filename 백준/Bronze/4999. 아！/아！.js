const fs = require("fs");
const [aaah, aah] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n");

aaah.length >= aah.length ? console.log("go") : console.log("no");