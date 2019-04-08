
function square(x){
    return x*x;
}

console.log(square(12));

var ss = function(x){return 2*x;};

console.log(ss(4));

/* jshint -W054 */
var s3 = new Function('x','return x*x;');
console.log(s3(4));
