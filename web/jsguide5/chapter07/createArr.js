var a1 = [];
var a2 = [1,23,{x:1}];
var a3 =new Array();
var a4 =new Array(3);
var a5 =new Array("2");

console.log(a1.length);
console.log(a2.length);
console.log(a3.length);
console.log(a4.length);
console.log(a5);
a3[0] = 34;
a3[1.00] = 12;
a3["tt"] = 12;
console.log(a3.length);
console.log(a3);
console.log(a3[2]);