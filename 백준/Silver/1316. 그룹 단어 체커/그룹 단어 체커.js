const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

function groupChecker(word) {
  let set = new Set(word[0]);

  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] !== word[i + 1]) {
      if (set.has(word[i + 1])) {
        return false;
      } else {
        set.add(word[i + 1]);
      }
    }
  }

  return true;
}

let count = 0;
const N = Number(input[0]);
for (let i = 1; i <= N; i++) {
  const word = input[i];

  if (groupChecker(word)) {
    count++;
  }
}

console.log(count);