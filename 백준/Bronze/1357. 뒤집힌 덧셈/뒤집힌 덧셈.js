const fs = require("fs");
const [X, Y] = fs.readFileSync(0, 'utf-8').toString().trim().split(" ");

console.log(
  Number(
    String(
      Number(X.split("").reverse().join("")) +
        Number(Y.split("").reverse().join(""))
    )
      .split("")
      .reverse()
      .join("")
  )
);