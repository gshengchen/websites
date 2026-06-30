
var a,b;
console.log(a === b); // =>true

var s1 ="chen";
var s2 = "chen";

console.log(s1 === s2); //=>true

var o1={x:1,y:2},o2={x:1,y:2};
var a1=[],a2=[];
console.log(o1 == o2); //=>false
console.log(a1 == a2); //=>false

var a3 = [];
var b1 = a3;
b1[0] = 1;

console.log(a3[0]); //=> 1
console.log(a3 === b1); // =>true

function equalArray(a,b){
    if(a.length != b.length)
       return false;
    for(var i =0 ;i <a.length; i++)
       if(a[i] != b[i])
           return false;
       return true;
}

console.log(equalArray(a1,a2)); // =>true