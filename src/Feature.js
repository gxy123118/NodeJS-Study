async function load() {
  let promise = await import('./module1.js');
  promise.f1();
}

console.log('main');
