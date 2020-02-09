
console.log(Object.getOwnPropertyDescriptor({x:1},"x"));
var random = {
    get octet() {
        return (Math.floor(Math.random() * 256));
    }
};
console.log(random.octet);
console.log(random.octet);

console.log(Object.getOwnPropertyDescriptor(random,"octet"));

var o ={};

Object.defineProperty(o,"x",{value:1,writable:true,enumerable:true,configurable:true});

console.log(Object.getOwnPropertyDescriptor(o,"x"));

console.log(o);
Object.defineProperties(o,{
    y:{value:2,writable:true,enumerable:true,configurable:true},
    z:{value:"chen2",writable:true,enumerable:true,configurable:true}

});

console.log (o);
Object.defineProperty(o,"z",{enumerable:false});
console.log(Object.getOwnPropertyDescriptor(o,"z"));