const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const line = input[i];
  const stack = [];
  let flag = true;

  for (let j = 0; j < line.length; j++) {
    if (line[j] === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        flag = false;
        break;
      }
      stack.pop();
    }
  }

  if (stack.length !== 0) {
    flag = false;
  }

  console.log(flag ? "YES" : "NO");
}