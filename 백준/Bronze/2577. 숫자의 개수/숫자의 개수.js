const fs = require("fs");
const [A, B, C] = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const product = String(A * B * C);

const count = new Array(10).fill(0);

for (let i = 0; i < product.length; i++) {
  const num = Number(product[i]);
  count[num]++;
}

for (let i = 0; i < 10; i++) {
  console.log(count[i]);
}