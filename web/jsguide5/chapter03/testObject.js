
/* jshint -W010 */
var o = new Object();
var now = new Date();
var pattern = new RegExp("\\sjava\\s","i");

var point = new Object();
point.x = 2.3 ;
point.y = -1.2;

console.log(o);
console.log(now);
console.log(pattern);
console.log(point.x);
console.log(point.y);


var point2 = {x:14,y:1.6};
console.log(point2);

var rect={
    upperLeft:{x:2,y:2},
    lowerRight:{x:4,y:4}
};

console.log(rect);
console.log(rect.lowerRight);
console.log(rect.upperLeft.y);

var side = 6;
var square = {
    "upperLeft" : {x:point.x,y:point.y},
    'lowerRight':{x:(point.x+side),y:(point.y+side)}
};

/* jshint -W069 */
console.log(square["upperLeft"]);
console.log(square["lowerRight"]);
/* jshint +W069 */

console.log(square.lowerRight);
console.log(square.lowerRight.x);

console.log(square.toString());
console.log(square.valueOf());
