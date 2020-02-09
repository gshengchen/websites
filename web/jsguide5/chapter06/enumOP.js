
var o ={x:1,y:2,z:3};
console.log(o.propertyIsEnumerable("toString"));

for(var p in o){
    console.log(p);
}

console.log(Object.keys(o));
console.log(Object.getOwnPropertyNames(o));