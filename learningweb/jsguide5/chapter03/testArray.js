
/* jshint -W009 */
var a = new Array();
a[0] =1.2;
a[1] = "Javascript";
a[2] = true;
a[3] = {x:1,y:2};

console.log(a);
console.log(a[1]);


var a2 = new Array(1.2,"javascript",true,{x:2,y:2});
console.log(a2);
console.log(a2[2]);

var a3 = new Array(10);
console.log(a3);

var a4 = [1,23,"chen",{x:34,y:12}];
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
var base = 1024;
var table = [base,base+2,base+4];
var sparseArray = [1,,,,5];

console.log(a4);
console.log(a4[3]);

console.log(matrix);
console.log(matrix[1]);

console.log(table[2]);

console.log(sparseArray);
console.log(sparseArray[12]);
console.log(sparseArray[2]);
