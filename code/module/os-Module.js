const os = require("os");

const user = os.userInfo();
console.log(user); //info about current user

console.log(`The system up time is ${os.uptime()}`); //system uptime

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
