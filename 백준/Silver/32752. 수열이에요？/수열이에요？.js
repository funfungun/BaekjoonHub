const fs = require("fs");
const [N, L, R, ...A] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let flag = 1;
const arr1 = A.slice(0, L - 1);
const arr2 = A.slice(Number(L) - 1, Number(R)).sort((a, b) => a - b);
const arr3 = A.slice(R, A.length);
const arr = [...arr1, ...arr2, ...arr3];

for (let i = 1; i < arr.length; i++) {
  if (arr[i + 1] < arr[i]) {
    flag = 0;
    break;
  }
}

console.log(flag);