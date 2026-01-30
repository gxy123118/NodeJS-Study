// let arrayBufferBuffer = Buffer.from('哇哇哇哇哇', 'utf-8');
//
// console.log(arrayBufferBuffer);
// console.log(arrayBufferBuffer.toString('utf-8'));
// console.log(arrayBufferBuffer.toJSON());
// let arrayBufferBuffer1 = Buffer.from([1, 2, 3]);
// console.log(arrayBufferBuffer1.toJSON());
// let json = '{"name": "test", "age": 18}';
// console.log(json);
// // console.log(Buffer.from(json));
// let json2 = {
//   type: 'Buffer',
//   data: [
//     229, 147, 135, 229, 147, 135, 229, 147, 135, 229, 147, 135, 229, 147, 135,
//   ],
// };
// let b = Buffer.from(json2, 'utf-8');
// console.log(b.toString());
// let json = '{ "type": "Buffer", "data": "[1, 2, 3, 4, 5]" }';
// let parse = JSON.parse(json);
// console.log(parse);
// ■ 分配缓冲区
// ■ 字符串和buffer的互相转换
// ■ JSON 序列化和反序列化缓冲区
let buffer = Buffer.alloc(10);
buffer.writeUInt32LE(1234, 0);
buffer.writeUInt32LE(128, 4);
buffer.writeUInt32LE(128, 6);
let number = buffer.readUInt32LE(6);
console.log(number);
let str = '你好hello';
let buffer2 = Buffer.from(str, 'utf8');
console.log(buffer2);
console.log(buffer2.toString());
console.log(buffer2.toJSON());

let obj = {
  type: 'Buffer',
  data: [65],
};
let from = Buffer.from(obj);
console.log(from.toString());
