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

## 第四章 表达式与运算符

表达式（expression）是javascript中的一个短语，解释器会将其计算（evaluate）出一个结果。常量、变量都是简单表达式，将简单表达式组合成复杂表达式最常用的方法就是使用运算符（operator）。

### 4.1 原始表达式

最简单的表达式就是原始表达式，它包括常量或者直接量、变量和关键字。

### 4.2 对象和数组的初始化表达式

对象与数组初始化表达式实际是一个新创建的对象和数组。这些初始化表达式有时称做”对象直接量“和“数组直接量”。

* 数组初始化表达式计算通过方括号和其内由逗号隔开的列表构成。初始化的结果就是新创建一个数组。数组元素是用逗号分隔的表达式，对数组初始化表达式进行求值时，数组中的元素表达式也都会各自计算一次，也就是说数组初始化表达式每次计算的值可能是不同的。
* 数组直接量中的列表逗号之间的元素可以省略，这些空位用undefined填充，如果结尾有单个逗号，这是并不会创建新的undefined元素。
* 对象初始化表达式与数组类似，用大括号，每个元素子表达式都包含属性与值，它们用冒号分隔。
* 求对象表达式的值时，子表达式值都会各自计算一次，同时，对象的属性名可以是标识符，也可以是字符串。

### 4.3 函数定义表达式

函数定义表达式定义一个函数，它也可称为函数直接量。

### 4.4 属性访问表达式

属性访问表达式运算得到一个对象的属性或者一个数组元素的值，属性访问的语法：

* expression.identifer
* expression[expression]

不管是那种形式，总是先计算表达式，如果结果是null、undefined，表达式会抛出一个类型错误异常，因为它们不能包含属性；如果表示对象或者数组，将会发生类型转换。如果命名的属性不存在，整个属性访问表达式的值就是undefined。

### 4.5 调用表达式

是一种调用函数或者方法的语法表示，当对调用表达式求值时，首先计算函数表达式，在计算参数表达式，如果函数表达式的值不是一个可调用的对象，则抛出一个类型错误异常。
如果调用表达式左括号前是一个属性表达式，这个调用称做方法调用。执行函数体时，this指向本身的对象或者数组。
不是方法调用的调用表达式通常使用全局对象作为this指针的值，在严格模式中this的值是undefined。

### 4.6 对象创建表达式

创建一个对象并调用一个函数（构造函数）初始化新对象的属性，与调用表达式类似，只是前面多一个new。如果不需要传递参数给构造函数，圆括号可省略。

### 4.7 运算符概述

运算符有关键字运算符和标点符号运算符。

* 一元运算符

|运算符|操作|结合性|操作个数|类型|
|--|--|--|--|--|
|++|前/后增量|R|1|lval->num|
|--|前/后减量|R|1|lval->num|
|-|求反|R|1|num->num|
|+|转换成数字|R|1|num->num|
|~|按位求反|R|1|int->int|
|!|逻辑非|R|1|bool->bool|
|delete|删除属性|R|1|lval->bool|
|typeof|检测类型|R|1|any->str|
|void|返回undefined|R|1|any->undef|

* 算术运算符

|运算符|操作|结合性|操作个数|类型|
|--|--|--|--|--|
|*、/、%|乘、除、求余|L|2|num,num->num|
|+、-|加减|L|2|num,num->num|
|+|字符串连接|L|2|str,str->str|

* 位操作运算符（位移）

|运算符|操作|结合性|操作个数|类型|
|--|--|--|--|--|
|<<|左位移|L|2|int->int|
|>>|有符号右位移|L|2|int->int|
|>>>|无符号右位移|L|2|int->int|

* 关系运算符

|运算符|操作|结合性|操作个数|类型|
|--|--|--|--|--|
|<、<=、>、>=|比较数字/字母顺序|L|2|num/str,num/str ->bool|
|instanceof|测速对象类|L|2|obj,func->bool|
|in|判断属性是否存在|L|2|str,obj->bool|

* 关系运算符（判断相等）

|运算符|操作|结合性|操作个数|类型|
|--|--|--|--|--|
|==|判断相等|L|2|any,any->bool|
|!=|判断不等|L|2|any,any->bool|
|===|判断恒等|L|2|any,any->bool|
|!==|判断恒不等|L|2|any,any->bool|

