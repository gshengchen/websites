
var o ={x:1};

console.log("x" in o);
console.log("y" in o);
console.log("toString" in o);

console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("toString"));
console.log(o.x !== undefined);
console.log(o.z !== undefined);