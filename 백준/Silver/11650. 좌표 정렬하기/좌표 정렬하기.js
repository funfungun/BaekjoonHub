const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);
  arr.push(line);
}

const compare = (a, b) => {
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
};

console.log(
  arr
    .sort(compare)
    .map((v) => v.join(" "))
    .join("\n")
);