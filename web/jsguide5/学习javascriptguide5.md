# Java Script Guide 权威指南(V5)

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

|关键字|关键字|关键字|关键字|关键字|
|--|--|--|--|--|
|break|delete|function|return|typeof|
|case|do|if|switch|var|
|catch|else|in|this|void|
|continue|false|instanceof|throw|while|
|debugger|finally|new|true|with|
|default|for|null|try|

ECMAscript保留的关键字： class、const、enum、export、extends、import、super。
在严格模式下的保留关键字： implements、let、private、public、yield、interface、package、protected、static、arguments、eval。
ECMAscript 3 将所有的java的关键字都列为保留字。javascript具体实现与运行环境同时预定义很多全局变量和函数，应当尽量避免使用它。如：arguments、encodeURI、Infinity、Number、RegExp、Array、encodeURIComponent、isFinite、Object、String、Boolean、Error、isNan、parseFloat、SyntaxError、Date、eval、JSON、parseInt、TypeError、decodeURI、EvalError、Math、RangerError、undefined、decodeURIComponent、Function、Nan、ReferenceError、URIError。

## 第三章 数据类型和值

计算机程序是通过操作值来运行的，能够表示并操作的值的类型称为数据类型（datetype）。

* Javascript定义的基本数据类型(也称原始类型primitive type）：数字、字符串、布尔值、null和undefined。后面两种只定义了一个值。

* 复合数据类型（object type）：对象（object）。对象有两种，一个是已命名的值的无序集合，还有一种是有编号的值的有序集合（也就是数组array）。这两种是同一种数据类型（对象），但，行为却不同。
javascript还定义了另一种特殊的对象函数（function）。函数是具有可执行代码的对象，JavaScript为函数定义了专用语法。
如果函数使用new运算符来初始化一个新建对象，称为构造函数，每个构造函数定义了一类（class）对象，类可以看成对象类型的子类型。
除了函数和数组，JavaScript语言核心还定义了其他一些专用的对象。这些对象表示的不是新的数据类型，而是对象的新的类（class）。比如，Date类定义的是表示日期的对象，RegExp类定义的表示正则表达式的对象，Error类定义的表示语法错误和运行时的错误对象。

* 类型的分类：类型分为原始类型和对象类型；也分为可以拥有方法的类型和不能拥有方法的类型（null，undefined不能拥有方法）；可变类型（mutable）和不可变类型（immutable），对象与数组属于可变类型，数字、字符串、布尔值、null和undefined属于不可变类型。

### 3.1 数字

数字（number）时最基本的数据类型，JavaScript与其他程序语言不同，它不区别整型和浮点类型。所有数字均用64位浮点数值表示，但在实际操作比如数组索引和位操作符是基于32位整数的。

* 整型直接量：十进制的整数。
* 八进制与十六进制的直接量：以0x开头的16进制数字串表示16进制，ECMA script并不支持八进制，但有的JavaScript实现支持八进制，以数字0开头，所以最好不要使用八进制。
* 浮点直接量：实数可以被表示为整数部分和小数部分，也可以用指数计数法来表示（e或者E）。语法表示：

~~~javascript
   [digits][.digits][(E|e)[(+|-)]digits]
~~~

* 数字的使用：除了基本的算术运算外，JavaScript还采用了大量的算术函数，这些函数是语言核心的一部分。为了方便，这些函数保存在Math对象中，可以使用直接量名Math来访问这些函数。如：

~~~javascript
sine_of_x = Math.sin(x);
hypot = Math.sqrt(x*x + y*y);
~~~

* javascript中算术运算在溢出（overflow）、下溢（underflow）或者被零整除都不会报错。上溢（overflow）返回结果是Infinity，负数上溢返回的是-Infinity；基于他们的四则运算结果仍然是Infinity/-Infinity。
* 下溢（underflow）是当运算结果无限接近0并比Javascript能表示最小值还小的时候发生，返回的结果是0，负数发生下溢时返回一个特殊的值负0，它大多数与0完全一样，除了用作除数，返回的INfinity与-Infinity不相等。
* 被0整除返回的是Infinity/-Infinity。0除以0，运算的结果是非数字值，用NaN表示。Infinity相除、负数开方或者算术运算符与不是数字或者无法转换成数字的操作数一起使用时都返回NaN。
* 数值转换：JavaScript可以把数字格式化成字符串或者把字符串解析成数字。
* 全局的特殊值：NaN、Infinity。NaN特点：它和任何值都不相等，包括自身，使用x ！=x判断。全局函数isNaN、isFinite作用类似，isNaN参数是一个非数字（比如，字符、对象等）返回true，isFinite（）参数不是NaN，【-】Infinity时返回true。
* Number对象是原始数值的包装类,在必要时,JavaScript 会自动地在原始数据和对象之间转换。可以用构造函数创建数值对象。也可以直接调用Number（x）函数，如果参数不是数字，返回NaN。

~~~javascript
  var n = new Number(122); // 返回是Number对象。
  var n2 = Number(14); // 返回是数值 14；
~~~

* Number对象的静态属性，调用方法Number.属性：

|属性|含义|
|--|--|
|Number.Infinity|表示无穷大|
|Number.NaN|非数字值|
|Number.MAX_VALUE|可表示的最大数|
|Number.MIN_VALUE|可表示的最小数|
|Number.NaN|特殊的非数字值|
|Number.POSTITIVE_INFINITY|表示正无穷大|
|Number.NEGATIVE_INFINITY|表示负无穷大|

可用相关函数isFinite（）、isNaN（）来检测。

* Number对象的方法：

|方法|说明|
|--|--|
|toString(radix)|把数字转换为字符串，使用参数指定的基数（2~36），省略参数，使用基数10。|
|toLocaleString()|把数字转换为字符串，使用本地数字格式顺序，可能影响小数点和千分位分隔符的标点符号。|
|toFixed(digits)|把数字转换为字符串，结果的小数点后有指定位数的数字。参数就是小数点的数字位数，是0~20值，如果省略参数，就是0。返回值是Number的字符串表示，小数位是digits，有必要进行舍入，也可以用0补足。如果大于1e+21，该方法调用toString（）。|
|toExponential(digits)|把对象的值转换为指数计数法。参数digits小数点后的位数（0~20），返回值是Number的指数的字符串表示，小数位是digits，必要时进行舍入，也可以用0补足。|
|toPrecision(precision)|把数字格式化为指定的长度。参数procision（1~21）。返回值是Number字符串表示，包含precision个有效位，如果precision足够大就使用小数点，否则，使用指数法。必要时进行舍入，也可以用0补足。|
|valueOf（）|返回一个Number对象的基本数字值。|

* Math对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，只有静态的属性与方法，不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。

**Math 对象属性**：

|属性|描述|
|--|--|
|E|返回算术常量 e，即自然对数的底数（约等于2.718）。|
|LN2|返回 2 的自然对数（约等于0.693）。|
|LN10|返回 10 的自然对数（约等于2.302）。|
|LOG2E|返回以 2 为底的 e 的对数（约等于 1.414）。|
|LOG10E|返回以 10 为底的 e 的对数（约等于0.434）。|
|PI|返回圆周率（约等于3.14159）。|
|SQRT1_2|返回返回 2 的平方根的倒数（约等于 0.707）。|
|SQRT2|返回 2 的平方根（约等于 1.414）。|

**Math 对象方法**：

|方法|描述|
|--|--|
|abs(x)|返回数的绝对值。|
|acos(x)|返回数的反余弦值。|
|asin(x)|返回数的反正弦值。|
|atan(x)|以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。|
|atan2(y,x)|返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。|
|ceil(x)|对数进行上舍入。|
|cos(x)|返回数的余弦。|
|exp(x)|返回 e 的指数。|
|floor(x)|对数进行下舍入。|
|log(x)|返回数的自然对数（底为e）。|
|max(x,y)|返回 x 和 y 中的最高值。|
|min(x,y)|返回 x 和 y 中的最低值。|
|pow(x,y)|返回 x 的 y 次幂。|
|random()|返回 0 ~ 1 之间的随机数。|
|round(x)|把数四舍五入为最接近的整数。|
|sin(x)|返回数的正弦。|
|sqrt(x)|返回数的平方根。|
|tan(x)|返回角的正切。|
|toSource()|返回该对象的源代码。|
|valueOf()|返回 Math 对象的原始值。|

### 3.2 字符串

字符串（string）是unicode字符、数字、标点符号等组成的一个不可变序列。javascript中没有char类型，只能用长度为1的字符串。空字符串的长度为0。
Javascript采用的是UTF-16编码的unicode字符集，字符串是由一组无符号的16位值组成的序列，最常用的Unicode字符是16位内码表示的，不能表示为16位的Unicode字符则遵循UTF-16编码规则：用两个16位值组成一个序列（代理项对）表示。意味一个长度为2的JavaScript字符串有可能表示一个Unicode字符，JavaScript定义的字符串操作方法均作用于16位值，而非字符。

* 字符串的直接量；有单引号或者双引号括起来的unicode字符序列。风格最好统一。
* 字符串中直接量中的转义序列：用反斜杠"\"后加上一个字符可以表示在字符串中无法出现的字符。
* 字符串直接量可以拆分成数行，每行用”\“结束。

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

* 字符串的使用：javascript的字符串内部特性,运算符“+”作用与字符串会把两个字符串连接起来；字符串的length属性，确定字符串的长度；charAt提取单个字符；substr提取子字符串。indexof查找字符位置。字符串可以当做只读数组，用索引来访问。

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

* 把字符串转换为数字

当字符串用在数字环境中，它会自动转换成数字。

~~~javascript
var product = '12'*'2'; // 24
var str_vaule = '1234';
var number = str_value - 0;//快速转换为数字，但不能用+；
~~~

Number对象的构造函数Number（）可以转换数字，但比较严格，虽然允许开头和结尾的空白，不能出现其他非数字字符串。
javascript全局函数parseInt、parseFloat 可以在字符串开始处转换数字，parseInt第二个参数可以指定解析的基数。

~~~javascript
parseInt('3 blind mice');//3
parseFloat('3.14 meters');//3.14
parseInt('12.51');//13
parseInt('0xFF');//255

parseInt('11',2);//3 (1*2+1)
parseInt('ff',16);//255 (15*16+15);
parseInt('077',8);//63 (7*8+7);
parseInt('077',10);//77 (7*10+7);

parseInt('$72.47');// 不能解析返回NaN

~~~

String对象是字符串的包装类，String 对象用于处理文本（字符串）。String 对象创建方法： new String()。

* String对象的属性：length 表示字符串的长度。
* String对象的方法：

|方法|描述|
|--|--|
|anchor(anchorname)|创建 HTML 锚。HTML 包装方法：strObj.anchor(anchorname)|
|big()|用大号字体显示字符串。HTML 包装方法：strObj.big()|
|blink()|显示闪动字符串。HTML 包装方法：strObj.blink()|
|bold()|使用粗体显示字符串。HTML 包装方法：strObj.bold()|
|charAt(index)|返回在指定位置的字符。用法：strObj.charAt(index)|
|charCodeAt(index)|返回在指定的位置的字符的 Unicode 编码。用法：strObj.charCodeAt(index)|
|concat(str1[,...])|连接两个或更多字符串，并返回新的字符串。用法：strObj.concat(str1[,...])|
|fixed()|以打字机文本显示字符串。HTML 包装方法：strObj.fixed()|
|fontcolor(color)|使用指定的颜色来显示字符串。HTML 包装方法：strObj.fontcolor(color)|
|fontsize(size)|使用指定的尺寸来显示字符串。size:1~7 HTML 包装方法：strObj.fontsize(size)|
|fromCharCode(code)|将 Unicode 编码转为字符。静态方法:String.fromCharCode(code)。|
|indexOf(str[,start])|返回某个指定的字符串值str在字符串中首次出现的位置,start可选。没有找到返回-1。用法:strObj.indexof(str[,start])。|
|includes(str[, start])|查找字符串中是否包含指定的子字符串str。start可选，设置从那个位置开始查找，默认为 0。找到匹配的字符串返回 true，否则返回 false。用法:strObj.includes(str[,start])。|、
|italics()|使用斜体显示字符串。HTML 包装方法：strObj.italics（）。|
|lastIndexOf(str[,start)|从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。用法同indexOf（）。|
|link(url)|将字符串显示为超链接。HTML 包装方法：strObj.link(url)。|
|localeCompare(target)|用本地特定的顺序来比较两个字符串。用法：strObj.lovaleCompare(target)。|
|match(regexp)|查找找到一个或多个正则表达式的匹配。返回Array类型的数组。 regexp没有全局标志 g，则只执行一次匹配。 没找到匹配结果返回 null 。用法：strObj.match(regexp)。|
|repeat(count)|复制字符串指定次数，并将它们连接在一起返回，count复制次数。|
|replace(regexp/substr,replacement)|在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。replacement可以是字符串，也可以是返回字符串的函数|
|search(regexp)|查找与正则表达式相匹配的值。返回位置，没找到返回-1|
|slice(start[,end])|提取字符串的片断，并在新的字符串中返回被提取的部分。start始下标,end是结尾下标但不包括，如果没有指定就到结尾。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符。|
|small()|使用小字号来显示字符串。|
|split(separator[,howmany])|把字符串分割为字符串数组。separator字符串或正则表达式，从该参数指定的地方分割，howmany可选，如指定则返回的数组元素不多于这个值。|
|startsWith(str)|查看字符串是否以指定的子字符串str开头。|
|strike()|使用删除线来显示字符串。|
|sub()|把字符串显示为下标。|
|substr(start,length)|从起始索引号提取字符串中指定数目的字符。start为，-1 指字符串中最后一个字符|
|substring(start[,stop])|提取字符串中两个指定的索引号之间的字符。start为一个非负值，stop-1为结束位|
|toLowerCase()|把字符串转换为小写。|
|toUpperCase()|把字符串转换为大写。|
|trim()|去除字符串两边的空白|
|toLocaleLowerCase()|根据本地主机的语言环境把字符串转换为小写。|
|toLocaleUpperCase()|根据本地主机的语言环境把字符串转换为大写。|
|valueOf()|返回某个字符串对象的原始值。|
|toString()|返回一个字符串。|

* 模式匹配：
  Javascript定义了RegExp（）构造函数，创建正则表达。String对象与RegExp对象均定义了利用正则表达式进行模式匹配和查找与替换函数。正则表达式的直接量是用”/“ ”/“定义的，第二个斜线可以跟随一个或者多个字母，用来修饰匹配模式的含义，如：

  ~~~javascript
   /^HTML/ //匹配以HTML开始的字符串
   /[1-9][0-9]*/ //匹配以非0数字开头的任意个数字
   /\bjavascript\b/i //匹配单词javascript忽略大小写
   var text = "testing: 1, 2, 3";
   var pattern = /\d+/g;
   pattern.test(text);
   text.search(pattern);
   text.match(pattern);
   text.replace(pattern,"#");
   text.split(/\D+/);
    ~~~

### 3.3 布尔值

布尔数据类型只有两个值：true、false，布尔值通常是javascript程序中比较的结果，主要用于JavaScript的控制结构。
布尔类型转换：布尔值很容易转换，往往是自动转换。

* 在数字环境中，true转换为1，false为0；在字符串环境中，true转换为“true”，false转换为“false”；
* 在布尔值环境中，数字0和NaN转换为false，其他为true；
* 布尔值环境中，空字符串为false，其他为true
* 空值和未定义的值为false，任何非空的对象、数组、函数转换为true。
* 如果让类型转换为显示的，使用Boolean（）函数，或者，对使用布尔非运算两次。

~~~javascript
var x_as_boolean = Boolean(x);
var x_as_boolean = !!x;
~~~

### 3.4 函数

函数（function）是一个可执行的代码段，由javascript程序定义或Javascript实现的预定义。
函数的特性：

* 可以带实际参数或形式参数
* 可以由一个返回结果
* 函数是一种数据类型是，真正的数值，可以存储在变量、数组、对象中，也可以作为参数传递给其他函数
* 如果一个函数赋给某个对象的属性时，它通常作为那个对象的方法来引用。

函数定义方法：

~~~javascript
//方法一
function square(x){
    return x*x;
}

//方法二，直接量
var square = function (x){return x*x;};

//方法三，直接量，构造函数方式

var square = Function('x','return x*x');
~~~

### 3.5 对象

对象（object）是已命名的数据的集合。这些已命名的数据通常被作为对象的属性来引用。引用方法就是先引用对象，在其后加实心点和要引用的属性。

* 对象的属性与javascript变量相似，属性可以是任何数据类型，包括数组、函数和其他对象。如：document.myform.button
* 如果一个函数值是存储在某个对象的属性中，那么此函数通常称为方法，属性名也就是方法名。如：document.write('this is a test')。
* JavaScript中的对象可以作为关联数组使用，包含属性名的字符串作为下标来访问属性值。如：image["width"]、image["height"]。
* 创建对象：对象通过特殊的构造函数创建的。

~~~javascript
var o = new Object();
var now = new Date();
var pattern = new RegExp("\\sjava\\s","i");

var point = new Object();
point.x = 2.3 ;
point.y = -1.2;
~~~

* 对象直接量，也称对象初始化程序，是由一个列表构成的，列表元素是用“：”分隔的属性/值对，元素之间用逗号隔开，整个列表包含在花括号中。

~~~javascript

var point = {x:14,y:1.6};
~~~

* 对象直接量可以嵌套。

~~~javascript
var rect={
    upperLeft:{x:2,y:2},
    lowerRight:{x:4,y:4}
}
~~~

* 对象直接量的属性值，不比是常量，可以是任何的表达式，属性名也可以是字符串。

~~~javascript
var square = {
    "upperLeft" : {x:point.x,y:point.y},
    'lowerRight':{x:(point.x+side),y:(point.y+side)}
}
~~~

* 对象转换：

1. 非空对象用于布尔环境，它转换为true。
2. 对象用于字符串环境，调用toString方法，返回字符串值。
3. 对象用于数字环境，对象首先调用valueOf方法，返回一个基本类型值，然而，valueOf方法大多数返回的是对象自己，在这个情况下，通常先调用toString方法返回一个字符串，再试图转换成数字值。

### 3.6 数组

数组（Array）和对象一样是数组的集合，对象中每个数值都有名字，而数组只能靠下标访问。下标的数值是从0开始的一个非负整数。
数组可以存储任何一种javascript数据类型，数组元素不必具有相同的数据类型，同时也不支持多维数组，不过，数组元素可以是数组。

* 数组的创建，可以使用构造函数Array来创建数组：

~~~javascript
var a = new Array();
a[0] =1.2;
a[1] = "Javascript";
a[2] = true;
a[3] = {x:1,y:2};
~~~

* 通过把数组元素传递给Array构造函数可以初始化数组：

~~~javascript
var a2 = new Array(1.2,"javascript",true,{x:2,y:2});
~~~

* 如果只向Array构造函数传递一个参数，那么该参数指定的是数组的长度。

~~~javascript
var a3 = new Array(10);
~~~

* 数组直接量，是一个封闭在方括号内的序列，数组元素不必仅限是常量，可以是任意表达式，同时还可以存放未定义的元素。

~~~javascript
var a4 = [1,23,"chen",{x:34,y:12}];
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
var base = 1024;
var table = [base,base+2,base+4];
var sparseArray = [1,,,,5];
~~~

### 3.7 NULL

javascript关键字NULL是一个特殊的值，表示无值。常常看作对象类型的一个特殊值即代表无对象的值（即空对象引用）。null有别与其他所有的值，表示不是有效的数字、字符串、布尔、对象、数组和函数。

* null用于布尔环境，转换成false。
* null用于数字环境，转换为0。
* null用于字符串环境，转换为“null”。
* 用typeof检查类型返回object。
* 主动释放一个变量引用的对象，表示一个变量不再指向任何对象地址。
* 当使用完一个比较大的对象时，需要对其进行释放内存时，设置为 null。

### 3.8 undefined

使用一个未声明的变量时，或者使用了已经声明但没有赋值的变量时，又或者使用一个不存在的对象属性时，返回的值就是undefined。
在 JavaScript 中, undefined 是一个没有设置值的变量。typeof 一个没有值的变量会返回 undefined。

* null 和 undefined 的值相等，但类型不等。typeof null 返回object，typeof undefined 返回undefined。
* undefined用于布尔环境，转换为false。
* undefined用于数字环境，转换为NaN。
* undefined用于字符串环境，转换为undefined。
* undefined 表示系统级的、出乎意料的或者错误的值的空缺，null表示程序级的，正常的或在意料之中的值的空缺。如果赋值给变量、属性或者作为参数传入参数，最佳选择是null。

### 3.9 全局对象

全局对象（global object）是解释器启动时，将创建一个全局对象，并给它一组定义的初始属性：

* 全局属性：undefined、Infinity、NaN等。
* 全局函数：isNaN、isfinite、pasreInt、pasreFloat和eval等。
* 构造函数：Date、RegExp、String、Number、Object、Array、Function等。
* 全局对象：Math、JSON
* 对于客户端JavaScript，Window对象定义了一些额外的全局属性。
* 不在任何函数内的javascript代码，可以使用this来引用全局对象。
* 在客户端javascript中，在其表示的浏览器窗口中所有代码中，Window对象充当了全局对象，这个全局对象有一个属性window引用其自身。Window对象定义了核心全局属性，也针对浏览器和客户端javascript定义了其他全局属性。
* 如果在代码中声明一个全局变量，这个变量就是全局对象的一个属性。

### 3.10 包装对象、Date对象

存取字符串、数字或布尔值属性时创建的临时对象称做包装对象，也可以用构造函数来显示创建包装对象，用typeof运算符可以看出原始值与其包装对象的不同。

JavaScript提供了表示日期和时间的对象类，可以用来操作此类型的数据。

* 创建Date对象：用Date构造函数创建对象。有四种形式：

 1. new Date（），返回当前的日期与时间；
 2. new Date(milliseconds),返回日期是距1970.1.1 0：0：0（UTC）的milliseconds毫秒；
 3. new Date（DateString），声明了日期与时间字符串；
 4. new Date(y,m,d,h,m,s,ms),除了y与m，其他可省略，使用本地时间，而不是UTC，除了年与天数，其他参数从0开始。

~~~javascript
var now = new Date(); //当前日期与时间
var xmas = new Date(2018,11,17);//年、月（0-11）、日、小时（0-23）、分钟(0-59)、秒(0-59)、毫秒(0-999)
var d1 = new Date(1000000000);//从1970.1.1 过去的毫秒数
var d2 = new Date('2018-11-22 06:18:00');// 日期字符串

~~~

* 使用Date对象的方法，可以得到与设置日期与时间的值。

|方法|描述|
|--|--|
|Date()|返回当日的日期和时间字符串。直接调用|
|getTime()|返回 1970 年 1 月 1 日至今的毫秒数。|
|getTimezoneOffset()|返回本地时间与格林威治标准时间 (GMT) 的分钟差。|
|get[UTC]Date()|从 Date 对象返回月中的[世界时的]一天 (1 ~ 31)，无参数。|
|get[UTC]Day()|从 Date 对象返回周中的[世界时的]一天 (0 ~ 6)，无参数。|
|get[UTC]Month()|从 Date 对象返回[世界时的]月份 (0 ~ 11)，无参数。|
|get[UTC]FullYear()|从 Date 对象返回四位数的[世界时的]年份，无参数。|
|get[UTC]Hours()|返回 Date 对象的[世界时的]小时 (0 ~ 23)，无参数。|
|get[UTC]Minutes()|返回 Date 对象的[世界时的]分钟 (0 ~ 59)，无参数。|
|get[UTC]Seconds()|返回 Date 对象的[世界时的]秒钟 (0 ~ 59)，无参数。|
|get[UTC]Milliseconds()|[世界时]返回 Date 对象的毫秒(0 ~ 999)。|
|getYear()|用getFullYear（）代替。|
|parse(date)|返回1970年1月1日午夜到指定日期（字符串）的毫秒数，静态方法，参数是含有要解析日期与时间的字符串。|
|setTime(milliseconds)|以毫秒设置 Date 对象，参数是毫秒数，返回的就是参数的毫秒数。|
|set[UTC]Date(day_of_month)|[根据世界时]设置 Date 对象中月份的一天 (1 ~ 31)，返回毫秒数。|
|set[UTC]Month(month[,day])|[根据世界时]设置 Date 对象中的月份 (0 ~ 11),可选月份的一天（1~31）。|
|set[UTC]FullYear(year[,month[,day]])|[根据世界时]设置 Date 对象中的年份（四位数字）。|
|setYear()|用setFullYear()代替。|
|set[UTC]Hours(h[,m[,s,[ms]]])|[根据世界时]设置 Date 对象中的小时 (0 ~ 23)。|
|set[UTC]Minutes(m[,s[,ms]])|[根据世界时]设置 Date 对象中的分钟 (0 ~ 59)。|
|set[UTC]Seconds(s[,ms])|[根据世界时]设置 Date 对象中的秒钟 (0 ~ 59)。|
|set[UTC]Milliseconds(ms)|[根据世界时]设置 Date 对象中的毫秒 (0 ~ 999)。|
|toSource()|返回该对象的源代码。|
|to[UTC]String()|[世界时]把 Date 对象转换为字符串。|
|toTimeString()|把 Date 对象的时间部分转换为字符串。|
|toDateString()|把 Date 对象的日期部分转换为字符串。|
|toGMTString()|请使用 toUTCString() 方法代替。|
|toLocaleString()|根据本地时间格式，把 Date 对象转换为字符串。|
|toLocaleTimeString()|根据本地时间格式，把 Date 对象的时间部分转换为字符串。|
|toLocaleDateString()|根据本地时间格式，把 Date 对象的日期部分转换为字符串。|
|UTC(y,mon,d,h,m,s,ms)|根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。除了h和mon，其他是可选的。是静态方法，返回值同parse（）。参数的值是UTC，而构造函数Date是本地时间。|
|valueOf()|返回 Date 对象的原始值。|

### 3.11 不可变的原始值和可变的对象引用

Javascript中的原始值（undefined、null、boolean、string、number）与对象（包括array、function）根本的区别是：原始值不可更改，对象是可变的。

* 基本类型比较是值比较，只有它们的值相等时它们才相等。字符串只有它们的长度相等且每个索引的字符都相等时，它们就相等。
* 对象时可变的。对象（包括数组、函数等），即使包含同样的属性和相同的值，它们也是不相等的。
* 通常对象称为引用类型（reference type），对象值都是引用，对象的比较均是引用的比较，当它们引用同一基对象时，它们才相等。
* 如果想得到一个对象的副本，必须显示复制对象的每个属性和值或者数组的每个元素。
* 如果比较两个单独的对象或者数组，则必须比较它们的属性或者元素。

### 3.12 类型转换

JavaScript取值类型非常灵活，它将根据需要自行转换。

|值|字符串|数字|布尔值|对象|
|--|--|--|--|--|
|undefined|“undefined“|NaN|false|throws TypeError|
|null|”null”|0|false|throws TypeError|
|true|“true”|1| |new Boolean（true）|
|false|”false“|0||new Boolean（false）|
|""（空字符）||0|false|new String（'')|
|"1.2"(非空，数字)||1.2|true|new String（"1.2")|
|"one"||NaN|true|new String("one")|
|0|"0"||false|new Number(0)|
|-0|"0"||false|new Number(-0)|
|NaN|"NaN"||false|new Number(NaN)|
|Infinity/-Infinity|"Infinity"/"-Infinity"||true|new String(Infinity/-Infinity)|
|1|"1"||true|new Number(1)|
|{}(任意对象)|参考后面|参考后面|true||
|[]（任意数组）|""|0|true||
|[9]（1个数字元素）|"9"|9|true||
|['a']（其他数组）|使用join（）方法|NaN|true||
|function（）{}|参考后面|NaN|true||

