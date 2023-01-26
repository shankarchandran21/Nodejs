const { readFile, writeFile } = require("fs");

readFile("./Condent/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./Condent/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./Condent/asyn-write.txt",
          "Here is a " + first + ":>" + second,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log(result);
            }
          }
        );
      }
    });
  }
});
