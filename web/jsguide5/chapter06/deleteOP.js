
var a = {p: {x:1}};
var b =a.p;
delete a.p;
console.log(b.x);

console.log(delete a.p);
console.log (delete a.o);
console.log(delete a.toString);
console.log(delete Object.prototype);

var x =1 ;
console.log(delete x);

function f(){

}

console.log(delete f);
this.y = 2;
console.log(delete this.y);