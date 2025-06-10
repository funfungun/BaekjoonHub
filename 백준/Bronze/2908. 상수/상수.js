const fs = require("fs");
const [A, B] = fs.readFileSync(0, 'utf-8').toString().trim().split(" ");

const a = Number(A[2] + A[1] + A[0]);
const b = Number(B[2] + B[1] + B[0]);

console.log(Math.max(a, b));