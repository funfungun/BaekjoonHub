const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const T = Number(input[0]);
let N = Number(input[1]);
let index = 2;

for (let i = 0; i < T; i++) {
  let arr = [];
  let count = 1;

  for (let j = 0; j < N; j++) {
    const [a, b] = input[index + j].split(" ").map(Number);
    arr.push([a, b]);
  }
  arr.sort((a, b) => a[0] - b[0]);

  let min = arr[0][1];

  for (let j = 1; j < N; j++) {
    if (arr[j][1] < min) {
      count++;
      min = arr[j][1];
    }
  }

  console.log(count);
  index += N;
  N = Number(input[index++]);
}