
function inherit(p){
    if(p == null) throw TypeError();
    if(Object.prototype)
       return Object.create(p);
    var t = typeof p;
    if(t !== "object" && t !== "function")
       throw TypeError();
    
    function f(){};
    f.prototype = p;
    return new f();
}

var o = {x : "this is string"};
var o2 = inherit(o);

console.log(o2.x);

var unitcircle = {r:1};
var c = inherit(unitcircle);

c.x =1;
c.y =1;
c.r =2;
console.log(unitcircle.r);
console.log(c.r);

var o3 = inherit(o);
console.log(o3.propertyIsEnumerable("x"));
o3.y =4;
console.log(o3.propertyIsEnumerable("y"));