* 原始值到对象的转换调用构造函数，转换成包装类。
* null、undefined用在需要对象的地方会产生一个类型错误的异常，不会执行正常的转换。
* 一个值转换成另一个值，并不意味两个值相等，”==“运算符从不试图将操作数转换成布尔值。
* 显示转换，为了使代码变得清晰易读或者其他原因而做显示转换，显示转换最简单的方法是使用Boolean（）、Number（）、String（）和Object（）函数。
* 除了null、undefined之外的任何值都具有toString方法，返回的结果与String（）一致，Object（）函数转换null、undefined类型不会抛出异常，而是返回一个新的空对象。
* 某些运算符会做隐式的类型转换，有时用于类型转换。如，”+”运算符的一个操作数是字符串，它将另一个操作数转换成字符串；一元+运算符可以将操作数转换成数字，同样求反！运算符将操作数转换成布尔值并取反。

~~~javascript
x+"" //等价于String（x）
+x //等价于Number（x），也可以写成x-0
！！x //等价于Boolean（x）
~~~

* javascript 提供了更加精确的数字到字符串的转换，Number类定义了toString、toFixed、toExponential 和 toPrecision方法来进行数字到字符串的转换。
* 字符串到数字的转换，Number（）只能基于10进制，同时不能出现非数字字符。而全局函数parseInt（）和parseFloat（）更加灵活。

