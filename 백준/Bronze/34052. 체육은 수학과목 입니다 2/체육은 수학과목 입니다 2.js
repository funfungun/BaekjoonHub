const fs = require("fs");
const t = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

1500 - t[0] - t[1] - t[2] - t[3] >= 0 ? console.log("Yes") : console.log("No");