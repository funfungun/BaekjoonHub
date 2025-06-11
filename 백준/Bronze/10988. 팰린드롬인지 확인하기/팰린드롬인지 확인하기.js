const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const word = input[0];

function checkPalindrom(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return 0;
    }
  }

  return 1;
}

if (checkPalindrom(word)) {
  console.log(1);
} else {
  console.log(0);
}