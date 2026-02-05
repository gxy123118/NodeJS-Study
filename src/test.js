let s = Symbol();
let u = {
  name: 123,
  [s]: 222,
  test: function () {
    console.log(this.name);
  },
  test2: () => {
    console.log(this.name);
  },
};
Object.setPrototypeOf(u, { newP: 999 });
Object.defineProperty(u, 'name', {
  enumerable: false,
});
// console.log(u.propertyIsEnumerable('name'));
class A {
  constructor() {}
}
//B -> Function.prototype -> Object.prototype -> null  B.prototype -> Object.prototype -> null

function B() {
  return () => {
    console.log(this.name);
  };
}
// let b=new B();
// console.log(B.__proto__===Function.prototype);
const a = () => {};
u.test.call({ name: 'test' });
// console.log(a.prototype);
let test = u.test.bind({ name: 'bind' });
test();

let arr = [1, 3, 4, 5, 6];
const [na, nb, ...args] = arr;
console.log(na + nb);
console.log(args);
let obj = {
  name: 'test',
  age: 42,
  inner: {
    name: 'n',
    age: 22,
  },
  printA: function () {
    console.log('PRINT A');
  },
};
// console.log(name);
// console.log(age);
// console.log(name1);
//
// let str = `模板字符串
// ${name1}${age} ${1 + 2}`;
// let str2 = 'aaa' + (1 + 2);
// console.log(str);
// console.log(str2);
let empty = {};
Object.setPrototypeOf(empty, obj);
empty.printA();

let task1 = new Promise((resolve, reject) =>
  setTimeout(() => reject('aaa'), 1000),
);
let task2 = new Promise((resolve, reject) =>
  setTimeout(() => reject('bbb'), 1000),
);
let task3 = new Promise((resolve) => setTimeout(() => resolve('ccc'), 1000));

Promise.any([task1, task2, task3]).then((result) => {
  console.log(result);
});
// Promise.all([task1, task2, task3]).then((result) => {
//   console.log(result);
// });
// Promise.race([task1, task2, task3]).then((result) => {
//   console.log(result);
// });
// Promise.allSettled([task1, task2, task3]).then((result) => {
//   console.log(result);
// });
console.log('-----');

// console.log(Object.getPrototypeOf(u));
// let ownPropertyDescriptors = Object.getOwnPropertyDescriptors(u);

