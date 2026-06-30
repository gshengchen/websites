
var s = "hello,world"; // 定义字符串
console.log(s.charAt(0)); //=> h;
console.log(s.charAt(s.length - 1)); // 返回d
console.log(s.substring(1,4));//返回ell
console.log(s.substr(1,4));//返回ello
console.log(s.charCodeAt(1));//返回Unicode编码
console.log(String.fromCharCode(101));
console.log(s.indexOf("h"));
console.log(s.lastIndexOf("l"));
console.log(s.includes("ii"));//返回false
console.log(s.includes("ll"));//返回true
console.log(s.match("hello"));
//var reg = /h?llo/;
console.log(s.match(/h?llo/));
console.log(s.replace("h","o"));
console.log(s.repeat(2));
console.log(s.search(/wor/));
console.log(s.slice(1,4));
console.log(s.slice(-3));
console.log(s.split(",",1));
console.log(s.startsWith("he"));
console.log("====================");
  var text = "testing: 1, 2, 3";
  var pattern = /\d+/g;
  console.log(pattern.test(text));
  console.log(text.search(pattern));
  console.log(text.match(pattern));
  console.log(text.replace(pattern, "#"));
  console.log(text.split(/\D+/));
