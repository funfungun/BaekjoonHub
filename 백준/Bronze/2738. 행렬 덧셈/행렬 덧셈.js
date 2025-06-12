const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = [];
const B = [];

for (let i = 0; i < N; i++) {
  A.push(input[i + 1].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  B.push(input[i + 1 + N].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  let line = "";
  for (let j = 0; j < M; j++) {
    line += A[i][j] + B[i][j] + " ";
  }

  console.log(line.trim());
}