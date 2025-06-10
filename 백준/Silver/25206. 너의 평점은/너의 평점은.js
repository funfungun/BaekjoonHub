const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

let grade = 0;
let credits = 0;
for (let i = 0; i < 20; i++) {
  const line = input[i].split(" ");
  let credit = Number(line[1]);
  credits += credit;

  switch (line[2]) {
    case "A+":
      grade += credit * 4.5;
      break;
    case "A0":
      grade += credit * 4.0;
      break;
    case "B+":
      grade += credit * 3.5;
      break;
    case "B0":
      grade += credit * 3.0;
      break;
    case "C+":
      grade += credit * 2.5;
      break;
    case "C0":
      grade += credit * 2.0;
      break;
    case "D+":
      grade += credit * 1.5;
      break;
    case "D0":
      grade += credit * 1.0;
      break;
    case "F":
      grade += credit * 0;
      break;
    case "P":
      credits -= credit;
      break;
    default:
      break;
  }
}

console.log(grade / credits);