var fs = require("fs");

const depths = fs.readFileSync("puzzleInput.txt").toString().split("\n");
let depthIncreaseCounter = 1; // starts at 1 since the first measurement is bigger than undefined :)

// Part one

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

// Part two

const add = (sum, a) => {
  return Number(sum) + Number(a);
};

let prevDepth = 0;
let counter = 0;

depths.forEach((_, index) => {
  if (index === 0) {
    return;
  }
  const calculatedDepth = depths.slice(index, index + 3).reduce(add, 0);
  if (calculatedDepth > prevDepth) {
    counter++;
  }
  prevDepth = calculatedDepth;
});

console.log(
  "Number of measurements larger than the previous measurement:",
  counter
);
