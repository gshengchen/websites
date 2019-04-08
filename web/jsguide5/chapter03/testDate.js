
var now = new Date(); //当前日期与时间
var xmas = new Date(2017,4,17,12,12);//
var d1 = new Date(1000000000);//从1970.1.1 毫秒数
var d2 = new Date('2018-11-22 06:18:00');// 日期字符串

console.log(now.toLocaleTimeString());
console.log(now.getDate());
console.log(now.getHours());
console.log(xmas);
console.log(xmas.getFullYear());
console.log(xmas.toLocaleDateString() + xmas.toLocaleTimeString());
console.log(d1);
console.log(d2.toLocaleString());

console.log(Date());