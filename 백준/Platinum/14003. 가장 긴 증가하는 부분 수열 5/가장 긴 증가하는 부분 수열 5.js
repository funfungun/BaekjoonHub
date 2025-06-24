const fs = require("fs");
const [N, ...A] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const lowerBound = (arr, target, left, right) => {
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const arr = [];
const indexArr = [];
const dp = new Array(N);
const prev = new Array(N);

for (let i = 0; i < N; i++) {
  const index = lowerBound(arr, A[i], 0, arr.length);

  if (index === arr.length) {
    arr.push(A[i]);
    indexArr.push(i);
  } else {
    arr[index] = A[i];
    indexArr[index] = i;
  }

  dp[i] = index;
  prev[i] = index > 0 ? indexArr[index - 1] : -1;
}

let cur = indexArr[arr.length - 1];

const output = [];
while (cur !== -1) {
  output.push(A[cur]);
  cur = prev[cur];
}

console.log(arr.length);
console.log(output.reverse().join(" "));