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
for (let i = 0; i < N; i++) {
  const index = lowerBound(arr, A[i], 0, arr.length);

  if (index === arr.length) {
    arr.push(A[i]);
  } else {
    arr[index] = A[i];
  }
}

console.log(arr.length);