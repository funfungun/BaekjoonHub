const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let [odd, even] = [0, 0];
const a = input[1].split(" ");

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 == 1) {
    odd++;
  } else {
    even++;
  }
}
console.log(even > odd ? "Happy" : "Sad");