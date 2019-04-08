 /* jshint -W053*/
 var n = new Number(122);
 var n2 = Number('14x');

 console.log(n+2);
 console.log(n2);

 console.log(typeof n);
 console.log(typeof n2);

 console.log('输出Number对象的属性:');

 console.log(Number.MAX_VALUE);
 console.log(Number.NEGATIVE_INFINITY);
 console.log(Number.MIN_VALUE);
 console.log(Number.NaN);

 console.log("Number对象的方法：");
 var n3 =123456.78;
 console.log(n3.toString());
 console.log((4).toString(2));
 console.log(n3.toFixed(10));
 console.log(n3.toExponential(3));
 console.log(n3.toPrecision(5));
 console.log(n3.toLocaleString());

 //Math对象的使用

 console.log("");
 console.log("Math对象的属性：");
 console.log(Math.PI);
 console.log(Math.LN10);
 console.log(Math.LN2);
 console.log(Math.LOG10E);
 console.log(Math.LOG2E);
 console.log(Math.E);
 console.log(Math.SQRT2);
 console.log(Math.SQRT1_2);

 console.log("Math对象的方法：");

 console.log(Math.ceil(3.6)); //向上取整
 console.log(Math.floor(3.7)); //向下取整
 console.log(Math.round(3.7)); //四舍五入
 console.log(Math.round(3.27));

 console.log(Math.sin(Math.PI/2));
 console.log(Math.tan(Math.PI/4));
