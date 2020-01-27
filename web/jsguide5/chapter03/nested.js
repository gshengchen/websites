
var scope = "global scope";

function checkscope() {
    var scope = "local scope";
    function nested() {
        var scope = "nested scope";
        return scope;
        
    }
    return [scope,nested()];
    
}

console.log(checkscope());
console.log(scope);