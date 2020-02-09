var o = {
    x:1,
    y:[false,null,""]
};

var s = JSON.stringify(o);
var p = JSON.parse(s);

console.log(p);