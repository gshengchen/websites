function classOf(o){
    if(o === null) return "Null";
    if(o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}

var o ={};
console.log(classOf(o));
console.log(classOf(1));
console.log(classOf(new Date()));