~~~javascript
  parseInt("3 bnnnb"); //=> 3
  parseFloat("3.14 pi  "); //=>3.14
  parseInt("-12.34"); // => -12
  parseInt("0xff"); //=> 255
  parseInt(".1"); //NaN 整数不能以.开始。
  parseFloat("$12.34"); //NaN

  //parseInt 可选的第二个参数指定数字组合的基数
  parseInt("11",2);//=> 3
  parseInt("077",8); //=>63
 ~~~

* 对象到布尔值的转换，所有对象都转换为true。
* 对象到数字与字符串的转换都是提供待转换对象的一个方法来完成的。
* toString返回一个反映该对象的字符串，默认并不返回一个有趣值。

~~~javascript
  （{x:1,y:2}).toString();//=> "[object Object]"
~~~

* 很多类定义了更多特定版本的toString方法，数组类的toString方法将每个数组转换成字符串，并在元素之间加逗号后合并成结果字符串。
* 函数类toString方法返回的是函数的代码。
* Date类 toString方法返回的是日期字符串。
* RegExp类 toString返回的是正则表达式直接量字符串。
* valueOf方法，如果存在原始值，对象就转换成原始值。但大多数对象无法表示为原始值，所以默认的返回对象的本身。数组、函数和正则表达式简单继承这个默认方法，而日期类则返回1970.1.1以来的毫秒数。
* 对象到字符串转换的步骤：
  * 调用toString方法，返回原始值，将这个值转换成字符串。
  * 如果没有toString方法或者不能返回原始值，则调用valueOF方法，返回原始值，将这个值转换成字符串。
  * 如果无法从toString或者valueOf获得原始值，它将抛出一个类型错误异常
