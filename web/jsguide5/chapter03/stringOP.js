var msg ='hello, ' + 'world' ; //生成字符串 hello， world
var lastChar = msg.charAt(msg.length -1) ; // 生成d
var sub= msg.substr(1,4);//生成ello。
var i = msg.indexOf('e');// 

console.log(msg);
console.log(lastChar);
console.log(sub);
console.log(i);
console.log(msg.length); 
console.log(msg.charCodeAt(0));
var mt = msg.charCodeAt(0).toString(16);
console.log(typeof mt);
console.log(mt);

console.log(String.fromCharCode(msg.charCodeAt(0)));

var str = "Hello chen!";
console.log(str.bold().blink());
console.log(str.link('www.163.com'));
console.log(str.anchor('www.163.com'));