* 位运算符、逻辑运算符、条件运算符、赋值运算符和逗号运算符(优先级从上向下)

|运算符|操作|结合性|操作个数|类型|
|--|--|--|--|--|
|&|按位与|L|2|int,int->int|
|^|按位异或|L|2|int,int->int|
|\||按位或|L|2|int,int->int|
|&&|逻辑与|L|2|any,any->any|
|\|\||逻辑或|L|2|any,any->any|
|?:|条件运算符|R|3|bool,any,any->any|
|=、*=...|赋值|R|2|lval,any->any|
|,|忽略第一操作数，返回第二操作数|L|2|any,any->any|

* 运算符副作用：如果变量和属性的表达式发生变化，就产生副作用。比如：赋值、++、--等，函数调用表达式和对象创建表达式也有副作用。
* 属性访问表达式与函数调用表达式的优先级最高，结合性L。
* 优先级与结合性规定了复杂表达式中的运算顺序，但子表达式总是按照从左到右顺序计算表达式。先计算子表达式。
* 当一个表达式有副作用时，优先计算。

### 4.8 算术运算符

* 算术运算符除了+，其他在必要时候把操作数转换成数字，如果有一个操作数是NaN，结果也是NaN。
* +运算符转换规则优先考虑字符串连接，如果操作数不是类字符串，就进行数字转换，转换结果时字符串进行字符串连接，否则进行算术相加。
* XOP（^) 同为1时为0，其他为1

### 4.9 关系表达式

关系表达式总是返回boolean。

* “===”恒等运算符，比较过程没有任何类型转换。
  * 类型不同，不相等
  * 同是null或undeined，不等。
  * 同是true、false 相等
  * 其中一个是NaNcy，或者都是NaN不等。
  * 数字0与-0 相等
  * 字符串长度，元素一样，相等
  * 同对象引用相等，不同对象不等

* “==”相等运算符，可以允许类型转换。
  * 两个操作数类型相同，则比较规则同“===”。
  * 如果一个值是null，另一个是undeined，相等。
  * 一个值是数字，另一个是字符串，先将字符串转换成数字，再比较。
  * 如果一个是对象，另一个是数字或者字符串，先进行对象转换。
  * 布尔true转换为1，false为0，再进行比较
  * 其他不同类型比较，不相等。

* 比较运算符用来检测两个操作数的大小关系（数值大小或者字母顺序）。比较操作符的操作数可以是任意类型，但只有数字和字符串才能真正比较，不是数字或者字符串都要进行转换。
* 对象转换后，如果一个操作数不是字符串，那么两个操作数都将转换为数字进行比较，如果其中一个操作数是NaN，返回总是false。比较运算符优先考虑数字，只有在两个操作数都是字符串时才进行字符串比较。
* in运算符：左操作数是字符串或者可以转换成字符串，右操作数是对象，如果右对象拥有一个名为左操作数值的属性名，表达式为真。
* instanceof运算符左操作数是对象，右操作数是类，如果左操作数是右操作数的一个实例，返回true，否则返回false。
* javascript对象都是初始化它们的构造函数来定义的，instanceof的右操作数应当是一个函数。
* 所有的对象都是Object的实例。如果instanceof的左操作数不是对象，返回false。如果右操作数不是一个函数，则抛出一个类型错误异常。

### 4.10 逻辑表达式

* 逻辑与操作数是布尔值时，两个操作数同为true时，才返回true。
* 逻辑与操作数是真值或者假值时，两个操作数同为真值时，才返回true。
* 逻辑与操作数是真值或者假值时，两个操作数同为真值时，才返回true。
* 逻辑与如果左操作数是假值的话，直接返回左操作数的值。这就叫短路。应该避免右操作数带有副作用的表达式。
* 逻辑或大多数运算与逻辑与一样做简单的布尔或运算。如果左操作数是真值的，直接返回左操作数的值。
* 逻辑非与“&&”和“||”不同，总是将其操作数转换成布尔值。

### 4.11 赋值表达式

赋值表达式的优先级低，左操作数是应该左值，右操作数是任意值，带操作的赋值运算符大多数情况下是等价的，只有在左操作数包含具有副作用的表达式时不等价。

### 4.12 表达式计算

JavaScript可以通过全局函数eval（）解释运行源代码的字符串，并产生一个值。

