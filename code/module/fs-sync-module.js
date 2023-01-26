const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./Condent/first.txt", "utf-8");
const second = readFileSync("./Condent/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./Condent/testWriteFile.txt",
  `Here is the result ${first},${second}`,
  { flag: "a" }
);
