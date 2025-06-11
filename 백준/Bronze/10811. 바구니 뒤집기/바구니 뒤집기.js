const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = new Array(N + 1);
for (let i = 1; i <= N; i++) {
  arr[i] = i;
}

for (let h = 1; h <= M; h++) {
  const [i, j] = input[h].split(" ").map(Number);

  const reverseArr = arr.slice(i, j + 1).reverse();
  arr.splice(i, j - i + 1, ...reverseArr);
}

console.log(arr.slice(1).join(" "));