const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const word = input[0];
let count = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === "A" || word[i] === "B" || word[i] === "C") {
    count += 3;
  } else if (word[i] === "D" || word[i] === "E" || word[i] === "F") {
    count += 4;
  } else if (word[i] === "G" || word[i] === "H" || word[i] === "I") {
    count += 5;
  } else if (word[i] === "J" || word[i] === "K" || word[i] === "L") {
    count += 6;
  } else if (word[i] === "M" || word[i] === "N" || word[i] === "O") {
    count += 7;
  } else if (
    word[i] === "P" ||
    word[i] === "Q" ||
    word[i] === "R" ||
    word[i] === "S"
  ) {
    count += 8;
  } else if (word[i] === "T" || word[i] === "U" || word[i] === "V") {
    count += 9;
  } else if (
    word[i] === "W" ||
    word[i] === "X" ||
    word[i] === "Y" ||
    word[i] === "Z"
  ) {
    count += 10;
  } else {
    count += 11;
  }
}

console.log(count);