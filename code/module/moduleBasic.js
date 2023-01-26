const num = 12;

if (num < 12) {
  console.log("num is less then 12");
} else {
  console.log("num is greater then 12");
}
console.log("HI shankar the num is " + " " + num);

console.log("Its give path of the file" + " " + __dirname);
console.log("File name path" + " " + __filename);

console.log(
  "****************************************************************************"
);

// setInterval(() => {
//   console.log("Hi Shankar");
// }, 1000); // it will print every one sec in terminal

console.log(
  "*************************MODULE TOPIC*********************************"
);

// const names = require("./name");
// const sayHi = require("./Hifun");
// const data = require("./module1");
// console.log(data);
// console.log(names);
// sayHi(names.Alex);
// sayHi(names.Sanjay);
require("./module2");
