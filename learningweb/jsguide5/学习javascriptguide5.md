# Java Script Guide 权威指南

[TOC]

## 第一章 Javascript 概述

Javascipt是一种具有面向对象能力的、解释型的程序设计语言。语法构成与C、C++、java相似。
javascript是一种松散类型的语言，就是说，它的变量不必具有一个明确的类型，Javascript中的对象把属性名映射为任意的属性值。
Javascript中的OO继承机制是基于原型的，与其他语言不相同。
Javascript的核心语言将数字、字符串和布尔值作为原始数据类型支持，还内建支持数组、日期和正则表达式对象。

### 1.1 什么是Javascript

* Javascript并非java
* Javascript并不简单

### 1.2 Javascript的版本

### 1.3 客户端Javascript

客户端JavaScript与web浏览器定义的文档对象模型（DOM）结合在一起，就可以为web内容添加行为。
Javascript是通过为文档定义事件句柄（event handle）来做出响应的。

## 第二章 词法结构

### 2.1 字符集

Javascript程序是用Unicode字符集编写的，16位的unicode编码可以表示全世界语言。

### 2.2 大小写敏感

JavaScript是一种区分大小写的语言。

### 2.3 空白符和换行符

Javascript会忽略程序中记号之间的空格、制表符和换行符。但，对换行符放置有一个限制，因为JavaScript会自动插入分号。

### 2.4 可选的分号

javascript中的简单语句后通常都有分号，主要是分隔语句。如果语句放置在不同的行，可以省略分号。

### 2.5 注释

JavaScript支持c++/c型注释。

### 2.6 直接量

直接量（literal），就是程序中直接显示出来的数值。

~~~javaScript
12
1.2
"hello world"
true
/javascript/gi  //正则表达式直接量
null // 空对象，对象缺省值
{x:1,y:2}
[1，2，3，4]
~~~

### 2.7 标识符

标识符（identifier），就是一个名字，用来表示变量、函数和循环标签。命名规则：

* 第一个字符必须是字母、下划线或者$。
* 不能是JavaScript保留字。
* 允许使用Unicode转义序列，是字符\u后接四个16进制数字。

### 2.8 保留字

Javascript中有很多关键字，它们是语言中语法的一部分，标识符应该避免使用。此外，还应该避免使用JavaScript中预定义的全局变量和全局函数。

## 第三章 数据类型和值

计算机程序是通过操作值来运行的，能够表示并操作的值的类型称为数据类型（datetype）。Javascript定义的基本数据类型：数字、字符串、布尔值、null和undefined。后面两种只定义了一个值。
复合数据类型：对象（object）。对象有两种，一个是已命名的值的无序集合，还有一种是有编号的值的有序集合（也就是数组array）。这两种是同一种数据类型（对象），但，行为却不同。
javascript还定义了另一种特殊的对象函数（function）。函数是具有可执行代码的对象，JavaScript为函数定义了专用语法。
除了函数和数组，JavaScript语言核心还定义了其他一些专用的对象。这些对象表示的不是新的数据类型，而是对象的新的类（class）。比如，Date类定义的是表示日期的对象，RegExp类定义的表示正则表达式的对象，Error类定义的表示语法错误和运行时的错误对象。

### 3.1 数字

数字（number）时最基本的数据类型，JavaScript与其他程序语言不同，它不区别整型和浮点类型。

* 整型直接量：十进制的整数。
* 八进制与十六进制的直接量：以0x开头的16进制数字串表示16进制，ECMA script并不支持八进制，但有的JavaScript实现支持八进制，以数字0开头，所以最好不要使用八进制。
* 浮点直接量：实数可以被表示为整数部分和小数部分，也可以用指数计数法来表示（e或者E）。
* 数字的使用：除了基本的算术运算外，JavaScript还采用了大量的算术函数，这些函数是语言核心的一部分。为了方便，这些函数保存咋Math对象中，可以使用直接量名Math来访问这些函数。如：

~~~javascript
sine_of_x = Math.sin(x);
hypot = Math.sqrt(x*x + y*y);
~~~

* 数值转换：JavaScript可以把数字格式化成字符串或者把字符串解析成数字。
* 特殊的数值，JavaScript还使用了一些特殊的值：

|常量|含义|
|--|--|
|Infinity|表示无穷大|
|NaN|非数字值|
|Number.MAX_VALUE|可表示的最大数|
|Number.MIN_VALUE|可表示的最小数|
|Number.NaN|特殊的非数字值|
|Number.POSTITIVE_INFINITY|表示正无穷大|
|Number.NEGATIVE_INFINITY|表示负无穷大|

相关函数isFinite（）、isNaN（）来检测。

### 3.2 字符串

字符串（string）是unicode字符、数字、标点符号等组成。javascript中没有char类型，只能用长度为1的字符串。

* 字符串的直接量；有单引号或者双引号括起来的unicode字符序列。
* 字符串中直接量中的转义序列：用反斜杠"\"后加上一个字符可以表示在字符串中无法出现的字符。

|序列|所代表的字符|
|--|--|
|\0|NULL字符(\u0000)|
|\b|退格符(\u0008)|
|\t|水平制表符(\u0009)|
|\n|换行符(\u000A)|
|\v|垂直制表符(\u000B)|
|\f|换页符(\u000C)|
|\r|回车符(\u000D)|
|\"|双引号(\u0022)|
|\'|撇号或者单引号(\u0027)|
|\ \ |反斜杠(\u005c)|
|\xXX|两位16进制XX指定的latin-1字符|
|\uXXXX|四位16进制XXXX 指定的Unicode字符|
|\XXX|1-3位八进制指定的latin-1字符，现在不支持|

* 字符串的使用：javascript的字符串内部特性,运算符“+”作用与字符串会把两个字符串连接起来；字符串的length属性，确定字符串的长度；charAt提取单个字符；substr提取子字符串。indexof查找字符位置。

~~~javascript
msg = "hello, " + "world" ;//生成字符串 hello， world
lastChar = msg.charAt(msg.length -1) ; // 生成d
sub= msg.substr(1,4);//生成ello，。
i = msg.indexOf('e');// 生成字符e的位置1;
~~~

* 把数字转换为字符串：数字会在需要的时候自动转换为字符串。

~~~javascript
var n = 100;
var s = n + "bottles of beer on the wall.";
var n = n + "";//加一个空字符串，可以把数字转换成字符串
var String_value = String(100);//用String（）显示转换成字符串。
var n2 =2018;
var strNum = n2.toString();//使用toString()方法转换。
~~~

基本的数字转换成Number对象，就可以调用toString方法，该方法有一个可选的参数，用来指定转换的基数（2-36）。

~~~javascript
var n =17;
bin_string = n.toString(2);//二进制
oct_string = "0" + n.toString(8);//八进制
hex_string = "0X" + n.toString(16);//十六进制 
~~~

JavaScript1.5版本后，Number对象增加三个函数：toFixed方法转换数字为显示参数指定的小数位的字符串；toExponential方法使用指数表示法，整数部分为1为，小数部分的位数有参数指定；toPrecision方法指定以参数的位数来显示数字，如果不能显示整个整数就使用指数表示法。以上的方法都进行适合的四舍五入。

~~~javascript
var n = 123456.789;
console.log(n.toFixed(0));// 123457
console.log(n.toFixed(2));// 123456.79
console.log(n.toExponential(1));//1.2e+5
console.log(n.toExponential(3));//1.235e+5
console.log(n.toPrecision(4));//1.235e+5
console.log(n.toPrecision(7));//123456.8
~~~


