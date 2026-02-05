import process from 'node:process';
import {f} from './process2.js';
import fs from 'fs';

process.ab="111";
//所有流底层都基础了事件发射器EventEmitter
// process.stdin.on('data', data => {
//   console.log(data);
// });
// process.stdin.on('end', data => {
//   console.log(data);
// })
console.log(process.ab);
// let promise = import("./process2.js");
// promise.then(data => {
//   data.f()
// })

process.stdout.write("输出\n");
process.stdout.write('输出1\n');
process.stderr.write("错误\n")
// process.exit(-1)
let memoryUsage = process.memoryUsage();
console.log(memoryUsage);
// 步骤 1：在代码块执行前，记录初始 CPU 状态（基准值）
const cpuStart = process.cpuUsage();
console.log(cpuStart);
// 步骤 2：执行你要统计的「特定同步代码块」（这里以密集循环为例，确保有 CPU 开销）
let total = 0;
for (let i = 0; i < 100000000; i++) { // 1 亿次循环，产生明显的 user 耗时
  total += i;
}

// 步骤 3：在代码块执行后，再次统计 CPU 状态，传入基准值求差值
const cpuDiff = process.cpuUsage(cpuStart);
console.log(cpuDiff);

//返回命令行中执行脚本时传入的参数
console.log(process.argv);

//返回环境变量对象
console.log(process.env);

//当前进程pid
console.log(process.pid);

//运行平台名称
console.log(process.platform);