* 如果一个函数调用了eval，解释器将无法对这个函数优化。
* eval只有一个参数，如果参数不是字符串，直接返回这个参数。
* 如果是字符串，会被当成代码编译，编译失败抛出语法错误异常，成功就执行这个代码，返回最后表达式或者语句的值，如果没有值，返回undefined。
* eval使用了调用它的变量作用域环境。
* 规范eval的行为：直接调用eval（）时，它总是在调用它的上下文作用域内执行，其他间接调用则使用全局对象作为其上下文作用域。
* 在严格模式下，可以查询或者更改局部变量，但不能定义新的变量或者函数。

### 4.13 其他运算符

* typeof运算符，返回的是操作数类型的字符串，typeof null 返回的是object，typeof可以带上括号使用看起来像函数。
* 对所有可执行的对象返回的是function。
* delete运算符，用来删除对象的属性或者数组元素，删除后，并不仅仅设置了一个undefined值，对象属性或者数组元素将不存在，但，数组的长度没变。
* delete 希望他的操作数是左值，如果不是，delete不进行任何操作并返回true。否则，删除成功返回true。不是所有的属性都可以删除的，比如：内置核心和客户端属性、通过var声明的变量、函数和函数参数。
* 在严格模式中delete操作，只能是属性访问表达式，而且是可配置属性。
* void 操作数照常计算，但忽略计算结果并返回undefined。
* 逗号运算符，先计算左操作数，再计算右操作数，返回右操作数的值。

## 第五章 语句

语句就是以分号结束的表达式，用来执行以使某件事发生。

### 5.1 表达式语句

具有副作用的表达式是最简单的语句。调用一个没有任何副作用的函数其实没有意义的。

### 5.2 复合语句和空语句

用花括号将多个语句括起来，形成复合语句。语句块不需要分号，同时，javascript没有块级作用域。
空语句就是分号。

### 5.3 声明语句

 var 和 function都是声明语句，声明或者定义变量或者函数。

* var声明一个或者多个变量，如果没有初始化表达式，变量的初始值是undefined。
* var在for循环中声明，也会提前。
* function用来定义函数，有两种定义方法：

~~~javascript
var f = function(x){return x+2;}
function f(x){return x+2;}
~~~

* 函数定义不能出现在if语句、while循环或其他语句中。
* 函数声明语句与函数定义表达式，两者不同之处就是，var声明的函数，和var声明的变量一样，声明提前了，变量初始化代码仍然在原来位置。使用函数定义表达式，函数名称与函数体都提前了。

### 5.4 条件语句

* if/else条件语句
* switch 后跟圆括号括起来的表达式，计算这个表达式，与case子句的表达式进行“===”比较，然后break跳出switch语句。
* case子语句之后是表达式和冒号。

### 5.5 循环

四种循环：while、do/while，for，for/in。
for/in 语法 ：
for（variable inobject）
   statement
variable通常是变量名，也可以是一个产生左值的表达式或者一个通过var语句声明的变量，object是一个表达式，这个表达式的计算结果是对象。javascript会每次枚举对象的属性来执行循环，每次会先计算variable表达式的值，并将属性名赋值给它。
for/in循环只有可枚举的属性才会遍历到，如果循环体内删除了还未枚举的属性或者定义了对象的新属性，通常不会枚举到。

### 5.6 跳转

* break：跳转到循环或者其他语句的结束。
* continue语句终止本次循环并开始下次循环。
* return跳出函数体。
* throw 抛出异常。
* 标签语句有标识符和冒号组成，只有break和continue才能使用标签语句。
* try/catch/finally语句，try从句定义了需要处理的异常所在的代码块，catch从句是try块内发生异常时调用的代码，finally块总是被执行。

### 5.7 其他语句

* with语句临时扩展作用域链，执行后面的语句后，恢复作用域链。在严格模式是禁止使用with语句，非严格模式也不推荐使用。
* debugger通常什么也不做，然而，当调试程序可用并运行时，这条语句产生一个断点。
* "use strict" 放在代码或者函数开始的地方，说明后面的代码是严格代码。

## 第六章 对象

对象可以看成属性的无序集合，每个属性都是一个名/值对。也可以看成从字符串到值的映射。除了可以保持自有的属性外，还可以从一个原型对象继承的属性，这种“原型式继承（prototypal inhertitance）是JavaScript核心特征。

