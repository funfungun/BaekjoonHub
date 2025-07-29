const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim();
console.log(
  input == "NLCS"
    ? "North London Collegiate School"
    : input == "BHA"
    ? "Branksome Hall Asia"
    : input == "KIS"
    ? "Korea International School"
    : input == "SJA"
    ? "St. Johnsbury Academy"
    : null
);