* 对象到数字的转换，只不过先调用的是valueOf，其他同到字符的转换一样。
* "+"运算符如果它的其中一个操作数是对象，将使用特殊的方法将对象转换成原始值。"=="运算符类似，而其他算术运算符使用对象到数字的转换，如果将对象与一个原始值比较，则转换会遵照对象到原始值的转换方式进行。
* "+""=="应用的对象到原始值的转换包含Date对象的特殊情形：日期对象则使用对象到字符串的转换模式，返回的原始值被直接使用，不再强制转换。非日期对象都是对象到数字的转换模式。不管得到的原始值是否直接使用，都不会再强制转换。关系运算符也是执行这一特殊规定。
* 其他运算符没有特殊规定。

### 3.13 变量声明

使用变量前应当声明，变量是使用关键字var来声明的。如果未在var声明语句中指定初始值，它初始值就是undefined。

* 重复声明是合法的。
* 如果试图读取一个没有声明的变量会报错，在严格模式中，给一个未声明的变量赋值也会报错，但在非严格模式下，实际上会给全局对象创建一个同名属性。不管怎样，应该使用var声明变量。

### 3.14 变量的作用域

一个变量的作用域（scope）是程序源代码中定义这个变量的区域。

* 全局变量拥有全局作用域，局部变量的作用域是局部的，函数参数也是局部变量，只在函数体又定义。
* 在函数体内，局部变量的优先级高于同名的全局变量。
* Javascript 没有块级作用域，只有函数作用域：变量在声明它们的函数体及这个函数嵌套的任意函数体内都有定义。
* 函数作用域是指在函数内声明的所有变量在函数体内始终是可见的，这意味着声明在声明之前甚至可用，这个特性称为声明提前（hoisting）。函数声明的所有变量（但不涉及赋值）都被提前到函数体顶部。
* 应该把变量声明放在函数体顶部。
* 当使用var声明一个变量时，创建这个属性是不可配置的，也就是说无法通过delete运算符删除，如果在非严格模式下给未声明的变量赋值，会自动创建一个可配置的全局变量。同this关键字创建的全局变量也是可配置的。
* 全局变量是全局对象的属性，局部变量可以当作跟函数调用相关的某个对象的属性。该对象称为”调用对象（call object）“或者”声明上下文对象（declarative environment record）“。
* JavaScript允许this关键字来应用全局对象，却没有方法可以引用存放局部变量的对象。
* 每一段代码都有一个与之关联的作用域链（scope chain），这个作用域链是一个对象列表或者链表。查找变量就是向上查找在链表上对象的属性，如果作用域链上不存在这个属性将抛出引用（ReferenceErroe）异常。
* 当定义一个函数时，它实际上保存一个作用域链，当调用这个函数时，它创建一个新的对象来存储它的局部变量，并将这个对象添加至保存的那个作用域链上，同时，创建一个新的表示函数调用作用域的链。对于嵌套函数来说，每次调用外部函数时，内部函数又会重新定义一次，因为每次调用外部函数时，作用域链都是不同的。
* 作用域链这个数组可以分成两部分：第一个元素就是本函数的变量对象
后面的所有元素都是上层上下文的变量对象（按照由近到远的顺序排列），所有上层上下文的链叫做[[Scope]]。
第一部分是在函数执行之前创建的。第二部分其实在函数声明的时候就已经确定了，[[Scope]]是函数的一个属性，从函数声明到函数销毁一直存在，且不会改变，决定上层上下文的是函数在哪里声明，而不是函数在哪里调用。因此，本函数的变量对象一旦创建好，执行引擎就可以合并[[Scope]]，创建出一个作用域链了。
