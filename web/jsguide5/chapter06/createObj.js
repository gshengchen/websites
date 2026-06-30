
var empty = {};

var point = {x:0,y:0};
var point2 = {x:point.x,y:point.y + 1};

var book = {
    "main title": "Javascript",
    "sub-title" : "The DEfinitive Guide",
    "for" : "all audiences",
    author:{
        firstname : "chen",
        suname : "guosheng"
    }
};

var o = new Object();
var a = new Array(1,2,3);
var d = new Date();
var r = new RegExp("js");

console.log(empty);
console.log(point);
console.log(point2);
console.log(book.valueOf());

console.log(o);
console.log(a);
console.log(d);
console.log(r);

console.log(Object.prototype);

var co = Object.create(null);
var co2 = Object.create(point2);
var co3 = Object.create(Object.prototype);

console.log(co);
console.log(co2.y);
console.log(co3);

var author = book.author;
var name = book.author.suname;
var title = book["main title"];
book.edition = 6;
book["main title"] = "ECMAScript";

console.log(author);
console.log(name);
console.log(book.edition);

console.log(title);
console.log(book["main title"]);