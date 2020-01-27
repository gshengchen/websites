
var scope = "global";
function checkscope(){
    var scope = "local";
    return scope;
}
console.log(checkscope());
console.log(scope);

function checkscope2() {
    scope = "local";
    myscope = "local2";
    return [scope,myscope];
}
console.log(checkscope2());
console.log(scope);
console.log(myscope); 

var i2 = 34;
i3 =1;
this.i4 = 2;
console.log(delete i2);
console.log(delete i3);
console.log(delete i4);
