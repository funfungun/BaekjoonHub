const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = [];
for (let i = 0; i < 8; i++) {
  arr.push([input[i], i + 1]);
}
arr.sort((a, b) => b[0] - a[0]);

let sum = 0;
const newArr = arr.slice(0, 5).sort((a, b) => a[1] - b[1]);

console.log(newArr.reduce((acc, cur) => acc + cur[0], 0));
console.log(newArr.map((item) => item[1]).join(" "));