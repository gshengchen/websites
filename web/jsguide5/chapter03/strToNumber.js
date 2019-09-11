
var product = '12'*'2'; // 24
var str_value = '1234';
var number = str_value - 0;//快速转换为数字，但不能用+；

console.log(product);
console.log(str_value);
console.log(number);

console.log(parseInt('3 blind mice'));//3
console.log(parseFloat('3.14 meters'));//3.14
console.log(parseInt('12.51'));//12
console.log(parseInt('0xFF'));//255

console.log(parseInt('11',2));//3 (1*2+1)
console.log(parseInt('ff',16));//255 (15*16+15);
console.log(parseInt('077',8));//63 (7*8+7);
console.log(parseInt('077',10));//77 (7*10+7);

console.log(parseInt('$72.47'));// 不能解析返回NaN

console.log(Number('16.78'));//16.78
console.log(Number('12d'));//NaN