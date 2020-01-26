
var n = 100;
var s = n + ' bottles of beer on the wall.';
var n = n + ''; //加一个空字符串，可以把数字转换成字符串
var String_value = String(160);//用String（）显示转换成字符串。
var n2 =2018;
var strNum = n2.toString();//使用toString()方法转换。

console.log(s);
console.log(n);
console.log(String_value);
console.log(strNum);

var n = 0xff;
var bin_string = n.toString(2);//二进制
var oct_string = '0' + n.toString(8);//八进制
var hex_string = '0X' + n.toString(16);//十六进制 

console.log(bin_string);
console.log(oct_string);
console.log(hex_string);

var n = 123456.789;
console.log(n.toFixed(0));// 123457
console.log(n.toFixed(2));// 123456.79
console.log(n.toExponential(1));//1.2e+5
console.log(n.toExponential(3));//1.235e+5
console.log(n.toPrecision(4));//1.235e+5
console.log(n.toPrecision(5));//1.235e+5
console.log(n.toPrecision(7));//123456.8

