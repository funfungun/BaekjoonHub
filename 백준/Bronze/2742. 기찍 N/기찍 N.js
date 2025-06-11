const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString();

const N = parseInt(input);
for (let i = N; i > 0; i--) {
  console.log(i);
}