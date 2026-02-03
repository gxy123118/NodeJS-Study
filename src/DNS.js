import dns from 'dns';
//单个 / 数组形式的 IP 信息,底层系统
dns.lookup(
  'www.baidu.com',
  {
    family: 4,
  },
  (err, address, family) => {
    console.log(address);
  },
);
// 返回「所有」符合条件的记录数组，远程dns
dns.resolve("www.baidu.com","A",(err, addresses)=>{
  console.log(addresses);
});

