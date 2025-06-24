const fs = require("fs");
const alphabet = fs.readFileSync(0, 'utf-8').toString().trim();

if (alphabet === "N" || alphabet === "n") {
  console.log("Naver D2");
} else {
  console.log("Naver Whale");
}