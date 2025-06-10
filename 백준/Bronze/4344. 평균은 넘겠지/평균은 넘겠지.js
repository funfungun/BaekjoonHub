const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const C = Number(input[0]);
for (let i = 1; i <= C; i++) {
  const line = input[i].split(" ").map(Number);
  const N = line[0];
  let sum = 0;
  let avg = 0;
  let count = 0;

  for (let j = 1; j <= N; j++) {
    sum += line[j];
  }
  avg = sum / N;

  for (let k = 1; k <= N; k++) {
    if (line[k] > avg) {
      count++;
    }
  }
  console.log(((count / N) * 100).toFixed(3) + "%");
}