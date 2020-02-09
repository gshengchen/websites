
function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.prototype)
        return Object.create(p);
    var t = typeof p;
    if (t !== "object" && t !== "function")
        throw TypeError();

    function f() {};
    f.prototype = p;
    return new f();
}

var o ={
    x:1.0,
    y:1.0,
    get r(){
        return Math.sqrt(this.x * this.x + this.y + this.y);
    },
    set r(newValue){
        var oldValue = Math.sqrt(this.x * this.x + this.y + this.y);
        this.x *= newValue / oldValue;
        this.y *= newValue / oldValue;
    },
    get theta(){
        return Math.atan2(this.y,this.x);
    }
};

console.log(o.r);
console.log(o.theta);
o.r = 2;
console.log(o.r);

var p = inherit(o);
p.x = 2;
p.y = 2;
console.log(p.r);
