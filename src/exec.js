import { exec, execSync, spawn, spawnSync } from 'child_process';
// //返回子进程对象（子进程执行命令）
// //exec 会在子进程执行期间，将 stdout（正常输出）和 stderr（错误输出）全部缓存到内存中，只有当命令完全执行完成后，才会通过回调函数一次性返回所有输出结果。
//存在内存限制（默认 maxBuffer: 1MB）
let childProcess = exec('node --version', (error, stdout, stderr) => {
  // console.log(stdout);
});
// childProcess.stdout
// // console.log(childProcess);
// //返回Buffer对象，输出的内容在buffer里（子进程执行命令）
// let execSync1 = execSync('node --version');
// // console.log(execSync1.toString());
// // console.log('main');
// // ■ exec & execSync
// // ■ spawn & spawnSync (与exec的区别)
// // ■ 其它：子进程环境（子进程环境变量、子进程工作目录）、父子进程之间标准输入输出的交互等
//
// //spawn默认不支持shell命令
// //spawn 不会缓存输出，而是将 stdout 和 stderr 作为「可读流（Readable Stream）」，命令执行过程中产生的输出会实时通过流事件（data 事件）返回，主进程可以实时监听和处理。
let sp = spawn('dir /l', {
  shell: true,
});
// // sp.stdout.on('data', (data) => {
// //   console.log(data);
// // })
// let spA = spawnSync('node', ['--version'], {});
// // console.log(spA)
// const ls = spawn("pwd", [], {
//   env: { CUSTOM_VAR: 'Hello World' },
//   cwd: '/',
//   shell: true,
// });
//
// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
// // 标准输入（stdin）：父进程可以通过 stdin 向子进程发送数据。
// //
// // 标准输出（stdout）：子进程的输出可以通过 stdout 流传回父进程。
// //
// // 标准错误（stderr）：子进程的错误输出通过 stderr 流传回父进程。
//
//
// // let child= spawn("node --version")
// // child.stdout.on('data', (data) => {})
//
// const child = spawn('findstr', ['apple'], { shell: true });
//
// spawnSync('findstr', ['apple'], { shell: true })
// child.stdin.write('apple orange banana\n');
// child.stdin.write('grape apple watermelon\n');
// child.stdin.write('kiwi mango\n');
//
// child.stdin.end(); // 结束输入流
//
// // 监听子进程的标准输出
// child.stdout.on('data', (data) => {
//   console.log(`stdout: ${data.toString()}`); // 打印匹配到的行
// });
// let execSync1 = execSync('node --version');
// console.log(execSync1.toString());
// console.log("main");
// let childProcess = spawn('more', [], { shell: true }); // Linux/macOS
// // let childProcess = spawn("more", [], { shell: true }); // Windows
//
// childProcess.stdin.write('Hello World');
// // childProcess.stdin.end();
//
// childProcess.stdout.on('data', (data) => {
//   console.log(data.toString()); // 输出: Hello World
// });
let childProcess1 = exec('more', (error, stdout, stderr) => {
  console.log(stdout);
});
childProcess1.stdin.write('Hello World')
childProcess1.stdin.end();
