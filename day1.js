var fs = require("fs");

const depths = fs.readFileSync("puzzleInput.txt").toString().split("\n");
let depthIncreaseCounter = 1; // starts at 1 since the first measurement is bigger than undefined :)

depths.forEach((depth, index, depths) => {
  if (index === 0) {
    return;
  }
  if (depth > depths[index - 1]) {
    depthIncreaseCounter++;
  }
});

console.log(
  "Number of measurements larger than the previous measurement:",
  depthIncreaseCounter
);
