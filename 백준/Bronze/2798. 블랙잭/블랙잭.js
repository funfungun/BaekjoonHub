const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const line = input[1].split(" ").map(Number);

let max = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      if (
        line[i] + line[j] + line[k] > max &&
        line[i] + line[j] + line[k] <= M
      ) {
        max = line[i] + line[j] + line[k];
      }
    }
  }
}

console.log(max);