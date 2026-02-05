import os from 'os';
import process  from 'node:process';
console.log(os.hostname());

console.log(os.tmpdir());
console.log(os.platform());
// console.log(os.cpus());
let number = os.freemem();
console.log(number / 1000 / 1000 / 1000);
console.log(os.totalmem() / 1000 / 1000 / 1000);
console.log(os.arch());
let message = os.userInfo();
console.log(message);
console.log(os.uptime() / 360);
let message1 = os.networkInterfaces();
console.log(message1);

