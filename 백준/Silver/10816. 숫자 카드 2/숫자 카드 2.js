const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0]);
const arr1 = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = Number(input[2]);
const arr2 = input[3].split(" ").map(Number);

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

const upperBound = (arr, target, left, right) => {
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const countByRange = (arr, left, right) => {
  const leftIdx = lowerBound(arr, left, 0, arr.length);
  const rightIdx = upperBound(arr, right, 0, arr.length);

  return rightIdx - leftIdx;
};

const output = arr2.map((target) => countByRange(arr1, target, target));
console.log(output.join(" "));