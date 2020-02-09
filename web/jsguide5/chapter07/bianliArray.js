
var o ={x:1,y:2,z:3};

var keys = Object.keys(o);

var values = [] ;

for (var i = 0, len = keys.length; i < len ; i++){
    values[i] = o[keys[i]];
    
}

console.log(values);