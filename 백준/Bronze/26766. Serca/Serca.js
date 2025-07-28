const fs = require("fs");
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

const arr = [];
arr.push(" @@@   @@@ ");
arr.push("@   @ @   @");
arr.push("@    @    @");
arr.push("@         @");
arr.push(" @       @ ");
arr.push("  @     @  ");
arr.push("   @   @   ");
arr.push("    @ @    ");
arr.push("     @     ");

for (let i = 0; i < N; i++) {
  console.log(arr.join("\n"));
}