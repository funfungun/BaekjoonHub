const fs = require("fs");
const [Max, Mel] = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [t1, e1, f1] = Max.split(" ").map(Number);
const max = t1 * 3 + e1 * 20 + f1 * 120;
const [t2, e2, f2] = Mel.split(" ").map(Number);
const mel = t2 * 3 + e2 * 20 + f2 * 120;

console.log(max > mel ? "Max" : max < mel ? "Mel" : "Draw");