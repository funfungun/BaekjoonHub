const fs = require("fs");
const [N, M] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = new Array(N + 1).fill(false);
const output = [];

const backtracking = (arr) => {
  if (arr.length === M) {
    output.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    visited[i] = true;
    backtracking([...arr, i]);
  }
};

backtracking([]);
console.log(output.join("\n"));