import path from 'path';
//根据当前操作系统的路径分隔符（Windows 上是 \，Unix 和 macOS 上是 /）来处理路径。
let s = path.join("/a","a//");
console.log(s);
let s1 = path.resolve("../");
console.log(s1);
console.log(path.relative(s1, s));

let s2 = path.resolve("exec.js");
console.log(s2);

//移除扩展名
console.log(path.basename(path.resolve(s2),".js"));

console.log(path.extname(s2));

console.log(path.dirname(s2));
//将路径转换为对象
console.log(path.parse(s2));