* 对象是动态的：可以新增属性也可删除。
* 对象是可变的，是通过引用而非值来操作对象。
* 对象最常见的用法是创建（create）、设置（set）、查找（query）、删除（delete）、检测（test）和枚举（enumerate）。
* 属性包括名字和值。属性名可以是包含空字符串在内的任意字符串，但名字不能相同。可以有setter/getter函数。
* 对象的属性除了名字/值外，还有一些相关联的值，称为属性特性（property attribute）。
  * 可写（writeable attribute），表明是否可以设置该属性的值。
  * 可枚举（enumerate attribute），是否可以通过for/in枚举。
  * 可配置（configurable attribute），是否可以删除或者修改。
ECMAScripty 5 以前，通过代码给对象创建的属性都是可写的、可枚举的和可配置的，现在则可以对这些属性进行配置。
* 对象还拥有三个相关的对象特性（object attribute）。
  * 对象的原型（prototype）指向另外一个对象，本对象的属性继承它的原型对象。
  * 对象的类（class）是一个标识对象类型的字符串。
  * 对象的扩展标志（extensible flag）是否可以向该对象添加新属性。
* 对象和属性的分类：
  * 内置对象（native object），如数组、函数、日期、正则表达式。
  * 宿主对象（host）是由JavaScript解释器所嵌入的宿主环境（比如浏览器）定义的。表示网页结构的HTMLElement对象就是宿主对象。可以当成内置对象。
  * 自定义对象，代码创建的对象。
  * 自有属性（own property）是直接在对象定义的属性。
  * 继承属性（inherited property）在对象的原型对象中定义的属性。

### 6.1 创建对象

  可以通过对象直接量、关键字new和Object.create()函数（ECMAScript 5）来创建对象。

* 对象直接量，是由一些名/值对组成的映射表，名/值用冒号分隔，各个名/值用逗号分隔，整个映射表用花括号括起来。属性名可以是标识符也可以是字符串，值是任意类型的表达式。最后一个属性的逗号将忽略。
* 对象直接量是一个表达式，这个表达式每次运算都创建并初始化一个新的对象，每次计算对象直接时也计算它的属性值。
* 通过new创建并初始化一个新对象。后面跟的是构造函数（constructor）。内置的构造函数如Object、Date、Array、RegExp等。也可以自定义构造函数来初始化新对象。
* 每个对象（null除外）都和另一个对象相关联，这个对象就是原型，每个对象都从原型继承属性。
  * 通过对象直接量创建的对象都具有同一原型，通过Object.prototype获得对原型对象的引用。
  * 通过new和构造函数创建的对象就是构造函数的prototype属性。所以new Object（）创建的对象的原型与直接量一样，new Date（）创建的对象原型是Date.prototype。
  * 没有原型的对象为数不多，Object.prototype是其中之一，它不继承任何属性。
  * 普通对象都有原型对象，所以内置的构造函数（以及大部分自定义的构造函数）都一个继承自Object.prototype的原型。如Date.prototype继承自Object.prototype,所以new Date（）创建的对象同时继承Date.prototype和Object.prototype。这些链接的原型对象就是原型链(prototype chain)。
* ECMAScript 5 定义了Object.create() 的静态函数，来创建一个新对象，第一个参数就是对象的原型。
  * 使用方法只须传入所需的原型对象即可。
  * 传入参数null来创建一个没有原型的对象。
  * 如果想创建一个普通空对象，传入Object.prototype。

### 6.2 属性的查询与设置

可以通过点（.)或者方括号（[]）运算符来获取属性值，运算符左侧是一个能返回对象的表达式，对点来说右侧以属性名称命名的简单标识符，对于方括号必须是一个计算结果为字符串的表达式或者能转换成字符串的表达式，这个字符串是属性名。
通过点或者方括号也可以创建属性或者给属性赋值，但需要把它们放在赋值的左侧。

