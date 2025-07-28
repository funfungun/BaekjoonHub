const fs = require("fs");
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim()) * 7;

const year = 2024 + Math.floor(N / 12);
const month = 1 + (N % 12);
console.log(year, month);