// ○ HTTP
//     ■ http.METHODS
//     ■ http.STATUS_CODES
//     ■ http.createServer([options][, requestListener])
//     ■ http.get(options[, callback])
//     ■ http.get(url[, options][, callback])
//     ■ http.maxHeaderSize
//     ■ http.request(options[, callback])
//     ■ http.request(url[, options][, callback])
// ○ HTTPS
//     ■ 同HTTP
import http from 'node:http';
import https from 'node:https';
// let methods = http.METHODS;
// console.log(methods);
let statuscodes = http.STATUS_CODES;

// http.maxHeaderSize = 200;

// console.log(statuscodes);
const options = {
  keepAlive: true,
};
//底层依赖 net 模块 处理
const server = http.createServer(options, (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write('数据1');
  res.write('数据2');
  res.end('TS 环境下的 HTTP 服务器');
});
//启动成功
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// http.get('http://localhost:3000', (res) => {
//   let response = '';
//   res.on('data', (chunk) => {
//     response += chunk;
//   });
//   res.on('end', () => {
//     console.log(response);
//   });
// });

const options1 = {
  // 1. 配置请求的基础信息（替代 URL 中的 `http://localhost:3000/user?name=张三`）
  protocol: 'http:',
  hostname: 'localhost',
  port: 3000,
  path: '/get', // 包含查询参数的请求路径
  // 2. 配置请求头（模拟浏览器请求，传递额外信息）
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Node.js/http.get',
    Accept: 'text/plain; charset=utf-8',
    'X-Custom-Header': 'Node.js-Request', // 自定义请求头（业务场景常用）
  },
  // 3. 配置超时时间（5 秒超时）
  timeout: 5000,
};
http.get(options1, (res) => {
  let response = '';
  res.on('data', (chunk) => {
    response += chunk;
  });
  res.on('end', () => {
    console.log(response);
  });
});
const options2 = {
  protocol: 'http:',
  hostname: 'localhost',
  port: 3000,
  path: '/post',
  method: 'POST',
};
let clientRequest = http.request(options2, (res) => {
  let response = '';
  res.on('data', (chunk) => {
    response += chunk;
  });
  res.on('end', () => {
    console.log(response);
  });
});
//http.request() 和 http.get() 不同：http.get() 是专门用于 GET 请求的封装，会自动调用 req.end() 结束请求；
// 而 http.request() 是通用请求方法（支持 POST/PUT/DELETE 等），Node.js 不会自动结束请求，必须手动调用 req.end()。
clientRequest.end();

https.get()
