
var scope = "global";

function f(){
    console.log(scope);
    var scope = "local";
    console.log(scope);

}

//console.log(f());
f();
console.log(scope);