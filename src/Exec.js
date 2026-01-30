import { exec, execSync, spawn, spawnSync } from 'child_process';
//返回子进程对象（子进程执行命令）
let childProcess = exec('node --version', (error, stdout, stderr) => {
  console.log(stdout);
});
// console.log(childProcess);
//返回Buffer对象，输出的内容在buffer里（子进程执行命令）
let execSync1 = execSync('node --version');
console.log(execSync1.toString());
console.log('main');
// ■ exec & execSync
// ■ spawn & spawnSync (与exec的区别)
// ■ 其它：子进程环境（子进程环境变量、子进程工作目录）、父子进程之间标准输入输出的交互等