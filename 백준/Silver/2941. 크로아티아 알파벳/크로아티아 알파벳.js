const fs = require("fs");
const word = fs.readFileSync(0, 'utf-8').toString().trim();

let count = 0;
for (let i = 0; i < word.length; i++) {
  if (word[i] === "c" && (word[i + 1] === "=" || word[i + 1] === "-")) {
    count++;
    i++;
  } else if (word[i] === "d") {
    if (word[i + 1] === "z" && word[i + 2] === "=") {
      count++;
      i += 2;
    } else if (word[i + 1] === "-") {
      count++;
      i++;
    } else {
      count++;
    }
  } else if (
    (word[i] === "l" && word[i + 1] === "j") ||
    (word[i] === "n" && word[i + 1] === "j") ||
    (word[i] === "s" && word[i + 1] === "=") ||
    (word[i] === "z" && word[i + 1] === "=")
  ) {
    count++;
    i++;
  } else {
    count++;
  }
}

console.log(count);