* 使用方括号和字符串查询设置属性，看起来更像数组，只是这个数组使用的是字符串索引，这种数组就是称为关联数组。javascript对象都是关联数组。
* javascript是弱类型语言，任何对象中都可以动态添加属性。
* 使用点操作符，属性名用一个标识符来表示，标识符不是数据类型，不能动态修改。
* 使用方括号操作符，字符串是数据类型，在程序运行时可以动态修改。
* 对象有自有属性（own property），也有属性是继承来的。
* 查询对象的属性，是沿着原型链向上查询。
* 如果属性是自有属性，赋值操作只是改变属性值，如果不存在这个操作给对象添加新属性。如果有继承的属性，新属性将覆盖它。
* 属性赋值操作首先要检查原型链，来判断是否允许赋值操作。如果继承了的一个只读属性，赋值操作是不允许的。如果允许属性赋值操作，它总是在对象上创建或者赋值属性，而不会修改原型链，这是javascript的一个重要特性，该特性可以有选择地覆盖（override）继承的属性。
* 对象继承的属性，如果是一个具有setter方法的accessor属性，这时将调用setter方法来创建这个属性。
* 查询一个不存在的属性不会报错，如果对象不存在就会报错，这是因为nll、undefined的值没有属性。
* 下列设置属性会失败：
  * 属性是只读。
  * 不能在对象中覆盖只读的继承属性
  * 如果对象是不可扩展的，就不能定义新属性。

### 6.3 删除属性

* delete运算符的操作数应当是一个属性访问表达式，它只是断开属性与宿主对象的联系，而不会去操作属性中的属性。
* delete运算符只能删除自有属性，不能删除继承属性。
* delete表达式删除成功或者没有任何副作用（比如，删除不存在的属性）返回true。
* delete不能删除不可配置的属性，返回的是false。通过var声明变量和函数声明创建的全局对象的属性，就是不可配置的。
* 非严格模式下删除全局对象的属性可省略全局对象的引用，在严格模式下必须显示指定对象。

### 6.4 检测属性

对象可以看成属性的集合，判断某个属性是否存在与某个对象中，可以通过in运算符，hasOwnProperty（）、propertyIsEnumberable（）。
也可以通过属性查询来判断。

* in 运算符的左侧是属性名（字符串）右侧是对象，如果对象的自有或者继承属性中包含这个属性，则返回true。
* hasOwnProperty()方法用来检查给定的名字是否是对象的自有属性。
* propertyIsEnumerable()只有检测到自有的且可枚举的属性，返回true。
* 使用“！==” 判断一个属性是否undefined。

### 6.5 枚举属性

通常使用for/in循环遍历对象中可枚举的自有和继承的属性。对象继承的内置方法通常不可枚举。但在代码中给对象增加的属性是可枚举的。
ECMAScript 5 定义了两个静态函数，Object.keys（obj）函数，返回的数组是对象中可枚举的自有属性，Object.getOwnPropertyNames（obj）函数返回的是所有自有属性。

### 6.6 属性getter和setter

对象是有名字、值和一组特性（attribute）构成的。属性值可以用一个或者两个方法替代，这两个方法就是getter和setter。由它们定义的属性称做存取器属性（accessor property）。

* 当程序查询存取器属性的值是，调用getter方法（无参数）。返回值就是属性存取表达式的值。当设置存取器属性的值，调用setter方法将赋值表达式右侧的值作为参数传入。可以忽略setter返回值。
* 存取器属性不具备写属性，如果同时具有getter和setter方法，它就具有读/写属性，单独具有一个方法，就具有对应的属性，读取只写属性总是返回undefined。
* 存取器属性定义为一个或者两个同名的函数，函数定义不使用function而是用set/get。
* 存取器属性可以继承。

### 6.7 属性的特性

属性除了名字与值以外，还包含一些标识™可写、可枚举和可配置的特性。ECMAScipt 3 无法设置，通过程序创建的特性都是可写的、可枚举的和可配置的。ECMAScript5可以查询和配置这些特性。

