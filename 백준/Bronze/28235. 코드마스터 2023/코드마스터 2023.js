const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim();
console.log(
  input == "SONGDO"
    ? "HIGHSCHOOL"
    : input == "CODE"
    ? "MASTER"
    : input == "2023"
    ? "0611"
    : input == "ALGORITHM"
    ? "CONTEST"
    : null
);