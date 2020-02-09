
var x ={};

console.log(Object.isExtensible(x));

Object.preventExtensions(x);
x.a = 1;
console.log(x.a);
console.log(Object.isExtensible(x));