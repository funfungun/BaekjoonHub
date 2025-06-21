const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const T = Number(input[0]);

const palindrome = (line) => {
  return line === line.split("").reverse().join("");
};

for (let i = 1; i <= T; i++) {
  const line = input[i];

  if (palindrome(line)) {
    console.log(0);
  } else {
    let left = 0;
    let right = line.length - 1;
    let output = 2;

    while (left < right) {
      if (line[left] !== line[right]) {
        const removeLeft = line.slice(0, left) + line.slice(left + 1);
        const removeRight = line.slice(0, right) + line.slice(right + 1);

        if (palindrome(removeLeft) || palindrome(removeRight)) {
          output = 1;
        }
        break;
      }

      left++;
      right--;
    }

    console.log(output);
  }
}