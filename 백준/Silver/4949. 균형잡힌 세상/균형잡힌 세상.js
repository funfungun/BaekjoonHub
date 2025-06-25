const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const stack = [];
  const line = input[i];
  let isBalance = true;

  for (let j = 0; j < line.length; j++) {
    if (line[j] === "(" || line[j] === "[") {
      stack.push(line[j]);
    } else if (line[j] === ")") {
      if (stack.pop() !== "(") {
        isBalance = false;
        break;
      }
    } else if (line[j] === "]") {
      if (stack.pop() !== "[") {
        isBalance = false;
        break;
      }
    }
  }

  if (isBalance && stack.length === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}