
var o1 = {
    x: 1,
    y: 2
};
console.log(o1.toString());//=>"[object Object]"

var a1 =[1,2,3];
console.log(a1.toString());
function fx(){
     var i;
     i =3;
    return true;
}

console.log(fx.toString());

var a2 =[1,2,{a:1,b:2}];
console.log(a2.toString());

var pp = /\d+/g;
console.log(pp.toString());
var d1 = new Date();
console.log(d1);

console.log(a1.valueOf());
console.log(o1.valueOf());
console.log(pp.valueOf());
console.log(d1.valueOf());
console.log(o1+1);




