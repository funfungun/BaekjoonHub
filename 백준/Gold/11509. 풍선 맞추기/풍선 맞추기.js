const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().split("\n");

const N = Number(input[0]);
const H = input[1].split(" ").map(Number);

let arr = new Array(1000001).fill(0);

let count = 0;
for (let i = 0; i < N; i++) {
  const h = H[i];

  if (arr[h] > 0) {
    arr[h]--;
    arr[h - 1]++;
  } else {
    count++;
    arr[h - 1]++;
  }
}

console.log(count);