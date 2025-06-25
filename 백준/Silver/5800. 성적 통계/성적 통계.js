const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const K = Number(input[0]);
for (let i = 1; i <= K; i++) {
  const [N, ...num] = input[i].split(" ").map(Number);
  num.sort((a, b) => b - a);

  let max = 0;
  for (let j = 0; j < N - 1; j++) {
    if (num[j] - num[j + 1] > max) {
      max = num[j] - num[j + 1];
    }
  }

  console.log(`Class ${i}`);
  console.log(
    `Max ${Math.max(...num)}, Min ${Math.min(...num)}, Largest gap ${max}`
  );
}