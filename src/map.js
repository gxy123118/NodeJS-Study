// 使用Set来去除一个数组中的重复元素
// 使用Map来存储并查询一组键值对数据
let set = new Set();
let num = [1, 2, 2, 2, 3, 3, 4, 5];
// num.forEach((i) => {
//   set.add(i);
// });
// let numbers = num.map((i) => i);
//
// for (let setElement of set) {
//   console.log(setElement);
// }
let map = new Map();
let count = 0;
num.forEach((i) => {
  map.set(count, i);
  count++;
});
// let mapIterator = map.values();
// for (let mapIteratorElement of mapIterator) {
//   console.log(mapIteratorElement);
// }
// console.log('------');
// mapIterator = map.keys();
// for (let mapIteratorElement of mapIterator) {
//   console.log(mapIteratorElement);
// }
//
// mapIterator = map.entries();
// for (let mapIteratorElement of mapIterator) {
//   console.log(mapIteratorElement);
// }
// 自定义子类和父类，实现class继承，子类需要重写父类方法
class Animal{
  constructor(name) {
    this.name = name;
  }
  eat(){
    console.log(this.name+"在吃");
  }
}
class Dog extends Animal {
  constructor(name,age) {
    super(name);
    this.age=age;
  }
  eat() {
    console.log("dog"+this.name+this.age+"在吃");
  }
}
let d=new Dog("xiaobai",20);
d.eat();
// console.log(Dog.prototype.__proto__ === Animal.prototype);
