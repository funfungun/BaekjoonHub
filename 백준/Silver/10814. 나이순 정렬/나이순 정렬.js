const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ");
  const age = Number(line[0]);
  const name = line[1];
  arr.push([age, name]);
}

arr.sort((a, b) => a[0] - b[0]);

console.log(arr.map((v) => v.join(" ")).join("\n"));