console.debug('stdout:');
console.time();
function foo() {
  console.trace('Trace here');
}

function bar() {
  foo();
}

bar();
console.count("aaa")
console.count("bbb")
console.count("bbb")

console.timeEnd();