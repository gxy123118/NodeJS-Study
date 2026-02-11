// // ○ File System
// // ■ 低级别、高级别api的区别：低级别例如fs.open，系统级别api，高级别如readFileSync，基于低级别实现。
// // ■ 4种抽象类型
// //     ● Synchronous：例如const { readFileSync } = require('fs')
// //     ● Callback based：例如const { readFile, writeFile } = require('fs')
// //     ● Promise based：例如const { readFile, writeFile } = require('fs').promises
// //     ● Stream based：例如const { createReadStream, createWriteStream } = require('fs')
// // ■ 文件读写
// //     ● readFile API（4种抽象类型均可）
// //     ● writeFIle API（4种抽象类型均可）
// // ■ 文件夹读写
// //     ● readdir API（4种抽象类型均可）
// //     ● opendir API（4种抽象类型均可）
// // ■ 文件元数据
// //     ● stat API（4种抽象类型均可）
// // ■ 与文件系统交互
// //     ● watch API
import fs from 'fs';
// // fs.open('a.txt', 'r+', (err, fd) => {
// //   if (err) {
// //     throw err;
// //   }
// //   console.log(fd);
// //   const buffer = Buffer.alloc(1024);
// //
// //   fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead, buffer) => {
// //     if (err) {
// //       throw err;
// //     }
// //     console.log('读取到：' + buffer.toString());
// //   });
// //   //null表示从指针默认位置开始写
// //   const buffer1 = Buffer.from('新数据');
// //   fs.write(fd, buffer1, 0, buffer1.length, null, (err, bytesRead, buffer1) => {
// //     if (err) {
// //       throw err;
// //     }
// //     console.log(buffer1.toString('utf-8'));
// //   });
// //   fs.fstat(fd, (err, fd) => {
// //     if (err) {
// //       throw err;
// //     }
// //     console.log(fd);
// //   })
// // });
//
// //同步api
// let readFileSync = fs.readFileSync('a.txt');
// console.log(readFileSync.toString());
//
// //基于回调的api
// fs.readFile('a.txt', (err, data) => {
//   console.log(data.toString());
// });
// fs.writeFile('a.txt', '222', { flag: 'a+' }, () => {});
//
// //基于promise的回调
// let promises = fs.promises;
// let promise = promises.readFile('a.txt');
// promise.then((data) => {
//   console.log(data.toString());
// });
//
// //基于流的api
// let readStream = fs.createReadStream('a.txt', { highWaterMark: 3 });
// readStream.on('data', (data) => {
//   console.log('流读取到：' + data.toString());
// });
// let writeStream = fs.createWriteStream('a.txt', {
//   highWaterMark: 3,
//   flags: 'a+',
// });
// writeStream.write('啊啊啊啊');
//
// // fs.readdir("../", (err, data) => {
// //   console.log(data.toString());
// // })
//
// let statsPromise = fs.promises.stat('a.txt');
// statsPromise.then((data) => {
//   console.log(data);
// });
// // let fsWatcher = fs.watch('a.txt', null, (eventType, filename) => {
// //   if (filename) {
// //     console.log(`${filename} file has been modified`);
// //   }
// //   console.log(eventType);
// // });
// // setTimeout(()=>{
// //   fsWatcher.close();
// // },10000)
//
// console.log('main');

// async function dirDemo() {
//   let dir = await fs.promises.opendir('./');
//
//   for await (const file of dir) {
//     console.log(file.name);
//   }
// }
// dirDemo();
// console.log("Done");
// fs.open("a.txt", "r+", (err, fd) => {
//   if (err) {
//     throw err;
//   }
//   const buffer = Buffer.alloc(1024);
//   fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead, buffer) => {
//     if (err) {
//       throw err;
//     }
//     console.log(bytesRead);
//     console.log("读取到：" + buffer.toString());
//   })
//   const buffer1 = Buffer.from("新数据");
//   fs.write(fd, buffer1, 0, buffer1.length, 3, (err, bytesRead, buffer1) => {
//     if (err) {
//       throw err;
//     }
//     console.log(bytesRead);
//     console.log(buffer1.toString("utf-8"));
//   })
// })
// let readFileSync = fs.readFileSync("a.txt");
// console.log(readFileSync.toString());
//
// fs.readFile("a.txt", (err, data)=>{
//   console.log(data.toString());
// })
//
// fs.promises.readFile("a.txt").then((data)=>{
//   console.log(data.toString());
// })
let readStream = fs.createReadStream("a.txt",{highWaterMark:2});
readStream.on("data", (chunk) => {
  console.log(chunk.toString());
})
//
// fs.readdir("../", (err, data) => {
//   console.log(data.toString());
// })
// fs.stat("a.txt", (err, data) => {
//   console.log(data);
// })
//基于操作系统底层的文件系统事件（如 inotify、kqueue 等），性能较高。（实时）
// let fsWatcher = fs.watch("temp.txt", (eventType, filename) => {
//
//   if (filename) {
//     console.log(`${filename} file has been modified`);
//   }
//   console.log(eventType);
// });
//
// //通过轮询机制定期读取文件状态，性能较低。非实时
// fs.watchFile("temp.txt", (curr, prev) => {
//   console.log('文件状态发生变化');
//   console.log('当前状态:', curr);
//   console.log('之前状态:', prev);
// })
// console.log('main');
