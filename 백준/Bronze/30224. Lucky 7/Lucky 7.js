const fs = require("fs");
const n = fs.readFileSync(0, 'utf-8').toString().trim();

if (!n.includes("7")) {
  if (Number(n) % 7 !== 0) {
    console.log(0);
  } else {
    console.log(1);
  }
} else {
  if (Number(n) % 7 !== 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}