* 将方法设置成o'r不可枚举，看起来更像内置方法。
* 给对象定义不可写或者不可配置的属性，可以锁定对象。
* 数据属性的4个特性包括：值（value)、可写性（writable）、可枚举性（enumerable）、可配置性（configurable）。
* 存取器属性的4个特征是：读取（get）、写入（set）、可枚举、可配置。
* 属性描述符（prooperty descriptor）对象，数据属性与存取器属性的区别就是get、set代替value、writable。其中writable、enumerable、configurable是布尔值，set、get是函数值。
* 通过调用Object.getOwnPropertyDescriptor(obj,prop)获得属性描述符对象。不能获得继承属性的特征。
* 设置属性的特性，或者想让新建的属性具有某种特性，需要调用Object.defineProperty(obj，prop,descriptor)。，传入的属性描述符不必包含4的特征，默认的特性都是false或者undefined。对于修改已有属性特征，默认的特征值没有改变。该方法不能修改继承属性。
* 同时修改或者创建多个属性，使用Object.defineProperties(obj,{映射表})。映射表包括属性名和属性描述符对象，用冒号分隔。
* 对不允许创建或修改的属性来说，使用上面的两个方法会抛出类型错误异常，可写特性，控制对值特性的修改，可配置特性控制对可配置、可枚举等其他特性（包括属性是否可以删除）的修改，完整规则如下：
  * 如果对象是不可扩展的，则，只能修改，不能增加新属性。
  * 如果属性是不可配置的，不能修改它的可配置性和可枚举性。
  * 如果存取器属性的不可配置，则不能修改其getter和setter方法，也不能将它转换为数据属性。
  * 如果数据属性不可配置的，则不能转换为存取器属性。
  * 如果数据属性是不可配置，则不能将它可写特性从false修改为true，但可以从true修改为false。
  * 如果数据属性是不可配置且不可写，不能修改它的值，但可配置不可写，能够修改属性的值（完成后状态仍然不可���）。
* getter和setter的非标准API：—_lookupGetter_()、_lookupSetter_()返回一个命名属性的getter和setter方法。_defineGetter_()、_defineSetter_()来定义，这两个函数有两个参数：第一个是属性名，第二个是函数体。

### 6.8 对象的三个属性

每个对象都有与之相关的原型（prototype）、类（class）和可扩展性（extension attribute）。

* 原型属性：对象的原型属性是用来继承属性的，非常重要，通常称为对象的原型。原型属性是在对象创建之初就设置好的。
  * 通过对象直接量创建的对象使用的是Object.prototype作为它们的原型。
  * 通过new创建的对象，使用构造函数的prototype属性作为原型。
  * 通过Object.create创建的对象，使用第一个参数（也可能是null）作为原型。
  * 在ECMAScript 5使用getPrototypeOf（obj），查询obj的原型。
  * ECMAScript 3 使用表达式obj.constructor.protoType查询。
  * 检测一个对象是否是另一个对象的原型使用obj1.isPrototypeOf(obj2)方法来检测obj1是否是obj2的原型。
  * _proto_属性可以直接查询原型，但 Opera和IE还未实现它，不推荐使用。
* 类属性是一个字符串，用以表示对象的类型信息，但javascript没有提供设置这个属性的方法，默认的toString方法返回的字符串，第8个到最后的字符串，表示就是类。但很多toString方法重写了，为了能调用正确的版本，必须使用Function.call方法。
* 对象的可扩展性表示是否可以给对象添加新的属性，所有的内置对象和自定义对象都是显式可扩展的。宿主对象的可扩展性是javascript引擎定义的。
  * 通过将对象传入Object.isExtensible(obj),来判断对象是否有扩展性。
  如果将对象转换为不可扩展的，使用方法Object.preventExtensions(obj)。一旦把对象设置成不可扩展的，就无法再将其转换回可扩展的了。
  * Object.seal()与上面类似，除了将对象设置不可扩展的，同时把所有的自有属性设置成不可配置的。对于已经封闭（sealed）的对象是不能解封的，可以使用Object.isSealed()来检测。
  * Object.freeze()可以将对象冻结（frozen），将对象设置成不可扩展，使用自有属性不可配置，所有数据属性只读，但存取器属性不受影响。使用OBject.isForzen()来检测。
  * preventEXtensions、seal、freeze都返回传入对象。

### 6.9 序列化对象

对象序列化（serialization）是指将对象的状态转化为字符串，也可以将字符串还原成对象。
JSON.stringify()和JSON.parse()来序列化和还原对象。

* JSON的全称就是JavaScript Object Notation （javascript 对象表示法）。
* JSON是javascript的子集，NaN、Infinity和-Infinity序列化的结果是null，日期对象序列化是ISO格式的日期字符串，函数、RegEXp、Error对象和undefined的值不能序列化和还原。
* JSON.stringify只能序列化对象的可枚举的自有属性。

### 6.10 对象方法

* 实例方法

Object.prototype.valueOf()：返回当前对象对应的值。
Object.prototype.toString()：返回当前对象对应的字符串形式。
Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。
Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。
Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举。

