class MyError extends Error {
  constructor(message, errorCode, data) {
    super(message);
    this.errorCode = errorCode;
    this.data = data;
  }
}

let myError = new MyError('MyError', '5000');
//引用错误
try {
  console.log(s);
} catch (e) {
  console.log(e.name);
}
//类型错误
try {
  const s = 'aaa';
  s();
} catch (e) {
  console.log(e.name);
}
//RangeError 范围错误
try {
  let arr = new Array(-1);
} catch (e) {
  console.log(e.name);
}
//URI异常
try {
  decodeURI('%');
} catch (e) {
  console.log(e.name);
}

class MySyntaxError extends SyntaxError {
  constructor(message, errorCode, data) {
    super(message);
    this.errorCode = errorCode;
    this.data = data;
  }
}
try {
  throw new MySyntaxError();
} catch (e) {
  if (MySyntaxError instanceof SyntaxError) {
    console.log(e.name);
  }
  console.log(MySyntaxError instanceof SyntaxError);
}
