const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ");
  arr.push([line[0], Number(line[1]), Number(line[2]), Number(line[3])]);
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  } else if (a[2] !== b[2]) {
    return a[2] - b[2];
  } else if (a[3] !== b[3]) {
    return b[3] - a[3];
  } else {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      return 0;
    }
  }
});

for (let i = 0; i < N; i++) {
  console.log(arr[i][0]);
}