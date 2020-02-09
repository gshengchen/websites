var o = {x:1};
var p = Object.create(o);

console.log(o.isPrototypeOf(p));