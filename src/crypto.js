import * as crypto from 'node:crypto';
//创建hash实例，指定hash算法
let hash = crypto.createHash('sha256');
//对指定数据加密，多次调用相当于拼接传入
let hash1 = hash.update('hello world').update('hello world');
//生成最终的哈希结果，调用后该哈希实例会被销毁（无法再调用 update 或 digest，否则报错）。
// 一个哈希实例只能调用一次 digest，多次调用会抛出Error: Digest already called 异常。
console.log(hash1.digest("base64"));
