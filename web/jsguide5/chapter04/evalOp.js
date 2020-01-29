
//var geval = eval;
var x ="global";
this.y = "global";
var geval = eval;
function f(){
    var x ="local";
    eval("x += ' changed';");
    return x;
}
function g(){
    var y ='local';
    geval("y += ' changed';");
    return y;
}
console.log(f(),x); 
console.log(g(),y);