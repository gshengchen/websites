
var s = 'test';
s.len = 4;
var t = s.len;

console.log(t); //=>undefined

 /* jshint -W053 */

var S = new String(s);



console.log(typeof s + '\n' + typeof S);