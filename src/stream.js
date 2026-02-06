import Stream, { Duplex, PassThrough, pipeline, Transform } from 'node:stream';
import { read } from 'node:fs';
import fs from 'fs';
const Readable = Stream.Readable;
const Writable = Stream.Writable;
// const readable = new Readable({
//   read() {
//     this.push('Hello, Stream!'); // 推送数据到流
//     this.push(null); // 表示数据已经结束
//   },
// });
//
// readable.on('data', (chunk) => {
//   process.stdout.write(chunk);
// });
//
// // 将数据输出到标准输出
// // readable.pipe(process.stdout);
//

// let writable = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString()); // 将数据写入控制台
//     callback(null, chunk.toString());
//   },
// });
//
// writable.write('aaaaaaaaaaa');
// //process.stdout 是 Node.js 内置的可写流实例（属于 tty.WriteStream，继承自 Writable），
// // Node.js 已经帮我们封装好了「底层输出逻辑」
// process.stdout.write('111');
//
// console.log('---------------------');
//
// //读写流
// let duplex = new Duplex({
//   read() {
//     this.push('Hello, Duplex!');
//     this.push(null);
//   },
//   write(chunk, encoding, callback) {
//     console.log('读写流' + chunk.toString());
//     callback(null);
//   },
// });
// duplex.on('data', (chunk) => {
//   console.log(chunk.toString());
// });
// duplex.write('duplex1');
// duplex.write('duplex2');
// 允许你在读写数据时进行转换处理。它可以修改或转化数据流中的内容。
//外部 → transform.write() → 可写端输入 → transform 方法转换 → this.push() → 可读端输出 → 外部 data 事件消费。
// let transform = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk + '转换');
//     callback(null);
//   },
// });
// transform.write('transform1');
// transform.write('transform2');
// transform.on('data', (chunk) => {
//   console.log('tran读：' + chunk.toString());
// });
// transform.on('close',()=>{
//   console.log('tran关闭');
// })
// console.log('------------------');
// let readable1 = new Readable({
//   read() {
//     this.push('可读流');
//     this.push(null);
//   },
// });
// let writable1 = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback(null);
//   },
// });
// // let writable2 = new Writable({
// //   write(chunk, encoding, callback) {
// //     console.log(chunk.toString());
// //     callback(null);
// //   },
// // });
//
// readable1.pipe(transform).pipe(writable1);
//
// // let passThrough = new PassThrough();
// //
// pipeline(readable1,transform, writable1, (err) => {
//   console.log(err);
// })
const obj = {
  name: '111',
  age: 12,
};
let readable = new Readable({
  read() {
    this.push(obj);
    this.push(null);
  },
  objectMode: true,

});
readable.on('data', (chunk) => {
  console.log(chunk);
})

let readStream = fs.createReadStream("a.txt",{highWaterMark:3});
readStream.on("data", (chunk) => {
  console.log(chunk.toString());
})
