const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  const line = input[i];
  console.log(
    line == "Algorithm"
      ? "204"
      : line == "DataAnalysis"
      ? "207"
      : line == "ArtificialIntelligence"
      ? "302"
      : line == "CyberSecurity"
      ? "B101"
      : line == "Network"
      ? "303"
      : line == "Startup"
      ? "501"
      : line == "TestStrategy"
      ? "105"
      : null
  );
}