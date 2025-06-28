const fs = require("fs");
const [N, M] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const output = [];

const backtracking = (start, arr) => {
  if (arr.length === M) {
    output.push(arr.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    backtracking(i, [...arr, i]);
  }
};

backtracking(1, []);
console.log(output.join("\n"));