* 静态方法
Object.keys方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名。
Object.getOwnPropertyNames方法与Object.keys类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。
Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。
Object.defineProperty()：通过描述对象，定义某个属性。
Object.defineProperties()：通过描述对象，定义多个属性。
Object.preventExtensions()：防止对象扩展。
Object.isExtensible()：判断对象是否可扩展。
Object.seal()：禁止对象配置。
Object.isSealed()：判断一个对象是否可配置。
Object.freeze()：冻结一个对象。
Object.isFrozen()：判断一个对象是否被冻结。
Object.create()：该方法可以指定原型对象和属性，返回一个新的对象。
Object.getPrototypeOf()：获取对象的Prototype对象。

## 第七章 数组

数组是值的有序集合，数组元素可以是任意类型，同一数组中元素的类型也可以不同，数组的索引是32位值。数组是动态的，也可能是稀疏的，索引不一定要连续的，它们之间可能有空缺。
数组继承了Array.prototype中的属性，它定义了数组操作方法。

### 7.1 创建数组

* 使用数组直接量是创建数组最简单的方式，数组元素用逗号隔开，数组元素可以是任何表达式。
* 如果省略数组直接量中的某个值，省略的元素赋值undefined。
* 数组直接量语法允许可选的结尾逗号。
* 调用构造函数new Array（）是创建数组的另一个方法。
  * 不带参数，与数组直接量[]相同，创建空数组。
  * 有一个数值参数，它指定长度。它只是预分配空间，数组中没有存储值，甚至索引都没定义。
  * 显示指定两个或者多个数组元素，或者数组的一个非数值元素，它们变成数值元素。

### 7.2 数值元素读和写

使用方括号操作符来访问数组元素，方括号中是一个返回非负的整数值的任意表达式，使用该语法可以读又可以写数组的一个元素。
数组是对象的特殊形式，使用方括号访问数组元素和访问对象属性一样，把索引转换为字符串，对常规对象也可以这样。
数组的特别之处在于，使用32位正整数范围内的数时，数组自动维护其length值。
所有的索引都是属性名，只有在0~power（2，32）之间的正整数属性名才是索引，所有的数组都是对象，可以为其创建任意名字的属性。
如果使用的属性是索引，数组将更新它的length属性值。负数和非整数，数值转换成字符串作为属性名而不是索引来用。如果使用了非负整数的字符串(包括像1.00的数字），它就转换成数值当做数组的索引而非对象的属性。
数组不能用索引访问数组中对象的属性。

### 7.3 稀疏数组

稀疏数组就是包含从0开始的不连续索引的数组。

* 用Array构造函数指定数组的索引值大于当前的数组长度来创建稀疏数组。
* 用delete来产生稀疏数组。
* 稀疏数组比普通数组实现上慢，内存利用率高，查找元素时间是一样的。
* 在数组直接量中的省略值不会创建稀疏数组，如[,,,,],省略的元素在数组中是存在的，其值为undefined。

### 7.4 数组长度

在数组中没有一个元素的索引大于等于它的长度，如果给一个元素赋值，当它的索引大于等于现有数组长度是，length的值将设置为索引加1。
当设置length属性为一个小于当前长度的非负整数n时，当前那些索引值大于等于n的元素将删除。

* 如果使用Object.defineProperty()让属性变成只读，length属性就不能改变。
* 如果让数组元素不能配置，就不能删除它，如果不能删除它，length的值不能设置为小于不可配置元素的索引值。

### 7.5 数组元素的添加和删除

为数组添加元素的方法：

* 为新索引赋值。
* 使用push（）方法。与 arr[arr.length]等同。
* 使用unshift()在首部插入元素，并且将其他元素依次移到更高索引处。
* delete 删除元素，但不会改变length属性的值，如果用delete删除数组元素，数组变成稀疏数组。
* 可以简单地设置length属性为一个新的期望长度来删除数组尾部的元素。
* 数组的pop（）方法，可以使长度减1并返回被删除元素的值。
* shift（）方法从数组头部删除一个元素，并将其他元素下移到比当前索引低1的地方。
* splice（） 方法 插入、删除或替换数组元素，它会根据需要修改length属性并移动元素到更高或者低的索引处。

### 7.6 数组遍历

* 使用for循环来遍历数组元素。数组的长度最好只查询一次，比如给其他变量赋值。
* 如果数组使稠密的，使有的元素是合法的，否则，在使用数组之前先检测它。
* 如果
