import readline from 'node:readline';
import { Readable, Writable } from 'node:stream';
import fs from 'fs';

let readable = new Readable({
  read() {
    this.push('111\n222\n333');
    this.push(null);
  },
});
const writable = new Writable({
  write(chunk, encoding, callback) {
    console.log("输出:"+chunk.toString());
    callback();
  },
});
//监听输入流（input）的 data 事件 → 对原始数据做行分割处理 → 触发自身 line 事件
let readline1 = readline.createInterface({
  input: readable,
  // 用来“回显/渲染终端”，
  output: process.stdout,
  terminal: true,
});
readline1.on('line', (line) => {
  console.log(`你输入的是：${line}`);
});
// readline1.question('请输入：', (answer) => {
//   console.log(`你输入的是：${answer}`);
//   readline1.close();
// });
// readline1.on('line', (line) => {
//   console.log(line);
// })
//专门遍历「异步可迭代对象」的语法
// readline1.on('line', (line) => {
//   console.log(line);
// });
// const readFileLine = readline.createInterface({
//   input: fs.createReadStream('a.txt'),
//   output: process.stdout,
//   terminal: false,
// });
// async function readFileLineDemo() {
//   for await (const line of readFileLine) {
//     console.log(line);
//   }
// }
// console.log('main');
// readFileLineDemo();
//
// let line = readline.createInterface({
//   input: fs.createReadStream('a.txt'),
//   output: process.stdout,
//   terminal: false,
// });
// line.on('line', (line) => {
//   console.log("检测到换行");
// });
