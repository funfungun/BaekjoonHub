const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let arr = new Array(N + 1);
for (let i = 1; i < N + 1; i++) {
  arr[i] = i;
}

for (let k = 1; k <= M; k++) {
  const [i, j] = input[k].split(" ").map(Number);

  let temp = 0;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(arr.slice(1).join(" "));