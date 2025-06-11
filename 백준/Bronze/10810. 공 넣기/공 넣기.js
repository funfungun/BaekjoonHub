const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let arr = new Array(N).fill(0);

for (let l = 1; l <= M; l++) {
  const [i, j, k] = input[l].split(" ").map(Number);

  for (let m = i; m <= j; m++) {
    arr[m - 1] = k;
  }
}

console.log(arr.join(" "));