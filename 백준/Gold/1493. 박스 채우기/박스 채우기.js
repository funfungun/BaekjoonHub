const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [length, width, height] = input[0].split(" ").map(Number);
const N = Number(input[1]);
const cubes = new Array(20).fill(0);

for (let i = 2; i < N + 2; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  cubes[A] = B;
}

let volume = length * width * height;
let used = 0;
let filled = 0;

for (let i = 19; i >= 0; i--) {
  const cubeSize = 2 ** i;
  const cubeVolume = cubeSize ** 3;
  const fill = filled / cubeVolume;

  const X = Math.floor(length / cubeSize);
  const Y = Math.floor(width / cubeSize);
  const Z = Math.floor(height / cubeSize);
  const max = X * Y * Z;

  const useful = max - fill;
  const use = Math.min(useful, cubes[i]);

  filled += use * cubeVolume;
  used += use;
}

if (filled === volume) {
  console.log(used);
} else {
  console.log(-1);
}