const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ");

  const sortedA = A.split("").sort().join("");
  const sortedB = B.split("").sort().join("");

  if (sortedA === sortedB) {
    console.log(`${A} & ${B} are anagrams.`);
  } else {
    console.log(`${A} & ${B} are NOT anagrams.`);
  }
}