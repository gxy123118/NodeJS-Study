import readline from 'node:readline';
import { Readable } from 'node:stream';
import fs from 'fs';

let readable = new Readable({
  read() {
    this.push('111\n222\n333');
    this.push(null);
  },
});
//监听输入流（input）的 data 事件 → 对原始数据做行分割处理 → 触发自身 line 事件 → 自动调用 output 可写流的 write 方法输出行数据，整个过程是嵌套的事件触发 + 数据加工 + 流传递
let readline1 = readline.createInterface({
  input: readable,
  output: process.stdout,
  terminal: false,
});
// readline1.question('请输入：', (answer) => {
//   console.log(`你输入的是：${answer}`);
//   readline1.close();
// });
// readline1.on('line', (line) => {
//   console.log(line);
// })
//专门遍历「异步可迭代对象」的语法

const readFileLine=readline.createInterface({
  input:fs.createReadStream('a.txt'),
  output:process.stdout,
  terminal:false
})
async function readFileLineDemo() {
  for await (const line of readFileLine) {
    console.log(line);
  }
}
console.log('main');
readFileLineDemo();




