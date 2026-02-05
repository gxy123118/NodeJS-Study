import { EventEmitter } from 'node:events';

let eventEmitter = new EventEmitter();
let abortController = new AbortController();
let signal = abortController.signal;

function f1(p1) {
  console.log(p1);
}

// 1. 绑定侦听器（传入 { signal }）
eventEmitter.on('e1', f1, { signal });
eventEmitter.on(
  'e1',
  (p1) => {
    console.log('e1触发111' + p1);
  },
  { signal },
);
eventEmitter.on(
  'e2',
  (p1) => {
    console.log('e2触发' + p1);
  },
  { signal },
);

// 2. 绑定后，先打印一次侦听器数量（验证初始绑定成功）
// console.log('--- 绑定后，侦听器数量 ---');
// console.log('e1 侦听器数量：', eventEmitter.listenerCount('e1')); // 预期输出 2
// console.log('e2 侦听器数量：', eventEmitter.listenerCount('e2')); // 预期输出 1
//
// // 3. 执行 abort() 取消侦听器
// abortController.abort();
//
// // 4. abort() 后，再打印一次侦听器数量（关键验证：是否被移除）
// console.log('\n--- abort() 后，侦听器数量 ---');
// console.log('e1 侦听器数量：', eventEmitter.listenerCount('e1')); // 预期输出 0（生效），实际输出 2（失效）
// console.log('e2 侦听器数量：', eventEmitter.listenerCount('e2')); // 预期输出 0（生效），实际输出 1（失效）
//
// // 5. 再触发事件
// console.log('\n--- 触发事件 ---');
// eventEmitter.emit('e1', '参数1');
// eventEmitter.emit('e2', '参数1');
//
// let newEM = new EventEmitter();
// newEM.on('message', async (msg) => {
//   let newVar = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(msg);
//     }, 2000);
//   }).then((re)=>{
//     console.log(re);
//   });
//   console.log(newVar);
// });
// newEM.emit('message',"触发");
// console.log("main")
let tar={
  name:"aaa"
}
let user={
  name:"bbb"
}
Object.assign(user,tar);
console.log(user);
const arr=[1,2,3,4]
arr.splice(1,2)
let promise = Array.fromAsync([1,3]);
promise.then((re)=>{
  console.log(re);
})
// console.log(arr);