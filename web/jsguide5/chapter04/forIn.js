
var a = [1,2,3,4];

for(var p in a){
    console.log(a[p]);
}

var o = {x:1,y:2};

var a2 = [];
var i =0;

for(a2[i++] in o);

for(var p2 in a2){
    console.log(a2[p2]);
}