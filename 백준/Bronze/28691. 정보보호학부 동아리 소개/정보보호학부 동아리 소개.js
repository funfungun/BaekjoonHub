const fs = require("fs");
const letter = fs.readFileSync(0, 'utf-8').toString().trim();
console.log(
  letter == "M"
    ? "MatKor"
    : letter == "W"
    ? "WiCys"
    : letter == "C"
    ? "CyKor"
    : letter == "A"
    ? "AlKor"
    : letter == "$"
    ? "$clear"
    : null
);