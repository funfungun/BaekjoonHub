const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
let arr = new Array();
for (let i = 1; i < N + 1; i++) {
  const line = input[i].split(" ").map(Number);
  arr.push(line);
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let count = 1;
let index = 0;
for (let i = 1; i < N; i++) {
  if (arr[index][1] <= arr[i][0]) {
    index = i;
    count++;
  }
}

console.log(count);