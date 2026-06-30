
var o = {x:1,y:2};
delete o.x;
console.log("x" in o);

var a =[1,2,3];
delete a[2];
console.log("2" in a);
console.log(a.length);

