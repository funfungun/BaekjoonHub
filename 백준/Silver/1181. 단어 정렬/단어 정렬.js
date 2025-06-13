const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

arr = [...new Set(arr)];

const compare = (a, b) => {
  if (a.length != b.length) {
    return a.length - b.length;
  } else {
    return a < b ? -1 : a > b ? 1 : 0;
  }
};

console.log(arr.sort(compare).join("\n"));